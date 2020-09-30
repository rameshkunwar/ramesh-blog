import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title, published, modified }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            authorImage
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title} `}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:url`,
          content: `https://kunwar.dk`,
        },
        {
          property: `og:image`,
          content: site.siteMetadata.authorImage,
        },
        {
          property: `article:published_time`,
          content: published,
        },
        {
          property: `article:modified_time`,
          content: modified,
        },
        {
          property: `article:tag`,
          content: [
            "javascript",
            "es6",
            ".net",
            "c#",
            "software architecture",
            "clean code",
            "react js",
          ],
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `author`,
          content: site.siteMetadata.author,
        },
        {
          name: `keywords`,
          content: `javascript",.net, .net core, blazor webassembly, .net 5, c#, react js, redux, clean code, CQRS, domain driven design`,
        },
      ].concat(meta)}
    />
  )
}
SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}
SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  keywords: PropTypes.string,
}
export default SEO
