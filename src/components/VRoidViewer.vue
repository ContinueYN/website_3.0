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
let previousMousePosition = { x: 0, y: 0 }
let targetRotation = 0

onMounted(() => {
  initScene()
  loadModel()
  animate()
  setupDragControls()
})

onBeforeUnmount(() => {
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

function initScene() {
  scene = new THREE.Scene()
  
  camera = new THREE.PerspectiveCamera(30, 1, 0.1, 20)
  camera.position.set(0, 1.4, 3)
  
  renderer = new THREE.WebGLRenderer({ 
    alpha: true, 
    antialias: true 
  })
  renderer.setSize(200, 200)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  
  if (container.value) {
    container.value.appendChild(renderer.domElement)
  }
  
  const light = new THREE.DirectionalLight(0xffffff, 1)
  light.position.set(1, 1, 1).normalize()
  scene.add(light)
  
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.4)
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
  
  sphere.rotation.y = Math.PI
  sphere.position.y = 0
  
  scene.add(sphere)
  
  const animatePlaceholder = () => {
    if (sphere) {
      sphere.rotation.y += 0.01
      sphere.rotation.x += 0.005
    }
  }
  
  setInterval(animatePlaceholder, 16)
}

function setupDragControls() {
  const canvas = renderer.domElement
  
  canvas.addEventListener('mousedown', (e) => {
    isDragging = true
    previousMousePosition = { x: e.clientX, y: e.clientY }
  })
  
  canvas.addEventListener('mousemove', (e) => {
    if (!isDragging || !vrm) return
    
    const deltaX = e.clientX - previousMousePosition.x
    targetRotation += deltaX * 0.01
    previousMousePosition = { x: e.clientX, y: e.clientY }
  })
  
  canvas.addEventListener('mouseup', () => {
    isDragging = false
  })
  
  canvas.addEventListener('mouseleave', () => {
    isDragging = false
  })
  
  canvas.addEventListener('touchstart', (e) => {
    isDragging = true
    previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY }
  })
  
  canvas.addEventListener('touchmove', (e) => {
    if (!isDragging || !vrm) return
    
    const deltaX = e.touches[0].clientX - previousMousePosition.x
    targetRotation += deltaX * 0.01
    previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY }
  })
  
  canvas.addEventListener('touchend', () => {
    isDragging = false
  })
}

function animate() {
  requestAnimationFrame(animate)
  
  const delta = clock.getDelta()
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
    
    if (leftArm) {
      leftArm.rotation.z = Math.sin(time * 8) * 0.8 + 0.3
      leftArm.rotation.x = Math.sin(time * 8 + Math.PI) * 0.3
    }
    
    if (rightArm) {
      rightArm.rotation.z = Math.sin(time * 8 + Math.PI) * 0.8 - 0.3
      rightArm.rotation.x = Math.sin(time * 8) * 0.3
    }
    
    if (leftLowerArm) {
      leftLowerArm.rotation.x = Math.sin(time * 8 + Math.PI) * 0.5 + 0.3
    }
    
    if (rightLowerArm) {
      rightLowerArm.rotation.x = Math.sin(time * 8) * 0.5 + 0.3
    }
    
    if (leftLeg) {
      leftLeg.rotation.x = Math.sin(time * 8 + Math.PI) * 0.6
    }
    
    if (rightLeg) {
      rightLeg.rotation.x = Math.sin(time * 8) * 0.6
    }
    
    if (leftLowerLeg) {
      leftLowerLeg.rotation.x = Math.sin(time * 8 + Math.PI) * 0.4
    }
    
    if (rightLowerLeg) {
      rightLowerLeg.rotation.x = Math.sin(time * 8) * 0.4
    }
    
    if (spine) {
      spine.rotation.x = Math.sin(time * 8) * 0.1
    }
    
    if (head) {
      head.rotation.x = Math.sin(time * 8) * 0.05
    }
    
    vrm.scene.rotation.y += (targetRotation - vrm.scene.rotation.y) * 0.1
    vrm.scene.position.y = 0.6 + Math.abs(Math.sin(time * 8)) * 0.05
  }
  
  renderer.render(scene, camera)
}
</script>

<style scoped>
.vroid-viewer {
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.vroid-viewer canvas {
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
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
  border-radius: 12px;
  text-align: center;
  padding: 1rem;
  color: var(--text-primary);
}

.spinner {
  width: 30px;
  height: 30px;
  border: 3px solid var(--border-color);
  border-top-color: var(--primary-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 0.5rem;
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
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.75rem;
  pointer-events: none;
  opacity: 0.8;
  transition: opacity 0.3s;
}

.vroid-viewer:hover .drag-hint {
  opacity: 1;
}
</style>
