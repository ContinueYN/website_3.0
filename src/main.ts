import '@/styles/globals.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 导入 AOS 样式
import 'aos/dist/aos.css'

// 主题初始化.
function applyThemeClass(isDark: boolean) {
	const root = document.documentElement;
	root.classList.remove('theme-day', 'theme-night');
	root.classList.add(isDark ? 'theme-night' : 'theme-day');
}

if (window.matchMedia) {
	const mq = window.matchMedia('(prefers-color-scheme: dark)');
	applyThemeClass(mq.matches);
	// 监听系统主题变化.
	const onChange = (e: MediaQueryListEvent | MediaQueryList) => applyThemeClass('matches' in e ? e.matches : mq.matches);
	if (typeof mq.addEventListener === 'function') mq.addEventListener('change', onChange as EventListener);
	else if (typeof mq.addListener === 'function') mq.addListener(onChange as any);
} else {
	// 不支持 matchMedia，则默认使用浅色主题.
	applyThemeClass(false);
}

const app = createApp(App)

// 全局错误处理器
app.config.errorHandler = (err, instance, info) => {
  console.error('Global error:', err)
  console.error('Error info:', info)
  console.error('Vue instance:', instance)
}

// 集成路由
app.use(router)

app.mount('#app')