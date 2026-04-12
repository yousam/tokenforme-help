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
          text: '控制台（Console）',
          items: [
            { text: '仪表盘（Dashboard）', link: '/zh/console.overview' },
            { text: 'API 密钥（API Keys）', link: '/zh/console.create-api' },
            { text: '使用记录（Usage）', link: '/zh/console.usage-and-billing' }
          ]
        },
        {
          text: '充值与结算',
          items: [
            { text: '充值与优惠', link: '/zh/topup' },
            { text: '货币与结算', link: '/zh/console.currency-and-settlement' },
            { text: '售后与客服支持', link: '/zh/support' }
          ]
        },
        {
          text: '模型',
          items: [
            { text: '模型', link: '/zh/models' }
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
            { text: 'Dashboard', link: '/en/console.overview' },
            { text: 'API Keys', link: '/en/console.create-api' },
            { text: 'Usage', link: '/en/console.usage-and-billing' }
          ]
        },
        {
          text: 'Top-up & Settlement',
          items: [
            { text: 'Top-up & Discounts', link: '/en/topup' },
            { text: 'Currency & Settlement', link: '/en/console.currency-and-settlement' },
            { text: 'Support & Customer Service', link: '/en/support' }
          ]
        },
        {
          text: 'Models',
          items: [
            { text: 'Models', link: '/en/models' }
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
