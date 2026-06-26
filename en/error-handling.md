---
lang: en-US
title: GPT Error Handling & Retries
outline: deep
---

# GPT Error Handling & Retries

This chapter explains the unified error structure returned by the **Site URL** when a request fails, along with the recommended client-side handling. Designing your retry and alerting logic according to this guide will give you a more stable integration.

> This guide uses the `/v1/chat/completions` inbound endpoint as an example.

## Unified error structure

All error responses are normalized to the following structure:

```json
{ "error": { "type": "...", "message": "..." } }
```

Use **`error.type` + the HTTP status code** as your decision basis. The `message` field is for diagnostics only; its text may change with the upstream, so **do not match on it exactly**.

## Error types (non-streaming)

| error.type | HTTP status | Meaning | Recommended handling |
| --- | --- | --- | --- |
| `rate_limit_error` | 429 | Rate limited / concurrency capped | Back off and retry; start at 1–2s, exponential backoff up to ~30s |
| `upstream_error` | 502 / 503 | Upstream temporarily unavailable or overloaded | Back off and retry; short backoff for 502, longer interval and reduced concurrency for 503 |
| `api_error` | 503 | Service temporarily unavailable | Back off and retry |

> The same HTTP status code may map to different `error.type` values (for example, a 503 can be either `upstream_error` or `api_error`), so always evaluate `error.type` together with the status code.

## Streaming scenarios

In streaming requests, the HTTP response headers are flushed as soon as the first data packet is sent and the status code is fixed at `200`; it can no longer change even if an error occurs afterward. As a result, **streaming errors are not reflected in the HTTP status code — they are emitted as SSE events in the response body**:

```text
event: error
data: {"error":{"type":"upstream_error","message":"..."}}
```

Recommended handling:

1. **Parse the response body instead of relying on the status code.** In streaming mode, read `error.type` from the SSE `error` event to make your decision.
2. **Classify by `error.type` first**, following the three categories in the table above.
3. **To fine-tune backoff pacing**, you may inspect keywords in the `message`:
   - Contains `overloaded` → treat as overloaded, use a longer backoff;
   - Contains `temporarily unavailable` → treat as temporarily unavailable, use a shorter backoff.

## Recommended retry strategy

- **Rate limiting (`rate_limit_error`)**: use exponential backoff to avoid hammering the service in a short window.
- **Temporarily unavailable / overloaded (`upstream_error` / `api_error`)**: keep automatic retries; when overloaded, also reduce concurrency.
- **Avoid unbounded retries**: set a maximum retry count and an overall timeout, and log or alert on persistent failures.

> The backoff values above are general suggestions; adjust them to match your own latency and concurrency profile.

## When you need help

If you still see a high error rate after following this guide, please contact support and provide as much of the following as possible:

- The approximate time window when the issue occurred;
- The `error.type` and HTTP status code observed;
- A request example (with sensitive content removed): the model name used, whether it was streaming, and key parameters.

Providing this information significantly speeds up diagnosis.
