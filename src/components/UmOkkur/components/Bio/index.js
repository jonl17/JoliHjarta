import React from "react"
import { Title, Text, Box } from "./Styled"
import { graphql, StaticQuery } from "gatsby"

const Bio = ({
  data: {
    site: {
      siteMetadata: { umOkkur },
    },
  },
}) => {
  return (
    <Box>
      <Title>Um okkur</Title>
      {umOkkur.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
    </Box>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            umOkkur
          }
        }
      }
    `}
    render={data => <Bio data={data} {...props}></Bio>}
  ></StaticQuery>
)
