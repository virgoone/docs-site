/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://dev.douni.one',
  generateRobotsTxt: true, // (optional)
  alternateRefs: [
    {
      href: 'https://dev.douni.one',
      hreflang: 'en-US',
    },
    {
      href: 'https://dev.douni.one/zh-CN/',
      hreflang: 'zh-CN',
    },
  ],
  transform: async (config, path) => {
    console.log('path-->', path)
    const [_loc, _lan] = path?.split('.')
    if (_lan === 'en-US') {
      return {
        loc: _loc, // => this will be exported as http(s)://<config.siteUrl>/<path>
        changefreq: config.changefreq,
        priority: config.priority,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        alternateRefs: config.alternateRefs ?? [],
      }
    }
    return null
  }
  // ...other options
}