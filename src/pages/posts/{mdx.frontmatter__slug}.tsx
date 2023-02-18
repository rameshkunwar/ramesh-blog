import * as React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import siteConfig from "../../../site-config";
import { graphql, HeadFC, Link, PageProps } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { generateShareLinks, readTime } from "../../utils/utils";

const Headline = styled.h1`
  margin-bottom: 1.4rem;
  margin-top: 1.4rem;
`;
const DateReadShareContainer = styled.div`
  display: flex;
`;
const DateAndTimeToRead = styled.span`
  display: inline-flex;
  align-self: center;
  font-size: 1rem;
  font-weight: 500;
`;
const ShareOnSocialMedia = styled.span`
  display: flex;
  align-self: center;
  font-size: 1rem;
  line-height: 1;
  padding-left: 1rem;
`;
const ShareOnSocialMediaLink = styled.a`
  box-sizing: border-box;
  margin: 0 0.5rem;
  width: 1.8rem;
  height: 1.8rem;
  display: inline-block;
  background-color: rgba(0, 56, 147, 0.7);
  color: ${siteConfig.brandColor};
  text-decoration: none;
  border-radius: 15px;
  padding: 0.25rem;
  text-shadow: none;
  background-image: none;
  :hover {
    background-color: ${siteConfig.alternativeColor};
  }
`;
const SocialMediaImage = styled.img`
  width: 1.3rem;
  border-style: none;
  color: ${siteConfig.brandColor};
  margin-bottom: 0.5rem;
`;
const ImagePlaceholder = styled.div`
  margin-top: 1.5rem;
`;
const BlogPost = ({ data, children }: any) => {
  const handleImage = (imagePath: any) => {
    const image = getImage(imagePath);
    return image;
  };
  return (
    <Layout>
      <SEO
        title={data.mdx.frontmatter.title}
        description={data.mdx.excerpt}
        published={new Date(data.mdx.frontmatter.created)}
        modified={new Date(data.mdx.frontmatter.modified)}
        keywords={data.mdx.frontmatter.tags.join(", ")}
        articleUrl={`https://kunwar.dk/posts/${data.mdx.frontmatter.slug}`}
      />
      <Headline> {data.mdx.frontmatter.title} </Headline>
      <DateReadShareContainer>
        <DateAndTimeToRead>
          {new Intl.DateTimeFormat("en-US", {
            dateStyle: "medium",
          }).format(new Date(data.mdx.frontmatter.modified))}
          . {readTime(data.mdx.body)}
        </DateAndTimeToRead>
        <ShareOnSocialMedia>
          <ShareOnSocialMediaLink
            href={`${generateShareLinks(
              "TWITTER",
              data.mdx.frontmatter.title,
              data.mdx.frontmatter.slug
            )}`}
            target='blank'
            title={`share this article on Twitter`}
          >
            <SocialMediaImage
              alt='share on twitter image'
              src='/icons/twitter.svg'
            />
          </ShareOnSocialMediaLink>
          <ShareOnSocialMediaLink
            href={`${generateShareLinks(
              "LINKEDIN",
              data.mdx.frontmatter.title,
              data.mdx.frontmatter.slug
            )}`}
            target='blank'
            title={`share this article on LinkedIn`}
          >
            <SocialMediaImage
              alt='share on twitter image'
              src='/icons/linkedin.svg'
            />
          </ShareOnSocialMediaLink>
        </ShareOnSocialMedia>
      </DateReadShareContainer>
      <ImagePlaceholder>
        <GatsbyImage
          image={handleImage(data.mdx.frontmatter.hero_image)}
          alt={data.mdx.frontmatter.hero_image_alt}
        />
      </ImagePlaceholder>
      {children}
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        description
        tags
        modified
        created
        slug
        hero_image_alt
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`;

export const Head: HeadFC = () => <title>My blog</title>;
export default BlogPost;
