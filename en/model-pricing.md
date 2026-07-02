---
lang: en-US
title: Model Pricing
outline: deep
---

# Model Pricing

This page lists prices for GPT, Claude, and Gemini models. Use it to estimate cost before choosing and integrating models.

## Pricing Rules

Pricing follows official provider rates. tokenfor.me does not add markup.

### Token Billing Dimensions

Usually split into three types:

| Type | Description |
|------|------|
| Input Tokens | User input tokens |
| Output Tokens | Model-generated tokens |
| Cache Tokens | Context cache tokens, supported by some models |

### Billing Rules

- **Billed by token usage**
- **Some image models may be billed per request, such as gpt-image-2 and gemini-2.5-flash-image**
- **Pricing varies by model**
- **Input, output, and cache prices are usually different**
- **Long-context models may use cache pricing**

### Price Alignment

- ✅ tokenfor.me keeps original provider pricing: open and transparent
- ✅ Latest model prices are synced automatically. Prices and changes follow official AI provider announcements
- ✅ Provider pricing can be complex, and mistakes may happen. If you find one, contact us. Thanks for understanding

## OpenAI (GPT Series)

| Model Name | Mode / Operating Mode | Max Input / Output Tokens | Input Price ($/1M tokens) | Output Price ($/1M tokens) | Cache Read Price ($/1M tokens) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| gpt-5.5 | chat | 1050K / 128K | $5.00 | $30.00 | $0.50 | 
| gpt-5.4 | chat | 1050K / 128K | $2.50 | $15.00 | $0.25 |
| gpt-5.4-mini | chat | 400K / 128K | $0.75 | $4.50 | $0.08 | 
| gpt-image-2 | image_generation | - / - | $5.00 | $10.00 | $1.25 |

## Anthropic (Claude Series)

| Model Name | Mode / Operating Mode | Max Input / Output Tokens | Input Price ($/1M tokens) | Output Price ($/1M tokens) | Cache Read Price ($/1M tokens) |
| :--- | :--- | :--- | :--- | :--- | :--- | 
| claude-fable-5 | chat | 1000K / 128K | $10.00 | $50.00 | $1.00 |
| claude-opus-4-8 | chat | 1000K / 128K | $5.00 | $25.00 | $0.50 | 
| claude-opus-4-7 | chat | 1000K / 128K | $5.00 | $25.00 | $0.50 | 
| claude-opus-4-6 | chat | 1000K / 128K | $5.00 | $25.00 | $0.50 |
| claude-sonnet-4-6 | chat | 1000K / 64K | $3.00 | $15.00 | $0.30 
| claude-haiku-4-5-20251001 | chat | 200K / 64K | $1.00 | $5.00 | $0.10 |  

## Google (Gemini Series)

| Model Name | Mode / Operating Mode | Max Input / Output Tokens | Input Price ($/1M tokens) | Output Price ($/1M tokens) | Cache Read Price ($/1M tokens) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| gemini-3.5-flash | chat | 1048K / 65K | $1.50 | $9.00 | $0.15 |
| gemini-3.1-flash-image | image_generation | 65K / 32K | $0.50 | $60.00 (Image) | $0.05 |
| gemini-3.1-pro-preview | chat | 2048K / 65K | $2.00 (≤200K) | $12.00 (≤200K) | $0.20 |
| gemini-3.1-pro-preview-customtools | chat | 2048K / 65K | $2.00 | $12.00 | $0.20 |
| gemini-3.1-flash-lite | chat | 1048K / 65K | $0.25 | $1.50 | $0.025 |
| gemini-3.1-flash-image-preview | image_generation | 65K / 32K | $0.50 | $60.00 (Image) | $0.05 |
| gemini-3-pro-preview | chat | 1048K / 65K | $2.00 | $12.00 | $0.20 |
| gemini-3-pro-image | image_generation | 65K / 32K | $2.00 | $120.00 (Image) | $0.20 |
| gemini-3-pro-image-preview | image_generation | 65K / 32K | $2.00 | $120.00 (Image) | $0.20 |
| gemini-3-flash-preview | chat | 1048K / 65K | $0.50 | $3.00 | $0.05 |
| gemini-2.5-flash-image | image_generation | 32K / 32K | $0.30 | $2.50 | $0.03 |
| gemini-2.5-pro | chat | 2048K / 65K | $1.25 (≤200K) | $10.00 (≤200K) | $0.125 |
| gemini-2.5-flash | chat | 1048K / 65K | $0.30 | $2.50 | $0.03 |
| gemini-2.5-flash-lite | chat | 1048K / 65K | $0.10 | $0.40 | N/A |
| gemini-flash-latest | chat | 1048K / 65K | $1.50 | $9.00 | $0.15 |

## Notes

- Available models may differ by API key group
- Some models may require separate access
- Long-context models may incur extra costs

## Updates

- The model list is updated continuously
- New models are synced when released 
