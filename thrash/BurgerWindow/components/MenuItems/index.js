import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { List, Item, Wrap, ItemNav } from "./Styled"
import { connect } from "react-redux"
import {
  triggerBurgerWindow,
  selectCalenderDay,
} from "../../../../src/state/action"

const dispatches = (dispatch, today) => {
  dispatch(triggerBurgerWindow("closed"))
  dispatch(selectCalenderDay(today))
}

const GetMenuItems = (dispatch, today, platform, nav) => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            menuItems
          }
        }
      }
    `}
    render={(data, index) => (
      <List key={index} platform={platform} nav={nav ? "true" : "false"}>
        <Wrap>
          <Item nav={nav ? "true" : "false"}>
            {data.site.siteMetadata.menuItems[0] /** um okkur */}
          </Item>
        </Wrap>
        <Wrap>
          <Item nav={nav ? "true" : "false"}>
            {data.site.siteMetadata.menuItems[1] /** hlekkir */}
          </Item>
        </Wrap>
        <Wrap>
          <Item nav={nav ? "true" : "false"}>
            {data.site.siteMetadata.menuItems[2] /** viðburðir */}
          </Item>
        </Wrap>
        <Wrap>
          <Item nav={nav ? "true" : "false"}>
            {data.site.siteMetadata.menuItems[3] /** jolihjartarvk@gmail.com */}
          </Item>
        </Wrap>
      </List>
    )}
  ></StaticQuery>
)

const MenuItems = ({ dispatch, todaysCalenderDay, platform, nav }) => {
  return GetMenuItems(dispatch, todaysCalenderDay, platform, nav)
}

const mapStateToProps = state => ({
  platform: state.reducer.platform,
  todaysCalenderDay: state.reducer.todaysCalenderDay,
})

export default connect(mapStateToProps)(MenuItems)
