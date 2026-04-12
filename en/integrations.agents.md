---
lang: en-US
title: Integrations with Agents
outline: deep
---

# Integrations with Agents

This chapter explains, from a normal-user perspective, how to integrate tokenfor.me into popular agents and tools. We focus on configuration patterns and concrete examples.

**Universal rule:**

- **Base URL / Endpoint**: `https://api.tokenfor.me`
- **API Key / Token**: a key created in the tokenfor.me console

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

## Using tokenfor.me in OpenClaw (example)

In OpenClaw, you can typically configure the LLM gateway via a config file or environment variables.

Example JSON snippet:

```json
{
  "llm": {
    "base_url": "https://api.tokenfor.me",
    "api_key": "YOUR_API_KEY",
    "model": "gpt-4"
  }
}
```

Steps:

1. Open your OpenClaw configuration.
2. Replace the original OpenAI/Anthropic base URL with `https://api.tokenfor.me`.
3. Set `api_key` to your tokenfor.me key.
4. Choose a model name that is enabled for your key.
5. Restart or reload OpenClaw if necessary and run a test prompt.

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