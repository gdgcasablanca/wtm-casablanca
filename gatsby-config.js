module.exports = {
  siteMetadata: {
    title: `WTM Casablanca`,
    description: `WTM Casablanca.`,
    author: `@omarhoumz`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `WTM Casablanca`,
        short_name: `WTM Casa`,
        start_url: `/`,
        // TODO: change theme colors
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/wtm-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
