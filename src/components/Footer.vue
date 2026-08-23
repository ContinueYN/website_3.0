<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3 class="footer-logo">Portfolio</h3>
          <div class="footer-description-wrapper" ref="viewerZone">
            <VRoidViewer v-if="showViewer" />
          </div>
          
        </div>
        
       
        
        <div class="footer-section">
          <h3>联系信息</h3>
          <div class="contact-info">
            <p><Mail :size="16" class="inline-icon" /> 3258664928@qq.com</p>
            <p><Phone :size="16" class="inline-icon" /> +86 183 1686 5751</p>
            <p><MapPin :size="16" class="inline-icon" /> 中国，汕头市</p>
          </div>
          <div class="footer-social">
            <a href="https://github.com/ContinueYN" class="social-icon">GitHub</a>
            <a href="https://blog.csdn.net" class="social-icon">CSDN</a>
            <a href="127.0.0.1" class="social-icon">Telegram</a>
          </div>
          <br>
          <h3>友情链接</h3>
          <div class="friend-links" ref="friendLinksRef">
            <div class="friend-links-track" ref="trackRef">
              <div v-for="n in trackCopies" :key="n" class="friend-links-group" :aria-hidden="n > 1 ? 'true' : undefined">
                <a v-for="link in links" :key="link.name" :href="link.url" class="friend-link"
                  target="_blank" rel="noopener" :tabindex="n > 1 ? -1 : undefined">{{ link.name }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; 2025 余诺个人作品集. 保留所有权利.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, defineAsyncComponent } from 'vue'
import { Mail, Phone, MapPin } from 'lucide-vue-next'

// 懒挂载 3D 组件：进入视口附近时才初始化 WebGL 场景。
// 模型二进制与组件 chunk 已在页面加载时预取（utils/vrmPreload.ts），
// 滚到这里通常无需再等待下载
const VRoidViewer = defineAsyncComponent(() => import('./VRoidViewer.vue'))

const viewerZone = ref(null)
const showViewer = ref(false)
let viewerObserver = null

// ===== 友情链接：无缝横向滚动 =====
const friendLinksRef = ref(null)
const trackRef = ref(null)
const trackCopies = ref(2)

const links = [
  { name: 'QQHamburger', url: 'https://qqhamburger.top' },
  { name: 'PresentBox', url: 'https://mypresentboxes.com' },
  { name: 'xrk', url: 'https://xrk-hhh.github.io/starlight/' },
  { name: 'Jizen', url: 'https://jizen-066.github.io/Jizen066/' },
  { name: 'DMW', url: 'https://chijysmile.github.io/duanmw01/' },
  { name: 'qikiil', url: 'https://qikiil.github.io/blog/' }
]

const REDUCED_MOTION = typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

// rAF 驱动：offset 持续累加，取模后渲染，循环点无任何跳变
const marquee = { offset: 0, raf: 0, lastTs: 0, setW: 0, running: false, paused: false }
const MARQUEE_SPEED = 45 // px/s

function setupMarquee() {
  const track = trackRef.value
  if (!track) return
  const group = track.querySelector('.friend-links-group')
  if (!group) return
  const groupW = group.getBoundingClientRect().width
  const containerW = track.parentElement ? track.parentElement.getBoundingClientRect().width : 0
  if (groupW <= 0 || containerW <= 0) return
  marquee.setW = groupW
  // 复制份数：保证任意滚动位置都有内容覆盖、右侧不露底
  trackCopies.value = Math.max(2, Math.ceil(containerW / groupW) + 1)
  if (REDUCED_MOTION) return
  if (marquee.running) return
  marquee.running = true
  marquee.lastTs = 0
  marquee.raf = requestAnimationFrame(marqueeStep)
}

function marqueeStep(ts) {
  if (!marquee.running) return
  if (!marquee.lastTs) marquee.lastTs = ts
  const dt = Math.min((ts - marquee.lastTs) / 1000, 0.1)
  marquee.lastTs = ts
  if (!marquee.paused) {
    marquee.offset += MARQUEE_SPEED * dt
  }
  const track = trackRef.value
  if (track) {
    track.style.transform = `translate3d(${-(marquee.offset % marquee.setW)}px, 0, 0)`
  }
  marquee.raf = requestAnimationFrame(marqueeStep)
}

function pauseMarquee() {
  if (marquee.running) {
    marquee.paused = true
    marquee.lastTs = 0
  }
}

function resumeMarquee() {
  if (marquee.running) {
    marquee.paused = false
    marquee.lastTs = 0
  }
}

function handleResize() {
  if (marquee.running) {
    cancelAnimationFrame(marquee.raf)
    marquee.running = false
  }
  setupMarquee()
}

onMounted(() => {
  if (!viewerZone.value) return
  viewerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        showViewer.value = true
        viewerObserver?.disconnect()
      }
    })
  }, { rootMargin: '400px 0px' })
  viewerObserver.observe(viewerZone.value)

  setupMarquee()
  friendLinksRef.value?.addEventListener('mouseenter', pauseMarquee)
  friendLinksRef.value?.addEventListener('mouseleave', resumeMarquee)
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  viewerObserver?.disconnect()
  viewerObserver = null

  marquee.running = false
  if (marquee.raf) cancelAnimationFrame(marquee.raf)
  friendLinksRef.value?.removeEventListener('mouseenter', pauseMarquee)
  friendLinksRef.value?.removeEventListener('mouseleave', resumeMarquee)
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.footer {
  background: transparent;
  padding: 3rem 0 1rem;
  border-top: 1px solid var(--border-color);
  animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;
  align-items: start;
  /* 收窄并居中：让左右两个区域互相贴近 */
  max-width: 780px;
  margin-left: auto;
  margin-right: auto;
}

.footer-section {
  animation: fadeInUp 0.8s ease-out both;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
}

.footer-section:nth-child(1) {
  animation-delay: 0.1s;
}

.footer-section:nth-child(2) {
  animation-delay: 0.2s;
}

.footer-section h3,
.footer-section h4 {
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.footer-logo {
  font-size: 1.5rem;
  font-weight: 700;
}

.footer-description-wrapper {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  justify-content: center;
}

.footer-description {
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
}

.footer-social {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.social-icon {
  padding: 0.5rem;
  color: var(--text-secondary);
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-block;
}

.social-icon:hover {
  color: var(--primary-color);
  transform: translateY(-5px) scale(1.1);
}

/* 友情链接：四个并行 + JS 无缝横向滚动（悬停暂停、边缘淡出） */
.friend-links {
  position: relative;
  width: 100%;
  max-width: 400px;
  overflow: hidden;
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent);
  mask-image: linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent);
}

.friend-links-track {
  display: flex;
  width: max-content;
  will-change: transform;
}

.friend-links-group {
  display: flex;
  align-items: center;
}

.friend-link {
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  padding: 0.35rem 0;
  margin-right: 1.6rem;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 1.05rem;
  font-weight: 500;
  transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1), transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.friend-link:hover {
  color: var(--primary-color);
  transform: translateY(-2px);
}

/* 系统开启"减少动态效果"时：停止自动滚动，改为手动横向滑动 */
@media (prefers-reduced-motion: reduce) {
  .friend-links {
    overflow-x: auto;
    -webkit-mask-image: none;
    mask-image: none;
  }
}

.contact-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact-info p {
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.contact-info p:hover {
  transform: translateX(5px);
  color: var(--text-primary);
}

.inline-icon {
  color: var(--primary-color);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.contact-info p:hover .inline-icon {
  transform: scale(1.2);
}

.footer-bottom {
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
  text-align: center;
  color: var(--text-secondary);
  animation: fadeIn 1s ease-out 0.4s both;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media (max-width: 968px) {
  .footer-content {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 768px) {
  .footer-content {
    /* 移动端改为纵向弹性布局，每个区块显式水平居中，杜绝任何偏左/偏右 */
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    max-width: none;
    width: 100%;
  }

  .footer-section {
    text-align: center;
    width: 100%;
    align-items: center;
  }

  .footer-social {
    justify-content: center;
  }

  .footer-description-wrapper {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .contact-info {
    align-items: center;
  }

  .friend-links {
    margin-left: auto;
    margin-right: auto;
  }

  .footer-bottom {
    text-align: center;
    width: 100%;
  }
}
</style>