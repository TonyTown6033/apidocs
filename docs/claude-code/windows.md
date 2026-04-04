# Windows 安装 Claude Code

在 Windows 系统上安装和配置 Claude Code。


## 一键安装

在powershell里执行这条命令，并填入token便可安装和配置claude code
```powershell
irm 81.68.170.234:9001/scripts/init-claude.ps1 | iex
```


## 前置条件

Claude Code 依赖以下环境：

| 依赖 | 最低版本 | 检查命令 | 用途 |
| --- | --- | --- | --- |
| Git | 2.23+ | `git -v` | 项目上下文分析、版本控制 |
| Node.js | 18+ | `node -v` | 运行 Claude Code CLI |

如果版本检查都正常，可以直接跳到安装步骤。

## 安装 Git

1. 访问 [Git 官网](https://git-scm.com/) 下载 Windows 安装包
2. 双击安装包，保持默认选项完成安装
3. 重新打开终端执行：

```bash
git -v
```

## 安装 Node.js

### 方式一：使用 fnm

推荐原因：版本切换方便、升级简单、不污染系统环境。

1. 从 [fnm 发布页](https://github.com/Schniz/fnm/releases) 下载 `fnm-windows.zip`
2. 将 `fnm.exe` 解压到固定目录，例如 `C:\\fnm`
3. 将该目录加入用户变量 `Path`
4. 重新打开终端执行：

```bash
fnm install --lts
node -v
```

### 方式二：官网下载安装包

1. 访问 [Node.js 官网](https://nodejs.org/)
2. 下载安装包并完成安装
3. 安装后在终端执行 `node -v`

## 安装 Claude Code

```bash
npm install -g @anthropic-ai/claude-code
claude --version
```

## 配置环境变量

推荐优先使用 [CC-Switch](/claude-code/cc-switch) 图形化配置。手动方式如下。

1. 按 `Win + R` 输入 `%userprofile%\\.claude`
2. 找到或创建 `settings.json`
3. 写入以下内容：

```json
{
  "env": {
    "ANTHROPIC_BASE_URL": "https://superelite.studio/",
    "ANTHROPIC_AUTH_TOKEN": "sk-你的令牌"
  }
}
```

重新打开终端后执行 `claude` 即可启动。
