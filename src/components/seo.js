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
          content: `https://pbs.twimg.com/profile_images/486116803232280576/5dDamw0Y_400x400.jpeg`,
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
}
export default SEO
