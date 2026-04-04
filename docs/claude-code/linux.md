# Linux 安装 Claude Code

在 Linux 系统上安装和配置 Claude Code。

## 系统要求

- Ubuntu 18.04+、CentOS 7+、Debian 9+ 等主流发行版
- Git 2.23+
- Node.js 18+

## 安装步骤

### 0. 安装 Git

```bash
# Ubuntu / Debian
sudo apt-get update && sudo apt-get install -y git

# CentOS / RHEL
sudo yum install -y git
```

### 1. 安装 Node.js

#### 方式一：使用 fnm

```bash
curl -fsSL https://fnm.vercel.app/install | bash
source ~/.bashrc
fnm install --lts
node -v
```

#### 方式二：使用 NodeSource

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### 2. 安装 Claude Code

```bash
npm install -g @anthropic-ai/claude-code
```

### 3. 配置环境变量

```bash
echo 'export ANTHROPIC_AUTH_TOKEN="sk-你的令牌"' >> ~/.bashrc
echo 'export ANTHROPIC_BASE_URL="https://superelite.studio/"' >> ~/.bashrc
source ~/.bashrc
```
