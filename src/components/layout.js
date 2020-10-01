import React from "react"
import styled from "@emotion/styled"
import { rhythm } from "../utils/typography"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"
import Navbar from "./navbar/navbar"
import Footer from "./footer"
import siteConfig from "../../site-config"
import "./layout.css"

deckDeckGoHighlightElement()

const Container = styled.div`
  margin: 0 auto;
  max-width: 800px;
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
      <Container>{children}</Container>
      <Footer />
    </React.Fragment>
  )
}
