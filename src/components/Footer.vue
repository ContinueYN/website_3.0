<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3 class="footer-logo">Portfolio</h3>
          <p class="footer-description">
            全栈开发者，专注于创造优秀的数字体验。
          </p>
          <div class="footer-social">
            <a href="https://github.com/ContinueYN" class="social-icon">GitHub</a>
            <a href="https://blog.csdn.net" class="social-icon">CSDN</a>
            <a href="127.0.0.1" class="social-icon">Telegram</a>
          </div>
        </div>
        
       
        
        <div class="footer-section">
          <h4>联系信息</h4>
          <div class="contact-info">
            <p><Mail :size="16" class="inline-icon" /> 3258664928@qq.com</p>
            <p><Phone :size="16" class="inline-icon" /> +86 183 1686 5751</p>
            <p><MapPin :size="16" class="inline-icon" /> 中国，汕头市</p>
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
import { Mail, Phone, MapPin } from 'lucide-vue-next'
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
  gap: 4rem;
  margin-bottom: 2rem;
  align-items: start;
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

.footer-description {
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.6;
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
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .footer-section {
    text-align: center;
  }
  
  .footer-social {
    justify-content: center;
  }
}
</style>