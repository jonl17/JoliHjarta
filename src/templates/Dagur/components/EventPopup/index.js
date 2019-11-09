import React from "react"
import { connect } from "react-redux"
import { Container, PopupGluggi } from "../../../../constants"
import ExitBTN from "../../../../components/ExitBTN"
import { triggerEventPopup } from "../../../../state/action"
import {
  Title,
  InfoContainer,
  Klukkan,
  Hvar,
  Image,
  DirectionBox,
  Lysing,
} from "./Styled"

const EventPopup = ({ eventPopup, device, selectedEvent, dispatch }) => {
  return (
    <Container
      display={
        eventPopup === "open" && selectedEvent !== undefined ? "flex" : "none"
      }
    >
      {selectedEvent !== undefined ? (
        <PopupGluggi device={device}>
          <ExitBTN
            click={() => dispatch(triggerEventPopup("closed"))}
          ></ExitBTN>
          <InfoContainer>
            <Title>{selectedEvent.title}</Title>
            <DirectionBox>
              <Hvar>
                <Klukkan>{"kl. " + selectedEvent.klukkan}</Klukkan>
                {selectedEvent.hvar}
              </Hvar>
            </DirectionBox>
          </InfoContainer>
          <Image fluid={selectedEvent.mynd.childImageSharp.fluid}></Image>
          <Lysing>{selectedEvent.lysing}</Lysing>
        </PopupGluggi>
      ) : (
        <></>
      )}
    </Container>
  )
}

const mapStateToProps = state => ({
  eventPopup: state.reducer.eventPopup,
  selectedEvent: state.reducer.selectedEvent,
  device: state.reducer.device,
})

export default connect(mapStateToProps)(EventPopup)
