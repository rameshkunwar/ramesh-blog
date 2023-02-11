import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `A hobby blog for a hungry soul - Ramesh's personal blog`,
    description: `To teach is to learn twice - let's learn together`,
    author: `Ramesh Kunwar`,
    siteUrl: `https://kunwar.dk`,
    authorImage: `/icons/author_image.jpeg`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-google-gtag", "gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, 
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    }
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "blogs",
      "path": `${__dirname}/blogs/`
    }
  },
  "gatsby-plugin-mdx",
]
};

export default config;
