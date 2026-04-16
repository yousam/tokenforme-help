---
lang: en-US
title: Getting Started
outline: deep
---

# Getting Started

This chapter is intended for regular users. It helps you complete a successful first request in about five minutes.

## Prerequisites

- A computer with normal internet access.
- A modern browser such as Chrome, Edge, Firefox, or Safari.
- An account that can receive email or SMS verification for registering on the **Site URL**.

## Step 1: Register and sign in to the console

1. Open the **Site URL** in your browser.
2. Complete registration as prompted (for example, enter your email address and set a password).
3. After registration, sign in to the console with your account.

After signing in, you will see the web console homepage. All subsequent operations are performed in the console.

## Step 2: Create an API key

1. Find **API Keys** in the left sidebar.
2. Click **Create API Key**.
3. Fill in the required information (subject to the actual interface):
   - Name: for example, `personal-dev` or `backend-service`.
   - Group (rate multiplier): for example, “GPT Standard”. Each group belongs to a specific AI vendor.
4. Save the configuration. The system will generate an API key. Store it securely.

> Recommendations:
> - For personal use, create a dedicated key for yourself.
> - For team collaboration, create different keys for different projects or members to make usage statistics and access control easier.

## Step 3: Configure the API Base URL and API key in your agent/tool

As a general pattern, most agents or clients that support OpenAI/Anthropic-style APIs are configured in a similar way:

- Set the API Base URL according to the “API Base URL” section in the “API Keys” chapter and choose the correct regional endpoint (for the default region, follow the examples in that section and append `/v1` or `/v1beta` when needed).
- Set the API key/token to the key you created in the console. One key is bound to one vendor group.

Examples for common tools are listed below. The “Integrations” chapter provides more detailed examples.

- Codex: specify the Base URL and API key in the configuration file or startup parameters.
- Claude Code CLI: set the domain from the “API Base URL” section in the “API Keys” chapter and the corresponding key in the configuration file or environment variables.
- OpenClaw, Antigravity, Qoder, and Sursor: in the tool’s settings or configuration file, replace the original OpenAI/Anthropic endpoint with the domain from the “API Base URL” section in the “API Keys” chapter, and use the API key you created in the console.

## Step 4: Send a test request

1. In the configured agent or client, select any supported model (for example, a model compatible with OpenAI GPT-4).
2. Send a simple test message, for example:
   - Chinese: `你好，测试一下 <Site URL> 是否可用？`
   - English: `Hello, is <Site URL> working?`
3. If the configuration is correct, you should receive a normal model response.

If the test fails, see the “Troubleshooting” chapter and check the API Base URL, API key, and network environment.
