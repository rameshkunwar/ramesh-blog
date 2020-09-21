import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { graphql, Link } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { rhythm } from "../utils/typography"
import moment from "moment"
import siteConfig from "../../site-config"
import SEO from "../components/seo"

export default function Home({ data }) {
  const IndividualPostWrapper = styled.div`
    border-radius: 8px;
    box-shadow: inset 0 0 0 1px #dae4ed, 0 5px 15px -5px rgba(0, 0, 0, 0.1);
    margin-top: 1rem;
    background: #fff;
    overflow: hidden;
    padding: 1rem;
    @media (max-width: 667px) {
      padding: 0.5rem;
    }
  `
  return (
    <Layout>
      <SEO
        title={siteConfig.title}
        description={siteConfig.description}
        author={siteConfig.author}
      />
      <React.Fragment>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <IndividualPostWrapper key={node.id}>
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
                  -{" "}
                  {moment(node.frontmatter.modified)
                    .format("DD-MMM-YYYY")
                    .toUpperCase()}{" "}
                </span>
              </h3>
            </Link>
            <div
              css={css`
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                align-items: center;
              `}
            >
              <div
                css={css`
                  margin: 0.4rem 0;
                  display: wrap;
                  flex-wrap: wrap;
                `}
              >
                {node.frontmatter.tags.map((tag, i) => [
                  <a
                    key={`tag-${i}`}
                    css={css`
                      font-size: 1.2rem;
                      margin-right: 0.5rem;
                      background-color: rgb(0 56 147 / 0.2);
                      height: 2rem;
                      border-radius: 1rem;
                      padding: 0 0.8rem;
                      color: ${siteConfig.brandColor};
                      margin-top: 0.2rem;
                      text-decoration: none !important;
                      text-shadow: none;
                      background-image: none;
                      &:hover {
                        cursor: pointer;
                        color: ${siteConfig.alternativeColor};
                        background-color: ${siteConfig.brandColor};
                        text-decoration: none;
                      }
                    `}
                    href="#"
                  >
                    <span>{tag}</span>
                  </a>,
                ])}
              </div>
            </div>
            <p> {node.excerpt} </p>
          </IndividualPostWrapper>
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
            tags
            modified
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 700, maxHeight: 390, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt(pruneLength: 140)
          html
          id
        }
      }
      totalCount
    }
  }
`
