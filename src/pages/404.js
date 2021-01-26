import React from "react"
import Container from "../components/Container"
import Layout from "../components/Layout"
import P from "../components/P"
import SEO from "../components/SEO"
import Title from "../components/Title"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container textAlign="center">
      <div className="h-screen flex flex-col items-center content-center">
        <div className="my-auto">
          <Title margin="0 0 2.5rem">404: Not Found</Title>
          <P>You just hit a route that doesn&#39;t exist... the sadness.</P>
        </div>
      </div>
    </Container>
  </Layout>
)

export default NotFoundPage
