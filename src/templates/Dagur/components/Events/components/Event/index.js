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

const Event = ({
  dispatch,
  vidburdur: {
    node: { frontmatter },
  },
}) => {
  return (
    <Box onClick={() => dispatchesForEventPopup(dispatch, frontmatter)}>
      <ImageContainer>
        {frontmatter.mynd !== null ? (
          <Image fluid={frontmatter.mynd.childImageSharp.fluid}></Image>
        ) : (
          <></>
        )}
      </ImageContainer>
      <InfoContainer>
        <Title>{frontmatter.title}</Title>
        <Hvar>{frontmatter.hvar}</Hvar>
        <Klukkan>{"kl. " + frontmatter.klukkan}</Klukkan>
      </InfoContainer>
    </Box>
  )
}

export default connect()(Event)
