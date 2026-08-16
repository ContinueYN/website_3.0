# website_3.0

一个现代化、响应式的个人/作品集网站，基于 Vue 3 + TypeScript + Vite 构建，具有优雅的视觉效果和流畅的用户体验。

## 功能特点

- ✨ **现代化界面**：采用简洁、优雅的设计风格
- 🎨 **主题切换**：支持深色/浅色模式自动切换
- 📱 **响应式布局**：适配桌面、平板和移动设备
- 🎯 **粒子背景**：动态粒子效果，增强视觉体验
- 📈 **滚动动画**：平滑的滚动触发动画效果
- 📋 **项目展示**：作品集展示区域
- 📞 **联系表单**：集成 Web3Forms，邮件直达收件箱（无需后端）
- 🌐 **单页应用**：流畅的页面切换体验

## 技术栈

### 前端
- **框架**：Vue 3.5.22 (Composition API)
- **语言**：TypeScript 5.9.0
- **构建工具**：Vite 7.1.7
- **样式**：原生 CSS + CSS 变量
- **动画**：AOS (Animate On Scroll) 2.3.4

## 项目结构

```
website_3.0/
├── public/            # 公共静态资源
├── src/               # 源代码
│   ├── assets/        # 静态资源
│   │   ├── audio/     # 音频文件
│   │   ├── images/    # 图片资源
│   │   └── videos/    # 视频资源
│   ├── components/    # Vue 组件
│   ├── styles/        # 样式文件
│   ├── App.vue        # 应用根组件
│   └── main.ts        # 应用入口
├── .gitignore         # Git 忽略文件
├── package.json       # 项目配置
├── tsconfig.json      # TypeScript 配置
└── vite.config.ts     # Vite 配置
```

## 核心组件

| 组件 | 功能 | 位置 |
|------|------|------|
| Header | 导航栏和主题切换 | `src/components/Header.vue` |
| Hero | 首页展示 | `src/components/Hero.vue` |
| About | 关于页面 | `src/components/About.vue` |
| Skills | 技能展示 | `src/components/Skills.vue` |
| Projects | 项目展示 | `src/components/Projects.vue` |
| Contact | 联系表单 | `src/components/Contact.vue` |
| Footer | 页脚信息 | `src/components/Footer.vue` |
| ParticleBackground | 粒子背景效果 | `src/components/ParticleBackground.vue` |

## 开发环境设置

### 前置要求
- **Node.js**：v20.19.0 或 v22.12.0+
- **npm**：v10.0.0+ 或 **yarn**：v1.22.0+

### IDE 推荐
- **VS Code**：推荐的代码编辑器
  - 插件：Vue (Official)、TypeScript、ESLint

### 浏览器推荐
- **Chromium 浏览器**（Chrome、Edge、Brave 等）
  - 插件：Vue.js devtools
  - 启用：Chrome DevTools 中的自定义对象格式化器
- **Firefox**
  - 插件：Vue.js devtools
  - 启用：Firefox DevTools 中的自定义对象格式化器

## 安装与运行

### 安装依赖

```bash
# 使用 npm
npm install

# 使用 yarn
yarn install
```

### 开发模式运行

```bash
# 使用 npm
npm run dev

# 使用 yarn
yarn dev
```

### 类型检查

```bash
# 使用 npm
npm run type-check

# 使用 yarn
yarn type-check
```

### 生产构建

```bash
# 使用 npm
npm run build

# 使用 yarn
yarn build
```

### 预览生产构建

```bash
# 使用 npm
npm run preview

# 使用 yarn
yarn preview
```

## 部署指南

### 前端部署

1. 构建生产版本：
   ```bash
   npm run build
   ```

2. 将 `dist` 目录部署到静态网站托管服务，如：
   - GitHub Pages（本项目使用 GitHub Actions 自动构建部署）
   - Vercel
   - Netlify
   - AWS S3 + CloudFront

> 本项目为纯静态站点（GitHub Pages），联系表单通过 Web3Forms 服务直发邮件，无需自建后端。

## 开发规范

### 代码风格
- 使用 TypeScript 进行类型检查
- 遵循 Vue 3 Composition API 最佳实践
- 组件命名使用 PascalCase
- 文件命名使用 kebab-case

### 提交规范
- 使用语义化提交信息
- 提交前运行类型检查

## 性能优化

- **代码分割**：Vite 自动代码分割
- **图片优化**：使用适当尺寸和格式的图片
- **懒加载**：组件和资源懒加载
- **缓存策略**：合理的浏览器缓存设置

## 浏览器兼容性

- Chrome (最新 2 个版本)
- Firefox (最新 2 个版本)
- Safari (最新 2 个版本)
- Edge (最新 2 个版本)

## 故障排除

### 常见问题

1. **依赖安装失败**：
   - 确保 Node.js 版本正确
   - 清除 npm 缓存：`npm cache clean --force`

2. **构建失败**：
   - 运行类型检查：`npm run type-check`
   - 检查控制台错误信息

3. **开发服务器启动失败**：
   - 检查端口是否被占用
   - 查看终端错误信息

## 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目！

## 更新日志

### v1.0.0
- 初始项目创建
- 实现基本布局和组件
- 添加主题切换功能
- 集成粒子背景效果
- 集成 Web3Forms 联系表单（静态部署，无需后端）

---

**享受构建精彩网站的过程！** 🚀
