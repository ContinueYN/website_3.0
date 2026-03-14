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
      ></div>
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

const handleCardClick = (index) => {
  clickedCardIndex.value = index
  showModal.value = true
}

const handleTopClick = () => {
  move()
}

const closeModal = () => {
  showModal.value = false
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
  font-size: 5rem;
  font-family: Impact, sans-serif;
  font-weight: 900;
  margin-bottom: 5rem;
  color: #fff;
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
  transform-origin: bottom left;
  overflow: hidden;
}

.poker {
  cursor: pointer;
  transition: filter 0.3s ease;
}

.poker:hover {
  filter: brightness(1.2);
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
  background-color: #fff;
  transition: 0.3s ease;
  cursor: pointer;
  z-index: 1000;
}

.poker_top:hover {
  background-color: #aaa;
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
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
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
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%);
  border-radius: 20px;
  padding: 50px;
  max-width: 600px;
  width: 90%;
  position: relative;
  box-shadow: 
    0 0 30px rgba(23, 247, 0, 0.3),
    0 0 60px rgba(23, 247, 0, 0.2),
    inset 0 0 30px rgba(23, 247, 0, 0.1);
  border: 2px solid #17f700;
  animation: slideUp 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}

@keyframes slideUp {
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.modal-close {
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: 2px solid #17f700;
  color: #17f700;
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
  background: #17f700;
  color: #000;
  transform: rotate(90deg);
  box-shadow: 0 0 20px #17f700;
}

.modal-title {
  font-size: 2.5rem;
  font-weight: 900;
  color: #17f700;
  margin-bottom: 20px;
  text-shadow: 0 0 20px #17f700;
  text-align: center;
}

.modal-description {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #fff;
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
  background: rgba(23, 247, 0, 0.1);
  color: #17f700;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  border: 2px solid #17f700;
  transition: all 0.3s ease;
  box-shadow: 0 0 10px rgba(23, 247, 0, 0.3);
}

.tag:hover {
  background: #17f700;
  color: #000;
  box-shadow: 0 0 20px #17f700;
  transform: translateY(-2px);
}

.modal-divider {
  height: 2px;
  background: linear-gradient(90deg, transparent, #17f700, transparent);
  margin-bottom: 30px;
}

.modal-details {
  font-size: 1.1rem;
  line-height: 2;
  color: rgba(255, 255, 255, 0.9);
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
