import React from "react"
import { Container, Text } from "./Styled"
import { graphql, StaticQuery } from "gatsby"

const GetTitle = () => (
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
    render={data => <Text>{data.site.siteMetadata.nafn}</Text>}
  ></StaticQuery>
)

const Title = () => {
  return <Container to={"/"}>{GetTitle()}</Container>
}

export default Title
