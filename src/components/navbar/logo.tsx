import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { useImageFluid } from "./use-author-image-hook";

const LogoWrap = styled.div`
  margin: auto 0;
  flex: 0 1 64px;
  border-radius: 64px;
`;
const NameAndThoughtWrap = styled.div`
  margin-right: auto;
  flex: 0 1 250px;
  text-transform: none;
  padding: 0.325rem 0 0 0.325rem;
  @media (max-width: 667px) {
    padding-top: 0.5rem;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #003893;
  font-size: 26px;
  font-weight: 600px;
  text-shadow: none;
  background-image: none;
  :hover {
    text-decoration: underline;
    color: #dc143c;
  }
  @media (max-width: 320px) {
    font-size: 24px;
  }
`;

const Thought = styled.div`
  font-size: 20px;
  font-weight: 500;
  line-height: 20px;

  @media (max-width: 667px) {
    font-size: 16px;
    font-weight: 400;
  }
  @media (max-width: 320px) {
    font-size: 14px;
    font-weight: 400;
  }
`;
const Logo = () => {
  const { childImageSharp } = useImageFluid();
  return (
    <React.Fragment>
      <LogoWrap as={Link} to='/'>
        {/* <Img
          css={css`
            border-radius: 64px;
          `}
          fluid={childImageSharp?.fluid}
          alt='logo'
        /> */}
      </LogoWrap>
      <NameAndThoughtWrap>
        <StyledLink to='/'>Ramesh Kunwar</StyledLink>
        <Thought>To teach is to learn twice</Thought>
      </NameAndThoughtWrap>
    </React.Fragment>
  );
};

export default Logo;
