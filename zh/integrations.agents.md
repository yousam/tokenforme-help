---
lang: zh-CN
title: 与智能体集成
outline: deep
---

# 与智能体集成

本章节从「普通用户」视角，介绍如何在常见的智能体和开发工具中集成 tokenfor.me，包括统一的 Base URL、API Key 配置方式，以及具体示例。

**统一规则：**

- Base URL / Endpoint 固定为：`https://api.tokenfor.me`
- API Key / Token：在 tokenfor.me 控制台中创建并复制的 Key

只要工具支持 OpenAI/Anthropic 风格的 API，一般都可以通过修改 Base URL 和 Key 的方式接入 tokenfor.me。

## 通用配置模板

在绝大多数支持 HTTP 调用的大模型客户端中，配置思路类似：

- 请求地址示例：

```http
POST https://api.tokenfor.me/v1/chat/completions
Authorization: Bearer <你的_API_Key>
Content-Type: application/json

{
  "model": "gpt-4",        // 具体模型名称以控制台支持为准
  "messages": [
    { "role": "user", "content": "你好，测试一下 tokenfor.me 是否可用？" }
  ]
}
```

后续各工具的配置示例都可以类比上述结构进行理解。

## 在 Codex 中使用 tokenfor.me（示例）

> 以下为示意性示例，具体配置方式以 Codex 当前版本文档为准。

假设 Codex 允许通过配置文件 `config.json` 指定 API 地址和 Key：

```json
{
  "apiBase": "https://api.tokenfor.me",
  "apiKey": "你的_API_Key",
  "model": "gpt-4"
}
```

步骤：

1. 打开 Codex 的配置文件或设置界面；
2. 将原本指向 OpenAI 的 `apiBase` 改为 `https://api.tokenfor.me`；
3. 将 `apiKey` 填写为在 tokenfor.me 控制台创建的 Key；
4. 保存配置后，在 Codex 中发起一次对话测试；
5. 如果可以正常获得模型回复，则说明集成成功。

## 在 Claude Code CLI 中使用 tokenfor.me（示例）

假设 Claude Code CLI 支持通过环境变量或配置文件指定 API 地址和 Key：

- 环境变量方式示例：

```bash
export CLAUDE_API_BASE="https://api.tokenfor.me"
export CLAUDE_API_KEY="你的_API_Key"
```

- 配置文件方式示例：

```toml
api_base = "https://api.tokenfor.me"
api_key  = "你的_API_Key"
model    = "claude-3-opus"  # 以实际支持为准
```

然后在命令行中直接使用 Claude Code CLI，即可通过 tokenfor.me 访问相应模型。

## 在 OpenClaw 中使用 tokenfor.me（示例）

在 OpenClaw 中，一般可以在配置文件或环境变量中指定大模型网关：

- 将原本的 OpenAI/Anthropic API 地址改为：`https://api.tokenfor.me`；
- 将对应的 API Key 改为 tokenfor.me 控制台中生成的 Key；
- 在模型配置部分，选择在 tokenfor.me 中已启用的模型名称。

示意配置（具体字段名以 OpenClaw 文档为准）：

```json
{
  "llm": {
    "base_url": "https://api.tokenfor.me",
    "api_key": "你的_API_Key",
    "model": "gpt-4"
  }
}
```

## 在 Antingravite / Qoder / Suror 中使用 tokenfor.me（示例）

对于这些同样支持自定义大模型 API 的工具，一般可以遵循以下步骤：

1. 在工具的设置界面找到「模型」或「API」相关配置；
2. 将原本的 API Base URL 修改为 `https://api.tokenfor.me`；
3. 将 API Key 填写为 tokenfor.me 控制台中创建的 Key；
4. 在模型栏中，选择或输入在 tokenfor.me 中启用的模型名称；
5. 保存配置并发起一次简单对话测试。

如果工具支持测试按钮（Test Connection），建议先点击测试，确认连接成功后再大规模使用。

## 调试与排错建议

- 若出现「认证失败」类错误：
  - 请检查 API Key 是否填写正确、是否已被禁用或删除；
- 若出现「无法连接」或超时：
  - 请检查是否使用了 `https://api.tokenfor.me` 作为 Base URL；
  - 检查本地网络环境和代理设置；
- 若模型名称报错：
  - 请确认该模型已在 tokenfor.me 控制台的模型路由中启用；
  - 按文档或控制台提示使用正确的模型标识符（如 `gpt-4`, `claude-3-opus` 等）。