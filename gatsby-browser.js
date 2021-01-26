import "./src/styles/global.scss"
// import "./src/styles/global.css"
import "./static/dist/tailwind.css"

import React from "react"
import { Location } from "@reach/router"
import { Auth0Provider } from "@auth0/auth0-react"

export const wrapRootElement = ({ element }) => {
  return (
    <Location>
      {location => (
        <Auth0Provider
          domain={process.env.AUTH0_DOMAIN}
          clientId={process.env.AUTH0_CLIENT_ID}
          redirectUri={window.location.origin}
        >
          {element}
        </Auth0Provider>
      )}
    </Location>
  )
}
