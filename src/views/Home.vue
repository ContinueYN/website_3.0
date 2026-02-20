<template>
  <div class="home">
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
  </div>
</template>

<script setup>
import '@/styles/globals.css'
import { ref, onMounted } from 'vue'
import Header from '../components/Header.vue'
import Hero from '../components/Hero.vue'
import About from '../components/About.vue'
import Skills from '../components/Skills.vue'
import Projects from '../components/Projects.vue'
import Contact from '../components/Contact.vue'
import Footer from '../components/Footer.vue'
import ParticleBackground from '../components/ParticleBackground.vue'

const isDark = ref(false)
const isLoading = ref(true)

const toggleTheme = () => {
  isDark.value = !isDark.value
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

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
</style>
