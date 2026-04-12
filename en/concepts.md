---
lang: en-US
title: Core Concepts
outline: deep
---

# Core Concepts

This chapter explains, in practical terms, the core concepts in tokenfor.me that matter most to normal users, so you can better understand what you see in the console.

## Multi-LLM API Gateway

tokenfor.me positions itself as a **High-quality Multi-LLM API Gateway**:

- A single endpoint (`https://api.tokenfor.me`) to access multiple model providers;
- Unified authentication, billing, and usage statistics;
- Hides provider-specific differences and reduces integration overhead.

For normal users, you can think of it as:

> "Many different LLM providers, but one unified, stable gateway to access them all."

## Account and Organization

- **Account**: your personal login on tokenfor.me. You use it to sign into the console, manage keys, and view billing.
- **Organization / Team** (if enabled):
  - Used for multi-user collaboration and centralized management of keys, usage, and billing;
  - Typically used by enterprise or team customers.

## API Keys / Tokens

- Each API key represents a set of access permissions and quota;
- You can create different keys for different use cases, for example:
  - A personal development/testing key;
  - A key dedicated to a specific project;
  - A key dedicated to a specific team member.
- In your client/agent, you only need to configure **Base URL** and **API Key** to use tokenfor.me.

> Important: Keep your keys secret. Do not paste them into public repositories or untrusted environments.

## Model Routing

Model routing is how tokenfor.me connects you to different providers:

- In the console, you can enable model routes from providers such as:
  - OpenAI
  - Anthropic
  - Gemini
  - Other supported providers
- As a normal user, you usually only need to:
  - Enable the providers/models you want in the console;
  - Use those model names in your client.

## Usage and Billing

- Every call made through `https://api.tokenfor.me` is recorded;
- The console provides usage and billing views so you can see:
  - Total call counts / tokens / estimated cost;
  - Breakdowns by model and by API key.

This helps both individuals and enterprises control and optimize their LLM costs.

## Individual vs Enterprise Users

- **Individual users** often care about:
  - Stable access to models;
  - How to top up;
  - Whether costs are predictable and controllable.
- **Enterprise / group users** care additionally about:
  - Team-wide management of keys and usage;
  - Cost allocation by department or project;
  - Support and service levels (SLA).

Later chapters will show how to use tokenfor.me effectively from both perspectives, with concrete console and configuration examples.