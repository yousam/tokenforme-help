---
lang: en-US
title: Creating & Managing APIs
outline: deep
---

# Creating & Managing APIs

This chapter explains how to create, view, and manage API keys in the tokenfor.me console, and how to configure model routes for each key.

## Creating a new API key

1. Sign in to the console at `https://tokenfor.me`.
2. In the left sidebar, open **API / Keys**.
3. Click **Create API Key** (or similar).
4. Fill in the following fields (actual UI may differ slightly):
   - **Name**: e.g. `personal-dev`, `team-project-A`.
   - **Description** (optional): e.g. "personal testing", "backend service", etc.
5. Confirm to generate the new API key.

> Note:
> - After creation, copy and store the key securely.
> - For security reasons, the full key may only be shown once.

## Configuring model routes

Model routes control which providers and models a given key can access.

1. In the key list, find your newly created key and click **Edit** or **Configure**.
2. In the **Model routes** section, select the providers you want to enable, for example:
   - OpenAI
   - Anthropic
   - Gemini
   - Other supported providers
3. For each provider, you may be able to:
   - Enable / disable it for this key;
   - Select which specific models are allowed (e.g. `gpt-4`, `claude-3-opus`, `gemini-1.5-pro`, etc.);
   - Configure related options (priority, rate limits, etc.), if available.
4. Save the configuration. The key can now access the selected models via `https://api.tokenfor.me`.

For most users, it is enough to:

- Ensure the providers you need are enabled;
- Use the correct model names in your client.

## Viewing and managing existing keys

On the **API / Keys** page, you can:

- View all keys with basic info (name, creation time, status, last used, etc.);
- Edit keys to rename them, update descriptions, or adjust model routes;
- Enable / disable keys:
  - Recommended for temporarily stopping usage or handling suspected leaks;
- Delete keys:
  - After deletion, the key can no longer be used. Make sure this will not break any production workloads.

## Best practices

- Create different keys for different scenarios:
  - e.g. "local dev", "staging backend", "production backend", "member-alice".
- Review your key list regularly:
  - Disable or delete keys that are no longer needed;
  - Immediately revoke any key that might have been leaked.

Once configured, you can use `https://api.tokenfor.me` and the corresponding API key in your agents/tools to access the enabled models.