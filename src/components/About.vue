<template>
  <section id="about" class="about">
    <div class="header-container" @click="triggerFault">
      <div class="header" :ref="(el) => setHeaderRef(el, 0)">About</div>
      <div class="header" :ref="(el) => setHeaderRef(el, 1)">About</div>
      <div class="header" :ref="(el) => setHeaderRef(el, 2)">About</div>
      <div class="header" :ref="(el) => setHeaderRef(el, 3)">About</div>
    </div>
    <div class="container">
      <div
        v-for="(card, index) in cards"
        :key="index"
        ref="pokerRefs"
        class="poker"
        :class="`poker${index + 1}`"
        @mouseenter="handleCardHover(index)"
        @mouseleave="handleCardLeave(index)"
        @click="handleCardClick(index)"
      >
        <div class="card-content">
          <div class="vertical-text">
            <span>{{ card.text.charAt(0) }}</span>
            <span>{{ card.text.charAt(1) }}</span>
          </div>
        </div>
      </div>
      <div
        class="poker_top"
        :class="`poker5`"
        @click="handleTopClick"
      >
        <div class="mount">
          <div class="strip strip-left">
            <img src="@/assets/images/承因果.png" alt="承因果" draggable="false" />
          </div>
          <div class="seal" aria-hidden="true">
            <img src="@/assets/images/受命于天.png" alt="受命于天" draggable="false" />
          </div>
          <div class="strip strip-right">
            <img src="@/assets/images/顺天命.png" alt="顺天命" draggable="false" />
          </div>
        </div>
      </div>
    </div>

    <div class="modal" v-if="showModal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="modal-close" @click="closeModal">
          <X :size="24" />
        </button>
        <h3 class="modal-title">{{ activeCard.title }}</h3>
        <p class="modal-description">{{ activeCard.description }}</p>
        <div class="modal-tags">
          <span v-for="(tag, idx) in activeCard.tags" :key="idx" class="tag">
            {{ tag }}
          </span>
        </div>
        <div class="modal-divider"></div>
        <p class="modal-details">{{ activeCard.details }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { X } from 'lucide-vue-next'
import { useScrollLock } from '../composables/useScrollLock'

const { lock: lockScroll, unlock: unlockScroll } = useScrollLock()

const pokerRefs = ref([])
const pokerEles = ref([])
const imgIndex = ref(0)
const showModal = ref(false)
const clickedCardIndex = ref(0)
const headerRefs = ref([])
const faultPlayer = ref(null)

const setHeaderRef = (el, index) => {
  if (el) {
    headerRefs.value[index] = el
  }
}

const cards = ref([
  { 
    text: '兴趣', 
    title: '兴趣爱好', 
    description: '对技术充满热情，享受创造的过程', 
    tags: ['Web 开发', 'AI 应用'],
    details: '我热衷于探索最新的 Web 技术和 AI 应用，喜欢将创意转化为实际的产品。在空闲时间，我会研究开源项目，参与技术社区，不断提升自己的技能。'
  },
  { 
    text: '特长', 
    title: '专业特长', 
    description: '全栈开发能力，从前端到后端都能胜任', 
    tags: ['Vue/React', 'Node.js', '数据库'],
    details: '具备完整的前后端开发能力，熟悉现代前端框架和后端技术栈。能够快速学习新技术，并根据项目需求选择最合适的解决方案。'
  },
  { 
    text: '经历', 
    title: '项目经历', 
    description: '2 周以上的项目开发经验', 
    tags: ['个人项目', '实战经验'],
    details: '虽然正式工作经验不长，但我通过个人项目和实践积累了宝贵的开发经验。每个项目都让我成长，每次挑战都让我更加强大。'
  },
  { 
    text: '技能', 
    title: '技术技能', 
    description: '掌握多种编程语言和开发工具', 
    tags: ['JavaScript', 'Python', 'Git'],
    details: '熟练掌握 JavaScript、Python 等编程语言，熟悉 Vue、React 等前端框架，以及 Node.js 后端开发。同时具备运维、测试、网络安全等多方面的基础知识。'
  },
  { 
    text: '目标', 
    title: '发展目标', 
    description: '持续学习，成为更优秀的开发者', 
    tags: ['技术成长', '职业发展'],
    details: '我的目标是不断提升技术水平，参与更有挑战性的项目，为开源社区做贡献，并帮助他人解决技术问题。相信持续学习和实践是成长的关键。'
  }
])

const activeCard = computed(() => {
  return cards.value[clickedCardIndex.value]
})

const transformDatas = [
  "rotate(-10deg)",
  "rotate(-6deg) translate(35%, -12%)",
  "rotate(-2deg) translate(65%, -19%)",
  "rotate(2deg) translate(95%, -26%)",
  "rotate(6deg) translate(125%, -23%)"
]

const init = () => {
  pokerEles.value = pokerRefs.value
  
  pokerEles.value.forEach((obj, index) => {
    obj.nums = index
  })
  
  imgIndex.value = 5
}

const move = () => {
  pokerEles.value.forEach((ele) => {
    let nums = ele.nums
    if (nums + 1 >= pokerEles.value.length) {
      nums = 0
      ele.style.transition = ""
      const lastCard = cards.value.pop()
      cards.value.unshift(lastCard)
      imgIndex.value++
      if (imgIndex.value >= 9) {
        imgIndex.value = 0
      }
    } else {
      nums += 1
      ele.style.transition = "transform 0.3s ease"
    }
    ele.style.zIndex = nums
    ele.style.transform = transformDatas[nums]
    ele.nums = nums
  })
}

const handleCardHover = (index) => {
  // 鼠标移入：沿卡片自身朝向抽出一小段距离
  const el = pokerEles.value[index]
  if (el) {
    el.style.transition = 'transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)'
    const base = el.style.transform || transformDatas[el.nums] || transformDatas[index]
    el.style.transform = `${base} translate(0, -3rem)`
  }
}

const handleCardLeave = (index) => {
  // 鼠标移出：卡片滑回原位
  const el = pokerEles.value[index]
  if (el && el.nums !== undefined) {
    el.style.transition = 'transform 0.3s ease'
    el.style.transform = transformDatas[el.nums]
  }
}

const handleCardClick = (index) => {
  // 点击：以 macOS 缩放动画弹出详情弹窗
  clickedCardIndex.value = index
  showModal.value = true
  lockScroll()
}

const handleTopClick = () => {
  move()
}

const closeModal = () => {
  showModal.value = false
  unlockScroll()
}

const triggerFault = () => {
  if (faultPlayer.value) {
    clearInterval(faultPlayer.value)
  }
  
  setTimeout(() => {
    if (faultPlayer.value) {
      clearInterval(faultPlayer.value)
    }
    headerRefs.value.forEach((header) => {
      if (header) {
        header.classList.remove("header-fault")
        header.style.transform = ''
        header.style.clipPath = ''
      }
    })
  }, 1000)
  
  faultPlayer.value = setInterval(() => {
    headerRefs.value.forEach((header) => {
      if (header) {
        header.classList.add("header-fault")
        header.style.transform = `translate(${Math.random() * 60 - 30}%,${Math.random() * 60 - 30}%)`
        let x = Math.random() * 100
        let y = Math.random() * 100
        let h = Math.random() * 50 + 50
        let w = Math.random() * 40 + 10
        header.style.clipPath = `polygon(${x}% ${y}%, ${x + w}% ${y}%, ${x + w}% ${y + h}%, ${x}% ${y + h}%)`
      }
    })
  }, 30)
}

onMounted(() => {
  init()
})
</script>

<style scoped>
* {
  font-size: 2vmin;
  margin: 0;
  padding: 0;
}

.about {
  padding: 0;
  background: transparent;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

.header-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  cursor: pointer;
  z-index: 100;
}

.header {
  position: absolute;
  font-size: 4rem;
  font-family: Impact, sans-serif;
  font-weight: 800;
  margin-bottom: 5rem;
  color: var(--text-main);
  letter-spacing: 0.5rem;
  user-select: none;
}

.header-fault::after,
.header-fault::before {
  content: "About";
  position: absolute;
  left: 0;
  top: 0;
  mix-blend-mode: screen;
}

.header-fault::after {
  color: #ff0000;
  transform: translateX(2%);
}

.header-fault::before {
  color: #0000ff;
  transform: translateX(-2%);
}

.container {
  position: relative;
  width: 45rem;
  height: 25rem;
  margin-top: 10rem;
}

.poker,
.poker_top {
  position: absolute;
  width: 20rem;
  height: 26rem;
  box-shadow: -5px -7px 5px rgba(130, 130, 130, 0.5);
  border-radius: 1.5rem;
  background: var(--about-card);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  transform-origin: bottom left;
  overflow: hidden;
}

.poker {
  cursor: pointer;
  transition: filter 0.3s ease, transform 0.3s ease;
}

.poker:hover {
  filter: brightness(1.2);
  /* 悬浮抽出时的主题光晕（位移由 JS 沿卡片自身朝向设置） */
  box-shadow:
    0 20px 60px rgba(0, 0, 0, 0.28),
    0 0 28px var(--primary-light);
}

.poker .card-content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 3rem;
}

.poker .vertical-text {
  display: flex;
  flex-direction: column;
  gap: 1vmin;
}

.poker .vertical-text span {
  font-size: 10vmin;
  font-weight: 900;
  color: #fff;
  text-shadow: 0 0 1vmin rgba(0, 0, 0, 0.5);
  line-height: 1;
  display: block;
}

.poker_top {
  transition: 0.3s ease;
  cursor: pointer;
  z-index: 1000;
}

/* 顶牌上的书法条幅装饰（装裱卷轴风，跟随主题色） */
.mount {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  padding: 0 1rem;
  pointer-events: none;
}

/* 去掉横幅边框与黄条，书法图片直接浮在牌面上 */
.strip {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 74%;
  max-width: 42%;
  padding: 0;
}

.strip-left {
  transform: translateY(-1.5rem);
}

.strip-right {
  transform: translateY(1.5rem);
}

.strip img {
  height: 100%;
  max-width: 100%;
  width: auto;
  display: block;
  object-fit: contain;
  transition: transform 0.3s ease;
}

/* 朱红印章（受命于天图片） */
.seal {
  flex-shrink: 0;
  width: 3.6rem;
  height: 3.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.28));
}

.seal img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
}

.poker1 {
  transform: rotate(-10deg);
}

.poker2 {
  transform: rotate(-6deg) translate(35%, -12%);
}

.poker3 {
  transform: rotate(-2deg) translate(65%, -19%);
}

.poker4 {
  transform: rotate(2deg) translate(95%, -26%);
}

.poker5 {
  transform: rotate(6deg) translate(125%, -23%);
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 4000;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.modal-content {
  background: var(--bg-card);
  border-radius: 20px;
  padding: 50px;
  max-width: 600px;
  width: 90%;
  position: relative;
  box-shadow: 
    var(--shadow-lg),
    0 0 40px rgba(167, 254, 215, 0.2);
  border: 2px solid var(--primary-color);
  transform-origin: 50% 100%;
  animation: macOpen 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* macOS 打开应用式缩放：从小尺寸放大到完整大小，带轻微回弹 */
@keyframes macOpen {
  from {
    opacity: 0;
    transform: scale(0.55) translateY(30px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.modal-close {
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
  width: 40px;
  height: 40px;
}

.modal-close:hover {
  background: var(--primary-color);
  color: var(--text-main);
  transform: rotate(90deg);
  box-shadow: 0 0 20px var(--primary-color);
}

.modal-title {
  font-size: 2.5rem;
  font-weight: 900;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 20px;
  text-align: center;
  filter: drop-shadow(0 0 20px rgba(167, 254, 215, 0.5));
}

.modal-description {
  font-size: 1.2rem;
  line-height: 1.8;
  color: var(--text-secondary);
  text-align: center;
  margin-bottom: 30px;
}

.modal-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-bottom: 30px;
}

.tag {
  padding: 10px 24px;
  background: rgba(167, 254, 215, 0.15);
  color: var(--primary-dark);
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  border: 2px solid var(--primary-color);
  transition: all 0.3s ease;
  box-shadow: 0 0 10px rgba(167, 254, 215, 0.3);
}

.tag:hover {
  background: var(--primary-color);
  color: var(--text-main);
  box-shadow: 0 0 20px var(--primary-color);
  transform: translateY(-2px);
}

.modal-divider {
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--primary-color), transparent);
  margin-bottom: 30px;
}

.modal-details {
  font-size: 1.1rem;
  line-height: 2;
  color: var(--text-secondary);
  text-align: justify;
}

@media (max-width: 768px) {
  .header {
    font-size: 2.5rem;
  }
  
  .container {
    width: 90vw;
    height: 50vw;
  }
  
  .poker,
  .poker_top {
    width: 40vw;
    height: 52vw;
  }
  
  .poker .vertical-text span {
    font-size: 15vw;
  }

  .mount {
    gap: 0.8rem;
    padding: 0 0.6rem;
  }

  .strip {
    height: 66%;
  }

  .strip-left {
    transform: translateY(-1rem);
  }

  .strip-right {
    transform: translateY(1rem);
  }

  /* 小屏时缩小印章，保证两条幅并排放得下 */
  .seal {
    width: 2.2rem;
    height: 2.2rem;
  }
  
  .modal-content {
    padding: 30px 20px;
  }
  
  .modal-title {
    font-size: 1.8rem;
  }
  
  .modal-description {
    font-size: 1rem;
  }
  
  .modal-details {
    font-size: 0.95rem;
  }
}
</style>
