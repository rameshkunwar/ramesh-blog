import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { graphql, Link } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"

export default function Home({ data }) {
  return (
    <Layout>
      <React.Fragment>
        <h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          Amazing blogs with Gatsby and GraphQL
        </h1>
        <h4> {data.allMarkdownRemark.totalCount} posts </h4>

        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <Img
                fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
              />
              <h3
                css={css`
                  margin-bottom: ${rhythm(1 / 4)};
                `}
              >
                {" "}
                {node.frontmatter.title}
                <span
                  css={css`
                    color: #bbb;
                  `}
                >
                  {" "}
                  - {node.frontmatter.modified}{" "}
                </span>
              </h3>
            </Link>
            <p> {node.excerpt} </p>
          </div>
        ))}
      </React.Fragment>
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(
      filter: {}
      sort: { fields: frontmatter___modified, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            modified(fromNow: true, locale: "da-DK")
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 700) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt
          html
          id
        }
      }
      totalCount
    }
  }
`

// export default function Home() {
//   return (
//     <Layout>
//       <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
//       <p>
//         What do I like to do? Lots of course but definitely enjoy building
//         websites.
//       </p>
//     </Layout>
//   )
// }
