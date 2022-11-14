/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `My blog`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-transformer-remark", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  },
  "gatsby-plugin-image",
  "gatsby-plugin-sharp",
  ]
};