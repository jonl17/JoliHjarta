import React from "react"
import { connect } from "react-redux"
import ExitBTN from "../../../../components/ExitBTN"
import { triggerEventPopup } from "../../../../state/action"
import {
  PopupGluggi,
  CloseSensor,
  ImageContainer,
  Image,
  Texti,
} from "./Styled"
import Banner from "./Banner"

const EventPopup = ({ eventPopup, platform, selectedEvent, dispatch }) => {
  console.log(selectedEvent)
  return selectedEvent !== undefined ? (
    <>
      <CloseSensor
        onClick={() => dispatch(triggerEventPopup("closed"))}
        display={
          eventPopup === "open" && selectedEvent !== undefined
            ? "block"
            : "none"
        }
      ></CloseSensor>
      <PopupGluggi
        display={
          eventPopup === "open" && selectedEvent !== undefined ? "grid" : "none"
        }
        event
        platform={platform}
      >
        <ExitBTN click={() => dispatch(triggerEventPopup("closed"))}></ExitBTN>
        <Banner event={selectedEvent}></Banner>
        <ImageContainer>
          <Image fluid={selectedEvent.mynd.childImageSharp.fluid}></Image>
        </ImageContainer>
        <Texti>{selectedEvent.lysing}</Texti>
      </PopupGluggi>
    </>
  ) : (
    <></>
  )
}

const mapStateToProps = state => ({
  eventPopup: state.reducer.eventPopup,
  selectedEvent: state.reducer.selectedEvent,
  platform: state.reducer.platform,
})

export default connect(mapStateToProps)(EventPopup)
