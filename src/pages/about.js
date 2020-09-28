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
  @media (max-width: 500px) {
    padding: 0 0.5rem;
  }
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
const Paragraph = styled.p`
  font-size: ${siteConfig.paragraphFontSizeWeb};
  @media (max-width: 500px) {
    font-size: ${siteConfig.paragraphFontSizeMobile};
  }
`
const LI = styled.li`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
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

          <Paragraph>
            I am a software developer, specialized as a full-stack developer. I
            work primarily with{" "}
            <a
              target="blank"
              href="https://www.azurebarry.com/dot-net-ecosystem-explained/"
            >
              .NET
            </a>{" "}
            ecosystem on the back-end and React JS, Redux, jQuery, vanilla
            JavaScript, Typescript, CSS (SCSS), HTML, Bootstrap, and of course
            GatsbyJS on the front-end. Whenever I have time, I look into
            Microsoft Azure (Kubernetes being my favorite).
          </Paragraph>
          <Paragraph>
            Probably, with the advent of{" "}
            <a href="https://dotnet.microsoft.com/apps/aspnet/web-apps/blazor">
              Blazor WebAssembly
            </a>
            , distinction between backend and front-end has, somewhat, been
            blurred. In the near future, I hope to use C# on both backend and
            frontend, though, at the same time I will be missing JavaScript!
          </Paragraph>

          <Paragraph>
            I was born and raised in Nepal, and currently live in Denmark. I
            have a bachelor's degree in Computer Science from Nepal and a Master
            degree in Computer Science from Sweden.
          </Paragraph>

          <h3
            css={css`
              font-family: Noto Sans, sans-serif;
              font-weight: bold;
            `}
          >
            Why start a blog?
          </h3>
          <Paragraph>
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
            knowledge I have acquired and learn new things.{" "}
            <i>Sharing is caring.</i>
          </Paragraph>

          <h3
            css={css`
              font-family: Noto Sans, sans-serif;
              font-weight: bold;
            `}
          >
            Coder, developer or architect?
          </h3>
          <Paragraph>
            I would like to call myself a motivated developer learning to become
            an architect one day. Currently, I am focused on learning and
            partially implementing Domain-Driven Design, SOLID principles and
            clean architecture. I am also very keen on learning one of the
            message queuing system (Kafka or RabbitMQ). Last but not the least,
            actor based systems such as Erlang has fascinated me. Fortunately,
            similar system called Akka.NET has been ported to the .net world. I
            firmly believe, Akka.net is a good alternative to a build a
            highly-available highly-scalable system such as Erlang.
          </Paragraph>

          <h3
            css={css`
              font-family: Noto Sans, sans-serif;
              font-weight: bold;
            `}
          >
            What do I work with and what I plan to learn?
          </h3>
          <Paragraph>
            <h4 style={{ fontSize: "1.2rem", marginBottom: ".5rem" }}>
              Back-end
            </h4>
            <ul>
              <LI>.NET Framework &amp; .NET Core with C#</LI>
              <LI>EntityFramework 6+, EF Core, Dapper</LI>
              <LI>
                Inversion of Control Container: Castle Windsor for .net
                Framework &amp;{" "}
              </LI>
              <LI>Message broker/queue: RabbitMQ</LI>
              <LI>
                Akka.NET for high availability &amp; scalability (learning)
              </LI>
              <LI> MS SQL Server, MySQL</LI>
              <LI>MSTest V2 for testing</LI>
            </ul>
            <h4 style={{ fontSize: "1.2rem", marginBottom: ".5rem" }}>
              Front-end
            </h4>
            <ul>
              <LI>React JS, Redux </LI>
              <LI>Vanilla JavaScript (ES2015+), jQuery, and Typescript</LI>
              <LI>SCSS, CSS, Html, Bootstrap, Material Design</LI>
              <LI>Storybook for UI and Jest for JavaScript testing</LI>
              <LI>React Native (learning)</LI>
              <LI>Blazor web-assembly (learning)</LI>
            </ul>
            <h4 style={{ fontSize: "1.2rem", marginBottom: ".5rem" }}>
              Working environment, tools
            </h4>
            <ul>
              <LI>
                Windows OS (.NET 5 onward, Linux environment high probability){" "}
              </LI>
              <LI>Visual Studio 2019</LI>
              <LI>Visual Studio Code for front-end</LI>
              <LI>MS SQL Server Management Studio &amp; MySQL Workbench</LI>
              <LI>
                Lenovo Thinkpad T490 (primary) &amp; Fujitsu Siemens Q920
                (secondary) NB: Home working
              </LI>
            </ul>
          </Paragraph>

          <h3
            css={css`
              font-family: Noto Sans, sans-serif;
              font-weight: bold;
            `}
          >
            Beyond software development
          </h3>
          <Paragraph>
            I have a family and love to spend time with them. I am also a
            Manchester United fan and never miss a chance to watch them playing.
            Apart from football, I do watch Formula 1 championship almost every
            sunday and if possible, qualifying sessions on saturdays.
          </Paragraph>
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
