---
lang: en-US
title: Overview
outline: deep
---

# tokenfor.me Overview

## What is tokenfor.me?

tokenfor.me is a multi-model API gateway (a high-quality Multi-LLM API Gateway) for enterprise and individual developers. It provides a unified, stable, and highly available way to integrate and manage model access.

With a single domain, you can access multiple AI vendors (such as OpenAI, Anthropic, and Gemini) and manage configuration, authentication, usage, and billing in one place.

> Note: **One API key is bound to one vendor group (rate multiplier)**. If you need other vendors or other groups, create additional keys.

## Site URLs

- Global site: `https://tokenfor.me`
- CN2 region: `https://cn.tokenfor.me`
- UE1 region: `https://ue1.tokenfor.me`

Choose the site that best fits your needs after consulting support. Account balance, membership, and related data are not shared across sites.

## API Base URL

When making API calls, choose the API Base URL for your region. In this documentation, we refer to it uniformly as the **API Base URL**:

- Global: `https://api.tokenfor.me`
- CN2 region: `https://cn-api.tokenfor.me`
- UE1 region: `https://ue1-api.tokenfor.me`

Unless otherwise noted, when a concrete domain is required, the documentation uses the unified wording: **“See the API Base URL configuration in the ‘API Keys’ chapter.”** Configure your tools according to this section.

## Contact

For technical support, pre-sales, after-sales, or top-up questions:

- Support QQ: `3928789892`
- Support Email: `service@tokenfor.me`

## Intended audience

- Individual developers who want flexible multi-vendor access with centralized key and billing management.
- Small teams / startups that share a gateway setup while isolating keys and costs per project or member.
- Enterprise users who reuse a single gateway across tools (Codex, Claude Code CLI, OpenClaw, etc.) to reduce operational overhead.

## Quick workflow (3 steps)

1. **Sign up and sign in**: open the **Site URL**, complete registration, and sign in to the console.
2. **Create an API key**: create a key in **API Keys** and choose the vendor group (rate multiplier). Model availability is shown in the console (the console view is authoritative).
3. **Configure your tools**:
   - Set the API Base URL according to the “API Base URL” section in the “API Keys” chapter for your region.
   - Use `/v1` for OpenAI/Anthropic-compatible endpoints and `/v1beta` for Gemini-compatible endpoints.
   - Paste the corresponding API key into Codex, Claude Code CLI, OpenClaw, Antigravity, Qoder, Sursor, and other tools.

After configuration, you can call supported vendor models through tokenfor.me. The following chapters cover Getting Started, Core Concepts, Console usage, Integrations, Top-up & Settlement, and Troubleshooting.
