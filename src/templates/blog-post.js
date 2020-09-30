import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import SEO from "../components/seo"
import moment from "moment"

const Headline = styled.h1`
  margin-bottom: 1.4rem;
`
const DateAndTimeToRead = styled.span`
  font-size: 1rem;
  font-weight: 500;
`
export default function BlogPost({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.excerpt}
        published={post.frontmatter.created}
        modified={post.frontmatter.modified}
      />
      <Headline> {post.frontmatter.title} </Headline>
      <DateAndTimeToRead>
        {moment(post.frontmatter.modified).format("DD-MMM-YYYY")} .{" "}
        {post.fields.readingTime.text}.
      </DateAndTimeToRead>

      {/* <Img fluid={featuredImgFluid} /> */}
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        readingTime {
          text
        }
      }
      frontmatter {
        title
        description
        tags
        modified
        created
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 650, maxHeight: 390, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      excerpt(pruneLength: 150)
    }
  }
`
