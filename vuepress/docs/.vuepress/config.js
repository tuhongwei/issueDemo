module.exports = {
  title: '',
  head: [
    ['link', { rel: 'icon', href: '/logo6.ico' }]
  ],
  locales: {
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
      title: '欢迎来到Twittytop的博客',
      description: 'Twittytop的博客',
    },
    '/en/': {
      lang: 'en-US',
      title: 'Welcome to Twittytop\'s blog',
      description: 'Twittytop\' blog',
    }
  },
  // 配置主题的语言
  themeConfig: {
    repo: 'tuhongwei/IBlog',
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    editLinks: true,
    smoothScroll: true,
    locales: {
      '/': {
        // 多语言下拉菜单的标题
        selectText: '选择语言',
        // 该语言在下拉菜单中的标签
        label: '简体中文',
        ariaLabel: "选择语言",
        // 编辑链接文字
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        // Service Worker 的配置
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
        // 当前 locale 的 algolia docsearch 选项
        algolia: {},
        nav: require('./nav/zh'),
        sidebar: {
          '/': [/* ... */],
          '/guide/': [/* ... */]
        }
      },
      '/en/': {
        selectText: 'Languages',
        label: 'English',
        ariaLabel: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        algolia: {},
        nav: require('./nav/en'),
        sidebar: {
          '/en/': [/* ... */],
          '/en/guide/': [/* ... */]
        }
      }
    }
  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-152692837-1' 
      }
    ]
  ],
}