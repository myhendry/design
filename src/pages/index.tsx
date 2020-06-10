import React from "react"
import { Input, Header } from "semantic-ui-react"
import { Button } from "../components/common"
import { Layout, SEO } from "../components/common"
import { Introduction } from "../modules/Introduction"
import { LottieControl } from "../modules/Lottie"

//* using css helper for bulk styles
//* conditional styles based on plots

const IndexPage = () => {
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
      <Button secondary>Submit</Button>
      <Button disabled>Submit</Button>
      <Button large>Submit</Button>
      <Button>Submit</Button>
      <LottieControl />
      <Introduction />
      <Introduction />
      <Introduction />
    </Layout>
  )
}

export default IndexPage
