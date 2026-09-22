# 模型与价格

本页根据 [eliteToken 模型广场](https://superelite.studio/pricing) 的实时数据整理。价格可能随渠道和平台策略变化，实际扣费请始终以模型广场及使用日志为准。

## 接口与分组

当前模型广场公开的可用分组：

- `default`：默认分组
- `vip`：vip分组

当前兼容端点：

| 类型 | 方法 | 路径 | 基础地址 |
| --- | --- | --- | --- |
| anthropic | `POST` | `/v1/messages` | `https://superelite.studio` |
| openai | `POST` | `/v1/chat/completions` | `https://superelite.studio` |

> OpenAI 兼容客户端通常将 Base URL 设置为 `https://superelite.studio/v1`；Claude Code 使用 `ANTHROPIC_BASE_URL=https://superelite.studio`。

## 当前模型价格

下表单位均为 **人民币 / 1M Tokens**。“—”表示官网当前数据未提供该价格项。

### Claude

| 模型 | 输入 | 输出 | 缓存读取 | 缓存创建 | 上下文/能力 | 支持端点 |
| --- | ---: | ---: | ---: | ---: | --- | --- |
| `claude-sonnet-4-6` | ¥0.2700 | ¥1.3500 | ¥0.0270 | ¥0.3375 | Reasoning,Tools,Files,Vision,1M | `anthropic`、`openai` |
| `claude-opus-4-7` | ¥1.5000 | ¥7.5000 | ¥0.1500 | ¥1.9200 | Reasoning,Tools,Files,Vision,1M | `anthropic`、`openai` |
| `claude-sonnet-5` | ¥0.4320 | ¥2.1600 | — | — | Reasoning,Tools,Files,Vision,1M | `anthropic`、`openai` |
| `claude-fable-5-1` | ¥3.0000 | ¥15.0000 | — | — | Reasoning,Tools,Files,Vision,1M | `anthropic`、`openai` |
| `claude-haiku-4-5` | ¥0.1800 | ¥0.9000 | ¥0.0180 | ¥1.1077 | Reasoning,Tools,Files,Vision,200K | `anthropic`、`openai` |
| `claude-opus-4-8` | ¥0.1275 | ¥0.6375 | ¥0.0102 | ¥0.1632 | Reasoning,Tools,Files,Vision,1M | `anthropic`、`openai` |
| `claude-opus-4-6` | ¥1.5000 | ¥7.5000 | ¥0.1200 | ¥1.9200 | Reasoning,Tools,Files,Vision,1M | `anthropic`、`openai` |
| `claude-fable-5` | ¥0.9000 | ¥5.5500 | ¥0.0900 | ¥1.1077 | Reasoning,Tools,Files,Vision,1M | `anthropic`、`openai` |
| `claude-opus-5` | ¥1.5000 | ¥7.5000 | — | — | Reasoning,Tools,Files,Vision,1M | `anthropic`、`openai` |

### OpenAI GPT

| 模型 | 输入 | 输出 | 缓存读取 | 缓存创建 | 上下文/能力 | 支持端点 |
| --- | ---: | ---: | ---: | ---: | --- | --- |
| `gpt-5.6-sol` | ¥0.3000 | ¥2.4000 | ¥0.0300 | ¥0.3000 | Reasoning,Tools,Files,Vision,1.1M | `openai`、`anthropic` |
| `gpt-5.6-luna` | ¥0.0120 | ¥0.0960 | ¥0.0012 | ¥0.0120 | Reasoning,Tools,Files,Vision,1.1M | `openai`、`anthropic` |
| `gpt-5.5` | ¥0.0375 | ¥0.3000 | ¥0.0037 | ¥0.0375 | Reasoning,Tools,Files,Vision,1.1M | `openai`、`anthropic` |
| `gpt-5.6` | ¥0.3000 | ¥2.4000 | ¥0.0300 | — | Reasoning,Tools,Files,Vision,1.1M | `openai` |
| `gpt-6-astra` | ¥2.0000 | ¥10.0000 | — | — | Reasoning,Tools,Files,Vision,1.1M | `anthropic`、`openai` |
| `gpt-5.6-terra` | ¥0.3000 | ¥2.4000 | ¥0.0400 | ¥0.4000 | Reasoning,Tools,Files,Vision,1.1M | `openai`、`anthropic` |

### DeepSeek

| 模型 | 输入 | 输出 | 缓存读取 | 缓存创建 | 上下文/能力 | 支持端点 |
| --- | ---: | ---: | ---: | ---: | --- | --- |
| `deepseek-v4-pro` | ¥0.3480 | ¥0.6960 | ¥0.0029 | ¥0.0290 | Reasoning,Tools,Open Weights,1M | `openai` |
| `deepseek-flash` | ¥0.1500 | ¥0.6000 | ¥0.0030 | — | Reasoning,Tools,Files,Open Weights,Vision,1M | `openai` |

### 图像

| 模型 | 输入 | 输出 | 缓存读取 | 缓存创建 | 上下文/能力 | 支持端点 |
| --- | ---: | ---: | ---: | ---: | --- | --- |
| `gpt-image-2` | ¥1.0000 | ¥6.0000 | ¥0.2500 | — | Files,Vision | `openai` |

## 计费说明

- 以上均为按量计费模型，输入和输出分别计费。
- 缓存读取和缓存创建只在模型及请求实际支持缓存时产生。
- 模型名称、上下文长度、端点支持和价格可能动态调整。
- 账户的最终消费记录可在控制台的“使用日志”查看。
- 官网价格数据版本：`a42d372ccf0b5dd13ecf71203521f9d2`。
