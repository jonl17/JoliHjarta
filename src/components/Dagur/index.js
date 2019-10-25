import React from "react"
import {
  Container,
  PopupGluggi,
  Dagsetning,
  VideoTitle,
  SenduInnBTN,
} from "./Styled"
import { connect } from "react-redux"
import ExitBTN from "../ExitBTN"
import { triggerDagurPopup } from "../../state/action"
import Video from "../Video"

const Dagur = ({ dagurPopup, selectedDay, dispatch }) => {
  return (
    <Container
      display={
        dagurPopup === "open" && selectedDay !== undefined ? "grid" : "none"
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
          <SenduInnBTN>Sendu inn efni</SenduInnBTN>
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
