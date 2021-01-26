import { useAuth0 } from "@auth0/auth0-react"
import CircularProgress from "@material-ui/core/CircularProgress"
import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Container from "./Container"
import Footer from "./Footer"
import Nav from "./Nav"
import Title from "./Title"



const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { isLoading } = useAuth0()

  if (isLoading) {
    return (
      <Container textAlign="center">
        <div className="h-screen flex flex-col items-center content-center">
          <div className="my-auto">
            <Title>loading...</Title>

            <CircularProgress color="secondary" />
          </div>
        </div>
      </Container>
    )
  }

  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100">
        <Nav siteTitle={data.site.siteMetadata.title} />
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <Container className="min-h-screen" textAlign="center">
                {children}
              </Container>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
