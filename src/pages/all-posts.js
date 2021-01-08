import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { rhythm } from "../utils/typography"
import moment from "moment"
import siteConfig from "../../site-config"
import SEO from "../components/seo"
import { TO_POST } from "../routes/path"
import RightSideBar from "../utils/allPostsRightTagBar"

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
const AllPostsTagsContainer = styled.div`
display:flex;  
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
margin-top:2rem;
@media (max-width: 768px) {
  display:none !important;
}
`
// const Container = styled.div`
//  display:flex;
//  min-height:74vh;
//  margin-top:2rem;
//  font-family: 'merriweather',serif;  
//  order:2;
//  flex: 0 0 800px;

// `
const TagBox = styled.div`
margin-top:2.5rem;
`
const TagContainer = styled.div`
display:flex;
flex-wrap:wrap;
`
const TagLinks = styled.a`
font-size: 1.2rem;
margin-right: .5rem;
background-color:rgb(0 56 147 / 0.2);
height: 2rem;
border-radius: 1rem;
padding: 0 .8rem;
color: #003893;
margin-top:.5rem;
`
const TagNames = styled.span`
vertical-align:middle;
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
const AllPosts = styled.div`
  display: block;
`
const MonthYear = styled.h2`
  margin-top: 2rem;
`

export default function showAllPosts({ data }) {
  return (
    <Layout rightSideBar={<RightSideBar />}>
      <SEO
        title={`All posts`}
        description={`List of all posts`}
        author={`Ramesh Kunwar`}
        keywords={siteConfig.tags}
        articleUrl={`https://kunwar.dk`}
      />
      <AllPostsTagsContainer>
      <AllBlogPosts>
        <Main>
          <MainHeader>
            {" "}
            <h1>All posts</h1>
          </MainHeader>
          {data.post.group.map((grp, i) => {
            return (
              <AllPosts key={(i + 1) * 3}>
                <MonthYear>{grp.fieldValue}</MonthYear>

                {grp.edges.map(({ node, i }) => (
                  <IndividualPostWrapper key={node.frontmatter.slug}>
                    <Link
                      to={TO_POST({ slug: node.frontmatter.slug })}
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
                            key={`${tag}-${i}`}
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
      </AllBlogPosts>
      {/* <AsideRight>
        <TagBox>
          <div className="inner-tag-container">
            <h2>tags</h2>
           <TagContainer>
           {
              data.tags.group.map((tag, index) => {
                return (
                  <TagLinks key={`xyz-${index}`} href={`/tags/${tag.tag}/`}>
                    <TagNames>{tag.tag}</TagNames>
                  </TagLinks>                 
                )
              })
            }
           </TagContainer>
          </div>
        </TagBox>
      </AsideRight>
      <AsideLeft> </AsideLeft> */}
    
      </AllPostsTagsContainer>
      </Layout>
  )
}

// export  function RightSideBar({data}){
// return(
//   <TagBox>
//           <div className="inner-tag-container">
//             <h2>tags</h2>
//            <TagContainer>
//            {
//              <TagLinks>
//                <TagNames>Test</TagNames>
//              </TagLinks>
//               // data.tags.group.map((tag, index) => {
//               //   return (
//               //     <TagLinks key={`xyz-${index}`} href={`/tags/${tag.tag}/`}>
//               //       <TagNames>{tag.tag}</TagNames>
//               //     </TagLinks>                 
//               //   )
//               // })
//             }
//            </TagContainer>
//           </div>
//         </TagBox>
// )
// }

export const query = graphql`
  query {
    post: allMarkdownRemark(
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
              slug
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
    tags:  allMarkdownRemark {
      group(field: frontmatter___tags) {
        tag: fieldValue
      }
    }
  
  }
  
`
