# Gemini CLI 使用教程

Google 推出的命令行 AI 工具。

> 当前官网模型广场没有公开 Gemini 模型或 Gemini 端点。以下配置仅供平台重新开放兼容能力后参考；使用前请先在[模型广场](https://superelite.studio/pricing)确认支持情况。

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
export GEMINI_BASE_URL="https://superelite.studio"
```

### Windows PowerShell

```powershell
$env:GEMINI_API_KEY="sk-你的令牌"
$env:GEMINI_BASE_URL="https://superelite.studio"
```

Windows 的 `$env:` 写法为临时配置，关闭终端后会失效。若要持久化，可参考 [Windows 安装](/claude-code/windows) 的配置方式。
