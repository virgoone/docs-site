const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  // options
  flexsearch: {
    codeblocks: false,
  },
  staticImage: true,
  defaultShowCopyCode: true,
});


const nextConfig = withNextra({
  reactStrictMode: true,
  i18n: {
    locales: ["zh-CN", "en-US"],
    defaultLocale: "en-US",
  },
  // rewrites() {
  //   return {
  //     beforeFiles: [
  //       {
  //         source: "/sitemap.xml",
  //         destination:
  //           "https://crawled-sitemap.vercel.sh/turbobuild-sitemap.xml",
  //       },
  //     ],
  //   };
  // },
  redirects: () => {
    return [
      {
        source: "/docs",
        destination: "/docs/welcome",
        statusCode: 301,
      },
    ];
  },
});

module.exports = nextConfig; //withSentryConfig(nextConfig, sentryWebpackPluginOptions);
