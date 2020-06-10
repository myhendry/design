import React from "react"
import styled from "styled-components"

export const Footer = () => (
  <Foot>
    <span> {`© ${new Date().getFullYear()}   `} </span>
    <a href="https://github.com/myhendry">HL</a>
  </Foot>
)

const Foot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
