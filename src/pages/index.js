import React from "react"
import { Link } from "gatsby"
// import { Button } from "@react-md/button"
import Layout from "../components/Layout"
import Title from "../components/Title"
import P from "../components/P"
// import Btn from "../components/Btn"
import SEO from "../components/SEO"
import styled from "styled-components"
// import { useAuth0 } from "@auth0/auth0-react"

// import styles from "../styles/Custom.module.scss"

const StyledLink = styled(Link)`
  font-weight: 500;
  border: 0;
  border-bottom: 0.125rem solid #fff;
  color: white;
  margin: auto;
  text-decoration: none;
  &:hover {
    border-image: linear-gradient(to right, #663399, #eb5424);
    border-image-slice: 1;
  }
`
export default function Home() {
  const siteTitle = "Gatsby + AUTH0"

  return (
    <Layout title={siteTitle}>
      <SEO title="Home" />
      <Title margin="0 0 2.5rem">gatbsy-theme-auth0</Title>
      <P>Hello world!</P>
      <div className="my-auto">
        <Link to="/account/profile/">Profile</Link>
        <StyledLink href to="/account/profile/">
          Profile
        </StyledLink>
      </div>
    </Layout>
  )
}
