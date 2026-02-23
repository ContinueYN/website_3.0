<template>
  <div class="blog-post" :class="{ 'dark': isDark }">
    <Header :isDark="isDark" @toggle-theme="toggleTheme" />
    <main>
      <!-- 博客文章内容 -->
      <section v-if="currentPost" class="blog-post-content">
        <!-- 文章头部 -->
        <div class="blog-post-hero" :style="{ '--hero-bg': currentPost.bgColor }">
          <div class="container">
            <div class="blog-post-hero-content">
              <div class="blog-post-meta" data-aos="fade-up" data-aos-duration="800">
                <span class="blog-post-date">{{ currentPost.date }}</span>
                <span class="blog-post-category">{{ currentPost.category }}</span>
                <span class="blog-post-reading-time">{{ currentPost.readingTime }} 分钟阅读</span>
              </div>
              <h1 data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">{{ currentPost.title }}</h1>
              <div class="blog-post-author" data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
                <img src="@/assets/images/user.jpg" alt="Author" class="author-avatar" />
                <div class="author-info">
                  <span class="author-name">余诺</span>
                  <span class="author-title">全栈开发者</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 文章主体 -->
        <div class="blog-post-body-wrapper">
          <div class="container">
            <div class="blog-post-body" data-aos="fade-up" data-aos-duration="800">
              <div v-html="currentPost.content"></div>
            </div>
            
            <!-- 文章底部 -->
            <div class="blog-post-footer" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
              <div class="blog-post-tags">
                <span v-for="tag in currentPost.tags" :key="tag" class="blog-post-tag">#{{ tag }}</span>
              </div>
              <div class="blog-post-share">
                <span>分享到：</span>
                <div class="share-buttons">
                  <button class="share-button" title="分享到微信">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M8.5 16.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"></path>
                      <path d="M15.5 16.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"></path>
                      <path d="M12 20c-3.5 0-7-1-7-3.5V6c0-1.38.5-2.63 1.36-3.5C7.5 1 9.63 1.5 11 1.5h2c1.37 0 3.5.5 4.64 1C19 3.37 19.5 4.62 19.5 6v10.5c0 2.5-3.5 3.5-7.5 3.5z"></path>
                    </svg>
                  </button>
                  <button class="share-button" title="分享到微博">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M8 12h8"></path>
                      <path d="M12 8v8"></path>
                    </svg>
                  </button>
                  <button class="share-button" title="分享到知乎">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                      <path d="M2 17l10 5 10-5"></path>
                      <path d="M2 12l10 5 10-5"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            <!-- 文章导航 -->
            <div class="blog-post-navigation" data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
              <div v-if="prevPost" class="blog-post-nav-item prev">
                <router-link :to="`/blog/${prevPost.id}`">
                  <div class="nav-item-arrow">←</div>
                  <div class="nav-item-content">
                    <span class="nav-item-label">上一篇</span>
                    <h3 class="nav-item-title">{{ prevPost.title }}</h3>
                  </div>
                </router-link>
              </div>
              <div v-if="nextPost" class="blog-post-nav-item next">
                <router-link :to="`/blog/${nextPost.id}`">
                  <div class="nav-item-content">
                    <span class="nav-item-label">下一篇</span>
                    <h3 class="nav-item-title">{{ nextPost.title }}</h3>
                  </div>
                  <div class="nav-item-arrow">→</div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- 文章未找到 -->
      <section v-else class="blog-post-not-found">
        <div class="container">
          <h1 data-aos="fade-up">文章未找到</h1>
          <p data-aos="fade-up" data-aos-delay="200">抱歉，您访问的文章不存在或已被删除。</p>
          <router-link to="/blog" class="btn" data-aos="fade-up" data-aos-delay="300">返回博客首页</router-link>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { ref, computed, inject } from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { useBlogPosts } from '../composables/useBlogPosts'

const route = useRoute()
const router = useRouter()

// 注入主题状态和切换函数
const { isDark, toggleTheme } = inject('theme')
const { getPostById, getPrevPost, getNextPost } = useBlogPosts()

const currentPostId = computed(() => Number(route.params.id))

const currentPost = computed(() => {
  return getPostById(currentPostId.value)
})

const prevPost = computed(() => {
  return getPrevPost(currentPostId.value)
})

const nextPost = computed(() => {
  return getNextPost(currentPostId.value)
})
</script>

<style scoped>
.blog-post {
  min-height: 100vh;
  background: var(--bg-primary);
  transition: background-color 0.3s ease;
}

/* 文章头部英雄区 */
.blog-post-hero {
  position: relative;
  padding: 6rem 0;
  background: var(--bg-secondary);
  overflow: hidden;
}

.blog-post-hero::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100px;
  background-color: var(--blog-card-bg, var(--primary-color));
  z-index: 1;
}

.blog-post-hero-content {
  position: relative;
  z-index: 2;
  color: var(--text-primary);
  max-width: 800px;
}

.blog-post-meta {
  display: flex;
  gap: 1.5rem;
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
  opacity: 0.9;
}

.blog-post-meta span {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.blog-post-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 2rem;
  line-height: 1.2;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.blog-post-author {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.author-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid white;
}

.author-info {
  display: flex;
  flex-direction: column;
}

.author-name {
  font-weight: 600;
  font-size: 1.1rem;
}

.author-title {
  font-size: 0.875rem;
  opacity: 0.9;
}

/* 文章主体 */
.blog-post-body-wrapper {
  background: var(--bg-primary);
  position: relative;
  margin-top: 2rem;
  border-radius: 12px;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.1);
  padding: 2rem;
}

.blog-post-body {
  line-height: 1.8;
  color: var(--text-primary);
  max-width: 800px;
  margin: 0 auto;
}

.blog-post-body h2 {
  font-size: 2rem;
  font-weight: 600;
  margin: 2.5rem 0 1.5rem;
  color: var(--text-primary);
  padding-bottom: 0.75rem;
  border-bottom: 2px solid var(--primary-color);
}

.blog-post-body h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 2rem 0 1rem;
  color: var(--text-primary);
}

.blog-post-body p {
  margin-bottom: 1.5rem;
  font-size: 1.05rem;
}

.blog-post-body pre {
  background: var(--bg-secondary);
  padding: 1.5rem;
  border-radius: 10px;
  overflow-x: auto;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.blog-post-body code {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.875rem;
  color: var(--code-color);
}

.blog-post-body ul {
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
}

.blog-post-body li {
  margin-bottom: 0.75rem;
}

/* 文章底部 */
.blog-post-footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
  flex-wrap: wrap;
  gap: 1.5rem;
}

.blog-post-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.blog-post-tag {
  font-size: 0.875rem;
  color: var(--text-primary);
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  border: 1px solid var(--glass-border);
  padding: 0.375rem 1rem;
  border-radius: 20px;
  transition: all 0.3s ease;
  box-shadow: var(--shadow);
}

.blog-post-tag:hover {
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  border-color: var(--primary-color);
  transform: translateY(-2px);
  box-shadow: var(--shadow-glow);
}

.blog-post-share {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.share-buttons {
  display: flex;
  gap: 0.75rem;
}

.share-button {
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  border: 1px solid var(--glass-border);
  padding: 0.75rem;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow);
}

.share-button:hover {
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  border-color: var(--primary-color);
  transform: translateY(-2px);
  box-shadow: var(--shadow-glow);
}

/* 文章导航 */
.blog-post-navigation {
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;
  padding-top: 2.5rem;
  border-top: 1px solid var(--border-color);
  gap: 2rem;
}

.blog-post-nav-item {
  flex: 1;
}

.blog-post-nav-item a {
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  color: var(--text-primary);
  transition: all 0.3s ease;
  padding: 1.5rem;
  background: var(--bg-secondary);
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.blog-post-nav-item a:hover {
  background: var(--primary-color);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
}

.blog-post-nav-item.prev a {
  justify-content: flex-start;
}

.blog-post-nav-item.next a {
  justify-content: flex-end;
}

.nav-item-arrow {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-item-content {
  flex: 1;
}

.nav-item-label {
  font-size: 0.875rem;
  opacity: 0.8;
  display: block;
  margin-bottom: 0.5rem;
}

.nav-item-title {
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.3;
  margin: 0;
}

/* 文章未找到 */
.blog-post-not-found {
  padding: 8rem 0;
  text-align: center;
}

.blog-post-not-found h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
}

.blog-post-not-found p {
  font-size: 1.25rem;
  color: var(--text-secondary);
  margin-bottom: 2.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .blog-post-title {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  .blog-post-hero {
    height: 60vh;
    min-height: 400px;
  }
  
  .blog-post-title {
    font-size: 2rem;
  }
  
  .blog-post-body {
    padding: 3rem 0;
  }
  
  .blog-post-body-wrapper {
    margin-top: -80px;
  }
  
  .blog-post-footer {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }
  
  .blog-post-navigation {
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .blog-post-nav-item a {
    flex-direction: column;
    text-align: center;
    gap: 0.75rem;
  }
  
  .nav-item-arrow {
    display: none;
  }
  
  .blog-post-not-found h1 {
    font-size: 2.5rem;
  }
}

@media (max-width: 480px) {
  .blog-post-hero {
    height: 50vh;
    min-height: 350px;
  }
  
  .blog-post-title {
    font-size: 1.75rem;
  }
  
  .blog-post-meta {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .blog-post-body {
    padding: 2.5rem 0;
  }
  
  .blog-post-body h2 {
    font-size: 1.5rem;
  }
  
  .blog-post-body h3 {
    font-size: 1.25rem;
  }
  
  .blog-post-body-wrapper {
    margin-top: -60px;
    border-radius: 12px 12px 0 0;
  }
  
  .blog-post-not-found {
    padding: 6rem 0;
  }
  
  .blog-post-not-found h1 {
    font-size: 2rem;
  }
}
</style>
