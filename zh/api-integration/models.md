# 查询可用Model API

## 模型列表（Model List）

**认证方式**  
`Authorization: Bearer <你的_API_Key>`

列出该 key 所在分组可用的模型。

## 接口路径

- `GET /v1/models`

## 功能描述

返回一个 JSON 列表，包含当前 API Key 有权访问的所有模型，例如：

- `claude-sonnet-4-6`
- `gpt-5.5`
- `gemini-3.1-pro-preview`

## 示例请求

```bash
curl <API BaseURL>/v1/models \
  -H "Authorization: Bearer <你的_API_Key>"
```

## 返回示例

```json
{
  "data": [
    {
      "id": "gpt-5.5",
      "object": "model",
      "created": 1776873600,
      "owned_by": "openai",
      "type": "model",
      "display_name": "GPT-5.5"
    },
    {
      "id": "gpt-5.4",
      "object": "model",
      "created": 1738368000,
      "owned_by": "openai",
      "type": "model",
      "display_name": "GPT-5.4"
    },
    {
      "id": "gpt-image-2",
      "object": "model",
      "created": 1738368000,
      "owned_by": "openai",
      "type": "model",
      "display_name": "GPT Image 2"
    }
  ],
  "object": "list"
}
```

## 返回字段说明

### 顶层字段

- `object`：返回对象类型，通常为 `list`
- `data`：当前 key 可访问的模型列表

### `data` 中的模型字段

- `id`：模型唯一标识
- `object`：对象类型，通常为 `model`
- `created`：模型创建时间（Unix 时间戳）
- `owned_by`：模型提供方
- `type`：资源类型
- `display_name`：用于展示的模型名称

## 说明

- 返回结果只包含当前 API Key **有权限访问**的模型
- 不同分组、套餐、权限策略下，模型列表可能不同
- 建议在接入前先调用一次该接口，确认目标模型是否可用
