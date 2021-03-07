module.exports = {
  siteMetadata: {
    title: "Keldgor",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Keldgor | Digitalisering",
        short_name: "Keldgor",
        start_url: "/",
        background_color: "#FFFFFF",
        theme_color: "#1f3050",
        display: "standalone",
        icon: "static/images/Logo-Keldgor.png",
      },
    },
  ],
};
