import { Divider } from "@react-md/divider"
import { List, ListItem } from "@react-md/list"
import { MenuItemLink } from "@react-md/menu"
import { Link as RouterLink } from "gatsby"
import React from "react"
import myList from "./myList"


const LinkList = () => {
  const MenuLink = props => <MenuItemLink {...props} component={RouterLink} />
  return (
    <>
      <List>
        {myList.map(({ name, link, icon }) => (
          <ListItem id={name} key={name} leftAddon={icon}>
            <MenuLink to={link} target="_blank">
              {name}
            </MenuLink>
            <Divider />
          </ListItem>
        ))}
      </List>
    </>
  )
}
export default LinkList
