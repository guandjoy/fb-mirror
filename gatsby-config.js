module.exports = {
  siteMetadata: {
    title: `Redfish`,
    siteUrl: `https://redfish-mirror.netlify.com/`,
    description: `Serveless Boilerplate Web Application. GatsbyJS, Create React App, GraphQL Apollo Client, Django, Python, Graphene.`,
    author: `@guandjoy`,
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
        name: `redfish`,
        short_name: `redfish`,
        start_url: `/`,
        background_color: `#FF4A64`,
        theme_color: `#FF4A64`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
