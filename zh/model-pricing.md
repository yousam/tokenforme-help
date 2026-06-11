---
lang: zh-CN
title: 模型报价
outline: deep
---

# 模型价格

本页汇总 GPT、Claude、Gemini 三个系列的模型价格，便于在选型和接入前进行成本评估。

## 计费规则说明

所有模型的计费标准遵循对应厂商官方定价，tokenfor.me不做额外修改。

### Token 计费维度

通常分为三类：

| 类型 | 说明 |
|------|------|
| Input Tokens | 用户输入消耗 |
| Output Tokens | 模型生成消耗 |
| Cache Tokens | 上下文缓存（部分模型支持） |

### 计费原则

- **按 Token 使用量计费**
- **部分图像模型可能按次计费，如gpt-image-2、gemini-2.5-flash-image**
- **不同模型单价不同**
- **输入 / 输出 / 缓存价格通常不同**
- **长上下文模型可能启用 Cache 计费优化**

### 价格对齐说明

- ✅ tokenfor.me坚持原厂原价，公开透明
- ✅ 支持最新模型价格自动同步，价格及变动以AI厂商官方公告为准 
- ✅ AI厂商复杂的报价体系难免让我们有差错，如有请及时联系我们，也请理解

## OpenAI（GPT 系列）

| Model Name | Mode / Operating Mode | Max Input / Output Tokens | Input Price ($/1M tokens) | Output Price ($/1M tokens) | Cache Read Price ($/1M tokens) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| gpt-5.5 | chat | 1050K / 128K | $5.00 | $30.00 | $0.50 | 
| gpt-5.4 | chat | 1050K / 128K | $2.50 | $15.00 | $0.25 |
| gpt-5.4-mini | chat | 400K / 128K | $0.75 | $4.50 | $0.08 | 
| gpt-image-2 | image_generation | - / - | $5.00 | $10.00 | $1.25 |

## Anthropic（Claude 系列）

| Model Name | Mode / Operating Mode | Max Input / Output Tokens | Input Price ($/1M tokens) | Output Price ($/1M tokens) | Cache Read Price ($/1M tokens) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| claude-fable-5 | chat | 1000K / 128K | $10.00 | $50.00 | $1.00 | 
| claude-opus-4-8 | chat | 1000K / 128K | $5.00 | $25.00 | $0.50 | 
| claude-opus-4-7 | chat | 1000K / 128K | $5.00 | $25.00 | $0.50 | 
| claude-opus-4-6 | chat | 1000K / 128K | $5.00 | $25.00 | $0.50 |
| claude-sonnet-4-6 | chat | 1000K / 64K | $3.00 | $15.00 | $0.30 
| claude-haiku-4-5-20251001 | chat | 200K / 64K | $1.00 | $5.00 | $0.10 |  

## Google（Gemini 系列）

| Model Name | Mode / Operating Mode | Max Input / Output Tokens | Input Price ($/1M tokens) | Output Price ($/1M tokens) | Cache Read Price ($/1M tokens) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| gemini-2.5-flash | chat | 1048K / 65K | $0.30 | $2.50 | $0.03 |
| gemini-2.5-flash-image | image_generation | 32K / 32K | $0.30 | $2.50 | $0.03 |
| gemini-2.5-pro | chat | 1048K / 65K | $1.25 | $10.00 | $0.13 |
| gemini-3-flash-preview | chat | 1048K / 65K | $0.50 | $3.00 | $0.05 |
| gemini-3-pro-preview | chat | 1048K / 65K | $2.00 | $12.00 | $0.20 |
| gemini-3.1-pro-preview | chat | 1048K / 65K | $2.00 | $12.00 | $0.20 |

## 注意事项

- 不同 Key 所属分组，**可用模型可能不同**
- 某些模型可能需要**单独开通权限**
- 长上下文模型可能涉及额外费用

## 后续更新

- 模型清单将持续更新
- 新模型上线后将第一时间同步 
