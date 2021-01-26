import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/Layout"
import Profile from "../components/Profile"
import User from "../components/User"
import PrivateRoute from "../components/PrivateRoute"

const Account = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/account/profile" component={Profile} />
      <PrivateRoute path="/account/user" component={User} />
    </Router>
  </Layout>
)

export default Account
