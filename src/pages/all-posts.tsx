import * as React from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import SEO from "../components/seo";
import { graphql, Link } from "gatsby";
import { dateToMonthYear, readTime } from "../utils/utils";
import siteConfig from "../../site-config";
import kebabCase from "kebab-case";
import { nanoid } from "nanoid";
import ShowTagsOnRightSideBar from "../utils/TagsOnRightSideBar";

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
const TagOuterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;
const TagInnerContainer = styled.div`
  margin: 0.4rem 0;
  display: wrap;
  flex-wrap: wrap;
`;
const Tags = styled.div`
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
`;

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
    <Layout rightSideBar={<ShowTagsOnRightSideBar />}>
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

                  {grp.edges.map((post: any) => (
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
                      <TagOuterContainer>
                        <TagInnerContainer>
                          {post.node.frontmatter.tags.map((tag: any) => [
                            <TagButton key={nanoid()}>
                              <a
                                className='tag-link'
                                href={`/tags/${kebabCase(
                                  tag.replace("#", "-sharp")
                                )}`}
                              >
                                {tag}
                              </a>
                            </TagButton>,
                          ])}
                        </TagInnerContainer>
                      </TagOuterContainer>
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
