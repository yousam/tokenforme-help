# 查询余额API

## 查询余额 

**认证方式**  
`Authorization: Bearer <你的_API_Key>`

查询用量统计、余额、配额。

## 接口路径

- `GET /v1/usage`：查询已使用量

## 示例请求

```bash
curl <API BaseURL>/v1/usage \
  -H "Authorization: Bearer <你的_API_Key>"
```

## 查询参数（可选）

```text
?start_date=2026-04-01&end_date=2026-05-06
```

用于 `model_stats`，默认查询近 30 天。

## 返回结构

根据 key 的模式，接口会返回三种不同数据结构。

---

## 模式一：`quota_limited`

适用于 key 设置了**总额度**或**速率限制**的情况。

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

### 字段说明

- `quota`：仅当 key 配置了总额度时出现
- `rate_limits`：仅当 key 配置了速率限制时出现
- `expires_at` / `days_until_expiry`：仅当 key 存在过期时间时出现

---

## 模式二：`unrestricted` + 订阅制分组

适用于**订阅计划**类型的 key。

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

### 字段说明

- `remaining`：日 / 周 / 月剩余额度中的最小值
- `subscription`：订阅周期内的使用量与上限信息

---

## 模式三：`unrestricted` + 钱包余额

适用于**钱包余额**模式的 key。

```json
{
  "mode": "unrestricted",
  "isValid": true,
  "planName": "钱包余额",
  "remaining": 25.8,
  "unit": "USD",
  "balance": 25.8,
  "usage": {},
  "model_stats": []
}
```

### 字段说明

- `balance`：钱包当前余额
- `remaining`：当前可用余额

---

## 公共子结构：`usage`

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

### 字段说明

#### `today`

今日使用情况，包括：

- `requests`：请求次数
- `input_tokens`：输入 tokens
- `output_tokens`：输出 tokens
- `cache_creation_tokens`：缓存创建 tokens
- `cache_read_tokens`：缓存读取 tokens
- `total_tokens`：总 tokens
- `cost`：原始费用
- `actual_cost`：实际计费费用

#### `total`

累计使用情况，字段含义与 `today` 一致。

#### 其他统计字段

- `average_duration_ms`：平均请求耗时（毫秒）
- `rpm`：每分钟请求数
- `tpm`：每分钟 token 数

---

## 公共子结构：`model_stats`

按模型分组的用量统计，默认查询近 30 天。

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

具体字段以实际返回结构为准，通常包含：

- `model`
- `requests`
- `tokens`
- `cost`

---

## 说明

- `model_stats` 默认返回近 30 天数据
- 如需指定时间范围，可通过 `start_date` 与 `end_date` 查询
- 返回结构会根据当前 API Key 的额度模式自动变化
