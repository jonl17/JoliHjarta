import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { List, Item, Wrap, WrapNav, ItemNav } from "./Styled"
import { connect } from "react-redux"
import {
  triggerBurgerWindow,
  selectCalenderDay,
} from "../../../../state/action"

const dispatches = (dispatch, today) => {
  dispatch(triggerBurgerWindow("closed"))
  dispatch(selectCalenderDay(today))
}

const GetMenuItems = (dispatch, today, device, nav) => (
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
          <Wrap key={index} device={device}>
            <Item
              onClick={() => dispatches(dispatch, today)}
              to={"/" + today + "desember"}
            >
              {item}{" "}
            </Item>
          </Wrap>
        ) : (
          <>
            <WrapNav key={index}>
              <Item
                nav
                onClick={() => dispatches(dispatch, today)}
                to={"/" + today + "desember"}
              >
                {item}{" "}
              </Item>
            </WrapNav>
            <WrapNav key={index + "nav"}>
              <ItemNav
                nav
                target="_blank"
                href={"mailto:jolihjartarvk@gmail.com"}
              >
                jolihjartarvk@gmail.com
              </ItemNav>
            </WrapNav>
          </>
        )
      )
    }
  ></StaticQuery>
)

const MenuItems = ({ dispatch, todaysCalenderDay, platform, nav }) => {
  return (
    <List nav platform={platform}>
      {GetMenuItems(dispatch, todaysCalenderDay, platform, nav)}
    </List>
  )
}

const mapStateToProps = state => ({
  platform: state.reducer.platform,
  todaysCalenderDay: state.reducer.todaysCalenderDay,
})

export default connect(mapStateToProps)(MenuItems)
