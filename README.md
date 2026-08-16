# Portfolio 3.0 · 余诺

在线地址：<https://www.continueyn.site>

个人作品集与博客。纯静态单页应用，无后端，托管在 GitHub Pages 上——push 到 main 即自动构建发布。

Vue 3 · TypeScript · Vite · GSAP · three.js / three-vrm · AOS

## 站点构成

- **首页**：滚动叙事（GSAP ScrollTrigger 驱动的横向项目长廊），生成艺术背景，页脚驻留一位会呼吸、会眨眼、可拖拽的 VRM 3D 角色，深浅双主题实时切换
- **博客**：分类筛选、文章目录随滚动高亮、上下篇导航，文章数据在 `src/data/blogPosts.json`
- **联系**：Web3Forms 直达邮箱，含 honeypot 反垃圾——静态部署下不需要自建任何后端

## 工程上值得一看的地方

- **纯静态架构的补链路**：砍掉后端后，用 CSP（meta 标签方案，GitHub Pages 设不了响应头）+ 表单托管服务 + GitHub Actions 组合出完整的安全与部署链路
- **3D 资源调度**：VRM 模型在页面加载时以低优先级并行预取（fetch 不参与 load 事件，不拖长首屏），滚到页脚时直接消费缓存；WebGL 场景按视口懒初始化，卸载时完整释放上下文、几何体与事件监听
- **性能卫生**：路由级代码分割；rAF 循环、事件监听、Observer、GSAP tween 在组件卸载时全量销毁；声纹动画随音乐播放状态启停
- **部署**：`.github/workflows/deploy.yml`，push 到 main → 构建 → 发布 gh-pages 分支

## 快速开始

Node.js ≥ 20.19（或 ≥ 22.12）：

```bash
npm install
npm run dev     # 开发服务器
npm run build   # 产物输出到 dist/
```

`scripts/optimize-images.js` 为图片压缩脚本，需要时手动运行。

## 源码导览

```
src/
├── components/   # Header / Hero / About / Skills / Projects / Contact / Footer / ArtBackground / VRoidViewer
├── views/        # Home / Blog / BlogPost / NotFound
├── composables/  # useTheme、useBlogPosts
├── utils/        # storage、vrmPreload（模型预取）
├── data/         # 博客文章数据
└── styles/       # 全局样式与设计令牌
```

## 关于

[余诺](https://github.com/ContinueYN)，AI 应用全栈开发者。本仓库为个人作品，页面内容版权归作者所有。
