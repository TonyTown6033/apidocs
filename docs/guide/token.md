# 创建令牌

生成 API Key 用于访问服务。

> 令牌是访问 API 的凭证，请妥善保管，不要泄露给他人。

## 添加令牌

1. 登录后在侧边栏点击“令牌管理”，然后点击“添加令牌”
2. 根据需要选择令牌分组；当前网站显示 `default` 和 `vip` 分组
3. 设置令牌名称、额度或有效期（如页面提供这些选项）
4. 创建完成后立即复制并保存令牌；令牌属于敏感凭证，不要提交到 Git 或发送给他人

## 分组选择建议

- 需要 Claude Code 时，确认模型支持 Anthropic 端点（`/v1/messages`）
- 需要 Codex 或其他 OpenAI 兼容客户端时，使用 OpenAI 端点（`/v1/chat/completions`）
- 当前网站模型页同时展示 Anthropic、OpenAI、DeepSeek 等供应商及不同端点类型

不同分组支持的模型和价格不同，先对照[价格说明](/guide/pricing)再创建更稳妥。
