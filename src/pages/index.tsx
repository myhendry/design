import React from "react"
// import { graphql, useStaticQuery } from "gatsby"
import { Layout, SEO } from "../components/common"
import { Introduction } from "../modules/Introduction"
import { LottieControl } from "../modules/Lottie"
import { Button, Input, Header } from "semantic-ui-react"

const IndexPage = () => {
  // const data = useStaticQuery(graphql`
  //   query MyQuery {
  //     file(relativePath: { eq: "bubbles.jpg" }) {
  //       childImageSharp {
  //         fluid(quality: 90, maxWidth: 1920) {
  //           ...GatsbyImageSharpFluid_withWebp
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <Layout>
      <SEO title="Home" />
      <Header
        as="h2"
        content="Account Settings"
        subheader="Manage your account settings and set email preferences"
      />
      <Input placeholder="Enter" />
      <Button primary>Submit</Button>
      <LottieControl />
      <Introduction />
      <Introduction />
      <Introduction />
    </Layout>
  )
}

export default IndexPage
