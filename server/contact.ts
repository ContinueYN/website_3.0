// server/contact.ts
import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// 中间件
app.use(cors());
app.use(express.json());

// 邮件传输配置
const transporter = nodemailer.createTransport({
  host: 'smtp.qq.com', // QQ邮箱SMTP服务器
  port: 587, // 端口
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER, // QQ邮箱
    pass: process.env.EMAIL_PASS, // QQ邮箱授权码
  },
});

// 测试邮件传输配置
transporter.verify((error) => {
  if (error) {
    console.log('邮件配置错误:', error);
  } else {
    console.log('邮件服务器配置成功');
  }
});

// 联系表单接口
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // 验证必填字段
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: '所有字段都是必填的'
      });
    }

    // 邮箱验证
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: '邮箱格式不正确'
      });
    }

    // 邮件内容
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // 发送到自己的邮箱
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

    // 发送邮件
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

// 健康检查接口
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: '联系表单服务运行正常' });
});

app.listen(PORT, () => {
  console.log(`服务器运行在端口 ${PORT}`);
});