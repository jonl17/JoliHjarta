import React from "react"
import {
  Box,
  Image,
  InfoContainer,
  Title,
  Hvar,
  Klukkan,
  ImageContainer,
} from "./Styled"
import { connect } from "react-redux"
import { triggerEventPopup, selectEvent } from "../../../../../../state/action"

// opens up popup & selected event clicked
const dispatchesForEventPopup = (dispatch, event) => {
  dispatch(triggerEventPopup("open")) // open sesame
  dispatch(selectEvent(event))
}
const Event = ({ dispatch, vidburdur: { node } }) => {
  return (
    <Box onClick={() => dispatchesForEventPopup(dispatch, node)}>
      <ImageContainer>
        {node.frontmatter.mynd !== null ? (
          <Image fluid={node.frontmatter.mynd.childImageSharp.fluid}></Image>
        ) : (
          <></>
        )}
      </ImageContainer>
      <InfoContainer>
        <Title>{node.frontmatter.title}</Title>
        <Hvar>{node.frontmatter.hvar}</Hvar>
        <Klukkan>{"kl. " + node.frontmatter.klukkan}</Klukkan>
      </InfoContainer>
    </Box>
  )
}

export default connect()(Event)
