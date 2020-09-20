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
`
const FooterContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  min-height: 5.5rem;
  padding: 0 1rem;
  box-sizing: border-box;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const FooterNavigation = styled.div`
  text-align: right;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const SocialMedia = styled.div`
  font-style: italic;
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 768.98px) {
    display: none;
  }
`
const CopyRight = styled.div`
  font-size: 1.2rem;
  display: none;
  @media (min-width: 768.98px) {
    display: inline-block;
  }
`
const License = styled.div`
  font-size: 1rem;
  margin-top: 0.3rem;
`
const CopyRightSmallDevice = styled.div`
  display: none;
  @media (max-width: 768.98px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 1rem;
  }
`
const CopyRightTextSmallDevice = styled.div`
  display: flex;
  font-size: 1.2rem;
  justify-content: center;
`
const LicenseSmall = styled.div`
  font-size: 1rem;
  margin-top: 0.2rem;
  margin-bottom: 0.3rem;
  display: flex;
  justify-content: center;
`
const LicenseLink = styled.a`
  color: ${siteConfig.brandColor};
  text-decoration: none;
  :hover {
    color: ${siteConfig.alternativeColor};
    text-decoration: underline;
  }
`
const SocialMediaLink = styled.a`
  box-sizing: border-box;
  margin-right: 0.8rem;
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
  :last-of-type {
    margin-right: 0.6rem;
  }
  :hover {
    background-color: ${siteConfig.alternativeColor};
  }
`
const NavItem = styled(Link)`
  text-decoration: none;
  color: ${siteConfig.brandColor};
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;
  text-shadow: unset !important;
  background-image: unset !important;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: ${siteConfig.alternativeColor};
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: ${siteConfig.alternativeColor};
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`
const SocialMediaImage = styled.img`
  width: 1.3rem;
  border-style: none;
  color: ${siteConfig.brandColor};
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
          <License>
            Licensed under{" "}
            <LicenseLink href={siteConfig.lincenseLink} target="blank">
              CC BY 4.0
            </LicenseLink>
          </License>
        </CopyRight>
        <FooterNavigation>
          <NavItem to={siteConfig.links.home}>Home</NavItem>
          <NavItem to={siteConfig.links.allPosts}>All posts</NavItem>
          <NavItem to={siteConfig.links.about}>About</NavItem>
          <NavItem to={siteConfig.links.contact}>Contact</NavItem>
        </FooterNavigation>
        <SocialMedia>
          <SocialMediaLink
            href={`mailto: ${siteConfig.authorEmail}`}
            target="blank"
            title={`Mail me`}
          >
            <SocialMediaImage alt="Email address" src="/icons/email.svg" />
          </SocialMediaLink>
          <SocialMediaLink
            href={`https://twitter.com/${siteConfig.social.twitter}`}
            target="blank"
            title={`${siteConfig.author}'s Twitter profile`}
          >
            <SocialMediaImage alt="Twitter profile" src="/icons/twitter.svg" />
          </SocialMediaLink>
          <SocialMediaLink
            href={`https://www.linkedin.com/in/${siteConfig.social.linkedin}`}
            target="blank"
            title={`${siteConfig.author}'s Linkedin profile`}
          >
            <SocialMediaImage
              alt="LinkedIn profile"
              src="/icons/linkedin.svg"
            />
          </SocialMediaLink>
          <SocialMediaLink
            href={`https://stackoverflow.com/users/8515291/${siteConfig.social.stackoverflow}`}
            target="blank"
            title={`${siteConfig.author}'s Stackoverflow profile`}
          >
            <SocialMediaImage
              alt="Stackoverflow profile"
              src="/icons/stackoverflow.svg"
            />
          </SocialMediaLink>
          <SocialMediaLink
            href={`https://github.com/${siteConfig.social.github}`}
            target="blank"
            title={`${siteConfig.author}'s Github profile`}
          >
            <SocialMediaImage alt="Github profile" src="/icons/github.svg" />
          </SocialMediaLink>
        </SocialMedia>
        <CopyRightSmallDevice>
          {" "}
          <CopyRightTextSmallDevice>
            {" "}
            © {year} {siteConfig.author}
          </CopyRightTextSmallDevice>
          <LicenseSmall>
            Licensed under&nbsp;
            <LicenseLink href={siteConfig.lincenseLink} target="blank">
              CC BY 4.0
            </LicenseLink>
          </LicenseSmall>
        </CopyRightSmallDevice>
      </FooterContent>
    </BlogFooter>
  )
}
export default Footer
