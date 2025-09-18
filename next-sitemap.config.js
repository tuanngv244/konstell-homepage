/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'http://winways.com.vn',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
