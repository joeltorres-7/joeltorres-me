module.exports = {
  siteMetadata: {
    title: `Joel Torres`,
    siteUrl: `https://www.joeltorres.me`
  },
  plugins: ["gatsby-plugin-styled-components", 'gatsby-plugin-sitemap', 'gatsby-plugin-netlify', "gatsby-plugin-react-helmet", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", 
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: `${__dirname}/src/pages`,
      name: 'pages'
    },
  }, {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: './src/images/favicons/favicon.png',
        icon_options: {
          purpose: `any maskable`,
        },
        name: `Joel Torres`,
        short_name: `Joel Torres`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
      },
    }, {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        printRejected: true,
        purgeCSSOptions: {
          // https://purgecss.com/configuration.html#options
          // safelist: ['safelist'], // Don't remove this selector
        },
        // More options defined here https://purgecss.com/configuration.html#options
      },
    }, 'gatsby-plugin-offline', {
      resolve: 'gatsby-plugin-minify',
      options: {
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        processConditionalComments: true
      }
    }, {
      resolve: 'gatsby-plugin-html-minifier',
      options: {
        caseSensitive: false,
        collapseBooleanAttributes: false,
        useShortDoctype: false
      }
    }, {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-QRHSRHX3DT",
        head: true,
        anonymize: true,
        respectDNT: true,
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        pageTransitionDelay: 0,
        defer: false,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        enableWebVitalsTracking: true,
      },
    },]
};