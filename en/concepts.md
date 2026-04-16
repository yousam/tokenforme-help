---
lang: en-US
title: Core Concepts
outline: deep
---

# Core Concepts

This chapter explains the key concepts that matter most to regular users of the **Site URL**, helping you better understand the configuration items and usage statistics shown in the console.

## Multi-LLM API Gateway

The core positioning of the **Site URL** is a **high-quality Multi-LLM API Gateway**:

- Access multiple model providers through one unified domain. See the “API Base URL” section in the “Overview” chapter.
- Use unified authentication, billing, and usage reporting.
- Reduce repeated configuration and adaptation work by abstracting away vendor-specific differences.

> Note: a unified domain does not mean a single key can access all vendors at the same time. See “API keys, AI vendors, and groups” below.

## Account and organization

- **Account**: your personal account on the **Site URL**, used to sign in to the console, manage keys, and view billing information.
- **Organization / team** (if available):
  - Used for multi-user collaboration and centralized management of keys, usage, and billing.
  - Typically used by enterprise or group customers.

## API keys, AI vendors, and groups

- On the **Site URL**, **one key corresponds to one group under one AI vendor**. For example: OpenAI → GPT Standard.
- If you need to use other vendors such as Anthropic or Gemini, create separate keys.
- A single vendor may provide multiple groups. Different groups represent different channel characteristics and rate multipliers.

## Usage and billing

- Every request sent through the API Base URL is recorded. See the “API Base URL” section in the “Overview” chapter for the actual endpoints.
- The console provides usage statistics and billing views for:
  - request counts / tokens / estimated cost;
  - usage distribution across different API keys.
- CSV export is available on the Usage page.
- Input, output, and cache token data are returned by the underlying vendor interfaces.
- Token prices follow the official vendor pricing.

## Individual users vs. group / enterprise users

- **Individual users** typically focus on reliable access, top-up methods, and cost control.
- **Group / enterprise users** usually care about those items as well as team management, cost allocation, service levels, and after-sales support.

The following chapters walk through real usage scenarios for both types of users and explain how to use the **Site URL** effectively with console examples and configuration guidance.
