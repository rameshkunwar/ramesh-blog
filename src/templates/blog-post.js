import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import moment from "moment"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  const featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <h1> {post.frontmatter.title} </h1>
      <span>
        {" "}
        {moment(post.frontmatter.modified)
          .format("DD-MMM-YYYY")
          .toUpperCase()}{" "}
      </span>
      <Img fluid={featuredImgFluid} />
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        tags
        modified
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 650) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      excerpt(pruneLength: 140)
    }
  }
`
