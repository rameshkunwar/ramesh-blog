import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { rhythm } from "../utils/typography"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"
import Navbar from "./navbar/navbar"
deckDeckGoHighlightElement()

const Container = styled.div`
  margin: 0 auto;
  max-width: 700px;
  padding: ${rhythm(2)};
  padding-top: ${rhythm(1.5)};
`
export default function Layout({ children }) {
  //useStaticQuery helps to retrieve data via GraphQL queries from non-page components
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  return (
    <React.Fragment>
      <Navbar />
      <Container>
        <Link to="/">
          <h3
            css={css`
              margin-bottom: ${rhythm(2)};
              display: inline-block;
              font-style: normal;
            `}
          >
            {data.site.siteMetadata.title}
          </h3>
        </Link>
        <Link
          to="/about/"
          css={css`
            float: right;
            margin-top: ${rhythm(1.5)};
          `}
        >
          About
        </Link>

        {children}
      </Container>
    </React.Fragment>
  )
}

// export default function Layout({ children }) {
//   return (
//     <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
//       <header style={{ marginBottom: `1.5rem` }}>
//         <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
//           <h3 style={{ display: `inline` }}>MyDemoSite</h3>
//         </Link>
//         <ul style={{ listStyle: `none`, float: `right` }}>
//           <ListLink to="/">Home</ListLink>
//           <ListLink to="/about/">About</ListLink>
//           <ListLink to="/contact/">Contact</ListLink>
//         </ul>
//       </header>

//       {children}
//     </div>
//   )
// }
