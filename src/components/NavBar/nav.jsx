import React from "react"
import { Link } from "gatsby"
// import { Link as ReactRouterLink } from "gatsby"
// import { Link as ReactMDLink } from "@react-md/link"
import { FontIcon } from "@react-md/icon"
import { useAuth0 } from "../services/auth"

//import Btn from "./Btn"

// const Link = props => <ReactMDLink component={ReactRouterLink} {...props} />

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0()
  const [menuOpen, setMenuOpen] = React.useState(false)
  return (
    <>
      <div className="w-full">
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-gray-900 rounded">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
              <div className="flex">
                <Link
                  to="/"
                  className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
                >
                  Home
                </Link>
              </div>
              <button
                className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <FontIcon>menu</FontIcon>
              </button>
            </div>
            <div
              className={
                "lg:flex flex-grow items-center" +
                (menuOpen ? " flex" : " hidden")
              }
              id="example-navbar-info"
            >
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto space-x-2">
                <li className="nav-item flex">
                  {isAuthenticated && (
                    <Link
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      to="/account/profile"
                    >
                      Profile
                    </Link>
                  )}
                </li>
                <li className="nav-item flex">
                  <Link
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    to="/"
                  >
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item flex">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#pablo"
                  >
                    Settings
                  </a>
                </li>
                <li className="nav-item flex">
                  {!isAuthenticated && (
                    <button onClick={() => loginWithRedirect({})}>
                      <svg
                        aria-label="sign-in"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="h-6 w-6"
                      >
                        <path d="M32 217.1c0-8.8 7.2-16 16-16h144v-93.9c0-7.1 8.6-10.7 13.6-5.7l141.6 143.1c6.3 6.3 6.3 16.4 0 22.7L205.6 410.4c-5 5-13.6 1.5-13.6-5.7v-93.9H48c-8.8 0-16-7.2-16-16v-77.7m-32 0v77.7c0 26.5 21.5 48 48 48h112v61.9c0 35.5 43 53.5 68.2 28.3l141.7-143c18.8-18.8 18.8-49.2 0-68L228.2 78.9c-25.1-25.1-68.2-7.3-68.2 28.3v61.9H48c-26.5 0-48 21.6-48 48zM512 400V112c0-26.5-21.5-48-48-48H332c-6.6 0-12 5.4-12 12v8c0 6.6 5.4 12 12 12h132c8.8 0 16 7.2 16 16v288c0 8.8-7.2 16-16 16H332c-6.6 0-12 5.4-12 12v8c0 6.6 5.4 12 12 12h132c26.5 0 48-21.5 48-48z" />
                      </svg>
                    </button>
                  )}
                  {isAuthenticated && (
                    <button onClick={() => logout()}>
                      <svg
                        className="w-6 h-6"
                        aria-label="sign-out"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M32 217.1c0-8.8 7.2-16 16-16h144v-93.9c0-7.1 8.6-10.7 13.6-5.7l141.6 143.1c6.3 6.3 6.3 16.4 0 22.7L205.6 410.4c-5 5-13.6 1.5-13.6-5.7v-93.9H48c-8.8 0-16-7.2-16-16v-77.7m-32 0v77.7c0 26.5 21.5 48 48 48h112v61.9c0 35.5 43 53.5 68.2 28.3l141.7-143c18.8-18.8 18.8-49.2 0-68L228.2 78.9c-25.1-25.1-68.2-7.3-68.2 28.3v61.9H48c-26.5 0-48 21.6-48 48zM512 400V112c0-26.5-21.5-48-48-48H332c-6.6 0-12 5.4-12 12v8c0 6.6 5.4 12 12 12h132c8.8 0 16 7.2 16 16v288c0 8.8-7.2 16-16 16H332c-6.6 0-12 5.4-12 12v8c0 6.6 5.4 12 12 12h132c26.5 0 48-21.5 48-48z" />
                      </svg>
                    </button>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default NavBar
