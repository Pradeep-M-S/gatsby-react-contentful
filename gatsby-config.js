require('dotenv').config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `Bianca Schuurman, fullstack developer`,
    description: `I am sharing my experience as a Fullstack and developer, content creator, mother and woman in tech.`,
    author: `Bianca Schuurman`,
  },
  plugins: [
    
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    `@contentful/gatsby-transformer-contentful-richtext`,
    `gatsby-plugin-sass`,
    'gatsby-plugin-transition-link',
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve('./src/components/layout.js')
      }
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `biadev.co`,
        short_name: `Bia Dev`,
        icon: `src/images/biadev-logo-black-small.jpeg`,
        start_url: `/`,
        background_color: `#1e1e1e`,
        theme_color: `#1e1e1e`,
        display: `minimal-ui`,
        favicon: 'yes',
        lang: `en`,
        localize:[
          {
            start_url: `/pt-BR/`,
            lang: `pt-BR`,
          }
        ]
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/blog/`, `/projects/*`],
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `${process.env.CONTENTFUL_SPACE_ID}`,
        accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      }
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: [`en`, `pt-BR`],
        // language file path
        defaultLanguage: `en`,
        // option to redirect to `/en` when connecting `/`
        redirect: true,
      },
    },
    { 
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        develop: true, // Enable while using `gatsby develop`
        tailwind: true, // Enable tailwindcss support
        whitelist: ['whitelist'], // Don't remove this selector
        ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        purgeOnly : ['components/', '/global.css', 'node_modules/bootstrap', 'tailwindcss'], // Purge only these files/folders
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Poppins`,
            variants: [`400`, `600`, `700`, `800`, `900`]
          },
          {
            family: `Bebas+Neue`,
            subsets: [`latin`]
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: `${process.env.ID}`,
        
        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
        
        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trakingID: `${process.env.GOOGLE_ANALYTICS_TRACKING_ID}`,
      }
    }
  ],
}