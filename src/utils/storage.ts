/**
 * 存储工具函数
 * 
 * 封装 localStorage 操作，提供统一的存储接口
 * 自动处理 JSON 序列化/反序列化和错误处理
 */

export const storage = {
  /**
   * 从 localStorage 获取值
   * @param key - 存储键
   * @param defaultValue - 默认值（键不存在时返回）
   * @returns 存储的值或默认值
   */
  get<T>(key: string, defaultValue: T | null): T | null {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : defaultValue
    } catch {
      return defaultValue
    }
  },

  /**
   * 设置值到 localStorage
   * @param key - 存储键
   * @param value - 要存储的值
   */
  set<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value))
  },

  /**
   * 从 localStorage 删除值
   * @param key - 存储键
   */
  remove(key: string): void {
    localStorage.removeItem(key)
  }
}
