import * as React from "react";
import { graphql, HeadFC, Link, PageProps } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import siteConfig from "../../site-config";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { readTime } from "../utils/utils";

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
const TitleText = styled.h2`
  font-family: sohne, Helvetica Neue, Helvetica, Arial, sans-serif !important;
  margin-bottom: 0.35rem;
  margin-top: 1.4rem;
  color: hsla(0, 0%, 0%, 0.9) !important;
  text-decoration: none !important;
  font-weight: 600;
  text-rendering: optimizeLegibility;
  font-size: 1.51572rem;
  line-height: 1.1;
`;
const IndexPage = ({ data }: any) => {
  const handleImage = (imagePath: any) => {
    const image = getImage(imagePath);
    return image;
  };
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
              <Link to={`/posts/${node.frontmatter.slug}`}>
                <GatsbyImage
                  image={handleImage(node.frontmatter.hero_image)}
                  alt={node.frontmatter.hero_image_alt}
                />
                <TitleText>{node.frontmatter.title}</TitleText>
              </Link>
              <DateAndReadTime>
                {" "}
                {new Intl.DateTimeFormat("en-US", {
                  dateStyle: "medium",
                }).format(new Date(node.frontmatter.modified))}
                . {readTime(node.body)}
              </DateAndReadTime>
              <Link to={`/posts/${node.frontmatter.slug}`}>
                <p> {node.excerpt} </p>
              </Link>
            </IndividualPostWrapper>
          ))}
        </Main>
      </BlogContainer>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>My blog</title>;

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
          hero_image_alt
          hero_image_credit_text
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
        excerpt(pruneLength: 140)
        body
      }
    }
  }
`;
