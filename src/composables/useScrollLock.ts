import { onBeforeUnmount } from 'vue'

/**
 * 全局滚动锁：打开模态框时锁定主页面滚动，并补偿滚动条宽度避免页面横向跳动。
 *
 * 支持多个模态框同时存在（计数器计数），全部关闭后才解锁。
 * 关键点：body overflow:hidden 会隐去滚动条导致内容向右侧跳，这里用等宽 padding-right 补偿。
 */
let lockedCount = 0
let scrollbarWidth = 0

const getScrollbarWidth = () => window.innerWidth - document.documentElement.clientWidth

export function useScrollLock() {
  const lock = () => {
    if (lockedCount === 0) {
      scrollbarWidth = getScrollbarWidth()
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`
      }
      document.body.style.overflow = 'hidden'
    }
    lockedCount++
  }

  const unlock = () => {
    lockedCount = Math.max(0, lockedCount - 1)
    if (lockedCount === 0) {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
  }

  onBeforeUnmount(() => {
    // 组件卸载时兜底解锁，避免残留锁状态
    if (lockedCount > 0) {
      lockedCount = 0
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
  })

  return { lock, unlock }
}
