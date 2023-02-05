import * as React from "react";
import styled from "styled-components";
import Layout from "../components/layout";

const Container = styled.div`
 display:flex;
 min-height:74vh;
 margin-top:2rem;
 font-family: 'merriweather',serif;
  }
`;
const About = () => {
  return (
    <Layout>
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
