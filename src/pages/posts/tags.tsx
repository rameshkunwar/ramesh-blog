import React from "react";
import styled from "styled-components";
import siteConfig from "../../../site-config";
import { Link, graphql } from "gatsby";

const AllPostsTagsContainer = styled.div`
  display: flex;
  height: 77vh;
`;
const AllBlogPosts = styled.div`
  flex: 1 0 800px;
  order: 2;
  padding: 2.8rem;
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
const Main = styled.div`
  flex: 0 0 800px;
  max-width: 100%;
  padding: 0 1rem;
  box-sizing: border-box;
`;
const MainHeader = styled.div`
  display: block;
`;
const Title = styled.h3`
  margin-bottom: 0.35rem;
  color: ${siteConfig.brandColor};
  font-family: "merriweather", serif;
  font-size: 1.5rem;
`;
const DateAndReadingTime = styled.div`
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
const TagsPost = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMdx;
  return (
    <>
      <h3> tags pages here</h3>
    </>
  );
};
export default TagsPost;

export const tagQuery = graphql`
  query ($tag: String) {
    allMdx(
      limit: 2000
      sort: { frontmatter: { modified: DESC } }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
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
`;
