/* eslint-disable */
const path = require('path');

module.exports = {
  pathPrefix: process.env.PATH_PREFIX || '',
  siteMetadata: {
    title: `MyCrypto - Ethereum Wallet Manager`,
    description: `Securely manage ALL of your crypto accounts with MyCrypto. Swap, send, and buy crypto with your favorite wallets like Ledger, Metamask, and Trezor.`,
    author: `MyCrypto`,
    siteUrl: `https://beta.mycrypto.com`,
    social: {
      twitter: `@MyCrypto`,
    },
  },
  pathPrefix: process.env.PATH_PREFIX || '',
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'noopener noreferrer',
            },
          },
        ],
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
          '@services': path.resolve(__dirname, 'src/services'),
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
  ],
};
