# Docker 部署指南

## 前置要求

1. WSL2 已安装并正常运行
2. 1panel 已安装 Docker
3. 项目文件已在 WSL 中可访问（`/mnt/e/Work-program/Website/website_3.0`）

## 部署步骤

### 第一步：检查 Docker 环境

在 WSL 终端中执行：

```bash
# 检查 Docker 是否安装
docker --version

# 检查 Docker Compose 是否安装
docker-compose --version
```

如果未安装，在 1panel 中安装 Docker。

### 第二步：进入项目目录

```bash
# 进入项目目录
cd /mnt/e/Work-program/Website/website_3.0

# 查看当前目录
pwd
# 应该显示：/mnt/e/Work-program/Website/website_3.0
```

### 第三步：构建并启动服务

```bash
# 构建并启动容器（后台运行）
docker-compose up -d --build

# 查看容器状态
docker-compose ps

# 查看容器日志
docker-compose logs -f
```

### 第四步：验证服务运行

```bash
# 检查容器是否运行
docker ps

# 应该看到 website_3.0 容器正在运行

# 测试访问
curl http://localhost:5173
```

### 第五步：配置 Vite 开发服务器

如果访问失败，修改 `vite.config.ts`：

```typescript
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 5173
  }
})
```

然后重启容器：

```bash
# 停止容器
docker-compose down

# 重新启动
docker-compose up -d
```

## 常用命令

### 查看日志

```bash
# 实时查看日志
docker-compose logs -f

# 查看最近 100 行日志
docker-compose logs --tail=100
```

### 停止服务

```bash
# 停止并删除容器
docker-compose down

# 停止但保留容器
docker-compose stop
```

### 重启服务

```bash
# 重启容器
docker-compose restart

# 重新构建并启动
docker-compose up -d --build
```

### 进入容器

```bash
# 进入容器内部
docker-compose exec website bash

# 在容器内执行命令
npm run dev
```

### 清理资源

```bash
# 停止并删除容器、网络、镜像
docker-compose down --rmi all

# 删除未使用的镜像
docker image prune -a

# 删除未使用的卷
docker volume prune
```

## 故障排查

### 问题 1：容器无法启动

```bash
# 查看详细日志
docker-compose logs

# 检查端口是否被占用
netstat -tuln | grep 5173

# 如果被占用，停止占用进程
sudo kill -9 $(lsof -t -i:5173)
```

### 问题 2：文件修改不生效

```bash
# 停止容器
docker-compose down

# 重新构建并启动
docker-compose up -d --build
```

### 问题 3：无法访问 localhost:5173

1. 检查 Vite 配置是否设置了 `host: '0.0.0.0'`
2. 检查 Windows 防火墙是否允许 5173 端口
3. 检查 WSL2 网络配置

### 问题 4：npm install 失败

```bash
# 清除缓存重新构建
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

## 下一步：配置 frp

容器运行成功后，配置 frp 客户端：

1. 在 WSL 中安装 frp 客户端
2. 创建 `frpc.ini` 配置文件
3. 启动 frp 客户端
4. 配置 dynv6 域名解析

参考 `frp-config.md` 文件。
