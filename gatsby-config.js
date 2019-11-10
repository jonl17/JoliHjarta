/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    nafn: `Jól í hjarta`,
    menuItems: [`Viðburðir í dag`, `Verkefni fyrir fjölskylduna`],
    subMenuItems: [`Hafa samband`, `Jólalistinn`, `Jólasveinarnir`],
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
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    //`gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-netlify-cms`,
  ],
}
