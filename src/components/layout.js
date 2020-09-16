import React from "react"
import styled from "@emotion/styled"
import { rhythm } from "../utils/typography"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"
import Navbar from "./navbar/navbar"
deckDeckGoHighlightElement()

const Container = styled.div`
  margin: 0 auto;
  max-width: 800px;
  padding: ${rhythm(2)};
  padding-top: ${rhythm(1 / 2)};
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
