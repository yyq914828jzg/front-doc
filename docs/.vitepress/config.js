import { useRouter } from 'vitepress';

export default {
  title: '创金工具库',
  description: '组件、公共方法等',
  base:"/front-doc/",
  themeConfig: {
    
    socialLinks: [
      { icon: "github", link: "http://git.5irich.com/richadmin/new-tc-admin.git" },
    ],
    nav: [
      { text: "指南", link: "/guild/installation" },
      { text: "组件", link: "/components/button" },
      { text: "工具类", items:[
        {text:'工具类',link:"/utils/constant"},
        {text:'项目成员',link:"/components/table"},
      ] },
    ],
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
          text: '通用基础组件',
          collapsed:true,
          collapsible: true,
          items: [
            { text: 'button', link: '/components/button' },
            { text: 'table', link: '/components/table' },

          ]
        },
        {
          text: '通用业务组件',
          collapsed:true,
          collapsible: true,
          items: [
            { text: '通用组件1', link: '/components/button1' },
            { text: '通用组件2', link: '/components/table1' },

          ]
        },
        {
          text: '高级业务组件',
          collapsed:true,
          collapsible: true,
          items: [
            { text: '高级组件1', link: '/components/button2' },
            { text: '高级组件2', link: '/components/table2' },

          ]
        },
        {
          text: 'element扩展组件',
          collapsed:true,
          collapsible: true,
          items: [
            { text: '高级组件1', link: '/components/button2' },
            { text: '高级组件2', link: '/components/table2' },

          ]
        },
        {
          text: 'iview扩展组件',
          collapsed:true,
          collapsible: true,
          items: [
            { text: '高级组件1', link: '/components/button2' },
            { text: '高级组件2', link: '/components/table2' },

          ]
        }
      ],
      '/utils/': [
        {text:'静态工具类',link:"/utils/constant"},
        {text:'验证工具类',link:"/utils/validate"},
        {text:'基础工具类',link:"/utils/common"},
        {text:'日期工具类',link:"/utils/date"},
      ]
    },
    // search: {
    //   provider: 'local',
    //   options: {
    //     appId: 'F5SR282GNJ',
    //     apiKey: 'f61006a9f0a5f35280db2c7d4e099026',
    //     indexName: '5itich'
    //   }
    // },
    // footer: {
    //   message: 'Released under the MIT License.',
    //   copyright: 'Copyright © 2019-present Evan You'
    // },
    // docFooter: {
    //   prev: '',
    //   next: ''
    // }
  }
}
