# 前后端 Docker 部署完整指南

## 架构说明

```
WSL 子系统
├── 前端服务 (Docker)
│   └── 端口: 5173
└── 后端服务 (Docker)
    └── 端口: 3001
```

## 前端部署步骤

### 第 1 步：进入前端项目目录

```bash
cd /mnt/e/Work-program/Website/website_3.0
```

### 第 2 步：启动前端服务

```bash
# 构建并启动容器
docker-compose up -d --build

# 查看容器状态
docker-compose ps

# 查看日志
docker-compose logs -f
```

**验证前端运行**：
```bash
# 测试访问
curl http://localhost:5173
```

在浏览器访问：`http://localhost:5173`

---

## 后端部署步骤

### 第 1 步：进入后端项目目录

```bash
cd /mnt/e/Work-program/Website/website_3.0/server
```

### 第 2 步：启动后端服务

```bash
# 构建并启动容器
docker-compose up -d --build

# 查看容器状态
docker-compose ps

# 查看日志
docker-compose logs -f
```

**验证后端运行**：
```bash
# 测试健康检查
curl http://localhost:3001/api/health

# 测试阅读时长接口
curl http://localhost:3001/api/reading-time
```

**应该返回**：
```json
{
  "status": "OK",
  "message": "服务运行正常",
  "totalReadingTime": 0
}
```

---

## 统一管理（可选）

如果想统一管理前后端，可以在项目根目录创建 `docker-compose.yml`：

```yaml
version: '3.8'

services:
  frontend:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: website_3.0
    ports:
      - "5173:5173"
    volumes:
      - ./src:/app/src
      - ./public:/app/public
    working_dir: /app
    command: npm run dev
    environment:
      - NODE_ENV=development
    restart: unless-stopped

  backend:
    build:
      context: ./server
      dockerfile: Dockerfile
    container_name: contact_backend
    ports:
      - "3001:3001"
    working_dir: /app
    environment:
      - NODE_ENV=production
      - PORT=3001
    restart: unless-stopped
```

**统一启动**：
```bash
# 在项目根目录执行
docker-compose up -d --build

# 查看所有服务状态
docker-compose ps

# 查看所有服务日志
docker-compose logs -f
```

---

## 验证前后端通信

### 测试前端调用后端

1. 打开浏览器访问：`http://localhost:5173`
2. 打开浏览器控制台（F12）
3. 访问博客页面
4. 查看控制台日志

**应该看到**：
```
Blog 页面已挂载，开始获取总阅读时长
正在获取总阅读时长... http://localhost:3001
响应状态: 200
获取到的数据: { totalReadingTime: 0, lastUpdated: "..." }
开始追踪阅读时长
```

### 测试阅读时长上报

1. 在博客页面停留 30 秒
2. 查看控制台日志

**应该看到**：
```
正在上报阅读时长: 30 秒
上报响应状态: 200
上报成功，新的总时长: 30
```

页面上的"总阅读时长"应该更新为"30秒"

---

## 常用命令

### 前端命令

```bash
# 进入前端目录
cd /mnt/e/Work-program/Website/website_3.0

# 启动前端
docker-compose up -d

# 查看前端日志
docker-compose logs -f

# 停止前端
docker-compose down

# 重启前端
docker-compose restart
```

### 后端命令

```bash
# 进入后端目录
cd /mnt/e/Work-program/Website/website_3.0/server

# 启动后端
docker-compose up -d

# 查看后端日志
docker-compose logs -f

# 停止后端
docker-compose down

# 重启后端
docker-compose restart
```

### 统一命令（如果使用统一 docker-compose）

```bash
# 在项目根目录
cd /mnt/e/Work-program/Website/website_3.0

# 启动所有服务
docker-compose up -d

# 查看所有服务日志
docker-compose logs -f

# 停止所有服务
docker-compose down

# 重启所有服务
docker-compose restart

# 只启动前端
docker-compose up -d frontend

# 只启动后端
docker-compose up -d backend
```

---

## 故障排查

### 问题 1：前端无法调用后端

**检查项**：
1. 后端容器是否在运行：`docker ps`
2. 后端日志是否有错误：`docker-compose logs`
3. 端口 3001 是否被占用：`netstat -tuln | grep 3001`

**解决方法**：
```bash
# 停止占用 3001 端口的进程
sudo kill -9 $(lsof -t -i:3001)

# 重启后端容器
cd /mnt/e/Work-program/Website/website_3.0/server
docker-compose restart
```

### 问题 2：阅读时长显示 0 秒

**检查项**：
1. 控制台是否有网络错误
2. 后端日志是否收到请求
3. 前端 API URL 是否正确

**解决方法**：
1. 检查 `.env.development` 文件
2. 确认 `VITE_API_URL=http://localhost:3001`
3. 重启前端容器

### 问题 3：容器无法启动

**检查项**：
1. 查看详细日志：`docker-compose logs`
2. 检查端口冲突：`netstat -tuln | grep 5173` 或 `netstat -tuln | grep 3001`

**解决方法**：
```bash
# 清除缓存重新构建
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

---

## 下一步：配置 frp

前后端都运行成功后，配置 frp 客户端：

1. 修改 `frpc.ini` 配置
2. 启动 frp 客户端
3. 配置 dynv6 域名解析

参考 `frpc.ini` 文件。

---

## 现在开始部署吧！

按照上面的步骤，先部署前端，再部署后端，最后验证通信是否正常。
