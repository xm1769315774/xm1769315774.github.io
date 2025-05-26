import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'hi',
  // tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.svg',

  // Set the production url of your site here
  url: 'https://xm1769315774.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'xm1769315774', // Usually your GitHub org/user name.
  projectName: 'xm1769315774.github.io', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-CN', // 默认语言设置为简体中文
    locales: ['zh-CN', 'zh-TW', 'en'], // 支持的语言列表
    localeConfigs: {
      'zh-CN': {
        htmlLang: 'zh-CN',
        label: '简体中文',
      },
      'zh-TW': {
        htmlLang: 'zh-TW',
        label: '繁體中文',
      },
      'en': {
        htmlLang: 'en',
        label: 'English',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Site Title',
      logo: {
        alt: 'Site Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo.svg',
        href: '/',
        target: '_self',
        width: 32,
        height: 32,
        className: 'custom-navbar-logo-class',
        // style: { border: 'solid red' },
      },
      items: [
        {
          type: 'search',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'right',
          label: 'Tutorial',
        },
        { to: '/blog', label: 'Blog', position: 'right' },
        {
          type: 'localeDropdown', // 添加语言切换下拉菜单
          position: 'right',
        },
        {
          href: 'https://github.com/xm1769315774/xm1769315774.github.io',
          label: 'GitHub',
          position: 'right',
        },
      ],
      hideOnScroll: true,
    },
    algolia: {
      appId: '4DEBZLQWA2', // 替换为你的 Algolia 应用 ID
      apiKey: '2534993c660ac16c793e3fe428548214', // 替换为你的公共 API 密钥
      indexName: '/', // 替换为你的索引名称
      contextualSearch: true, // 可选：启用上下文搜索
      searchParameters: {}, // 可选：自定义搜索参数
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {  // 颜色模式配置
      defaultMode: 'light', // 默认模式
      disableSwitch: false, // 是否禁用颜色模式切换
      respectPrefersColorScheme: true, // 是否尊重用户系统设置
    },
    announcementBar: {  // 公告栏配置
      id: 'support_us',
      content:
        'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
      backgroundColor: '#fafbfc',
      textColor: '#091E42',
      isCloseable: false,
    },
    docs: { // 文档配置
      versionPersistence: 'localStorage', // 文档版本持久化
      sidebar: {  // 侧边栏配置
        hideable: true,  // 是否可隐藏
        autoCollapseCategories: false,  // 自动折叠分类
      },
    },
    blog: { // 博客配置
      sidebar: {  // 侧边栏配置
        groupByYear: true,  // 按年份分组
      },
    },
  } satisfies Preset.ThemeConfig,

};

export default config;
