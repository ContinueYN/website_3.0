import express from 'express';
import { getReadingTime, updateReadingTime } from '../services/readingTimeService.js';

const router = express.Router();

router.get('/reading-time', (req, res) => {
  const data = getReadingTime();
  res.json(data);
});

router.post('/reading-time', (req, res) => {
  try {
    const { duration } = req.body;
    const result = updateReadingTime(duration);

    if (result.success) {
      res.json({
        success: true,
        ...result.data
      });
    } else {
      res.status(400).json({
        success: false,
        message: result.message
      });
    }
  } catch (error) {
    console.error('更新阅读时长失败:', error);
    res.status(500).json({
      success: false,
      message: '更新阅读时长失败'
    });
  }
});

export default router;
