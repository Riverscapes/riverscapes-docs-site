import { GatsbyConfig } from 'gatsby'

module.exports = {
  // You need pathPrefix if you're hosting GitHub Pages at a Project Pages or if your
  // site will live at a subdirectory like https://example.com/mypathprefix/.  
  // pathPrefix: '/developer-website',
  siteMetadata: {
    title: `Riverscapes Developer Website`,
    // Optional but leave this blank if you don't want to use it.
    helpWidgetId: "",
    flags: {
      DEV_SSR: false,
    },
    author: {
      name: `Philip Bailey`,
    },
    description: ``,
    siteUrl: `https://riverscapes.github.io/developer-website`,
    social: {
      twitter: `RiverscapesC`,
    },
    menuLinks: [
      {
        title: 'Standards',
        url: '/standards',
        items: [],
      },
      {
        title: 'Dev Tools',
        url: '/dev-tools',
        items: [
          {
            title: 'API',
            url: '/api',
          },
          {
            title: 'Command Line Interface',
            url: '/devl-tools/rscli',
          },
          {
            title: 'Cyber Castor',
            url: '/dev-tools/cyber-castor',
          },
          {
            title: 'RSXML Python Package',
            url: '/dev-tools/rsxml',
          }
        ],
      },
      {
        title: 'Documentation',
        url: '/documentation',
        items: [
          {
            title: 'Visual Identity',
            url: '/documentation/visual-identity',
          }, {
            title: 'Documentation Websites',
            url: '/documentation',
          },
          {
            title: 'Demo Page',
            url: '/documentation/demo',
          },
          {
            title: 'Developing Riverscapes Tools',
            url: '/documentation/rstools',
          }
        ]
      }
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
