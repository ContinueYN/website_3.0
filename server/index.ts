import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDatabase, initDatabase } from './database/connection.js';
import { migrateArticles } from './database/articles.js';
import contactRoutes from './routes/contactRoutes.js';
import readingTimeRoutes from './routes/readingTimeRoutes.js';
import articleRoutes from './routes/articleRoutes.js';
import { getReadingTime } from './services/readingTimeService.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/api', contactRoutes);
app.use('/api', readingTimeRoutes);
app.use('/api', articleRoutes);

app.get('/api/health', (req, res) => {
  const readingTime = getReadingTime();
  res.json({
    status: 'OK',
    message: '服务运行正常',
    totalReadingTime: readingTime.totalReadingTime
  });
});

async function startServer() {
  try {
    console.log('正在连接数据库...');
    const connected = await connectDatabase();
    if (!connected) {
      console.error('数据库连接失败，服务器无法启动');
      process.exit(1);
    }

    console.log('正在初始化数据库...');
    const initialized = await initDatabase();
    if (!initialized) {
      console.error('数据库初始化失败，服务器无法启动');
      process.exit(1);
    }

    console.log('正在迁移文章数据...');
    const migrated = await migrateArticles();
    if (!migrated) {
      console.error('文章数据迁移失败，服务器无法启动');
      process.exit(1);
    }

    app.listen(PORT, () => {
      console.log(`服务器运行在端口 ${PORT}`);
      console.log(`- 联系表单: http://localhost:${PORT}/api/contact`);
      console.log(`- 阅读时长: http://localhost:${PORT}/api/reading-time`);
      console.log(`- 文章列表: http://localhost:${PORT}/api/articles`);
      console.log(`- 文章详情: http://localhost:${PORT}/api/articles/:id`);
      console.log(`- 分类文章: http://localhost:${PORT}/api/articles/category/:category`);
      console.log(`- 健康检查: http://localhost:${PORT}/api/health`);
    });
  } catch (error) {
    console.error('服务器启动失败:', error);
    process.exit(1);
  }
}

startServer();

process.on('SIGINT', async () => {
  console.log('\n正在关闭服务器...');
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log('\n正在关闭服务器...');
  process.exit(0);
});
