import { ref, onMounted } from 'vue'
import { storage } from '../utils/storage'
import { STORAGE_KEYS } from '../constants'

export function useTheme() {
  const isDark = ref(false)

  const toggleTheme = () => {
    isDark.value = !isDark.value
    storage.set(STORAGE_KEYS.THEME, isDark.value ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', isDark.value)
  }

  const initTheme = () => {
    const savedTheme = storage.get<string>(STORAGE_KEYS.THEME, null)
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    isDark.value = savedTheme ? savedTheme === 'dark' : systemPrefersDark
    document.documentElement.classList.toggle('dark', isDark.value)
  }

  onMounted(() => {
    initTheme()
  })

  return {
    isDark,
    toggleTheme
  }
}
