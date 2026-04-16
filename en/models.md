---
lang: en-US
title: Models
outline: deep
---

# Models and Billing

This chapter summarizes the major AI vendor models currently available, their capabilities, and the billing rules, so they can be reviewed in one place.

## Model overview

- The system generally exposes the latest available models from each AI vendor.
- Different API keys are bound to different vendor groups.
- **Model availability depends on the permissions of the selected group.**
- All model calls remain highly compatible with the official APIs.

## Main model list (continuously updated)

### OpenAI (example GPT series)

| Model | Type | Highlights |
|--------|------|------|
| gpt-5.4 | Multimodal / reasoning | Current flagship model with the strongest reasoning, agent, and complex task execution capabilities, suitable for professional workflows |
| gpt-5.3-codex | Multimodal | Coding-optimized model with strong performance in code generation, refactoring, and debugging |
| gpt-5.2 | Multimodal | Balanced performance and latency, suitable for real-time interaction and general tasks |
| gpt-5.4-mini | Multimodal | Lower cost and high throughput, suitable for high-concurrency lightweight tasks such as classification, summarization, and customer support |

### Anthropic (example Claude series)

| Model | Type | Highlights |
|--------|------|------|
| claude-4.6-sonnet | Multimodal | Current main production model with long context and stable output |
| claude-4.5-sonnet | Multimodal | Balanced option for capability and cost |
| claude-4.6-opus | Multimodal / reasoning | Strong reasoning model for complex analysis and long-document understanding |
| claude-4.5-haiku | Lightweight | Very low latency and fast response, suitable for real-time systems and agent subtasks |

### Google (example Gemini series)

| Model | Type | Highlights |
|--------|------|------|
| gemini-3-pro-preview | Multimodal | Flagship preview model with strong multimodal and reasoning capabilities |
| gemini-3.1-flash-image | Multimodal | Enhanced image capabilities for visual understanding and generation |
| gemini-3-flash-preview | Multimodal | Low latency and high throughput for large-scale calls |
| gemini-2.5-pro | Multimodal | Stable production version with balanced performance and cost |

## Notes

- The models above are common examples. Actual availability depends on group permissions.
- **The model list shown in the console takes precedence**. Use the console as the authoritative source when entering model names.
- All model names and capabilities are aligned with the official APIs.
- New models will be added as they become available.

## Billing rules

All models follow the corresponding vendor’s official pricing. The platform does not alter the pricing standard.

### Token billing dimensions

Billing usually includes three categories:

| Type | Description |
|------|------|
| Input Tokens | Tokens consumed by user input |
| Output Tokens | Tokens consumed by model output |
| Cache Tokens | Context cache tokens, supported by some models |

### Billing principles

- **Billing is based on token usage.**
- **Different models have different unit prices.**
- **Input and output pricing often differ.**
- **Long-context models may use cache-based billing optimization.**

### Official pricing alignment

- Prices remain aligned with official vendor pricing.
- Pricing for newly launched models will be synchronized accordingly.

## Important notes

- Different groups bound to different keys may expose different model availability.
- Some models may require separate enablement.
- Long-context models such as Gemini or Claude may involve additional cost.
- Reasoning models are typically priced higher.

## Ongoing updates

- The model list will continue to be updated.
- New models will be synchronized as soon as they are launched.
- Any billing changes are subject to official announcements.

Please refer back to this page periodically.
