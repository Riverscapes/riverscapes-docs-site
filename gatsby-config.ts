import { GatsbyConfig } from 'gatsby'

module.exports = {
  pathPrefix: '/developer-website',
  siteMetadata: {
    title: `Riverscapes Developer Website`,
    helpWidgetId: "",
    author: {
      name: `Philip Bailey`,
    },
    description: ``,
    siteUrl: `https://riverscapes.net/`,
    social: {
      twitter: `RiverscapesC`,
    },
    menuLinks: [
      {
        title: 'Menu Item 1',
        url: '/about-us',
        items: [
          {
            title: 'What is a riverscape',
            url: '/about-us/what-is-a-riverscape',
          },
          {
            title: 'FAIR principles',
            url: '/about-us/fair-principles',
          },
        ],
      },
      {
        title: 'Contact',
        url: '/',
      },
      {
        title: 'Search',
        url: '/search',
      },
    ],
  },
  plugins: [
    {
      resolve: '@riverscapes/gatsby-theme',
      options: {
        contentPath: `${__dirname}/content/page`,
        manifest: {
          name: `Riverscapes Consortium`,
          short_name: `Riverscapes`,
          start_url: `/`,
        },
      },
    },
  ],
} as GatsbyConfig
