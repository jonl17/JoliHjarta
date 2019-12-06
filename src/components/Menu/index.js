import React from "react"
import { Navbar } from "./Styled"
import { graphql, StaticQuery } from "gatsby"
import Item from "./components/Item"
import Burger from "../Burger"

const spitOutMenuItems = () => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            menuItems {
              name
              type
              to
            }
          }
        }
      }
    `}
    render={data =>
      data.site.siteMetadata.menuItems.map(item =>
        item.type !== `burg` ? (
          <Item nafn={item.name}></Item>
        ) : (
          <Burger></Burger>
        )
      )
    }
  ></StaticQuery>
)

const Menu = () => {
  return <Navbar>{spitOutMenuItems()}</Navbar>
}

export default Menu
