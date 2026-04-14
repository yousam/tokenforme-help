---
lang: en-US
title: Getting Started
outline: deep
---

# Getting Started

This chapter is written for **normal users** and helps you complete your first successful call with tokenfor.me in a few minutes.

## Prerequisites

- A computer with stable Internet access.
- A modern browser: Chrome / Edge / Firefox / Safari, etc.
- An email or phone number that can receive verification messages for registering a tokenfor.me account.

## Step 1: Sign up and sign in

1. Open your browser and visit `https://tokenfor.me`.
2. Follow the on-screen instructions to complete registration (email, password, etc.).
3. After registration, sign in to the Web console with your account.

Once signed in, you will see the console home page. All subsequent operations are performed there.

## Step 2: Create an API Key

1. In the left-hand navigation, go to **API Keys**.
2. Click **Create API Key**.
3. Fill in the following fields (actual UI may differ slightly):
   - **Name**: e.g. `personal-dev`, `backend-service`.
   - **Group (rate)**: e.g. `GPT Standard` (each group belongs to one AI vendor).
4. Save to generate an API key and keep it in a safe place.
> Tips:
> - For personal use, create a dedicated key just for yourself.
> - For teams, create different keys for different projects or members.

## Step 3: Configure tokenfor.me in your agents/tools

Most clients that support OpenAI/Anthropic-style APIs can be configured in the same way:

- Set **Base URL / Endpoint** according to the "API base URLs" section in the "Overview" chapter. For most users this means choosing the regional endpoint described there, and then appending `/v1` (OpenAI/Anthropic-compatible) or `/v1beta` (Gemini-compatible) as needed.
- Set **API Key / Token** to: the key you created in the console (one key per provider group)

Examples (detailed versions are in the "Integrations" chapter):

- **Codex**: set `apiBase` and `apiKey` in its config file or startup options.
- **Claude Code CLI**: set base URL and key via environment variables or config, using the endpoint from the "API base URLs" section in the "Overview" chapter.
- **OpenClaw / Antigravity / Qoder / Sursor**: change the original OpenAI/Anthropic endpoint to the API base URL configured as described under "API base URLs", and use the tokenfor.me key.

## Step 4: Send a test request

1. In your configured agent or client, pick a model (for example, one compatible with OpenAI GPT-4).
2. Send a simple test message, for example:
   - Chinese: `你好，测试一下 tokenfor.me 是否可用？`
   - English: `Hello, is tokenfor.me working?`
3. If configuration is correct, you should receive a normal model reply.

If the test fails, refer to the **Troubleshooting** chapter to check Base URL, API key, network, and other common issues.