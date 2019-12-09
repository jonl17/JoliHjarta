/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    nafn: `Jól í hjarta`,
    about: `Jóladagatal í miðborg Reykjavík.`,
    menuItems: [
      { name: `Jól í hjarta`, type: `burg`, to: `/` },
      { name: `Um okkur`, type: `dropdown` },
      { name: `Hlekkir`, type: `dropdown` },
      { name: `Viðburðir`, type: `link`, external: false, to: `desember` },
      {
        name: `Jólavættir`,
        type: `link`,
        external: true,
        to: `https://reykjavik.is/jolavaettir-i-reykjavik-snjallvaeddar`,
      },
      { name: ``, type: `burg` }, // this is so we get equal space for the x btn
    ],
    mobileMenuItems: [
      { name: `Jól í hjarta`, type: `burg` },
      { name: `Um okkur`, type: `link`, to: `/um-okkur` },
      { name: `Viðburðir`, type: `link`, to: `desember` },
      {
        name: `Hlekkir`,
        type: `list`,
        links: [
          { name: "Reykjavík", url: "https://reykjavik.is/" },
          { name: "Miðborgin", url: "https://midborgin.is/" },
          { name: "Tjarnarbíó", url: "https://tjarnarbio.is/" },
          {
            name: "Allir viðburðir í Reykjavík",
            url: "https://reykjavik.is/vidburdir",
          },
          { name: "Jólavættir", url: "https://jolavaettir.safnadu.is/" },
        ],
      },
    ],
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `events`,
        path: `${__dirname}/static/content/verkefni-dagsins`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `${__dirname}/static/myndir/svgs`,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
    //`gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        /**
         * One convention is to place your Netlify CMS customization code in a
         * `src/cms` directory.
         */
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || "none",
      },
    },
  ],
}
