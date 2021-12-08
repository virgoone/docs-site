// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Lark',
  tagline: 'Lark Tools are cool',
  url: 'https://lark-dev.netifly.app',
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
          editUrl: 'https://github.com/lark-org/docs-site/edit/main/docs/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/lark-org/docs-site/edit/main/docs/',
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
      colorMode: {
        // "light" | "dark"
        defaultMode: 'dark',

        // Hides the switch in the navbar
        // Useful if you want to support a single color mode

        // Should we use the prefers-color-scheme media-query,
        // using user system preferences, instead of the hardcoded defaultMode
        respectPrefersColorScheme: false,

        // Dark/light switch icon options
        switchConfig: {
          // Icon for the switch while in dark mode
          darkIcon: '  ',
          darkIconStyle: {
            marginTop: '1px',
          },
          lightIcon: '  ',
          lightIconStyle: {
            marginTop: '1px',
          },
        },
      },
      algolia: {
        apiKey: '35206ba871118e4dab004adf8526deab',
        indexName: 'docs',
      },
      navbar: {
        title: '',
        logo: {
          alt: 'Lark Tools Logo',
          src: 'img/logo-light.svg',
          srcDark: 'img/logo-dark.svg',
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
        links: [
          {
            title: 'Company',
            items: [
              {
                label: 'Blog',
                to: 'https://blog.marryto.me/blog',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/virgoone',
              },
            ],
          },
          {
            title: 'Project',
            items: [
              {
                label: 'React Cool Image',
                href: 'https://react-cool-image.netlify.app/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Lark, Inc. Built with Docusaurus.`,
      },
      prism: {
        defaultLanguage: 'js',
        additionalLanguages: ['dart'],
        plugins: ['line-numbers', 'show-language'],
        theme: require('@kiwicopple/prism-react-renderer/themes/vsDark'),
        darkTheme: require('@kiwicopple/prism-react-renderer/themes/vsDark'),
      },
      gtag: {
        trackingID: 'G-VQL73B4GPD',
        // Optional fields.
        anonymizeIP: true, // Should IPs be anonymized?
      }
    }),
    plugins: [
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
