import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

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

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function validateContactForm(data: ContactFormData): { valid: boolean; error?: string } {
  const { name, email, subject, message } = data;

  if (!name || !email || !subject || !message) {
    return { valid: false, error: '所有字段都是必填的' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { valid: false, error: '邮箱格式不正确' };
  }

  return { valid: true };
}

export async function sendContactEmail(data: ContactFormData): Promise<{ success: boolean; message: string }> {
  try {
    const { name, email, subject, message } = data;

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

    return { success: true, message: '消息发送成功！我会尽快回复您。' };
  } catch (error) {
    console.error('发送邮件失败:', error);
    return { success: false, message: '消息发送失败，请稍后重试或直接发送邮件联系。' };
  }
}
