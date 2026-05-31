---
lang: en-US
title: FAQ
outline: deep
---

# FAQ

This chapter summarizes frequently asked questions from individual and enterprise users when using the **Site URL**.

## Account and sign-in

### What if I forgot my password?

On the sign-in page, click **Forgot password** and follow the prompts to reset your password via email or other verification methods. If the problem persists, contact support.

### Can multiple people share one account?

Not recommended.

- For individual users, register a separate account.
- For teams/enterprises, create separate accounts for each member and manage permissions and usage through organization/team features.

## API usage

### I configured the API Base URL and API key, but requests fail. What should I check?

Check in the following order:

1. Whether the API Base URL is configured as described in the “API Base URL” section of the “API Keys” chapter (choose the correct regional endpoint).
2. Whether the API key was pasted correctly (no extra whitespace or missing characters).
3. Whether the key is enabled in the console and has not been deleted.
4. Whether your network can access the configured API Base URL.

If the issue persists, record the error message and timestamp and contact support.

### Can a single key be used for OpenAI, Anthropic, and Gemini at the same time?

No. **One key corresponds to one group under one vendor**. If you need multiple vendors, create separate keys and configure the correct key in each tool.

### How do I set the model name?

- In many tools, you can use familiar model names (for example `gpt-4`, `claude-3-opus`, `gemini-1.5-pro`).
- If you see “model not found” errors, check:
  - whether the model is enabled in the **Site URL** console;
  - whether you are using the correct model identifier (use the console as the authoritative source).

## Billing and cost

### How is cost calculated?

Cost is calculated based on the billing rules of the underlying vendors. The **Site URL** shows usage and estimated costs in the console. For details, refer to console explanations and official vendor announcements.

### How do I top up?

- Individual customers:
  - Contact support using the channels listed in the “Contact” section of the “Overview” chapter.
  - Ask for the latest top-up options and any promotional guidance.
- Enterprise customers:
  - Contact support using the **Support Email** listed in the “Contact” section of the “Overview” chapter.
  - Discuss top-up, settlement, and contract options.

### Are there discounts or promotions?

Yes. Promotions may change over time. Refer to the “Top-up & Rate” chapter or contact support.

## Security and permissions

### What if my API key is leaked?

Take the following actions immediately:

1. Sign in to the console on the **Site URL**.
2. Disable or delete the affected key.
3. Create a new key and update the configuration in all tools.
4. If you suspect abnormal usage, review detailed records on the **Usage** page and contact support.

### Do you support multi-level permissions and team management?

If you require multi-level permissions or advanced team management (for example, per-department or per-project access control), contact support for the latest enterprise feature information and enablement options.

## Other questions

If your question is not covered here:

1. See the “Troubleshooting” chapter.
2. If the problem remains, contact support through the channels listed in the “Support” chapter.
