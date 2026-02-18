<template>
  <section id="contact" class="contact">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">联系我</h2>
        <p class="section-subtitle">有项目想讨论？欢迎联系！</p>
      </div>

      <div class="contact-content">
        <div class="contact-info">
          <h3>让我们开始对话</h3>
          <p>如果您有项目想法或需要帮助，请随时与我联系。我通常会在一日内回复。</p>
          
          <div class="contact-methods">
            <div class="contact-method">
              <div class="contact-icon">📧</div>
              <div>
                <h4>邮箱</h4>
                <p>3258664928@qq.com</p>
              </div>
            </div>
            <div class="contact-method">
              <div class="contact-icon">📱</div>
              <div>
                <h4>电话</h4>
                <p>+86 181 3686 5751</p>
              </div>
            </div>
            <div class="contact-method">
              <div class="contact-icon">📍</div>
              <div>
                <h4>地址</h4>
                <p>中国，汕头市</p>
              </div>
            </div>
          </div>

          <div class="social-links">
            <a href="https://github.com/ContinueYN" class="social-link">GitHub</a>
            <a href="https://blog.csdn.net" class="social-link">CSDN</a>
            <a href="https://github.com/ContinueYN" class="social-link">Telegram</a>
            <a href="https://github.com/ContinueYN" class="social-link">WeChat</a>
          </div>
        </div>

        <form class="contact-form" @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name">姓名 *</label>
            <input 
              type="text" 
              id="name" 
              v-model="form.name"
              :disabled="loading"
              required 
            />
          </div>
          <div class="form-group">
            <label for="email">邮箱 *</label>
            <input 
              type="email" 
              id="email" 
              v-model="form.email"
              :disabled="loading"
              required 
            />
          </div>
          <div class="form-group">
            <label for="subject">主题 *</label>
            <input 
              type="text" 
              id="subject" 
              v-model="form.subject"
              :disabled="loading"
              required 
            />
          </div>
          <div class="form-group">
            <label for="message">消息 *</label>
            <textarea 
              id="message" 
              rows="5" 
              v-model="form.message"
              :disabled="loading"
              required
            ></textarea>
          </div>
          <button 
            type="submit" 
            class="btn btn-submit"
            :disabled="loading"
          >
            <span v-if="loading">发送中...</span>
            <span v-else>发送消息</span>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

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
    const API_URL = 'http://localhost:3001/api'
    
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
.contact {
  padding: 5rem 0;
  background: var(--bg-primary);
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

.contact-info h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.contact-info > p {
  color: var(--text-secondary);
  margin-bottom: 2rem;
  line-height: 1.6;
}

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
}

.contact-icon {
  font-size: 1.5rem;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-secondary);
  border-radius: 50%;
}

.contact-method h4 {
  font-size: 1.125rem;
  margin-bottom: 0.25rem;
  color: var(--text-primary);
}

.contact-method p {
  color: var(--text-secondary);
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  padding: 0.5rem 1rem;
  background: var(--bg-secondary);
  color: var(--text-primary);
  text-decoration: none;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: var(--primary-color);
  color: white;
}

.contact-form {
  background: var(--bg-card);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: var(--shadow);
  border: 1px solid var(--border-color);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--text-primary);
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: 0.5rem;
  background: var(--bg-primary);
  color: var(--text-primary);
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary-color);
}

.btn-submit {
  width: 100%;
  justify-content: center;
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .social-links {
    flex-wrap: wrap;
  }
}
</style>