const isProd = process.env.NODE_ENV === 'production';
module.exports = options => {
  return {
    plugins: [
      `gatsby-plugin-sitemap`,
      `gatsby-plugin-theme-ui`,
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 1200,
                linkImagesToOriginal: true,
              },
            },
            {
              resolve: `gatsby-remark-responsive-iframe`,
              options: {
                wrapperStyle: `margin-bottom: 1.0725rem`,
              },
            },
            `gatsby-remark-copy-linked-files`,
            {
              resolve: "gatsby-remark-emojis",
              options: {
                // Deactivate the plugin globally (default: true)
                active: true,
                // Add a custom css class
                class: "emoji-icon",
                // Select the size (available size: 16, 24, 32, 64)
                size: 64,
                // Add custom styles
                styles: {
                  display: "inline",
                  margin: "0",
                  position: "relative",
                  top: "2px",
                  width: "19px",
                },
              },
            },
            {
              resolve: `gatsby-remark-autolink-headers`,
              options: {
                // offsetY: `100`,
                // icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
                // className: `custom-class`,
                maintainCase: true,
                removeAccents: true,
              },
            },
          ],
        },
      },
      {
        resolve: `gatsby-plugin-tinacms`,
        options: {
          sidebar: {
            hidden: isProd,
            position: `displace`,
          },
          plugins: [
            `gatsby-tinacms-git`,
            `gatsby-tinacms-remark`,
          ],
        },
      },
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
    ],
  }
}