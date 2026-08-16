<template>
  <div id="app" :class="{ 'dark': isDark }">
    <!-- 艺术背景 - 所有页面都显示 -->
    <ArtBackground 
      :particle-count="isDark ? 120 : 60" 
      :connect-distance="isDark ? 150 : 100"
      :is-dark="isDark"
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
import AOS from 'aos'
import { useTheme } from './composables/useTheme'

const { isDark, toggleTheme } = useTheme()
const route = useRoute()

// 控制主页内容是否渲染（等待加载动画完成）
const showContent = ref(false)
// 控制内容淡入过渡（showContent 后下一帧触发，消除卡顿）
const contentReady = ref(false)

// 计算是否是博客相关路径
const isBlogPath = computed(() => {
  return route.path.startsWith('/blog')
})

// 提供主题状态和切换函数给所有子组件
provide('theme', {
  isDark,
  toggleTheme
})

onMounted(() => {
  // 等待加载动画完成后才显示内容
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const win: any = window
  const onLoadComplete = () => {
    showContent.value = true
    // nextTick + RAF：让浏览器先完成 layout，再触发淡入过渡，消除卡顿
    nextTick(() => {
      requestAnimationFrame(() => {
        contentReady.value = true
        // 内容淡入后再初始化 AOS
        AOS.init({
          duration: 600,
          offset: 50,
          once: true,
          mirror: false,
          easing: 'ease-out',
          delay: 0,
          throttleDelay: 99
        })
      })
    })
  }

  if (win.__loadingComplete) {
    onLoadComplete()
  } else {
    window.addEventListener('loading-complete', onLoadComplete)
  }
})

// 监听路由变化，刷新 AOS
watch(route, () => {
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

/* 确保内容在背景之上；排除 header，避免覆盖 header 的 fixed 定位 */
#app > *:not(.particle-canvas):not(.header) {
  position: relative;
  z-index: 1;
}
</style>
