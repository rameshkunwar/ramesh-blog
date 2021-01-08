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
import { TO_POST } from "../routes/path"

export default function Home({ data }) {
  const IndividualPostWrapper = styled.div`
    border-radius: 8px;
    box-shadow: inset 0 0 0 1px #dae4ed, 0 5px 15px -5px rgba(0, 0, 0, 0.1);
    background: #fff;
    overflow: hidden;
    padding: 1rem;
    margin-bottom:3rem;
    @media (max-width: 667px) {
      padding: 0.5rem;
    }
  `
  const BlogContainer = styled.div`
  display:flex;
  order:2;
  min-height:74vh;
  margin-top:2rem;
  font-family: 'merriweather',serif;
  justify-content:center;
  }
`
const AsideLeft = styled.aside`
flex: 1 1 320px;
order:1;
@media (max-width: 768px) {
  display:none !important;
}
`
const AsideRight = styled.aside`
flex: 1 0 320px;
order:3;
@media (max-width: 768px) {
  display:none !important;
}
`
  const Main = styled.div`
    flex: 0 0 800px;
    max-width: 100%;
    box-sizing: border-box;
  `
  const DateAndReadTime = styled.div`
    // margin-bottom: ${rhythm(1 / 3)};
    margin-top: ${rhythm(1 / 3)};
    font-size: 0.8rem;
    font-weight: 500;
  `
  return (
    <Layout>
      <SEO
        title={siteConfig.title}
        description={siteConfig.description}
        author={siteConfig.author}
        keywords={siteConfig.tags}
        articleUrl={`https://kunwar.dk`}
      />
      <BlogContainer>
        <Main>
          <React.Fragment>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <IndividualPostWrapper key={node.id}>
                <Link
                  // to={node.fields.slug}
                  to={TO_POST({ slug: node.frontmatter.slug })}
                  css={css`
                    text-decoration: none;
                    color: inherit;
                  `}
                >
                  <Img
                    fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                  />
                  <h2
                    css={css`
                      margin-bottom: ${rhythm(1 / 4)};
                      margin-top: ${rhythm(1)};
                    `}
                  >
                    {" "}
                    {node.frontmatter.title}
                  </h2>
                </Link>
                <DateAndReadTime>
                  {moment(node.frontmatter.modified).format("DD-MMM-YYYY")} .{" "}
                  {node.fields.readingTime.text}
                </DateAndReadTime>
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
                      margin: 0.6rem 0;
                      display: wrap;
                      flex-wrap: wrap;
                    `}
                  >
                    {node.frontmatter.tags.map((tag, i) => [
                      <button
                        key={`tag-${i}`}
                        css={css`
                          font-size: 1rem;
                          margin-right: 0.5rem;
                          background-color: rgb(0 56 147 / 0.2);
                          height: 1.5rem;
                          border-radius: 0.5rem;
                          padding: 0 0.5rem;
                          color: ${siteConfig.brandColor};
                          margin-top: 0.2rem;
                          text-decoration: none !important;
                          text-shadow: none;
                          background-image: none;
                          border-width: 0;
                          &:hover {
                            cursor: pointer;
                            color: ${siteConfig.alternativeColor};
                            background-color: ${siteConfig.brandColor};
                            text-decoration: none;
                          }
                        `}
                      >
                        <span>{tag}</span>
                      </button>,
                    ])}
                  </div>
                </div>
                <Link
                  to={node.fields.slug}
                  css={css`
                    text-decoration: none;
                    color: inherit;
                  `}
                >
                  <p> {node.excerpt} </p>
                </Link>
              </IndividualPostWrapper>
            ))}
          </React.Fragment>
        </Main>
      </BlogContainer>
      
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
            slug
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
            readingTime {
              text
            }
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
