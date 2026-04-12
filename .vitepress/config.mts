import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'tokenfor.me',
  description: 'High-quality Multi-LLM API Gateway',

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/'
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/'
    }
  },

  themeConfig: {
    nav: [
      { text: '文档', link: '/zh/' },
      { text: 'Docs', link: '/en/' }
    ],

    sidebar: {
      '/zh/': [
        {
          text: '入门',
          items: [
            { text: '概览', link: '/zh/' },
            { text: '快速开始', link: '/zh/getting-started' },
            { text: '核心概念', link: '/zh/concepts' }
          ]
        },
        {
          text: '控制台',
          items: [
            { text: '控制台总览', link: '/zh/console.overview' },
            { text: '创建与管理 API', link: '/zh/console.create-api' },
            { text: '使用情况与账单', link: '/zh/console.usage-and-billing' }
          ]
        },
        {
          text: '集成与场景',
          items: [
            { text: '与智能体集成', link: '/zh/integrations.agents' },
            { text: '常见使用场景', link: '/zh/scenarios' }
          ]
        },
        {
          text: '支持与排错',
          items: [
            { text: '常见问题 FAQ', link: '/zh/faq' },
            { text: '故障排查', link: '/zh/troubleshooting' },
            { text: '售后与客服支持', link: '/zh/support' }
          ]
        }
      ],

      '/en/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Overview', link: '/en/' },
            { text: 'Getting Started', link: '/en/getting-started' },
            { text: 'Core Concepts', link: '/en/concepts' }
          ]
        },
        {
          text: 'Console',
          items: [
            { text: 'Console Overview', link: '/en/console.overview' },
            { text: 'Creating & Managing APIs', link: '/en/console.create-api' },
            { text: 'Usage & Billing', link: '/en/console.usage-and-billing' }
          ]
        },
        {
          text: 'Integrations & Scenarios',
          items: [
            { text: 'Integrations with Agents', link: '/en/integrations.agents' },
            { text: 'Typical Scenarios', link: '/en/scenarios' }
          ]
        },
        {
          text: 'Support & Troubleshooting',
          items: [
            { text: 'FAQ', link: '/en/faq' },
            { text: 'Troubleshooting', link: '/en/troubleshooting' },
            { text: 'Support & Customer Service', link: '/en/support' }
          ]
        }
      ]
    }
  }
})
