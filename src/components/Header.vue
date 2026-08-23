<template>
  <header class="header">
    <div class="scroll-progress" :style="{ width: scrollProgress + '%' }"></div>
    <nav class="nav container">
      <div class="logo">
        <RouterLink to="/" class="logo-text">{{ poemContent || 'ContinueYN' }}</RouterLink>
      </div>
      
      <ul class="nav-links">
        <li><router-link to="/" class="nav-link">首页</router-link></li>
        <li><a href="#about" class="nav-link" @click.prevent="scrollToSection('#about')">关于</a></li>
        <li><a href="#skills" class="nav-link" @click.prevent="scrollToSection('#skills')">技能</a></li>
        <li><a href="#projects" class="nav-link" @click.prevent="scrollToSection('#projects')">项目</a></li>
        <li><a href="#contact" class="nav-link" @click.prevent="scrollToSection('#contact')">联系</a></li>
        <li><router-link to="/blog" class="nav-link">文章</router-link></li>
      </ul>
      
      <div class="nav-actions">
        <button @click="handleThemeToggle" class="theme-toggle" aria-label="切换主题" :class="{ 'animating': isAnimating }">
          <div class="theme-icon-image">
            <img :src="currentIcon" :alt="isDark ? '切换到日间模式' : '切换到夜间模式'" class="theme-icon current" loading="lazy">
            <img :src="isDark ? lightIcon : darkIcon" :alt="isDark ? '日间模式' : '夜间模式'" class="theme-icon next" loading="lazy">
          </div>
        </button>
        
        <button 
          @click="scrollToTop" 
          class="back-to-top" 
          aria-label="回到顶部" 
          :class="{ 'show': showBackToTop }"
        >
          <div class="back-to-top-content">
            <div class="sakura-petal petal-1"></div>
            <div class="sakura-petal petal-2"></div>
            <div class="sakura-petal petal-3"></div>
            <div class="star-icon">✦</div>
            <ArrowUp size="20" class="arrow-icon" />
          </div>
          <div class="back-to-top-glow"></div>
        </button>
        
        <button class="mobile-menu-btn" @click="toggleMobileMenu" aria-label="切换菜单" :class="{ open: mobileMenuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
    
    <Transition name="menu-backdrop">
      <div v-if="mobileMenuOpen" class="mobile-menu-backdrop" @click="closeMobileMenu()"></div>
    </Transition>
    <Transition name="menu-drop">
      <div v-if="mobileMenuOpen" class="mobile-menu">
        <router-link to="/" class="mobile-nav-link" @click="closeMobileMenu()">首页</router-link>
        <a href="#about" class="mobile-nav-link" @click.prevent="() => { scrollToSection('#about'); closeMobileMenu(); }">关于</a>
        <a href="#skills" class="mobile-nav-link" @click.prevent="() => { scrollToSection('#skills'); closeMobileMenu(); }">技能</a>
        <a href="#projects" class="mobile-nav-link" @click.prevent="() => { scrollToSection('#projects'); closeMobileMenu(); }">项目</a>
        <a href="#contact" class="mobile-nav-link" @click.prevent="() => { scrollToSection('#contact'); closeMobileMenu(); }">联系</a>
        <router-link to="/blog" class="mobile-nav-link" @click="closeMobileMenu()">博客</router-link>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed, watch } from 'vue'
import { RouterLink } from 'vue-router'
import { ArrowUp } from 'lucide-vue-next'

// 导入图片
import lightIcon from '../assets/images/light.png'
import darkIcon from '../assets/images/dark.png'

// 平滑滚动到指定元素
const scrollToSection = (sectionId) => {
  // 检查当前是否在首页
  if (window.location.pathname !== '/') {
    // 如果不在首页，先导航到首页，然后在页面加载后滚动到指定部分
    window.location.href = `/#${sectionId.substring(1)}`
  } else {
    // 如果在首页，直接滚动到指定部分
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }
}

const props = defineProps({
  isDark: Boolean
})

const emit = defineEmits(['toggle-theme'])

const mobileMenuOpen = ref(false)
const poemContent = ref('')
const isAnimating = ref(false)
const showBackToTop = ref(false)
const scrollProgress = ref(0)

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

// 菜单打开时锁定 body 滚动，避免背景跟着滚
watch(mobileMenuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

// 回到顶部方法
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
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
  // 防止组件重复挂载时重复注入脚本
  if (window.jinrishici || document.querySelector('script[data-poem-sdk]')) {
    loadPoem()
    return
  }

  const script = document.createElement('script')
  script.src = 'https://sdk.jinrishici.com/v2/browser/jinrishici.js'
  script.charset = 'utf-8'
  script.dataset.poemSdk = ''
  script.onload = () => {
    loadPoem()
  }
  script.onerror = () => {
    // 加载失败时保持默认文案，不阻塞导航栏
  }
  document.head.appendChild(script)
}

let headerEl = null

const onScroll = () => {
  if (headerEl) {
    if (window.scrollY > 10) {
      headerEl.classList.add('scrolled')
    } else {
      headerEl.classList.remove('scrolled')
    }
  }

  // 控制回到顶部按钮显示
  if (window.scrollY > 300) {
    showBackToTop.value = true
  } else {
    showBackToTop.value = false
  }

  // 计算滚动进度
  const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
  const scrolled = (window.scrollY / windowHeight) * 100
  scrollProgress.value = Math.min(100, Math.max(0, scrolled))
}

onMounted(() => {
  loadPoemSDK()

  headerEl = document.querySelector('.header')

  // 滚动时添加阴影和控制回到顶部按钮
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: transparent;
  z-index: 3000;
  transition: all 0.3s ease;
}

.scroll-progress {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  background: var(--gradient-primary);
  transition: width 0.1s ease-out;
  box-shadow: var(--shadow-glow);
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
  background: var(--glass-bg);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
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

/* 回到顶部按钮 - 二次元风格 */
.back-to-top {
  position: relative;
  background: linear-gradient(135deg, #ffb7c5, #ff9eb5);
  border: 2px solid rgba(255, 255, 255, 0.3);
  cursor: pointer;
  padding: 0.75rem;
  border-radius: 50%;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: translateY(20px) scale(0.8);
  pointer-events: none;
  color: white;
  box-shadow: 0 5px 20px rgba(255, 183, 197, 0.4),
              0 0 30px rgba(255, 183, 197, 0.2);
  overflow: visible;
  width: 50px;
  height: 50px;
}

.back-to-top.show {
  opacity: 1;
  transform: translateY(0) scale(1);
  pointer-events: auto;
}

.back-to-top-content {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

/* 樱花花瓣装饰 */
.sakura-petal {
  position: absolute;
  width: 8px;
  height: 8px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(255, 183, 197, 0.6));
  border-radius: 50% 0 50% 50%;
  opacity: 0;
  pointer-events: none;
}

.petal-1 {
  top: -5px;
  left: -5px;
  transform: rotate(-30deg);
  animation: petal-float 3s ease-in-out infinite;
}

.petal-2 {
  top: -5px;
  right: -5px;
  transform: rotate(30deg);
  animation: petal-float 3s ease-in-out infinite 0.5s;
}

.petal-3 {
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%) rotate(60deg);
  animation: petal-float 3s ease-in-out infinite 1s;
}

@keyframes petal-float {
  0%, 100% {
    opacity: 0.6;
    transform: translateY(0) rotate(var(--r, 0deg));
  }
  50% {
    opacity: 1;
    transform: translateY(-5px) rotate(var(--r, 10deg));
  }
}

/* 星星图标 */
.star-icon {
  position: absolute;
  top: -8px;
  right: -8px;
  font-size: 14px;
  color: #fff;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
  animation: star-twinkle 2s ease-in-out infinite;
}

@keyframes star-twinkle {
  0%, 100% {
    opacity: 0.4;
    transform: scale(1) rotate(0deg);
  }
  50% {
    opacity: 1;
    transform: scale(1.3) rotate(180deg);
  }
}

/* 箭头图标 */
.arrow-icon {
  transition: transform 0.3s ease;
  filter: drop-shadow(0 2px 4px rgba(255, 255, 255, 0.3));
}

/* 光晕效果 */
.back-to-top-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 183, 197, 0.3) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
  z-index: 1;
}

.back-to-top:hover {
  background: linear-gradient(135deg, #ffcce6, #ffb3d1);
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 10px 35px rgba(255, 183, 197, 0.6),
              0 0 50px rgba(255, 183, 197, 0.4),
              inset 0 0 20px rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.5);
}

.back-to-top:hover .back-to-top-glow {
  opacity: 1;
}

.back-to-top:hover .arrow-icon {
  transform: translateY(-3px);
}

.back-to-top:hover .sakura-petal {
  opacity: 1;
  animation-duration: 1.5s;
}

.back-to-top:active {
  transform: translateY(-2px) scale(0.95);
  box-shadow: 0 5px 20px rgba(255, 183, 197, 0.4);
}

.back-to-top:active .arrow-icon {
  transform: translateY(-1px);
}

/* 点击波纹效果 */
.back-to-top::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.5), transparent);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.6s ease, height 0.6s ease;
  opacity: 0;
}

.back-to-top:active::after {
  width: 150px;
  height: 150px;
  opacity: 0;
  transition: width 0s, height 0s, opacity 0.6s ease;
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
    width: 20px;
    height: 14px;
    padding: 0;
  }

  .mobile-menu-btn span {
    transition: all 0.45s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  /* 展开状态：三条横线折叠成朝左的三角形 ◀ */
  .mobile-menu-btn.open span:nth-child(1) {
    transform: translateY(2.5px) rotate(-19.3deg);
  }

  .mobile-menu-btn.open span:nth-child(2) {
    transform: translateX(9px) rotate(90deg) scaleX(0.7);
  }

  .mobile-menu-btn.open span:nth-child(3) {
    transform: translateY(-2.5px) rotate(19.3deg);
  }

  /* 提升为独立合成层，规避 iOS 上 fixed + backdrop-filter 的滚动错位 */
  .header {
    transform: translateZ(0);
  }

  /* logo 占满剩余空间，诗句尽量完整显示 */
  .logo {
    flex: 1 1 0%;
    min-width: 0;
  }

  .logo-text {
    display: block;
    font-size: clamp(0.82rem, 4.6vw, 1rem);
    line-height: 1.5;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: none;
  }

  /* 回到顶部按钮在移动端隐藏：
     否则它常驻占位会挤压 logo 与按钮，滚动到 300px 后还会在
     主题按钮与汉堡包之间凭空多出一个按钮，造成导航"被压进去" */
  .back-to-top {
    display: none;
  }

  /* 按钮组不收缩，挤占由 logo 让出；与汉堡包贴紧 */
  .nav-actions {
    flex-shrink: 0;
    gap: 0.5rem;
  }

  /* 导航本身可收缩，避免内容把导航栏撑宽 */
  .nav {
    min-width: 0;
  }

  /* 下拉菜单：毛玻璃面板，从顶栏下方滑入 */
  .mobile-menu {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    z-index: 2900;
    background: var(--glass-bg);
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
    border-top: 1px solid var(--border-color);
    box-shadow: var(--shadow-lg);
    padding: 0.75rem 1.5rem 1rem;
    max-height: calc(100dvh - 4rem);
    max-height: calc(100vh - 4rem);
    overflow-y: auto;
  }

  /* 点击遮罩：关闭菜单 */
  .mobile-menu-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2800;
    background: rgba(0, 0, 0, 0.35);
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
  }

  /* 菜单容器：下滑 + 淡入 */
  .menu-drop-enter-active,
  .menu-drop-leave-active {
    transition: opacity 0.35s ease, transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .menu-drop-enter-from,
  .menu-drop-leave-to {
    opacity: 0;
    transform: translateY(-14px);
  }

  /* 遮罩：淡入淡出 */
  .menu-backdrop-enter-active,
  .menu-backdrop-leave-active {
    transition: opacity 0.3s ease;
  }

  .menu-backdrop-enter-from,
  .menu-backdrop-leave-to {
    opacity: 0;
  }

  /* 菜单链接逐个淡入 */
  .menu-drop-enter-active .mobile-nav-link {
    animation: menuLinkIn 0.45s ease both;
  }

  .menu-drop-enter-active .mobile-nav-link:nth-child(1) { animation-delay: 0.04s; }
  .menu-drop-enter-active .mobile-nav-link:nth-child(2) { animation-delay: 0.09s; }
  .menu-drop-enter-active .mobile-nav-link:nth-child(3) { animation-delay: 0.14s; }
  .menu-drop-enter-active .mobile-nav-link:nth-child(4) { animation-delay: 0.19s; }
  .menu-drop-enter-active .mobile-nav-link:nth-child(5) { animation-delay: 0.24s; }
  .menu-drop-enter-active .mobile-nav-link:nth-child(6) { animation-delay: 0.29s; }

  @keyframes menuLinkIn {
    from {
      opacity: 0;
      transform: translateY(-8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* 移动端调整图标大小：贴合汉堡包、保持可点 */
  .theme-icon-image {
    width: 28px;
    height: 28px;
  }
}
</style>