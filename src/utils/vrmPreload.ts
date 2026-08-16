/**
 * VRM 模型预加载
 *
 * 页面脚本一执行就开始下载模型二进制，与首屏资源并行：
 * - fetch 不参与 window load 事件计算，因此不会拖长首屏加载动画的等待时长
 * - priority: 'low' 让浏览器优先调度关键资源（CSS/JS/首屏图），模型用空闲带宽
 * - VRoidViewer 挂载时直接消费缓存，滚到页脚时模型通常已就绪
 */

// Vite 会将此模式重写为带 hash 的构建产物 URL
export const VRM_URL = new URL('/src/assets/3D/loi.vrm', import.meta.url).href

let bufferPromise: Promise<ArrayBuffer> | null = null

/** 获取模型 ArrayBuffer（带缓存：多处调用共享同一次下载） */
export function preloadVrmModel(): Promise<ArrayBuffer> {
  if (!bufferPromise) {
    bufferPromise = fetch(VRM_URL, { priority: 'low' } as RequestInit).then((res) => {
      if (!res.ok) throw new Error(`VRM 模型下载失败：HTTP ${res.status}`)
      return res.arrayBuffer()
    })
    // 失败时清空缓存，允许后续（如 Viewer 挂载时）重新尝试下载
    bufferPromise.catch(() => {
      bufferPromise = null
    })
  }
  return bufferPromise
}

/** 浏览器空闲时预取 Viewer 组件 chunk（three.js 等），滚到页脚时只需初始化场景 */
export function prefetchViewerChunk(): void {
  const schedule = (cb: () => void) => {
    if (typeof window.requestIdleCallback === 'function') {
      window.requestIdleCallback(cb, { timeout: 3000 })
    } else {
      window.setTimeout(cb, 1500)
    }
  }

  schedule(() => {
    import('../components/VRoidViewer.vue').catch(() => {})
  })
}
