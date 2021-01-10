// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/catalogue/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Crispy Games',
  icon: {
    favicon: './src/assets/favicon.png',
    touchicon: './src/assets/favicon.png'
  },
  siteUrl: (process.env.SITE_URL ? process.env.SITE_URL : 'https://crispy.games'),
  settings: {
    web: process.env.URL_WEB || false,
    twitter: process.env.URL_TWITTER || false,
    github: process.env.URL_GITHUB || false,
    nav: {
      links: [
        { path: '/catalogue/', title: 'catalogue' }
      ]
    },
    sidebar: [
      {
        name: 'catalogue',
        sections: [
          {
            title: 'Games',
            items: [
              '/catalogue/',
              '/catalogue/installation/',
              '/catalogue/writing-content/',
              '/catalogue/deploying/',
              '/catalogue/board-games/'
            ]
          },
          {
            title: 'Online Games',
            items: [
              '/catalogue/settings/',
              '/catalogue/sidebar/',
            ]
          },
          {
            title: 'Video Games',
            items: [
              '/catalogue/settings/',
              '/catalogue/sidebar/',
            ]
          }
        ]
      }
    ]
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        baseDir: './content',
        path: '**/*.md',
        typeName: 'MarkdownPage',
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['noopener', 'noreferrer'],
          plugins: [
            '@gridsome/remark-prismjs'
          ]
        }
      }
    },

    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {
          // Prevent purging of prism classes.
          whitelistPatternsChildren: [
            /token$/
          ]
        }
      }
    },

    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: (process.env.GA_ID ? process.env.GA_ID : 'XX-999999999-9')
      }
    },

    {
      use: '@gridsome/plugin-sitemap',
      options: {  
      }
    }

  ]
}
