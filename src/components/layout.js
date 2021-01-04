import React from "react"
import styled from "@emotion/styled"
import { rhythm } from "../utils/typography"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"
import Navbar from "./navbar/navbar"
import Footer from "./footer"
import siteConfig from "../../site-config"
import "./layout.css"
import CookieConsent from "react-cookie-consent"

deckDeckGoHighlightElement()

const BlogPostMain = styled.div`
display:flex;
`
const BlogPosts = styled.div`  
  order:2;
  padding: ${rhythm(2)};
  padding-top: 0;
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
@media (max-width: 768px) {
  display:none !important;
}
`
const SocialMedia = styled.div`
  position: fixed;
  width: 50px;
  z-index: 999;
  margin: 0;
  top: 40%;
  left: 0;
  @media (max-width: 768px) {
    display: none;
  }
`
const SocialMediaLink = styled.a`
  box-sizing: border-box;
  margin-left: 0.5rem;
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
const SocialMediaImage = styled.img`
  width: 1.3rem;
  border-style: none;
  color: ${siteConfig.brandColor};
  margin-bottom: 0.5rem;
`
export default function Layout({ children }) {
  return (
    <React.Fragment>
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
          <SocialMediaImage alt="LinkedIn profile" src="/icons/linkedin.svg" />
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
      <Navbar />
      {/* <BlogPosts>{children}</BlogPosts> */}
      <BlogPostMain>
      <BlogPosts>{children}</BlogPosts>
      <AsideRight>
       
      </AsideRight>
      <AsideLeft>
        </AsideLeft>
    
      </BlogPostMain>
      <Footer />
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        enableDeclineButton
        flipButtons={true}
        cookieName="gatsby-gdpr-google-analytics"
        cookieValue={true}
        declineCookieValue={false}
        sameSite="none"
        style={{
          backgroundColor: "#ffffff",
          color: "#000000",
          fontSize: "15px",
          fontFamily: "'merriweather',serif",
          boxShadow: "rgba(0, 0, 0, 0.5) 0px 9px 10px 5px",
          borderTop: "1px solid #cbd6e2",
        }}
        buttonStyle={{
          color: "#ffffff",
          backgroundColor: "#003893",
          borderRadius: "3px",
          fontSize: "1rem",
        }}
        declineButtonStyle={{
          color: "#C60C30",
          backgroundColor: "#ffffff",
          borderRadius: "3px",
          border: "1px solid #C60C30",
          fontSize: "1rem",
        }}
        expires={150}
      >
        I respect your privacy. This website stores cookie. These cookies are used to measure how users interact with
        website content.{" "}        
        <br />
       This information is used to improve your browsing experience and
        for analytics and metrics about the visitors on this website.{" "}      
        <br />
        <br />
        If you decline, your information won’t be tracked when you visit this
        website. A cookie will be used in your browser to remember your
        preference.
      </CookieConsent>
    </React.Fragment>
  )
}
