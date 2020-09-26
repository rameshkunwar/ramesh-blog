import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import SEO from "../components/seo"
import siteConfig from "../../site-config"
import ContactForm from "./ContactForm"

const Container = styled.div`
 display:flex;
 min-height:74vh;
 margin-top:0;
 font-family: 'merriweather',serif;
  }
`
const Main = styled.div`
  order: 2;
  flex: 0 0 740px;
  max-width: 100%;
  padding: 0 1.5rem;
  box-sizing: border-box;
`
const MainHeader = styled.div`
  display: block;
`
const Headline = styled.h1`
  font-family: Noto Sans, sans-serif;
  font-weight: bold;
  margin: 2rem 0;
  font-size: 2.7rem;
`

export default function Contact() {
  return (
    <Layout>
      <SEO
        title="Contact Ramésh Kunwar"
        description="Contact form to send message to the author"
      />
      <Container>
        <Main>
          <MainHeader>
            <Headline>Contact me</Headline>
          </MainHeader>
          <ContactForm />
        </Main>
      </Container>
    </Layout>
  )
}
