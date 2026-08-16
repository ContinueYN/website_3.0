<template>
  <div class="blog-post" :class="{ 'dark': isDark }">
    <Header :isDark="isDark" @toggle-theme="toggleTheme" />
    <main>
      <!-- ==================== 文章头部 ==================== -->
      <section v-if="currentPost" class="post-hero" :class="toneFor(currentPost.category)">
        <!-- 装饰光斑 -->
        <div class="hero-orb orb-a" aria-hidden="true"></div>
        <div class="hero-orb orb-b" aria-hidden="true"></div>
        <span class="star star-1" aria-hidden="true">✦</span>
        <span class="star star-2" aria-hidden="true">✧</span>

        <div class="container">
          <div class="hero-inner">
            <router-link to="/blog" class="back-link" data-aos="fade-up" data-aos-duration="600">
              <span class="back-arrow" aria-hidden="true">←</span> 返回文章列表
            </router-link>

            <div class="hero-meta" data-aos="fade-up" data-aos-delay="80" data-aos-duration="600">
              <span class="hero-cat">{{ currentPost.category }}</span>
              <span class="hero-date">{{ formatDate(currentPost.date) }}</span>
              <span class="hero-read">
                <Clock3 :size="14" stroke-width="2.2" />
                {{ currentPost.readingTime }} 分钟阅读
              </span>
            </div>

            <h1 class="hero-title" data-aos="fade-up" data-aos-delay="160" data-aos-duration="700">
              {{ currentPost.title }}
            </h1>

            <div class="hero-author" data-aos="fade-up" data-aos-delay="240" data-aos-duration="700">
              <img src="@/assets/images/user.webp" alt="余诺的头像" class="author-avatar" width="56" height="56" loading="eager" decoding="async" />
              <div class="author-info">
                <span class="author-name">余诺</span>
                <span class="author-title">全栈开发者 · 记录成长</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ==================== 文章主体 ==================== -->
      <section v-if="currentPost" class="post-body-wrap">
        <div class="container">
          <div class="post-layout">
            <!-- 正文 -->
            <article class="post-article glass-card" data-aos="fade-up" data-aos-duration="650">
              <div ref="bodyRef" class="post-content" v-html="currentPost.content"></div>

              <!-- 标签 + 分享 -->
              <footer class="post-footer">
                <div class="post-tags">
                  <span v-for="tag in currentPost.tags" :key="tag" class="post-tag">#{{ tag }}</span>
                </div>

                <div class="post-share">
                  <span class="share-label">分享</span>
                  <button class="share-btn wechat" title="复制链接分享到微信" @click="copyLink">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                      <path d="M8.5 16.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"></path>
                      <path d="M15.5 16.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"></path>
                      <path d="M12 20c-3.5 0-7-1-7-3.5V6c0-1.38.5-2.63 1.36-3.5C7.5 1 9.63 1.5 11 1.5h2c1.37 0 3.5.5 4.64 1C19 3.37 19.5 4.62 19.5 6v10.5c0 2.5-3.5 3.5-7.5 3.5z"></path>
                    </svg>
                  </button>
                  <button class="share-btn weibo" title="复制链接分享到微博" @click="copyLink">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M8 12h8"></path>
                      <path d="M12 8v8"></path>
                    </svg>
                  </button>
                  <button class="share-btn zhihu" title="复制链接分享到知乎" @click="copyLink">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                      <path d="M2 17l10 5 10-5"></path>
                      <path d="M2 12l10 5 10-5"></path>
                    </svg>
                  </button>
                </div>
              </footer>
            </article>

            <!-- 目录（仅桌面） -->
            <aside v-if="toc.length > 1" class="post-toc" data-aos="fade-left" data-aos-duration="650">
              <div class="toc-inner">
                <p class="toc-title">目录</p>
                <nav>
                  <a
                    v-for="item in toc"
                    :key="item.id"
                    class="toc-link"
                    :class="{ active: activeHeading === item.id }"
                    :href="`#${item.id}`"
                    @click.prevent="scrollToHeading(item.id)"
                  >{{ item.text }}</a>
                </nav>
              </div>
            </aside>
          </div>

          <!-- 上一篇 / 下一篇 -->
          <nav class="post-nav" data-aos="fade-up" data-aos-duration="650">
            <div v-if="prevPost" class="nav-item prev">
              <router-link :to="`/blog/${prevPost.id}`">
                <span class="nav-arrow" aria-hidden="true">←</span>
                <div class="nav-body">
                  <span class="nav-label">上一篇</span>
                  <h3 class="nav-title">{{ prevPost.title }}</h3>
                </div>
              </router-link>
            </div>
            <div v-if="nextPost" class="nav-item next">
              <router-link :to="`/blog/${nextPost.id}`">
                <div class="nav-body">
                  <span class="nav-label">下一篇</span>
                  <h3 class="nav-title">{{ nextPost.title }}</h3>
                </div>
                <span class="nav-arrow" aria-hidden="true">→</span>
              </router-link>
            </div>
          </nav>
        </div>
      </section>

      <!-- ==================== 文章未找到 ==================== -->
      <section v-else class="post-not-found">
        <div class="container">
          <span class="nf-star" aria-hidden="true">✧</span>
          <h1>文章未找到</h1>
          <p>抱歉，您访问的文章不存在或已被删除。</p>
          <router-link to="/blog" class="btn">返回博客首页</router-link>
        </div>
      </section>
    </main>
    <Footer />

    <!-- 返回顶部 -->
    <transition name="totop">
      <button v-if="showTopBtn" class="to-top" title="回到顶部" aria-label="回到顶部" @click="scrollTop">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M12 19V5"></path>
          <path d="M5 12l7-7 7 7"></path>
        </svg>
      </button>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, inject, watch, nextTick, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { Clock3 } from 'lucide-vue-next'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { useBlogPosts } from '../composables/useBlogPosts'

const route = useRoute()

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const { isDark, toggleTheme } = inject<any>('theme')
const { getPostById, getPrevPost, getNextPost } = useBlogPosts()

const currentPostId = computed(() => Number(route.params.id))
const currentPost = computed(() => getPostById(currentPostId.value))
const prevPost = computed(() => getPrevPost(currentPostId.value))
const nextPost = computed(() => getNextPost(currentPostId.value))

/** 2026-01-30 → 2026.01.30 */
const formatDate = (date: string) => date.replace(/-/g, '.')

/* ---------------- 分类色调 ---------------- */
const CATEGORY_TONES: Record<string, string> = {
  架构: 'tone-violet',
  设计: 'tone-pink',
  性能: 'tone-gold',
  团队: 'tone-teal'
}
const toneFor = (category: string) => CATEGORY_TONES[category] || 'tone-teal'

/* ---------------- 目录 TOC ---------------- */
const bodyRef = ref<HTMLElement | null>(null)
const toc = ref<{ id: string; text: string }[]>([])
const activeHeading = ref('')
let tocObserver: IntersectionObserver | null = null

const buildToc = async () => {
  await nextTick()
  if (tocObserver) {
    tocObserver.disconnect()
    tocObserver = null
  }
  const root = bodyRef.value
  if (!root) return
  const h2s = Array.from(root.querySelectorAll<HTMLElement>('h2'))
  toc.value = h2s.map((el, i) => {
    const id = `heading-${currentPostId.value}-${i}`
    el.id = id
    return { id, text: el.textContent || '' }
  })
  if (toc.value.length > 1 && 'IntersectionObserver' in window) {
    tocObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) activeHeading.value = entry.target.id
        })
      },
      { rootMargin: '-15% 0px -75% 0px' }
    )
    h2s.forEach((el) => tocObserver!.observe(el))
  }
}

const scrollToHeading = (id: string) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

/* ---------------- 分享：复制链接 ---------------- */
const copyLink = async () => {
  const url = window.location.href
  try {
    await navigator.clipboard.writeText(url)
    alert('链接已复制，快去分享吧！')
  } catch {
    alert(`请手动复制链接：${url}`)
  }
}

/* ---------------- 返回顶部 ---------------- */
const showTopBtn = ref(false)
const onScroll = () => {
  showTopBtn.value = window.scrollY > 480
}
const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// 组件复用（上一篇/下一篇导航）时，文章变化需重建目录
watch(currentPost, buildToc)

onMounted(() => {
  // 首次进入时在挂载后构建目录：immediate watch 在 setup 阶段执行时
  // bodyRef 及 v-html 内容尚未就绪，会导致目录静默丢失
  buildToc()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  if (tocObserver) tocObserver.disconnect()
})
</script>

<style scoped>
/* ============================================================
   「湖畔昼夜」艺术风格 —— 文章阅读页
   ============================================================ */

.blog-post {
  min-height: 100vh;
}

/* ---------------- Hero ---------------- */
.post-hero {
  position: relative;
  padding: 8.5rem 0 4.5rem;
  overflow: hidden;
  background:
    radial-gradient(1000px 420px at 50% -8%, var(--hero-halo, rgba(20, 184, 166, 0.14)) 0%, transparent 70%),
    transparent;
}

.dark .post-hero {
  --hero-halo: rgba(139, 92, 246, 0.18);
}

.hero-inner {
  position: relative;
  z-index: 2;
  max-width: 900px;
  margin: 0 auto;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  color: var(--text-secondary);
  font-size: 0.9rem;
  text-decoration: none;
  margin-bottom: 2rem;
  transition: color 0.25s ease, transform 0.25s ease;
}

.back-link:hover {
  color: var(--primary-color);
  transform: translateX(-3px);
}

.hero-meta {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.9rem;
  margin-bottom: 1.1rem;
  font-size: 0.85rem;
  color: var(--text-secondary);
}

.hero-cat {
  padding: 0.24rem 0.85rem;
  border-radius: 999px;
  background: var(--cat-bg);
  color: var(--cat-color);
  font-weight: 600;
  font-size: 0.78rem;
  letter-spacing: 0.08em;
}

.hero-date, .hero-read {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}

.hero-title {
  font-family: var(--font-display);
  font-size: clamp(1.9rem, 4.6vw, 3rem);
  font-weight: 700;
  line-height: 1.28;
  color: var(--text-main);
  margin-bottom: 1.8rem;
  text-shadow: 0 2px 18px rgba(0, 0, 0, 0.06);
}

.hero-author {
  display: flex;
  align-items: center;
  gap: 0.9rem;
}

.author-avatar {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  object-fit: cover;
  border: 2.5px solid var(--glass-border);
  box-shadow: var(--shadow);
}

.author-info {
  display: flex;
  flex-direction: column;
}

.author-name {
  font-weight: 600;
  font-size: 1rem;
  color: var(--text-primary);
}

.author-title {
  font-size: 0.8rem;
  color: var(--text-muted);
}

/* 光斑与星星 */
.hero-orb {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
}

.orb-a {
  width: 300px;
  height: 300px;
  top: -110px;
  left: -70px;
  background: radial-gradient(circle, rgba(20, 184, 166, 0.15) 0%, transparent 65%);
}

.orb-b {
  width: 260px;
  height: 260px;
  top: -50px;
  right: -60px;
  background: radial-gradient(circle, rgba(245, 158, 11, 0.13) 0%, transparent 65%);
}

.dark .orb-a { background: radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 65%); }
.dark .orb-b { background: radial-gradient(circle, rgba(251, 191, 36, 0.14) 0%, transparent 65%); }

.star {
  position: absolute;
  z-index: 1;
  color: var(--primary-color);
  opacity: 0.5;
  pointer-events: none;
  animation: floatY 5s ease-in-out infinite;
}

.star-1 { top: 6.5rem; left: 10%; font-size: 1rem; }
.star-2 { top: 9rem; right: 14%; font-size: 0.8rem; animation-delay: 1.4s; }

@keyframes floatY {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-12px) rotate(16deg); }
}

/* 分类色调变量：浅色模式淡雅，深色模式饱和 */
.tone-teal {
  --cat-bg: rgba(45, 212, 191, 0.09);
  --cat-color: #0d9488;
}
.tone-violet {
  --cat-bg: rgba(167, 139, 250, 0.09);
  --cat-color: #8b5cf6;
}
.tone-pink {
  --cat-bg: rgba(249, 168, 212, 0.11);
  --cat-color: #ec4899;
}
.tone-gold {
  --cat-bg: rgba(252, 211, 77, 0.11);
  --cat-color: #d97706;
}

.dark .tone-teal { --cat-bg: rgba(20, 184, 166, 0.16); --cat-color: #5eead4; }
.dark .tone-violet { --cat-bg: rgba(139, 92, 246, 0.16); --cat-color: #c4b5fd; }
.dark .tone-pink { --cat-bg: rgba(244, 114, 182, 0.16); --cat-color: #f9a8d4; }
.dark .tone-gold { --cat-bg: rgba(245, 158, 11, 0.16); --cat-color: #fcd34d; }

/* ---------------- 主体布局 ---------------- */
.post-body-wrap {
  padding: 1.5rem 0 4.5rem;
}

.post-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 230px;
  gap: 2.5rem;
  align-items: start;
}

.post-article {
  padding: 2.6rem clamp(1.4rem, 3.5vw, 3rem);
  border-radius: 1.25rem;
}

/* ---------------- 正文排版 ---------------- */
.post-content {
  line-height: 1.95;
  color: var(--text-primary);
  font-size: 1.02rem;
  word-break: break-word;
}

.post-content :deep(h2) {
  font-family: var(--font-display);
  font-size: 1.55rem;
  font-weight: 700;
  color: var(--text-main);
  margin: 2.6rem 0 1.2rem;
  padding-left: 0.85rem;
  border-left: 4px solid;
  border-image: var(--gradient-primary) 1;
  scroll-margin-top: 90px;
}

.post-content :deep(h3) {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-main);
  margin: 2rem 0 0.9rem;
  padding-left: 0.6rem;
  border-left: 3px solid var(--primary-color);
  opacity: 0.92;
  scroll-margin-top: 90px;
}

.post-content :deep(p) {
  margin-bottom: 1.4rem;
}

.post-content :deep(strong) {
  color: var(--text-main);
}

.post-content :deep(a) {
  color: var(--primary-color);
  text-decoration: none;
  border-bottom: 1px dashed var(--primary-color);
  transition: opacity 0.2s ease;
}

.post-content :deep(a:hover) {
  opacity: 0.75;
}

.post-content :deep(ul),
.post-content :deep(ol) {
  margin: 0 0 1.4rem;
  padding-left: 1.6rem;
}

.post-content :deep(li) {
  margin-bottom: 0.55rem;
}

.post-content :deep(li)::marker {
  color: var(--primary-color);
}

.post-content :deep(blockquote) {
  margin: 1.6rem 0;
  padding: 0.9rem 1.3rem;
  border-left: 4px solid var(--primary-color);
  background: var(--glass-bg);
  border-radius: 0 0.75rem 0.75rem 0;
  color: var(--text-secondary);
  font-style: italic;
}

/* 代码块：macOS 风格窗口 */
.post-content :deep(pre) {
  position: relative;
  margin: 1.6rem 0;
  padding: 2.6rem 1.4rem 1.4rem;
  border-radius: 0.9rem;
  background: #1e2330;
  box-shadow: 0 10px 34px rgba(0, 0, 0, 0.22);
  overflow-x: auto;
}

.post-content :deep(pre)::before {
  content: '';
  position: absolute;
  top: 0.95rem;
  left: 1.1rem;
  width: 44px;
  height: 11px;
  background:
    radial-gradient(circle at 6px 6px, #ff5f57 0 5.5px, transparent 6px),
    radial-gradient(circle at 22px 6px, #febc2e 0 5.5px, transparent 6px),
    radial-gradient(circle at 38px 6px, #28c840 0 5.5px, transparent 6px);
}

.post-content :deep(code) {
  font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', 'Menlo', monospace;
  font-size: 0.85rem;
  color: #e6e9f5;
}

.post-content :deep(:not(pre) > code) {
  background: var(--cat-bg, rgba(20, 184, 166, 0.14));
  color: var(--cat-color, var(--primary-dark));
  padding: 0.15rem 0.45rem;
  border-radius: 0.4rem;
  font-size: 0.85em;
}

.post-content :deep(img) {
  max-width: 100%;
  border-radius: 0.75rem;
  margin: 1.2rem 0;
  box-shadow: var(--shadow);
}

.post-content :deep(hr) {
  border: none;
  border-top: 1px dashed var(--border-color);
  margin: 2rem 0;
}

/* ---------------- 底部：标签 + 分享 ---------------- */
.post-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.2rem;
  margin-top: 2.4rem;
  padding-top: 1.6rem;
  border-top: 1px dashed var(--border-color);
}

.post-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
}

.post-tag {
  font-size: 0.82rem;
  color: var(--text-secondary);
  padding: 0.26rem 0.9rem;
  border-radius: 999px;
  border: 1px solid var(--border-color);
  background: var(--glass-bg);
  transition: all 0.25s ease;
}

.post-tag:hover {
  color: var(--primary-color);
  border-color: var(--primary-color);
  transform: translateY(-2px);
}

.post-share {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.share-label {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-right: 0.2rem;
}

.share-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1px solid var(--border-color);
  background: var(--glass-bg);
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.25s ease;
}

.share-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
}

.share-btn.wechat:hover { background: #07c160; color: #fff; border-color: #07c160; }
.share-btn.weibo:hover { background: #e6162d; color: #fff; border-color: #e6162d; }
.share-btn.zhihu:hover { background: #0084ff; color: #fff; border-color: #0084ff; }

/* ---------------- 目录 TOC ---------------- */
.post-toc {
  position: sticky;
  top: 6rem;
}

.toc-inner {
  padding: 1.2rem 1.2rem 1.1rem;
  border-radius: 1rem;
  background: var(--bg-card);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid var(--glass-border);
  box-shadow: var(--shadow);
  max-height: calc(100vh - 8rem);
  overflow-y: auto;
}

.toc-title {
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 0.8rem;
  padding-bottom: 0.6rem;
  border-bottom: 1px dashed var(--border-color);
  letter-spacing: 0.2em;
}

.toc-link {
  display: block;
  padding: 0.42rem 0.6rem;
  margin-bottom: 0.15rem;
  font-size: 0.85rem;
  line-height: 1.45;
  color: var(--text-secondary);
  text-decoration: none;
  border-radius: 0.5rem;
  border-left: 2.5px solid transparent;
  transition: all 0.22s ease;
}

.toc-link:hover {
  color: var(--primary-color);
  background: var(--glass-bg);
}

.toc-link.active {
  color: var(--primary-color);
  border-left-color: var(--primary-color);
  background: var(--glass-bg);
  font-weight: 600;
}

/* ---------------- 上一篇 / 下一篇 ---------------- */
.post-nav {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.4rem;
  margin-top: 2.6rem;
}

.nav-item a {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 1.4rem;
  border-radius: 1rem;
  background: var(--bg-card);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid var(--glass-border);
  box-shadow: var(--shadow);
  text-decoration: none;
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.3s ease, border-color 0.3s ease;
}

.nav-item a:hover {
  transform: translateY(-4px);
  border-color: var(--primary-color);
  box-shadow: var(--shadow-lg);
}

.nav-item.next a {
  justify-content: flex-end;
  text-align: right;
}

.nav-body {
  flex: 1;
  min-width: 0;
}

.nav-label {
  display: block;
  font-size: 0.78rem;
  color: var(--text-muted);
  margin-bottom: 0.35rem;
}

.nav-title {
  font-size: 0.98rem;
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.nav-arrow {
  font-size: 1.3rem;
  color: var(--primary-color);
  flex-shrink: 0;
}

/* ---------------- 未找到 ---------------- */
.post-not-found {
  padding: 9rem 0 7rem;
  text-align: center;
}

.nf-star {
  display: block;
  font-size: 2.6rem;
  color: var(--primary-color);
  opacity: 0.5;
  margin-bottom: 1.2rem;
  animation: floatY 4s ease-in-out infinite;
}

.post-not-found h1 {
  font-family: var(--font-display);
  font-size: 2.4rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.post-not-found p {
  color: var(--text-secondary);
  margin-bottom: 2.2rem;
}

/* ---------------- 返回顶部 ---------------- */
.to-top {
  position: fixed;
  right: 1.6rem;
  bottom: 1.6rem;
  z-index: 2000;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: 1px solid var(--glass-border);
  background: var(--bg-card);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  color: var(--primary-color);
  box-shadow: var(--shadow);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.25s ease, box-shadow 0.25s ease, color 0.25s ease;
}

.to-top:hover {
  transform: translateY(-4px);
  color: #fff;
  background: var(--gradient-primary);
  box-shadow: var(--shadow-glow);
}

.totop-enter-active, .totop-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.totop-enter-from, .totop-leave-to {
  opacity: 0;
  transform: translateY(14px);
}

/* ---------------- 响应式 ---------------- */
@media (max-width: 1024px) {
  .post-layout {
    grid-template-columns: 1fr;
  }

  .post-toc {
    display: none;
  }
}

@media (max-width: 768px) {
  .post-hero { padding: 7rem 0 3.2rem; }

  .hero-title { font-size: 1.75rem; }

  .post-article { padding: 1.7rem 1.25rem; }

  .post-nav {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .star { display: none; }
}

/* ---------------- 减少动态效果偏好 ---------------- */
@media (prefers-reduced-motion: reduce) {
  .star, .nf-star { animation: none; }
  .to-top { transition: opacity 0.2s ease; }
}
</style>
