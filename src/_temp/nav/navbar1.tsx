import React from "react"
import styled from "styled-components"
import { RightNav } from "./right-nav"
import { Burger } from "./burger"

interface NavbarProps {}

export const Navbar1: React.FC<NavbarProps> = () => {
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
  height: 60px;
  border-bottom: 2px solid #000;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;

  }
`
