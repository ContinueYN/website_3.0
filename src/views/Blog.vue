<template>
  <div class="blog" :class="{ 'dark': isDark }">
    <Header :isDark="isDark" @toggle-theme="toggleTheme" />
    <main>
      <!-- ==================== 头部 Hero ==================== -->
      <section class="blog-hero">
        <!-- 装饰光斑（纯渐变，零图片） -->
        <div class="hero-orb orb-a" aria-hidden="true"></div>
        <div class="hero-orb orb-b" aria-hidden="true"></div>
        <div class="hero-orb orb-c" aria-hidden="true"></div>
        <!-- 漂浮星星 -->
        <span class="star star-1" aria-hidden="true">✦</span>
        <span class="star star-2" aria-hidden="true">✧</span>
        <span class="star star-3" aria-hidden="true">✦</span>
        <span class="star star-4" aria-hidden="true">✧</span>

        <div class="container">
          <div class="hero-inner">
            <p class="hero-eyebrow" data-aos="fade-up" data-aos-duration="700">— BLOG · ブログ —</p>
            <h1 class="hero-title" data-aos="fade-up" data-aos-delay="100" data-aos-duration="700">
              <span class="grad">文 章</span>
            </h1>
            <p class="hero-subtitle" data-aos="fade-up" data-aos-delay="200" data-aos-duration="700">
              分享学习心得、技术见解与生活感悟
            </p>
            <div class="hero-stats" data-aos="fade-up" data-aos-delay="300" data-aos-duration="700">
              <div class="stat-pill">
                <span class="stat-num">{{ blogPosts.length }}</span>
                <span class="stat-label">篇文章</span>
              </div>
              <span class="stat-divider" aria-hidden="true"></span>
              <div class="stat-pill">
                <span class="stat-num">{{ uniqueCategories.length }}</span>
                <span class="stat-label">个分类</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ==================== 分类筛选 ==================== -->
      <section class="blog-cats">
        <div class="container">
          <div class="cat-scroller" data-aos="fade-up" data-aos-duration="600">
            <button
              v-for="category in ['全部', ...uniqueCategories]"
              :key="category"
              class="cat-btn"
              :class="{ active: selectedCategory === category }"
              @click="selectedCategory = category"
            >
              {{ category }}
            </button>
          </div>
        </div>
      </section>

      <!-- ==================== 文章列表 ==================== -->
      <section class="blog-list">
        <div class="container">
          <div class="blog-grid">
            <article
              v-for="(post, index) in filteredPosts"
              :key="post.id"
              class="post-card"
              :class="toneFor(post.category)"
              data-aos="fade-up"
              data-aos-duration="650"
              :data-aos-delay="(index % 3) * 90"
              @click="navigateToPost(post.id)"
            >
              <span class="card-star" aria-hidden="true">✦</span>
              <span class="card-cat">{{ post.category }}</span>
              <span class="card-topline" aria-hidden="true"></span>

              <div class="card-body">
                <div class="card-meta">
                  <span class="card-date">{{ formatDate(post.date) }}</span>
                  <span class="card-read">
                    <Clock3 :size="13" stroke-width="2.2" />
                    {{ post.readingTime }} min
                  </span>
                </div>

                <h2 class="card-title">{{ post.title }}</h2>
                <p class="card-excerpt">{{ post.excerpt }}</p>

                <div class="card-tags">
                  <span v-for="tag in post.tags.slice(0, 3)" :key="tag" class="card-tag">#{{ tag }}</span>
                </div>

                <div class="card-footer">
                  <span class="read-more">
                    阅读全文
                    <span class="arrow" aria-hidden="true">→</span>
                  </span>
                </div>
              </div>
            </article>
          </div>

          <!-- 空状态 -->
          <div v-if="filteredPosts.length === 0" class="blog-empty">
            <span class="empty-star" aria-hidden="true">✧</span>
            <h3>暂无文章</h3>
            <p>该分类下还没有文章，敬请期待！</p>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, inject } from 'vue'
import { useRouter } from 'vue-router'
import { Clock3 } from 'lucide-vue-next'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { useBlogPosts } from '../composables/useBlogPosts'

const router = useRouter()
const selectedCategory = ref('全部')

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const { isDark, toggleTheme } = inject<any>('theme')
const { blogPosts, uniqueCategories, filterByCategory } = useBlogPosts()

const filteredPosts = computed(() => filterByCategory(selectedCategory.value))

const navigateToPost = (id: number) => {
  router.push({ name: 'BlogPost', params: { id } })
}

/** 2026-01-30 → 2026.01.30 */
const formatDate = (date: string) => date.replace(/-/g, '.')

/** 每个分类映射一个主题色调，卡片装饰条 / 光晕随分类变色 */
const CATEGORY_TONES: Record<string, string> = {
  架构: 'tone-violet',
  设计: 'tone-pink',
  性能: 'tone-gold',
  团队: 'tone-teal'
}
const toneFor = (category: string) => CATEGORY_TONES[category] || 'tone-teal'
</script>

<style scoped>
/* ============================================================
   「湖畔昼夜」艺术风格 —— 玻璃拟态 + 渐变光斑 + 星星点缀
   性能：装饰全部用 CSS 渐变；动画只用 transform/opacity
   ============================================================ */

.blog {
  min-height: 100vh;
}

/* ---------------- Hero ---------------- */
.blog-hero {
  position: relative;
  padding: 9.5rem 0 4.5rem;
  text-align: center;
  overflow: hidden;
  background:
    radial-gradient(1200px 500px at 50% -10%, var(--hero-halo, rgba(20, 184, 166, 0.14)) 0%, transparent 70%),
    transparent;
}

.dark .blog-hero {
  --hero-halo: rgba(139, 92, 246, 0.16);
}

.hero-inner {
  position: relative;
  z-index: 2;
}

.hero-eyebrow {
  font-size: 0.9rem;
  letter-spacing: 0.45em;
  text-indent: 0.45em;
  color: var(--text-secondary);
  margin-bottom: 1.2rem;
  opacity: 0.85;
}

.hero-title {
  font-family: var(--font-display);
  font-size: clamp(3.2rem, 8vw, 5rem);
  font-weight: 700;
  letter-spacing: 0.3em;
  text-indent: 0.3em;
  line-height: 1.15;
  margin-bottom: 1.4rem;
}

.grad {
  background: var(--gradient-primary);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradShift 8s ease-in-out infinite;
}

@keyframes gradShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.hero-subtitle {
  font-size: 1.15rem;
  color: var(--text-secondary);
  max-width: 560px;
  margin: 0 auto 2.6rem;
}

/* 统计徽章：玻璃胶囊 */
.hero-stats {
  display: inline-flex;
  align-items: center;
  gap: 1.8rem;
  padding: 0.9rem 2.2rem;
  border-radius: 999px;
  background: var(--bg-card);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid var(--glass-border);
  box-shadow: var(--shadow);
}

.stat-pill {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
}

.stat-num {
  font-family: var(--font-display);
  font-size: 1.7rem;
  font-weight: 700;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.stat-label {
  font-size: 0.85rem;
  color: var(--text-secondary);
}

.stat-divider {
  width: 1px;
  height: 1.4rem;
  background: var(--border-color);
}

/* 装饰光斑：radial-gradient 实现，无 blur 滤镜，性能友好 */
.hero-orb {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
}

.orb-a {
  width: 340px;
  height: 340px;
  top: -120px;
  left: -80px;
  background: radial-gradient(circle, rgba(20, 184, 166, 0.16) 0%, transparent 65%);
}

.orb-b {
  width: 280px;
  height: 280px;
  top: -60px;
  right: -60px;
  background: radial-gradient(circle, rgba(245, 158, 11, 0.14) 0%, transparent 65%);
}

.orb-c {
  width: 200px;
  height: 200px;
  bottom: -90px;
  left: 50%;
  transform: translateX(-50%);
  background: radial-gradient(circle, rgba(167, 139, 250, 0.14) 0%, transparent 65%);
}

.dark .orb-a { background: radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 65%); }
.dark .orb-b { background: radial-gradient(circle, rgba(251, 191, 36, 0.14) 0%, transparent 65%); }
.dark .orb-c { background: radial-gradient(circle, rgba(167, 139, 250, 0.18) 0%, transparent 65%); }

/* 漂浮星星（二次元点缀，纯文本 + 漂浮动画） */
.star {
  position: absolute;
  z-index: 1;
  color: var(--primary-color);
  opacity: 0.55;
  pointer-events: none;
  animation: floatY 5s ease-in-out infinite;
}

.star-1 { top: 7rem; left: 12%; font-size: 1.1rem; animation-delay: 0s; }
.star-2 { top: 10rem; right: 15%; font-size: 0.85rem; animation-delay: 1.2s; }
.star-3 { bottom: 5rem; left: 20%; font-size: 0.8rem; animation-delay: 2.1s; }
.star-4 { bottom: 7rem; right: 22%; font-size: 1rem; animation-delay: 0.6s; }

@keyframes floatY {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-14px) rotate(18deg); }
}

/* ---------------- 分类筛选 ---------------- */
.blog-cats {
  position: relative;
  z-index: 2;
  padding: 1.2rem 0 0.6rem;
}

.cat-scroller {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.7rem;
}

.cat-btn {
  padding: 0.55rem 1.4rem;
  border-radius: 999px;
  border: 1.5px solid var(--border-color);
  background: var(--bg-card);
  color: var(--text-secondary);
  font-size: 0.9rem;
  font-weight: 500;
  font-family: var(--font-body);
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease, color 0.25s ease,
    border-color 0.25s ease, background 0.25s ease;
  will-change: transform;
}

.cat-btn:hover {
  transform: translateY(-2px);
  color: var(--primary-color);
  border-color: var(--primary-color);
}

.cat-btn.active {
  background: var(--gradient-primary);
  background-size: 160% 160%;
  color: #fff;
  border-color: transparent;
  box-shadow: 0 6px 20px var(--shadow-glow);
  transform: translateY(-2px);
}

.dark .cat-btn.active { color: #12162e; }

/* ---------------- 文章列表 ---------------- */
.blog-list {
  padding: 2.8rem 0 5rem;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  gap: 1.8rem;
}

/* 卡片：玻璃拟态 + 顶部渐变装饰条（随分类换色） */
.post-card {
  position: relative;
  border-radius: 1.25rem;
  background: var(--bg-card);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid var(--glass-border);
  box-shadow: var(--shadow);
  cursor: pointer;
  overflow: hidden;
  padding: 1.8rem 1.8rem 1.5rem;
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease, border-color 0.35s ease;
  will-change: transform;
}

.post-card:hover {
  transform: translateY(-6px);
  border-color: var(--card-glow, var(--primary-color));
  box-shadow: var(--shadow-lg);
}

/* 顶部渐变条 */
.card-topline {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--card-grad, var(--gradient-primary));
  opacity: 0.9;
  transition: height 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}

.post-card:hover .card-topline {
  height: 7px;
}

/* 分类色调：浅色模式用淡雅水彩色调 */
.tone-teal {
  --card-grad: linear-gradient(90deg, #2dd4bf, #99f6e4);
  --card-glow: rgba(45, 212, 191, 0.4);
  --cat-bg: rgba(45, 212, 191, 0.09);
  --cat-color: #0d9488;
}

.tone-violet {
  --card-grad: linear-gradient(90deg, #a78bfa, #ddd6fe);
  --card-glow: rgba(167, 139, 250, 0.4);
  --cat-bg: rgba(167, 139, 250, 0.09);
  --cat-color: #8b5cf6;
}

.tone-pink {
  --card-grad: linear-gradient(90deg, #f9a8d4, #fce7f3);
  --card-glow: rgba(249, 168, 212, 0.45);
  --cat-bg: rgba(249, 168, 212, 0.11);
  --cat-color: #ec4899;
}

.tone-gold {
  --card-grad: linear-gradient(90deg, #fcd34d, #fef3c7);
  --card-glow: rgba(252, 211, 77, 0.45);
  --cat-bg: rgba(252, 211, 77, 0.11);
  --cat-color: #d97706;
}

/* 深色模式：恢复饱和色调，保证夜空下的存在感 */
.dark .tone-teal {
  --card-grad: linear-gradient(90deg, #14b8a6, #5eead4);
  --card-glow: rgba(20, 184, 166, 0.65);
  --cat-bg: rgba(20, 184, 166, 0.15);
  --cat-color: #5eead4;
}

.dark .tone-violet {
  --card-grad: linear-gradient(90deg, #8b5cf6, #c4b5fd);
  --card-glow: rgba(139, 92, 246, 0.65);
  --cat-bg: rgba(139, 92, 246, 0.15);
  --cat-color: #c4b5fd;
}

.dark .tone-pink {
  --card-grad: linear-gradient(90deg, #f472b6, #fbcfe8);
  --card-glow: rgba(244, 114, 182, 0.6);
  --cat-bg: rgba(244, 114, 182, 0.15);
  --cat-color: #f9a8d4;
}

.dark .tone-gold {
  --card-grad: linear-gradient(90deg, #f59e0b, #fcd34d);
  --card-glow: rgba(245, 158, 11, 0.6);
  --cat-bg: rgba(245, 158, 11, 0.15);
  --cat-color: #fcd34d;
}

/* 分类徽章：贴纸风 */
.card-cat {
  position: absolute;
  top: 1.1rem;
  right: 1.1rem;
  z-index: 2;
  padding: 0.22rem 0.8rem;
  border-radius: 999px;
  background: var(--cat-bg);
  color: var(--cat-color);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.08em;
}

/* 右上角星星 */
.card-star {
  position: absolute;
  top: 1.15rem;
  left: 1.2rem;
  z-index: 2;
  font-size: 0.95rem;
  color: var(--cat-color, var(--primary-color));
  opacity: 0.75;
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease;
}

.post-card:hover .card-star {
  transform: rotate(120deg) scale(1.25);
  opacity: 1;
}

.card-body {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}

/* 元信息 */
.card-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.9rem;
  font-size: 0.8rem;
  color: var(--text-muted);
}

.card-read {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}

/* 标题 */
.card-title {
  font-family: var(--font-display);
  font-size: 1.35rem;
  font-weight: 700;
  line-height: 1.35;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
  transition: color 0.25s ease;
}

.post-card:hover .card-title {
  color: var(--cat-color, var(--primary-color));
}

/* 摘要 */
.card-excerpt {
  font-size: 0.92rem;
  line-height: 1.7;
  color: var(--text-secondary);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 1rem;
  flex: 1;
}

/* 标签 */
.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.2rem;
}

.card-tag {
  font-size: 0.75rem;
  color: var(--text-muted);
  padding: 0.18rem 0.7rem;
  border-radius: 999px;
  border: 1px solid var(--border-color);
  transition: color 0.25s ease, border-color 0.25s ease;
}

.post-card:hover .card-tag {
  color: var(--cat-color, var(--primary-color));
  border-color: var(--cat-glow, var(--primary-color));
}

/* 底部 */
.card-footer {
  display: flex;
  justify-content: flex-end;
  padding-top: 0.8rem;
  border-top: 1px dashed var(--border-color);
}

.read-more {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--cat-color, var(--primary-color));
}

.arrow {
  display: inline-block;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.post-card:hover .arrow {
  transform: translateX(5px);
}

/* ---------------- 空状态 ---------------- */
.blog-empty {
  text-align: center;
  padding: 6rem 0;
  color: var(--text-secondary);
}

.empty-star {
  display: block;
  font-size: 2.4rem;
  color: var(--primary-color);
  opacity: 0.5;
  margin-bottom: 1rem;
  animation: floatY 4s ease-in-out infinite;
}

.blog-empty h3 {
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.6rem;
}

/* ---------------- 响应式 ---------------- */
@media (max-width: 768px) {
  .blog {
    min-height: 100svh;
    min-height: 100dvh;
  }

  .blog-hero { padding: 7.5rem 0 3.5rem; }

  .hero-stats { gap: 1.2rem; padding: 0.7rem 1.5rem; }
  .stat-num { font-size: 1.35rem; }

  .blog-grid {
    grid-template-columns: 1fr;
    gap: 1.4rem;
  }

  .star { display: none; }
}

/* ---------------- 减少动态效果偏好 ---------------- */
@media (prefers-reduced-motion: reduce) {
  .grad { animation: none; }
  .star, .empty-star { animation: none; }
  .post-card, .cat-btn { transition: box-shadow 0.2s ease; }
}
</style>
