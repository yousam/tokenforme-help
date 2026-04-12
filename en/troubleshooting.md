---
lang: en-US
title: Troubleshooting
outline: deep
---

# Troubleshooting

This chapter lists common error symptoms and step-by-step checks you can perform before contacting support.

## Quick checklist

When something goes wrong, first verify the following:

1. **Is the Base URL correct?**
   - It must be: `https://api.tokenfor.me`
2. **Is your API key valid?**
   - Did you copy it completely, with no extra spaces or missing characters?
   - Is the key still enabled and not deleted in the console?
3. **Is your network environment OK?**
   - Can your machine reach the Internet normally?
   - Is there any proxy, firewall, or corporate policy blocking access?
4. **Is the model name correct?**
   - Is the model enabled in your tokenfor.me model routes?
   - Are you using the correct identifier?

## Common errors and fixes

### 1. Authentication failures (401 / 403)

**Typical messages:**

- `Unauthorized`
- `Invalid API key`
- `Permission denied`

**How to debug:**

1. Verify that the Base URL is `https://api.tokenfor.me`.
2. In the **API / Keys** section of the console, check:
   - The key is enabled;
   - It has not expired or been disabled by an admin.
3. Copy the key again from the console and paste it into your client to avoid typos.
4. If you suspect a leak, delete the old key and create a new one.

### 2. Connection failures / timeouts

**Typical messages:**

- `Connection timed out`
- `Failed to connect to host`

**How to debug:**

1. Try opening `https://api.tokenfor.me` in a browser to see if it is reachable.
2. Check local or server-side proxy settings and firewall rules.
3. In corporate environments, verify that Internet access to external APIs is allowed.
4. Test from another network (for example, a mobile hotspot) to rule out local network issues.

### 3. Model does not exist or is unsupported

**Typical messages:**

- `Model not found`
- `Unsupported model`

**How to debug:**

1. In the tokenfor.me console, confirm that:
   - The provider (OpenAI, Anthropic, Gemini, etc.) is enabled for your key;
   - The specific model is in the supported list.
2. Make sure your request uses the exact model name recommended by the console or docs.
3. If in doubt, send screenshots of your model routing configuration and a sanitized request example to support.

### 4. Rate limit or quota exceeded

**Typical messages:**

- `Rate limit exceeded`
- `Quota exceeded`

**How to debug:**

1. Check the **Usage** page for unusual spikes in traffic.
2. Confirm whether any scripts or services are calling the API very frequently.
3. In team/enterprise setups, verify whether other members are heavily using the same key.
4. For business-critical workloads, contact support to discuss higher quotas or better routing strategies.

## Information to collect before contacting support

If the checks above do not solve the problem, prepare the following information before contacting support:

- Approximate time when the issue occurred;
- Tool or client you are using (Codex, Claude Code CLI, OpenClaw, etc.);
- The key identifier (you can redact part of the key and/or use the key name instead of sending the full value);
- A sanitized request example:
  - Model name;
  - Key parameters (temperature, max tokens, etc.);
- Full error message (text or screenshot).

Providing this information will greatly speed up the troubleshooting process and help you get back to normal operation faster.