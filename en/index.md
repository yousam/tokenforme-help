---
lang: en-US
title: Overview
outline: deep
---

# tokenfor.me Overview

## What is tokenfor.me?

tokenfor.me is a **High-quality Multi-LLM API Gateway** designed for internal enterprise users and individual developers. It provides a unified, stable, and high-availability gateway to multiple large language model providers.

Through a single unified endpoint, you can easily access multiple model providers such as OpenAI, Anthropic, and Gemini, with unified configuration, authentication, usage tracking, and billing.

## Who is it for?

- **Individual developers** who want to quickly integrate multiple LLM providers and manage keys and billing in one place.
- **Small teams / startups** who want shared configuration, centralized cost control, and permission management.
- **Enterprise users** who need to reuse the same gateway across internal tools (Codex, Claude Code CLI, OpenClaw, etc.) to reduce operational and management overhead.

## Basic usage flow

1. **Visit the console**: open `https://tokenfor.me` in your browser and sign up / sign in.
2. **Create an API Key**: in the Web console, create an API key and select the model routes you want to use (OpenAI, Anthropic, Gemini, etc.).
3. **Configure your agents/tools**: in Codex, Claude Code CLI, OpenClaw, Antingravite, Qoder, Suror, and other tools, set the Base URL to `https://api.tokenfor.me` and paste your API key.
4. **Start calling models**: send model requests from your tools; all calls are routed and managed through tokenfor.me.

The following chapters will walk you through getting started, core concepts, console operations, integrations with common agents, as well as top-up, billing, and support information.