import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import SEO from "../components/seo"
import moment from "moment"
import siteConfig from "../../site-config"

const Headline = styled.h1`
  margin-bottom: 1.4rem;
  margin-top: 1.4rem;
`
const DateReadShareContainer = styled.div`
display:flex;
`
const DateAndTimeToRead = styled.span`
  display:inline-flex;
  align-self:center;
  font-size: 1rem;
  font-weight: 500;
`
const ShareOnSocialMedia = styled.span`
  display:flex;
  align-self:center;
  font-size: 1rem;
  line-height:1;
  padding-left:1rem;
`
const ShareOnSocialMediaLink = styled.a`
  box-sizing: border-box;
  margin:0 0.5rem;
  width: 1.8rem;
  height: 1.8rem;
  display: inline-block;
  background-color: rgba(0, 56, 147, 0.7);
  color: ${siteConfig.brandColor};
  text-decoration: none;
  border-radius: 4px;
  padding: 0.25rem;
  text-shadow: none;
  background-image: none; 
  :hover {
    background-color: ${siteConfig.alternativeColor};
  }
`
const SocialMediaImage = styled.img`
  width: 1.3rem;
  border-style: none;
  color: ${siteConfig.brandColor};
  margin-bottom: 0.5rem;
`
export default function BlogPost({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.excerpt}
        published={post.frontmatter.created}
        modified={post.frontmatter.modified}
        keywords={post.frontmatter.tags.join(", ")}
        articleUrl={`https://kunwar.dk/posts/${post.frontmatter.slug}`}
        articleImage={`https://kunwar.dk${post.frontmatter.featuredImage.childImageSharp.fluid.src}`}
      />
      <Headline> {post.frontmatter.title} </Headline>
     
     <DateReadShareContainer>
     <DateAndTimeToRead>
        {moment(post.frontmatter.modified).format("DD-MMM-YYYY")} .{" "}
        {post.fields.readingTime.text}
      </DateAndTimeToRead>
      <ShareOnSocialMedia>
      <ShareOnSocialMediaLink
          href= {`${generateShareLinks("TWITTER", post.frontmatter.title, post.frontmatter.slug)}`}
          target="blank"
          title={`share this article on Twitter`}
        >
          <SocialMediaImage alt="share on twitter image" src="/icons/twitter.svg" />
        </ShareOnSocialMediaLink>
        <ShareOnSocialMediaLink
          href= {`${generateShareLinks("LINKEDIN", post.frontmatter.title, post.frontmatter.slug)}`}
          target="blank"
          title={`share this article on LinkedIn`}
        >
          <SocialMediaImage alt="share on twitter image" src="/icons/linkedin.svg" />
        </ShareOnSocialMediaLink>
      </ShareOnSocialMedia>
     </DateReadShareContainer>

     
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        readingTime {
          text
        }
      }
      frontmatter {
        title
        description
        tags
        modified
        created
        slug
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 650, maxHeight: 390, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      excerpt(pruneLength: 150)
    }
  }
`

export const generateShareLinks = (type, description, url) =>{
  const twitterShareUrl = "https://twitter.com/share";
  const linkedInShareUrl = "https://www.linkedin.com/shareArticle?mini=true";
  let returnUrl;
  switch (type) {
    case "TWITTER":
      returnUrl = `${twitterShareUrl}?text=${encodeURI(description)}&url=${encodeURI(getFullUrl(url))}`;
      break;
    case "LINKEDIN":
      returnUrl = `${linkedInShareUrl}&url=${encodeURI(getFullUrl(url))}?ocid=ww.social.link.linkedin&title=${encodeURI(description)}`;
      break;
    default:
      break;
  }
  return returnUrl;
}

export const getFullUrl = (slug) => {
  return `https://kunwar.dk/posts/${slug}`
  // var isLocalhost = window?.location?.href.indexOf('localhost') > 0;
  // if(isLocalhost){
  //   return `http://localhost:8000/posts/${slug}`
  // }else{
  //   return `https://kunwar.dk/posts/${slug}`
  // }
}
