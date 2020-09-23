import React from "react"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import image from "../../content/images/not-found.webp"

const Container = styled.div`
 display:flex;
 min-height:74vh;
 margin-top:2rem;
  }
`
const Main = styled.div`
  order: 2;
  flex: 0 0 740px;
  max-width: 100%;
  padding: 0 1rem;
  box-sizing: border-box;
`

const PageNotFound = () => (
  <Layout>
    <SEO title="404: Not Found" />
    <Container>
      <Main>
        <Link to="/">
          <img src={image} alt="not found " />
        </Link>
      </Main>
    </Container>
  </Layout>
)
export default PageNotFound
