import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { List, Item, Wrap, ItemNav } from "./Styled"
import { connect } from "react-redux"
import {
  triggerBurgerWindow,
  selectCalenderDay,
} from "../../../../state/action"

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
    render={data =>
      data.site.siteMetadata.menuItems.map((item, index) =>
        !nav ? (
          <List key={index} nav={"true"} platform={platform}>
            <Wrap>
              <Item
                onClick={() => dispatches(dispatch, today)}
                to={"/" + today + "desember"}
              >
                {item}
              </Item>
            </Wrap>
          </List>
        ) : (
          <List key={index + "nav"} nav={"true"} platform={platform}>
            <Item
              nav={"true"}
              onClick={() => dispatches(dispatch, today)}
              to={"/" + today + "desember"}
            >
              {item}
            </Item>
            <ItemNav
              nav={"true"}
              target="_blank"
              href={"mailto:jolihjartarvk@gmail.com"}
            >
              jolihjartarvk@gmail.com
            </ItemNav>
          </List>
        )
      )
    }
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
