<template>
  <div class="blog" :class="{ 'dark': isDark }">
    <Header :isDark="isDark" @toggle-theme="toggleTheme" />
    <main>
      <!-- 博客头部 -->
      <section class="blog-header">
        <div class="container">
          <div class="blog-header-content">
            <h1 data-aos="fade-up" data-aos-duration="800">我的博客</h1>
            <p data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">分享我的学习心得、技术见解和生活感悟</p>
            <div class="blog-header-stats">
              <div class="stat-item" data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
                <span class="stat-number">{{ blogPosts.length }}</span>
                <span class="stat-label">文章</span>
              </div>
              <div class="stat-item" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
                <span class="stat-number">{{ totalReadingTime }}</span>
                <span class="stat-label">阅读时长</span>
              </div>
              <div class="stat-item" data-aos="fade-up" data-aos-delay="500" data-aos-duration="800">
                <span class="stat-number">{{ uniqueCategories.length }}</span>
                <span class="stat-label">分类</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- 分类筛选 -->
      <section class="blog-categories">
        <div class="container">
          <div class="categories-list" data-aos="fade-up" data-aos-duration="800">
            <button 
              v-for="category in ['全部', ...uniqueCategories]" 
              :key="category"
              class="category-btn"
              :class="{ active: selectedCategory === category }"
              @click="selectedCategory = category"
            >
              {{ category }}
            </button>
          </div>
        </div>
      </section>
      
      <!-- 博客列表 -->
      <section class="blog-list">
        <div class="container">
          <div class="blog-grid">
            <article 
              v-for="(post, index) in filteredPosts" 
              :key="post.id"
              class="blog-card"
              data-aos="fade-up"
              data-aos-duration="800"
              :data-aos-delay="(index + 1) * 100"
              @click="navigateToPost(post.id)"
              :style="{ '--card-bg': post.bgColor }"
            >
              <div class="blog-card-category-badge">{{ post.category }}</div>
              <div class="blog-card-content">
                <div class="blog-card-meta">
                  <span class="blog-card-date">{{ post.date }}</span>
                  <span class="blog-card-reading-time">{{ post.readingTime }} 分钟阅读</span>
                </div>
                <h2 class="blog-card-title">{{ post.title }}</h2>
                <p class="blog-card-excerpt">{{ post.excerpt }}</p>
                <div class="blog-card-footer">
                  <button class="blog-card-button">
                    阅读更多
                    <span class="blog-card-button-icon">→</span>
                  </button>
                </div>
              </div>
            </article>
          </div>
          
          <!-- 空状态 -->
          <div v-if="filteredPosts.length === 0" class="blog-empty-state">
            <h3>暂无文章</h3>
            <p>该分类下还没有文章，敬请期待！</p>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { ref, computed, inject } from 'vue'
import { useRouter } from 'vue-router'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { useBlogPosts } from '../composables/useBlogPosts'

const router = useRouter()
const selectedCategory = ref('全部')

const { isDark, toggleTheme } = inject('theme')
const { blogPosts, uniqueCategories, totalReadingTime, filterByCategory } = useBlogPosts()

const filteredPosts = computed(() => {
  return filterByCategory(selectedCategory.value)
})

const navigateToPost = (id) => {
  router.push({ name: 'BlogPost', params: { id } })
}
</script>

<style scoped>
.blog {
  min-height: 100vh;
  background: var(--bg-primary);
  transition: background-color 0.3s ease;
}

/* 博客头部 */
.blog-header {
  padding: 8rem 0 5rem;
  text-align: center;
  background: linear-gradient(135deg, var(--blog-left) 0%, var(--blog-right) 100%);
  color: white;
  position: relative;
  overflow: hidden;
}

.blog-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
  opacity: 0.3;
}

.blog-header-content {
  position: relative;
  z-index: 1;
}

.blog-header h1 {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.blog-header p {
  font-size: 1.25rem;
  opacity: 0.95;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

/* 头部统计 */
.blog-header-stats {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 2rem;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.875rem;
  opacity: 0.9;
}

/* 分类筛选 */
.blog-categories {
  background: var(--bg-secondary);
  padding: 1.5rem 0;
  border-bottom: 1px solid var(--border-color);
}

.categories-list {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

.category-btn {
  background: transparent;
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.category-btn:hover {
  background: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
  transform: translateY(-2px);
}

.category-btn.active {
  background: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
}

/* 博客列表 */
.blog-list {
  padding: 5rem 0;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 2.5rem;
}

/* 博客卡片 */
.blog-card {
  background: var(--bg-secondary);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  position: relative;
}

.blog-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
}

.blog-card {
  position: relative;
  overflow: hidden;
}

.blog-card::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 80px;
  background-color: var(--card-bg, var(--bg-secondary));
  z-index: 1;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.blog-card:hover::before {
  width: 100px;
}

.blog-card-content {
  position: relative;
  z-index: 2;
  padding-left: 100px;
}

/* 分类徽章 */
.blog-card-category-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: rgba(255, 255, 255, 0.9);
  color: var(--card-bg, var(--text-primary));
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
  z-index: 2;
  transition: all 0.4s ease;
}

.blog-card:hover .blog-card-category-badge {
  left: 1.5rem;
}

/* 卡片内容 */
.blog-card-content {
  padding: 2rem;
}

.blog-card-meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

.blog-card-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-primary);
  line-height: 1.3;
}

.blog-card-excerpt {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* 卡片底部 */
.blog-card-footer {
  display: flex;
  justify-content: flex-end;
}

.blog-card-button {
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.blog-card-button:hover {
  background: var(--primary-dark);
  transform: translateX(5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.blog-card-button-icon {
  transition: transform 0.3s ease;
}

.blog-card:hover .blog-card-button-icon {
  transform: translateX(3px);
}

/* 空状态 */
.blog-empty-state {
  text-align: center;
  padding: 6rem 0;
  color: var(--text-secondary);
}

.blog-empty-state h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .blog-grid {
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  }
}

@media (max-width: 768px) {
  .blog-header {
    padding: 6rem 0 4rem;
  }
  
  .blog-header h1 {
    font-size: 2.5rem;
  }
  
  .blog-header-stats {
    gap: 2rem;
  }
  
  .stat-number {
    font-size: 1.5rem;
  }
  
  .blog-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .blog-card-content {
    padding: 1.5rem;
  }
  
  .blog-card-image {
    height: 200px;
  }
  
  .categories-list {
    gap: 0.75rem;
  }
  
  .category-btn {
    padding: 0.4rem 1.2rem;
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .blog-header h1 {
    font-size: 2rem;
  }
  
  .blog-header p {
    font-size: 1.1rem;
  }
  
  .blog-header-stats {
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .blog-card-title {
    font-size: 1.25rem;
  }
  
  .blog-list {
    padding: 3rem 0;
  }
}
</style>
