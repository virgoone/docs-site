/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://dev.douni.one',
  generateRobotsTxt: true, // (optional)
  // ...other options
}