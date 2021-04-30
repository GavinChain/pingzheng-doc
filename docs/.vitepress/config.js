module.exports = {
  lang: 'en-US',
  title: '泊舟凭证',
  description: 'Vite & Vue powered static site generator.',

  themeConfig: {
    repo: 'vuejs/vitepress',
    docsDir: 'docs',

    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',

    algolia: {
      apiKey: 'c57105e511faa5558547599f120ceeba',
      indexName: 'vitepress'
    },

    carbonAds: {
      carbon: 'CEBDT27Y',
      custom: 'CKYD62QM',
      placement: 'vuejsorg'
    },

    nav: [
      {text: '开始', link: '/', activeMatch: '^/$|^/guide/'},
      {
        text: 'API',
        link: '/config/basics',
        activeMatch: '^/config/'
      },
      {
        text: '发行说行',
        link: 'https://github.com/vuejs/vitepress/releases'
      }
    ],

    sidebar: {
      '/guide/': getGuideSidebar(),
      '/config/': getConfigSidebar(),
      '/': getGuideSidebar()
    }
  }
};

function getGuideSidebar() {
  return [
    {
      text: '介绍',
      children: [
        {text: '泊舟凭证', link: '/'},
        {text: '快速开始', link: '/guide/getting-started'},
        {text: 'API', link: '/guide/configuration'},
        // {text: 'Asset Handling', link: '/guide/assets'},
        // {text: 'Markdown Extensions', link: '/guide/markdown'},
        // {text: 'Using Vue in Markdown', link: '/guide/using-vue'},
        // {text: 'Deploying', link: '/guide/deploy'}
      ]
    },
    {
      text: '相关',
      children: [
        {text: 'Vue2', link: '/guide/global-computed'},
        {text: 'Vuex', link: '/guide/global-component'},
        {text: 'ES6', link: '/guide/customization'},
        {text: '财税达', link: '/guide/customization'},
        {
          text: '从JSP模式一步步走向组件独立开发',
          link: '/guide/differences-from-vuepress'
        }
      ]
    }
  ];
}

function getConfigSidebar() {
  return [
    {
      text: '开始',
      children: [
        {text: '第一步', link: '/config/start/start'},
        {text: '使用', link: '/config/start/yinru'},
        {text: '依赖关系', link: '/config/start/depend'}
      ]
    },
    {
      text: '凭证API',
      children: [
        {text: 'API介绍', link: '/config/open/introduction'},
        // {text: '新增凭证', link: '/config/open/newPingZheng'},
        // {text: '仅新增凭证', link: '/config/open/justNewPingZheng'},
        // {text: '仅查看凭证', link: '/config/carbon-ads'},
        // {text: '仅修改凭证', link: '/config/carbon-ads'},
        // {text: '仅插入凭证', link: '/config/carbon-ads'},
        // {text: '仅冲销凭证', link: '/config/carbon-ads'},
        // {text: '仅复制凭证', link: '/config/carbon-ads'}
      ]
    },
    {
      text: 'Axios API 中文',
      children: [
        {text: '查询默认日期', link: '/config/algolia-search'},
        {text: '查询会计科目', link: '/config/algolia-search'},
        {text: '查询辅助核算', link: '/config/algolia-search'},
        {text: '通过凭证唯一码查找凭证API数据', link: '/config/algolia-search'},
        {text: '通过凭证唯一码查找上下凭证编码', link: '/config/algolia-search'},
        {text: '通过凭证唯一码查找凭证模型数据', link: '/config/algolia-search'},
        {text: '查询默认类型与编码', link: '/config/algolia-search'},
        {text: '保存插入凭证', link: '/config/algolia-search'},
        {text: '保存修改凭证', link: '/config/algolia-search'},
        {text: '保存新增凭证', link: '/config/algolia-search'}
      ]
    },
    {
      text: '模型',
      children: [
        {text: '凭证模型', link: '/config/homepage'},
        {text: '凭证API数据', link: '/config/homepage'}
      ]
    },
    {
      text: '帮助API',
      children: [
        {text: 'castPingZhengModel', link: '/config/homepage'},
        {text: 'apiData', link: '/config/algolia-search'},
      ]
    },
    // {
    //   text: 'Axios API ',
    //   children: [
    //     {text: 'PingZhengModel', link: '/config/homepage'},
    //     {text: 'PingZhengModel', link: '/config/homepage'},
    //     {text: 'apiData', link: '/config/algolia-search'},
    //   ]
    // },
    {
      text: '使用凭证',
      children: [
        {text: '新增凭证', link: '/config/open/newPingZheng'},
        {text: '仅新增凭证', link: '/config/open/justNewPingZheng'},
        {text: '仅查看凭证', link: '/config/carbon-ads'},
        {text: '仅修改凭证', link: '/config/carbon-ads'},
        {text: '仅插入凭证', link: '/config/carbon-ads'},
        {text: '仅复制凭证', link: '/config/carbon-ads'}
      ]
    },






    {
      text: '主题',
      children: [
        {text: '泊舟凭证（layer）', link: '/config/homepage'}
      ]
    }
  ];
}
