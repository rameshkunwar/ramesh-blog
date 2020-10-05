import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({
  description,
  lang,
  meta,
  title,
  published,
  modified,
  keywords,
  articleUrl,
  articleImage,
}) {
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

  const image =
    articleImage === null || articleImage === undefined
      ? site.siteMetadata.authorImage
      : articleImage

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
          content: articleUrl,
        },
        {
          property: `og:image`,
          content: image,
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
          content: keywords,
        },
        // {
        //   property: `article:tag`,
        //   content: [
        //     "javascript",
        //     "es6",
        //     ".net",
        //     "c#",
        //     "software architecture",
        //     "clean code",
        //     "react js",
        //   ],
        // },
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
          content: `@rameshkunwar`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:url`,
          content: articleUrl,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `author`,
          content: site.siteMetadata.author,
        },
        // {
        //   name: `keywords`,
        //   content: siteConfig.tags,
        // },
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
  articleUrl: PropTypes.string,
  articleImage: PropTypes.string,
}
export default SEO
