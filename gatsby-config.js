/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    nafn: `Jól í hjarta`,
    about: `Jóladagatal í miðborg Reykjavík.`,
    url: `https://www.jolihjarta.is`,
    image: `/myndir/share.png`,
    favicon: `/myndir/mani.png`,
    umOkkur: [
      `Jól í hjarta er jóladagatal fyrir alla fjölskylduna og fjallar um
    hugmyndaríka og skemmtilega þrjá krakka, Stellu, Stebba og Valdísi
    sem taka upp jóladagatal á snjalltækin sín. Þau ferðast um
    miðborgina í leit að hinum sanna jólaanda.`,
      ` Miðborgin okkar er jólaleg, lifandi og skemmtileg í desember sem að
    engin fjölskylda ætti að láta framhjá sér fara á aðventunni. Markmið
    jóladagatals og aðventustundar í Tjarnarbíó er að stuðla að
    ánægjulegri og jákvæðri samveru fjölskyldunnar í desember.
    Jóladagatalið örvar einnig skapandi hugsun krakka við lausn mála og
    leggur áherslu á samkennd, umburðarlyndi, kærleika, gleði og
    þakklæti.`,
      `Jóladagatalið gefur líka upplýsingar um hvað sé hægt að gera
    jólalegt í Reykjavík í desember og karkkarnir geta einnig sent inn
    jólalegar sögur, myndir og myndbönd sem munu kannski rata inn í
    þættina. Virkjum fjölskylduna í desember og gleðjumst saman með jól
    í hjarta!`,
      `Tekið er á móti fyrirspurnum á jolihjartarvk@gmail.com.`,
      ` Verkið er styrkt af og unnið í samstarfi við Reykjavíkurborg og Miðborg Reykjavíkur ásamt öllum krökkunum á Íslandi.`,
    ],
    menuItems: [
      { name: `Jól í hjarta`, type: `burg`, to: `/` },
      { name: `Um okkur`, type: `dropdown` },
      { name: `Hlekkir`, type: `dropdown` },
      { name: `Viðburðir`, type: `link`, external: false, to: `desember` },
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
    `gatsby-plugin-layout`,
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
