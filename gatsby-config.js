module.exports = {
  siteMetadata: {
    title: "Product Feedback",
    description: `The product knowledge repository made for customer-centric companies. Run customer research, analyze quantitative data, extract insights, and make them accessible to the whole company.`,
    author: `@qfrery`,
    url: process.env.GATSBY_DOMAIN,
    // image: "/images/main1.png",
  },
  plugins: [
    // "gatsby-plugin-sitemap",
    "gatsby-plugin-postcss",
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-162346244-1",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Product Feedback`,
        short_name: `Product Feedback`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#00A5FF`,
        display: `minimal-ui`,
        icon: `${__dirname}/src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-favicons',
      options: {
        logo: `${__dirname}/src/images/logo_header.svg`,
        appName: 'Product Feedback',
        background: '#000000',
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          yandex: false,
          windows: false
        }
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "changelog",
        path: "./content/changelog",
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-fonts`,
    //   options: {
    //     fonts: [`castoro`, `raleway\:300,400i,500,600`],
    //     display: "swap",
    //   }
    // },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
          // {
          //   resolve: `gatsby-remark-responsive-iframe`,
          //   options: {
          //     wrapperStyle: `margin-bottom: 1.0725rem`,
          //   },
          // },
          // `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          // `gatsby-remark-smartypants`,
        ],
      },
    },
  ],
};
