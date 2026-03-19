import express from 'express';
import { sendContactEmail, validateContactForm } from '../services/contactService.js';

const router = express.Router();

router.post('/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    const validation = validateContactForm({ name, email, subject, message });
    if (!validation.valid) {
      return res.status(400).json({
        success: false,
        message: validation.error
      });
    }

    const result = await sendContactEmail({ name, email, subject, message });

    if (result.success) {
      res.status(200).json(result);
    } else {
      res.status(500).json(result);
    }
  } catch (error) {
    console.error('联系表单处理失败:', error);
    res.status(500).json({
      success: false,
      message: '消息发送失败，请稍后重试或直接发送邮件联系。'
    });
  }
});

export default router;
