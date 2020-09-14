import React from "react"
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
  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    padding: 0.5rem;
    padding-top: 0.5rem;
    font-size: 22px !important;
    line-height: 1.54 !important;
  }
`
export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Navbar />
      <Container>{children}</Container>
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
