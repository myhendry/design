import React, { ReactNode } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Header } from "./header"
import { Footer } from "./footer"
import { createGlobalStyle, ThemeProvider } from "styled-components"
//import dark from "../../theme/dark"
import light from "../../theme/light"
import { Container } from "./container"
import "semantic-ui-less/semantic.less"

interface LayoutProps {
  children: ReactNode
}

const GlobalStyle = createGlobalStyle`
  :root {
    --dark: #333;
    --light: #fff;
    --ultra: #f8f8f8;
    --bilboard: #330000;
    --shadow: 0 1px 5px rgba(104, 104, 104, 0.8);
  }
*, *::after, *::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
html {
  font-size: 62.5%;
}
body {
  /* background-color:${p => p.theme.secondary} ;
  color: ${p => p.theme.primaryTextColor}; */
  background-color: #fff ;
  color: #333;
  font-family: Roboto, Lato;
  box-sizing: border-box;
  line-height: 1.7;
  /* padding: 2rem; */
}
`

export const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <ThemeProvider theme={light}>
        <GlobalStyle />
        <Header siteTitle={data.site.siteMetadata.title} />
        <Container>
          <main>{children}</main>
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  )
}
