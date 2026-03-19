# 后端重构说明

## 项目结构

```
server/
├── database/
│   ├── connection.ts      # 数据库连接配置
│   ├── schema.sql         # 数据库表结构
│   └── articles.ts        # 文章数据操作
├── data/
│   └── blogPosts.json     # 文章数据源（从前端移至此处）
├── services/
│   ├── contactService.ts      # 联系表单服务
│   ├── readingTimeService.ts  # 阅读时长服务
│   └── articleService.ts      # 文章服务
├── routes/
│   ├── contactRoutes.ts       # 联系表单路由
│   ├── readingTimeRoutes.ts   # 阅读时长路由
│   └── articleRoutes.ts       # 文章路由
├── index.ts              # 主入口文件
├── contact.ts            # 原始文件（已废弃）
├── Dockerfile            # Docker镜像构建配置
├── docker-compose.yml    # Docker Compose编排配置
├── .env.example         # 环境变量示例
├── package.json
├── tsconfig.json
└── REFACTOR.md          # 重构说明文档
```

## 数据库配置

### PostgreSQL 连接信息

- 主机: 127.0.0.1
- 端口: 5432
- 用户名:  website\_db
- 密码: Yn123...
- 数据库名: website\_db

### 数据库表结构

#### articles (文章表)

- id: 主键
- title: 文章标题
- excerpt: 文章摘要
- date: 发布日期
- category: 分类
- reading\_time: 阅读时长（分钟）
- content: 文章内容
- created\_at: 创建时间
- updated\_at: 更新时间

#### tags (标签表)

- id: 主键
- name: 标签名称
- created\_at: 创建时间

#### article\_tags (文章标签关联表)

- article\_id: 文章ID
- tag\_id: 标签ID

## API 接口

### 文章相关

- `GET /api/articles` - 获取所有文章
- `GET /api/articles/:id` - 根据ID获取文章
- `GET /api/articles/category/:category` - 根据分类获取文章

### 联系表单

- `POST /api/contact` - 提交联系表单

### 阅读时长

- `GET /api/reading-time` - 获取阅读时长
- `POST /api/reading-time` - 更新阅读时长

### 健康检查

- `GET /api/health` - 健康检查

## 使用方法

### 1. 本地开发

#### 创建数据库
```sql
CREATE DATABASE website_db;
```

#### 配置环境变量
复制 `.env.example` 为 `.env`，并配置邮箱信息：
```env
PORT=3001
EMAIL_USER=your_email@qq.com
EMAIL_PASS=your_email_password
```

#### 安装依赖
```bash
npm install
```

#### 启动服务
```bash
npm run dev
```

服务启动时会自动：
1. 连接数据库
2. 创建表结构
3. 迁移文章数据（从 data/blogPosts.json）

### 2. Docker部署

#### 配置环境变量
```bash
cp .env.example .env
```

编辑 `.env` 文件：
```env
PORT=3001
EMAIL_USER=your_email@qq.com
EMAIL_PASS=your_email_password
```

#### 使用Docker Compose启动
```bash
docker-compose up -d
```

这将启动两个服务：
- `postgres`: PostgreSQL数据库服务
- `backend`: 后端API服务

#### 查看日志
```bash
docker-compose logs -f backend
```

#### 停止服务
```bash
docker-compose down
```

#### 停止服务并删除数据卷
```bash
docker-compose down -v
```

### 3. 单独构建Docker镜像

```bash
docker build -t contact-backend .
docker run -p 3001:3001 --env-file .env contact-backend
```

注意：单独运行时需要确保PostgreSQL数据库已启动并可访问。

## 重构亮点

1. **数据库集成**: 将JSON文章数据迁移到PostgreSQL数据库
2. **模块化设计**: 将不同功能抽离到独立的service和route文件
3. **统一入口**: 使用index.ts作为统一入口文件
4. **自动迁移**: 服务启动时自动创建表并迁移数据
5. **类型安全**: 使用TypeScript确保类型安全
6. **错误处理**: 完善的错误处理和日志记录
7. **Docker支持**: 完整的Docker部署方案，包含多阶段构建
8. **数据安全**: 将数据从前端移至后端，提高安全性
9. **容器编排**: 使用Docker Compose管理多容器应用
10. **健康检查**: 配置数据库健康检查，确保服务依赖正确启动

## 依赖包

- express: Web框架
- pg: PostgreSQL客户端
- cors: 跨域支持
- nodemailer: 邮件发送
- dotenv: 环境变量管理
- typescript: TypeScript支持

