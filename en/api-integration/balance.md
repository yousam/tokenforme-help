# Balance API

## Balance

**Authentication**  
`Authorization: Bearer <YOUR_API_KEY>`

Query usage, balance, and quota.

## Endpoint

- `GET /v1/usage`: query used amount

## Example Request

```bash
curl <API BaseURL>/v1/usage \
  -H "Authorization: Bearer <YOUR_API_KEY>"
```

## Query Parameters (Optional)

```text
?start_date=2026-04-01&end_date=2026-05-06
```

Used for `model_stats`. Defaults to the last 30 days.

## Response Structure

The API returns one of three structures depending on the key mode.

---

## Mode 1: `quota_limited`

For keys with a **total quota** or **rate limits**.

```json
{
  "mode": "quota_limited",
  "isValid": true,
  "status": "active",
  "quota": {
    "limit": 10.0,
    "used": 3.5,
    "remaining": 6.5,
    "unit": "USD"
  },
  "remaining": 6.5,
  "unit": "USD",
  "rate_limits": [
    {
      "window": "5h",
      "limit": 5.0,
      "used": 1.2,
      "remaining": 3.8,
      "window_start": "2026-05-06T10:00:00Z",
      "reset_at": "2026-05-06T15:00:00Z"
    },
    {
      "window": "1d",
      "limit": 20.0,
      "used": 5.0,
      "remaining": 15.0,
      "window_start": "2026-05-06T00:00:00Z",
      "reset_at": "2026-05-07T00:00:00Z"
    },
    {
      "window": "7d",
      "limit": 100.0,
      "used": 30.0,
      "remaining": 70.0,
      "window_start": "2026-04-30T00:00:00Z",
      "reset_at": "2026-05-07T00:00:00Z"
    }
  ],
  "expires_at": "2026-12-31T23:59:59Z",
  "days_until_expiry": 239,
  "usage": {},
  "model_stats": []
}
```

### Field Notes

- `quota`: returned only when the key has a total quota
- `rate_limits`: returned only when the key has rate limits
- `expires_at` / `days_until_expiry`: returned only when the key has an expiration time

---

## Mode 2: `unrestricted` + Subscription Group

For **subscription plan** keys.

```json
{
  "mode": "unrestricted",
  "isValid": true,
  "planName": "Pro Plan",
  "unit": "USD",
  "remaining": 15.5,
  "subscription": {
    "daily_usage_usd": 2.5,
    "weekly_usage_usd": 10.0,
    "monthly_usage_usd": 34.5,
    "daily_limit_usd": 5.0,
    "weekly_limit_usd": 30.0,
    "monthly_limit_usd": 100.0,
    "expires_at": "2026-06-01T00:00:00Z"
  },
  "usage": {},
  "model_stats": []
}
```

### Field Notes

- `remaining`: the minimum remaining amount across daily, weekly, and monthly limits
- `subscription`: usage and limits within the subscription cycle

---

## Mode 3: `unrestricted` + Wallet Balance

For keys using **wallet balance**.

```json
{
  "mode": "unrestricted",
  "isValid": true,
  "planName": "Wallet Balance",
  "remaining": 25.8,
  "unit": "USD",
  "balance": 25.8,
  "usage": {},
  "model_stats": []
}
```

### Field Notes

- `balance`: current wallet balance
- `remaining`: currently available balance

---

## Common Substructure: `usage`

```json
{
  "today": {
    "requests": 42,
    "input_tokens": 15000,
    "output_tokens": 8000,
    "cache_creation_tokens": 500,
    "cache_read_tokens": 2000,
    "total_tokens": 25500,
    "cost": 0.12,
    "actual_cost": 0.1
  },
  "total": {
    "requests": 1200,
    "input_tokens": 500000,
    "output_tokens": 280000,
    "cache_creation_tokens": 12000,
    "cache_read_tokens": 60000,
    "total_tokens": 852000,
    "cost": 4.2,
    "actual_cost": 3.8
  },
  "average_duration_ms": 1350,
  "rpm": 2.5,
  "tpm": 850.0
}
```

### Field Notes

#### `today`

Today's usage, including:

- `requests`: request count
- `input_tokens`: input tokens
- `output_tokens`: output tokens
- `cache_creation_tokens`: cache creation tokens
- `cache_read_tokens`: cache read tokens
- `total_tokens`: total tokens
- `cost`: raw cost
- `actual_cost`: actual billed cost

#### `total`

Total usage. Fields match `today`.

#### Other Metrics

- `average_duration_ms`: average request latency in milliseconds
- `rpm`: requests per minute
- `tpm`: tokens per minute

---

## Common Substructure: `model_stats`

Usage grouped by model. Defaults to the last 30 days.

```json
[
  {
    "model": "gpt-5.4",
    "requests": 120,
    "tokens": 350000,
    "cost": 1.25
  }
]
```

Exact fields depend on the actual response. Usually includes:

- `model`
- `requests`
- `tokens`
- `cost`

---

## Notes

- `model_stats` defaults to the last 30 days
- Use `start_date` and `end_date` to specify a time range
- Response structure changes automatically based on the current API key quota mode
