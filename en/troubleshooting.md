---
lang: en-US
title: Troubleshooting
outline: deep
---

# Troubleshooting

This chapter lists common issues and recommended troubleshooting steps when using the **Site URL**. Before contacting support, go through the checklist below.

## Quick self-check

When something goes wrong, first verify:

1. **Is the API Base URL correct?**
   - See the “API Base URL” section in the “Overview” chapter and confirm you are using the correct regional endpoint.
2. **Is the API key valid?**
   - Was it copied in full? Any extra whitespace or missing characters?
   - Is the key still enabled and not deleted?
3. **Is the network environment healthy?**
   - Can the machine access the internet normally?
   - Are there proxy settings, firewalls, or corporate network policies that may block access?
4. **Is the model name correct?**
   - Is the model enabled in the console’s model routing configuration?
   - Are you using the correct model identifier?

## Common errors and solutions

### 1) Authentication failures (401 / 403)

**Typical messages:**

- `Unauthorized`
- `Invalid API key`
- `Permission denied`

**Steps:**

1. Confirm the API Base URL is set according to the “API Base URL” section in the “API Keys” chapter.
2. In the console (**API Management / Keys**), check whether the key:
   - is enabled;
   - has expired or was disabled by an administrator.
3. Copy the key again and paste it into your client to avoid typing errors.
4. If you suspect a leak, delete the old key, create a new one, and update all configurations.

### 2) Connection failures / timeouts

**Typical messages:**

- `Connection timed out`
- `Failed to connect to host`

**Steps:**

1. Try opening the configured API Base URL in a browser (see the “API Base URL” section in the “Overview” chapter). If the page responds, basic connectivity is likely fine.
2. Check local or server proxy settings and firewall rules.
3. For corporate networks, confirm whether outbound internet access is restricted.
4. Test from a different network (for example, mobile hotspot) to rule out local network problems.

### 3) Model not found / unsupported

**Typical messages:**

- `Model not found`
- `Unsupported model`

**Steps:**

1. In the console, confirm:
   - the corresponding vendor is enabled for the key;
   - the target model is included in the supported list.
2. Confirm the model name in the request matches what the console recommends.
3. If needed, capture screenshots of the console configuration and a sanitized request example and share them with support.

### 4) Quota exceeded / rate limiting

**Typical messages:**

- `Rate limit exceeded`
- `Quota exceeded`

**Steps:**

1. Review recent usage on the **Usage** page and look for abnormal spikes.
2. Check whether any scripts are making frequent requests.
3. In team environments, confirm whether other members are heavily using the same key.
4. If the limit is hit due to business peaks, contact support to discuss quota increases or call optimization.

## What to collect before contacting support

If the issue persists, prepare the following information:

- Approximate time of the issue.
- Tool name and version (Codex, Claude Code CLI, OpenClaw, etc.).
- A key identifier (do not send the full key; use a note/name or a redacted fragment).
- A sanitized request example:
  - model name;
  - key parameters (temperature, max tokens, etc.).
- Full error message (text or screenshot).

Providing this information helps improve troubleshooting efficiency.
