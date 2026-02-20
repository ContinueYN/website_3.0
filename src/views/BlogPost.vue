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

const route = useRoute()
const router = useRouter()

// 注入主题状态和切换函数
const { isDark, toggleTheme } = inject('theme')

// 模拟博客文章数据
const blogPosts = ref([
  {
    id: 1,
    title: 'Vue 3 Composition API 最佳实践',
    excerpt: '探索 Vue 3 Composition API 的强大功能和使用技巧，提升代码质量和开发效率。',
    date: '2026-02-15',
    category: '技术',
    readingTime: 8,
    bgColor: 'rgba(0, 0, 0, 0.15)',
    tags: ['Vue', 'Composition API', '前端'],
    content: `
      <p>Vue 3 的 Composition API 为我们提供了一种新的组件逻辑组织方式，它解决了 Options API 在处理复杂组件时的一些问题。本文将分享一些 Composition API 的最佳实践，帮助你更好地利用这一特性。</p>
      
      <h2>1. 逻辑复用</h2>
      <p>Composition API 最大的优势之一是能够轻松实现逻辑复用。通过将相关逻辑提取到独立的组合函数中，我们可以在多个组件中复用这些逻辑。</p>
      
      <pre><code>import { ref, computed } from 'vue'

export function useCounter(initialValue = 0) {
  const count = ref(initialValue)
  const doubleCount = computed(() => count.value * 2)
  
  function increment() {
    count.value++
  }
  
  function decrement() {
    count.value--
  }
  
  return {
    count,
    doubleCount,
    increment,
    decrement
  }
}</code></pre>
      
      <h2>2. 响应式数据管理</h2>
      <p>在 Composition API 中，我们可以使用 ref 和 reactive 来创建响应式数据。对于基本类型，推荐使用 ref；对于对象类型，可以使用 reactive。</p>
      
      <h2>3. 生命周期钩子</h2>
      <p>Composition API 提供了与 Options API 对应的生命周期钩子函数，但是使用方式有所不同。我们需要从 vue 中导入这些钩子函数，然后在 setup 函数中调用它们。</p>
      
      <pre><code>import { onMounted, onUnmounted } from 'vue'

export function useMousePosition() {
  const x = ref(0)
  const y = ref(0)
  
  function updatePosition(event) {
    x.value = event.clientX
    y.value = event.clientY
  }
  
  onMounted(() => {
    window.addEventListener('mousemove', updatePosition)
  })
  
  onUnmounted(() => {
    window.removeEventListener('mousemove', updatePosition)
  })
  
  return {
    x,
    y
  }
}</code></pre>
      
      <h2>4. 计算属性和监听器</h2>
      <p>Composition API 中的计算属性和监听器使用方式与 Options API 类似，但是需要从 vue 中导入。</p>
      
      <h2>5. 依赖注入</h2>
      <p>Composition API 提供了 provide 和 inject 函数，用于组件之间的依赖注入。这在处理深层组件树中的状态管理时非常有用。</p>
      
      <p>通过合理使用 Composition API，我们可以编写更加清晰、可维护的代码。希望本文的最佳实践能够帮助你在实际项目中更好地应用这一特性。</p>
    `
  },
  {
    id: 2,
    title: '前端性能优化实战指南',
    excerpt: '从网络请求到渲染优化，全面讲解前端性能优化的实用技巧和最佳实践。',
    date: '2026-02-10',
    category: '性能',
    readingTime: 10,
    bgColor: 'rgba(0, 0, 0, 0.15)',
    tags: ['性能优化', '前端', '用户体验'],
    content: `
      <p>前端性能优化是一个永恒的话题，它直接影响用户体验和网站的转化率。本文将从多个方面介绍前端性能优化的实战技巧，帮助你构建更加快速、流畅的网站。</p>
      
      <h2>1. 网络优化</h2>
      <h3>1.1 资源压缩</h3>
      <p>使用工具如 Gzip、Brotli 对 HTML、CSS、JavaScript 文件进行压缩，减少文件大小，提高传输速度。</p>
      
      <h3>1.2 资源缓存</h3>
      <p>合理设置 HTTP 缓存头，如 Cache-Control、ETag 等，减少重复请求。</p>
      
      <h3>1.3 资源预加载</h3>
      <p>使用 preload、prefetch 等指令，提前加载关键资源。</p>
      
      <h2>2. 渲染优化</h2>
      <h3>2.1 减少重排重绘</h3>
      <p>避免频繁操作 DOM，使用 DocumentFragment 批量更新，合理使用 CSS transform 和 opacity 等属性。</p>
      
      <h3>2.2 懒加载</h3>
      <p>图片、视频等资源使用懒加载，减少首屏加载时间。</p>
      
      <h3>2.3 虚拟列表</h3>
      <p>对于长列表，使用虚拟列表技术，只渲染可视区域内的元素。</p>
      
      <h2>3. 代码优化</h2>
      <h3>3.1 模块化</h3>
      <p>合理使用 ES6 模块，减少全局变量，提高代码可维护性。</p>
      
      <h3>3.2 树摇</h3>
      <p>使用 Webpack、Rollup 等打包工具的树摇功能，移除未使用的代码。</p>
      
      <h3>3.3 代码分割</h3>
      <p>将代码分割成多个 chunks，按需加载，减少初始加载时间。</p>
      
      <h2>4. 性能监控</h2>
      <p>使用 Lighthouse、WebPageTest 等工具定期检测网站性能，及时发现和解决问题。</p>
      
      <p>前端性能优化是一个持续的过程，需要我们不断学习和实践。通过本文介绍的技巧，相信你能够显著提升网站的性能和用户体验。</p>
    `
  },
  {
    id: 3,
    title: 'TypeScript 进阶技巧',
    excerpt: '掌握 TypeScript 的高级特性，编写更安全、更可维护的代码。',
    date: '2026-02-05',
    category: '技术',
    readingTime: 12,
    bgColor: 'rgba(0, 0, 0, 0.15)',
    tags: ['TypeScript', '类型系统', '前端'],
    content: `
      <p>TypeScript 已经成为前端开发的主流语言，它的类型系统为我们提供了强大的类型检查能力，帮助我们编写更安全、更可维护的代码。本文将介绍一些 TypeScript 的进阶技巧，帮助你更好地掌握这门语言。</p>
      
      <h2>1. 高级类型</h2>
      <h3>1.1 交叉类型和联合类型</h3>
      <pre><code>// 交叉类型
interface A {
  a: string
}

interface B {
  b: number
}

type C = A & B // 同时具有 A 和 B 的属性

// 联合类型
type D = string | number | boolean // 可以是 string、number 或 boolean 类型
</code></pre>
      
      <h3>1.2 类型守卫</h3>
      <pre><code>function isString(value: unknown): value is string {
  return typeof value === 'string'
}

function processValue(value: string | number) {
  if (isString(value)) {
    // 这里 value 被推断为 string 类型
    console.log(value.toUpperCase())
  } else {
    // 这里 value 被推断为 number 类型
    console.log(value.toFixed(2))
  }
}
</code></pre>
      
      <h3>1.3 映射类型</h3>
      <pre><code>interface Person {
  name: string
  age: number
}

// 只读映射类型
type ReadonlyPerson = { readonly [K in keyof Person]: Person[K] }

// 可选映射类型
type PartialPerson = { [K in keyof Person]?: Person[K] }
</code></pre>
      
      <h2>2. 泛型</h2>
      <h3>2.1 泛型函数</h3>
      <pre><code>function identity&lt;T&gt;(value: T): T {
  return value
}

const result = identity('Hello') // result 被推断为 string 类型
</code></pre>
      
      <h3>2.2 泛型约束</h3>
      <pre><code>interface Lengthwise {
  length: number
}

function logLength&lt;T extends Lengthwise&gt;(value: T): void {
  console.log(value.length)
}

logLength('Hello') // 正确，string 有 length 属性
logLength([1, 2, 3]) // 正确，数组有 length 属性
</code></pre>
      
      <h2>3. 装饰器</h2>
      <pre><code>// 类装饰器
function sealed(constructor: Function) {
  Object.seal(constructor)
  Object.seal(constructor.prototype)
}

@sealed
class Greeter {
  greeting: string
  constructor(message: string) {
    this.greeting = message
  }
  greet() {
    return "Hello, " + this.greeting
  }
}
</code></pre>
      
      <h2>4. 模块解析</h2>
      <p>了解 TypeScript 的模块解析策略，合理配置 tsconfig.json 文件，提高开发效率。</p>
      
      <h2>5. 类型声明文件</h2>
      <p>为第三方库编写类型声明文件，或使用 @types 包，获得更好的类型提示。</p>
      
      <p>通过掌握这些 TypeScript 进阶技巧，你将能够编写更加安全、可维护的代码，提高开发效率，减少 bug 数量。</p>
    `
  },
  {
    id: 4,
    title: '响应式设计原则与实践',
    excerpt: '学习现代响应式设计的核心原则，创建适应各种设备的用户界面。',
    date: '2026-01-30',
    category: '设计',
    readingTime: 9,
    bgColor: 'rgba(0, 0, 0, 0.15)',
    tags: ['响应式设计', 'CSS', '用户界面'],
    content: `
      <p>随着移动设备的普及，响应式设计已经成为现代网页设计的标准。它能够使网站在不同屏幕尺寸和设备上都能提供良好的用户体验。本文将介绍响应式设计的核心原则和实践技巧。</p>
      
      <h2>1. 响应式设计的核心原则</h2>
      <h3>1.1 流动布局</h3>
      <p>使用相对单位如百分比、em、rem 等，替代固定单位如像素，使布局能够根据屏幕尺寸自动调整。</p>
      
      <h3>1.2 弹性图片</h3>
      <p>确保图片能够根据容器大小自动调整，避免溢出或变形。</p>
      <pre><code>img {
  max-width: 100%;
  height: auto;
}
</code></pre>
      
      <h3>1.3 媒体查询</h3>
      <p>使用媒体查询，根据屏幕尺寸、分辨率等条件应用不同的 CSS 样式。</p>
      <pre><code>/* 移动端 */
@media (max-width: 767px) {
  .container {
    width: 100%;
    padding: 0 15px;
  }
}

/* 平板 */
@media (min-width: 768px) and (max-width: 1199px) {
  .container {
    width: 750px;
    margin: 0 auto;
  }
}

/* 桌面 */
@media (min-width: 1200px) {
  .container {
    width: 1170px;
    margin: 0 auto;
  }
}
</code></pre>
      
      <h2>2. 响应式设计实践技巧</h2>
      <h3>2.1 移动优先设计</h3>
      <p>从移动设备开始设计，然后逐步扩展到更大的屏幕尺寸，确保在所有设备上都有良好的体验。</p>
      
      <h3>2.2 断点设置</h3>
      <p>根据目标设备的屏幕尺寸设置合理的断点，避免过多或过少的断点。</p>
      
      <h3>2.3 字体大小</h3>
      <p>使用相对单位如 rem 或 em 设置字体大小，使字体能够根据用户设置或屏幕尺寸自动调整。</p>
      <pre><code>html {
  font-size: 16px;
}

@media (max-width: 767px) {
  html {
    font-size: 14px;
  }
}

body {
  font-size: 1rem;
}
</code></pre>
      
      <h3>2.4 触摸目标</h3>
      <p>为移动设备优化触摸目标大小，确保按钮、链接等可点击元素有足够的大小，便于触摸操作。</p>
      <pre><code>button {
  min-width: 44px;
  min-height: 44px;
}
</code></pre>
      
      <h2>3. 响应式设计工具</h2>
      <h3>3.1 CSS 框架</h3>
      <p>使用 Bootstrap、Tailwind CSS 等响应式 CSS 框架，加快开发速度。</p>
      
      <h3>3.2 响应式图片</h3>
      <p>使用 srcset 和 sizes 属性，为不同设备提供合适尺寸的图片。</p>
      <pre><code>&lt;img 
  src="small.jpg" 
  srcset="small.jpg 480w, medium.jpg 768w, large.jpg 1200w" 
  sizes="(max-width: 600px) 480px, (max-width: 1024px) 768px, 1200px" 
  alt="Responsive image"
&gt;
</code></pre>
      
      <h3>3.3 响应式测试工具</h3>
      <p>使用浏览器开发者工具的设备模拟功能，或在线工具如 Responsinator、Screenfly 等，测试网站在不同设备上的显示效果。</p>
      
      <h2>4. 响应式设计最佳实践</h2>
      <ul>
        <li>保持内容优先级，确保重要内容在所有设备上都能清晰显示</li>
        <li>简化导航，在移动设备上使用汉堡菜单等紧凑形式</li>
        <li>优化表单，在移动设备上使用适当的输入类型和键盘</li>
        <li>考虑性能，在移动设备上减少不必要的动画和效果</li>
      </ul>
      
      <p>响应式设计是一个不断发展的领域，需要我们持续学习和实践。通过本文介绍的原则和技巧，相信你能够创建出更加优秀的响应式网站。</p>
    `
  }
])

const currentPostId = computed(() => Number(route.params.id))

const currentPost = computed(() => {
  return blogPosts.value.find(post => post.id === currentPostId.value)
})

const prevPost = computed(() => {
  const index = blogPosts.value.findIndex(post => post.id === currentPostId.value)
  return index > 0 ? blogPosts.value[index - 1] : null
})

const nextPost = computed(() => {
  const index = blogPosts.value.findIndex(post => post.id === currentPostId.value)
  return index < blogPosts.value.length - 1 ? blogPosts.value[index + 1] : null
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
  background-color: var(--hero-bg, var(--primary-color));
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
  color: var(--primary-color);
  background: var(--bg-secondary);
  padding: 0.375rem 1rem;
  border-radius: 20px;
  transition: all 0.3s ease;
}

.blog-post-tag:hover {
  background: var(--primary-color);
  color: white;
  transform: translateY(-2px);
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
  background: var(--bg-secondary);
  border: none;
  padding: 0.75rem;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
}

.share-button:hover {
  background: var(--primary-color);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
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
