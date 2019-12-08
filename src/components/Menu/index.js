import React from "react"
import { Navbar, ClickZone } from "./Styled"
import { graphql, StaticQuery } from "gatsby"
import Item from "./components/Item"
import { useSelector, useDispatch } from "react-redux"
import { triggerBurgerWindow } from "../../state/action"

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
      data.site.siteMetadata.menuItems.map((item, index) => (
        <Item
          nohover={
            index === data.site.siteMetadata.menuItems.length - 1 || index === 0
              ? "true"
              : "false"
          }
          key={index}
          nafn={item.name}
          type={item.type}
          slug={item.to}
        ></Item>
      ))
    }
  ></StaticQuery>
)

const Menu = () => {
  const burgerWindow = useSelector(state => state.reducer.burgerWindow)
  const platform = useSelector(state => state.reducer.platform)
  const dispatch = useDispatch()
  return (
    <>
      <ClickZone
        display={burgerWindow === "open" ? "block" : "none"}
        onClick={() => dispatch(triggerBurgerWindow("closed"))}
      ></ClickZone>
      <Navbar platform={platform} display={burgerWindow}>
        {spitOutMenuItems()}
      </Navbar>
    </>
  )
}

export default Menu
