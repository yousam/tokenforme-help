---
lang: en-US
title: FAQ
outline: deep
---

# FAQ

This chapter answers frequently asked questions from both individual and enterprise users.

## Account & login

### I forgot my password. What should I do?

Use the **Forgot password** link on the sign-in page and follow the steps to reset your password via email or other supported methods. If you still have trouble, contact support using the channels listed in the **Support** chapter.

### Can multiple people share one account?

This is not recommended.

- Individual users should register their own personal accounts.
- Teams and enterprises should create separate accounts for each member and use organization/team features to manage permissions and usage centrally.

## API usage

### I configured Base URL and API key but requests still fail. What now?

Check the following in order:

1. Make sure the Base URL is exactly `https://api.tokenfor.me`.
2. Verify that the API key is copied correctly (no extra spaces, no missing characters).
3. Confirm the key is **enabled** and has not been deleted.
4. Check your network environment to ensure `https://api.tokenfor.me` is reachable.

If the problem persists, capture the error message and contact support.

### Can I use OpenAI, Anthropic, and Gemini at the same time?

Yes. As long as you have enabled the corresponding providers and models in the model routes for your key, you can call them all through the single endpoint `https://api.tokenfor.me`.

### How do I choose and set the model name?

- In many cases, you can use familiar names like `gpt-4`, `claude-3-opus`, `gemini-1.5-pro`, etc.
- If you see "model not found" or similar errors:
  - Confirm that the model is enabled in your tokenfor.me console;
  - Use the exact identifier recommended by the console or documentation.

## Billing & costs

### How are costs calculated?

Costs are based on the underlying providers' pricing rules, aggregated through tokenfor.me. The Billing section shows the usage and estimated cost for each billing period.

### How do I top up?

- **Individual customers**:
  - WeChat: `zzbar2025`
  - QQ: `3928789892`
  - Use these channels to learn about current packages, discounts, and top-up steps.
- **Group / Enterprise customers**:
  - Email: `bill@tokenfor.me`
  - Use this email to discuss top-up, settlement, and contract details.

### Are there discounts or promotions?

Yes. Discounts and promotions may change over time. Please contact the channels above to get the latest information.

## Security & permissions

### What if my API key is leaked?

Immediately:

1. Sign in to `https://tokenfor.me`.
2. Disable or delete the suspected key.
3. Create a new key and update your tools with the new key.
4. Check the **Usage** page for any abnormal activity and contact support if needed.

### Does tokenfor.me support multi-level permissions and team management?

If you have complex permission requirements (per department, per project, etc.), contact sales or support for the latest information on enterprise features.

## Other questions

If your question is not covered here, we recommend:

1. Checking the **Troubleshooting** chapter first;
2. Then contacting support using the methods in the **Support** chapter.