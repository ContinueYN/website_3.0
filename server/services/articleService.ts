import { getAllArticles, getArticleById, getArticlesByCategory } from '../database/articles.js';

export async function getAllArticlesService() {
  try {
    const articles = await getAllArticles();
    return { success: true, data: articles };
  } catch (error) {
    console.error('获取文章失败:', error);
    return { success: false, message: '获取文章失败' };
  }
}

export async function getArticleByIdService(id: number) {
  try {
    const article = await getArticleById(id);
    if (!article) {
      return { success: false, message: '文章不存在' };
    }
    return { success: true, data: article };
  } catch (error) {
    console.error('获取文章失败:', error);
    return { success: false, message: '获取文章失败' };
  }
}

export async function getArticlesByCategoryService(category: string) {
  try {
    const articles = await getArticlesByCategory(category);
    return { success: true, data: articles };
  } catch (error) {
    console.error('获取分类文章失败:', error);
    return { success: false, message: '获取分类文章失败' };
  }
}
