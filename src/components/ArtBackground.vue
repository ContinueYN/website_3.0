<template>
  <canvas
    ref="canvasRef"
    class="particle-canvas"
    aria-hidden="true"
    :style="canvasStyle"
  ></canvas>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'
import type { CSSProperties } from 'vue'

/**
 * ArtBackground —— 油画家式背景「湖畔昼夜」
 *
 * 浅色「晨曦湖岸」Morning by the Lake
 *   · 晨雾中的叠嶂山峦 + 洒金的晨光 + 缓缓漂移的云
 *   · 下方是平静的湖面 —— 鼠标划过水面即泛起涟漪、留下粼光尾迹，
 *     浮光尘埃被波前轻轻推开
 *
 * 深色「星月夜」Starry Night
 *   · 圆润的旋涡星涡（螺旋星臂 + 明亮核心，整图烘焙、缓缓旋转）
 *   · 斜贯夜空的银河星尘带 + 满月 + 画出来般的大星星 + 山脚暖灯村落
 *   · 油画尾迹的流星雨（带碎屑星尘），鼠标扫过溅起星屑
 *
 * 性能设计
 *   · 渐变 / 光晕 / 波环 / 月亮 / 流星尾迹 / 星晕 → 全部预烘焙为离屏贴图
 *   · 天空、山峦、村落、星野等静态层一次性绘制，每帧整层贴回
 *   · DPR 上限 1.75；数量上限 + 距离节流；prefers-reduced-motion 自动降级
 */

interface Props {
  particleCount?: number
  connectDistance?: number
  isDark?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  particleCount: 80,
  connectDistance: 100,
  isDark: false
})

// ---------- 画布基础 ----------
const canvasRef = ref<HTMLCanvasElement | null>(null)
const canvasStyle = computed<CSSProperties>(() => ({
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  zIndex: '-1',
  pointerEvents: 'none'
}))

let ctx: CanvasRenderingContext2D | null = null
let rafId = 0
let cssW = 0
let cssH = 0
let dpr = 1
let time = 0
let lastTs = 0

const isSwitching = ref(false)

const REDUCED = typeof window !== 'undefined' && window.matchMedia
  ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
  : false

// ---------- 工具 ----------
const rand = (a: number, b: number) => a + Math.random() * (b - a)
const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v))
const lerp = (a: number, b: number, t: number) => a + (b - a) * t

function pick<T>(arr: readonly T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]!
}

function hexRgb(hex: string): [number, number, number] {
  const h = hex.replace('#', '')
  return [
    parseInt(h.slice(0, 2), 16),
    parseInt(h.slice(2, 4), 16),
    parseInt(h.slice(4, 6), 16)
  ]
}

function rgba(hex: string, a: number): string {
  const [r, g, b] = hexRgb(hex)
  return `rgba(${r}, ${g}, ${b}, ${a})`
}


// ============================================================
//  贴图烘焙（sprite）—— 一切渐变与光晕只创建一次
// ============================================================
const spriteCache = new Map<string, HTMLCanvasElement>()

function makeSprite(size: number, draw: (x: CanvasRenderingContext2D, n: number) => void): HTMLCanvasElement {
  const c = document.createElement('canvas')
  c.width = size
  c.height = size
  const x = c.getContext('2d')
  if (x) draw(x, size)
  return c
}

/** 柔光圆 */
function glowSprite(color: string, size = 128): HTMLCanvasElement {
  const key = `glow:${color}:${size}`
  let s = spriteCache.get(key)
  if (s) return s
  s = makeSprite(size, (x, n) => {
    const g = x.createRadialGradient(n / 2, n / 2, 0, n / 2, n / 2, n / 2)
    g.addColorStop(0, rgba(color, 1))
    g.addColorStop(0.28, rgba(color, 0.5))
    g.addColorStop(1, rgba(color, 0))
    x.fillStyle = g
    x.fillRect(0, 0, n, n)
  })
  spriteCache.set(key, s)
  return s
}

/** 水波环：中心柔光 + 三层软波环（最外环即波前亮边） */
function ringSprite(color: string, size = 256): HTMLCanvasElement {
  const key = `ring:${color}:${size}`
  let s = spriteCache.get(key)
  if (s) return s
  s = makeSprite(size, (x, n) => {
    const c = n / 2
    const g = x.createRadialGradient(c, c, 0, c, c, n * 0.22)
    g.addColorStop(0, rgba(color, 0.3))
    g.addColorStop(1, rgba(color, 0))
    x.fillStyle = g
    x.fillRect(0, 0, n, n)
    const rings = [
      { f: 0.24, w: 3.0, a: 0.12 },
      { f: 0.33, w: 4.0, a: 0.24 },
      { f: 0.42, w: 5.5, a: 0.45 }
    ]
    x.lineCap = 'round'
    for (const r of rings) {
      x.strokeStyle = rgba(color, r.a)
      x.lineWidth = r.w
      x.beginPath()
      x.arc(c, c, n * r.f, 0, Math.PI * 2)
      x.stroke()
    }
  })
  spriteCache.set(key, s)
  return s
}

/** 云朵：几团交叠的软椭圆 */
let cloudSprite: HTMLCanvasElement | null = null
function getCloudSprite(): HTMLCanvasElement {
  if (cloudSprite) return cloudSprite
  cloudSprite = document.createElement('canvas')
  cloudSprite.width = 320
  cloudSprite.height = 140
  const x = cloudSprite.getContext('2d')
  if (!x) return cloudSprite
  const blobs: Array<[number, number, number, number]> = [
    [120, 74, 90, 42],
    [200, 68, 70, 36],
    [60, 80, 55, 32],
    [255, 84, 45, 30],
    [160, 58, 60, 30]
  ]
  for (const [bx, by, brx, bry] of blobs) {
    const g = x.createRadialGradient(bx, by, 0, bx, by, brx)
    g.addColorStop(0, 'rgba(255,255,255,0.85)')
    g.addColorStop(0.7, 'rgba(255,255,255,0.35)')
    g.addColorStop(1, 'rgba(255,255,255,0)')
    x.save()
    x.translate(bx, by)
    x.scale(1, (bry ?? 30) / (brx ?? 40))
    x.translate(-bx, -by)
    x.fillStyle = g
    x.beginPath()
    x.arc(bx, by, brx, 0, Math.PI * 2)
    x.fill()
    x.restore()
  }
  return cloudSprite
}

/** 满月：温润月盘 + 油彩光晕 */
let moonSprite: HTMLCanvasElement | null = null
function getMoonSprite(): HTMLCanvasElement {
  if (moonSprite) return moonSprite
  const n = 360
  moonSprite = makeSprite(n, (x, s) => {
    const c = s / 2
    const mr = s * 0.21

    // 大范围柔光
    const halo = x.createRadialGradient(c, c, mr * 0.5, c, c, s * 0.5)
    halo.addColorStop(0, 'rgba(253, 230, 160, 0.34)')
    halo.addColorStop(0.4, 'rgba(253, 230, 160, 0.13)')
    halo.addColorStop(1, 'rgba(253, 230, 160, 0)')
    x.fillStyle = halo
    x.fillRect(0, 0, s, s)

    // 油彩般的光晕环（两层，不均匀叠色）
    x.lineCap = 'round'
    x.strokeStyle = 'rgba(253, 235, 175, 0.16)'
    x.lineWidth = 5
    x.beginPath()
    x.arc(c, c, s * 0.33, 0, Math.PI * 2)
    x.stroke()
    x.strokeStyle = 'rgba(253, 235, 175, 0.09)'
    x.lineWidth = 8
    x.beginPath()
    x.arc(c, c, s * 0.4, 0, Math.PI * 2)
    x.stroke()

    // 月盘
    const g = x.createRadialGradient(c - mr * 0.25, c - mr * 0.3, mr * 0.1, c, c, mr)
    g.addColorStop(0, '#fffef7')
    g.addColorStop(0.65, '#fdf0c8')
    g.addColorStop(1, '#f3cf7a')
    x.fillStyle = g
    x.beginPath()
    x.arc(c, c, mr, 0, Math.PI * 2)
    x.fill()

    // 画家笔触的月海斑点
    x.globalAlpha = 0.14
    x.fillStyle = '#d9a94e'
    const craters: Array<[number, number, number]> = [
      [c - mr * 0.28, c - mr * 0.12, mr * 0.16],
      [c + mr * 0.18, c + mr * 0.24, mr * 0.13],
      [c + mr * 0.32, c - mr * 0.3, mr * 0.09],
      [c - mr * 0.05, c + mr * 0.38, mr * 0.07]
    ]
    for (const [px, py, pr] of craters) {
      x.beginPath()
      x.arc(px, py, pr, 0, Math.PI * 2)
      x.fill()
    }
    x.globalAlpha = 1

    // 月盘边缘提亮
    x.strokeStyle = 'rgba(255, 250, 225, 0.5)'
    x.lineWidth = 1.5
    x.beginPath()
    x.arc(c, c, mr * 0.98, 0, Math.PI * 2)
    x.stroke()
  })
  return moonSprite
}

/** 「画出来」的大星星：辉光 + 油彩同心晕环 */
function paintedStarSprite(color: string, size = 256): HTMLCanvasElement {
  const key = `pstar:${color}:${size}`
  let s = spriteCache.get(key)
  if (s) return s
  s = makeSprite(size, (x, n) => {
    const c = n / 2
    const g = x.createRadialGradient(c, c, 0, c, c, n * 0.48)
    g.addColorStop(0, rgba(color, 0.9))
    g.addColorStop(0.25, rgba(color, 0.4))
    g.addColorStop(1, rgba(color, 0))
    x.fillStyle = g
    x.fillRect(0, 0, n, n)
    x.strokeStyle = rgba(color, 0.3)
    x.lineWidth = 1.6
    x.beginPath()
    x.arc(c, c, n * 0.3, 0, Math.PI * 2)
    x.stroke()
    x.strokeStyle = rgba(color, 0.16)
    x.lineWidth = 1
    x.beginPath()
    x.arc(c, c, n * 0.38, 0, Math.PI * 2)
    x.stroke()
  })
  spriteCache.set(key, s)
  return s
}



/** 离屏全幅画布 */
function makeFullLayer(): HTMLCanvasElement | null {
  const c = document.createElement('canvas')
  c.width = Math.max(1, Math.round(cssW * dpr))
  c.height = Math.max(1, Math.round(cssH * dpr))
  const x = c.getContext('2d')
  if (!x) return null
  x.setTransform(dpr, 0, 0, dpr, 0, 0)
  return c
}

// ============================================================
//  浅色「晨曦湖岸」—— 山峦 + 晨光 + 湖面涟漪
// ============================================================
interface Cloud {
  x: number
  y: number
  s: number
  vx: number
}
interface Caustic {
  x: number
  y: number
  r: number
  vx: number
  vy: number
  phase: number
  color: string
  alpha: number
}
interface Mote {
  x: number
  y: number
  r: number
  vx: number
  vy: number
  phase: number
  phaseSpeed: number
  color: string
  alpha: number
  depth: number
}
interface Ripple {
  x: number
  y: number
  r: number
  speed: number
  alpha: number
  maxR: number
  seed: number
}
interface Wake {
  x: number
  y: number
  life: number
}

const MOTE_COLORS = ['#ffd27a', '#8ee8e0', '#f5b5c8', '#b7e9a8', '#a9c8f0']
const CAUSTIC_COLORS = ['#fff1c4', '#bff0e8', '#ffd9a0']

let lightSky: HTMLCanvasElement | null = null
let clouds: Cloud[] = []
let caustics: Caustic[] = []
let motes: Mote[] = []
let ripples: Ripple[] = []
let wake: Wake[] = []
let ambientTimer = 0
let lakeTop = 0.66 // 湖面起始高度（相对画布高）

/** 晨光天空 + 叠嶂山峦 + 湖面（一次性烘焙的静态层） */
function buildLightSky() {
  const c = makeFullLayer()
  if (!c) return
  const x = c.getContext('2d')!
  const w = cssW
  const h = cssH
  lakeTop = 0.66

  // 天空：奶油白 → 雾青 → 桃色地平线
  const sky = x.createLinearGradient(0, 0, 0, h * 0.72)
  sky.addColorStop(0, '#fdf9f0')
  sky.addColorStop(0.45, '#e7f3f1')
  sky.addColorStop(0.72, '#fcecd9')
  x.fillStyle = sky
  x.fillRect(0, 0, w, h * 0.74)

  // 晨光（右上，与深色的月亮同位置 = 昼夜呼应）
  const sunX = w * 0.78
  const sunY = h * 0.17
  const sunR = Math.min(w, h) * 0.4
  const sun = x.createRadialGradient(sunX, sunY, 0, sunX, sunY, sunR)
  sun.addColorStop(0, 'rgba(255, 236, 180, 0.5)')
  sun.addColorStop(0.4, 'rgba(255, 236, 180, 0.16)')
  sun.addColorStop(1, 'rgba(255, 236, 180, 0)')
  x.fillStyle = sun
  x.fillRect(sunX - sunR, sunY - sunR, sunR * 2, sunR * 2)

  // 叠嶂山峦：三片雾色山脊
  const ridges: Array<{ base: number; amp: number; f1: number; f2: number; p1: number; p2: number; color: string; alpha: number }> = [
    { base: 0.47, amp: 0.05, f1: 1.4, f2: 3.1, p1: 0.6, p2: 1.9, color: '#cfe8e9', alpha: 0.75 },
    { base: 0.56, amp: 0.06, f1: 1.1, f2: 2.6, p1: 2.4, p2: 0.8, color: '#bcdcdd', alpha: 0.8 },
    { base: 0.64, amp: 0.05, f1: 0.9, f2: 2.2, p1: 4.1, p2: 3.2, color: '#a8cfd3', alpha: 0.85 }
  ]
  for (const rd of ridges) {
    const step = 48
    const pts: Array<[number, number]> = []
    for (let i = 0; i <= step; i++) {
      const px = (i / step) * w
      const py = h * (rd.base + rd.amp * (Math.sin(px * rd.f1 / w * Math.PI * 2 + rd.p1) + 0.6 * Math.sin(px * rd.f2 / w * Math.PI * 2 + rd.p2)))
      pts.push([px, py])
    }
    const g = x.createLinearGradient(0, h * 0.45, 0, h)
    g.addColorStop(0, rgba(rd.color, rd.alpha * 0.25))
    g.addColorStop(1, rgba(rd.color, rd.alpha))
    x.fillStyle = g
    x.beginPath()
    x.moveTo(0, h)
    for (const [px, py] of pts) x.lineTo(px, py)
    x.lineTo(w, h)
    x.closePath()
    x.fill()
  }

  // 湖面：水色薄雾 + 水平水纹 + 山影
  const lakeY = h * lakeTop
  const water = x.createLinearGradient(0, lakeY, 0, h)
  water.addColorStop(0, 'rgba(255, 250, 235, 0.85)')
  water.addColorStop(0.25, 'rgba(226, 240, 240, 0.75)')
  water.addColorStop(1, 'rgba(206, 230, 234, 0.8)')
  x.fillStyle = water
  x.fillRect(0, lakeY, w, h - lakeY)

  // 水平线微光
  const hl = x.createLinearGradient(0, lakeY - 3, 0, lakeY + 3)
  hl.addColorStop(0, 'rgba(255,255,255,0)')
  hl.addColorStop(0.5, 'rgba(255,255,255,0.55)')
  hl.addColorStop(1, 'rgba(255,255,255,0)')
  x.fillStyle = hl
  x.fillRect(0, lakeY - 3, w, 6)

  // 波光粼粼的水纹带
  for (let i = 0; i < 7; i++) {
    const wy = lakeY + (h - lakeY) * (0.12 + i * 0.13)
    const amp = 3 + (i % 3) * 2
    const wave = x.createLinearGradient(0, wy - amp - 4, 0, wy + amp + 4)
    wave.addColorStop(0, 'rgba(255,255,255,0)')
    wave.addColorStop(0.5, `rgba(255, 255, 255, ${0.1 + (i % 2) * 0.05})`)
    wave.addColorStop(1, 'rgba(255,255,255,0)')
    x.fillStyle = wave
    x.fillRect(0, wy - amp - 4, w, amp * 2 + 8)
  }

  // 山峦在湖中的倒影
  x.globalAlpha = 0.16
  for (let i = 0; i < 3; i++) {
    const sx = w * (0.18 + i * 0.26)
    const sw = w * 0.2
    const sy = lakeY + (h - lakeY) * 0.14
    const sg = x.createLinearGradient(0, lakeY, 0, sy)
    sg.addColorStop(0, rgba('#b9d6d9', 0.5))
    sg.addColorStop(1, rgba('#b9d6d9', 0))
    x.fillStyle = sg
    x.beginPath()
    x.moveTo(sx - sw / 2, lakeY + 2)
    x.lineTo(sx + sw / 2, lakeY + 2)
    x.quadraticCurveTo(sx, lakeY + 2, sx, sy)
    x.quadraticCurveTo(sx, lakeY + 2, sx - sw / 2, lakeY + 2)
    x.fill()
  }
  x.globalAlpha = 1

  lightSky = c
}

function buildLight() {
  buildLightSky()

  const moteCount = Math.round(clamp(props.particleCount * 0.5 * (REDUCED ? 0.6 : 1), 20, 46))
  motes = []
  for (let i = 0; i < moteCount; i++) {
    const depth = rand(0.3, 1)
    motes.push({
      x: rand(0, cssW),
      y: rand(0, cssH * 0.85),
      r: rand(0.8, 2.2) * depth + 0.4,
      vx: 0,
      vy: -rand(4, 12) * depth,
      phase: rand(0, Math.PI * 2),
      phaseSpeed: rand(0.4, 1.4),
      color: pick(MOTE_COLORS),
      alpha: rand(0.3, 0.66) * depth,
      depth
    })
  }

  clouds = []
  for (let i = 0; i < 3; i++) {
    clouds.push({
      x: rand(-0.1, 1.1) * cssW,
      y: rand(0.08, 0.42) * cssH,
      s: rand(0.5, 1),
      vx: rand(4, 10)
    })
  }

  ripples = []
  wake = []
  ambientTimer = rand(6, 10)

  caustics = []
  for (let i = 0; i < 3; i++) {
    caustics.push({
      x: rand(0, cssW),
      y: cssH * (lakeTop + rand(0.05, 0.3)),
      r: rand(120, 200),
      vx: rand(-14, 14),
      vy: rand(-8, 8),
      phase: rand(0, Math.PI * 2),
      color: pick(CAUSTIC_COLORS),
      alpha: rand(0.05, 0.09)
    })
  }
}

function spawnRipple(x: number, y: number, strength = 1) {
  if (ripples.length > 22) ripples.shift()
  const scale = clamp(props.connectDistance / 100, 0.8, 1.4)
  ripples.push({
    x,
    y,
    r: 3,
    speed: rand(70, 110) * strength,
    alpha: rand(0.32, 0.46) * strength,
    maxR: Math.min(cssW, cssH) * rand(0.2, 0.3) * scale,
    seed: rand(0, Math.PI * 2)
  })
}

function updateLight(dt: number) {
  // 浮尘：上浮 + 轻摆 + 被推后的阻尼回落
  for (const m of motes) {
    m.phase += m.phaseSpeed * dt
    m.x += (m.vx + Math.cos(m.phase) * 7 * m.depth) * dt
    m.y += m.vy * dt
    m.vx *= Math.max(0, 1 - 2.6 * dt)
    m.vy *= Math.max(0, 1 - 2.0 * dt)
    if (m.y < -26) { m.y = cssH * 0.85 + 26; m.x = rand(0, cssW) }
    if (m.x < -32) m.x = cssW + 32
    else if (m.x > cssW + 32) m.x = -32
  }

  // 云朵漂移
  for (const cl of clouds) {
    cl.x += cl.vx * dt
    if (cl.x > cssW + 160) { cl.x = -160; cl.y = rand(0.08, 0.42) * cssH }
  }

  // 涟漪
  for (let i = ripples.length - 1; i >= 0; i--) {
    const rp = ripples[i]
    if (!rp) continue
    rp.r += rp.speed * dt
    rp.speed *= Math.max(0.25, 1 - 0.55 * dt)
    rp.alpha *= Math.max(0, 1 - 0.6 * dt)
    if (rp.r >= rp.maxR || rp.alpha < 0.014) ripples.splice(i, 1)
  }

  // 波前推尘
  for (const rp of ripples) {
    const band = 30
    for (const m of motes) {
      const dx = m.x - rp.x
      const dy = m.y - rp.y
      const d = Math.hypot(dx, dy)
      if (d < 1) continue
      const delta = Math.abs(d - rp.r)
      if (delta < band && rp.r > 10) {
        const push = (1 - delta / band) * 5.4 * (1 - rp.r / rp.maxR)
        m.vx += (dx / d) * push * m.depth
        m.vy += (dy / d) * push * m.depth - 0.8 * m.depth
      }
    }
  }

  // 尾迹
  for (let i = wake.length - 1; i >= 0; i--) {
    const w = wake[i]
    if (!w) continue
    w.life -= dt
    if (w.life <= 0) wake.splice(i, 1)
  }

  // 偶发「雨滴」涟漪
  if (!REDUCED) {
    ambientTimer -= dt
    if (ambientTimer <= 0) {
      spawnRipple(rand(0, cssW), cssH * (lakeTop + rand(0.05, 0.35)), rand(0.5, 0.75))
      ambientTimer = rand(8, 14)
    }
  }

  // 粼光
  for (const c of caustics) {
    c.x += c.vx * dt
    c.y += c.vy * dt
    c.phase += dt * 0.35
    const m = c.r + 60
    if (c.x < -m) c.x = cssW + m
    else if (c.x > cssW + m) c.x = -m
    if (c.y < cssH * lakeTop - 20) c.y = cssH * (lakeTop + 0.3)
    else if (c.y > cssH + m) c.y = cssH * (lakeTop + 0.05)
  }
}

function drawLight() {
  const x = ctx
  if (!x) return
  x.clearRect(0, 0, cssW, cssH)

  // 1. 天空 + 山峦 + 湖面（静态层）
  if (lightSky) x.drawImage(lightSky, 0, 0, cssW, cssH)

  // 2. 云
  x.globalCompositeOperation = 'lighter'
  const cloud = getCloudSprite()
  for (const cl of clouds) {
    const s = 320 * cl.s
    x.globalAlpha = 0.5 * cl.s
    x.drawImage(cloud, cl.x - s / 2, cl.y - s / 4, s, s * 0.44)
  }
  x.globalAlpha = 1

  // 3. 湖面粼光
  x.globalCompositeOperation = 'lighter'
  for (const c of caustics) {
    const pulse = 0.7 + 0.3 * Math.sin(c.phase)
    const s = c.r * 2
    x.globalAlpha = c.alpha * pulse
    x.drawImage(glowSprite(c.color), c.x - s / 2, c.y - s / 2, s, s)
  }
  x.globalAlpha = 1

  // 4. 浮光尘埃
  for (const m of motes) {
    const pulse = 0.62 + 0.38 * Math.sin(m.phase * 1.6)
    const s = m.r * 9
    x.globalAlpha = m.alpha * pulse * 0.5
    x.drawImage(glowSprite(m.color), m.x - s / 2, m.y - s / 2, s, s)
    x.globalAlpha = m.alpha * pulse
    x.fillStyle = rgba(m.color, 1)
    x.beginPath()
    x.arc(m.x, m.y, Math.max(0.6, m.r * 0.5), 0, Math.PI * 2)
    x.fill()
  }
  x.globalAlpha = 1

  // 5. 涟漪（核心交互）
  const ring = ringSprite('#d89a4e')
  for (const rp of ripples) {
    const prog = 1 - rp.r / rp.maxR
    if (prog <= 0) continue
    const cs = Math.max(6, rp.r * 0.5)
    x.globalAlpha = rp.alpha * 0.3 * prog
    x.drawImage(glowSprite('#fff3d6'), rp.x - cs / 2, rp.y - cs / 2, cs, cs)
    const s = rp.r / 0.42
    x.globalAlpha = rp.alpha * (0.5 + 0.5 * prog)
    x.save()
    x.translate(rp.x, rp.y)
    x.rotate(rp.seed)
    x.scale(1, 0.9 + 0.1 * Math.sin(rp.seed * 7))
    x.drawImage(ring, -s / 2, -s / 2, s, s)
    x.restore()
  }
  x.globalAlpha = 1

  // 6. 尾迹
  x.globalCompositeOperation = 'lighter'
  for (const w of wake) {
    const f = w.life / 0.8
    const s = 16 + 34 * f
    x.globalAlpha = 0.11 * f
    x.drawImage(glowSprite('#ffe9b8'), w.x - s / 2, w.y - s / 2, s, s)
  }

  // 7. 光标柔光
  if (mouse.inWindow) {
    const s = 210
    x.globalAlpha = 0.06
    x.drawImage(glowSprite('#fff7e0'), smoothX - s / 2, smoothY - s / 2, s, s)
  }
  x.globalAlpha = 1
  x.globalCompositeOperation = 'source-over'
}

// ============================================================
//  深色「星月夜」—— 厚涂星涡 + 星野 + 新月 + 村落 + 流星
// ============================================================
interface Star {
  x: number
  y: number
  r: number
  phase: number
  period: number
  color: string
  flare: boolean
  baseAlpha: number
}
interface PaintedStar {
  x: number
  y: number
  r: number
  phase: number
  color: string
}
interface FlowStar {
  t: number
  arm: number
  speed: number
  size: number
}
interface Meteor {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  maxLife: number
  len: number
  hue: string
  fireball: boolean
}
interface Spark {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  maxLife: number
  r: number
  color: string
}

const STAR_COLORS = ['#ffffff', '#e8ecff', '#c4b5fd', '#fde68a', '#93c5fd']
const GALAXY_STAR_COLORS = ['#ffffff', '#e8ecff', '#c7d2fe', '#a5b4fc', '#fde68a']
const GALAXY_TURNS = 1.9

const moon = { x: 0, y: 0, r: 40 }

let darkSky: HTMLCanvasElement | null = null
let farStars: HTMLCanvasElement | null = null
let village: HTMLCanvasElement | null = null
let stars: Star[] = []
let paintedStars: PaintedStar[] = []
let galaxySprite: HTMLCanvasElement | null = null
let flowStars: FlowStar[] = []
let meteors: Meteor[] = []
let sparkles: Spark[] = []
let meteorTimer = 0
let sparkTimer = 0
let galaxyCx = 0
let galaxyCy = 0
let galaxyR = 200

/** 夜空：底色渐变 + 斜贯银河（星尘带）+ 天穹深处的星云色晕 */
function buildDarkSky() {
  const c = makeFullLayer()
  if (!c) return
  const x = c.getContext('2d')!
  const w = cssW
  const h = cssH

  const sky = x.createLinearGradient(0, 0, 0, h)
  sky.addColorStop(0, '#060a1c')
  sky.addColorStop(0.45, '#10162f')
  sky.addColorStop(0.8, '#1c1a44')
  sky.addColorStop(1, '#241f52')
  x.fillStyle = sky
  x.fillRect(0, 0, w, h)

  // —— 银河：斜贯夜空的星尘带 ——
  const ax = w * 0.5
  const ay = h * 0.5
  const ang = -0.42
  const bandLen = Math.hypot(w, h) * 0.95
  x.save()
  x.translate(ax, ay)
  x.rotate(ang)
  x.globalCompositeOperation = 'lighter'

  // 朦胧星尘：一串大小不一的柔光团
  const dustColors = ['rgba(178, 170, 255,', 'rgba(140, 210, 235,', 'rgba(255, 220, 170,']
  const clumpCount = Math.round(clamp(bandLen / 240, 6, 12))
  for (let i = 0; i < clumpCount; i++) {
    const cx = -bandLen / 2 + (i / (clumpCount - 1)) * bandLen + rand(-bandLen * 0.06, bandLen * 0.06)
    const cy = rand(-1, 1) * bandLen * 0.05
    const cr = rand(bandLen * 0.06, bandLen * 0.14)
    const col = pick(dustColors)
    const g = x.createRadialGradient(cx, cy, 0, cx, cy, cr)
    g.addColorStop(0, `${col} ${rand(0.05, 0.1)})`)
    g.addColorStop(1, `${col} 0)`)
    x.fillStyle = g
    x.fillRect(cx - cr, cy - cr, cr * 2, cr * 2)
  }

  // 银河中的星尘小星
  const speckle = Math.round(clamp(bandLen / 4, 120, 260))
  for (let i = 0; i < speckle; i++) {
    const sx = rand(-bandLen / 2, bandLen / 2)
    const sy = rand(-1, 1) * bandLen * 0.055
    const a = rand(0.2, 0.7)
    x.fillStyle = `rgba(255, 255, 255, ${a})`
    x.fillRect(sx, sy, rand(0.5, 1.4), rand(0.5, 1.4))
  }
  x.restore()
  x.globalCompositeOperation = 'source-over'

  // 天穹深处的星云色晕（低饱和，与夜色融为一体）
  x.globalCompositeOperation = 'lighter'
  const nbg: Array<[number, number, number, string, number]> = [
    [w * 0.18, h * 0.22, Math.min(w, h) * 0.3, '#5b21b6', 0.05],
    [w * 0.82, h * 0.42, Math.min(w, h) * 0.34, '#155e75', 0.045],
    [w * 0.55, h * 0.78, Math.min(w, h) * 0.3, '#4c1d95', 0.05]
  ]
  for (const [nx, ny, nr, ncol, na] of nbg) {
    const g = x.createRadialGradient(nx, ny, 0, nx, ny, nr)
    g.addColorStop(0, rgba(ncol, na))
    g.addColorStop(1, rgba(ncol, 0))
    x.fillStyle = g
    x.fillRect(nx - nr, ny - nr, nr * 2, nr * 2)
  }
  x.globalCompositeOperation = 'source-over'

  darkSky = c
}

/** 远星层（静态） */
function buildFarStars() {
  const c = makeFullLayer()
  if (!c) return
  const x = c.getContext('2d')!
  const count = Math.round(clamp((cssW * cssH) / 3600, 150, 480) * (REDUCED ? 0.7 : 1))
  const palette = ['#ffffff', '#dfe6ff', '#cbd5e1', '#f5f3ff', '#fde68a']
  for (let i = 0; i < count; i++) {
    x.fillStyle = rgba(pick(palette), rand(0.1, 0.5))
    x.beginPath()
    x.arc(rand(0, cssW), rand(0, cssH), rand(0.4, 1.5), 0, Math.PI * 2)
    x.fill()
  }
  farStars = c
}

/** 山脚村落：两层山影 + 亮着暖灯的窗户 */
function buildVillage() {
  const c = makeFullLayer()
  if (!c) return
  const x = c.getContext('2d')!
  const w = cssW
  const h = cssH
  const baseY = h * 0.78

  // 远山
  x.fillStyle = '#0d1230'
  x.beginPath()
  x.moveTo(0, h)
  for (let i = 0; i <= 30; i++) {
    const px = (i / 30) * w
    const py = baseY + h * 0.06 * Math.sin(i * 0.55 + 1.2)
    x.lineTo(px, py)
  }
  x.lineTo(w, h)
  x.closePath()
  x.fill()

  // 近山（更深）
  x.fillStyle = '#080c22'
  x.beginPath()
  x.moveTo(0, h)
  for (let i = 0; i <= 30; i++) {
    const px = (i / 30) * w
    const py = baseY + h * 0.13 + h * 0.05 * Math.sin(i * 0.4 + 4)
    x.lineTo(px, py)
  }
  x.lineTo(w, h)
  x.closePath()
  x.fill()

  // 暖灯窗户（沿近山分布）
  const winCount = Math.round(clamp(w / 160, 8, 14))
  for (let i = 0; i < winCount; i++) {
    const wx = rand(0.05, 0.95) * w
    const wy = baseY + h * 0.13 + h * 0.05 * Math.sin((wx / w) * 30 * 0.4 + 4) + rand(-6, 10)
    const glow = glowSprite('#fbbf24')
    const gs = rand(14, 26)
    x.globalAlpha = rand(0.35, 0.6)
    x.drawImage(glow, wx - gs / 2, wy - gs / 2, gs, gs)
    x.globalAlpha = 1
    x.fillStyle = 'rgba(255, 232, 170, 0.95)'
    x.fillRect(wx - 1, wy - 1, 2.2, 2.2)
  }

  village = c
}

/** 圆星涡（旋涡星系）：螺旋星臂 + 明亮核心 —— 整张贴图一次烘焙，每帧只旋转贴图 */
function buildGalaxy() {
  galaxyCx = cssW * 0.45
  galaxyCy = cssH * 0.26
  galaxyR = Math.min(cssW, cssH) * 0.34 * clamp(props.connectDistance / 100, 0.85, 1.1)

  // —— 烘焙星涡贴图（一次绘制，每帧零逐星计算）——
  const S = Math.ceil(galaxyR * 2.2)
  const c = document.createElement('canvas')
  c.width = S
  c.height = S
  const x = c.getContext('2d')
  if (!x) return
  const cx = S / 2
  const cy = S / 2
  const maxR = S * 0.46
  const turns = GALAXY_TURNS
  const armCount = 2

  // 明亮核心
  const coreR = maxR * 0.16
  const core = x.createRadialGradient(cx, cy, 0, cx, cy, coreR * 3)
  core.addColorStop(0, 'rgba(205, 212, 255, 0.55)')
  core.addColorStop(0.35, 'rgba(150, 160, 245, 0.18)')
  core.addColorStop(1, 'rgba(150, 160, 245, 0)')
  x.fillStyle = core
  x.fillRect(0, 0, S, S)

  // 螺旋星臂：由一颗颗小星点组成（圆润、干净）
  const starsPerArm = Math.round(64 * (REDUCED ? 0.7 : 1))
  const dustPerArm = Math.round(110 * (REDUCED ? 0.6 : 1))
  for (let a = 0; a < armCount; a++) {
    // 较亮的星点
    for (let i = 0; i < starsPerArm; i++) {
      const t = Math.pow(Math.random(), 0.85)
      const ang = a * Math.PI + 0.4 + t * turns * Math.PI * 2
      const rr = maxR * Math.pow(t, 1.3)
      const jit = maxR * (0.012 + t * 0.03) * (Math.random() * 2 - 1)
      const px = cx + Math.cos(ang) * (rr + jit)
      const py = cy + Math.sin(ang) * (rr + jit)
      const r0 = lerp(0.5, 1.6, t) * (0.6 + Math.random() * 0.8)
      const alpha = lerp(0.85, 0.35, t) * (0.6 + Math.random() * 0.4)
      x.fillStyle = rgba(pick(GALAXY_STAR_COLORS), alpha)
      x.beginPath()
      x.arc(px, py, r0, 0, Math.PI * 2)
      x.fill()
    }
    // 稀疏的星尘
    for (let i = 0; i < dustPerArm; i++) {
      const t = Math.pow(Math.random(), 0.8)
      const ang = a * Math.PI + 0.4 + t * turns * Math.PI * 2
      const rr = maxR * Math.pow(t, 1.3)
      const jit = maxR * (0.02 + t * 0.045) * (Math.random() * 2 - 1)
      const px = cx + Math.cos(ang) * (rr + jit)
      const py = cy + Math.sin(ang) * (rr + jit)
      x.fillStyle = `rgba(255, 255, 255, ${rand(0.12, 0.38)})`
      x.fillRect(px, py, rand(0.4, 0.9), rand(0.4, 0.9))
    }
  }

  galaxySprite = c

  // 沿臂流动的星光（少量动态点缀）
  flowStars = []
  const flowCount = Math.round(10 * (REDUCED ? 0.5 : 1))
  for (let i = 0; i < flowCount; i++) {
    flowStars.push({
      t: rand(0.05, 0.95),
      arm: Math.random() < 0.5 ? 0 : 1,
      speed: rand(0.05, 0.11),
      size: rand(1.2, 2.4)
    })
  }
}

function buildDark() {
  buildDarkSky()
  buildFarStars()
  buildVillage()

  const starCount = Math.round(clamp(props.particleCount * 0.42 * (REDUCED ? 0.6 : 1), 26, 58))
  stars = []
  for (let i = 0; i < starCount; i++) {
    stars.push({
      x: rand(0, cssW),
      y: rand(0, cssH * 0.86),
      r: rand(0.5, 1.9) + (Math.random() < 0.06 ? 0.9 : 0),
      phase: rand(0, Math.PI * 2),
      period: rand(1.2, 4.2),
      color: pick(STAR_COLORS),
      flare: Math.random() < 0.07,
      baseAlpha: rand(0.3, 0.85)
    })
  }

  // 画出来般的大星星
  paintedStars = []
  const pCols = ['#fde68a', '#ffffff', '#e9d5ff']
  const psCount = Math.round(clamp(props.particleCount / 24, 4, 7))
  for (let i = 0; i < psCount; i++) {
    paintedStars.push({
      x: rand(0.08, 0.92) * cssW,
      y: rand(0.05, 0.5) * cssH,
      r: rand(16, 30),
      phase: rand(0, Math.PI * 2),
      color: pick(pCols)
    })
  }

  buildGalaxy()

  meteors = []
  meteorTimer = rand(1.2, 3.2)
  sparkles = []
  sparkTimer = 0

  moon.x = cssW * 0.78
  moon.y = cssH * 0.16
  moon.r = Math.max(32, Math.min(cssW, cssH) * 0.055)
}

function spawnMeteor(delayOffset = 0) {
  const fireball = Math.random() < 0.08
  const x = rand(0, cssW)
  const y = rand(-40, cssH * 0.22)
  const ang = rand(0.42, 1.05)
  const speed = fireball ? rand(320, 430) : rand(460, 700)
  const life = Math.max(0.5, rand(0.9, 1.5) - delayOffset)
  const hueRoll = Math.random()
  const hue = hueRoll < 0.68 ? '#ffffff' : hueRoll < 0.88 ? '#ffe9b8' : '#d9c9ff'
  meteors.push({
    x,
    y,
    vx: Math.cos(ang) * speed,
    vy: Math.sin(ang) * speed,
    life,
    maxLife: life,
    len: fireball ? rand(280, 420) : rand(160, 260),
    hue,
    fireball
  })
}

function spawnSpark() {
  if (sparkles.length > 20) sparkles.shift()
  const spread = rand(-1.7, 1.7)
  const speed = rand(6, 22)
  const life = rand(0.35, 0.7)
  sparkles.push({
    x: smoothX,
    y: smoothY,
    vx: Math.cos(spread) * speed * 0.7,
    vy: Math.sin(spread) * speed * 0.7 - 6,
    life,
    maxLife: life,
    r: rand(0.7, 1.7),
    color: Math.random() < 0.72 ? '#c4b5fd' : '#ffffff'
  })
}

function updateDark(dt: number) {
  for (const s of stars) {
    s.phase += (dt * Math.PI * 2) / s.period
  }
  for (const p of paintedStars) {
    p.phase += dt * 1.4
  }

  // 星涡中的流动星光
  for (const f of flowStars) {
    f.t += f.speed * dt
    if (f.t > 1) f.t = 0.03
  }

  // 流星
  if (!REDUCED) {
    meteorTimer -= dt
    if (meteorTimer <= 0) {
      const burst = Math.random() < 0.1 ? 2 : 1
      for (let b = 0; b < burst; b++) spawnMeteor(b * 0.1)
      meteorTimer = rand(2.6, 5.4)
    }
  }
  for (let i = meteors.length - 1; i >= 0; i--) {
    const m = meteors[i]
    if (!m) continue
    m.x += m.vx * dt
    m.y += m.vy * dt
    m.life -= dt
    // 流星碎屑：拖尾迸出的星尘
    if (!REDUCED && Math.random() < dt * 26) {
      if (sparkles.length > 36) sparkles.shift()
      const mv = Math.hypot(m.vx, m.vy) || 1
      sparkles.push({
        x: m.x - (m.vx / mv) * 10,
        y: m.y - (m.vy / mv) * 10,
        vx: m.vx * 0.12 + rand(-20, 20),
        vy: m.vy * 0.12 + rand(-20, 20) - 6,
        life: rand(0.3, 0.6),
        maxLife: 0.6,
        r: rand(0.6, 1.5),
        color: m.hue
      })
    }
    if (m.life <= 0 || m.x < -m.len - 60 || m.x > cssW + m.len + 60 || m.y > cssH + m.len + 60) {
      meteors.splice(i, 1)
    }
  }

  // 星屑
  if (!REDUCED && mouse.inWindow) {
    sparkTimer -= dt
    if (sparkTimer <= 0) {
      if (Math.random() < 0.55) spawnSpark()
      sparkTimer = 0.045
    }
  }
  for (let i = sparkles.length - 1; i >= 0; i--) {
    const sp = sparkles[i]
    if (!sp) continue
    sp.x += sp.vx * dt
    sp.y += sp.vy * dt
    sp.life -= dt
    if (sp.life <= 0) sparkles.splice(i, 1)
  }
}

function drawGalaxy(x: CanvasRenderingContext2D) {
  const rot = time * (REDUCED ? 0.004 : 0.045)
  x.globalCompositeOperation = 'lighter'

  // 整张星涡贴图：一次旋转绘制
  if (galaxySprite) {
    const s = galaxySprite.width
    x.save()
    x.translate(galaxyCx, galaxyCy)
    x.rotate(rot)
    x.drawImage(galaxySprite, -s / 2, -s / 2)
    x.restore()
  }

  // 沿臂流动的星光
  const maxR = galaxyR * 1.05
  for (const f of flowStars) {
    const ang = f.arm * Math.PI + 0.4 + f.t * GALAXY_TURNS * Math.PI * 2 + rot
    const rr = maxR * Math.pow(f.t, 1.3)
    const fx = galaxyCx + Math.cos(ang) * rr
    const fy = galaxyCy + Math.sin(ang) * rr
    const fade = Math.sin(f.t * Math.PI) * 0.9
    const s = f.size * 6
    x.globalAlpha = fade * 0.5
    x.drawImage(glowSprite('#dfe6ff'), fx - s / 2, fy - s / 2, s, s)
    x.globalAlpha = fade * 0.9
    x.fillStyle = '#ffffff'
    x.beginPath()
    x.arc(fx, fy, f.size * 0.45, 0, Math.PI * 2)
    x.fill()
  }
  x.globalAlpha = 1
}

function drawDark() {
  const x = ctx
  if (!x) return
  const w = cssW
  const h = cssH
  x.clearRect(0, 0, w, h)

  // 1. 夜空
  if (darkSky) x.drawImage(darkSky, 0, 0, w, h)

  // 2. 远星
  if (farStars) x.drawImage(farStars, 0, 0, w, h)

  // 3. 厚涂星涡
  drawGalaxy(x)

  // 4. 画出来的大星星
  x.globalCompositeOperation = 'lighter'
  for (const p of paintedStars) {
    const tw = Math.sin(p.phase) * 0.5 + 0.5
    const s = p.r * 5
    x.globalAlpha = 0.6 + 0.4 * tw
    x.drawImage(paintedStarSprite(p.color), p.x - s / 2, p.y - s / 2, s, s)
    x.globalAlpha = 0.95
    x.fillStyle = '#ffffff'
    x.beginPath()
    x.arc(p.x, p.y, p.r * 0.16, 0, Math.PI * 2)
    x.fill()
  }
  x.globalAlpha = 1

  // 5. 近星闪烁
  x.globalCompositeOperation = 'lighter'
  for (const s of stars) {
    const tw = Math.sin(s.phase) * 0.5 + 0.5
    const a = s.baseAlpha * (0.35 + 0.65 * tw)
    if (s.r > 1.5) {
      const gs = s.r * 8
      x.globalAlpha = a * 0.5
      x.drawImage(glowSprite(s.color), s.x - gs / 2, s.y - gs / 2, gs, gs)
      x.globalAlpha = 1
    }
    x.fillStyle = rgba(s.color, a)
    x.beginPath()
    x.arc(s.x, s.y, s.r, 0, Math.PI * 2)
    x.fill()
    if (s.flare && a > 0.3) {
      const fl = s.r * 5
      x.strokeStyle = rgba(s.color, a * 0.45)
      x.lineWidth = 0.8
      x.beginPath()
      x.moveTo(s.x - fl, s.y)
      x.lineTo(s.x + fl, s.y)
      x.moveTo(s.x, s.y - fl)
      x.lineTo(s.x, s.y + fl)
      x.stroke()
    }
  }

  // 6. 满月
  const breathing = 1 + 0.015 * Math.sin(time * 0.5)
  const ms = moon.r * 4.8 * breathing
  x.globalAlpha = 1
  x.drawImage(getMoonSprite(), moon.x - ms / 2, moon.y - ms / 2, ms, ms)

  // 7. 村落（覆盖底部星空）
  if (village) x.drawImage(village, 0, 0, w, h)

  // 8. 流星（油画尾迹 + 碎屑）
  x.lineCap = 'round'
  for (const m of meteors) {
    const fade = clamp(m.life / m.maxLife, 0, 1)
    const vel = Math.hypot(m.vx, m.vy)
    if (vel < 1 || fade <= 0.01) continue
    const ang = Math.atan2(m.vy, m.vx)
    const l = m.len * (0.6 + 0.4 * fade)
    const headR = m.fireball ? 5.5 : 3.2

    x.save()
    x.translate(m.x, m.y)
    x.rotate(ang)

    // 宽而柔的外层尾迹
    const outer = x.createLinearGradient(0, 0, -l, 0)
    outer.addColorStop(0, rgba(m.hue, fade * 0.3))
    outer.addColorStop(0.55, rgba(m.hue, fade * 0.08))
    outer.addColorStop(1, rgba(m.hue, 0))
    x.strokeStyle = outer
    x.lineWidth = m.fireball ? 9 : 6
    x.beginPath()
    x.moveTo(0, 0)
    x.lineTo(-l, 0)
    x.stroke()

    // 明亮的芯线
    const core = x.createLinearGradient(0, 0, -l * 0.6, 0)
    core.addColorStop(0, rgba(m.hue, fade * 0.9))
    core.addColorStop(1, rgba(m.hue, 0))
    x.strokeStyle = core
    x.lineWidth = m.fireball ? 3.2 : 1.9
    x.beginPath()
    x.moveTo(0, 0)
    x.lineTo(-l * 0.6, 0)
    x.stroke()
    x.restore()

    // 亮头
    const hs = headR * 6 * fade
    x.globalAlpha = fade * 0.95
    x.drawImage(glowSprite(m.hue), m.x - hs / 2, m.y - hs / 2, hs, hs)
    x.globalAlpha = fade
    x.fillStyle = '#ffffff'
    x.beginPath()
    x.arc(m.x, m.y, headR * fade * 0.5 + 0.4, 0, Math.PI * 2)
    x.fill()
  }
  x.globalAlpha = 1

  // 9. 星屑 + 光标辉光
  for (const sp of sparkles) {
    const f = clamp(sp.life / sp.maxLife, 0, 1)
    const s = sp.r * 7
    x.globalAlpha = f * 0.55
    x.drawImage(glowSprite(sp.color), sp.x - s / 2, sp.y - s / 2, s, s)
    x.globalAlpha = f * 0.9
    x.fillStyle = rgba(sp.color, 1)
    x.beginPath()
    x.arc(sp.x, sp.y, Math.max(0.5, sp.r * 0.5), 0, Math.PI * 2)
    x.fill()
  }
  if (mouse.inWindow) {
    const s = 220
    x.globalAlpha = 0.045
    x.drawImage(glowSprite('#8b7cf6'), smoothX - s / 2, smoothY - s / 2, s, s)
  }
  x.globalAlpha = 1
  x.globalCompositeOperation = 'source-over'
}

// ============================================================
//  鼠标 & 触屏
// ============================================================
const mouse = { x: -9999, y: -9999, inWindow: false }
let smoothX = -9999
let smoothY = -9999
let lastMouseX = -9999
let lastMouseY = -9999
let rippleDistAccum = 0
let lastRippleTime = 0
let wakeDistAccum = 0

function handleMouseMove(e: MouseEvent) {
  const px = e.clientX
  const py = e.clientY
  mouse.x = px
  mouse.y = py
  mouse.inWindow = true

  if (!props.isDark) {
    const dx = px - lastMouseX
    const dy = py - lastMouseY
    const dist = Math.hypot(dx, dy)
    const now = performance.now()

    if (lastMouseX < -500) {
      spawnRipple(px, py, 0.8)
      rippleDistAccum = 0
      lastRippleTime = now
    } else if (dist > 0) {
      rippleDistAccum += dist
      if (rippleDistAccum >= 20 && now - lastRippleTime > 28) {
        spawnRipple(px, py, clamp(dist / 46, 0.6, 1.4))
        rippleDistAccum = 0
        lastRippleTime = now
      }
      wakeDistAccum += dist
      if (wakeDistAccum >= 26) {
        if (wake.length > 16) wake.shift()
        wake.push({ x: px, y: py, life: 0.8 })
        wakeDistAccum = 0
      }
    }
  }

  lastMouseX = px
  lastMouseY = py
}

function handleMouseLeave() {
  mouse.x = -9999
  mouse.y = -9999
  mouse.inWindow = false
  lastMouseX = -9999
  lastMouseY = -9999
  rippleDistAccum = 0
  wakeDistAccum = 0
}

function handleTouchStart(e: TouchEvent) {
  const t = e.touches[0]
  if (!t) return
  const px = t.clientX
  const py = t.clientY
  mouse.x = px
  mouse.y = py
  mouse.inWindow = true
  if (!props.isDark) {
    spawnRipple(px, py, 1.0)
    rippleDistAccum = 0
    lastRippleTime = performance.now()
  }
  lastMouseX = px
  lastMouseY = py
}

function handleTouchMove(e: TouchEvent) {
  const t = e.touches[0]
  if (!t) return
  const px = t.clientX
  const py = t.clientY
  mouse.x = px
  mouse.y = py
  mouse.inWindow = true
  if (!props.isDark) {
    const dx = px - lastMouseX
    const dy = py - lastMouseY
    const dist = Math.hypot(dx, dy)
    const now = performance.now()
    rippleDistAccum += dist
    if (rippleDistAccum >= 20 && now - lastRippleTime > 30) {
      spawnRipple(px, py, 1.0)
      rippleDistAccum = 0
      lastRippleTime = now
    }
  }
  lastMouseX = px
  lastMouseY = py
}

// ============================================================
//  生命周期
// ============================================================
function initCanvas() {
  const c = canvasRef.value
  if (!c) return
  cssW = window.innerWidth
  cssH = window.innerHeight
  dpr = Math.min(window.devicePixelRatio || 1, 1.75)
  c.width = Math.round(cssW * dpr)
  c.height = Math.round(cssH * dpr)
  ctx = c.getContext('2d')
  if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
}

function rebuildScene() {
  if (props.isDark) buildDark()
  else buildLight()
}

function handleResize() {
  initCanvas()
  rebuildScene()
}

function animate(ts: number) {
  rafId = requestAnimationFrame(animate)
  if (document.hidden) return
  if (lastTs === 0) lastTs = ts
  const dtMs = Math.min(ts - lastTs, 50)
  lastTs = ts
  const dt = dtMs / 1000
  time += dt

  if (mouse.inWindow) {
    if (smoothX < -500) { smoothX = mouse.x; smoothY = mouse.y }
    const k = Math.min(1, 7 * dt)
    smoothX += (mouse.x - smoothX) * k
    smoothY += (mouse.y - smoothY) * k
  }

  if (!isSwitching.value) {
    if (props.isDark) {
      updateDark(dt)
      drawDark()
    } else {
      updateLight(dt)
      drawLight()
    }
  }
}

// 主题切换：淡出 → 重建 → 淡入
watch(() => props.isDark, (val, oldVal) => {
  if (val === oldVal) return
  isSwitching.value = true
  const c = canvasRef.value
  if (c) c.style.opacity = '0'
  window.setTimeout(() => {
    rebuildScene()
    if (c) c.style.opacity = '1'
    isSwitching.value = false
  }, 260)
})

onMounted(() => {
  initCanvas()
  rebuildScene()
  lastTs = performance.now()
  rafId = requestAnimationFrame(animate)

  window.addEventListener('resize', handleResize)
  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('mouseleave', handleMouseLeave)
  window.addEventListener('touchstart', handleTouchStart, { passive: true })
  window.addEventListener('touchmove', handleTouchMove, { passive: true })
})

onUnmounted(() => {
  cancelAnimationFrame(rafId)
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('mouseleave', handleMouseLeave)
  window.removeEventListener('touchstart', handleTouchStart)
  window.removeEventListener('touchmove', handleTouchMove)
})
</script>

<style scoped>
.particle-canvas {
  transition: opacity 0.5s ease;
}
</style>
