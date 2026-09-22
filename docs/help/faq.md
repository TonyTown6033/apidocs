# 常见问题

使用过程中的常见问题及解决方案。

## 无法连接到服务

如果出现连接错误，可以先按下面步骤处理。

### Windows 修复步骤

1. 按 `Win + R`，输入 `cmd` 回车
2. 运行下面的命令：

```powershell
powershell -Command "$f='%USERPROFILE%\.claude.json';$j=Get-Content $f|ConvertFrom-Json;$j|Add-Member -NotePropertyName 'hasCompletedOnboarding' -NotePropertyValue $true -Force;$j|ConvertTo-Json|Set-Content $f"
```

3. 关闭并重新打开终端
4. 再次运行 `claude`

## 令牌无效或余额不足

- 检查令牌是否完整复制，通常应包含 `sk-` 前缀
- 登录平台检查账户余额
- 确认当前令牌分组是否支持你使用的模型

## 响应速度慢

- 检查网络连接是否稳定
- 在模型广场中比较模型价格与能力，尝试切换到更适合当前任务的模型
- 减少单次请求的上下文长度

## 推荐配置

建议在 Claude Code 的配置文件 `settings.json` 中补充以下环境变量：

```json
{
  "env": {
    "ANTHROPIC_BASE_URL": "https://superelite.studio",
    "ANTHROPIC_AUTH_TOKEN": "sk-你的令牌",
    "CLAUDE_CODE_ATTRIBUTION_HEADER": "0",
    "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC": "1"
  }
}
```

变量含义：

- `CLAUDE_CODE_ATTRIBUTION_HEADER=0`：关闭请求归属头，避免中转时出现额外问题
- `CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1`：禁用非必要网络请求，减少额外流量消耗

使用 CC-Switch 的用户通常无需手动编辑这个文件。
