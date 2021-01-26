import { Button } from "@react-md/button"
import { FontIcon, TextIconSpacing } from "@react-md/icon"
import { Divider } from "@react-md/divider"
import { List, ListItem, ListSubheader } from "@react-md/list"
import { Avatar } from "@react-md/avatar"
import { MenuItemLink } from "@react-md/menu"
import { Link as RouterLink } from "gatsby"
import {
  ChatSVGIcon,
  DeleteSVGIcon,
  DoneSVGIcon,
  FavoriteSVGIcon,
  SaveSVGIcon,
} from "@react-md/material-icons"
import { graphql } from "gatsby"
import React from "react"
import CTABlock from "../components/CTABlock"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const MenuLink = props => <MenuItemLink {...props} component={RouterLink} />

export default function About({ data }) {
  const siteTitle = "About Page"

  return (
    <Layout title={siteTitle}>
      <SEO title="About" />
      <h2>About {data.site.siteMetadata.title}</h2>
      <div className="text-green-500">
        <p>Such wow. Very React.</p>
      </div>
      <CTABlock />
      <div>
        <List>
          <ListItem id="item-1">Item 1</ListItem>

          <MenuLink to="/">Home</MenuLink>

          <ListItem id="item-3" disabled>
            Item 3 Disabled
          </ListItem>
          <Divider />
          <ListSubheader>Sub actions</ListSubheader>
          <ListItem id="item-4" leftAddon={<FontIcon>close</FontIcon>}>
            Close
          </ListItem>
          <ListItem
            id="item-5"
            leftAddon={
              <Avatar
                src="https://picsum.photos/40?random"
                alt="A random image from https://picsum.photos"
              />
            }
            leftAddonType="avatar"
          >
            With Avatar
          </ListItem>
        </List>
      </div>
      <div className="mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
        <div
          className="py-1"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <a
            href="/"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            role="menuitem"
          >
            Account settings
          </a>
          <a
            href="/"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            role="menuitem"
          >
            Support
          </a>
          <a
            href="/"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            role="menuitem"
          >
            License
          </a>
          <form method="POST" action="#">
            <button
              type="submit"
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
              role="menuitem"
            >
              Sign out
            </button>
          </form>
        </div>
      </div>

      <div className="mt-10 space-x-2">
        <Button id="outline-button-1" theme="primary" themeType="outline">
          primary
        </Button>
        <Button id="outline-button-2" theme="secondary" themeType="outline">
          secondary
        </Button>
        <Button id="outline-button-3" theme="warning" themeType="outline">
          warning
        </Button>
        <Button id="outline-button-4" theme="error" themeType="outline">
          error
        </Button>
        <Button id="outline-button-5" theme="clear" themeType="outline">
          clear
        </Button>
        <Button id="outline-button-6" themeType="outline" disabled>
          disabled
        </Button>
      </div>
      <div className="mt-5 space-x-2">
        <Button
          id="icon-button-1"
          buttonType="icon"
          theme="primary"
          aria-label="Favorite"
        >
          <FontIcon>favorite</FontIcon>
        </Button>
        <Button
          id="icon-button-2"
          buttonType="icon"
          theme="secondary"
          aria-label="Favorite"
        >
          <FavoriteSVGIcon />
        </Button>
        <Button
          id="icon-button-3"
          buttonType="icon"
          theme="warning"
          aria-label="Move to Trash"
        >
          <DeleteSVGIcon />
        </Button>
        <Button
          id="icon-button-4"
          buttonType="icon"
          theme="error"
          aria-label="Permanently Delete"
        >
          <DeleteSVGIcon />
        </Button>
        <Button
          id="icon-button-5"
          buttonType="icon"
          theme="clear"
          aria-label="Add"
        >
          <FontIcon>add</FontIcon>
        </Button>
        <Button
          id="icon-button-6"
          buttonType="icon"
          disabled
          aria-label="Disabled Add Button"
        >
          <FontIcon>add</FontIcon>
        </Button>
        <Button
          id="icon-button-7"
          buttonType="icon"
          theme="primary"
          themeType="outline"
          aria-label="Favorite"
        >
          <FontIcon>favorite</FontIcon>
        </Button>
        <Button
          id="icon-button-8"
          buttonType="icon"
          theme="secondary"
          themeType="outline"
          aria-label="Favorite"
        >
          <FavoriteSVGIcon />
        </Button>
        <Button
          id="icon-button-9"
          buttonType="icon"
          theme="warning"
          themeType="contained"
          aria-label="Move to Trash"
        >
          <DeleteSVGIcon />
        </Button>
        <Button
          id="icon-button-10"
          buttonType="icon"
          theme="error"
          themeType="contained"
          aria-label="Permanently Delete"
        >
          <DeleteSVGIcon />
        </Button>
        <Button
          id="icon-button-11"
          buttonType="icon"
          theme="clear"
          themeType="outline"
          aria-label="Add"
        >
          <FontIcon>add</FontIcon>
        </Button>
        <Button
          id="icon-button-12"
          buttonType="icon"
          disabled
          aria-label="Disabled Add Button"
          themeType="outline"
        >
          <FontIcon>add</FontIcon>
        </Button>
      </div>
      <div className="mt-5 space-x-2">
        <Button id="combined-button-1">
          <TextIconSpacing icon={<FontIcon>favorite</FontIcon>}>
            Favorite
          </TextIconSpacing>
        </Button>
        <Button id="combined-button-2" theme="secondary" themeType="outline">
          <TextIconSpacing icon={<ChatSVGIcon />} iconAfter>
            Messages
          </TextIconSpacing>
        </Button>
        <Button id="combined-button-3" theme="warning" themeType="contained">
          <TextIconSpacing icon={<DoneSVGIcon />}>Done</TextIconSpacing>
        </Button>
        <Button id="combined-button-4" theme="error" themeType="contained">
          <TextIconSpacing icon={<DoneSVGIcon />}>
            <TextIconSpacing icon={<DeleteSVGIcon />} iconAfter>
              Delete Forever
            </TextIconSpacing>
          </TextIconSpacing>
        </Button>
        <Button id="combined-button-5" theme="clear" themeType="outline">
          <TextIconSpacing icon={<SaveSVGIcon />}>Save</TextIconSpacing>
        </Button>
        <Button
          id="combined-button-6"
          theme="error"
          themeType="outline"
          disabled
        >
          <TextIconSpacing icon={<SaveSVGIcon />}>Save</TextIconSpacing>
        </Button>
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
