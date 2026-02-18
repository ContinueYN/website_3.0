<template>
  <header class="header">
    <nav class="nav container">
      <div class="logo">
        <a href="#home" class="logo-text">{{ poemContent || 'ContinueYN' }}</a>
      </div>
      
      <ul class="nav-links">
        <li><a href="#home" class="nav-link">首页</a></li>
        <li><a href="#about" class="nav-link">关于</a></li>
        <li><a href="#skills" class="nav-link">技能</a></li>
        <li><a href="#projects" class="nav-link">项目</a></li>
        <li><a href="#contact" class="nav-link">联系</a></li>
      </ul>
      
      <div class="nav-actions">
        <button @click="handleThemeToggle" class="theme-toggle" aria-label="切换主题" :class="{ 'animating': isAnimating }">
          <!-- 图片切换效果 -->
          <div class="theme-icon-image">
            <img :src="currentIcon" :alt="isDark ? '切换到日间模式' : '切换到夜间模式'" class="theme-icon current">
            <img :src="isDark ? lightIcon : darkIcon" :alt="isDark ? '日间模式' : '夜间模式'" class="theme-icon next">
          </div>
        </button>
        
        <button class="mobile-menu-btn" @click="toggleMobileMenu" aria-label="切换菜单">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
    
    <!-- 移动端菜单 -->
    <div v-if="mobileMenuOpen" class="mobile-menu">
      <a href="#home" class="mobile-nav-link" @click="closeMobileMenu">首页</a>
      <a href="#about" class="mobile-nav-link" @click="closeMobileMenu">关于</a>
      <a href="#skills" class="mobile-nav-link" @click="closeMobileMenu">技能</a>
      <a href="#projects" class="mobile-nav-link" @click="closeMobileMenu">项目</a>
      <a href="#contact" class="mobile-nav-link" @click="closeMobileMenu">联系</a>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

// 导入图片
import lightIcon from '../assets/images/light.png'
import darkIcon from '../assets/images/dark.png'

const props = defineProps({
  isDark: Boolean
})

const emit = defineEmits(['toggle-theme'])

const mobileMenuOpen = ref(false)
const poemContent = ref('') // 诗词内容
const isAnimating = ref(false) // 新增：动画状态

// 计算当前显示的图标
const currentIcon = computed(() => {
  return props.isDark ? darkIcon : lightIcon
})

// 修改主题切换处理函数
const handleThemeToggle = () => {
  if (isAnimating.value) return // 如果正在动画中，不执行
  
  isAnimating.value = true
  emit('toggle-theme')
  
  // 动画持续时间与CSS中保持一致
  setTimeout(() => {
    isAnimating.value = false
  }, 300) // 300ms与CSS transition时间匹配
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

// 加载诗词
const loadPoem = () => {
  if (window.jinrishici) {
    window.jinrishici.load(result => {
      poemContent.value = result.data.content
    })
  }
}

// 动态加载诗词SDK
const loadPoemSDK = () => {
  const script = document.createElement('script')
  script.src = 'https://sdk.jinrishici.com/v2/browser/jinrishici.js'
  script.charset = 'utf-8'
  script.onload = () => {
    loadPoem()
  }
  document.head.appendChild(script)
}

onMounted(() => {
  loadPoemSDK()
  
  // 滚动时添加阴影
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header')
    if (header) {
      if (window.scrollY > 10) {
        header.classList.add('scrolled')
      } else {
        header.classList.remove('scrolled')
      }
    }
  })
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  background: var(--bg-primary);
  z-index: 1000;
  transition: all 0.3s ease;
}

.header {
  animation: appear 2s ease 0.1s 1 normal backwards;
}

@keyframes appear {
  0% {
    opacity: 0;
    transform: translateY(-50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.header.scrolled {
  box-shadow: var(--shadow);
  background: var(--bg-primary);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
}

.logo-text {
  font-size: 1.2rem;
  font-weight: 600;
  text-decoration: none;
  color: var(--text-primary);
  font-style: italic;
  min-height: 1.5em;
  display: flex;
  align-items: center;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-link {
  text-decoration: none;
  color: var(--text-secondary);
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
}

.nav-link:hover {
  color: var(--primary-color);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary-color);
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.theme-toggle {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.theme-toggle:hover {
  background: var(--bg-secondary);
}

/* 主题切换按钮动画状态 */
.theme-toggle.animating {
  pointer-events: none;
}

.theme-toggle.animating .theme-icon.current {
  transform: scale(0.7) !important;
  opacity: 0 !important;
}

.theme-toggle.animating .theme-icon.next {
  opacity: 1 !important;
  transform: scale(1.5) !important;
}

/* 主题图标容器 */
.theme-icon-image {
  position: relative;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 主题图标样式 */
.theme-icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: all 0.3s ease;
}

/* 当前显示的图标 - 悬浮效果 */
.theme-icon.current {
  opacity: 1;
  transform: scale(1) rotate(0deg);
}

.theme-toggle:hover .theme-icon.current {
  /* 效果：旋转和缩放 */
  transform: scale(1.2) rotate(15deg);
  filter: brightness(0.4) contrast(1.2);
}

/* 下一个图标切换效果 */
.theme-icon.next {
  opacity: 0;
  transform: scale(1);
}

/* 点击时的切换效果 */
.theme-toggle:active .theme-icon.current {
  opacity: 0;
  transform: scale(0.7);
}

.theme-toggle:active .theme-icon.next {
  opacity: 1;
  transform: scale(1.5);
}

.mobile-menu-btn {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  gap: 4px;
}

.mobile-menu-btn span {
  width: 20px;
  height: 2px;
  background: var(--text-primary);
  transition: all 0.3s ease;
}

.mobile-menu {
  display: none;
  flex-direction: column;
  background: var(--bg-primary);
  border-top: 1px solid var(--border-color);
  padding: 1rem;
}

.mobile-nav-link {
  padding: 0.75rem 0;
  text-decoration: none;
  color: var(--text-primary);
  border-bottom: 1px solid var(--border-color);
  transition: color 0.3s ease;
}

.mobile-nav-link:hover {
  color: var(--primary-color);
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
  
  .mobile-menu-btn {
    display: flex;
  }
  
  .mobile-menu {
    display: flex;
  }
  
  .logo-text {
    font-size: 1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  /* 移动端调整图标大小 */
  .theme-icon-image {
    width: 20px;
    height: 20px;
  }
}
</style>