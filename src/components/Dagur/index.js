import React from "react"
import { Container, PopupGluggi, Dagsetning, VideoTitle } from "./Styled"
import { connect } from "react-redux"
import ExitBTN from "../ExitBTN"
import { triggerDagurPopup } from "../../state/action"
import Video from "../Video"
import EventarDagsins from "./components/EventarDagsins"
import SenduInnEfniBTN from "./components/SenduInnEfniBTN"

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
          <SenduInnEfniBTN></SenduInnEfniBTN>
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
