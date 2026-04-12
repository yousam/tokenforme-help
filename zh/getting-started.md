---
lang: zh-CN
title: 快速开始
outline: deep
---

# 快速开始

本章节面向「普通用户」，帮助你在 5 分钟内从 0 到完成一次成功调用。

## 使用前准备

- 一台可以正常联网的电脑。
- 推荐浏览器：Chrome / Edge / Firefox / Safari 等现代浏览器。
- 一个可以接收邮件或短信的账号，用于注册 tokenfor.me。

## 第一步：注册并登录控制台

1. 打开浏览器访问：`https://tokenfor.me`。
2. 按页面提示完成注册流程（填写邮箱、设置密码等）。
3. 注册成功后，使用你的账号登录控制台。

登录后你会看到 Web 控制台首页，后续所有操作都在控制台中完成。

## 第二步：创建 API Key

1. 在左侧菜单中找到「API 密钥」。
2. 点击「创建 API Key」。
3. 填写以下信息（以实际界面为准）：
   - 名称：如 `personal-dev`、`backend-service`；
   - 分组（倍率）：如「GPT Standard」等（每个分组隶属于某个 AI 厂商）；
4. 保存后，系统会生成一个 API Key，请妥善保管。
> 建议：
> - 个人使用时，可以为自己创建一个专用 Key；
> - 团队协作时，可以为不同项目或成员创建不同 Key，方便后续统计与权限控制。

## 第三步：在智能体中配置 tokenfor.me

以通用配置方式为例，绝大多数支持 OpenAI/Anthropic 风格 API 的智能体，配置方式类似：

- 将 Base URL / Endpoint 设置为：`https://api.tokenfor.me`（OpenAI/Anthropic 通常使用 `/v1` 路径，Gemini 使用 `/v1beta`）
- 将 API Key / Token 设置为：你刚刚在控制台创建的 Key（一个 Key 绑定一个供应商分组）

以下是几个常见工具的示意说明（后续「与智能体集成」章节会给出更详细示例）：

- Codex：在配置文件或启动参数中指定 Base URL 和 API Key。
- Claude Code CLI：在配置文件或环境变量中填写 `https://api.tokenfor.me` 与 Key。
- OpenClaw、Antingravite、Qoder、Suror：在各自的设置界面或配置文件中，将原本指向 OpenAI/Anthropic 的地址替换为 `https://api.tokenfor.me`，并使用 tokenfor.me 提供的 Key。

## 第四步：发送一次测试请求

1. 在你配置好的智能体或客户端中，选择任意一个大模型（例如与 OpenAI GPT-4 兼容的模型）。
2. 发送一条简单的测试消息，例如：
   - 中文：`你好，测试一下 tokenfor.me 是否可用？`
   - 英文：`Hello, is tokenfor.me working?`
3. 如果配置正确，你应该能收到模型的正常回复。

若测试失败，可参考「故障排查」章节，检查 Base URL、API Key、网络环境等常见问题。