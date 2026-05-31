---
lang: en-US
title: Common Scenarios
outline: deep
---

# Common Scenarios

This chapter presents several typical scenarios to show how individual users and enterprise users use the **Site URL** in real workflows.

## Scenario 1: An individual developer centrally manages multiple vendors

**Needs:**

- Use multiple vendors such as OpenAI, Anthropic, and Gemini.
- Avoid maintaining different API Base URLs and keys in each agent or project.
- Have a single place to view usage and cost.

**Recommended approach:**

1. Create a personal API key in the **Site URL** console, for example `personal-dev`.
2. Enable the commonly used vendors in model routing (OpenAI, Anthropic, Gemini, etc.).
3. In all tools (Codex, Claude Code CLI, OpenClaw, Qoder, etc.):
   - Set the API Base URL according to the “API Base URL” section in the “API Keys” chapter for your region.
   - Use the API key corresponding to `personal-dev`.
4. View the combined usage on the **Usage** page to estimate cost and adjust usage habits.

## Scenario 2: A small team shares a gateway and allocates budgets

**Needs:**

- Multiple team members use different tools to call models.
- Manage budgets and accounts centrally to avoid duplicated purchasing and configuration.
- Track usage by project or by member.

**Recommended approach:**

1. Use a team/organization account to create multiple API keys, for example:
   - `team-project-A`
   - `team-project-B`
   - `member-alice`
   - `member-bob`
2. Configure appropriate model routing for each key and set limits if available.
3. Distribute keys to team members and standardize the configuration: the correct API Base URL + a dedicated key.
4. Regularly review usage on **Usage** and billing information on **Billing** to evaluate cost by project or by member.
5. Adjust permissions, limits, or routing policies based on observed usage.

## Scenario 3: Enterprise internal multi-tool integration

**Needs:**

- Multiple internal tools are used at the same time: coding assistants, chatbots, internal knowledge bases, and automation scripts.
- Route all tools through a unified gateway to access multiple vendors.
- Unified billing, auditable usage statistics, and reliable after-sales support.

**Recommended approach:**

1. Contact the **Site URL** team to discuss top-up and settlement plans suitable for enterprise usage (see “Top-up & Rate” and “Support” chapters).
2. The internal platform or operations team:
   - Creates API keys for different business lines or systems.
   - Configures higher-stability groups and specific routing strategies for critical workloads.
3. Configure internal tools (OpenClaw instances, internal bots, CI/CD scripts, etc.) with the API Base URL described in the “API Base URL” section in the “API Keys” chapter and use the corresponding business keys.
4. Regularly export usage and billing information and integrate with cost-center or finance systems.
5. When issues occur, use the after-sales support channels to troubleshoot quickly.

## Scenario 4: Temporary events or short-term high concurrency

**Needs:**

- During hackathons, internal trainings, or campaigns, model traffic spikes for a short period.
- Quick setup, centralized management, and easy cleanup after the event.

**Recommended approach:**

1. Create an event-specific API key, for example `event-2026-hackathon`.
2. Provide participants with a standard integration note:
   - API Base URL: see the “API Base URL” section in the “API Keys” chapter.
   - API key: the key for `event-2026-hackathon` (limits or validity windows may be applied if needed).
3. Monitor traffic in real time on the **Usage** page.
4. After the event, disable or delete the key.
5. Use billing data to review model usage and cost structure during the event.
