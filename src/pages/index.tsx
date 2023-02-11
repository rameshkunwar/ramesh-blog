import * as React from "react";
import { graphql, HeadFC, Link, PageProps } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import siteConfig from "../../site-config";
import styled from "styled-components";

const IndividualPostWrapper = styled.div`
  border-radius: 8px;
  box-shadow: inset 0 0 0 1px #dae4ed, 0 5px 15px -5px rgba(0, 0, 0, 0.1);
  background: #fff;
  overflow: hidden;
  padding: 1rem;
  margin-bottom: 3rem;
  @media (max-width: 667px) {
    padding: 0.5rem;
  }
`;
const BlogContainer = styled.div`
  display:flex;
  order:2;
  min-height:74vh;
  margin-top:2rem;
  font-family: 'merriweather',serif;
  justify-content:center;
  }
`;

const Main = styled.div`
  flex: 0 0 800px;
  max-width: 100%;
  box-sizing: border-box;
`;
const DateAndReadTime = styled.div`
  margin-top: 0.5rem;
  font-size: 0.8rem;
  font-weight: 500;
`;
const IndexPage = ({ data }: any) => {
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
          {data.allMdx.nodes.map((node: any) => (
            <IndividualPostWrapper key={node.id}>
              <Link to={node.frontmatter.slug}>
                <h2>{node.frontmatter.title}</h2>
                <DateAndReadTime>
                  {" "}
                  {node.frontmatter.modified.toLocaleString()}{" "}
                </DateAndReadTime>
              </Link>
            </IndividualPostWrapper>
          ))}
        </Main>
      </BlogContainer>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { modified: DESC } }) {
      nodes {
        frontmatter {
          title
          created
          modified
          slug
          tags
          featuredImage {
            id
            relativePath
          }
        }
        id
        excerpt
      }
    }
  }
`;
