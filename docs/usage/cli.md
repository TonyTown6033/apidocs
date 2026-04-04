# 命令行使用

在终端中使用 Claude Code。

## 启动方式

1. 在项目目录中打开终端
2. 输入 `claude` 启动
3. 首次启动选择 `Yes` 信任目录

## 常用命令

### 基础命令

| 命令 | 功能说明 |
| --- | --- |
| `claude` | 在当前目录启动交互式 REPL |
| `claude "解释这个项目"` | 启动 REPL 并附带初始问题 |
| `claude -p "解释这个函数"` | 一次性问答，输出后退出 |
| `cat logs.txt \| claude -p "帮我总结错误"` | 通过管道输入内容做分析 |
| `claude update` | 更新 Claude Code CLI |

### 会话管理

| 命令 | 功能说明 |
| --- | --- |
| `claude -c` | 继续当前目录最近一次会话 |
| `claude -c -p "检查类型错误"` | 在最近会话上下文中执行一次性请求 |
| `claude -r "abc123" "把这个 PR 完成"` | 通过会话 ID 恢复指定会话 |
| `claude --continue` | 载入当前目录最近的一次会话 |
| `claude --resume abc123 "继续修这个 Bug"` | 在任意目录恢复指定会话 |

### 高级选项

| 命令 | 功能说明 |
| --- | --- |
| `claude mcp` | 管理和配置 MCP 服务器 |
| `claude --add-dir ../apps ../lib` | 添加额外可访问目录 |
| `claude --model sonnet` | 指定会话模型 |
| `claude --verbose` | 打开详细日志 |
| `claude --append-system-prompt "始终使用 TypeScript"` | 追加自定义系统规则 |
| `claude -p "生成接口文档" --output-format json` | 以 JSON 输出，方便脚本处理 |

> `--dangerously-skip-permissions` 可跳过权限确认，但风险较高，仅建议在完全信任的环境中使用。
