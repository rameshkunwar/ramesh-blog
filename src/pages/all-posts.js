import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { rhythm } from "../utils/typography"
import moment from "moment"
import siteConfig from "../../site-config"
import SEO from "../components/seo"

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
const Container = styled.div`
 display:flex;
 min-height:74vh;
 margin-top:2rem;
 font-family: 'merriweather',serif;
  }
`
const Main = styled.div`
  order: 2;
  flex: 0 0 740px;
  max-width: 100%;
  padding: 0 1rem;
  box-sizing: border-box;
`
const MainHeader = styled.div`
  display: block;
`
const AllPosts = styled.div`
  display: block;
`
const MonthYear = styled.h2`
  margin-top: 2rem;
`

export default function About({ data }) {
  return (
    <Layout>
      <SEO
        title={`All posts`}
        description={`List of all posts`}
        author={`Ramesh Kunwar`}
      />
      <Container>
        <Main>
          <MainHeader>
            {" "}
            <h1>All posts</h1>
          </MainHeader>
          {data.allMarkdownRemark.group.map(grp => {
            return (
              <AllPosts>
                <MonthYear>{grp.fieldValue}</MonthYear>

                {grp.edges.map(({ node }) => (
                  <IndividualPostWrapper key={node.id}>
                    <Link
                      to={node.fields.slug}
                      css={css`
                        text-decoration: none;
                        color: inherit;
                      `}
                    >
                      <h3
                        css={css`
                          margin-bottom: ${rhythm(1 / 4)};
                          color: ${siteConfig.brandColor};
                          font-family: "merriweather", serif;
                          font-size: 1.5rem;
                        `}
                      >
                        {" "}
                        {node.frontmatter.title}{" "}
                      </h3>
                      <div
                        css={css`
                          color: rgb(5, 6, 7);
                          font-size: 0.9rem;
                          margin-top: 0.5rem;
                        `}
                      >
                        {moment(node.frontmatter.modified).format(
                          "DD-MMM-YYYY"
                        )}{" "}
                        . {node.fields.readingTime.text}
                      </div>
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
                          <button
                            key={`tag-${i}`}
                            css={css`
                              font-size: 1rem;
                              margin-right: 0.5rem;
                              background-color: rgb(0 56 147 / 0.2);
                              border-radius: 1rem;
                              padding: 0 0.8rem;
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
                  </IndividualPostWrapper>
                ))}
              </AllPosts>
            )
          })}
        </Main>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(
      sort: { fields: [frontmatter___modified], order: DESC }
      filter: { frontmatter: { type: { eq: "post" } } }
    ) {
      group(field: frontmatter___blogMonth) {
        fieldValue
        edges {
          node {
            frontmatter {
              title
              modified
              tags
            }
            fields {
              slug
              readingTime {
                text
              }
            }
          }
        }
      }
    }
  }
`
