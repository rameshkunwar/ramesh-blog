import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import moment from "moment"
import { TO_POST } from "../routes/path"
import siteConfig from "../../site-config"
import kebabCase from "lodash/kebabCase"


const AllPostsTagsContainer = styled.div`
display:flex;  
height:77vh;
`
const AllBlogPosts = styled.div` 
  flex: 1 0 800px;
  order:2;
  padding: ${rhythm(2)};
  padding-top: 0;
  margin-top:2rem;
  font-family: 'merriweather',serif; 
  font-size: 1.5rem;
  letter-spacing: 0.2px;
  color: rgb(5, 6, 7);

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    padding: 0.5rem;
    padding-top: 0.5rem;
    font-size: 22px !important;
    line-height: 1.54 !important;
  }
`

const IndividualPostWrapper = styled.div`
  border-radius: 8px;
  box-shadow: inset 0 0 0 1px #dae4ed, 0 5px 15px -5px rgba(0, 0, 0, 0.1);
  background: #fff;
  overflow: hidden;
  padding: 1rem;
  margin-bottom: 1rem;
  &:last-child{
    margin-bottom:0;
  }
  @media (max-width: 667px) {
    padding: 0.5rem;
  }
`
const Main = styled.div`
  flex: 0 0 800px;
  max-width: 100%;
  padding: 0 1rem;
  box-sizing: border-box;
`
const MainHeader = styled.div`
  display: block;
`
const Title = styled.h3`
margin-bottom: ${rhythm(1 / 4)};
color: ${siteConfig.brandColor};
font-family: "merriweather", serif;
font-size: 1.5rem;
`
const DateAndReadingTime = styled.div`
color: rgb(5, 6, 7);
font-size: 0.9rem;
margin-top: 0.5rem;
`
const TagOuterContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
`
const TagInnerContainer = styled.div`
margin: 0.4rem 0;
display: wrap;
flex-wrap: wrap;
`
const TagButton = styled.button`
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
`

const Tags = ({ pageContext, data }) => {
    const { tag } = pageContext
    const { edges, totalCount } = data.allMarkdownRemark
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? "" : "s"
    } tagged with "${tag}"`
    return (
      <Layout>
        <AllPostsTagsContainer>
          <AllBlogPosts>
            <Main>
              <MainHeader>
                <h1>{tagHeader}</h1>
              </MainHeader>
              {edges.map(({ node }) => {
              const { readingTime } = node.fields
              const { title, modified, tags, slug } = node.frontmatter
              return (
                <IndividualPostWrapper key={slug}>
                  <Link
                      to={TO_POST({ slug: slug })}
                      css={css`
                        text-decoration: none;
                        color: inherit;
                      `}
                    >   
                    <Title> {title} </Title>
                    <DateAndReadingTime>
                    {moment(modified).format(
                          "DD-MMM-YYYY"
                        )}{" "}
                        . {readingTime.text}
                    </DateAndReadingTime>
                  </Link>
                  <TagOuterContainer>
                    <TagInnerContainer>
                      {
                        tags.map((tag) => [
                          <TagButton key={tag}>
                             <a className="tag-link" href={`/tags/${kebabCase(tag.replace('#', '-sharp'))}`} >{tag}</a>
                          </TagButton>
                        ])
                      }
                    </TagInnerContainer>
                  </TagOuterContainer>
                </IndividualPostWrapper>
                // <li key={slug}>
                //   <Link to={slug}>{title}</Link>
                //   <span>{readingTime.text}</span>
                // </li>
              )
            })}
            </Main>
          </AllBlogPosts>
        </AllPostsTagsContainer>
      </Layout>



        // <div>
        //   <h1>{tagHeader}</h1>
        //   <ul>
        //     {edges.map(({ node }) => {
        //       const { slug, readingTime } = node.fields
        //       const { title, modified, tags } = node.frontmatter
        //       return (
        //         <li key={slug}>
        //           <Link to={slug}>{title}</Link>
        //           <span>{readingTime.text}</span>
        //         </li>
        //       )
        //     })}
        //   </ul>         
        //   <Link to="/tags">All tags</Link>
        // </div>
      )
    }

    Tags.propTypes = {
        pageContext: PropTypes.shape({
          tag: PropTypes.string.isRequired,
        }),
        data: PropTypes.shape({
          allMarkdownRemark: PropTypes.shape({
            totalCount: PropTypes.number.isRequired,
            edges: PropTypes.arrayOf(
              PropTypes.shape({
                node: PropTypes.shape({
                  frontmatter: PropTypes.shape({
                    title: PropTypes.string.isRequired,
                  }),
                  fields: PropTypes.shape({
                    slug: PropTypes.string.isRequired,
                  }),
                }),
              }).isRequired
            ),
          }),
        }),
      }
      export default Tags
      export const pageQuery = graphql`
      query($tag: String) {
        allMarkdownRemark(
          limit: 2000
          sort: { fields: [frontmatter___created], order: DESC }
          filter: { frontmatter: { tags: { in: [$tag] } } }
        ) {
          totalCount
          edges {
            node {
              fields {
                slug
                readingTime{
                  text
                }
              }
              frontmatter {
                title
                modified
                slug
                tags
              }
            }
          }
        }
      }
    `
