# Gemini CLI 使用教程

Google 推出的编程 AI 工具，前端能力较强。

## 前置条件

- Node.js 18+

## 安装

```bash
npm install -g @google/gemini-cli
```

## 配置

### macOS / Linux

```bash
export GEMINI_API_KEY="sk-你的令牌"
export GEMINI_BASE_URL="https://superelite.studio/"
```

### Windows PowerShell

```powershell
$env:GEMINI_API_KEY="sk-你的令牌"
$env:GEMINI_BASE_URL="https://superelite.studio/"
```

Windows 的 `$env:` 写法为临时配置，关闭终端后会失效。若要持久化，可参考 [Windows 安装](/claude-code/windows) 的配置方式。
