<template>
  <div id="app" :class="{ 'dark': isDark }">
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
import { computed, provide, watch } from 'vue'
import { useRoute } from 'vue-router'
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import ParticleBackground from './components/ParticleBackground.vue'
import AOS from 'aos'
import { useTheme } from './composables/useTheme'

const { isDark, toggleTheme } = useTheme()
const route = useRoute()

// 计算是否是博客相关路径
const isBlogPath = computed(() => {
  return route.path.startsWith('/blog')
})

// 提供主题状态和切换函数给所有子组件
provide('theme', {
  isDark,
  toggleTheme
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
</style>