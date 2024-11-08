import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Thinking in Scale",
  description: "Rowan Christmas' Blog",
  themeConfig: {
    footer: {
      message: '<span>Connect with me via <a href="mailto:rowan.christmas@mentorcg.com">email</a> or <a href="https://calendly.com/rowan-christmas-mentorcg" target="_">schedule a time</a> on my calendar.</span>',
      copyright: 'Copyright © 2024-present Rowan Christmas'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
            { text: 'Product Research', link: '/ProductResearch/product-research.md' },
            { text: 'Design & Development', link: '/DesignAndDev/design-and-dev.md' },
            { text: 'Financial Modeling', link: '/FinancialModeling/financial-modeling.md' },
            { text: 'AI & Big Enterprise', link: '/Enterprise/enterprise.md' },
    ],

    sidebar: [

      {
        text: 'Product Research',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/ProductResearch/product-research.md' },
          { text: 'Conjoint Analysis', link: '/ProductResearch/conjoint-analysis.md' },
          { text: 'Relative Weights', link: '/ProductResearch/relative-weights.md' },
          { text: 'MaxDiff', link: '/ProductResearch/max-diff.md' },

        ],
      },
      {
        text: 'Design & Development',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/DesignAndDev/design-and-dev.md' },
          { text: 'Why JavaScript?', link: '/DesignAndDev/why-javascript.md' },
          { text: 'Developer Experience', link: '/DesignAndDev/developer-experience.md' },
        ],
      },
      {
        text: 'Financial Modeling',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/Financial/financial-modeling.md' },
          { text: 'Understand the "Why?"', link: '/FinancialModeling/understand-why.md' },
          { text: 'Design your spreadsheet', link: '/FinancialModeling/design-your-spreadsheet.md' },
        ],
      },
      {
        text: 'AI & Big Enterprise',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/Enterprise/enterprise.md' },
          { text: 'What is Salesforce', link: '/Enterprise/what-is-salesforce.md' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/rowanchristmas/' }
    ]
  },
})
