<template>
  <section id="skills" class="skills">
    <div class="container">
      <p class="skills-overline">MY SKILLS</p>

      <!-- 帷幕舞台 -->
      <div
        ref="stageRef"
        class="curtain-stage"
        :class="{ open: isOpen, visible: isVisible }"
        @mouseenter="isOpen = true"
        @mouseleave="isOpen = false"
        @click="toggleCurtain"
      >
        <!-- 中心 SKILL 大字（帷幕展开后浮现，可点击） -->
        <div class="curtain-center">
          <button
            type="button"
            class="curtain-title"
            :class="{ 'is-open': isOpen }"
            @click.stop="openModal(0)"
            aria-label="查看技能详情"
          >
            <span class="curtain-title-text">SKILL</span>
            <span class="curtain-title-hint">点击查看技能详情</span>
          </button>
        </div>

        <!-- 四片帷幕 -->
        <div class="curtain-panel panel-b" aria-hidden="true"></div>
        <div class="curtain-panel panel-c" aria-hidden="true"></div>
        <div class="curtain-panel panel-d" aria-hidden="true"></div>
        <div class="curtain-panel panel-e" aria-hidden="true"></div>
      </div>

      <!-- 快速入口 -->
      <div class="skills-tags">
        <button
          v-for="(cat, i) in skillCategories"
          :key="cat.id"
          type="button"
          class="skill-tag"
          @click="openModal(i)"
        >
          <span class="skill-tag-name">{{ cat.name }}</span>
          <span class="skill-tag-count">{{ cat.skills.length }}</span>
        </button>
      </div>
    </div>

    <!-- 技能详情弹窗：卷轴展开（非全屏，不锁滚动） -->
    <Teleport to="body">
      <Transition name="pop" :duration="{ enter: 360, leave: 240 }">
        <div v-if="modalVisible" class="skill-pop-root">
          <!-- 毛玻璃点击层：点击空白处关闭 -->
          <div class="skill-pop-mask" @click="closeModal" aria-hidden="true"></div>

          <!-- 樱花飘落（围绕弹窗周围，始终在卡片背后） -->
          <div class="sakura-layer" aria-hidden="true">
            <span
              v-for="(p, i) in sakuraPetals"
              :key="i"
              class="petal"
              :style="{
                left: p.left + '%',
                width: p.size + 'px',
                height: (p.size * 1.15).toFixed(1) + 'px',
                '--petal-drift': p.drift + 'px',
                '--petal-spin': p.spin + 'deg',
                '--petal-opacity': p.opacity,
                animationDelay: p.delay + 's',
                animationDuration: p.duration + 's',
              }"
            ></span>
          </div>

          <!-- 卷轴主体：上下卷轴杆 + 展开的画卷 -->
          <div class="skill-pop-scroll">
            <div class="scroll-roller scroll-roller-top" aria-hidden="true"></div>
            <div
              class="skill-pop"
              role="dialog"
              aria-modal="true"
              aria-label="技能详情"
            >
              <button
                type="button"
                class="skill-pop-close"
                @click="closeModal"
                aria-label="关闭"
              >
                ×
              </button>

              <header class="modal-header">
                <h3 class="modal-title">SKILL · 技能栈</h3>
                <p class="modal-subtitle">AI 时代全栈开发与智能体构建能力</p>
              </header>

              <div class="modal-tabs">
                <button
                  v-for="cat in skillCategories"
                  :key="cat.id"
                  type="button"
                  class="modal-tab"
                  :class="{ active: activeTab === cat.id }"
                  @click="activeTab = cat.id"
                >
                  {{ cat.name }}
                </button>
              </div>

              <div class="modal-body">
                <div
                  v-for="cat in skillCategories"
                  :key="cat.id"
                  v-show="activeTab === cat.id"
                  class="modal-category"
                >
                  <p class="modal-category-desc">{{ cat.description }}</p>
                  <ol class="skill-list">
                    <li
                      v-for="(item, i) in cat.skills"
                      :key="i"
                      class="skill-item"
                    >
                      <span class="skill-item-index">{{ pad(i + 1) }}</span>
                      <p class="skill-item-text">{{ item }}</p>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            <div class="scroll-roller scroll-roller-bottom" aria-hidden="true"></div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useScrollLock } from '../composables/useScrollLock'

const { lock: lockScroll, unlock: unlockScroll } = useScrollLock()

const stageRef = ref(null)
const isOpen = ref(false)
const isVisible = ref(false)
const modalVisible = ref(false)
const activeTab = ref('dev')

// 樱花花瓣配置：每次打开弹窗时重新生成（见 openModal）
const sakuraPetals = ref([])

const pad = (n) => String(n).padStart(2, '0')

const skillCategories = ref([
  {
    id: 'dev',
    name: '开发技术',
    description: '从单体到微服务，从数据库到监控告警，构建可靠的后端基础设施能力。',
    skills: [
      '熟练运用 AI 辅助编程，能根据项目需求快速上手 Java、Python、Go 等语言，利用 Hutool、Lombok 等工具库提升编码效率，确保代码规范与可维护性。',
      '具备微服务架构设计思维，能借助 AI 快速理解 Spring Cloud、MyBatis 等框架生态，独立完成从单体拆分为微服务的技术选型与落地治理。',
      '熟悉 MySQL 数据库设计和 SQL 调优，实践过分库分表、索引优化，能使用 Druid 进行 SQL 监控和慢查询分析。',
      '熟悉 Redis 缓存中间件，实践过 Caffeine 多级缓存架构、分布式锁、缓存雪崩/穿透解决方案、哨兵集群搭建。',
      '熟悉 Docker 容器化和 Nginx 反向代理部署，能编写 Dockerfile 打包项目并通过 Serverless 平台快速上线。',
      '熟悉 Prometheus + Grafana + 阿里云 ARMS 监控告警体系，能构建从网关到数据库的全链路追踪和 JVM 诊断大盘。',
      '掌握 SEO 搜索引擎优化和 GEO 生成式引擎优化，能通过结构化内容和 TDK 优化等手段提升搜索收录和 AI 推荐排名。'
    ]
  },
  {
    id: 'ai',
    name: 'AI 应用开发',
    description: '拥抱 AI 原生开发，构建企业级智能体与 RAG 知识库应用。',
    skills: [
      '熟悉 Spring AI、LangChain4j 等 AI 开发框架，独立开发过涉及 RAG、工具调用、MCP、多 Agent 协作的企业级 AI 智能体应用。',
      '掌握 Prompt 工程和优化技巧，能基于 PGvector 向量数据库构建 RAG 知识库，实现文档 ETL、向量检索和查询增强的完整流程。',
      '能利用 Cursor / Claude Code / GitHub Copilot 等 AI 编程工具开发全栈项目，掌握 MCP Server 和 Agent Skills 的开发和发布。',
      '熟悉 Vibe Coding、SDD、Harness Engineering 等多种 AI 编程模式，能利用 Spec-Kit、OpenSpec 等工具驱动 AI 完成大型项目。'
    ]
  }
])

const toggleCurtain = () => {
  isOpen.value = !isOpen.value
}

const openModal = (tabIndex = 0) => {
  activeTab.value = skillCategories.value[tabIndex].id
  modalVisible.value = true
  lockScroll()
  // 每次打开重新生成樱花花瓣配置，让飘落轨迹每次都不同
  sakuraPetals.value = Array.from({ length: 14 }, () => ({
    left: Math.random() * 100,
    delay: Math.random() * 4,
    duration: 4 + Math.random() * 3,
    size: 8 + Math.random() * 8,
    drift: -160 + Math.random() * 320,
    spin: 360 + Math.random() * 720,
    opacity: +(0.4 + Math.random() * 0.4).toFixed(2)
  }))
}

const closeModal = () => {
  modalVisible.value = false
  unlockScroll()
}

const onKeydown = (e) => {
  if (e.key === 'Escape' && modalVisible.value) closeModal()
}

let observer = null

onMounted(() => {
  // 舞台进入视口时淡入上浮（只播放一次）
  observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        obs.disconnect()
      }
    })
  }, { threshold: 0.15 })
  if (stageRef.value) observer.observe(stageRef.value)

  window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  if (observer && typeof observer.disconnect === 'function') observer.disconnect()
  observer = null
  window.removeEventListener('keydown', onKeydown)
})
</script>

<style scoped>
.skills {
  padding: 6rem 0;
  background: transparent;
}

.skills-overline {
  text-align: center;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.5em;
  text-indent: 0.5em;
  color: var(--text-muted);
  margin-bottom: 1.4rem;
}

/* ============ 帷幕舞台 ============ */
.curtain-stage {
  --curtain-fabric:
    repeating-linear-gradient(105deg, rgba(255, 255, 255, 0.13) 0 2px, transparent 2px 14px),
    repeating-linear-gradient(-75deg, rgba(255, 255, 255, 0.07) 0 2px, transparent 2px 10px),
    linear-gradient(135deg, var(--glass-bg), rgba(255, 255, 255, 0.1));

  position: relative;
  width: 100%;
  max-width: 1000px;
  height: clamp(320px, 62vw, 560px);
  max-height: 72vh;
  margin: 0 auto;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid var(--glass-border);
  background:
    radial-gradient(circle at 50% 46%, var(--primary-light), transparent 62%),
    var(--bg-card);
  box-shadow: var(--shadow-lg);
  user-select: none;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.curtain-stage.visible {
  opacity: 1;
  transform: translateY(0);
}

/* 深色模式：面料换成靛紫透明织物 */
.dark .curtain-stage {
  --curtain-fabric:
    repeating-linear-gradient(105deg, rgba(255, 255, 255, 0.08) 0 2px, transparent 2px 14px),
    repeating-linear-gradient(-75deg, rgba(255, 255, 255, 0.05) 0 2px, transparent 2px 10px),
    linear-gradient(135deg, rgba(139, 92, 246, 0.25), rgba(16, 21, 51, 0.45));
}

/* ============ 四片帷幕（复刻 tmp.html 的旋转布局） ============ */
.curtain-panel {
  position: absolute;
  width: 100%;
  height: 100%;
  background: var(--curtain-fabric);
  border: 1px solid var(--glass-border);
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.18);
  opacity: 0.92;
  overflow: hidden;
  will-change: transform, opacity;
  transition: transform 0.55s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.55s ease;
}

.panel-b { left: -40%; transform: rotateZ(100deg); }
.panel-c { left: -40%; transform: rotateZ(-100deg); }
.panel-d { right: -40%; transform: rotateZ(105deg); }
.panel-e { right: -40%; transform: rotateZ(-100deg); }

/* 展开：向两侧滑开并淡出 */
.curtain-stage.open .panel-b { left: -60%; opacity: 0; }
.curtain-stage.open .panel-c { left: -66%; opacity: 0; }
.curtain-stage.open .panel-d { right: -60%; opacity: 0; }
.curtain-stage.open .panel-e { right: -66%; opacity: 0; }

/* ============ 中心 SKILL 大字 ============ */
.curtain-center {
  position: absolute;
  inset: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}

.curtain-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  padding: 1.5rem 3rem;
  background: transparent;
  border: none;
  cursor: pointer;
  opacity: 0;
  transform: scale(0.6);
  visibility: hidden;
  transition:
    opacity 0.45s ease,
    transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1),
    visibility 0.45s;
}

.curtain-stage.open .curtain-title {
  opacity: 1;
  transform: scale(1);
  visibility: visible;
  pointer-events: auto;
}

.curtain-title-text {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: clamp(3rem, 9vw, 6.2rem);
  letter-spacing: 0.18em;
  line-height: 1;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 6px 22px rgba(0, 0, 0, 0.22));
  transition: transform 0.3s ease;
}

.curtain-title:hover .curtain-title-text {
  transform: scale(1.04);
}

.curtain-title-hint {
  font-size: 0.95rem;
  letter-spacing: 0.3em;
  color: var(--text-secondary);
}

/* ============ 快速入口 chips ============ */
.skills-tags {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}

.skill-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.7rem 1.4rem;
  border-radius: 999px;
  border: 1px solid var(--glass-border);
  background: var(--bg-card);
  color: var(--text-primary);
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  transition: all 0.3s ease;
  box-shadow: var(--shadow);
}

.skill-tag:hover {
  transform: translateY(-3px);
  border-color: var(--primary-color);
  color: var(--primary-color);
  box-shadow: var(--shadow-glow);
}

.skill-tag-count {
  font-size: 0.8rem;
  padding: 0.1rem 0.55rem;
  border-radius: 999px;
  background: var(--gradient-primary);
  color: #fff;
}

/* ============ 技能详情弹窗（紧凑卡片，非全屏） ============ */
.skill-pop-root {
  --rod-a: #8a6a4f;
  --rod-b: #c9a06c;
  position: fixed;
  inset: 0;
  z-index: 4000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  pointer-events: none; /* 根容器不拦截事件 */
}

.dark .skill-pop-root {
  --rod-a: #6b4f96;
  --rod-b: #9a7bd8;
}

.skill-pop-mask {
  position: absolute;
  inset: 0;
  /* 毛玻璃：主题色半透明底 + 背景模糊，展开时给周围「结霜」 */
  background: var(--glass-bg);
  backdrop-filter: blur(8px) saturate(120%);
  -webkit-backdrop-filter: blur(8px) saturate(120%);
  pointer-events: auto; /* 点击空白处关闭 */
}

/* ============ 樱花飘落层 ============ */
.sakura-layer {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 1;
}

.petal {
  position: absolute;
  top: -30px;
  background: linear-gradient(135deg, #ffc1cf, #ff93ab);
  border-radius: 50% 0 50% 50%;
  box-shadow: 0 0 6px rgba(255, 155, 180, 0.5);
  opacity: var(--petal-opacity, 0.7);
  animation: petal-fall linear infinite;
}

@keyframes petal-fall {
  0% {
    transform: translate3d(0, -2vh, 0) rotate(0deg);
    opacity: 0;
  }
  12% {
    opacity: var(--petal-opacity, 0.7);
  }
  85% {
    opacity: var(--petal-opacity, 0.7);
  }
  100% {
    transform: translate3d(var(--petal-drift, 80px), 112vh, 0) rotate(var(--petal-spin, 540deg));
    opacity: 0;
  }
}

/* ============ 卷轴主体 ============ */
.skill-pop-scroll {
  position: relative;
  pointer-events: none;
}

.skill-pop {
  position: relative;
  pointer-events: auto;
  width: min(720px, 94vw);
  max-height: min(80vh, 720px);
  overflow-y: auto;
  background: var(--bg-card);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border: 1px solid var(--glass-border);
  border-radius: 1.25rem;
  padding: 2.2rem;
  box-shadow: var(--shadow-lg), 0 0 40px rgba(0, 0, 0, 0.18);
  transform-origin: center;
  /* 隐式滚动条：保留滚动能力，隐藏滚动条（Firefox / 旧 Edge / WebKit） */
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.skill-pop::-webkit-scrollbar {
  display: none;
}

/* 卷轴杆：上下两根木杆，略宽于画卷 */
.scroll-roller {
  position: absolute;
  left: -12px;
  right: -12px;
  height: 12px;
  border-radius: 999px;
  pointer-events: none;
  z-index: 3;
  background: linear-gradient(90deg, var(--rod-a), var(--rod-b) 30%, var(--rod-a) 55%, var(--rod-b) 80%, var(--rod-a));
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
}

.scroll-roller::after {
  content: '';
  position: absolute;
  left: 5px;
  right: 5px;
  top: 2px;
  height: 3px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.3);
}

.scroll-roller-top {
  top: -6px;
}

.scroll-roller-bottom {
  top: calc(100% + 6px);
}

/* ============ 进入 / 关闭动画：卷轴展开 ============ */
.pop-enter-active {
  animation: popMaskIn 0.16s ease;
}

/* 画卷：从中间横线向上下两端展开（clip-path 横向收拢线） */
.pop-enter-active .skill-pop {
  animation: scrollUnroll 0.36s cubic-bezier(0.16, 1, 0.3, 1);
}

/* 卷轴杆：从中央汇合处滑向上下两端 */
.pop-enter-active .scroll-roller-top {
  animation: rollerTopOut 0.36s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.pop-enter-active .scroll-roller-bottom {
  animation: rollerBottomOut 0.36s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.pop-leave-active {
  animation: popMaskOut 0.24s ease forwards;
}

.pop-leave-active .skill-pop {
  animation: scrollRoll 0.24s ease forwards;
}

.pop-leave-active .scroll-roller-top {
  animation: rollerTopIn 0.24s ease forwards;
}

.pop-leave-active .scroll-roller-bottom {
  animation: rollerBottomIn 0.24s ease forwards;
}

.skill-pop-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1px solid var(--glass-border);
  background: var(--bg-secondary);
  color: var(--text-primary);
  font-size: 1.4rem;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 2;
}

.skill-pop-close:hover {
  background: var(--primary-color);
  color: #fff;
  transform: rotate(90deg);
}

.modal-header {
  text-align: center;
  margin-bottom: 1.6rem;
}

.modal-title {
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 4vw, 2.4rem);
  font-weight: 900;
  letter-spacing: 0.12em;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 4px 16px rgba(0, 0, 0, 0.15));
  margin-bottom: 0.5rem;
}

.modal-subtitle {
  color: var(--text-secondary);
  font-size: 0.95rem;
  letter-spacing: 0.15em;
}

.modal-tabs {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 1.8rem;
}

.modal-tab {
  padding: 0.6rem 1.4rem;
  border-radius: 999px;
  border: 1px solid var(--glass-border);
  background: var(--bg-secondary);
  color: var(--text-secondary);
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.modal-tab:hover {
  color: var(--primary-color);
  border-color: var(--primary-color);
  transform: translateY(-2px);
}

.modal-tab.active {
  background: var(--gradient-primary);
  color: #fff;
  border-color: transparent;
  box-shadow: var(--shadow-glow);
}

.modal-body {
  margin-bottom: 1.8rem;
}

.modal-category-desc {
  color: var(--text-secondary);
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  line-height: 1.6;
}

.skill-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.skill-item {
  display: flex;
  align-items: flex-start;
  gap: 0.9rem;
  padding: 0.9rem 1rem;
  border-radius: 0.8rem;
  background: var(--bg-secondary);
  border: 1px solid transparent;
  border-left: 4px solid var(--primary-color);
  transition: all 0.3s ease;
}

.skill-item:hover {
  transform: translateX(5px);
  border-color: var(--glass-border);
  box-shadow: var(--shadow);
}

.skill-item-index {
  flex-shrink: 0;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  background: var(--gradient-primary);
  color: #fff;
  margin-top: 0.1rem;
}

.skill-item-text {
  margin: 0;
  color: var(--text-primary);
  font-size: 0.98rem;
  line-height: 1.7;
  text-align: justify;
}

/* ============ 关键帧 ============ */
/* 卷轴展开：从中央横线向上下两端铺开画卷 */
@keyframes scrollUnroll {
  0% {
    opacity: 0;
    transform: scaleY(0.02) scaleX(0.96);
    clip-path: inset(50% 0 50% 0);
  }
  30% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    transform: scaleY(1) scaleX(1);
    clip-path: inset(0 0 0 0);
  }
}

/* 卷轴收起：画卷向中央横线收拢 */
@keyframes scrollRoll {
  0% {
    opacity: 1;
    transform: scaleY(1) scaleX(1);
    clip-path: inset(0 0 0 0);
  }
  100% {
    opacity: 0;
    transform: scaleY(0.02) scaleX(0.96);
    clip-path: inset(50% 0 50% 0);
  }
}

/* 卷轴杆：上下两根杆从中央汇合处滑向画卷两端 */
@keyframes rollerTopOut {
  0% {
    top: 50%;
    opacity: 0;
  }
  18% {
    opacity: 1;
  }
  100% {
    top: -6px;
    opacity: 1;
  }
}

@keyframes rollerBottomOut {
  0% {
    top: 50%;
    opacity: 0;
  }
  18% {
    opacity: 1;
  }
  100% {
    top: calc(100% + 6px);
    opacity: 1;
  }
}

/* 卷轴杆收起：两根杆退回中央 */
@keyframes rollerTopIn {
  0% {
    top: -6px;
    opacity: 1;
  }
  100% {
    top: 50%;
    opacity: 0;
  }
}

@keyframes rollerBottomIn {
  0% {
    top: calc(100% + 6px);
    opacity: 1;
  }
  100% {
    top: 50%;
    opacity: 0;
  }
}

@keyframes popMaskIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes popMaskOut {
  to {
    opacity: 0;
  }
}

/* ============ 响应式 ============ */
@media (max-width: 768px) {
  .skills {
    padding: 4rem 0;
  }

  .curtain-stage {
    height: clamp(280px, 78vw, 440px);
  }

  .curtain-title-hint {
    font-size: 0.85rem;
    letter-spacing: 0.18em;
  }

  .skill-pop {
    padding: 1.6rem;
  }

  .modal-title {
    letter-spacing: 0.08em;
  }

  /* ============ 弹窗改为底部弹层 bottom sheet ============ */
  .skill-pop-root {
    align-items: flex-end;
    padding: 0;
  }

  .skill-pop-scroll {
    width: 100%;
  }

  .skill-pop {
    width: 100%;
    max-height: 78dvh;
    max-height: 78vh;
    border-radius: 1.5rem 1.5rem 0 0;
    padding: 1.6rem 1.25rem calc(1.6rem + env(safe-area-inset-bottom, 0px));
  }

  /* 卷轴杆收窄，避免超出屏幕横向溢出 */
  .scroll-roller {
    left: 6px;
    right: 6px;
  }

  /* 进入：从底部滑入 */
  .pop-enter-active .skill-pop {
    animation: sheetUp 0.36s cubic-bezier(0.16, 1, 0.3, 1);
  }

  /* 退出：滑回底部 */
  .pop-leave-active .skill-pop {
    animation: sheetDown 0.24s ease forwards;
  }

  /* 卷轴杆改为淡入淡出，不再做中央汇聚动画 */
  .pop-enter-active .scroll-roller-top,
  .pop-enter-active .scroll-roller-bottom {
    animation: rollerFade 0.36s ease forwards;
  }

  .pop-leave-active .scroll-roller-top,
  .pop-leave-active .scroll-roller-bottom {
    animation: rollerFadeOut 0.24s ease forwards;
  }

  @keyframes sheetUp {
    from { transform: translateY(100%); }
    to { transform: translateY(0); }
  }

  @keyframes sheetDown {
    from { transform: translateY(0); }
    to { transform: translateY(100%); }
  }

  @keyframes rollerFade {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes rollerFadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
  }
}

@media (max-width: 480px) {
  .skills-tags {
    gap: 0.6rem;
  }

  .skill-tag {
    padding: 0.6rem 1.1rem;
    font-size: 0.88rem;
  }

  .skill-item {
    padding: 0.8rem;
  }

  .skill-item-text {
    font-size: 0.92rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .curtain-stage,
  .curtain-panel,
  .curtain-title,
  .skill-pop-root,
  .skill-pop,
  .scroll-roller,
  .petal {
    animation: none !important;
    transition: none !important;
  }

  /* 关闭动画时让卷轴杆复位到正常位置，避免停在中间 */
  .scroll-roller-top {
    top: -6px !important;
  }

  .scroll-roller-bottom {
    top: calc(100% + 6px) !important;
  }
}
</style>
