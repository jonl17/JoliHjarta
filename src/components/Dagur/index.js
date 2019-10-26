import React from "react"
import { Container, PopupGluggi, Dagsetning, VideoTitle, BTN } from "./Styled"
import { connect } from "react-redux"
import ExitBTN from "../ExitBTN"
import { triggerDagurPopup } from "../../state/action"
import Video from "../Video"
import EventarDagsins from "./components/EventarDagsins"

const Dagur = ({ dagurPopup, selectedDay, dispatch }) => {
  return (
    <Container
      display={
        dagurPopup === "open" && selectedDay !== undefined ? "flex" : "none"
      }
    >
      {selectedDay !== undefined ? (
        <PopupGluggi>
          <ExitBTN
            click={() => dispatch(triggerDagurPopup("closed"))}
          ></ExitBTN>
          <Dagsetning>{selectedDay.title}</Dagsetning>
          <VideoTitle>{selectedDay.video.title}</VideoTitle>
          <Video video={selectedDay.video.url}></Video>
          <BTN center>Sendu inn efni</BTN>
          <EventarDagsins eventar={selectedDay.eventar}></EventarDagsins>
        </PopupGluggi>
      ) : (
        <></>
      )}
    </Container>
  )
}

const mapStateToProps = state => ({
  dagurPopup: state.reducer.dagurPopup,
  selectedDay: state.reducer.selectedDay,
})

export default connect(mapStateToProps)(Dagur)
