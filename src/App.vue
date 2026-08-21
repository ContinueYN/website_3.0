<template>
  <div id="app" :class="{ 'dark': isDark }">
    <!-- 艺术背景 - 所有页面都显示 -->
    <ArtBackground
      :particle-count="isDark ? 120 : 60"
      :connect-distance="isDark ? 150 : 100"
      :is-dark="isDark"
    />

    <!-- 3D 碎片球开场转场（加载动画结束后、首页内容前） -->
    <ClusterIntro
      v-if="showIntro"
      @reveal="onIntroReveal"
      @fading="onIntroFading"
      @done="onIntroDone"
    />

    <!-- 博客相关页面 -->
    <template v-if="isBlogPath">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </template>
    
    <!-- 首页内容 - 等待加载动画完成后才渲染，带淡入过渡 -->
    <template v-else-if="showContent">
      <div class="home-content" :class="{ 'content-ready': contentReady }">
        <Header :isDark="isDark" @toggle-theme="toggleTheme" />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </template>

    <!-- 加载中：显示空白（loadback 覆盖层正在播放动画） -->
    <template v-else>
    </template>
  </div>
</template>

<script setup lang="ts">
/// <reference types="vite/client" />
import '@/styles/globals.css'
import { ref, onMounted, nextTick, computed, provide, watch } from 'vue'
import { useRoute } from 'vue-router'
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import ArtBackground from './components/ArtBackground.vue'
import ClusterIntro from './components/ClusterIntro.vue'
import AOS from 'aos'
import { useTheme } from './composables/useTheme'
import { shouldSkipCluster } from './utils/clusterGate'

const { isDark, toggleTheme } = useTheme()
const route = useRoute()

// 控制主页内容是否渲染（等待加载动画完成）
const showContent = ref(false)
// 控制内容淡入过渡（showContent 后下一帧触发，消除卡顿）
const contentReady = ref(false)
// 控制 3D 开场转场是否显示（加载完成后、支持 WebGPU 且非移动端时）
const showIntro = ref(false)
// AOS 只初始化一次（intro 正常/降级两条路径都会走到）
let aosInited = false

// 计算是否是博客相关路径
const isBlogPath = computed(() => {
  return route.path.startsWith('/blog')
})

// 提供主题状态和切换函数给所有子组件
provide('theme', {
  isDark,
  toggleTheme
})

// 挂载主页内容（内容淡入；AOS 由 initAOS 单独触发，保证 intro 遮罩未揭时入场动画不被吞掉）
function revealContent() {
  if (showContent.value) return
  showContent.value = true
  // nextTick + RAF：让浏览器先完成 layout，再触发淡入过渡，消除卡顿
  nextTick(() => {
    requestAnimationFrame(() => {
      contentReady.value = true
    })
  })
}

// 初始化 AOS（幂等）
function initAOS() {
  if (aosInited) return
  aosInited = true
  AOS.init({
    duration: 600,
    offset: 50,
    once: true,
    mirror: false,
    easing: 'ease-out',
    delay: 0,
    throttleDelay: 99
  })
}

// intro 事件：马赛克盖满屏幕 → 挂载内容；开始淡出 → 播 AOS；结束 → 卸载
const onIntroReveal = () => revealContent()
const onIntroFading = () => initAOS()
const onIntroDone = () => {
  showIntro.value = false
  // 兜底：intro 中途失败/降级时也保证内容出现并播动画
  if (!showContent.value) revealContent()
  initAOS()
}

onMounted(() => {
  // 等待加载动画完成后决定走哪条路
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const win: any = window
  const onLoadComplete = () => {
    if (isBlogPath.value) return
    if (shouldSkipCluster()) {
      // 不支持 WebGPU / 移动端：跳过 3D 转场，直接显示内容（保持原行为）
      revealContent()
      initAOS()
    } else {
      showIntro.value = true
      // 预热 three/webgpu 大 chunk，让转场尽快就绪
      void import('./utils/clusterIntro').catch(() => {})
    }
  }

  if (win.__loadingComplete) {
    onLoadComplete()
  } else {
    window.addEventListener('loading-complete', onLoadComplete)
  }
})

// 监听路由变化，刷新 AOS；intro 期间跳到博客则卸载转场
watch(route, () => {
  if (isBlogPath.value) showIntro.value = false
  setTimeout(() => {
    AOS.refresh()
  }, 300)
})
</script>

<style>
#app {
  min-height: 100vh;
  position: relative;
  background: transparent;
  transition: background-color 0.3s ease;
}

/* 首页内容淡入过渡 */
.home-content {
  opacity: 0;
  transition: opacity 0.4s ease;
}
.home-content.content-ready {
  opacity: 1;
}

/* 确保内容在背景之上；排除 header，避免覆盖 header 的 fixed 定位；
   排除 cluster-intro（3D 开场转场需盖在内容之上） */
#app > *:not(.particle-canvas):not(.header):not(.cluster-intro) {
  position: relative;
  z-index: 1;
}
</style>
