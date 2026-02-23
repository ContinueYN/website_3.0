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
const mouseX = ref<number>(-1000)
const mouseY = ref<number>(-1000)

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

// 白天模式颜色配置 - 优雅美学设计
const lightModeColors = {
  particles: [
    'rgba(99, 179, 237, 0.7)',   // 淡蓝色
    'rgba(167, 254, 215, 0.6)',  // 淡青绿色
    'rgba(196, 167, 255, 0.5)',  // 淡紫色
    'rgba(251, 191, 36, 0.4)'    // 淡金色点缀
  ],
  lines: 'rgba(99, 179, 237, 0.15)',
  glows: [
    'rgba(99, 179, 237, 0.3)',   // 淡蓝色光晕
    'rgba(167, 254, 215, 0.25)',  // 淡青绿色光晕
    'rgba(196, 167, 255, 0.2)'   // 淡紫色光晕
  ]
}

// 夜间模式颜色配置 - 基于原有紫色系
const darkModeColors = {
  particles: [
    'rgba(170, 126, 247, 0.9)',      // 紫色
    'rgba(125, 59, 246, 0.8)',       // 深紫色
    'rgba(196, 167, 255, 0.7)',      // 淡紫色
    'rgba(251, 191, 36, 0.6)'       // 金色点缀
  ],
  lines: 'rgba(170, 126, 247, 0.3)',
  glows: [
    'rgba(170, 126, 247, 0.4)',      // 紫色光晕
    'rgba(196, 167, 255, 0.3)',      // 淡紫色光晕
    'rgba(251, 191, 36, 0.25)'       // 金色光晕
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
  if (!canvasRef.value) {
    console.error('Canvas element not found')
    return
  }
  
  const canvas = canvasRef.value
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  const context = canvas.getContext('2d')
  
  if (!context) {
    console.error('Failed to get 2D context')
    return
  }
  
  ctx.value = context
}

// 创建粒子 - 白天模式（优雅美学）
const createLightParticles = () => {
  particles.value = []
  const colors = props.isDark ? darkModeColors : lightModeColors
  
  for (let i = 0; i < props.particleCount; i++) {
    particles.value.push({
      x: Math.random() * (canvasRef.value?.width || window.innerWidth),
      y: Math.random() * (canvasRef.value?.height || window.innerHeight),
      size: Math.random() * 3 + 2, // 更精致的小粒子
      speedX: Math.random() * 0.3 - 0.15, // 更柔和的移动
      speedY: Math.random() * 0.3 - 0.15,
      color: getRandomColor(colors.particles),
      opacity: Math.random() * 0.5 + 0.2, // 更淡雅的透明度
      pulseSpeed: Math.random() * 0.015 + 0.005, // 更慢的脉动
      pulsePhase: Math.random() * Math.PI * 2
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
    // 浅色模式下的鼠标交互效果
    if (!props.isDark && mouseX.value > -500 && mouseY.value > -500) {
      const dx = mouseX.value - particle.x
      const dy = mouseY.value - particle.y
      const distance = Math.sqrt(dx * dx + dy * dy)
      const interactionRadius = 200
      
      if (distance < interactionRadius) {
        const force = (interactionRadius - distance) / interactionRadius
        const attractionStrength = 0.02
        
        particle.x += dx * force * attractionStrength
        particle.y += dy * force * attractionStrength
      }
    }
    
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

// 绘制光晕效果 - 优雅美学
const drawLightParticles = () => {
  if (!ctx.value || !canvasRef.value) return
  
  const canvas = canvasRef.value
  const time = Date.now() * 0.001
  const colors = lightModeColors
  
  ctx.value.clearRect(0, 0, canvas.width, canvas.height)
  
  // 绘制鼠标周围的柔和光晕
  if (mouseX.value > -500 && mouseY.value > -500) {
    const mouseGradient = ctx.value.createRadialGradient(
      mouseX.value, mouseY.value, 0,
      mouseX.value, mouseY.value, 180
    )
    mouseGradient.addColorStop(0, 'rgba(99, 179, 237, 0.08)')
    mouseGradient.addColorStop(0.5, 'rgba(167, 254, 215, 0.04)')
    mouseGradient.addColorStop(1, 'transparent')
    
    ctx.value.fillStyle = mouseGradient
    ctx.value.globalAlpha = 1
    ctx.value.beginPath()
    ctx.value.arc(mouseX.value, mouseY.value, 180, 0, Math.PI * 2)
    ctx.value.fill()
  }
  
  // 绘制优雅的连线
  ctx.value.strokeStyle = colors.lines
  ctx.value.lineWidth = 0.5
  for (let i = 0; i < particles.value.length; i++) {
    for (let j = i + 1; j < particles.value.length; j++) {
      const pI = particles.value[i]
      const pJ = particles.value[j]
      if (!pI || !pJ) continue

      const dx = pI.x - pJ.x
      const dy = pI.y - pJ.y
      const distance = Math.sqrt(dx * dx + dy * dy)
      
      if (distance < props.connectDistance * 0.8) {
        const alpha = (1 - distance / (props.connectDistance * 0.8)) * 0.2
        ctx.value.beginPath()
        ctx.value.globalAlpha = alpha
        ctx.value.moveTo(pI.x, pI.y)
        ctx.value.lineTo(pJ.x, pJ.y)
        ctx.value.stroke()
      }
    }
  }
  
  // 绘制优雅的粒子光晕
  particles.value.forEach(particle => {
    const pulse = Math.sin(particle.pulsePhase) * 0.2 + 0.8
    const currentOpacity = particle.opacity * pulse
    
    // 绘制柔和的光晕
    const gradient = ctx.value!.createRadialGradient(
      particle.x, particle.y, 0,
      particle.x, particle.y, particle.size * 2.5
    )
    
    const colorMatch = particle.color.match(/rgba?\([^)]+\)/)
    if (colorMatch) {
      const baseColor = colorMatch[0]
      gradient.addColorStop(0, baseColor.replace(/[\d.]+\)$/, (currentOpacity * 0.8).toString()))
      gradient.addColorStop(0.5, baseColor.replace(/[\d.]+\)$/, (currentOpacity * 0.3).toString()))
    } else {
      gradient.addColorStop(0, particle.color)
      gradient.addColorStop(0.5, particle.color)
    }
    gradient.addColorStop(1, 'transparent')
    
    ctx.value!.fillStyle = gradient
    ctx.value!.globalAlpha = 1
    ctx.value!.beginPath()
    ctx.value!.arc(particle.x, particle.y, particle.size * 2.5, 0, Math.PI * 2)
    ctx.value!.fill()
    
    // 绘制核心粒子 - 更精致
    ctx.value!.fillStyle = particle.color
    ctx.value!.globalAlpha = currentOpacity
    ctx.value!.beginPath()
    ctx.value!.arc(particle.x, particle.y, particle.size * 0.6, 0, Math.PI * 2)
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
  if (!canvasRef.value || !ctx.value) {
    console.error('Canvas or context not available in animate')
    return
  }
  
  updateParticles()
  drawParticles()
  animationFrameId.value = requestAnimationFrame(animate)
}

// 响应窗口大小变化
const handleResize = () => {
  initCanvas()
  createParticles()
}

// 鼠标移动处理
const handleMouseMove = (e: MouseEvent) => {
  mouseX.value = e.clientX
  mouseY.value = e.clientY
}

// 鼠标离开窗口处理
const handleMouseLeave = () => {
  mouseX.value = -1000
  mouseY.value = -1000
}

onMounted(() => {
  setTimeout(() => {
    initCanvas()
    createParticles()
    animate()
  }, 100)
  
  window.addEventListener('resize', handleResize)
  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('mouseleave', handleMouseLeave)
})

onUnmounted(() => {
  if (animationFrameId.value) {
    cancelAnimationFrame(animationFrameId.value)
  }
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('mouseleave', handleMouseLeave)
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