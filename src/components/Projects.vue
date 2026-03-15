<template>
  <section id="projects" class="projects">
    <!-- 连续滚动文字 - 向左 -->
    <div class="scrolling-text-container">
      <div class="scrolling-text scrolling-left" ref="scrollingTextLeftRef">
        <span class="text-repeat">PROJECT //\\ PROJECT //\\ PROJECT //\\ PROJECT //\\ PROJECT //\\ PROJECT //\\ PROJECT //\\ PROJECT //\\ PROJECT //\\ PROJECT //\\ PROJECT //\\ PROJECT //\\ PROJECT //\\ </span>
        <span class="text-repeat">PROJECT //\\ PROJECT //\\ PROJECT //\\ PROJECT //\\ PROJECT //\\ PROJECT //\\ PROJECT //\\ PROJECT //\\ PROJECT //\\ PROJECT //\\ PROJECT //\\ PROJECT //\\ PROJECT //\\ </span>
      </div>
    </div>

    <!-- 连续滚动文字 - 向右 -->
    <div class="scrolling-text-container">
      <div class="scrolling-text scrolling-right" ref="scrollingTextRightRef">
        <span class="text-repeat">PROJECT //\\ PROJECT //\\ PROJECT //\\ PROJECT //\\ PROJECT //\\ PROJECT //\\ PROJECT //\\ PROJECT //\\ PROJECT //\\ PROJECT //\\ PROJECT //\\ PROJECT //\\ PROJECT //\\ </span>
        <span class="text-repeat">PROJECT //\\ PROJECT //\\ PROJECT //\\ PROJECT //\\ PROJECT //\\ PROJECT //\\ PROJECT //\\ PROJECT //\\ PROJECT //\\ PROJECT //\\ PROJECT //\\ PROJECT //\\ PROJECT //\\ </span>
      </div>
    </div>

    <!-- 横向滚动容器 -->
    <div class="horizontal-scroll-section" ref="horizontalSectionRef">
      <div class="sticky-wrapper">
        <div class="horizontal-container">
          <div class="horizontal-track" ref="horizontalTrackRef">
            <!-- 项目卡片 -->
            <div 
              v-for="project in projects" 
              :key="project.id" 
              class="project-card"
            >
              <div class="card-content">
                <h3 class="card-title">{{ project.title }}</h3>
                <p class="card-description">{{ project.description }}</p>
                <div class="card-tech">
                  <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
                    {{ tech }}
                  </span>
                </div>
                <div class="card-links">
                  <a :href="project.githubUrl" class="card-link github-link" target="_blank">
                    <span>GitHub</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.24-.604-.536-1.529.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.648.353 2.572.11 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const horizontalSectionRef = ref(null)
const horizontalTrackRef = ref(null)
const scrollingTextLeftRef = ref(null)
const scrollingTextRightRef = ref(null)

const projects = ref([
  {
    id: 1,
    title: 'My-website_1.0',
    description: '最初版本的个人网站，采用 HTML5+CSS3+jQuery 构建，包含个人简介、技能展示和学习经历等基础内容，探索网页设计的起点之作。',
    githubUrl: 'https://github.com/ContinueYN/website_1.0',
    technologies: ['HTML5', 'CSS3', 'jQuery', 'Scroll.js']
  },
  {
    id: 2,
    title: 'My-website_2.0',
    description: '全面升级的个人网站，基于 React 重构，优化整体设计语言，添加流畅的页面过渡动画和响应式布局，提升用户体验。',
    githubUrl: 'https://github.com/ContinueYN/website_2.0',
    technologies: ['React', 'CSS3', 'HTML5', 'JSX']
  },
  {
    id: 3,
    title: '食堂网站',
    description: '金中海湾食堂官方网站，支持弹幕互动、菜品排行榜、多页面切换等功能。后端采用 Python Flask，实现学生交流和菜品展示。',
    githubUrl: 'https://github.com/ContinueYN/Canteen',
    technologies: ['Python', 'Flask', 'HTML5', 'CSS3', 'Layui']
  },
  {
    id: 4,
    title: '3D 古诗词',
    description: '诗之古河 - 将传统文化与现代科技融合的创新项目。基于 Three.js 实现书法作品的 3D 动态展示，支持唐风卷轴、绢本册页等多种装帧形式。',
    githubUrl: 'https://github.com/ContinueYN/Poem',
    technologies: ['Three.js', 'Tween.js', 'HTML5', 'CSS3']
  },
  {
    id: 5,
    title: '表单注册',
    description: 'ChatRegistry AI - 全栈用户管理系统，集成 AI 聊天服务。包含用户注册、信息管理功能，搭载智谱 AI GLM-4，支持多种聊天模式和思维链推理。',
    githubUrl: 'https://github.com/ContinueYN/ChatRegistry-AI',
    technologies: ['Vue3', 'TypeScript', 'FastAPI', 'Express']
  }
])

onMounted(() => {
  // 连续滚动文字动画 - 向左
  if (scrollingTextLeftRef.value) {
    gsap.to(scrollingTextLeftRef.value, {
      xPercent: -50,
      ease: 'none',
      duration: 20,
      repeat: -1
    })
  }

  // 连续滚动文字动画 - 向右
  if (scrollingTextRightRef.value) {
    gsap.fromTo(scrollingTextRightRef.value,
      { xPercent: -50 },
      {
        xPercent: 0,
        ease: 'none',
        duration: 20,
        repeat: -1
      }
    )
  }

  // 横向滚动动画
  const track = horizontalTrackRef.value
  const section = horizontalSectionRef.value
  
  if (track && section) {
    const trackWidth = track.scrollWidth
    const viewportWidth = window.innerWidth
    
    gsap.to(track, {
      x: () => -(trackWidth - viewportWidth),
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => `+=${trackWidth - viewportWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true
      }
    })
  }
})
</script>

<style scoped>
.projects {
  position: relative;
  overflow: hidden;
}

/* 连续滚动文字 */
.scrolling-text-container {
  position: relative;
  width: 100%;
  padding: 2rem 0;
  background: transparent;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
}

.scrolling-text-container:first-child {
  border-bottom: none;
}

.scrolling-text-container:last-child {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.scrolling-text {
  display: flex;
  white-space: nowrap;
  will-change: transform;
}

.scrolling-left {
  transform: translateX(0);
}

.scrolling-right {
  transform: translateX(-50%);
}

.text-repeat {
  display: inline-block;
  font-size: 3rem;
  font-weight: 900;
  color: transparent;
  -webkit-text-stroke: 1px var(--primary-color);
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  padding-right: 2rem;
}

/* 横向滚动部分 */
.horizontal-scroll-section {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: transparent;
}

.sticky-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.horizontal-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}

.horizontal-track {
  display: flex;
  gap: 4rem;
  padding: 0 10vw;
  width: max-content;
}

/* 项目卡片 */
.project-card {
  width: 400px;
  height: 500px;
  flex-shrink: 0;
  position: relative;
  perspective: 1000px;
}

.card-content {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid rgba(255, 255, 255, 0.15);
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    0 0 60px rgba(255, 183, 178, 0.1),
    inset 0 0 20px rgba(255, 255, 255, 0.05);
  filter: blur(3px);
  opacity: 0.85;
  position: relative;
  overflow: hidden;
}

.card-content::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent 30%,
    rgba(255, 183, 178, 0.1) 50%,
    transparent 70%
  );
  transform: rotate(45deg);
  transition: all 0.6s ease;
  opacity: 0;
}

.card-content::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    circle at 50% 0%,
    rgba(255, 183, 178, 0.15) 0%,
    transparent 50%
  );
  opacity: 0;
  transition: opacity 0.5s ease;
  pointer-events: none;
}

.card-content:hover {
  transform: translateY(-15px) scale(1.02);
  box-shadow: 
    0 20px 60px rgba(255, 183, 178, 0.3),
    0 0 100px rgba(255, 183, 178, 0.2),
    inset 0 0 30px rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 183, 178, 0.4);
  backdrop-filter: blur(15px);
  filter: blur(0);
  opacity: 1;
}

.card-content:hover::before {
  opacity: 1;
  animation: shimmer 1.5s ease-in-out;
}

.card-content:hover::after {
  opacity: 1;
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%) translateY(-100%) rotate(45deg);
  }
  100% {
    transform: translateX(100%) translateY(100%) rotate(45deg);
  }
}

.card-number {
  font-size: 4rem;
  font-weight: 900;
  color: var(--primary-color);
  opacity: 0.2;
  line-height: 1;
  margin-bottom: 1rem;
}

.card-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  line-height: 1.3;
  text-align: center;
  text-shadow: 0 0 20px rgba(255, 183, 178, 0.3);
  letter-spacing: 0.05em;
}

.card-description {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.8;
  flex-grow: 1;
  margin-bottom: 1.5rem;
  text-align: justify;
  letter-spacing: 0.02em;
}

.card-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech-tag {
  padding: 0.5rem 1.25rem;
  background: linear-gradient(135deg, rgba(255, 183, 178, 0.15) 0%, rgba(255, 183, 178, 0.05) 100%);
  color: #ffb7b2;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 600;
  border: 1px solid rgba(255, 183, 178, 0.3);
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  letter-spacing: 0.03em;
  position: relative;
  overflow: hidden;
}

.tech-tag::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.5s ease;
}

.tech-tag:hover {
  background: linear-gradient(135deg, rgba(255, 183, 178, 0.3) 0%, rgba(255, 183, 178, 0.15) 100%);
  border-color: rgba(255, 183, 178, 0.6);
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 8px 20px rgba(255, 183, 178, 0.3);
}

.tech-tag:hover::before {
  left: 100%;
}

.card-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.card-link {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem 2rem;
  border-radius: 16px;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  cursor: pointer;
  min-width: 140px;
  position: relative;
  overflow: hidden;
}

.card-link::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  transform: translate(-50%, -50%);
  transition: width 0.5s ease, height 0.5s ease;
}

.card-link:hover::before {
  width: 300px;
  height: 300px;
}

.demo-link {
  background: var(--primary-color);
  color: white;
  border: 2px solid var(--primary-color);
}

.demo-link:hover {
  background: var(--primary-dark);
  border-color: var(--primary-dark);
  transform: translateY(-2px);
}

.github-link {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
  color: var(--text-primary);
  border: 2px solid rgba(255, 183, 178, 0.3);
  backdrop-filter: blur(10px);
}

.github-link:hover {
  border-color: rgba(255, 183, 178, 0.6);
  background: linear-gradient(135deg, rgba(255, 183, 178, 0.15) 0%, rgba(255, 183, 178, 0.08) 100%);
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(255, 183, 178, 0.25);
  color: #ffb7b2;
}

.github-link span {
  position: relative;
  z-index: 1;
}

.github-link svg {
  position: relative;
  z-index: 1;
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.github-link:hover svg {
  transform: scale(1.2) rotate(-10deg);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .scrolling-text-container {
    padding: 1rem 0;
  }

  .text-repeat {
    font-size: 1.5rem;
    letter-spacing: 0.2rem;
  }

  .horizontal-scroll-section {
    height: auto;
    padding: 3rem 0;
    background:transparent;
  }

  .sticky-wrapper {
    position: relative;
    height: auto;
    overflow: visible;
  }

  .horizontal-container {
    height: auto;
  }

  .horizontal-track {
    flex-direction: column;
    gap: 2rem;
    padding: 0 1.5rem;
    width: 100%;
    transform: none !important;
  }

  .project-card {
    width: 100%;
    height: auto;
    min-height: 400px;
  }

  .card-content {
    height: auto;
    padding: 2rem;
  }

  .card-title {
    font-size: 1.5rem;
  }

  .card-description {
    font-size: 0.95rem;
  }

  .card-link {
    width: 100%;
    max-width: 280px;
  }

  .tech-tag {
    font-size: 0.8rem;
    padding: 0.4rem 0.9rem;
  }
}
</style>
