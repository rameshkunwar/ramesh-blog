import React from "react"
import { graphql } from "gatsby"
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

export default function About({ data }) {
  const { title, description } = data.site.siteMetadata
  return (
    <Layout>
      <SEO
        title="About Ramésh Kunwar"
        description="Description of the author and the blog owner"
      />
      <Container>
        <Main>
          <MainHeader>
            <Headline>About me</Headline>
          </MainHeader>

          <p
            css={css`
              font-size: 1.3rem;
            `}
          >
            I work as a full-time full-stack developer. I work primarily with{" "}
            <a
              target="blank"
              href="https://www.azurebarry.com/dot-net-ecosystem-explained/"
            >
              .NET
            </a>{" "}
            ecosystem on the back-end (C# as primary backend language) and
            primarily, React JS, Redux, jQuery, vanilla JavaScript, Typescript,
            CSS (SCSS), HTML, Bootstrap, and of course GatsbyJS on the
            front-end. Kubernetes and docker are my hobbies.
          </p>
          <p
            css={css`
              font-size: 1.3rem;
            `}
          >
            Probably, with the introduction of{" "}
            <a href="https://dotnet.microsoft.com/apps/aspnet/web-apps/blazor">
              Blazor WebAssembly
            </a>
            , distinction between backend and frontend has, somewhat, been
            blurred. In the near future, I hope to use C# on both backend and
            frontend, though, at the same time I will be missing JavaScript,
            particularly React JS. Well, this is a topic, itself, for a blog!
          </p>

          <p
            css={css`
              font-size: 1.3rem;
            `}
          >
            I was born and raise in Nepal and currently live in Denmark. I have
            a bachelor's degree in Computer Science from Nepal and a Master
            degree in Computer Science from Sweden.
          </p>

          <h3
            css={css`
              font-family: Noto Sans, sans-serif;
              font-weight: bold;
            `}
          >
            Why start a blog?
          </h3>
          <p
            css={css`
              font-size: 1.3rem;
            `}
          >
            The field of web (or mobile app) development is continuously and
            rapidly changing. A developer not only need to sharpen ones skill
            but also need to learn new. And, I believe in
            <span
              css={css`
                display: block;
                color: ${siteConfig.secondaryThemeColor};
                padding: 1rem 0;
                text-align: center;
                font-size: 1.5rem;
              `}
            >
              To teach is to learn twice!
            </span>
            Let's learn together!! The main purpose of the blog is to share the
            knowledge I have acquired and learn new things with the world.
            Sharing is caring.
          </p>
          <p
            css={css`
              font-size: 1.3rem;
            `}
          >
            I would like to call myself a motivated developer, with architecture
            in mind. I am continuously sharpening my skills as well as learning
            new things that I need most. Most of the time, I follow a tutorial
            or read books/articles about the subject matter. Then, I try to
            build something out of it. However, I found out that If I were to
            teach someone the same thing, I would have to do more research, had
            to dig even dipper. I hope this blog will help me to be even better
            and could help others as well.
          </p>
          <p
            css={css`
              font-size: 1.3rem;
            `}
          >
            I do have architecture in my mind. I practice and try to strictly
            implement SOLID principles. I do practice Domain-Driven design in
            medium to large project. I believe, we developer, should not just
            write code to solve problems, but, should write code that human can
            understand, that is modular, and that is clean.
          </p>

          <h3
            css={css`
              font-family: Noto Sans, sans-serif;
              font-weight: bold;
            `}
          >
            Beyond software development
          </h3>
          <p
            css={css`
              font-size: 1.3rem;
            `}
          >
            I have a family and love to spend time with them. I am also a
            Manchester United fan and never miss a chance to watch the playing.
            Apart from football, I do watch Formula 1 championship almost every
            sunday and if possible, qualifying session on saturdays.
          </p>
        </Main>
      </Container>
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
