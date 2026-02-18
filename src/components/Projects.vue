<template>
  <section id="projects" class="projects">
    <div class="container">
      <div class="section-header" data-aos="fade-up">
        <h2 class="section-title">我的项目</h2>
        <p class="section-subtitle">近期作品展示</p>
      </div>

      <div class="projects-grid">
        <div 
          v-for="project in projects" 
          :key="project.id" 
          class="card" 
          :data-id="project.id"
          @mouseenter="handleMouseEnter"
          @mouseleave="handleMouseLeave"
          :data-aos="project.id % 2 === 0 ? 'flip-right' : 'flip-left'"
          :data-aos-delay="(project.id % 3) * 100"
          data-aos-duration="800"
        >
          <div class="card-inner">
            <!-- 水波纹效果 - 动态定位 -->
            <div 
              v-if="showRipple[project.id]" 
              class="ripple-effect"
              :style="{
                left: ripplePositions[project.id]?.x + 'px',
                top: ripplePositions[project.id]?.y + 'px'
              }"
            ></div>

            <!-- 正面 -->
            <div class="card-face card-front">
              <div class="project-image">
                <img :src="project.image" :alt="project.title" />
              </div>
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>
              <div class="project-tech">
                <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
                  {{ tech }}
                </span>
              </div>
            </div>

            <!-- 背面 -->
            <div class="card-face card-back">
              <h3 class="project-title">{{ project.title }}</h3>

              <!-- 视频部分 -->
              <div class="video-section">
                <div class="video-container" @click="openFullscreen(project.id)">
                  <video :ref="el => setVideoRef(project.id, el)" :src="project.video" :poster="project.image"
                    preload="metadata" muted class="project-video">
                    您的浏览器不支持视频播放
                  </video>
                  <div class="video-overlay">
                    <button class="play-button">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                    <span class="video-text">点击播放演示视频</span>
                  </div>
                </div>
              </div>

              <div class="project-actions">
                <a :href="project.demoUrl" class="project-link">查看演示</a>
                <a :href="project.githubUrl" class="project-link">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 全屏视频模态框 -->
      <div v-if="fullscreenVideo" class="video-modal" @click="closeFullscreen" data-aos="zoom-in" data-aos-duration="300">
        <div class="video-modal-content" @click.stop>
          <button class="close-button" @click="closeFullscreen">×</button>
          <div class="video-controls">
            <button class="music-control" @click="toggleMusic">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path v-if="musicPlaying" d="M6 6h12v12H6z" />
                <path v-else d="M8 5v14l11-7z" />
              </svg>
              背景音乐 {{ musicPlaying ? '关' : '开' }}
            </button>
          </div>
          <video ref="fullscreenVideoPlayer" :src="currentVideo" controls autoplay muted class="fullscreen-video">
            您的浏览器不支持视频播放
          </video>
          <!-- 隐藏的背景音乐播放器 -->
          <audio ref="backgroundMusic" :src="backgroundAudio" loop></audio>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import AOS from 'aos'
import project1 from '../assets/images/1.png'
import project2 from '../assets/images/2.png'
import project3 from '../assets/images/3.png'
import project4 from '../assets/images/4.png'
import project5 from '../assets/images/5.png'

// 导入视频文件
import video1 from '../assets/videos/1.mp4'
import video2 from '../assets/videos/2.mp4'
import video3 from '../assets/videos/3.mp4'
import video4 from '../assets/videos/4.mp4'
import video5 from '../assets/videos/5.mp4'

// 导入背景音乐文件
import backgroundMusicFile from '../assets/audio/background-music.mp3'

// 视频元素引用
const videoRefs = ref({})
const fullscreenVideo = ref(false)
const currentVideo = ref('')
const fullscreenVideoPlayer = ref(null)
const backgroundMusic = ref(null)
const musicPlaying = ref(false)
const backgroundAudio = ref(backgroundMusicFile)

// 水波纹相关状态 
const showRipple = ref({})
const ripplePositions = ref({}) // 改为对象存储每个卡片的位置
let rippleTimeouts = ref({}) // 存储每个卡片的定时器

// 处理鼠标进入事件 
const handleMouseEnter = (event) => {
  const card = event.currentTarget
  const cardRect = card.getBoundingClientRect()
  
  // 获取项目ID ：直接从data-id属性获取
  const projectId = parseInt(card.dataset.id)
  
  // 计算鼠标在卡片内的相对位置
  const x = event.clientX - cardRect.left
  const y = event.clientY - cardRect.top
  
  // 存储位置到对应项目
  ripplePositions.value[projectId] = { x, y }
  
  // 清除之前的定时器（如果有）
  if (rippleTimeouts.value[projectId]) {
    clearTimeout(rippleTimeouts.value[projectId])
  }
  
  // 显示水波纹
  showRipple.value[projectId] = true
  
  // 1秒后隐藏水波纹
  rippleTimeouts.value[projectId] = setTimeout(() => {
    showRipple.value[projectId] = false
  }, 1000)
}

// 处理鼠标离开事件 
const handleMouseLeave = (event) => {
  const card = event.currentTarget
  const projectId = parseInt(card.dataset.id)
  
  // 立即隐藏水波纹
  showRipple.value[projectId] = false
  
  // 清除定时器
  if (rippleTimeouts.value[projectId]) {
    clearTimeout(rippleTimeouts.value[projectId])
    delete rippleTimeouts.value[projectId]
  }
}

// 设置视频引用
const setVideoRef = (id, el) => {
  if (el) {
    videoRefs.value[id] = el
  }
}

// 打开全屏视频
const openFullscreen = (projectId) => {
  
  const project = projects.value.find(p => p.id === projectId)
  if (project && project.video) {
    currentVideo.value = project.video
    fullscreenVideo.value = true
    
    setTimeout(() => {
      if (fullscreenVideoPlayer.value) {
        fullscreenVideoPlayer.value.play().catch(error => {
          console.log('视频自动播放被阻止:', error)
        })
      }
      playBackgroundMusic()
    }, 100)
  }
}

// 播放背景音乐
const playBackgroundMusic = () => {
  if (backgroundMusic.value) {
    backgroundMusic.value.play()
      .then(() => {
        musicPlaying.value = true
      })
      .catch(error => {
        console.log('背景音乐自动播放被阻止:', error)
        // 用户交互后可以重新尝试播放
      })
  }
}

// 切换背景音乐
const toggleMusic = () => {
  if (!backgroundMusic.value) return
  
  if (musicPlaying.value) {
    backgroundMusic.value.pause()
    musicPlaying.value = false
  } else {
    backgroundMusic.value.play()
      .then(() => {
        musicPlaying.value = true
      })
      .catch(error => {
        console.log('播放背景音乐失败:', error)
      })
  }
}

// 关闭全屏视频
const closeFullscreen = () => {
  fullscreenVideo.value = false
  currentVideo.value = ''
  
  // 停止视频
  if (fullscreenVideoPlayer.value) {
    fullscreenVideoPlayer.value.pause()
    fullscreenVideoPlayer.value.currentTime = 0
  }
  
  // 停止背景音乐
  if (backgroundMusic.value) {
    backgroundMusic.value.pause()
    backgroundMusic.value.currentTime = 0
    musicPlaying.value = false
  }
}

// 键盘事件监听（ESC退出全屏，M键切换音乐）
const handleKeydown = (event) => {
  if (event.key === 'Escape' && fullscreenVideo.value) {
    closeFullscreen()
  }
  if (event.key === 'm' || event.key === 'M') {
    if (fullscreenVideo.value) {
      toggleMusic()
    }
  }
}

onMounted(() => {
  // 确保 AOS 在组件挂载后刷新
  setTimeout(() => {
    AOS.refresh()
  }, 100)
  
  document.addEventListener('keydown', handleKeydown)
})

// 在组件卸载时清理所有定时器
onUnmounted(() => {
  Object.values(rippleTimeouts.value).forEach(timeout => {
    if (timeout) clearTimeout(timeout)
  })
  rippleTimeouts.value = {}
})

const projects = ref([
  {
    id: 1,
    title: 'My-website_1.0',
    description: '一个最初版本的个人网站，包含个人简介、技能学习经历等内容。',
    image: project1,
    video: video1,
    demoUrl: '#',
    githubUrl: '#',
    technologies: ['CSS3', 'jquery.js', 'HTML5', 'scroll.js']
  },
  {
    id: 2,
    title: 'My-website_2.0',
    description: '一个经过迭代的个人网站，经过设计，添加流畅动画。',
    image: project2,
    video: video2,
    demoUrl: '#',
    githubUrl: '#',
    technologies: ['React', 'CSS3', 'HTML5', 'JSX', 'scroll.js']
  },
  {
    id: 3,
    title: '食堂网站',
    description: '一个最初项目，自制弹幕功能、点赞及排行榜功能和进度跟踪。',
    image: project3,
    video: video3,
    demoUrl: '#',
    githubUrl: '#',
    technologies: ['HTML5', 'Python', 'CSS3', 'layui.js','jquery.js', 'Flask']
  },
  {
    id: 4,
    title: '3D古诗词',
    description: '基于Three.js和Tween.js构建的古诗词展览，拥有3d建模。',
    image: project4,
    video: video4,
    demoUrl: '#',
    githubUrl: '#',
    technologies: ['React', 'CSS3', 'JSX', 'Three.js', 'Tween.js']
  },
  {
    id: 5,
    title: '表单注册',
    description: '全新自设计UI界面，搭载多功能(加水印，听歌，ai问答，后台管理)。',
    image: project5,
    video: video5,
    demoUrl: '#',
    githubUrl: '#',
    technologies: ['Vue3', 'Typescript', 'node.js', 'FastAPI']
  }
])
</script>

<style scoped>
.projects {
  padding: 5rem 0;
  background: var(--bg-secondary);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.card {
  width: 100%;
  height: 450px;
  perspective: 1000px;
  position: relative;
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 50px;
}

.card:hover .card-inner {
  transform: rotateY(180deg);
}

.card-face {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 50px;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.card-front {
  background: var(--bg-primary);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  backdrop-filter: blur(15px);
}

.card-back {
  background: var(--bg-primary);
  color: var(--text-primary);
  transform: rotateY(180deg);
  justify-content: space-between;
  align-items: center;
}

/* 水波纹效果 */
.ripple-effect {
  position: absolute;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: var(--gradient-accent); /* 使用已有的渐变变量 */
  transform: translate(-50%, -50%);
  opacity: 0;
  z-index: 1;
  pointer-events: none;
  animation: rippleExpand 1s ease-out forwards;
}

/* 简化动画*/
@keyframes rippleExpand {
  0% {
    width: 0;
    height: 0;
    opacity: 0.8;
  }
  50% {
    width: 150px;
    height: 150px;
    opacity: 0.5;
  }
  100% {
    width: 300px;
    height: 300px;
    opacity: 0;
  }
}
/* 卡片翻转动画 */
.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 50px;
}

.card:hover .card-inner {
  transform: rotateY(180deg);
}


.project-image {
  position: relative;
  height: 160px;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 15px;
}

.project-image img {
  width: 100%;
  height: 100%;
  border-radius: 30px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.card:hover .card-front .project-image img {
  transform: scale(1.1);
}

.project-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.project-description {
  color: var(--text-secondary);
  margin-bottom: 1rem;
  line-height: 1.6;
  flex-grow: 1;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}

.tech-tag {
  padding: 0.25rem 0.75rem;
  background: var(--bg-secondary);
  color: var(--text-secondary);
  border-radius: 1rem;
  font-size: 0.875rem;
}

.project-actions {
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
}

.project-link {
  padding: 0.5rem 1rem;
  background: var(--primary-color);
  color: white;
  text-decoration: none;
  border-radius: 0.5rem;
  transition: background 0.3s ease;
  font-size: 0.9rem;
}

.project-link:hover {
  background: var(--primary-dark);
}

/* 视频相关样式 */
.video-section {
  width: 100%;
  margin: 1rem 0;
}

.video-container {
  position: relative;
  width: 100%;
  height: 140px;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.video-container:hover {
  transform: scale(1.05);
}

.project-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}

.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  transition: background 0.3s ease;
}

.video-container:hover .video-overlay {
  background: rgba(0, 0, 0, 0.4);
}

.play-button {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--primary-color);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 8px;
  transition: transform 0.3s ease, background 0.3s ease;
}

.play-button:hover {
  transform: scale(1.1);
  background: var(--primary-dark);
}

.video-text {
  font-size: 0.875rem;
  font-weight: 500;
}

/* 全屏视频模态框 */
.video-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.video-modal-content {
  position: relative;
  width: 90%;
  max-width: 800px;
  background: black;
  border-radius: 12px;
  overflow: hidden;
}

.video-controls {
  position: absolute;
  top: 60px;
  right: 10px;
  z-index: 1002;
}

.music-control {
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  padding: 8px 12px;
  font-size: 0.8rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: background 0.3s ease;
}

.music-control:hover {
  background: rgba(0, 0, 0, 0.9);
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1001;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;
}

.close-button:hover {
  background: rgba(0, 0, 0, 0.9);
}

.fullscreen-video {
  width: 100%;
  height: auto;
  max-height: 80vh;
}

/* 隐藏音频元素 */
audio {
  display: none;
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }

  .card {
    height: 480px;
  }

  .project-actions {
    flex-direction: column;
    gap: 0.5rem;
  }

  .video-container {
    height: 120px;
  }

  .video-modal-content {
    width: 95%;
  }

  .video-text {
    font-size: 0.8rem;
  }

  .video-controls {
    top: 50px;
    right: 8px;
  }

  .music-control {
    padding: 6px 10px;
    font-size: 0.75rem;
  }
}
</style>