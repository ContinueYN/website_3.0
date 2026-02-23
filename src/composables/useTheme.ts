// 导入 Vue 的响应式 API 和生命周期钩子
import { ref, onMounted } from 'vue'

export function useTheme() {
  // 创建响应式主题状态，初始值为 false（浅色模式）
  const isDark = ref(false)

  // 切换主题函数
  const toggleTheme = () => {
    // 切换主题状态
    isDark.value = !isDark.value
    // 将主题设置保存到 localStorage，下次访问时保持用户选择
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
    // 切换 HTML 元素的 dark 类，触发 CSS 主题变化
    document.documentElement.classList.toggle('dark', isDark.value)
  }

  // 初始化主题函数
  const initTheme = () => {
    // 从 localStorage 获取用户之前保存的主题设置
    const savedTheme = localStorage.getItem('theme')
    // 检测系统是否偏好深色模式
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    // 如果用户有保存的主题，使用保存的；否则使用系统偏好
    isDark.value = savedTheme ? savedTheme === 'dark' : systemPrefersDark
    // 根据主题状态设置 HTML 元素的 dark 类
    document.documentElement.classList.toggle('dark', isDark.value)
  }

  // 组件挂载时初始化主题
  onMounted(() => {
    initTheme()
  })

  // 返回主题状态和切换函数，供组件使用
  return {
    isDark,
    toggleTheme
  }
}
