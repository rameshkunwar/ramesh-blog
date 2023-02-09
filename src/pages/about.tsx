import * as React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import siteConfig from "../../site-config";
import SEO from "../components/seo";

const Container = styled.div`
 display:flex;
 min-height:74vh;
 margin-top:2rem;
 font-family: 'merriweather',serif;
  }
`;
const Main = styled.div`
  flex: 0 0 740px;
  max-width: 100%;
  padding: 0 1.5rem;
  box-sizing: border-box;
  @media (max-width: 500px) {
    padding: 0 0.5rem;
  }
`;
const MainHeader = styled.div`
  display: block;
  margin-bottom: 2rem;
`;
const Headline = styled.h1`
  font-family: Noto Sans, sans-serif;
  font-weight: bold;
  margin: 0 0;
  font-size: 2.7rem;
`;
const Paragraph = styled.p`
  font-size: ${siteConfig.paragraphFontSizeWeb};
  @media (max-width: 500px) {
    font-size: ${siteConfig.paragraphFontSizeMobile};
  }
`;
const About = () => {
  return (
    <Layout>
      <SEO
        title='About Ramésh Kunwar'
        description='A tech enthusiast and Formula1 lover'
      />
      <Container>
        <p>
          Hi there! I'm the proud creator of this site, which I built with
          Gatsby.
        </p>
      </Container>
    </Layout>
  );
};
export default About;
