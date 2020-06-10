import React from "react"
import styled from "styled-components"

interface RightNavProps {
  open: bool
}

export const RightNav: React.FC<RightNavProps> = ({ open }: RightNavProps) => {
  return (
    <UL open={open}>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
    </UL>
  )
}

const UL = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #808080;
    position: fixed;
    top: 0;
    right: 0;
    transform: ${({ open }: any) =>
      open ? "translateX(0)" : "translateX(100%)"};
    height: 100vh;
    width: 200px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
`
