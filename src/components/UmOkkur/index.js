import React from "react"
import { Container, Title } from "./Styled"
import { graphql, StaticQuery } from "gatsby"

/** components */
import ExitBTN from "../ExitBTN"
import Bio from "./components/Bio"

const UmOkkur = ({
  data: {
    site: {
      siteMetadata: { nafn },
    },
  },
}) => {
  return (
    <Container>
      <ExitBTN burgerPos type={"link"} slug={"/"}></ExitBTN>
      <Title>{nafn}</Title>
      <Bio></Bio>
    </Container>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            nafn
          }
        }
      }
    `}
    render={data => <UmOkkur data={data} {...props}></UmOkkur>}
  ></StaticQuery>
)
