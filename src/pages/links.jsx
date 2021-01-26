import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import LinkList from "../components/LinkList"
import P from "../components/P"
import SEO from "../components/SEO"
import Title from "../components/Title"

export default function Links({ data }) {
  return (
    <Layout>
      <SEO title="Links" />
      <Title margin="0 0 2.5rem">My Links</Title>
      <P>{data.site.siteMetadata.title}</P>
      <div className="max-w-48">
        <LinkList />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
