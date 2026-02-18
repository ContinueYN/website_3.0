<template>
  <canvas 
    ref="canvasRef" 
    class="particle-canvas"
    :style="canvasStyle"
  ></canvas>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'
import type { CSSProperties } from 'vue'
interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
  opacity: number
  pulseSpeed: number
  pulsePhase: number
  isStar?: boolean
  twinkleSpeed?: number
  twinklePhase?: number
  tailLength?: number
}
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

const canvasRef = ref<HTMLCanvasElement | null>(null)
const ctx = ref<CanvasRenderingContext2D | null>(null)
const particles = ref<Particle[]>([])
const animationFrameId = ref<number>(0)

// 计算样式
const canvasStyle = computed<CSSProperties>(() => ({
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  zIndex: '-1',
  pointerEvents: 'none'
}))

// 白天模式颜色配置
const lightModeColors = {
  particles: [
    'rgba(255, 255, 255, 0.8)',
    'rgba(255, 255, 255, 0.6)',
    'rgba(255, 255, 255, 0.4)'
  ],
  lines: 'rgba(255, 255, 255, 0.2)',
  glows: [
    'rgba(255, 215, 0, 0.4)',    // 白金光晕
    'rgba(255, 235, 150, 0.2)',  // 淡白金光晕
    'rgba(255, 250, 200, 0.2)'   // 更淡的白金光晕
  ]
}

// 夜间模式颜色配置
const darkModeColors = {
  particles: [
    'rgba(255, 255, 255, 0.9)',      // 白色星星
    'rgba(255, 255, 255, 0.7)',
    'rgba(255, 255, 255, 0.5)',
    'rgba(200, 170, 255, 0.8)',      // 淡紫色星星
    'rgba(230, 210, 255, 0.8)'       // 更淡的紫色星星
  ],
  lines: 'rgba(180, 146, 239, 0.3)', // 保持紫色连线
  glows: [
    'rgba(180, 146, 239, 0.4)',      // 淡紫色光晕
    'rgba(200, 170, 255, 0.3)',      // 淡紫色
    'rgba(150, 120, 220, 0.3)'       // 稍深的紫色
  ]
}

// 获取随机颜色
const getRandomColor = (colorPalette: string[]): string => {
  // 如果调色板为空，返回一个默认颜色以确保类型为 string
  if (!colorPalette || colorPalette.length === 0) {
    return 'rgba(255, 255, 255, 1)'
  }
  const index = Math.floor(Math.random() * colorPalette.length)
  return colorPalette[index] ?? 'rgba(255, 255, 255, 1)'
}

// 初始化画布
const initCanvas = () => {
  if (!canvasRef.value) return
  
  const canvas = canvasRef.value
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  ctx.value = canvas.getContext('2d')
}

// 创建粒子 - 白天模式（光晕效果）
const createLightParticles = () => {
  particles.value = []
  const colors = props.isDark ? darkModeColors : lightModeColors
  
  for (let i = 0; i < props.particleCount; i++) {
    particles.value.push({
      x: Math.random() * (canvasRef.value?.width || window.innerWidth),
      y: Math.random() * (canvasRef.value?.height || window.innerHeight),
      size: Math.random() * 4 + 5, // 稍大的粒子
      speedX: Math.random() * 0.5 - 0.25, // 缓慢移动
      speedY: Math.random() * 0.5 - 0.25,
      color: getRandomColor(colors.particles),
      opacity: Math.random() * 0.4 + 0.3, // 较高的基础透明度
      pulseSpeed: Math.random() * 0.02 + 0.01, // 脉动速度
      pulsePhase: Math.random() * Math.PI * 2 // 脉动相位
    })
  }
}

// 创建粒子 - 夜间模式（星空效果）
const createDarkParticles = () => {
  particles.value = []
  const colors = darkModeColors
  
  // 创建星星
  const starCount = Math.floor(props.particleCount * 0.7)
  for (let i = 0; i < starCount; i++) {
    particles.value.push({
      x: Math.random() * (canvasRef.value?.width || window.innerWidth),
      y: Math.random() * (canvasRef.value?.height || window.innerHeight),
      size: Math.random() * 2.5 + 3.5, // 增大尺寸：1-3.5像素
      speedX: 0,
      speedY: 0,
      color: getRandomColor(colors.particles),
      opacity: Math.random() * 0.9 + 0.5, // 提高透明度：0.5-1.4
      pulseSpeed: Math.random() * 0.04 + 0.02, // 加快闪烁速度
      pulsePhase: Math.random() * Math.PI * 2,
      isStar: true,
      twinkleSpeed: Math.random() * 0.08 + 0.03, // 加快闪烁
      twinklePhase: Math.random() * Math.PI * 2
    })
  }
  
  // 创建移动的粒子（流星效果）
  const movingCount = props.particleCount - starCount
  for (let i = 0; i < movingCount; i++) {
    particles.value.push({
      // 随机分布在画布中
      x: Math.random() * (canvasRef.value?.width || window.innerWidth),
      y: Math.random() * (canvasRef.value?.height || window.innerHeight),
      // 稍大一些的流星头
      size: Math.random() * 2 + 1,
      // 让大部分流星朝向同一方向（右下）并且速度更快以增强视觉效果
      speedX: Math.random() * 6 + 4, // 水平速度（向右）
      speedY: Math.random() * 2 + 1, // 垂直速度（向下）
      color: getRandomColor(colors.particles),
      // 更高的不透明度让流星更醒目
      opacity: Math.random() * 0.3 + 0.7,
      pulseSpeed: Math.random() * 0.04 + 0.02,
      pulsePhase: Math.random() * Math.PI * 2,
      isStar: false,
      // 每个流星独立的尾迹长度（像素）
      tailLength: Math.random() * 80 + 40
    })
  }
}

// 创建粒子
const createParticles = () => {
  if (props.isDark) {
    createDarkParticles()
  } else {
    createLightParticles()
  }
}

// 更新粒子位置
const updateParticles = () => {
  if (!canvasRef.value || !ctx.value) return
  
  const canvas = canvasRef.value
  const time = Date.now() * 0.001
  
  particles.value.forEach(particle => {
    // 更新位置
    particle.x += particle.speedX
    particle.y += particle.speedY
    
    // 边界检查
    if (particle.x > canvas.width) particle.x = 0
    else if (particle.x < 0) particle.x = canvas.width
    if (particle.y > canvas.height) particle.y = 0
    else if (particle.y < 0) particle.y = canvas.height
    
    // 更新脉动效果
    particle.pulsePhase += particle.pulseSpeed
    if (particle.twinkleSpeed) {
      particle.twinklePhase! += particle.twinkleSpeed
    }
  })
}

// 绘制光晕效果
const drawLightParticles = () => {
  if (!ctx.value || !canvasRef.value) return
  
  const canvas = canvasRef.value
  const time = Date.now() * 0.001
  const colors = lightModeColors
  
  ctx.value.clearRect(0, 0, canvas.width, canvas.height)
  
  // 绘制连线
  ctx.value.strokeStyle = colors.lines
  for (let i = 0; i < particles.value.length; i++) {
    for (let j = i + 1; j < particles.value.length; j++) {
      const pI = particles.value[i]
      const pJ = particles.value[j]
      if (!pI || !pJ) continue

      const dx = pI.x - pJ.x
      const dy = pI.y - pJ.y
      const distance = Math.sqrt(dx * dx + dy * dy)
      
      if (distance < props.connectDistance) {
        ctx.value.beginPath()
        ctx.value.globalAlpha = (1 - distance / props.connectDistance) * 0.3
        ctx.value.lineWidth = 1
        ctx.value.moveTo(pI.x, pI.y)
        ctx.value.lineTo(pJ.x, pJ.y)
        ctx.value.stroke()
      }
    }
  }
  
  // 绘制粒子光晕
  particles.value.forEach(particle => {
    const pulse = Math.sin(particle.pulsePhase) * 0.3 + 0.7
    const currentOpacity = particle.opacity * pulse
    
    // 绘制光晕
    const gradient = ctx.value!.createRadialGradient(
      particle.x, particle.y, 0,
      particle.x, particle.y, particle.size * 3
    )
    gradient.addColorStop(0, particle.color.replace('0.8', currentOpacity.toString()))
    gradient.addColorStop(1, 'transparent')
    
    ctx.value!.fillStyle = gradient
    ctx.value!.globalAlpha = 1
    ctx.value!.beginPath()
    ctx.value!.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2)
    ctx.value!.fill()
    
    // 绘制核心粒子
    ctx.value!.fillStyle = particle.color
    ctx.value!.globalAlpha = currentOpacity
    ctx.value!.beginPath()
    ctx.value!.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
    ctx.value!.fill()
  })
}

// 绘制星空效果
const drawDarkParticles = () => {
  if (!ctx.value || !canvasRef.value) return
  
  const canvas = canvasRef.value
  const time = Date.now() * 0.001
  const colors = darkModeColors
  
  ctx.value.clearRect(0, 0, canvas.width, canvas.height)
  
  // 绘制星星连线（星座效果）
  ctx.value.strokeStyle = colors.lines
  for (let i = 0; i < particles.value.length; i++) {
    for (let j = i + 1; j < particles.value.length; j++) {
      const pI = particles.value[i]
      const pJ = particles.value[j]
      if (!pI || !pJ || !pI.isStar || !pJ.isStar) continue

      const dx = pI.x - pJ.x
      const dy = pI.y - pJ.y
      const distance = Math.sqrt(dx * dx + dy * dy)
      
      if (distance < props.connectDistance * 0.7) {
        ctx.value.beginPath()
        ctx.value.globalAlpha = (1 - distance / (props.connectDistance * 0.7)) * 0.2
        ctx.value.lineWidth = 0.5
        ctx.value.moveTo(pI.x, pI.y)
        ctx.value.lineTo(pJ.x, pJ.y)
        ctx.value.stroke()
      }
    }
  }
  
  // 绘制粒子
  particles.value.forEach(particle => {
    if (particle.isStar) {
      // 星星闪烁效果
      const twinkle = particle.twinklePhase ? 
        Math.sin(particle.twinklePhase) * 0.5 + 0.5 : 1
      const currentOpacity = particle.opacity * twinkle
      
      // 绘制星星光晕
      const gradient = ctx.value!.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, particle.size * 2
      )
      gradient.addColorStop(0, particle.color.replace('0.8', (currentOpacity * 0.8).toString()))
      gradient.addColorStop(1, 'transparent')
      
      ctx.value!.fillStyle = gradient
      ctx.value!.globalAlpha = 1
      ctx.value!.beginPath()
      ctx.value!.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2)
      ctx.value!.fill()
      
      // 绘制星星核心
      ctx.value!.fillStyle = particle.color
      ctx.value!.globalAlpha = currentOpacity
      ctx.value!.beginPath()
      
      // 绘制星形
      const spikes = 5
      const outerRadius = particle.size
      const innerRadius = particle.size * 0.4
      
      for (let i = 0; i < spikes * 2; i++) {
        const radius = i % 2 === 0 ? outerRadius : innerRadius
        const angle = (Math.PI * i) / spikes
        const x = particle.x + Math.cos(angle) * radius
        const y = particle.y + Math.sin(angle) * radius
        
        if (i === 0) {
          ctx.value!.moveTo(x, y)
        } else {
          ctx.value!.lineTo(x, y)
        }
      }
      ctx.value!.closePath()
      ctx.value!.fill()
      
    } else {
      // 绘制移动粒子（流星）
      const pulse = Math.sin(particle.pulsePhase) * 0.3 + 0.7
      const currentOpacity = particle.opacity * pulse
      
      // 绘制流星尾迹
      const trailLength = 40
      const gradient = ctx.value!.createLinearGradient(
        particle.x, particle.y,
        particle.x - particle.speedX * trailLength,
        particle.y - particle.speedY * trailLength
      )
      gradient.addColorStop(0, particle.color.replace('0.8', currentOpacity.toString()))
      gradient.addColorStop(1, 'transparent')
      
      ctx.value!.strokeStyle = gradient
      ctx.value!.lineWidth = particle.size
      ctx.value!.globalAlpha = 0.6
      ctx.value!.beginPath()
      ctx.value!.moveTo(particle.x, particle.y)
      ctx.value!.lineTo(
        particle.x - particle.speedX * trailLength,
        particle.y - particle.speedY * trailLength
      )
      ctx.value!.stroke()
      
      // 绘制流星头部
      ctx.value!.fillStyle = particle.color
      ctx.value!.globalAlpha = currentOpacity
      ctx.value!.beginPath()
      ctx.value!.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
      ctx.value!.fill()
    }
  })
}

// 绘制粒子
const drawParticles = () => {
  if (props.isDark) {
    drawDarkParticles()
  } else {
    drawLightParticles()
  }
}

// 动画循环
const animate = () => {
  updateParticles()
  drawParticles()
  animationFrameId.value = requestAnimationFrame(animate)
}

// 响应窗口大小变化
const handleResize = () => {
  initCanvas()
  createParticles()
}

onMounted(() => {
  initCanvas()
  createParticles()
  animate()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  if (animationFrameId.value) {
    cancelAnimationFrame(animationFrameId.value)
  }
  window.removeEventListener('resize', handleResize)
})

// 监听主题变化
watch(() => props.isDark, () => {
  createParticles()
})
</script>

<style scoped>
.particle-canvas {
  transition: opacity 0.5s ease;
}

.background-element {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1; /* 应该低于导航的 z-index */
  pointer-events: none; /* 避免干扰交互 */
}
</style>