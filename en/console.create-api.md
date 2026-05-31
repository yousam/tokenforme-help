---
lang: en-US
title: Create and Manage API
outline: deep
---

# Create and Manage API

This chapter explains how to create, view, and manage API keys in the **Site URL** console, and how to choose the appropriate vendor and group for each key.

## API Base URL

For the actual available API Base URLs, see the “API Base URL” section in the “Overview” chapter. Throughout this documentation, the actual callable endpoint is referred to uniformly as the **API Base URL**.

## Create a new API key (bound to a vendor group)

1. Sign in to the **Site URL** console.
2. Open **API Keys** in the left sidebar.
3. Click **Create API Key**.
4. Fill in the required information (subject to the actual interface):
   - Name: for example, `personal-dev` or `backend-service`.
   - Group (rate multiplier): for example, “GPT Standard”. Each group belongs to a specific AI vendor.
5. Save the configuration. The system will generate a new API key. Store it securely.

> Important rules:
> - **One key corresponds to one group under one AI vendor.**
> - If you need to use multiple vendors, or multiple groups under the same vendor, create separate keys.

> Model note: the platform generally exposes the latest models from each AI vendor. For detailed model lists and explanations, see the “Models” chapter.

## Manage existing keys

- View the key list: name, vendor, group, creation time, status, and recent usage.
- Edit a key: update its name/notes and adjust its group if the interface allows it.
- Enable/disable/delete a key: disable or delete keys that are no longer needed or may have been exposed.
- View group and multiplier information, where shown.

## Recommendations

- Separate keys by purpose:
  - personal development, Project A, Project B, production environment, and so on.
- Separate keys by vendor/group:
  - for example, create different keys for OpenAI (GPT Standard) and Anthropic (another group).
- Review keys regularly:
  - clean up unused or potentially exposed keys to reduce unnecessary cost and risk.
