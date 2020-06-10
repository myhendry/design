/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { useState } from "react"
import styled from "styled-components"
import { AnchorLink } from "gatsby-plugin-anchor-links"

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = () => {
  return (
    <Nav>
      <Circle>
        <StyledText>H</StyledText>
      </Circle>
      <Burger />
    </Nav>
  )
}

const StyledText = styled.h1`
  font-size: 1.2rem;
  color: #fff;
  font-weight: bold;
`

const Circle = styled.div`
  margin-top: 5px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: rebeccapurple;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 1px lightgrey;
`

const Nav = styled.nav`
  width: 100%;
  height: 70px;
  padding: 0 20px;
  display: flex;
  align-self: flex-start;
  justify-content: space-between;
  /* border-bottom: 2px solid #000; */
`

interface BurgerProps {}

interface SBProps {
  open: boolean
  onClick: () => void
}

const Burger: React.FC<BurgerProps> = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} />
    </>
  )
}

const StyledBurger = styled.div<SBProps>`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#ccc" : "#333")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`
interface RightNavProps {
  open: boolean
}

interface RNProps {
  open: boolean
}

const RightNav: React.FC<RightNavProps> = ({ open }: RightNavProps) => {
  return (
    <UL open={open}>
      <XLink to="/#anchor-intro" title="Intro">
        <li>One</li>
      </XLink>
      <XLink to="/" title="Home">
        <li>Two</li>
      </XLink>
      <XLink to="/page-2" title="Page2">
        <li>Three</li>
      </XLink>
    </UL>
  )
}

const XLink = styled(AnchorLink)`
  text-decoration: none;
`

const UL = styled.ul<RNProps>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
    letter-spacing: 5px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #000;
    position: fixed;
    top: 0;
    right: 0;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    height: 100vh;
    width: 200px;
    padding-top: 2.5rem;
    padding-left: 1.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
`
