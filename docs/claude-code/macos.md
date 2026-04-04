# macOS 安装 Claude Code

在 macOS 系统上安装和配置 Claude Code。

## 系统要求

- macOS 10.15 或更高版本
- Git
- Node.js 18+

macOS 首次运行 `git` 时通常会提示安装 Xcode Command Line Tools，按提示完成即可。

## 安装步骤

### 1. 安装 Node.js

#### 方式一：使用 fnm

```bash
curl -fsSL https://fnm.vercel.app/install | bash
fnm install --lts
node -v
```

#### 方式二：使用 Homebrew

```bash
brew install node
```

### 2. 安装 Claude Code

```bash
npm install -g @anthropic-ai/claude-code
```

### 3. 配置环境变量

Zsh 用户：

```bash
echo 'export ANTHROPIC_AUTH_TOKEN="sk-你的令牌"' >> ~/.zshrc
echo 'export ANTHROPIC_BASE_URL="https://superelite.studio/"' >> ~/.zshrc
source ~/.zshrc
```

Bash 用户：

```bash
echo 'export ANTHROPIC_AUTH_TOKEN="sk-你的令牌"' >> ~/.bash_profile
echo 'export ANTHROPIC_BASE_URL="https://superelite.studio/"' >> ~/.bash_profile
source ~/.bash_profile
```
