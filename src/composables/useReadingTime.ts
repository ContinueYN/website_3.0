import { ref, onMounted, onUnmounted } from 'vue'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

let globalTrackingInstance: {
  refCount: number
  startTime: number | null
  accumulatedTime: number
  intervalId: number | null
  reportIntervalId: number | null
} | null = null

const REPORT_INTERVAL = 30000

function startGlobalTracking() {
  if (!globalTrackingInstance) {
    globalTrackingInstance = {
      refCount: 0,
      startTime: Date.now(),
      accumulatedTime: 0,
      intervalId: null,
      reportIntervalId: null
    }
  }
  
  globalTrackingInstance.refCount++
  
  if (globalTrackingInstance.refCount === 1) {
    globalTrackingInstance.startTime = Date.now()
    globalTrackingInstance.accumulatedTime = 0
    
    globalTrackingInstance.intervalId = window.setInterval(() => {
      if (globalTrackingInstance && globalTrackingInstance.startTime && document.visibilityState === 'visible') {
        globalTrackingInstance.accumulatedTime = (Date.now() - globalTrackingInstance.startTime) / 1000
      }
    }, 1000)
    
    globalTrackingInstance.reportIntervalId = window.setInterval(() => {
      if (globalTrackingInstance && globalTrackingInstance.accumulatedTime > 0) {
        // 直接调用 fetch 上报，避免未定义错误
        fetch(`${API_BASE_URL}/api/reading-time`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ duration: Math.round(globalTrackingInstance.accumulatedTime) })
        }).catch(err => console.error('上报阅读时长失败:', err))
        globalTrackingInstance.accumulatedTime = 0
        globalTrackingInstance.startTime = Date.now()
      }
    }, REPORT_INTERVAL)
  }
}

function stopGlobalTracking() {
  if (globalTrackingInstance) {
    globalTrackingInstance.refCount--
    
    if (globalTrackingInstance.refCount <= 0) {
      if (globalTrackingInstance.intervalId) {
        clearInterval(globalTrackingInstance.intervalId)
        globalTrackingInstance.intervalId = null
      }
      
      if (globalTrackingInstance.reportIntervalId) {
        clearInterval(globalTrackingInstance.reportIntervalId)
        globalTrackingInstance.reportIntervalId = null
      }
      
      if (globalTrackingInstance.accumulatedTime > 0) {
        fetch(`${API_BASE_URL}/api/reading-time`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            duration: Math.round(globalTrackingInstance!.accumulatedTime),
          }),
        }).catch((err) => console.error("上报阅读时长失败:", err));
        globalTrackingInstance.accumulatedTime = 0;
      }
      
      globalTrackingInstance.startTime = null
    }
  }
}

export function useReadingTime() {
  const totalReadingTime = ref(0)
  const isTracking = ref(false)

  const startTracking = () => {
    if (isTracking.value) return
    
    isTracking.value = true
    startGlobalTracking()
  }

  const stopTracking = async () => {
    if (!isTracking.value) return
    
    isTracking.value = false
    stopGlobalTracking()
  }

  const reportReadingTime = async (duration: number) => {
    try {
      console.log('正在上报阅读时长:', duration, '秒')
      const response = await fetch(`${API_BASE_URL}/api/reading-time`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ duration: Math.round(duration) })
      })
      
      console.log('上报响应状态:', response.status)
      if (response.ok) {
        const data = await response.json()
        console.log('上报成功，新的总时长:', data.totalReadingTime)
        totalReadingTime.value = data.totalReadingTime
      } else {
        console.error('上报阅读时长失败，状态码:', response.status)
      }
    } catch (error) {
      console.error('上报阅读时长失败:', error)
    }
  }

  const fetchTotalReadingTime = async () => {
    try {
      console.log('正在获取总阅读时长...', API_BASE_URL)
      const response = await fetch(`${API_BASE_URL}/api/reading-time`)
      console.log('响应状态:', response.status)
      if (response.ok) {
        const data = await response.json()
        console.log('获取到的数据:', data)
        totalReadingTime.value = data.totalReadingTime
      } else {
        console.error('获取总阅读时长失败，状态码:', response.status)
      }
    } catch (error) {
      console.error('获取总阅读时长失败:', error)
    }
  }

  const handleVisibilityChange = () => {
    if (globalTrackingInstance) {
      if (document.visibilityState === 'visible') {
        if (isTracking.value && !globalTrackingInstance.startTime) {
          globalTrackingInstance.startTime = Date.now()
        }
      } else {
        if (globalTrackingInstance.startTime) {
          globalTrackingInstance.accumulatedTime += (Date.now() - globalTrackingInstance.startTime) / 1000
          globalTrackingInstance.startTime = null
        }
      }
    }
  }

  const handleBeforeUnload = () => {
    if (globalTrackingInstance && globalTrackingInstance.accumulatedTime > 0) {
      navigator.sendBeacon(
        `${API_BASE_URL}/api/reading-time`,
        JSON.stringify({ duration: Math.round(globalTrackingInstance.accumulatedTime) })
      )
    }
  }

  onMounted(() => {
    document.addEventListener('visibilitychange', handleVisibilityChange)
    window.addEventListener('beforeunload', handleBeforeUnload)
  })

  onUnmounted(() => {
    stopTracking()
    document.removeEventListener('visibilitychange', handleVisibilityChange)
    window.removeEventListener('beforeunload', handleBeforeUnload)
  })

  return {
    totalReadingTime,
    isTracking,
    startTracking,
    stopTracking,
    fetchTotalReadingTime
  }
}
