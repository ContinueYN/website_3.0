<template>
  <div id="app" :class="{ 'dark': isDark }">
    <!-- 页面加载动画 -->
    <div v-if="isLoading" class="loading-screen" :class="{ 'loading-hidden': !isLoading }">
      <div class="loading-content">
        <div class="loading-spinner"></div>
        <p class="loading-text">加载中...</p>
      </div>
    </div>
    
    <!-- 博客相关页面 -->
    <template v-if="isBlogPath">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </template>
    
    <!-- 首页内容 -->
    <template v-else>
      <ParticleBackground 
        :particle-count="isDark ? 120 : 60" 
        :connect-distance="isDark ? 150 : 100"
        :is-dark="isDark"
      />
      <Header :isDark="isDark" @toggle-theme="toggleTheme" />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </template>
  </div>
</template>

<script setup>
import '@/styles/globals.css'
import { ref, onMounted, computed, provide } from 'vue'
import { useRoute } from 'vue-router'
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import ParticleBackground from './components/ParticleBackground.vue'

const isDark = ref(false)
const isLoading = ref(true)
const route = useRoute()

// 计算是否是博客相关路径
const isBlogPath = computed(() => {
  return route.path.startsWith('/blog')
})

const toggleTheme = () => {
  isDark.value = !isDark.value
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

// 提供主题状态和切换函数给所有子组件
provide('theme', {
  isDark,
  toggleTheme
})

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  isDark.value = savedTheme ? savedTheme === 'dark' : systemPrefersDark
  
  // 模拟加载过程，1.5秒后隐藏加载动画
  setTimeout(() => {
    isLoading.value = false
  }, 1500)
})
</script>

<style>
#app {
  min-height: 100vh;
  position: relative;
  background: var(--bg-primary);
  transition: background-color 0.3s ease;
}

/* 确保内容在背景之上；排除 header，避免覆盖 header 的 fixed 定位 */
#app > *:not(.particle-canvas):not(.header) {
  position: relative;
  z-index: 1;
}

/* 加载动画样式 */
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: var(--bg-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  transition: all 0.5s ease;
}

.loading-hidden {
  opacity: 0;
  visibility: hidden;
  transform: scale(1.1);
}

.loading-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 3px solid var(--border-color);
  border-top: 3px solid var(--primary-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.loading-text {
  font-size: 1rem;
  color: var(--text-primary);
  font-weight: 500;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

</style>