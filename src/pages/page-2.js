import React from "react"
import { Link } from "gatsby"

import Title from "../components/Title"
import P from "../components/P"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const SecondPage = () => {
  const siteTitle = "The Second Page"

  return (
    <Layout title={siteTitle}>
      <SEO title="Page two" />
      <Title>Hi from the second page</Title>
      <P>Welcome to page 2</P>
      <Link
        className="text-blue-500 bg-transparent border border-solid border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-600 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1"
        to="/"
      >
        Go back to the homepage
      </Link>
    </Layout>
  )
}
export default SecondPage
