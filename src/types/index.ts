/**
 * TypeScript 类型定义
 * 
 * 集中管理项目中使用的 TypeScript 类型，避免在组件中重复定义
 */

export interface HeaderProps {
  isDark: boolean
}

export type HeaderEmits = {
  'toggle-theme': []
}

export interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  category: string
  readingTime: number
  tags: string[]
  content: string
}
