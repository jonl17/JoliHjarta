import React from "react"
import { List, Item, Text } from "./Styled"
import { graphql, StaticQuery } from "gatsby"
import { connect } from "react-redux"

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

const SubMenuItems = ({ platform }) => {
  return <List platform={platform}>{GetSubMenu()}</List>
}

const mapStateToProps = state => ({
  platform: state.reducer.platform,
})

export default connect(mapStateToProps)(SubMenuItems)
