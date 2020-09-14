import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const NavItem = styled(Link)`
  text-decoration: none;
  color: #003893;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;
  text-shadow: unset !important;
  background-image: unset !important;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: #dc143c;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: #dc143c;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`
const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/about">About</NavItem>
      <NavItem to="/allposts">All posts</NavItem>
      <NavItem to="/contact">Contact</NavItem>
    </>
  )
}

export default NavbarLinks
