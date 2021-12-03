// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/duotoneLight');
const darkCodeTheme = require('prism-react-renderer/themes/duotoneDark');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Lark',
  tagline: 'Lark Tools are cool',
  url: 'https://lark-tools.netifly.app',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'lark-org', // Usually your GitHub org/user name.
  projectName: 'docs-site', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'Lark Tools Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'welcome',
            position: 'right',
            label: '文档',
          },
          {
            href: 'https://github.com/lark-org',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Lark, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      gtag: {
        trackingID: 'G-VQL73B4GPD',
        // Optional fields.
        anonymizeIP: true, // Should IPs be anonymized?
      }
    }),
    plugins: [
      [
        '@docusaurus/plugin-sitemap',
        {
          changefreq: 'weekly',
          priority: 0.5,
          trailingSlash: true,
        },
      ],
      [
        '@docusaurus/plugin-client-redirects',
        {
          redirects: [
            {
              to: '/docs/lark-cli-service/开始', // string
              from: '/docs/lark-cli-service', // string | string[]
            },
            {
              to: '/docs/lark-cli/入门', // string
              from: '/docs/lark-cli', // string | string[]
            },
          ],
        },
      ],
    ],
};

module.exports = config;
