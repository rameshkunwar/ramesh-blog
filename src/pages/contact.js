import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import SEO from "../components/seo"
import siteConfig from "../../site-config"

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

const FormControl = styled.input`
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: ${siteConfig.brandColor};
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid ${siteConfig.brandColor};
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  margin-bottom: 1.5rem;
`
const TextAreaControl = styled.textarea`
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: ${siteConfig.brandColor};
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  margin-bottom: 1rem;
`
const Button = styled.button`
  background-color: ${siteConfig.brandColor};
  color: #fff;
  border: 0;
  border-radius: 0.125rem;
  webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
    0 2px 10px 0 rgba(0, 0, 0, 0.12);
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
    padding: .4rem 2rem;
    
}
  :hover {
    background-color: ${siteConfig.alternativeColor};
    color: ${siteConfig.brandColor};
  }
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

          <form
            autoComplete="none"
            css={css`
              border-color: #e0e0e0;
              text-align: center;
              padding: 2rem;
              border: 1px solid #dee2e6;
            `}
            action="https://getform.io/f/a5776ea6-10e5-435f-a9a5-39bcf1efa0fc"
            method="POST"
          >
            <FormControl
              autoComplete="none"
              type="text"
              name="name"
              placeholder="Name"
            />
            <FormControl
              autoComplete="none"
              type="email"
              name="email"
              placeholder="E-mail"
            />
            <TextAreaControl
              autoComplete="xyz"
              rows="3"
              name="message"
              placeholder="Message"
            />
            <Button type="submit">Send</Button>
            {/* <label>
              Email
              <input type="email" name="email" />
            </label>
            <label>
              Name
              <input type="text" name="name" />
            </label>
            <label>
              Message
              <input type="text" name="message" />
            </label> */}
            {/* <button type="submit">Send</button> */}
          </form>
        </Main>
      </Container>
    </Layout>
  )
}
