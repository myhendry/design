import React from "react"

import { Navbar } from "./navbar"
import styled from "styled-components"

interface HeaderProps {
  siteTitle?: string
}

export const Header: React.FC<HeaderProps> = () => (
  <Head>
    <Navbar />
    {/* <h1>{siteTitle}</h1> */}
  </Head>
)

const Head = styled.div`
  display: flex;
  padding: 0.5rem;
`
