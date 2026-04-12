---
lang: zh-CN
title: 概览
outline: deep
---

# tokenfor.me 概览

## 什么是 tokenfor.me

tokenfor.me 是一款 **High-quality Multi-LLM API Gateway**，面向企业内部用户和个人开发者，提供统一、稳定、高可用的多大模型 API 网关服务。

通过统一域名接入多个 AI 厂商（如 OpenAI、Anthropic、Gemini），实现统一配置、统一鉴权与集中用量/账单管理。

> 提示：**一个 Key 仅绑定一个 AI 厂商的一个分组**；如需使用其他 AI 厂商/分组，请分别创建新的 Key。

## 适用人群

- 个人开发者：希望快速接入多家大模型服务、统一管理密钥与账单。
- 小团队 / 初创公司：多人共享统一网关配置，集中控制成本与权限。
- 企业内部用户：在多种内部工具（如 Codex、Claude Code CLI、OpenClaw 等）中复用同一网关，降低运维与管理成本。

## 使用流程概览

1. 访问控制台：打开浏览器，进入 `https://tokenfor.me` 并登录 / 注册账号。
2. 创建 API Key：在 Web 控制台中创建用于调用的 API Key，并选择需要使用的模型路由（如 OpenAI、Anthropic、Gemini 等）。
3. 在智能体中配置：在 Codex、Claude Code CLI、OpenClaw、Antingravite、Qoder、Suror 等工具中，将 Base URL 设置为 `https://api.tokenfor.me`，并填入你的 API Key。
4. 开始调用：在这些工具中直接调用大模型接口，所有请求会通过 tokenfor.me 统一转发与管理。

后续章节会详细介绍快速开始、核心概念、控制台操作、与常见智能体的集成方式，以及充值、账单和售后支持说明。