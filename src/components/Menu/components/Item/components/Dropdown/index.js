import React from "react"
import { Box, Hlekkur, Texti, TextContainer } from "./Styled"
import { useSelector } from "react-redux"
import { graphql, StaticQuery } from "gatsby"

const Dropdown = ({
  nafn,
  data: {
    site: {
      siteMetadata: { mobileMenuItems, umOkkur },
    },
  },
}) => {
  const platform = useSelector(state => state.reducer.platform)
  return (
    <Box platform={platform} nafn={nafn}>
      {nafn === `Hlekkir` ? (
        mobileMenuItems[3].links.map((item, index) => (
          <Hlekkur href={item.url} target="_blank" key={index}>
            {item.name}
          </Hlekkur>
        ))
      ) : (
        <TextContainer>
          {umOkkur.map((item, index) => (
            <Texti key={index}>{item}</Texti>
          ))}
        </TextContainer>
      )}
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
            mobileMenuItems {
              name
              links {
                name
                url
              }
            }
          }
        }
      }
    `}
    render={data => <Dropdown data={data} {...props}></Dropdown>}
  ></StaticQuery>
)
