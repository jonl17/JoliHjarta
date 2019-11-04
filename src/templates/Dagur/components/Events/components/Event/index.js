import React from "react"
import { Box, Image, InfoContainer, Title, Hvar, Klukkan } from "./Styled"
import { graphql, StaticQuery } from "gatsby"

const GetTempPic = () => (
  <StaticQuery
    query={graphql`
      {
        file(name: { eq: "temppic" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Image fluid={data.file.childImageSharp.fluid}></Image>}
  ></StaticQuery>
)

const Event = ({
  vidburdur: {
    node: {
      frontmatter: { title, hvenaer, klukkan, lysing },
    },
  },
}) => {
  return (
    <Box>
      {GetTempPic()}

      <InfoContainer>
        <Title>{title}</Title>
        <Hvar>Nesvellir 8B</Hvar>
        <Klukkan>{"kl. " + klukkan}</Klukkan>
      </InfoContainer>
    </Box>
  )
}

export default Event
