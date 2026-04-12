---
lang: en-US
title: Creating & Managing APIs
outline: deep
---

# Creating & Managing APIs

This chapter explains how to create, view, and manage API keys in the tokenfor.me console, and how to configure model routes for each key.

## Creating a new API key

1. Sign in to the console at `https://tokenfor.me`.
2. In the left sidebar, open **API Keys**.
3. Click **Create API Key**.
4. Fill in the following fields (actual UI may differ slightly):
   - **Name**: e.g. `personal-dev`, `backend-service`.
   - **Group (rate)**: e.g. `GPT Standard` (each group belongs to one AI vendor).
5. Confirm and save. The system will generate a new API key; keep it in a safe place.

> Notes:
> - One key is bound to **one group of one AI vendor**.
> - If you need multiple vendors or multiple groups under the same vendor, create separate keys.
> - After creation, copy and store the key securely; for security reasons, the full key may only be shown once.

> Models: tokenfor.me exposes the latest models from each AI vendor.
> For detailed model lists and descriptions, please refer to the **Models** section (to be added later).

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