<template>
  <section id="skills" class="skills">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">技术栈</h2>
        <p class="section-subtitle">我掌握的技术与工具</p>
      </div>

      <div class="skills-container">
        <div class="skills-categories">
          <div 
            v-for="category in skillCategories" 
            :key="category.id"
            class="category-tab"
            :class="{ active: activeCategory === category.id }"
            @click="activeCategory = category.id"
          >
            {{ category.name }}
          </div>
        </div>

        <div class="skills-content">
          <div 
            v-for="category in skillCategories" 
            :key="category.id"
            class="skills-grid"
            v-show="activeCategory === category.id"
          >
            <div 
              v-for="(skill, index) in category.skills" 
              :key="skill.name"
              class="skill-card"
              :style="{ animationDelay: `${index * 0.1}s` }"
            >
              <div class="skill-header">
                <div class="skill-icon">
                  <span>{{ skill.icon }}</span>
                </div>
                <h3 class="skill-name">{{ skill.name }}</h3>
              </div>
              <p class="skill-description">{{ skill.description }}</p>
              <div class="skill-level">
                <div class="level-bar">
                  <div 
                    class="level-progress" 
                    :style="{ '--target-width': skill.level + '%' }"
                    :data-level="skill.level"
                  ></div>
                </div>
                <span class="level-text">{{ skill.levelText }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="tools-section">
        <h3 class="tools-title">常用工具</h3>
        <div class="tools-grid">
          <div 
            v-for="(tool, index) in tools" 
            :key="tool.name"
            class="tool-item"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <span class="tool-icon">{{ tool.icon }}</span>
            <span class="tool-name">{{ tool.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, watch, nextTick, onBeforeUnmount } from 'vue'

const activeCategory = ref('frontend')

const skillCategories = ref([
  {
    id: 'frontend',
    name: '前端开发',
    skills: [
      {
        name: 'Vue.js',
        icon: '⚡',
        description: '构建现代化的单页应用程序和用户界面',
        level: 90,
        levelText: '精通'
      },
      {
        name: 'React',
        icon: '⚛️',
        description: '开发可复用的组件和复杂的前端应用',
        level: 85,
        levelText: '熟练'
      },
      {
        name: 'TypeScript',
        icon: '📘',
        description: '提供类型安全的 JavaScript 开发体验',
        level: 88,
        levelText: '熟练'
      },
      {
        name: 'CSS3/SCSS',
        icon: '🎨',
        description: '创建响应式和美观的用户界面设计',
        level: 92,
        levelText: '精通'
      }
    ]
  },
  {
    id: 'backend',
    name: '后端开发',
    skills: [
      {
        name: 'Node.js',
        icon: '🟢',
        description: '构建高性能的服务器端应用程序',
        level: 85,
        levelText: '熟练'
      },
      {
        name: 'Python',
        icon: '🐍',
        description: '开发数据分析和后端服务',
        level: 80,
        levelText: '熟练'
      },
      {
        name: '数据库',
        icon: '🗄️',
        description: 'MySQL, MongoDB, Redis 等数据库管理',
        level: 82,
        levelText: '熟练'
      },
      {
        name: 'API 设计',
        icon: '🔗',
        description: 'RESTful API 和 GraphQL 设计',
        level: 85,
        levelText: '熟练'
      }
    ]
  },
  {
    id: 'devops',
    name: 'DevOps',
    skills: [
      {
        name: 'Docker',
        icon: '🐳',
        description: '容器化应用部署和管理',
        level: 78,
        levelText: '掌握'
      },
      {
        name: 'CI/CD',
        icon: '🔄',
        description: '自动化构建和部署流程',
        level: 75,
        levelText: '掌握'
      },
      {
        name: 'AWS',
        icon: '☁️',
        description: '云服务管理和部署',
        level: 70,
        levelText: '掌握'
      },
      {
        name: 'Git',
        icon: '📝',
        description: '版本控制和团队协作',
        level: 90,
        levelText: '精通'
      }
    ]
  }
])

const tools = ref([
  { name: 'VS Code', icon: '💻' },
  { name: 'Git', icon: '📊' },
  { name: 'Figma', icon: '🎯' },
  { name: 'Webpack', icon: '📦' },
  { name: 'Vite', icon: '⚡' },
  { name: 'Postman', icon: '📮' },
  { name: 'Edge DevTools', icon: '🔍' },
])

// 使用 IntersectionObserver：在元素进入视口时添加 animate-in（只播放一次）
let observer = null

const observeElements = (root = document) => {
  if (!observer) return
  // Observe skill cards
  const skillCards = Array.from(root.querySelectorAll('.skill-card'))
  skillCards.forEach(card => {
    // 如果已播放过则跳过
    if (!card.classList.contains('animate-in')) observer.observe(card)
  })

  // Observe tool items
  const toolItems = Array.from(root.querySelectorAll('.tool-item'))
  toolItems.forEach(item => {
    if (!item.classList.contains('animate-in')) observer.observe(item)
  })
}

onMounted(() => {
  observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
        // 播放一次后取消观察
        obs.unobserve(entry.target)
      }
    })
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -6% 0px'
  })

  // 初始观察当前可见的元素（不会立即强制播放，只有滚动到视口时才播放）
  observeElements()
})

// 当切换分类时，DOM 可能会重新显示/隐藏元素，等待 DOM 更新后对新显示的卡片重新观察
watch(activeCategory, async () => {
  // 先移除未播放元素上的 animate-in（防止复用时样式错乱）
  const allCards = document.querySelectorAll('.skill-card')
  allCards.forEach(c => c.classList.remove('animate-in'))

  await nextTick()
  // 重新观察当前显示的技能卡片
  const grids = Array.from(document.querySelectorAll('.skills-grid'))
  grids.forEach(grid => {
    const style = window.getComputedStyle(grid)
    if (style.display !== 'none') {
      observeElements(grid)
    }
  })
})

onBeforeUnmount(() => {
  if (observer && typeof observer.disconnect === 'function') observer.disconnect()
  observer = null
})

</script>

<style scoped>

.skills{
  padding: 5rem 0;
  background: var(--bg-primary);
}

.skills-categories {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 1rem;
}

.category-tab {
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: 500;
  color: var(--text-secondary);
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

.category-tab:hover {
  color: var(--primary-color);
  background: var(--bg-secondary);
}

.category-tab.active {
  color: var(--primary-color);
  background: var(--bg-secondary);
  border-color: var(--primary-color);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.skill-card {
  background: var(--bg-primary);
  padding: 1.5rem;
  border-radius: 0.75rem;
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(20px);
}

.skill-card.animate-in {
  animation: slideInUp 0.6s ease forwards;
}

.skill-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.skill-card.animate-in:hover {
  transform: translateY(-5px);
}

.skill-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.skill-icon {
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gradient-primary);
  border-radius: 0.5rem;
  font-size: 1.5rem;
}

.skill-name {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
}

.skill-description {
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.5;
}

.skill-level {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.level-bar {
  flex: 1;
  height: 6px;
  background: var(--bg-secondary);
  border-radius: 3px;
  overflow: hidden;
}

.level-progress {
  height: 100%;
  background: var(--gradient-primary);
  border-radius: 3px;
  width: 0;
  transition: width 1.2s ease-in-out 0.5s;
  position: relative;
}

/* 修复：使用正确的CSS变量 */
.skill-card.animate-in .level-progress {
  width: var(--target-width);
}

/* 添加光泽动画效果 */
.level-progress::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 50%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.4),
    transparent
  );
  animation: shine 2s ease-in-out 1s;
}

.level-text {
  font-size: 0.875rem;
  color: var(--text-secondary);
  font-weight: 500;
  min-width: 3rem;
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.5s ease 1.5s;
}

.skill-card.animate-in .level-text {
  opacity: 1;
  transform: translateX(0);
}

.tools-section {
  text-align: center;
}

.tools-title {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: var(--text-primary);
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
}

.tool-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: var(--bg-card);
  border-radius: 0.75rem;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
  opacity: 0;
  transform: scale(0.8);
  position: relative;
  z-index: 2;
}

@property --angle {
  syntax: '<angle>';
  inherits: false;
  initial-value: 0deg;
}

.tool-item::after,.tool-item::before{
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 0.75rem;
  background: conic-gradient(from var(--angle),#f7f4f5ce 0%,#7c7b7c80 50%,#0d0d0dcc 100%);
  opacity: 0.1;
  z-index: -1;
  animation: 3s spin linear infinite;
}

.tool-item::after{
  filter: blur(1.5rem);
  transform: scale(1.1);
}

@keyframes spin {
  from {
    --angle: 0deg;
  }
  to {
    --angle: 360deg;
  }
}

.tool-item.animate-in {
  animation: bounceIn 0.6s ease forwards;
}

.tool-item:hover {
  transform: scale(1.05);
  box-shadow: var(--shadow);
}

.tool-item.animate-in:hover {
  transform: scale(1.05);
}

.tool-icon {
  font-size: 2rem;
}

.tool-name {
  font-weight: 500;
  color: var(--text-primary);
}

/* 动画关键帧 */
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  70% {
    transform: scale(1.05);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes shine {
  0% {
    left: -100%;
  }
  100% {
    left: 200%;
  }
}

@media (max-width: 768px) {
  .skills-categories {
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
  }
  
  .tools-grid {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }
}
</style>