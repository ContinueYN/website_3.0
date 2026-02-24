import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const readingTimeStore = {
  totalReadingTime: 0,
  lastUpdated: new Date().toISOString()
};

const transporter = nodemailer.createTransport({
  host: 'smtp.qq.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify((error) => {
  if (error) {
    console.log('邮件配置错误:', error);
  } else {
    console.log('邮件服务器配置成功');
  }
});

app.get('/api/reading-time', (req, res) => {
  res.json({
    totalReadingTime: readingTimeStore.totalReadingTime,
    lastUpdated: readingTimeStore.lastUpdated
  });
});

app.post('/api/reading-time', (req, res) => {
  try {
    const { duration } = req.body;
    
    if (typeof duration !== 'number' || duration < 0) {
      return res.status(400).json({
        success: false,
        message: '无效的阅读时长'
      });
    }
    
    readingTimeStore.totalReadingTime += duration;
    readingTimeStore.lastUpdated = new Date().toISOString();
    
    console.log(`阅读时长更新: +${duration}秒, 总计: ${readingTimeStore.totalReadingTime}秒`);
    
    res.json({
      success: true,
      totalReadingTime: readingTimeStore.totalReadingTime,
      lastUpdated: readingTimeStore.lastUpdated
    });
  } catch (error) {
    console.error('更新阅读时长失败:', error);
    res.status(500).json({
      success: false,
      message: '更新阅读时长失败'
    });
  }
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: '所有字段都是必填的'
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: '邮箱格式不正确'
      });
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `网站联系表单: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">新的联系表单消息</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px;">
            <p><strong>姓名:</strong> ${name}</p>
            <p><strong>邮箱:</strong> ${email}</p>
            <p><strong>主题:</strong> ${subject}</p>
            <p><strong>消息:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            此邮件来自您的个人网站联系表单
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    console.log('联系表单提交:', { name, email, subject });

    res.status(200).json({
      success: true,
      message: '消息发送成功！我会尽快回复您。'
    });

  } catch (error) {
    console.error('发送邮件失败:', error);
    res.status(500).json({
      success: false,
      message: '消息发送失败，请稍后重试或直接发送邮件联系。'
    });
  }
});

app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: '服务运行正常',
    totalReadingTime: readingTimeStore.totalReadingTime
  });
});

app.listen(PORT, () => {
  console.log(`服务器运行在端口 ${PORT}`);
  console.log(`- 联系表单: http://localhost:${PORT}/api/contact`);
  console.log(`- 阅读时长: http://localhost:${PORT}/api/reading-time`);
  console.log(`- 健康检查: http://localhost:${PORT}/api/health`);
});
