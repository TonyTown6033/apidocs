# Codex 使用教程

OpenAI 推出的编程 AI 工具。

## 前置条件

- Node.js 18+
- Git 2.23+

## 安装

```bash
npm install -g @openai/codex
```

## 配置

### macOS / Linux

```bash
export OPENAI_API_KEY="sk-你的令牌"
export OPENAI_BASE_URL="https://superelite.studio/v1"
```

### Windows PowerShell

```powershell
$env:OPENAI_API_KEY="sk-你的令牌"
$env:OPENAI_BASE_URL="https://superelite.studio/v1"
```

Windows 的 `$env:` 写法为临时配置，关闭终端后会失效。若要持久化，可参考 [Windows 安装](/claude-code/windows) 中的 `settings.json` 思路保存环境变量。

> Codex 使用 OpenAI 兼容接口，请确保地址末尾带 `/v1`。
