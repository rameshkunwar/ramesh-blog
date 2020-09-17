import Link from "gatsby-link"
import React from "react"
import styled from "@emotion/styled"
import siteConfig from "../../site-config"

const year = new Date().getFullYear()
const BlogFooter = styled.footer`
  width: 100%;
  background-color: rgba(218, 228, 237, 0.2);
  padding: 0.8rem;
  font-size: 1.3rem;
  box-sizing: border-box;
  height: 2.5rem;
`
const FooterContent = styled.div`
  height: 2.5rem;
  max-width: 880px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 1rem;
  box-sizing: border-box;
`
const FooterNavigation = styled.div`
  text-align: right;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const SocialMedia = styled.div`
  font-style: italic;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const CopyRight = styled.div`
  font-size: 1.2rem;
`
const License = styled.div`
  font-size: 1rem;
  margin-top: 0.5rem;
`
const Footer = () => {
  return (
    <BlogFooter>
      <FooterContent>
        <CopyRight>
          {" "}
          <div>
            {" "}
            © {year} {siteConfig.author}
          </div>
          <License></License>
        </CopyRight>
        <div className="component-links">
          <FooterNavigation>
            <Link to={siteConfig.links.home}>Home</Link>
            <Link to={siteConfig.links.allPosts}>All posts</Link>
            <Link to={siteConfig.links.about}>About</Link>
            <Link to={siteConfig.links.contact}>Contact</Link>
          </FooterNavigation>
        </div>
        {/* TO-DO icons need width and height, */}
        {/* <SocialMedia>
          <a href={`mailto: ${siteConfig.authorEmail}`} title={`Mail me`}>
            <img alt="Email address" src="/icons/email.svg" />
          </a>
          <a
            href={`https://twitter.com/${siteConfig.social.twitter}`}
            title={`${siteConfig.author}'s Twitter profile`}
          >
            <img alt="Twitter profile" src="/icons/twitter.svg" />
          </a>
          <a
            href={`https://www.linkedin.com/in/${siteConfig.social.linkedin}`}
            title={`${siteConfig.author}'s Linkedin profile`}
          >
            <img alt="LinkedIn profile" src="/icons/linkedin.svg" />
          </a>
          <a
            href={`https://stackoverflow.com/users/8515291/${siteConfig.social.stackoverflow}`}
            title={`${siteConfig.author}'s Stackoverflow profile`}
          >
            <img alt="Stackoverflow profile" src="/icons/stackoverflow.svg" />
          </a>
          <a
            href={`https://github.com/${siteConfig.social.github}`}
            title={`${siteConfig.author}'s Github profile`}
          >
            <img alt="Github profile" src="/icons/github.svg" />
          </a>
        </SocialMedia> */}
      </FooterContent>
    </BlogFooter>
  )
}
export default Footer
