import React from "react";
import { Helmet, HelmetProps } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

type Site = {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      author: string;
      authorImage: string;
    };
  };
};

export const SEO = (props: Seo) => {
  const siteData: Site = useStaticQuery(
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
  );
  const metaDescription =
    props.description || siteData.site.siteMetadata.description;
  const image = props.articleImage
    ? props.articleImage
    : siteData.site.siteMetadata.authorImage;

  return (
    <Helmet
      htmlAttributes={props.lang}
      title={props.title}
      titleTemplate={`%s | ${siteData.site.siteMetadata.title}`}
      meta={[
        {
          name: "description",
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: props.title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:url`,
          content: props.articleUrl,
        },
        {
          property: `og:image`,
          content: image,
        },
        {
          property: `article:published_time`,
          content: props.published?.toDateString(),
        },
        {
          property: `article:modified_time`,
          content: props.modified?.toDateString(),
        },
        {
          property: `article:tag`,
          content: props.keywords,
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
          content: `@rameshkunwar`,
        },
        {
          name: `twitter:title`,
          content: props.title,
        },
        {
          name: `twitter:url`,
          content: props.articleUrl,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `author`,
          content: siteData.site.siteMetadata.author,
        },
      ]}
    ></Helmet>
  );
};
export default SEO;
