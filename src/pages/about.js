import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function About({ data }) {
  const { title, description } = data.site.siteMetadata
  return (
    <Layout>
      <h1> {title} </h1>
      <p>{description}</p>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

// export default function About() {
//   return (
//     <div>
//       <h1>About me</h1>
//       <p>
//         I’m good enough, I’m smart enough, and gosh darn it, people like me!
//       </p>
//     </div>
//   )
// }
