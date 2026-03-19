export interface ReadingTimeData {
  totalReadingTime: number;
  lastUpdated: string;
}

const readingTimeStore: ReadingTimeData = {
  totalReadingTime: 0,
  lastUpdated: new Date().toISOString()
};

export function getReadingTime(): ReadingTimeData {
  return {
    totalReadingTime: readingTimeStore.totalReadingTime,
    lastUpdated: readingTimeStore.lastUpdated
  };
}

export function updateReadingTime(duration: number): { success: boolean; data?: ReadingTimeData; message?: string } {
  if (typeof duration !== 'number' || duration < 0) {
    return { success: false, message: '无效的阅读时长' };
  }

  readingTimeStore.totalReadingTime += duration;
  readingTimeStore.lastUpdated = new Date().toISOString();

  console.log(`阅读时长更新: +${duration}秒, 总计: ${readingTimeStore.totalReadingTime}秒`);

  return {
    success: true,
    data: {
      totalReadingTime: readingTimeStore.totalReadingTime,
      lastUpdated: readingTimeStore.lastUpdated
    }
  };
}

export function resetReadingTime(): void {
  readingTimeStore.totalReadingTime = 0;
  readingTimeStore.lastUpdated = new Date().toISOString();
}
