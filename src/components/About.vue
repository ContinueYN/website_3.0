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
    description: '代码之外，把日子过成自己喜欢的样子',
    tags: ['动漫游戏', '音乐', '折腾新玩具'],
    details: '写代码之外，我喜欢泡在动漫和游戏的世界里，番剧的演出和游戏的交互常常给我带来设计灵感；戴上耳机听歌是我最好的放松方式，首页的背景音乐就出自我的私藏歌单。当然，也少不了折腾各种新出的 AI 工具和开源项目——对我来说，好玩的东西永远不嫌多。'
  },
  {
    text: '性格',
    title: '性格特质',
    description: '好奇心驱动，靠谱，还有一点完美主义',
    tags: ['好奇心旺盛', '细节控', '说到做到'],
    details: '我名字里有个「诺」字，答应的事情就一定尽力做到，这大概是我最看重的品质。对未知的东西好奇心旺盛，见到新技术总忍不住上手试试；做事时是个细节控，愿意为了一像素的偏差、一次不够顺滑的过渡动画反复打磨。心态乐观，就算写出了 bug，也照样睡得着觉。'
  },
  {
    text: '经历',
    title: '成长足迹',
    description: '从第一行 Hello World 到 AI 全栈开发',
    tags: ['自学起步', '项目实战', '拥抱 AI'],
    details: '我的起点是自学：从第一行 Hello World 开始，靠文档、开源社区和一个个亲手做出的项目慢慢啃了下来。真正让我蜕变的，是把想法做成完整作品的过程——需求、设计、开发、部署，每个环节都踩过坑、也学到过东西。如今我把重心放在 AI 原生开发上，用新的方式构建应用。具体做了什么，欢迎移步下方 Projects 一探究竟。'
  },
  {
    text: '信念',
    title: '我的信念',
    description: '认真做事，坦然面对结果',
    tags: ['承因果', '尽人事', '顺天命'],
    details: '顶牌上那三句话，就是我的座右铭。承因果——种什么因、得什么果，写下的每一行代码、做过的每一个选择都算数；尽人事——凡事竭尽全力，不给自己留下「本可以」的遗憾；顺天命——至于结果，交给时间。相信因果的人，做事自然认真。'
  },
  {
    text: '目标',
    title: '发展目标',
    description: '持续成长，做有温度的数字作品',
    tags: ['技术深耕', '开源贡献', '助人成长'],
    details: '短期，我想在 AI 应用开发这条路上继续深挖，参与更有挑战性的项目，把每个作品都打磨到让自己满意；长期，希望能为开源社区贡献自己的代码，把踩过的坑整理分享出去，帮后来的人少走弯路。成长没有捷径，但走过的每一步都算数。'
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
