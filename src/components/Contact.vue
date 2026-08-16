<template>
  <section id="contact" class="contact">
    <!-- 背景装饰 -->
    <div class="contact-bg-decoration">
      <div class="floating-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
        <div class="shape shape-4"></div>
        <div class="shape shape-5"></div>
      </div>
      <div class="sakura-petals">
        <div class="petal" v-for="n in 15" :key="n" :style="{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${3 + Math.random() * 2}s`
        }"></div>
      </div>
    </div>

    <div class="container">
      <div class="section-header">
        <h2 class="section-title">
          <span class="title-icon">✦</span>
          ~~Contact~~
          <span class="title-icon">✦</span>
        </h2>
        <p class="section-subtitle">有项目想讨论？欢迎联系！</p>
        <div class="title-decoration">
          <span class="deco-line"></span>
          <span class="deco-star">✦</span>
          <span class="deco-line"></span>
        </div>
      </div>

      <div class="contact-content">
        <div class="contact-info">
          <div class="info-card">
            <div class="card-header">
              <h3>通过右边可以发送到我QQ邮箱</h3>
            </div>
            <p class="info-description">如果您有项目想法或需要帮助，请随时与我联系。我通常会在一日内回复。</p>
            
            <div class="contact-methods">
              <div class="contact-method">
                <div class="contact-icon-wrapper">
                  <div class="icon-bg"></div>
                  <div class="contact-icon">
                    <Mail :size="20" />
                  </div>
                </div>
                <div class="method-info">
                  <h4>邮箱</h4>
                  <p>3258664928@qq.com</p>
                </div>
              </div>
              <div class="contact-method">
                <div class="contact-icon-wrapper">
                  <div class="icon-bg"></div>
                  <div class="contact-icon">
                    <Phone :size="20" />
                  </div>
                </div>
                <div class="method-info">
                  <h4>电话</h4>
                  <p>+86 181 3686 5751</p>
                </div>
              </div>
              <div class="contact-method">
                <div class="contact-icon-wrapper">
                  <div class="icon-bg"></div>
                  <div class="contact-icon">
                    <MapPin :size="20" />
                  </div>
                </div>
                <div class="method-info">
                  <h4>地址</h4>
                  <p>中国，汕头市</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <form class="contact-form" @submit.prevent="handleSubmit">
          <div class="form-header">
            <h3>发送消息</h3>
          </div>
          
          <div class="form-group">
            <label for="name">
              姓名 *
            </label>
            <div class="input-wrapper">
              <input 
                type="text" 
                id="name" 
                v-model="form.name"
                :disabled="loading"
                required 
                placeholder="请输入您的姓名"
              />
              <div class="input-border"></div>
              <div class="input-highlight"></div>
            </div>
          </div>
          
          <div class="form-group">
            <label for="email">
              邮箱 *
            </label>
            <div class="input-wrapper">
              <input 
                type="email" 
                id="email" 
                v-model="form.email"
                :disabled="loading"
                required 
                placeholder="请输入您的邮箱"
              />
              <div class="input-border"></div>
              <div class="input-highlight"></div>
            </div>
          </div>
          
          <div class="form-group">
            <label for="subject">
              主题 *
            </label>
            <div class="input-wrapper">
              <input 
                type="text" 
                id="subject" 
                v-model="form.subject"
                :disabled="loading"
                required 
                placeholder="请输入主题"
              />
              <div class="input-border"></div>
              <div class="input-highlight"></div>
            </div>
          </div>
          
          <div class="form-group">
            <label for="message">
              消息 *
            </label>
            <div class="input-wrapper">
              <textarea 
                id="message" 
                rows="5" 
                v-model="form.message"
                :disabled="loading"
                required
                placeholder="请输入您的消息..."
              ></textarea>
              <div class="input-border"></div>
              <div class="input-highlight"></div>
            </div>
          </div>
          
          <button 
            type="submit" 
            class="btn btn-submit"
            :disabled="loading"
          >
            <span v-if="loading">发送中...</span>
            <span v-else>发送消息</span>
            <div class="btn-shine"></div>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { Mail, Phone, MapPin } from 'lucide-vue-next'

interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

const form = reactive<ContactForm>({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const loading = ref(false)

const handleSubmit = async () => {
  if (loading.value) return

  loading.value = true

  try {
    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api'
    
    const response = await fetch(`${API_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form)
    })

    const result = await response.json()

    if (result.success) {
      alert(result.message)
      // 重置表单
      Object.assign(form, {
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    } else {
      alert(result.message || '发送失败，请重试')
    }
  } catch (error) {
    console.error('提交表单失败:', error)
    alert('网络错误，请检查网络连接或稍后重试')
  } finally {
    loading.value = false
  }
}
</script>


<style scoped>
/* 二次元风格配色方案 */
:root {
  --sakura-pink: #ffb7c5;
  --sakura-dark: #ff9eb5;
  --purple-light: #e0c3fc;
  --purple-dark: #c9a8ff;
  --blue-light: #a8edea;
  --blue-dark: #7ed6df;
}

.contact {
  padding: 5rem 0;
  background: transparent;
  position: relative;
  overflow: hidden;
}

/* 背景装饰 */
.contact-bg-decoration {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;
}

.floating-shapes .shape {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(255, 183, 197, 0.3), rgba(224, 195, 252, 0.3));
  filter: blur(20px);
  animation: float 6s ease-in-out infinite;
}

.shape-1 {
  width: 200px;
  height: 200px;
  top: -50px;
  left: -50px;
  animation-delay: 0s;
}

.shape-2 {
  width: 150px;
  height: 150px;
  top: 50%;
  right: -30px;
  animation-delay: 1s;
}

.shape-3 {
  width: 120px;
  height: 120px;
  bottom: 10%;
  left: 10%;
  animation-delay: 2s;
}

.shape-4 {
  width: 180px;
  height: 180px;
  top: 30%;
  left: 50%;
  animation-delay: 3s;
}

.shape-5 {
  width: 100px;
  height: 100px;
  bottom: -30px;
  right: 20%;
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(10deg);
  }
}

/* 樱花花瓣 */
.sakura-petals {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.petal {
  position: absolute;
  width: 10px;
  height: 10px;
  background: linear-gradient(135deg, #ffb7c5, #ff9eb5);
  border-radius: 50% 0 50% 50%;
  opacity: 0.6;
  top: -10px;
  animation: sakura-fall linear infinite;
}

@keyframes sakura-fall {
  0% {
    top: -10px;
    transform: translateX(0) rotate(0deg);
    opacity: 0.6;
  }
  100% {
    top: 100vh;
    transform: translateX(100px) rotate(720deg);
    opacity: 0;
  }
}

/* 容器 */
.container {
  position: relative;
  z-index: 1;
}

/* 标题部分 */
.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: clamp(2.4rem, 5vw, 3.4rem);
  font-family: var(--font-display);
  font-weight: 700;
  letter-spacing: 0.12em;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.title-icon {
  font-size: 1.5rem;
  animation: twinkle 2s ease-in-out infinite;
}

@keyframes twinkle {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.2);
  }
}

.section-subtitle {
  color: var(--text-secondary);
  font-size: 1.1rem;
}

.title-decoration {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
}

.deco-line {
  width: 50px;
  height: 2px;
  background: linear-gradient(90deg, transparent, #ffb7c5, transparent);
}

.deco-star {
  color: #ffb7c5;
  font-size: 1.2rem;
  animation: twinkle 1.5s ease-in-out infinite;
}

/* 内容布局 */
.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  position: relative;
}

/* 信息卡片 */
.info-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(255, 183, 197, 0.1);
  animation: slideIn 0.8s ease-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.card-icon {
  font-size: 2rem;
  animation: bounce 2s ease-in-out infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.info-card h3 {
  font-size: 1.5rem;
  background: linear-gradient(135deg, #ffb7c5, #ff9eb5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.info-description {
  color: var(--text-secondary);
  margin-bottom: 2rem;
  line-height: 1.6;
}

/* 联系方式 */
.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.contact-method {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 183, 197, 0.1);
  transition: all 0.3s ease;
}

.contact-method:hover {
  background: rgba(255, 183, 197, 0.1);
  border-color: rgba(255, 183, 197, 0.3);
  transform: translateX(10px);
}

.contact-icon-wrapper {
  position: relative;
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(255, 183, 197, 0.3), rgba(224, 195, 252, 0.3));
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
}

.contact-icon {
  position: relative;
  z-index: 1;
  color: #ffb7c5;
  width: 1.5rem;
  height: 1.5rem;
}

.method-info h4 {
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
  background: linear-gradient(135deg, #ffb7c5, #c9a8ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.method-info p {
  color: var(--text-secondary);
  font-size: 0.95rem;
}

/* 社交链接 */
.social-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: rgba(255, 255, 255, 0.05);
  color: var(--text-primary);
  text-decoration: none;
  border-radius: 2rem;
  border: 1px solid rgba(255, 183, 197, 0.2);
  transition: all 0.3s ease;
  font-size: 0.95rem;
}

.social-link:hover {
  background: linear-gradient(135deg, rgba(255, 183, 197, 0.3), rgba(224, 195, 252, 0.3));
  border-color: rgba(255, 183, 197, 0.5);
  transform: translateY(-3px);
  box-shadow: 0 5px 20px rgba(255, 183, 197, 0.3);
}

.link-icon {
  font-size: 1.2rem;
}

/* 表单样式 */
.contact-form {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 2.5rem;
  border-radius: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(224, 195, 252, 0.1);
  animation: slideIn 0.8s ease-out 0.2s backwards;
  position: relative;
}

.contact-form::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(135deg, rgba(255, 183, 197, 0.3), rgba(224, 195, 252, 0.3), transparent);
  border-radius: 1.5rem;
  z-index: -1;
  opacity: 0.5;
}

.form-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.form-icon {
  font-size: 2rem;
  animation: bounce 2s ease-in-out infinite 0.5s;
}

.form-header h3 {
  font-size: 1.5rem;
  background: linear-gradient(135deg, #ffb7c5, #ff9eb5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--text-primary);
  font-size: 0.95rem;
}

.label-icon {
  font-size: 1.1rem;
}

.input-wrapper {
  position: relative;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 1rem;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.05);
  color: var(--text-primary);
  transition: all 0.3s ease;
  font-size: 1rem;
  font-family: inherit;
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.input-border {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #ffb7c5, #c9a8ff);
  transition: width 0.3s ease;
  border-radius: 0 0 1rem 1rem;
}

.input-highlight {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  background: linear-gradient(135deg, rgba(255, 183, 197, 0.05), rgba(224, 195, 252, 0.05));
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: rgba(255, 183, 197, 0.5);
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 20px rgba(255, 183, 197, 0.2);
}

.form-group input:focus ~ .input-border,
.form-group textarea:focus ~ .input-border {
  width: 100%;
}

.form-group input:focus ~ .input-highlight,
.form-group textarea:focus ~ .input-highlight {
  opacity: 1;
}

/* 提交按钮 */
.btn-submit {
  width: 100%;
  padding: 1rem 2rem;
  border: none;
  border-radius: 2rem;
  background: linear-gradient(135deg, #ffb7c5, #ff9eb5);
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 20px rgba(255, 183, 197, 0.4);
}

.btn-submit:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(255, 183, 197, 0.6);
}

.btn-submit:active:not(:disabled) {
  transform: translateY(-1px);
}

.btn-submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-content {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  z-index: 1;
}

.btn-icon {
  font-size: 1.3rem;
  animation: sparkle 1.5s ease-in-out infinite;
}

.btn-icon.loading {
  animation: spin 1s linear infinite;
}

@keyframes sparkle {
  0%, 100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.2) rotate(180deg);
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.btn-shine {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  animation: shine 3s ease-in-out infinite;
}

@keyframes shine {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .contact-form {
    padding: 1.5rem;
  }
  
  .social-links {
    justify-content: center;
  }
  
  .shape-1, .shape-2, .shape-4 {
    display: none;
  }
}
</style>