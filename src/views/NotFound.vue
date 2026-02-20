<template>
  <div class="not-found" :class="{ 'dark': isDark }">
    <Header :isDark="isDark" @toggle-theme="toggleTheme" />
    <main>
      <section class="not-found-content">
        <div class="container">
          <h1 data-aos="fade-up">404</h1>
          <h2 data-aos="fade-up" data-aos-delay="100">页面未找到</h2>
          <p data-aos="fade-up" data-aos-delay="200">抱歉，您访问的页面不存在或已被删除。</p>
          <router-link to="/" class="btn" data-aos="fade-up" data-aos-delay="300">返回首页</router-link>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  isDark.value = savedTheme ? savedTheme === 'dark' : systemPrefersDark
})
</script>

<style scoped>
.not-found {
  min-height: 100vh;
  background: var(--bg-primary);
  transition: background-color 0.3s ease;
}

.not-found-content {
  padding: 8rem 0;
  text-align: center;
}

.not-found-content h1 {
  font-size: 6rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.not-found-content h2 {
  font-size: 2rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
}

.not-found-content p {
  font-size: 1.125rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 768px) {
  .not-found-content h1 {
    font-size: 4rem;
  }
  
  .not-found-content h2 {
    font-size: 1.5rem;
  }
  
  .not-found-content {
    padding: 6rem 0;
  }
}
</style>
