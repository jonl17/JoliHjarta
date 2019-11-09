import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { List, Item, Text } from "./Styled"
import { connect } from "react-redux"
import {
  triggerBurgerWindow,
  selectCalenderDay,
} from "../../../../state/action"

const dispatches = (dispatch, today) => {
  dispatch(triggerBurgerWindow("closed"))
  dispatch(selectCalenderDay(today))
}

const GetMenuItems = (dispatch, today) => (
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
        <Item
          key={index}
          onClick={() => dispatches(dispatch, today)}
          to={"/" + today + "desember"}
        >
          <Text>{item}</Text>
        </Item>
      ))
    }
  ></StaticQuery>
)

const MenuItems = ({ dispatch, todaysCalenderDay }) => {
  return <List>{GetMenuItems(dispatch, todaysCalenderDay)}</List>
}

const mapStateToProps = state => ({
  todaysCalenderDay: state.reducer.todaysCalenderDay,
})

export default connect(mapStateToProps)(MenuItems)
