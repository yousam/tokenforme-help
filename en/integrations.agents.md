---
lang: en-US
title: Integrations with Agents
outline: deep
---

# Integrations with Agents

This chapter explains, from a regular user’s perspective, how to integrate the **Site URL** with common agents and development tools. It covers the unified API Base URL, API key configuration, and several concrete examples.

**Unified rules:**

- Base domain: see the “API Base URL” section in the “Overview” chapter.
- Common paths:
  - OpenAI / Anthropic-compatible endpoints: `/v1`
  - Gemini-compatible endpoints: `/v1beta`
- API key / token: the key created and copied from the **Site URL** console. One key is bound to one group of one vendor.

As long as a tool supports OpenAI/Anthropic-style APIs, it can usually be integrated with the **Site URL** by changing the API Base URL and key.

<a id="generic-http-template"></a>
## Generic HTTP template

Most model clients that support HTTP calls follow a similar configuration pattern:

- Example request:

```http
POST <API Base URL>/v1/chat/completions  (where <API Base URL> is described in the “API Base URL” section of the “Overview” chapter)
Authorization: Bearer <Your_API_Key>
Content-Type: application/json

{
  "model": "gpt-4",        // Use a model name supported by the console
  "messages": [
    { "role": "user", "content": "Hello, please test whether <Site URL> is working." }
  ]
}
```

The configuration examples below follow the same structure.

<a id="codex-example"></a>
## Using the Site URL with Codex (example)

> The following is an illustrative example. Use the current Codex documentation as the authoritative reference for the exact configuration method.

Assume Codex supports specifying the API Base URL and key through a `config.json` file:

```json
{
  "apiBase": "<API Base URL>",  // See the “API Base URL” section in the “Overview” chapter
  "apiKey": "Your_API_Key",
  "model": "gpt-4"
}
```

Steps:

1. Open the Codex configuration file or settings interface.
2. Change the original OpenAI `apiBase` to the endpoint shown in the “API Base URL” section of the “API Keys” chapter.
3. Set `apiKey` to the key created in the **Site URL** console.
4. Save the configuration and start a test conversation in Codex.
5. If the model responds normally, the integration is working.

<a id="claude-code-cli-example"></a>
## Using the Site URL with Claude Code CLI (example)

Assume Claude Code CLI supports specifying the API Base URL and key through environment variables or a configuration file.

- Environment variable example:

```bash
export CLAUDE_API_BASE="<API Base URL>"  # See the “API Base URL” section in the “Overview” chapter
export CLAUDE_API_KEY="Your_API_Key"
```

- Configuration file example:

```toml
api_base = "<API Base URL>"  # See the “API Base URL” section in the “Overview” chapter
api_key  = "Your_API_Key"
model    = "claude-3-opus"  # Use the actual supported model name
```

Then use Claude Code CLI from the command line. Requests will be routed through the **Site URL** to the corresponding model.

<a id="openclaw-examples"></a>
## Using the Site URL with OpenClaw (example)

For OpenClaw users, add providers for the three AI vendors (GPT / Claude / Gemini) in the configuration file and point `baseUrl` to the address provided by the **Site URL**. The examples below require separate keys as needed.

- GPT (OpenAI-compatible)

```json
{
  "models": {
    "providers": {
      "tokenforme-gpt": {
        "baseUrl": "<API Base URL>/v1",  // See the “API Base URL” section in the “Overview” chapter
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
        "baseUrl": "<API Base URL>/v1",  // See the “API Base URL” section in the “Overview” chapter
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
        "baseUrl": "<API Base URL>/v1beta",  // See the “API Base URL” section in the “Overview” chapter
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
> - One key is bound to one vendor group. The three providers above should use different keys.
> - Field names and structure depend on your local OpenClaw version. The examples are for reference only.

<a id="other-tools"></a>
## Using the Site URL with Antigravity / Qoder / Sursor (example)

For tools that support custom model APIs, the general process is:

1. In the tool settings, find the model or API configuration.
2. Change the original API Base URL to the endpoint shown in the “API Base URL” section of the “API Keys” chapter.
3. Set the API key to the key created in the **Site URL** console.
4. Select or enter a model name that is enabled in the **Site URL**.
5. Save the configuration and send a simple test message.

If the tool provides a **Test Connection** button, use it first before large-scale usage.

<a id="debugging-and-troubleshooting"></a>
## Debugging and troubleshooting

- If you see an authentication error:
  - Check whether the API key is correct and whether it has been disabled or deleted.
- If you see a connection failure or timeout:
  - Check whether the API Base URL is the endpoint shown in the “API Base URL” section of the “API Keys” chapter.
  - Check your local network and proxy settings.
- If the model name is rejected:
  - Confirm that the model is enabled in the model routing configuration of the **Site URL** console.
  - Use the correct model identifier shown in the documentation or console, such as `gpt-4` or `claude-3-opus`.
