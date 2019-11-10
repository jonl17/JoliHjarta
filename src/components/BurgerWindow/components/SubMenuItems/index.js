import React from "react"
import { List, Item, Text } from "./Styled"
import { graphql, StaticQuery } from "gatsby"

const GetSubMenu = () => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            subMenuItems
          }
        }
      }
    `}
    render={data =>
      data.site.siteMetadata.subMenuItems.map((item, index) => (
        <Item key={index}>
          <Text>{item}</Text>
        </Item>
      ))
    }
  ></StaticQuery>
)

const SubMenuItems = () => {
  return <List>{GetSubMenu()}</List>
}

export default SubMenuItems
