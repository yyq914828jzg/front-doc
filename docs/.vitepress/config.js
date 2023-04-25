import { useRouter } from 'vitepress';

export default {
  title: '创金工具库',
  description: '组件、公共方法等',
  themeConfig: {
    nav: [
      { text: "指南", link: "/guild/installation" },
      { text: "组件", link: "/components/button" },
    ],
    socialLinks: [{ icon: "github", link: "http://git.5irich.com/richadmin/new-tc-admin.git" }],

    sidebar: {
      '/guild/': [
        {
          text:'基础',
          collapsible: true,
          items: [
            {text:'安装',link:"/guild/installation"},
            {text:'快速开始',link:"/guild/quickstart"},
          ]
        }
      ],
      '/components/': [
        {
          text: '组件',
          collapsible: true,
          items: [
            { text: 'button', link: '/components/button' },
            { text: 'table', link: '/components/table' },

          ]
        }
      ]
    }
  }
}
