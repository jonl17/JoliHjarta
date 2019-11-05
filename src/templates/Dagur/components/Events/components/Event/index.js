import React from "react"
import { Box, Image, InfoContainer, Title, Hvar, Klukkan } from "./Styled"
import { graphql, StaticQuery } from "gatsby"
import { connect } from "react-redux"
import { triggerEventPopup, selectEvent } from "../../../../../../state/action"

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

// opens up popup & selected event clicked
const dispatchesForEventPopup = (dispatch, event) => {
  dispatch(triggerEventPopup("open")) // open sesame
  dispatch(selectEvent(event))
}

const Event = ({
  dispatch,
  vidburdur: {
    node: { frontmatter },
  },
}) => {
  return (
    <Box onClick={() => dispatchesForEventPopup(dispatch, frontmatter)}>
      {GetTempPic()}
      <InfoContainer>
        <Title>{frontmatter.title}</Title>
        <Hvar>Nesvellir 8B</Hvar>
        <Klukkan>{"kl. " + frontmatter.klukkan}</Klukkan>
      </InfoContainer>
    </Box>
  )
}

export default connect()(Event)
