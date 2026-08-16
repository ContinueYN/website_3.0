<template>
  <section id="skills" class="skills">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Skills</h2>
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
              @click="openSkillDetail(skill)"
              :class="{ 'clickable': true }"
            >
              <div class="skill-header">
                <div class="skill-icon">
                  <component :is="iconMap[skill.icon]" size="24" />
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
              <div class="skill-card-footer">
                <span class="skill-more">点击查看详情 →</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="tools-section">
        <h3 class="tools-title">Tools</h3>
        <div class="tools-grid">
          <div 
            v-for="(tool, index) in tools" 
            :key="tool.name"
            class="tool-item"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <component :is="iconMap[tool.icon]" size="28" class="tool-icon" />
            <span class="tool-name">{{ tool.name }}</span>
          </div>
        </div>
      </div>

      <!-- 技能详情模态框 -->
      <div v-if="selectedSkill" class="skill-modal" @click="closeSkillDetail">
        <div class="skill-modal-content" @click.stop>
          <button class="skill-modal-close" @click="closeSkillDetail">×</button>
          <div class="skill-modal-header">
            <div class="skill-modal-icon">
              <component :is="iconMap[selectedSkill.icon]" size="36" />
            </div>
            <h3 class="skill-modal-title">{{ selectedSkill.name }}</h3>
          </div>
          <div class="skill-modal-body">
            <p class="skill-modal-description">{{ selectedSkill.description }}</p>
            <div class="skill-modal-level">
              <div class="skill-modal-level-label">掌握程度</div>
              <div class="skill-modal-level-bar">
                <div 
                  class="skill-modal-level-progress" 
                  :style="{ width: selectedSkill.level + '%' }"
                ></div>
              </div>
              <div class="skill-modal-level-text">{{ selectedSkill.levelText }}</div>
            </div>
            <div class="skill-modal-details" v-if="selectedSkill.details">
              <h4 class="skill-modal-details-title">技术细节</h4>
              <ul class="skill-modal-details-list">
                <li v-for="(detail, index) in selectedSkill.details" :key="index">
                  {{ detail }}
                </li>
              </ul>
            </div>
          </div>
          <div class="skill-modal-footer">
            <button class="skill-modal-button" @click="closeSkillDetail">关闭</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, watch, nextTick, onBeforeUnmount } from 'vue'
import {
  Zap,
  Globe,
  Code2,
  Palette,
  Server,
  Code,
  Database,
  Link,
  Layers,
  RefreshCw,
  Cloud,
  GitBranch,
  GitMerge,
  Layout,
  Package,
  Wind,
  Send,
  Search
} from 'lucide-vue-next'

const activeCategory = ref('frontend')
const selectedSkill = ref(null)

const skillCategories = ref([
  {
    id: 'frontend',
    name: '前端开发',
    skills: [
      {
        name: 'Vue.js',
        icon: 'zap',
        description: '构建现代化的单页应用程序和用户界面',
        level: 90,
        levelText: '精通',
        details: [
          'Vue 3 Composition API',
          'Vue Router 4',
          'Pinia 状态管理',
          'Vue Test Utils',
          'Vite 构建工具',
          'Vue 生态系统集成'
        ]
      },
      {
        name: 'React',
        icon: 'globe',
        description: '开发可复用的组件和复杂的前端应用',
        level: 85,
        levelText: '熟练',
        details: [
          'React 18 Hooks',
          'React Router',
          'Redux / Zustand',
          'React Testing Library',
          'Next.js 框架',
          'Server Components'
        ]
      },
      {
        name: 'TypeScript',
        icon: 'code2',
        description: '提供类型安全的 JavaScript 开发体验',
        level: 88,
        levelText: '熟练',
        details: [
          '高级类型系统',
          '泛型编程',
          '类型声明文件',
          'TypeScript 配置',
          '与框架集成',
          '类型安全的 API 设计'
        ]
      },
      {
        name: 'CSS3/SCSS',
        icon: 'palette',
        description: '创建响应式和美观的用户界面设计',
        level: 92,
        levelText: '精通',
        details: [
          'CSS Grid 布局',
          'Flexbox 布局',
          'CSS 变量',
          'SCSS 预处理器',
          '响应式设计',
          'CSS 动画和过渡',
          'Tailwind CSS 等工具'
        ]
      }
    ]
  },
  {
    id: 'backend',
    name: '后端开发',
    skills: [
      {
        name: 'Node.js',
        icon: 'server',
        description: '构建高性能的服务器端应用程序',
        level: 85,
        levelText: '熟练',
        details: [
          'Express.js 框架',
          'NestJS 框架',
          '中间件开发',
          '异步编程',
          '文件系统操作',
          'WebSocket 通信'
        ]
      },
      {
        name: 'Python',
        icon: 'python',
        description: '开发数据分析和后端服务',
        level: 80,
        levelText: '熟练',
        details: [
          'Django 框架',
          'FastAPI 框架',
          'Flask 框架',
          '数据分析库',
          '异步编程',
          '装饰器和上下文管理器'
        ]
      },
      {
        name: '数据库',
        icon: 'database',
        description: 'MySQL, MongoDB, Redis 等数据库管理',
        level: 82,
        levelText: '熟练',
        details: [
          'SQL 查询优化',
          '数据库设计',
          '事务管理',
          'MongoDB 聚合查询',
          'Redis 缓存策略',
          '数据库备份和恢复'
        ]
      },
      {
        name: 'API 设计',
        icon: 'link',
        description: 'RESTful API 和 GraphQL 设计',
        level: 85,
        levelText: '熟练',
        details: [
          'RESTful 设计原则',
          'GraphQL Schema 设计',
          'API 版本控制',
          '认证和授权',
          'API 文档',
          '速率限制和安全'
        ]
      }
    ]
  },
  {
    id: 'devops',
    name: 'DevOps',
    skills: [
      {
        name: 'Docker',
        icon: 'layers',
        description: '容器化应用部署和管理',
        level: 78,
        levelText: '掌握',
        details: [
          'Dockerfile 编写',
          'Docker Compose',
          '容器网络',
          '容器存储',
          'Docker 镜像优化',
          '容器安全'
        ]
      },
      {
        name: 'CI/CD',
        icon: 'refreshCw',
        description: '自动化构建和部署流程',
        level: 75,
        levelText: '掌握',
        details: [
          'GitHub Actions',
          'GitLab CI',
          'Jenkins',
          '自动化测试集成',
          '部署策略',
          '环境管理'
        ]
      },
      {
        name: 'AWS',
        icon: 'cloud',
        description: '云服务管理和部署',
        level: 70,
        levelText: '掌握',
        details: [
          'EC2 实例管理',
          'S3 存储',
          'IAM 权限管理',
          'Lambda 函数',
          'API Gateway',
          'CloudFormation'
        ]
      },
      {
        name: 'Git',
        icon: 'gitBranch',
        description: '版本控制和团队协作',
        level: 90,
        levelText: '精通',
        details: [
          '分支管理策略',
          'Git 工作流',
          '冲突解决',
          'Git hooks',
          '子模块和子树',
          'Git 性能优化'
        ]
      }
    ]
  }
])

const tools = ref([
  { name: 'VS Code', icon: 'code' },
  { name: 'Git', icon: 'gitMerge' },
  { name: 'Figma', icon: 'layout' },
  { name: 'Webpack', icon: 'package' },
  { name: 'Vite', icon: 'wind' },
  { name: 'Postman', icon: 'send' },
  { name: 'Edge DevTools', icon: 'search' },
])

// 图标映射表
const iconMap = {
  zap: Zap,
  globe: Globe,
  code2: Code2,
  palette: Palette,
  server: Server,
  python: Code,
  database: Database,
  link: Link,
  layers: Layers,
  refreshCw: RefreshCw,
  cloud: Cloud,
  gitBranch: GitBranch,
  code: Code,
  gitMerge: GitMerge,
  layout: Layout,
  package: Package,
  wind: Wind,
  send: Send,
  search: Search
};

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

// 打开技能详情模态框
const openSkillDetail = (skill) => {
  selectedSkill.value = skill
  document.body.style.overflow = 'hidden' // 防止背景滚动
}

// 关闭技能详情模态框
const closeSkillDetail = () => {
  selectedSkill.value = null
  document.body.style.overflow = '' // 恢复背景滚动
}

onBeforeUnmount(() => {
  if (observer && typeof observer.disconnect === 'function') observer.disconnect()
  observer = null
  document.body.style.overflow = '' // 确保恢复背景滚动
})

</script>

<style scoped>

.skills{
  padding: 5rem 0;
  background: transparent;
}

.skills-categories {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 1rem;
}

.section-title {
  display: flex;
  justify-content: center;
  font-size: clamp(2.4rem, 5vw, 3.4rem);
  font-family: var(--font-display);
  font-weight: 700;
  margin-bottom: 1.4rem;
  color: var(--text-main);
  letter-spacing: 0.12em;
  user-select: none;
}

.category-tab {
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: 500;
  color: var(--text-secondary);
  transition: all 0.3s ease;
  border: 1px solid transparent;
  position: relative;
  overflow: hidden;
}

.category-tab::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--primary-color);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.category-tab:hover {
  color: var(--primary-color);
  background: var(--bg-secondary);
  transform: translateY(-2px);
}

.category-tab:hover::before {
  transform: scaleX(1);
}

.category-tab.active {
  color: var(--primary-color);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.category-tab.active::before {
  transform: scaleX(1);
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
  position: relative;
  overflow: hidden;
}

.skill-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  border-top: 5px solid var(--primary-color);
  border-left: 5px solid var(--primary-color);
  border-top-left-radius: 0.75rem;
  transform: scale(0);
  transform-origin: top left;
  transition: transform 0.3s ease;
  opacity: 0;
}

.skill-card::after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  width: 40px;
  height: 40px;
  border-bottom: 8px solid var(--primary-color);
  border-right: 8px solid var(--primary-color);
  border-bottom-right-radius: 0.75rem;
  transform: scale(0);
  transform-origin: bottom right;
  transition: transform 0.3s ease;
  opacity: 0;
}

.skill-card:hover::before,
.skill-card:hover::after {
  transform: scale(1);
  opacity: 1;
}

.skill-card.animate-in {
  animation: slideInUp 0.6s ease forwards;
}

.skill-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border-color: var(--primary-color);
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
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  border-radius: 0.5rem;
  font-size: 1.5rem;
  color: white;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.skill-card:hover .skill-icon {
  transform: scale(1.1);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
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
  gap: 0.75rem;
  padding: 1.5rem 1rem;
  background: var(--bg-primary);
  border-radius: 0.75rem;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
  opacity: 0;
  transform: scale(0.8);
  position: relative;
  overflow: hidden;
}

.tool-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.02), transparent);
  transition: opacity 0.3s ease;
}

.tool-item.animate-in {
  animation: bounceIn 0.6s ease forwards;
}

.tool-item:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  border-color: var(--primary-color);
}

.tool-item.animate-in:hover {
  transform: translateY(-5px) scale(1.02);
}

.tool-icon {
  color: var(--primary-color);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 50%;
}

.tool-item:hover .tool-icon {
  color: white;
  background: var(--gradient-primary);
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.tool-name {
  font-weight: 500;
  color: var(--text-primary);
  text-align: center;
  font-size: 0.875rem;
}

/* 技能卡片点击效果 */
.skill-card.clickable {
  cursor: pointer;
  transition: all 0.3s ease;
}

.skill-card.clickable:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);
}

.skill-card-footer {
  margin-top: 1rem;
  text-align: center;
}

.skill-more {
  font-size: 0.8rem;
  color: var(--primary-color);
  font-weight: 500;
  transition: all 0.3s ease;
}

.skill-card.clickable:hover .skill-more {
  transform: translateX(5px);
}

/* 技能详情模态框样式 */
.skill-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;
}

.skill-modal-content {
  background: var(--bg-card);
  border-radius: 1rem;
  padding: 2rem;
  width: 90%;
  max-width: 600px;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  animation: slideInUp 0.4s ease;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  border: 1px solid var(--border-color);
}

.skill-modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: var(--text-primary);
}

.skill-modal-close:hover {
  background: var(--primary-color);
  color: white;
  transform: scale(1.1);
}

.skill-modal-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border-color);
}

.skill-modal-icon {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gradient-primary);
  border-radius: 0.75rem;
  color: white;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.skill-modal-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
}

.skill-modal-body {
  margin-bottom: 2rem;
}

.skill-modal-description {
  color: var(--text-secondary);
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.skill-modal-level {
  margin-bottom: 2rem;
}

.skill-modal-level-label {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.skill-modal-level-bar {
  height: 8px;
  background: var(--bg-secondary);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 0.5rem;
}

.skill-modal-level-progress {
  height: 100%;
  background: var(--gradient-primary);
  border-radius: 4px;
  transition: width 1s ease-in-out;
  position: relative;
}

.skill-modal-level-progress::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 50%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  animation: shine 2s ease-in-out infinite;
}

.skill-modal-level-text {
  font-size: 0.9rem;
  color: var(--primary-color);
  font-weight: 600;
  text-align: right;
}

.skill-modal-details {
  margin-top: 2rem;
}

.skill-modal-details-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.skill-modal-details-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.skill-modal-details-list li {
  padding: 0.75rem 1rem;
  background: var(--bg-secondary);
  border-radius: 0.5rem;
  margin-bottom: 0.75rem;
  color: var(--text-secondary);
  font-size: 0.95rem;
  border-left: 4px solid var(--primary-color);
  transition: all 0.3s ease;
}

.skill-modal-details-list li:hover {
  transform: translateX(5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.skill-modal-footer {
  display: flex;
  justify-content: center;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);
}

.skill-modal-button {
  padding: 0.75rem 2rem;
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.skill-modal-button:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

/* 深色模式下的模态框滚动条样式 */
.dark .skill-modal-content::-webkit-scrollbar-thumb {
  background: var(--scrollbar-thumb-dark);
}

.dark .skill-modal-content::-webkit-scrollbar-thumb:hover {
  background: var(--scrollbar-thumb-hover-dark);
}

.dark .skill-modal-content::-webkit-scrollbar-track {
  background: var(--scrollbar-track-dark);
}

/* 模态框动画 */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
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
  
  .category-tab {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
  
  .skill-card {
    padding: 1.25rem;
  }
  
  .skill-header {
    gap: 0.75rem;
  }
  
  .skill-icon {
    width: 2.5rem;
    height: 2.5rem;
  }
  
  .skill-name {
    font-size: 1.125rem;
  }
  
  .skill-description {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .skills {
    padding: 3rem 0;
  }
  
  .section-title {
    font-size: 1.75rem;
  }
  
  .section-subtitle {
    font-size: 1rem;
  }
  
  .skills-categories {
    gap: 0.5rem;
  }
  
  .category-tab {
    padding: 0.4rem 0.8rem;
    font-size: 0.85rem;
  }
  
  .skill-card {
    padding: 1rem;
  }
  
  .tools-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
  }
  
  .tool-item {
    padding: 1rem 0.75rem;
  }
  
  .tool-icon {
    width: 2.25rem;
    height: 2.25rem;
  }
  
  .tool-name {
    font-size: 0.8rem;
  }
  
  /* 响应式技能详情模态框 */
  .skill-modal-content {
    padding: 1.5rem;
    width: 95%;
    max-height: 85vh;
  }
  
  .skill-modal-header {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }
  
  .skill-modal-icon {
    width: 50px;
    height: 50px;
  }
  
  .skill-modal-title {
    font-size: 1.5rem;
  }
  
  .skill-modal-description {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
  
  .skill-modal-level {
    margin-bottom: 1.5rem;
  }
  
  .skill-modal-details {
    margin-top: 1.5rem;
  }
  
  .skill-modal-details-title {
    font-size: 1.125rem;
    margin-bottom: 0.75rem;
  }
  
  .skill-modal-details-list li {
    padding: 0.6rem 0.8rem;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }
  
  .skill-modal-button {
    padding: 0.6rem 1.5rem;
    font-size: 0.9rem;
  }
  
  .skill-modal-close {
    width: 30px;
    height: 30px;
    font-size: 1.25rem;
  }
}
</style>