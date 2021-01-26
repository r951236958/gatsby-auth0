import { useAuth0 } from "@auth0/auth0-react"
import CircularProgress from "@material-ui/core/CircularProgress"
import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Container from "./Container"
import Footer from "./Footer"

import TopBar from "./TopBar"
import Title from "./Title"

const Layout = ({ title, children }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  const Header = () => {
    return (
      <>
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight text-gray-900">
              {title}
            </h1>
          </div>
        </header>
      </>
    )
  }

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
        <TopBar
          menuLinks={data.site.siteMetadata.menuLinks}
          siteTitle={data.site.siteMetadata.title}
        />
        <Header />
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
  title: PropTypes.string,
}

Layout.defaultProps = {
  title: `Gatsby + Auth0`,
}

export default Layout
