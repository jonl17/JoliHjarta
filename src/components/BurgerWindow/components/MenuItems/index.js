import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { List, Item, Wrap } from "./Styled"
import { connect } from "react-redux"
import {
  triggerBurgerWindow,
  selectCalenderDay,
} from "../../../../state/action"

const dispatches = (dispatch, today) => {
  dispatch(triggerBurgerWindow("closed"))
  dispatch(selectCalenderDay(today))
}

const GetMenuItems = (dispatch, today, device) => (
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
    render={data =>
      data.site.siteMetadata.menuItems.map((item, index) => (
        <Wrap key={index} device={device}>
          <Item
            onClick={() => dispatches(dispatch, today)}
            to={"/" + today + "desember"}
          >
            {item}{" "}
          </Item>
        </Wrap>
      ))
    }
  ></StaticQuery>
)

const MenuItems = ({ dispatch, todaysCalenderDay, platform }) => {
  return (
    <List platform={platform}>
      {GetMenuItems(dispatch, todaysCalenderDay, platform)}
    </List>
  )
}

const mapStateToProps = state => ({
  platform: state.reducer.platform,
  todaysCalenderDay: state.reducer.todaysCalenderDay,
})

export default connect(mapStateToProps)(MenuItems)
