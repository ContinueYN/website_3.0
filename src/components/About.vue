<template>
  <section id="about" class="about">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">关于我</h2>
        <p class="section-subtitle">了解更多关于我的故事和热情</p>
      </div>

      <div class="about-content">
        <div class="about-text">
          <div class="about-intro">
            <h3>充满激情的全栈开发者</h3>
            <p>
              我是一名专注于现代Web技术的全栈开发者，拥有2星期以上的开发经验。
              热爱学习新技术，享受将创意转化为现实的过程。
            </p>
          </div>

          <div class="about-details">
            <div class="detail-item">
              <strong>姓名：</strong>
              <span>余诺</span>
            </div>
            <div class="detail-item">
              <strong>邮箱：</strong>
              <span>3258664928@qq.com</span>
            </div>
            <div class="detail-item">
              <strong>位置：</strong>
              <span>中国，汕头</span>
            </div>
            <div class="detail-item">
              <strong>状态：</strong>
              <span>可接项目</span>
            </div>
          </div>

          <div class="about-actions">
            <a href="/resume.pdf" class="btn" download>
              <FileText :size="18" class="mr-2" /> 下载简历
            </a>
          </div>
        </div>

        <div class="about-visual">
          <div class="experience-cards">
            <div class="card">
              <div class="card-glare"></div>
              <div class="card-icon">
                <Briefcase :size="30" />
              </div>
              <h3 class="card-title">工作经验</h3>
              <p class="card-content">2周以上全栈开发经验</p>
            </div>
            <div class="card">
              <div class="card-glare"></div>
              <div class="card-icon">
                <GraduationCap :size="30" />
              </div>
              <h3 class="card-title">教育背景</h3>
              <p class="card-content">计算机科学学位</p>
            </div>
            <div class="card">
              <div class="card-glare"></div>
              <div class="card-icon">
                <Rocket :size="30" />
              </div>
              <h3 class="card-title">AI应用</h3>
              <p class="card-content">运维 测试 网安</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { FileText, Briefcase, GraduationCap, Rocket } from 'lucide-vue-next'
</script>

<style scoped>
.about {
  padding: 5rem 0;
  background: transparent;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.section-subtitle {
  font-size: 1.125rem;
  color: var(--text-secondary);
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.about-intro h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.about-intro p {
  font-size: 1.125rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 2rem;
}

.about-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 2rem;
}

.detail-item {
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--border-color);
}

.detail-item strong {
  color: var(--text-primary);
}

.detail-item span {
  color: var(--text-secondary);
}

.mr-2 {
  margin-right: 0.5rem;
}

.about-actions {
  margin-top: 2rem;
}

.experience-cards {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}


.card {
  width: 500px;
  height: 180px;
  border-radius: 20px;
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  border: 1px solid var(--glass-border);
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform-style: preserve-3d;
  box-shadow: var(--shadow);
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: all 0.5s;
}

.card:hover {
  transform: translateY(-15px) rotateX(5deg) rotateY(-5deg) scale(1.03);
  box-shadow: var(--shadow-glow);
  border-color: var(--primary-color);
}

.card:hover::before {
  transform: translateX(100%);
}

.card-icon {
  font-size: 30px;
  margin-bottom: 25px;
  color: #fff;
  transition: all 0.3s ease;
  transform: translateZ(30px);
}

.card:hover .card-icon {
  transform: translateZ(50px) scale(1.2);
  color: #ffdb58;
}

.card-title {
  font-size: 20px;
  font-weight: 700;
  color: white;
  margin-bottom: 15px;
  transition: all 0.3s ease;
  transform: translateZ(20px);
}

.card:hover .card-title {
  transform: translateZ(40px);
  color: #171716;
}

.card-content {
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  margin-bottom: 25px;
  transform: translateZ(10px);
  transition: all 0.3s ease;
}

.card:hover .card-content {
  transform: translateZ(30px);
  color: #171716;
}

.card-glare {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
  pointer-events: none;
}

.card-glare::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transform: rotate(45deg);
  transition: all 0.5s ease;
  opacity: 0;
}

.card:hover .card-glare::after {
  opacity: 1;
  animation: glare 1.5s ease-in-out;
}

@keyframes glare {
  0% {
    transform: rotate(45deg) translate(-50%, -50%);
  }
  100% {
    transform: rotate(45deg) translate(50%, 50%);
  }
}


@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .about-details {
    grid-template-columns: 1fr;
  }
  
  .section-title {
    font-size: 2rem;
  }
  .card{
    width: 100%;
  }
}
</style>