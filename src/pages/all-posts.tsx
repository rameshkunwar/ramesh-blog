import * as React from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import SEO from "../components/seo";
import { graphql, Link } from "gatsby";
import { dateToMonthYear, readTime } from "../utils/utils";
import siteConfig from "../../site-config";

const IndividualPostWrapper = styled.div`
  border-radius: 8px;
  box-shadow: inset 0 0 0 1px #dae4ed, 0 5px 15px -5px rgba(0, 0, 0, 0.1);
  background: #fff;
  overflow: hidden;
  padding: 1rem;
  margin-bottom: 1rem;
  &:last-child {
    margin-bottom: 0;
  }
  @media (max-width: 667px) {
    padding: 0.5rem;
  }
`;
const AllPostsTagsContainer = styled.div`
  display: flex;
`;
const AllBlogPosts = styled.div`
  flex: 1 0 800px;
  order: 2;
  padding: 1rem;
  padding-top: 0;
  margin-top: 2rem;
  font-family: "merriweather", serif;
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
`;

const TitleH3 = styled.h3`
  margin-bottom: 0.35rem;
  color: ${siteConfig.brandColor};
  font-family: "merriweather", serif;
  font-size: 1.5rem;
`;

const Main = styled.div`
  flex: 0 0 800px;
  max-width: 100%;
  padding: 0 1rem;
  box-sizing: border-box;
`;
const Modified = styled.div`
  color: rgb(5, 6, 7);
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;
const MainHeader = styled.div`
  display: block;
`;
const AllPosts = styled.div`
  display: block;
`;
const MonthYear = styled.h2`
  margin-top: 2rem;
`;

const ShowAllPosts = ({ data }: any) => {
  return (
    <Layout>
      <SEO
        title={`All posts`}
        description={`List of all posts`}
        author={`Ramesh Kunwar`}
        articleUrl={`https://kunwar.dk`}
      />
      <AllPostsTagsContainer>
        <AllBlogPosts>
          <Main>
            <MainHeader>
              <h1>All posts</h1>
            </MainHeader>
            {data.allMdx.group.reverse().map((grp: any) => {
              return (
                <AllPosts key={grp.fieldValue}>
                  <MonthYear> {dateToMonthYear(grp.fieldValue)} </MonthYear>

                  {grp.edges.map((post) => (
                    <IndividualPostWrapper key={post.node.id}>
                      <Link to={`/posts/${post.node.frontmatter.slug}`}>
                        <TitleH3> {post.node.frontmatter.title} </TitleH3>
                        <Modified>
                          {" "}
                          {new Intl.DateTimeFormat("en-US", {
                            dateStyle: "medium",
                          }).format(
                            new Date(post.node.frontmatter.modified)
                          )}{" "}
                          . {readTime(post.node.body)}
                        </Modified>
                      </Link>
                    </IndividualPostWrapper>
                  ))}
                </AllPosts>
              );
            })}
          </Main>
        </AllBlogPosts>
      </AllPostsTagsContainer>
    </Layout>
  );
};

export default ShowAllPosts;

export const query = graphql`
  query MyQuery {
    allMdx(sort: { frontmatter: { modified: DESC } }) {
      group(field: { frontmatter: { created: SELECT } }) {
        fieldValue
        edges {
          node {
            frontmatter {
              title
              modified
              slug
              tags
              blogMonth
              created
            }
            id
            body
          }
        }
      }
    }
  }
`;
