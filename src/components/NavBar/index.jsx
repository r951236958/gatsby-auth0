import { useAuth0 } from "@auth0/auth0-react"
import { Transition } from "@headlessui/react"
import {
  Menu,

  MenuButton,

  MenuLink, MenuList
} from "@reach/menu-button"
import { AppBar, AppBarAction, AppBarNav, AppBarTitle } from "@react-md/app-bar"
import { FontIcon } from "@react-md/icon"
import { List, ListItem } from "@react-md/list"
import { Sheet } from "@react-md/sheet"
import { useToggle } from "@react-md/utils"
import { Link } from "gatsby"
import React, { useState } from "react"
import GatsbyIcon from "../../images/GatsbyIcon.svg"

// import Btn from "./Btn"

// const MenuItemLink = props => <ReactLink component={ReactRouterLink} {...props} />

const NavBar = ({ siteTitle }) => {
  const { isLoading, isAuthenticated, loginWithRedirect, logout } = useAuth0()
  // const [menuOpen, setMenuOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [visible, show, hide] = useToggle(false)

  if (isLoading) {
    return <div>Loading ...</div>
  }

  return (
    <>
      <AppBar theme="primary">
        <AppBarNav aria-label="Navigation" onClick={show}>
          <FontIcon>menu</FontIcon>
        </AppBarNav>
        <AppBarTitle className="rmd-typography--capitalize">
          <Link
            to="/"
            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
          >
            <img className="h-8 w-8" src={GatsbyIcon} alt="Gatsby" />
          </Link>
        </AppBarTitle>
        {!isAuthenticated ? (
          <AppBarAction
            first
            aria-label="user-login"
            onClick={() => loginWithRedirect({})}
          >
            <svg
              aria-label="sign-in"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="h-6 w-6"
            >
              <path d="M32 217.1c0-8.8 7.2-16 16-16h144v-93.9c0-7.1 8.6-10.7 13.6-5.7l141.6 143.1c6.3 6.3 6.3 16.4 0 22.7L205.6 410.4c-5 5-13.6 1.5-13.6-5.7v-93.9H48c-8.8 0-16-7.2-16-16v-77.7m-32 0v77.7c0 26.5 21.5 48 48 48h112v61.9c0 35.5 43 53.5 68.2 28.3l141.7-143c18.8-18.8 18.8-49.2 0-68L228.2 78.9c-25.1-25.1-68.2-7.3-68.2 28.3v61.9H48c-26.5 0-48 21.6-48 48zM512 400V112c0-26.5-21.5-48-48-48H332c-6.6 0-12 5.4-12 12v8c0 6.6 5.4 12 12 12h132c8.8 0 16 7.2 16 16v288c0 8.8-7.2 16-16 16H332c-6.6 0-12 5.4-12 12v8c0 6.6 5.4 12 12 12h132c26.5 0 48-21.5 48-48z" />
            </svg>
          </AppBarAction>
        ) : (
          <>
            <AppBarAction
              first
              aria-label="user-profile"
              onClick={() => setIsOpen(!isOpen)}
              className="p-1 rounded-full text-gray-400 hover:text-white focus:outline-none"
              id="user-menu"
              aria-haspopup="true"
            >
              <span className="sr-only">Open user menu</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" />
              </svg>
            </AppBarAction>
            <div className="relative">
              <Transition
                show={isOpen}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <div
                  className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu"
                >
                  <Link
                    to="/"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Home
                  </Link>
                  <Link
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    to="/about/"
                  >
                    About
                  </Link>

                  <Link
                    to="/page-2/"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Page2
                  </Link>
                  <Link
                    to="/links/"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Links
                  </Link>
                  <a
                    href="#logout"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                    onClick={() => logout()}
                  >
                    Sign out
                  </a>
                </div>
              </Transition>
            </div>

            <AppBarAction
              last
              aria-label="user-sign-out"
              onClick={() => logout()}
            >
              <svg
                className="w-6 h-6"
                aria-label="sign-out"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M160 217.1c0-8.8 7.2-16 16-16h144v-93.9c0-7.1 8.6-10.7 13.6-5.7l141.6 143.1c6.3 6.3 6.3 16.4 0 22.7L333.6 410.4c-5 5-13.6 1.5-13.6-5.7v-93.9H176c-8.8 0-16-7.2-16-16v-77.7m-32 0v77.7c0 26.5 21.5 48 48 48h112v61.9c0 35.5 43 53.5 68.2 28.3l141.7-143c18.8-18.8 18.8-49.2 0-68L356.2 78.9c-25.1-25.1-68.2-7.3-68.2 28.3v61.9H176c-26.5 0-48 21.6-48 48zM0 112v288c0 26.5 21.5 48 48 48h132c6.6 0 12-5.4 12-12v-8c0-6.6-5.4-12-12-12H48c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16h132c6.6 0 12-5.4 12-12v-8c0-6.6-5.4-12-12-12H48C21.5 64 0 85.5 0 112z" />
              </svg>
            </AppBarAction>
          </>
        )}
        <Menu>
        
          <MenuButton>
            <FontIcon>more_vert</FontIcon>
          </MenuButton>
          <MenuList className="slide-down block text-gray-700">
            <MenuLink as={Link} to="/" className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
              Home
            </MenuLink>
            <MenuLink as={Link} to="/about/" className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
              About
            </MenuLink>
            <MenuLink as={Link} to="/page-2/" className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
              Page2
            </MenuLink>
            <MenuLink as={Link} to="/links/" className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
              Links
            </MenuLink>
            <MenuLink as={Link} to="/account/profile/" className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
              Profile
            </MenuLink>
          </MenuList>
        
        </Menu>
      </AppBar>
      <Sheet
        horizontalSizes="media"
        id="example-sheet-1"
        aria-label="Example Sheet"
        visible={visible}
        onRequestClose={hide}
        position="left"
      >
        <List onClick={hide}>
          <ListItem id="example-sheet-item-1">
            <Link to="/">Home</Link>
          </ListItem>
          <ListItem id="example-sheet-item-2">
            <Link to="/about/">About</Link>
          </ListItem>
          <ListItem id="example-sheet-item-3">
            <Link to="/page-2/">Page2</Link>
          </ListItem>
          <ListItem id="sheet-item-link">
            <Link to="/links/">Links</Link>
          </ListItem>
          <ListItem id="example-sheet-item-4">
            <Link to="/using-typescript/">TypeScript</Link>
          </ListItem>
          <ListItem id="sheet-item-profile">
            <Link to="/account/profile">Profile</Link>
          </ListItem>
          {isAuthenticated && (
            <>
              <ListItem id="sheet-item-sign-out">
                <button onClick={() => logout()}>Sign Out</button>
              </ListItem>
            </>
          )}
        </List>
      </Sheet>
    </>
  )
}

export default NavBar
