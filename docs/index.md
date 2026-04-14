---
lang: zh-CN
title: 概览
outline: deep
---

# tokenfor.me 概览

## 什么是 tokenfor.me

tokenfor.me 是一款面向企业和个人开发者的多模型 API 网关（High-quality Multi-LLM API Gateway），提供统一、稳定且高可用的模型接入与管理能力。

通过一个统一域名，你可以接入多个 AI 厂商（如 OpenAI、Anthropic、Gemini），在一个地方完成配置、鉴权、用量与账单管理。

> 提示：**一个 Key 仅绑定一个 AI 厂商的一个分组（倍率）**；如需使用其他 AI 厂商或其他分组，请分别创建新的 Key。

## API 地址（Base URL）

在实际调用时，请根据所在区域选择对应的 API 地址，统一记作 **「API 地址」**：

- 中国区：`https://cn-api.tokenfor.me`
- 默认（其他地区）：`https://api.tokenfor.me`

后续文档如无特殊说明，凡涉及具体调用域名的地方，统一表述为：**「参考『API 密钥』章节中的『API 地址』配置」**。请在各类工具中按照本小节的说明为所在区域配置对应地址。

## 联系方式

如需技术支持、售后或充值相关咨询，可以通过以下方式联系我们（详细说明见「售后与客服支持」章节）：

- 客服QQ：`3928789892`
- 客服Wechat：`zzbar2025`
- 大客户Email：参考「概览-联系方式」章节中的「大客户Email」

## 适用人群

- 个人开发者：希望在多个 AI 厂商之间灵活切换，同时统一管理密钥与账单。
- 小团队 / 初创公司：多人共享统一网关配置，在不同项目间隔离 Key 与成本。
- 企业内部用户：在 Codex、Claude Code CLI、OpenClaw 等多种内部工具中复用同一网关，降低运维与接入成本。

## 使用流程概览（3 步）

1. **注册并登录**：打开浏览器访问 `https://tokenfor.me`，完成注册并登录控制台。
2. **创建 API Key**：在「API 密钥」中创建新的 Key，选择对应的 AI 厂商分组（倍率），模型列表后续可在「模型」板块查看。
3. **在工具中配置**：
   - 按照「API 密钥」章节中「API 地址」小节的说明，设置 API 地址（Base URL），为所在区域选择正确的调用域名；
   - 对 OpenAI / Anthropic 兼容接口使用 `/v1` 路径，对 Gemini 兼容接口使用 `/v1beta` 路径；
   - 在 Codex、Claude Code CLI、OpenClaw、Antigravity、Qoder、Sursor 等工具中填入对应的 API Key。

完成上述配置后，即可通过 tokenfor.me 在各工具中调用相应 AI 厂商的模型。后续章节将分别介绍快速开始、核心概念、控制台操作、与智能体集成、充值与结算以及故障排查等内容。