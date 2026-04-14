---
lang: en-US
title: Overview
outline: deep
---

# tokenfor.me Overview

## What is tokenfor.me?

tokenfor.me is a high-quality multi-LLM API gateway designed for both enterprise and individual developers. It provides a unified, stable, and highly available entry point for integrating and managing multiple large language models.

With a single domain, you can integrate AI vendors such as OpenAI, Anthropic, and Gemini, and manage configuration, authentication, usage, and billing in one place.

> Note: a single key is bound to **one group of one AI vendor (with a specific rate)**. To use additional vendors or groups, create additional keys.

## API base URLs

When making requests, choose the appropriate API base URL for your region. Throughout this documentation, we refer to these collectively as the **"API base URL"**:

- China region: `https://cn-api.tokenfor.me`
- Default (other regions): `https://api.tokenfor.me`

Unless otherwise noted, any place that needs to mention a concrete endpoint uses the unified wording: **"see the \"API base URLs\" section in the \"Overview\" chapter"**. Configure your tools with the URL for your region as described in this section.

## Contact information

For technical support, after-sales service, or top-up/billing questions, you can reach us via the following channels (see the **Support & Customer Service** chapter for details):

- Support QQ: `3928789892`
- Support WeChat: `zzbar2025`
- Enterprise email: see the "Contact information" section ("Enterprise email") in the "Overview" chapter

## Who is it for?

- **Individual developers** who want to switch between multiple AI vendors while keeping key and billing management centralized.
- **Small teams / startups** who share a common gateway configuration but isolate keys and costs per project or member.
- **Enterprise users** who reuse the same gateway across multiple internal tools (Codex, Claude Code CLI, OpenClaw, etc.) to reduce integration and operational overhead.

## Basic usage flow (3 steps)

1. **Sign up and sign in**: open `https://tokenfor.me` in your browser, register an account, and sign in to the console.
2. **Create an API key**: in **API Keys**, create a new key and choose the appropriate AI vendor group (rate). Detailed model lists will be provided in the **Models** section.
3. **Configure your agents/tools**:
   - Set the Base URL according to the "API base URLs" section in the "Overview" chapter for your region;
   - Use `/v1` paths for OpenAI/Anthropic-compatible APIs and `/v1beta` for Gemini-compatible APIs;
   - In Codex, Claude Code CLI, OpenClaw, Antigravity, Qoder, Sursor, and other tools, paste the corresponding API key.

Once configured, your tools will call the underlying AI vendors through tokenfor.me. The following chapters cover getting started, core concepts, console usage, integrations with agents, top-up & settlement, and troubleshooting.