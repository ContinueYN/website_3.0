<template>
  <div class="home">
    <ArtBackground 
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
  </div>
</template>

<script setup>
import '@/styles/globals.css'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Header from '../components/Header.vue'
import Hero from '../components/Hero.vue'
import About from '../components/About.vue'
import Skills from '../components/Skills.vue'
import Projects from '../components/Projects.vue'
import Contact from '../components/Contact.vue'
import Footer from '../components/Footer.vue'
import ArtBackground from '../components/ArtBackground.vue'
import { useTheme } from '../composables/useTheme'

const { isDark, toggleTheme } = useTheme()
const isLoading = ref(true)

// 滚动触发动画
const initScrollAnimations = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active')
        observer.unobserve(entry.target)
      }
    })
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  })

  // 观察所有需要动画的元素
  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
    observer.observe(el)
  })
}

onMounted(() => {
  // 模拟加载过程，1.5秒后隐藏加载动画
  setTimeout(() => {
    isLoading.value = false
    // 初始化滚动动画
    setTimeout(() => {
      initScrollAnimations()
    }, 100)
  }, 1500)
})

onBeforeUnmount(() => {
  // 清理工作
})
</script>

<style scoped>
.home {
  min-height: 100vh;
  position: relative;
  background: var(--bg-primary);
  transition: background-color 0.3s ease;
}

/* 确保内容在背景之上；排除 header，避免覆盖 header 的 fixed 定位 */
.home > *:not(.particle-canvas):not(.header) {
  position: relative;
  z-index: 1;
}

/* 确保粒子画布在最底层 */
.home :deep(.particle-canvas) {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 100% !important;
  z-index: 0 !important;
  pointer-events: none !important;
}

/* 移动端地址栏收起/展开时避免首屏高度跳动 */
@media (max-width: 768px) {
  .home {
    min-height: 100svh;
    min-height: 100dvh;
  }
}
</style>
