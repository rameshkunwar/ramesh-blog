import { useStaticQuery, graphql } from "gatsby"

export const useImageFluid = () => {
  const data = useStaticQuery(
    graphql`
      query {
        file(name: { eq: "author_image" }, extension: { eq: "jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 64, pngQuality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )
  return data.file
}
