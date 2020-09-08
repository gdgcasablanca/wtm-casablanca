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
        background_color: '#5380bf',
        theme_color: '#5380bf',
        display: 'standalone',
        icon: `src/images/wtm-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: 'UA-139563322-1',
    //   },
    // },
  ],
}
