/* eslint-disable */
const path = require('path');

module.exports = {
  siteMetadata: {
    title: `MyCrypto`,
    description: `MyCrypto is a free, open-source interface for interacting with the blockchain.`,
    author: `MyCrypto`,
    siteUrl: `https://myc-landing.netlify.app`,
    social: {
      twitter: `@MyCrypto`,
    },
  },
  pathPRefix: './',
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
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
        name: `MyCrypto`,
        short_name: `mycrypto`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#007896`,
        display: `minimal-ui`,
        icon: `src/assets/favicon.png`,
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
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/Root.tsx'),
      },
    },
    {
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: '15',
        matomoUrl: 'https://analytics.mycryptoapi.com/',
        siteUrl: 'https://myc-landing.netlify.app/',
      },
    },
  ],
};
