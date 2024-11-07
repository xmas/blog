import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Thinking in Scale",
  description: "Rowan Christmas' Blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
        { text: 'Guide', link: '/guide' },
        {
          text: 'Dropdown Menu',
          items: [
            { text: 'Item A', link: '/item-1' },
            { text: 'Item B', link: '/item-2' },
            { text: 'Item C', link: '/item-3' }
          ]
        }
    ],

    sidebar: [

      {
        text: 'Product Marketing',
        collapsed: false,
        items: [
          { text: 'blub1', link: '/group2/page1.md' },
          { text: 'blub2', link: '/group2/page2.md' },
        ],
      },
      {
        text: 'Design & Development',
        collapsed: false,
        items: [
          { text: 'blub1', link: '/group2/page1.md' },
          { text: 'blub2', link: '/group2/page2.md' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
