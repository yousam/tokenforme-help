# Available Models API

## Model List

**Authentication**  
`Authorization: Bearer <YOUR_API_KEY>`

List models available to the group of the current key.

## Endpoint

- `GET /v1/models`

## Description

Returns a JSON list of all models the current API key can access, for example:

- `claude-sonnet-4-6`
- `gpt-5.5`
- `gemini-3.1-pro-preview`

## Example Request

```bash
curl <API BaseURL>/v1/models \
  -H "Authorization: Bearer <YOUR_API_KEY>"
```

## Example Response

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

## Response Fields

### Top-level Fields

- `object`: response object type, usually `list`
- `data`: models accessible by the current key

### Model Fields in `data`

- `id`: unique model ID
- `object`: object type, usually `model`
- `created`: model creation time, Unix timestamp
- `owned_by`: model provider
- `type`: resource type
- `display_name`: display name

## Notes

- The response only includes models the current API key can access
- Available models may differ by group, plan, and permission policy
- Call this endpoint before integration to confirm the target model is available
