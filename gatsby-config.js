/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    nafn: `Jól í hjarta`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `myndir`,
        path: `${__dirname}/static/myndir`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `dagar`,
        path: `${__dirname}/static/content/dagar`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `events`,
        path: `${__dirname}/static/content/events`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `${__dirname}/static/myndir`,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    //`gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-netlify-cms`,
  ],
}
