import React, { useEffect } from "react"
import { useAuth0 } from "@auth0/auth0-react"

const PrivateRoute = ({ component: Component, path, ...rest }) => {
  const { isLoading, isAuthenticated, loginWithRedirect } = useAuth0()

  useEffect(() => {
    if (isLoading || isAuthenticated) {
      return
    }
    const fn = async () => {
      await loginWithRedirect({
        appState: { targetUrl: window.location.pathname },
      })
    }
    fn()
  }, [isLoading, isAuthenticated, loginWithRedirect, path])

  return isAuthenticated === true ? <Component {...rest} /> : null
}

export default PrivateRoute
