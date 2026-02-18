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
          <h4>快速链接</h4>
          <ul class="footer-links">
            <li><a href="#home">首页</a></li>
            <li><a href="#about">关于</a></li>
            <li><a href="#skills">技能</a></li>
            <li><a href="#projects">项目</a></li>
            <li><a href="#contact">联系</a></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h4>服务</h4>
          <ul class="footer-links">
            <p>网站开发</p>
            <p>移动应用</p>
            <p>UI/UX设计</p>
            <p>技术咨询:Continue1831</p>
          </ul>
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
  background: var(--bg-secondary);
  padding: 3rem 0 1rem;
  border-top: 1px solid var(--border-color);
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
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
}

.social-icon {
  padding: 0.5rem;
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.3s ease;
}

.social-icon:hover {
  color: var(--primary-color);
}

.footer-links {
  list-style: none;
}

.footer-links li {
  margin-bottom: 0.5rem;
}

.footer-links a {
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: var(--primary-color);
}

.contact-info p {
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.inline-icon {
  color: var(--primary-color);
}

.footer-bottom {
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
  text-align: center;
  color: var(--text-secondary);
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