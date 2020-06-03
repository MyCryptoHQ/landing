/* eslint-disable */
const path = require('path');

module.exports = {
  siteMetadata: {
    title: `MyCrypto`,
    description: `MyCrypto is a free, open-source interface for interacting with the blockchain.`,
    author: `@mycryptohq`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `mycrypto`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#007896`,
        display: `minimal-ui`,
        icon: `src/assets/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@components': path.resolve(__dirname, 'src/components'),
          '@assets': path.resolve(__dirname, 'src/assets'),
          '@pages': path.resolve(__dirname, 'src/pages'),
          '@config': path.resolve(__dirname, 'src/config'),
          '@types': path.resolve(__dirname, 'src/types'),
          '@theme': path.resolve(__dirname, 'src/theme'),
          '@utils': path.resolve(__dirname, 'src/utils'),
          '@hooks': path.resolve(__dirname, 'src/hooks'),
        },
        extensions: ['tsx', 'ts', 'js', 'jsx'],
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Change plugin default options here, e.g.:
        // ssr: false
        // displayName: false,
        // minify: false
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
