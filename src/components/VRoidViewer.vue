<template>
  <div ref="container" class="vroid-viewer">
    <div v-if="loading" class="loading-state">
      <div class="spinner"></div>
      <p>加载模型中...</p>
    </div>
    <div v-if="error" class="error-state">
      <p>模型加载失败</p>
      <p class="error-message">{{ error }}</p>
    </div>
    <div v-if="!loading && !error" class="drag-hint">↔ 拖拽旋转</div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { VRMLoaderPlugin, VRMUtils } from '@pixiv/three-vrm'

const container = ref(null)
const loading = ref(true)
const error = ref(null)
let scene, camera, renderer, vrm, mixer, clock
let time = 0
let isDragging = false
let isHovering = false
let previousMousePosition = { x: 0, y: 0 }
let targetRotation = 0
let rotationVelocity = 0
let blinkTimer = 0
let nextBlinkTime = 0
let isBlinking = false
let resizeObserver = null
let placeholderAnimationId = null
// 鼠标视差目标值（模型看向的方向偏移）
let parallaxTargetX = 0
let parallaxTargetY = 0
let parallaxCurrentX = 0
let parallaxCurrentY = 0

onMounted(() => {
  initScene()
  loadModel()
  animate()
  setupDragControls()
  setupResizeObserver()
})

onBeforeUnmount(() => {
  if (placeholderAnimationId) {
    cancelAnimationFrame(placeholderAnimationId)
  }
  if (resizeObserver) {
    resizeObserver.disconnect()
  }
  if (renderer) {
    renderer.dispose()
  }
  if (vrm) {
    vrm.scene.traverse((object) => {
      if (object.isMesh) {
        object.geometry.dispose()
        if (object.material.map) {
          object.material.map.dispose()
        }
        object.material.dispose()
      }
    })
  }
})

function setupResizeObserver() {
  if (!container.value) return
  resizeObserver = new ResizeObserver(() => {
    updateRendererSize()
  })
  resizeObserver.observe(container.value)
}

function updateRendererSize() {
  if (!container.value || !renderer) return
  const rect = container.value.getBoundingClientRect()
  const size = Math.min(rect.width, rect.height) || 200
  renderer.setSize(size, size)
  camera.aspect = 1
  camera.updateProjectionMatrix()
}

function initScene() {
  scene = new THREE.Scene()

  camera = new THREE.PerspectiveCamera(30, 1, 0.1, 20)
  camera.position.set(0, 1.35, 3.2)

  renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
  })
  renderer.setSize(200, 200)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.shadowMap.enabled = true

  if (container.value) {
    container.value.appendChild(renderer.domElement)
  }

  // 主光源
  const keyLight = new THREE.DirectionalLight(0xfff5e8, 1.3)
  keyLight.position.set(1, 1.5, 1.5)
  scene.add(keyLight)

  // 补光（填充阴影区域）
  const fillLight = new THREE.DirectionalLight(0xc8d6ff, 0.5)
  fillLight.position.set(-0.8, 0.6, -0.5)
  scene.add(fillLight)

  // 轮廓光（从背后打来，增加立体感）
  const rimLight = new THREE.DirectionalLight(0xffffff, 0.6)
  rimLight.position.set(0, 1.2, -1.5)
  scene.add(rimLight)

  // 环境光（均匀照亮）
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
  scene.add(ambientLight)

  clock = new THREE.Clock()
}

function loadModel() {
  const loader = new GLTFLoader()
  loader.register((parser) => new VRMLoaderPlugin(parser))
  
  const modelPath = new URL('/src/assets/3D/loi.vrm', import.meta.url).href
  
  loader.load(
    modelPath,
    (gltf) => {
      vrm = gltf.userData.vrm
      
      if (!vrm) {
        error.value = 'VRM 数据未找到，请确保文件是 VRM 格式'
        loading.value = false
        return
      }
      
      VRMUtils.removeUnnecessaryVertices(gltf.scene)
      VRMUtils.combineSkeletons(gltf.scene)
      
      vrm.scene.rotation.y = 0
      vrm.scene.position.y = 0.6
      
      scene.add(vrm.scene)

      mixer = new THREE.AnimationMixer(vrm.scene)

      // 设置微笑表情
      if (vrm.blendShapeProxy) {
        // 尝试笑脸相关名称
        const smileCandidates = ['joy', 'fun', 'happy', 'smile', 'laugh', 'grin', 'Joy', 'Fun', 'Happy', 'Smile']
        let found = false
        for (const name of smileCandidates) {
          try {
            vrm.blendShapeProxy.setValue(name, 0.25)
            found = true
            break
          } catch (e) { /* 静默 */ }
        }
      }

      loading.value = false
    },
    (progress) => {
      const percent = Math.round((progress.loaded / progress.total * 100))
    },
    (err) => {
      error.value = '请将 .vroid 文件转换为 .vrm 格式'
      loading.value = false
      
      createPlaceholderModel()
    }
  )
}

function createPlaceholderModel() {
  const geometry = new THREE.SphereGeometry(0.5, 32, 32)
  const material = new THREE.MeshStandardMaterial({
    color: 0x6366f1,
    wireframe: true
  })
  const sphere = new THREE.Mesh(geometry, material)

  sphere.position.y = 0

  scene.add(sphere)

  const animatePlaceholder = () => {
    placeholderAnimationId = requestAnimationFrame(animatePlaceholder)
    if (sphere) {
      sphere.rotation.y += 0.01
      sphere.rotation.x += 0.005
    }
  }

  animatePlaceholder()
}

function setupDragControls() {
  const canvas = renderer.domElement

  canvas.addEventListener('mousedown', (e) => {
    isDragging = true
    rotationVelocity = 0
    previousMousePosition = { x: e.clientX, y: e.clientY }
  })

  canvas.addEventListener('mousemove', (e) => {
    if (!vrm) return

    if (isDragging) {
      const deltaX = e.clientX - previousMousePosition.x
      rotationVelocity = deltaX * 0.01
      targetRotation += rotationVelocity
      previousMousePosition = { x: e.clientX, y: e.clientY }
    } else if (isHovering) {
      // 鼠标视差：模型微微看向鼠标方向
      const rect = canvas.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      parallaxTargetX = (e.clientY - centerY) / (rect.height / 2) * 0.08
      parallaxTargetY = (e.clientX - centerX) / (rect.width / 2) * 0.12
    }
  })

  canvas.addEventListener('mouseup', () => {
    isDragging = false
  })

  canvas.addEventListener('mouseenter', () => {
    isHovering = true
  })

  canvas.addEventListener('mouseleave', () => {
    isDragging = false
    isHovering = false
    // 鼠标离开时复位视差
    parallaxTargetX = 0
    parallaxTargetY = 0
  })

  canvas.addEventListener('touchstart', (e) => {
    isDragging = true
    rotationVelocity = 0
    previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY }
  })

  canvas.addEventListener('touchmove', (e) => {
    if (!isDragging || !vrm) return

    const deltaX = e.touches[0].clientX - previousMousePosition.x
    rotationVelocity = deltaX * 0.01
    targetRotation += rotationVelocity
    previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY }
  })

  canvas.addEventListener('touchend', () => {
    isDragging = false
  })
}

// 更真实的呼吸曲线：吸气快、呼气慢，非对称正弦波
function breathingCurve(t) {
  // 使用两个不同频率和相位的正弦波叠加，模拟自然的呼吸节奏
  // 吸气约1.5秒，呼气约2.5秒，总共约4秒一周期
  const primary = Math.sin(t * 1.57)
  // 添加轻微的不规则性
  const secondary = Math.sin(t * 3.14 + 1.2) * 0.25
  // 让峰值（吸气结束）更尖锐，谷值（呼气结束）更平缓
  const shaped = Math.pow(Math.abs((primary + 1) / 2), 0.7) * 2 - 1
  return shaped + secondary * 0.15
}

function animate() {
  requestAnimationFrame(animate)

  const delta = Math.min(clock.getDelta(), 0.1) // 防止大帧跳跃
  time += delta

  if (mixer) {
    mixer.update(delta)
  }

  if (vrm) {
    vrm.update(delta)

    const leftArm = vrm.humanoid.getNormalizedBoneNode('leftUpperArm')
    const rightArm = vrm.humanoid.getNormalizedBoneNode('rightUpperArm')
    const leftLowerArm = vrm.humanoid.getNormalizedBoneNode('leftLowerArm')
    const rightLowerArm = vrm.humanoid.getNormalizedBoneNode('rightLowerArm')
    const leftLeg = vrm.humanoid.getNormalizedBoneNode('leftUpperLeg')
    const rightLeg = vrm.humanoid.getNormalizedBoneNode('rightUpperLeg')
    const leftLowerLeg = vrm.humanoid.getNormalizedBoneNode('leftLowerLeg')
    const rightLowerLeg = vrm.humanoid.getNormalizedBoneNode('rightLowerLeg')
    const spine = vrm.humanoid.getNormalizedBoneNode('spine')
    const head = vrm.humanoid.getNormalizedBoneNode('head')
    const hips = vrm.humanoid.getNormalizedBoneNode('hips')

    // ===== 真实呼吸曲线：吸气快、呼气慢 (~4s周期) =====
    const breathCycle = breathingCurve(time)
    const breathSubtle = Math.sin(time * 2.1 + 0.7) * 0.25

    // ===== 重心转移：多频率叠加模拟自然站立换重心 (~3-6s周期) =====
    const weightShift = Math.sin(time * 1.3) * 0.7 + Math.sin(time * 0.7 + 1.8) * 0.3
    const weightShiftSlow = Math.sin(time * 0.55 + 1.2) * 0.6 + Math.sin(time * 0.35 + 3.1) * 0.4

    // ===== 微运动噪声：高频低幅，模拟肌肉微颤 =====
    const microNoise1 = Math.sin(time * 4.3 + 0.3) * 0.025
    const microNoise2 = Math.sin(time * 5.1 + 1.7) * 0.02
    const microNoise3 = Math.sin(time * 3.7 + 2.9) * 0.018

    // ===== 眨眼逻辑 =====
    updateBlink(delta)

    // ===== 头部：缓慢自然环视 + 偶尔的"注意到什么"的小动作 =====
    if (head) {
      // 基础环视：多层不同频率叠加
      const baseLookX = Math.sin(time * 0.7) * 0.05 + Math.sin(time * 1.3 + 0.8) * 0.03
      const baseLookY = Math.sin(time * 0.55 + 0.5) * 0.07 + Math.sin(time * 1.1 + 2.1) * 0.04
      const baseLookZ = Math.sin(time * 0.45 + 1.0) * 0.03 + Math.sin(time * 1.6) * 0.02

      // 偶尔的"注意到什么"：每隔一段时间有一次稍大的转头
      const attentionCycle = time * 0.15 // 非常慢的周期
      const attentionTrigger = (Math.sin(attentionCycle) + 1) / 2 // 0到1平滑变化
      // 用平滑阶跃函数：只在接近1时触发
      const attentionPulse = Math.pow(Math.max(0, attentionTrigger - 0.85) * 6.67, 3)
      const attentionX = Math.sin(time * 1.8 + 0.3) * 0.08 * attentionPulse
      const attentionY = Math.cos(time * 1.5 + 0.7) * 0.12 * attentionPulse

      head.rotation.x = baseLookX + attentionX + microNoise1
      head.rotation.y = baseLookY + attentionY
      head.rotation.z = baseLookZ + microNoise3 * 0.5
    }

    // ===== 脊柱：呼吸带动躯干起伏 + 重心侧倾 =====
    if (spine) {
      spine.rotation.x = breathCycle * 0.05 + breathSubtle * 0.02
      spine.rotation.z = weightShift * 0.035 + weightShiftSlow * 0.025
      spine.rotation.y = weightShift * 0.025
    }

    // ===== 髋部：重心转移的主要支点 =====
    if (hips) {
      hips.rotation.z = weightShift * 0.05 + weightShiftSlow * 0.035
      hips.rotation.x = breathCycle * 0.025
    }

    // ===== 手指导入（用于比耶手势） =====
    const leftIndex = vrm.humanoid.getNormalizedBoneNode('leftIndexProximal')
    const leftMiddle = vrm.humanoid.getNormalizedBoneNode('leftMiddleProximal')
    const leftRing = vrm.humanoid.getNormalizedBoneNode('leftRingProximal')
    const leftLittle = vrm.humanoid.getNormalizedBoneNode('leftLittleProximal')
    const leftThumb = vrm.humanoid.getNormalizedBoneNode('leftThumbProximal')
    const rightIndex = vrm.humanoid.getNormalizedBoneNode('rightIndexProximal')
    const rightMiddle = vrm.humanoid.getNormalizedBoneNode('rightMiddleProximal')
    const rightRing = vrm.humanoid.getNormalizedBoneNode('rightRingProximal')
    const rightLittle = vrm.humanoid.getNormalizedBoneNode('rightLittleProximal')
    const rightThumb = vrm.humanoid.getNormalizedBoneNode('rightThumbProximal')

    // ===== 手部循环动作 =====
    // 手臂随节奏左右轻摆 (~1.5Hz)
    const armSway = Math.sin(time * 3.0) * 0.1
    const armSwayAlt = Math.sin(time * 3.0 + Math.PI) * 0.1  // 左右交替
    // 前臂小幅画圈
    const forearmCircleX = Math.sin(time * 2.2) * 0.06
    const forearmCircleY = Math.cos(time * 2.2) * 0.06
    // 比耶手指微微开合 (~2Hz)
    const vFingerPulse = Math.sin(time * 2.0) * 0.07

    // ==========================================
    // 双手比耶（举手到脸旁，食指+中指伸出）
    // ==========================================
    if (rightArm) {
      rightArm.rotation.z = 0.65 + armSwayAlt + weightShift * 0.03 + breathCycle * 0.015 + microNoise2
      rightArm.rotation.x = -0.45 + forearmCircleX * 0.5 - weightShift * 0.02 + breathCycle * 0.02 + microNoise3
      rightArm.rotation.y = -0.18 + forearmCircleY * 0.5 + weightShift * 0.02 + microNoise1
    }
    if (rightLowerArm) {
      rightLowerArm.rotation.x = -0.9 + armSwayAlt * 0.5 - weightShift * 0.03 + breathCycle * 0.015 + microNoise2
      rightLowerArm.rotation.z = 0.5 + armSway + microNoise1 * 0.3
      rightLowerArm.rotation.y = -0.1 + forearmCircleY + microNoise2 * 0.3
    }

    if (leftArm) {
      leftArm.rotation.z = -0.65 + armSway + weightShift * 0.04 + breathCycle * 0.015 + microNoise1
      leftArm.rotation.x = -0.45 + forearmCircleX * 0.5 + weightShift * 0.03 + breathCycle * 0.02 + microNoise2
      leftArm.rotation.y = 0.18 + forearmCircleY * 0.5 + weightShift * 0.02 + microNoise3
    }
    if (leftLowerArm) {
      leftLowerArm.rotation.x = -0.9 + armSway * 0.5 + weightShift * 0.03 + breathCycle * 0.015 + microNoise3
      leftLowerArm.rotation.z = -0.5 + armSwayAlt + microNoise1 * 0.3
      leftLowerArm.rotation.y = 0.1 + forearmCircleY + microNoise2 * 0.3
    }

    // 手指：比耶 + 循环微动
    if (leftIndex) leftIndex.rotation.x = 0.05 + vFingerPulse + microNoise1 * 0.2
    if (leftMiddle) leftMiddle.rotation.x = 0.05 + vFingerPulse + microNoise2 * 0.2
    if (leftRing) leftRing.rotation.x = 1.2 - vFingerPulse * 0.5 + microNoise3 * 0.2
    if (leftLittle) leftLittle.rotation.x = 1.2 - vFingerPulse * 0.5 + microNoise1 * 0.2
    if (leftThumb) { leftThumb.rotation.x = 0.6 + vFingerPulse * 0.3; leftThumb.rotation.z = 0.3 }

    if (rightIndex) rightIndex.rotation.x = 0.05 + vFingerPulse + microNoise2 * 0.2
    if (rightMiddle) rightMiddle.rotation.x = 0.05 + vFingerPulse + microNoise3 * 0.2
    if (rightRing) rightRing.rotation.x = 1.2 - vFingerPulse * 0.5 + microNoise1 * 0.2
    if (rightLittle) rightLittle.rotation.x = 1.2 - vFingerPulse * 0.5 + microNoise2 * 0.2
    if (rightThumb) { rightThumb.rotation.x = 0.6 + vFingerPulse * 0.3; rightThumb.rotation.z = -0.3 }

    // ===== 腿部：微小重心调整 =====
    if (leftLeg) {
      leftLeg.rotation.x = weightShift * 0.04 + weightShiftSlow * 0.03 + microNoise1 * 0.5
      leftLeg.rotation.z = weightShift * 0.02 + microNoise2 * 0.5
    }

    if (rightLeg) {
      rightLeg.rotation.x = -weightShift * 0.04 - weightShiftSlow * 0.03 + microNoise2 * 0.5
      rightLeg.rotation.z = -weightShift * 0.02 + microNoise3 * 0.5
    }

    if (leftLowerLeg) {
      leftLowerLeg.rotation.x = weightShift * 0.02 + microNoise3 * 0.3
    }

    if (rightLowerLeg) {
      rightLowerLeg.rotation.x = -weightShift * 0.02 + microNoise1 * 0.3
    }

    // ===== 整体模型动画 =====
    // 拖拽惯性：松手后继续滑动并逐渐衰减
    if (!isDragging && Math.abs(rotationVelocity) > 0.0001) {
      targetRotation += rotationVelocity
      rotationVelocity *= 0.94 // 摩擦衰减
    } else if (!isDragging && Math.abs(rotationVelocity) <= 0.0001) {
      rotationVelocity = 0
    }

    // 平滑跟随目标旋转（阻尼插值）
    vrm.scene.rotation.y += (targetRotation - vrm.scene.rotation.y) * 0.06

    // 无拖拽无惯性时的缓慢自动微旋转
    if (!isDragging && Math.abs(rotationVelocity) < 0.0005) {
      vrm.scene.rotation.y += Math.sin(time * 0.35 + 1.5) * 0.0006
    }

    // 鼠标视差效果：平滑插值
    parallaxCurrentX += (parallaxTargetX - parallaxCurrentX) * 0.05
    parallaxCurrentY += (parallaxTargetY - parallaxCurrentY) * 0.05

    // 将视差应用到模型（让模型微微倾斜面向鼠标）
    if (Math.abs(parallaxCurrentX) > 0.001 || Math.abs(parallaxCurrentY) > 0.001) {
      vrm.scene.rotation.x = parallaxCurrentX
      // 额外地调整rotation.y，叠加在拖拽旋转上
      vrm.scene.rotation.y += parallaxCurrentY * 0.3
    } else if (!isDragging) {
      // 缓慢复位
      vrm.scene.rotation.x += (0 - vrm.scene.rotation.x) * 0.03
    }

    // 呼吸带动的身体上下微动
    vrm.scene.position.y = 0.6 + breathCycle * 0.025

    // ===== 微笑表情（最后应用，确保不被覆盖） =====
    if (vrm.blendShapeProxy) {
      try {
        vrm.blendShapeProxy.setValue('joy', 1.0)
      } catch (e) { }
    }
  }

  renderer.render(scene, camera)
}

// ===== 眨眼系统 =====
function updateBlink(delta) {
  if (!vrm || !vrm.blendShapeProxy) return

  blinkTimer += delta

  if (!isBlinking && blinkTimer >= nextBlinkTime) {
    // 开始眨眼
    isBlinking = true
    blinkTimer = 0
  }

  if (isBlinking) {
    // 眨眼动画：快速闭眼 -> 短暂停留 -> 睁眼
    const blinkDuration = 0.15  // 总眨眼时长150ms
    const progress = Math.min(blinkTimer / blinkDuration, 1)

    // 使用平滑的三次曲线模拟眨眼
    let blinkValue
    if (progress < 0.35) {
      // 闭眼阶段（快）
      blinkValue = Math.sin((progress / 0.35) * Math.PI * 0.5)  // 0 -> 1
    } else if (progress < 0.5) {
      // 眼闭保持
      blinkValue = 1
    } else {
      // 睁眼阶段（稍慢）
      const openProgress = (progress - 0.5) / 0.5
      blinkValue = 1 - Math.sin(openProgress * Math.PI * 0.5)  // 1 -> 0
    }

    // 应用眨眼到blend shape
    try {
      vrm.blendShapeProxy.setValue('blink', blinkValue)
    } catch (e) {
      // 某些VRM模型的blend shape名称可能不同，静默处理
    }

    if (progress >= 1) {
      isBlinking = false
      blinkTimer = 0
      // 随机间隔2-6秒再眨眼
      nextBlinkTime = 2 + Math.random() * 4

      // 重置blink值
      try {
        vrm.blendShapeProxy.setValue('blink', 0)
      } catch (e) { }
    }
  }

  // 首次初始化眨眼时间
  if (nextBlinkTime === 0) {
    nextBlinkTime = 1 + Math.random() * 3
  }
}
</script>

<style scoped>
.vroid-viewer {
  width: 280px;
  height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0 auto;
  cursor: grab;
  -webkit-tap-highlight-color: transparent;
}

.vroid-viewer:active {
  cursor: grabbing;
}

.vroid-viewer canvas {
  border-radius: 16px;
  background: radial-gradient(
    ellipse at 50% 40%,
    rgba(99, 102, 241, 0.06) 0%,
    rgba(99, 102, 241, 0.02) 50%,
    transparent 70%
  );
  transition: box-shadow 0.3s ease;
}

.vroid-viewer:hover canvas {
  box-shadow: 0 8px 32px rgba(99, 102, 241, 0.12);
}

.loading-state,
.error-state {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  border-radius: 16px;
  text-align: center;
  padding: 1rem;
  color: var(--text-primary);
  z-index: 10;
}

.dark .loading-state,
.dark .error-state {
  background: rgba(15, 15, 25, 0.9);
}

.spinner {
  width: 32px;
  height: 32px;
  border: 3px solid var(--border-color);
  border-top-color: var(--primary-color);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin-bottom: 0.75rem;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.error-message {
  font-size: 0.8rem;
  color: var(--text-secondary);
  margin-top: 0.25rem;
}

.drag-hint {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(6px);
  color: rgba(255, 255, 255, 0.85);
  padding: 4px 14px;
  border-radius: 20px;
  font-size: 0.75rem;
  pointer-events: none;
  opacity: 0;
  transform: translateX(-50%) translateY(4px);
  transition: opacity 0.35s ease, transform 0.35s ease;
  z-index: 5;
  white-space: nowrap;
}

.vroid-viewer:hover .drag-hint {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

/* 响应式 */
@media (max-width: 768px) {
  .vroid-viewer {
    width: 220px;
    height: 260px;
  }

  .drag-hint {
    font-size: 0.7rem;
    padding: 3px 10px;
  }
}

@media (max-width: 480px) {
  .vroid-viewer {
    width: 180px;
    height: 220px;
  }
}
</style>
