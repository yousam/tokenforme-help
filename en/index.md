---
lang: en-US
title: Overview
outline: deep
---

# tokenfor.me Overview

## What is tokenfor.me?

tokenfor.me is a **High-quality Multi-LLM API Gateway** for enterprises and individual developers, providing a unified, stable, and high-availability entry point to multiple AI vendors.

With a single domain, you can integrate AI vendors such as OpenAI, Anthropic, and Gemini, and manage configuration, authentication, usage, and billing in one place.

> Note: a single key is bound to **one group of one AI vendor (with a specific rate)**. To use additional vendors or groups, create additional keys.

## Who is it for?

- **Individual developers** who want to switch between multiple AI vendors while keeping key and billing management centralized.
- **Small teams / startups** who share a common gateway configuration but isolate keys and costs per project or member.
- **Enterprise users** who reuse the same gateway across multiple internal tools (Codex, Claude Code CLI, OpenClaw, etc.) to reduce integration and operational overhead.

## Basic usage flow (3 steps)

1. **Sign up and sign in**: open `https://tokenfor.me` in your browser, register an account, and sign in to the console.
2. **Create an API key**: in **API Keys**, create a new key and choose the appropriate AI vendor group (rate). Detailed model lists will be provided in the **Models** section.
3. **Configure your agents/tools**:
   - Set the Base URL to `https://api.tokenfor.me`;
   - Use `/v1` paths for OpenAI/Anthropic-compatible APIs and `/v1beta` for Gemini-compatible APIs;
   - In Codex, Claude Code CLI, OpenClaw, Antigravity, Qoder, Sursor, and other tools, paste the corresponding API key.

Once configured, your tools will call the underlying AI vendors through tokenfor.me. The following chapters cover getting started, core concepts, console usage, integrations with agents, top-up & settlement, and troubleshooting.