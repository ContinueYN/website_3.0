import express from 'express';
import { getAllArticlesService, getArticleByIdService, getArticlesByCategoryService } from '../services/articleService.js';

const router = express.Router();

router.get('/articles', async (req, res) => {
  const result = await getAllArticlesService();
  if (result.success) {
    res.json(result.data);
  } else {
    res.status(500).json({ success: false, message: result.message });
  }
});

router.get('/articles/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ success: false, message: '无效的文章ID' });
  }

  const result = await getArticleByIdService(id);
  if (result.success) {
    res.json(result.data);
  } else {
    res.status(404).json({ success: false, message: result.message });
  }
});

router.get('/articles/category/:category', async (req, res) => {
  const category = req.params.category;
  const result = await getArticlesByCategoryService(category);
  if (result.success) {
    res.json(result.data);
  } else {
    res.status(500).json({ success: false, message: result.message });
  }
});

export default router;
