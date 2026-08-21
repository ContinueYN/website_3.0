/**
 * clusterGate —— 3D 开场转场的降级判断
 *
 * 与 clusterIntro.ts（three/webgpu 大模块）解耦：本文件零三方依赖，
 * 供 App.vue / ClusterIntro.vue 静态引用，判断是否播放 3D 转场。
 *
 * 跳过条件（满足任一即跳过，直接进入网站）：
 *  1. 浏览器不支持 WebGPU（navigator.gpu 不存在）
 *  2. 移动端（粗指针 / 视口宽度 < 768）
 *  3. 用户开启「减少动态效果」（prefers-reduced-motion: reduce）
 */
export function shouldSkipCluster(): boolean {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    return true
  }

  const nav = navigator as unknown as { gpu?: unknown }
  if (!nav.gpu) return true

  const mm = typeof window.matchMedia === 'function' ? window.matchMedia : null
  if (mm && mm('(pointer: coarse)').matches) return true
  if (window.innerWidth < 768) return true
  if (mm && mm('(prefers-reduced-motion: reduce)').matches) return true

  return false
}
