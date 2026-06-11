---
lang: en-US
title: Available Model List
outline: deep
---

# Available Model List

This page lists current mainstream AI provider models and capabilities for lookup and integration. For pricing, see [Model Pricing](/en/model-pricing).

## Model Notes

- The system uses the **latest available models** from each AI provider by default
- Different API keys are mapped to different provider groups
- **Model availability depends on group authorization**
- Model calls stay highly compatible with official APIs

## Available Model List (Updated Daily)

### OpenAI (GPT Series)
*Focuses on deep reasoning and native multimodal capabilities, evolving towards strong logic and complex system coordination.*

| Model Name | Type | Key Features |
| :--- | :--- | :--- |
| **gpt-5.5** | Multimodal Flagship | Million-level context, excels at complex long texts and multi-app tool calling. | 
| **gpt-5.4** | Strong Interactive Assistant | Millisecond native audio/video streaming calls, perfectly recognizes tone and emotion changes. |
| **gpt-5.4-mini** | Lightweight Efficiency Tool | `1.4s` blazing-fast response, ultra-low cost for daily interaction and content summarization. | 
| **gpt-image-2** | High-Precision Vision Hub | Excels at generating high-fidelity images and deeply parsing complex physics and scientific visual data. | 

---

### Anthropic (Claude 4 Family)
*Focuses on long-text fidelity, elegant code architecture, and highly human-like natural writing style.*

| Model Name | Type | Key Features |
| :--- | :--- | :--- |
| **claude-fable-5** | Long-Horizon Agent | Excels in multi-day asynchronous tasks with autonomous self-correction and multi-agent collaboration. |
| **claude-opus-4-8** | Peak Agent | Industry dominance in reasoning, long codebase architecture, and multi-step fully automated Agents. |
| **claude-opus-4-7** | Creative Long-Text Master | Natural and elegant writing style, strong rhythm, without mechanical feel or formatted traces. |
| **claude-opus-4-6** | Rigorous Researcher | Extremely low hallucinations, focuses on dismantling large volumes and providing highly precise citations. | 
| **claude-sonnet-4-6** | All-Round Dev Mainstay | Perfect balance of speed and intelligence, skillfully handles complex engineering dev and specific format extraction. | 
| **claude-haiku-4-5** | Blazing-Fast Triage Tool | Millisecond triage of massive emails, accurately and instantly replies to basic business inquiries in customer service. |

---

### Google (Gemini 3 Series)
*Focuses on native ultra-large context throughput, deep web search (Deep Research), and Google ecosystem integration.*

| Model Name | Type | Key Features |
| :--- | :--- | :--- |
| **gemini-2.5-pro** | **Long-Doc Encyclopedia** | Ingests massive PDFs with near-perfect "needle-in-a-haystack" precision for specific details. |
| **gemini-2.5-flash-image** | **Visual Capture Expert** | Snap a photo to quickly and accurately extract complex tables or professional objects. |
| **gemini-2.5-flash** | **High-Throughput Sorter** | Ultra-high concurrency and low cost, excels at massive text classification and rapid manual translation. |
| **gemini-3-pro-image** | **Flagship Imaging Master** | "Nano Banana Pro" GA version, studio-grade precision, complex graphic design and high-fidelity product prototyping. |
| **gemini-3.1-flash-image** | **Efficient Image Engine** | "Nano Banana 2" GA version, conversational image editing, blazing-fast generation at a mainstream price point. |
| **gemini-3.5-flash** | **Frontier Agent Engine** | Flagship Flash for coding and multi-step agent tasks, outperforming 3.1 Pro at 4x the speed. |
| **gemini-3.1-pro-preview** | **Deep Reasoning Brain** | 2M ultra-long context + top-tier multimodal reasoning, ideal for complex research and deep document analysis. |
| **gemini-3-flash-preview** | **Mid-Range All-Rounder** | Balanced performance and cost, supports Computer Use, perfect for general development and prototyping. |
| **gemini-3.1-flash-lite-preview** | **Ultimate-Value Lightweight** | Lowest price in the Gen 3 architecture, specializes in massive classification, summarization, and high-concurrency lightweight tasks. |
| **gemini-flash-lite-latest** | **Lightweight Alias (→3.1-flash-lite)** | `-latest` alias, automatically pointing to the newest Flash-Lite GA version. |
| **gemini-flash-latest** | **Flash Alias (→3.5-flash)** | `-latest` alias, automatically pointing to the newest Flash GA version (currently 3.5-flash). |

## Notes

- Updated daily around 08:00 Beijing time. For real-time availability, use the API from [Available Models API](/en/api-integration/models.html)
- Model names and capabilities stay aligned with official APIs
- New models are added when released
