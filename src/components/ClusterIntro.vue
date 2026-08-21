<template>
  <div ref="root" class="cluster-intro" aria-hidden="true">
    <div ref="mount" class="cluster-mount"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { shouldSkipCluster } from '../utils/clusterGate'
import type { ClusterIntroHandle } from '../utils/clusterIntro'

/**
 * ClusterIntro —— 3D 碎片球开场转场覆盖层
 *
 * 事件时序：
 *  - reveal：马赛克盖满屏幕（宿主挂载内容 + 内容淡入）
 *  - fading：马赛克开始整层淡出（宿主此时初始化 AOS，入场动画随遮罩揭起播放）
 *  - done：淡出完成（宿主卸载本组件）
 *
 * 本组件动态 import clusterIntro.ts（含 three/webgpu，体积大），只在需要时加载。
 */
const emit = defineEmits<{
  (e: 'reveal'): void
  (e: 'fading'): void
  (e: 'done'): void
}>()

const root = ref<HTMLElement | null>(null)
const mount = ref<HTMLElement | null>(null)
let handle: ClusterIntroHandle | null = null
let disposed = false
let revealTimer = 0
let fadeTimer = 0

onMounted(async () => {
  if (!mount.value || shouldSkipCluster()) {
    emit('done')
    return
  }

  try {
    const mod = await import('../utils/clusterIntro')
    if (disposed || !mount.value) {
      emit('done')
      return
    }

    handle = await mod.createClusterIntro(mount.value, {
      onReveal: () => {
        if (disposed) return
        emit('reveal')
        // 等主页内容淡入启动后，再整层淡出马赛克
        revealTimer = window.setTimeout(() => {
          if (disposed) return
          emit('fading')
          const el = root.value
          if (el) {
            el.style.transition = 'opacity 0.8s ease'
            el.style.opacity = '0'
          }
          fadeTimer = window.setTimeout(() => {
            if (!disposed) emit('done')
          }, 850)
        }, 500)
      },
    })
  } catch (err) {
    console.error('[ClusterIntro] 3D 转场初始化失败，跳过', err)
    emit('done')
  }
})

onBeforeUnmount(() => {
  disposed = true
  window.clearTimeout(revealTimer)
  window.clearTimeout(fadeTimer)
  handle?.dispose()
  handle = null
})
</script>

<style scoped>
/* 全屏固定覆盖层：比 index.html 的 #loadback(9999) 低一层，
   加载动画淡出时无缝露出已开始旋转的小球 */
.cluster-intro {
  position: fixed;
  inset: 0;
  z-index: 9998;
  background: #000;
  overflow: hidden;
}
.cluster-mount {
  width: 100%;
  height: 100%;
}
</style>
