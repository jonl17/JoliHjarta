import React from "react"
import { Container } from "./Styled"
import { graphql, StaticQuery } from "gatsby"
import { useSelector } from "react-redux"

/** components */
import Item from "./components/Item"

const MobileMenu = ({
  data: {
    site: {
      siteMetadata: { mobileMenuItems },
    },
  },
}) => {
  const burgerWindow = useSelector(state => state.reducer.burgerWindow)
  return (
    <Container display={burgerWindow === `open` ? `100%` : "0%"}>
      {mobileMenuItems.map((item, index) => (
        <Item key={index} item={item}></Item>
      ))}
    </Container>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            mobileMenuItems {
              name
              type
              to
              links {
                name
                url
              }
            }
          }
        }
      }
    `}
    render={data => <MobileMenu data={data} {...props}></MobileMenu>}
  ></StaticQuery>
)
