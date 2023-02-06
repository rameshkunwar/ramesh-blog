import React, { useState } from "react";
import styled from "styled-components";
import NavbarLinks from "./navbarlinks";
import Logo from "./logo";

const Navigation = styled.nav`
  height: 5rem;
  display: flex;
  background-color: #fff;
  position: relative;
  justify-content: space-between;
  text-transform: uppercase;
  margin: 0 auto;
  padding: 0 2rem;
  z-index: 2;
  align-self: center;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 0%), 0 5px 15px -5px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    position: sticky;
    // height: 9vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
  @media (max-width: 667px) {
    position: sticky;
    // height: 11vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
    padding: 0 0.5rem;
  }
  @media (max-width: 320px) {
    position: sticky;
    // height: 12vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`;

const Toggle = styled.div<Toggle>`
  display: none;
  height: 100%;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Navbox = styled.div<Navbox>`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: #fff;
    transition: all 0.3s ease-in;
    top: 10vh;
    left: ${(props) => (props.open ? "-100%" : "0")};
  }
  @media (max-width: 320px) {
    top: 12vh;
  }
`;

const Hamburger = styled.div<Hamburger>`
  background-color: #111;
  width: 30px;
  height: 3px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${(props) => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #111;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${(props) =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${(props) => (props.open ? "0" : "1")};
    transform: ${(props) => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`;
interface Hamburger {
  open?: boolean;
}
interface Navbox {
  open?: boolean;
}
interface Toggle {
  navbarOpen?: boolean;
}
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <Navigation>
      {/* <Logo /> */}
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox>
          <NavbarLinks />
        </Navbox>
      ) : (
        <Navbox open>
          <NavbarLinks />
        </Navbox>
      )}
    </Navigation>
  );
};

export default Navbar;
