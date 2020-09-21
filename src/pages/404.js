import React from "react"
import styled from "@emotion/styled"
import { rhythm } from "../utils/typography"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const Container = styled.div`
 display:flex;
 min-height:74vh;
 margin-top:2rem;
  }
`
const NotFound = styled.h2`
  display: flex;
  justify-content: center;
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
        <NotFound>404: Not Found</NotFound>
        <p>
          Sorry! the page your are looking, probably, has never been created or
          modified.
        </p>
        <p>
          Please go to the <Link to="/">home page</Link>{" "}
        </p>
        <p>or</p>

        <p>
          Click&nbsp;
          <Link to="/allposts">here </Link> to see all posts.
        </p>
      </Main>
    </Container>
  </Layout>
)
export default PageNotFound
