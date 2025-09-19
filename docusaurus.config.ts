import { themes as prismThemes } from 'prism-react-renderer'
import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Riverscapes Docs', // Site title displayed in the browser tab
  tagline: 'This is a template for a riverscapes site.', // Short description shown in meta tags
  favicon: 'favicon.ico', // Path to site favicon

  future: {
    v4: true, // Enables compatibility with upcoming Docusaurus v4 features
  },

  url: 'https://docs.riverscapes.net', // The base URL of your site (no trailing slash)
  baseUrl: '/', // The sub-path where your site is served (used in GitHub Pages)

  onBrokenLinks: 'throw', // Throw an error on broken links
  onBrokenMarkdownLinks: 'warn', // Warn instead of throwing for broken markdown links

  i18n: {
    defaultLocale: 'en', // Default language
    locales: ['en'], // Supported languages
  },

  themes: ['@riverscapes/docusaurus-theme'], // Shared custom theme used across sites

  presets: [
    [
      'classic', // Docusaurus classic preset for docs/blog
      {
        gtag: {
          trackingID: 'G-QH0K3VMJTD',
          anonymizeIP: true,
        },
        docs: {
          sidebarPath: './sidebars.ts', // Path to sidebar config
          routeBasePath: '/', // Serve docs at site root
          editUrl: 'https://github.com/Riverscapes/riverscapes-docs-site/tree/main/', // "Edit this page" link
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/rc_logo.png', // Social sharing image

    algolia: {
      // The application ID provided by Algolia
      appId: '4TGS8ZPIMY',

      // Public API key: it is safe to commit it
      apiKey: 'd084a7919fe7b5940d7125f14221eaca',

      indexName: 'docs.riverscapes.net',

      // Optional: see doc section below
      contextualSearch: true,
    },
    navbar: {
      title: 'Riverscapes Docs', // Navbar title
      logo: {
        alt: 'Riverscapes Studio Logo', // Logo alt text
        src: 'img/logos/rc_logo.png', // Logo image path
      },
      items: [
        //   {
        //     type: 'docSidebar',
        //     sidebarId: 'tutorialSidebar', // ID of the sidebar defined in sidebars.ts
        //     position: 'left',
        //     label: 'MENU1', // Label in the navbar
        //   },
        {
          href: 'https://github.com/Riverscapes/riverscapes-docs-site', // External GitHub link
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [
        {
          // Note that this NEEDS to match what's in the default template or we get another column
          title: 'User Resources',
          items: [
            {
              label: 'Join this User Community',
              href: 'https://www.riverscapes.net/topics/33158/feed',
            },
            {
              label: 'Search the Data Exchange',
              href: 'https://data.riverscapes.net/',
            },
            {
              label: 'Developers & Code Repository',
              href: 'https://github.com/Riverscapes/riverscapes-docs-site',
            },
            // {
            //   label: 'Knowledge Base',
            //   href: 'https://riverscapes.freshdesk.com/support/solutions/153000027509',
            // },
          ],
        },
      ],
    },

    prism: {
      theme: prismThemes.github, // Code block theme for light mode
      darkTheme: prismThemes.dracula, // Code block theme for dark mode
    },
  } satisfies Preset.ThemeConfig,
}

export default config
