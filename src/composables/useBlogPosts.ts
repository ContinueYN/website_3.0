// 导入 Vue 的响应式 API 和计算属性
import { ref, computed } from 'vue'
// 导入博客文章数据
import blogPostsData from '../data/blogPosts.json'

export function useBlogPosts() {
  // 创建响应式博客文章列表，初始值为导入的 JSON 数据
  const blogPosts = ref(blogPostsData)

  // 计算属性：获取所有唯一的文章分类
  const uniqueCategories = computed(() => {
    // 使用 Set 去重，然后转换为数组
    const categories = new Set(blogPosts.value.map((post: { category: string }) => post.category))
    return Array.from(categories)
  })

  // 根据 ID 获取单篇文章
  const getPostById = (id: number) => {
  return blogPosts.value.find((post: any) => post.id === id)
  }

  // 获取当前文章的上一篇
  const getPrevPost = (currentId: number) => {
    const index = blogPosts.value.findIndex(post => post.id === currentId)
    // 如果不是第一篇，返回上一篇；否则返回 null
    return index > 0 ? blogPosts.value[index - 1] : null
  }

  // 获取当前文章的下一篇
  const getNextPost = (currentId: number) => {
    const index = blogPosts.value.findIndex(post => post.id === currentId)
    // 如果不是最后一篇，返回下一篇；否则返回 null
    return index < blogPosts.value.length - 1 ? blogPosts.value[index + 1] : null
  }

  // 根据分类筛选文章
  const filterByCategory = (category: string) => {
    // 如果选择"全部"，返回所有文章
    if (category === '全部') {
      return blogPosts.value
    }
    // 否则返回指定分类的文章
    return blogPosts.value.filter(post => post.category === category)
  }

  // 返回所有博客相关的状态和方法，供组件使用
  return {
    blogPosts,
    uniqueCategories,
    getPostById,
    getPrevPost,
    getNextPost,
    filterByCategory
  }
}
