---
lang: en-US
title: Integrations with Agents
outline: deep
---

# Integrations with Agents

This chapter explains, from a normal-user perspective, how to integrate tokenfor.me into popular agents and tools. We focus on configuration patterns and concrete examples.

**Universal rule:**

- Base host: `https://api.tokenfor.me`
- Common paths:
  - OpenAI / Anthropic compatible APIs: `/v1`
  - Gemini compatible APIs: `/v1beta`
- **API Key / Token**: a key created in the tokenfor.me console (one key per provider group)

If a tool supports OpenAI/Anthropic-style APIs, it can usually work with tokenfor.me by changing the base URL and key.

## Generic HTTP example

Most HTTP-based LLM clients follow a similar pattern:

```http
POST https://api.tokenfor.me/v1/chat/completions
Authorization: Bearer <YOUR_API_KEY>
Content-Type: application/json

{
  "model": "gpt-4",  // model name must match what tokenfor.me supports
  "messages": [
    { "role": "user", "content": "Hello, testing tokenfor.me." }
  ]
}
```

The following sections show how this maps to specific tools.

## Using tokenfor.me in Codex (example)

> Example only – exact configuration may differ in your Codex version.

Assume Codex reads configuration from a `config.json` file:

```json
{
  "apiBase": "https://api.tokenfor.me",
  "apiKey": "YOUR_API_KEY",
  "model": "gpt-4"
}
```

Steps:

1. Open Codex's config file or settings UI.
2. Change the original OpenAI `apiBase` to `https://api.tokenfor.me`.
3. Set `apiKey` to the key you created in tokenfor.me.
4. Save the configuration.
5. Start a conversation in Codex; if you receive normal model responses, integration is successful.

## Using tokenfor.me with Claude Code CLI (example)

Assume Claude Code CLI supports environment variables or a config file.

- **Environment variable** example:

```bash
export CLAUDE_API_BASE="https://api.tokenfor.me"
export CLAUDE_API_KEY="YOUR_API_KEY"
```

- **Config file** example (`config.toml`):

```toml
api_base = "https://api.tokenfor.me"
api_key  = "YOUR_API_KEY"
model    = "claude-3-opus"  # use a model enabled in tokenfor.me
```

Then, use the CLI as usual. All calls will be routed via tokenfor.me.

## Using tokenfor.me in OpenClaw (examples)

If you are already using OpenClaw, you can simply add three tokenfor.me providers (GPT, Claude, Gemini) and point their `baseUrl` to tokenfor.me, without changing your existing workflows. Configure each AI vendor with its own key.

- GPT (OpenAI-compatible)
```json
{
  "models": {
    "providers": {
      "tokenforme-gpt": {
        "baseUrl": "https://api.tokenfor.me/v1",
        "apiKey": "sk-your-key",
        "models": [
          {
            "id": "gpt-5",
            "name": "gpt-5",
            "api": "openai-responses",
            "reasoning": true,
            "input": ["text"]
          }
        ]
      }
    }
  }
}
```

- Claude (Anthropic-compatible)
```json
{
  "models": {
    "providers": {
      "tokenforme-claude": {
        "baseUrl": "https://api.tokenfor.me/v1",
        "apiKey": "sk-your-key",
        "models": [
          {
            "id": "claude-sonnet-4-6",
            "name": "claude-sonnet-4-6",
            "api": "anthropic-messages",
            "reasoning": true,
            "input": ["text"]
          }
        ]
      }
    }
  }
}
```

- Gemini (Google Generative AI-compatible)
```json
{
  "models": {
    "providers": {
      "tokenforme-gemini": {
        "baseUrl": "https://api.tokenfor.me/v1beta",
        "apiKey": "sk-your-key",
        "api": "google-generative-ai",
        "models": [
          {
            "id": "gemini-3.1-flash-image-preview",
            "name": "gemini-3.1-flash-image-preview",
            "api": "google-generative-ai",
            "reasoning": false,
            "input": ["text", "image"]
          }
        ],
        "authHeader": true,
        "request": {
          "headers": {
            "Authorization": "Bearer ${models.providers.tokenforme-gemini.apiKey}"
          }
        }
      }
    }
  }
}
```

> Notes:
> - One key per AI vendor group. The three vendors above should use three different keys.
> - Exact field names/structure may vary with your OpenClaw version. Treat this as a reference.
## Using tokenfor.me in Antingravite / Qoder / Suror (examples)

For these tools, the pattern is similar:

1. Open the settings panel for **Models** or **API**.
2. Set the base URL or endpoint to `https://api.tokenfor.me`.
3. Paste your tokenfor.me API key into the key/token field.
4. Select or type a model name that is enabled in tokenfor.me.
5. Save and run a simple test message.

If the tool provides a **Test Connection** button, use it to verify connectivity before heavy usage.

## Debugging and common issues

- **Authentication errors**:
  - Double-check your API key and ensure the key is enabled in the console.
- **Connection or timeout issues**:
  - Make sure the base URL is exactly `https://api.tokenfor.me`.
  - Check local network and proxy/firewall settings.
- **Model not found**:
  - Confirm the model is enabled for your key in tokenfor.me.
  - Use the exact model identifier shown in the console or documentation.