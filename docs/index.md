---
layout: doc
title: 欢迎使用 eliteToken
---

# 欢迎使用 eliteToken 

统一的大模型接口网关。通过 OpenAI 与 Anthropic 兼容端点，为 Claude Code、Codex 等客户端提供模型接入。

[访问官网](https://superelite.studio/) 查看平台入口，首次使用建议先看[注册与充值](/guide/register)和[创建令牌](/guide/token)。

## 官方网站与接口

- 官网：`https://superelite.studio/`
- OpenAI 兼容 Base URL：`https://superelite.studio/v1`
- Anthropic Base URL：`https://superelite.studio`

eliteToken 是一个 AI API 网关，为开发者统一接入多种模型。官网当前展示的接口包括：

- `/v1/chat/completions`
- `/v1/responses`
- `/v1/responses/compact`
- `/v1/messages`
- `/v1beta/models`
- `/v1/embeddings`
- `/v1/rerank`
- `/v1/images/generations`
- `/v1/images/edits`
- `/v1/images/variations`
- `/v1/audio/speech`
- `/v1/audio/transcriptions`
- `/v1/audio/translations`

具体模型是否支持某个端点，请以[模型广场](https://superelite.studio/pricing)为准。

## 快速上手

- 注册账户：使用邮箱完成注册和验证。
- 创建令牌：生成专属 API Key，连接本地开发环境。
- 安装配置：覆盖 Windows、macOS、Linux 三个平台。
- 模型计费：查看模型特点、分组和按量付费说明。

## 为什么选择 AI 编程助手

- 理解项目上下文：不只是补全代码，还能结合代码库给出架构建议。
- 自动生成代码：根据自然语言需求产出可维护代码。
- 智能修复 Bug：更快定位问题并给出修复方案。
- 代码重构优化：识别技术债和冗余，持续改善质量与性能。

## 主流 AI 编程工具

| 工具 | 特点 | 适用场景 |
| --- | --- | --- |
| Claude Code | 理解项目能力强 | 复杂项目、代码重构 |
| Codex (GPT) | OpenAI 出品，任务完成细致 | 通用编程、代码生成 |
| Gemini CLI | 是否可用取决于平台当前模型与端点 | 使用前先查看模型广场 |

## 什么是中转站

中转站是一种 API 代理服务，帮助你统一接入多种 AI 模型，无需分别注册各个平台。

建议新用户按下面顺序完成配置：

1. [注册与充值](/guide/register)
2. [创建令牌](/guide/token)
3. [选择安装方式](/claude-code/windows)
4. [查看常见问题](/help/faq)
