import React from "react"
import { Dagsetning, VideoTitle } from "./Styled"
import { connect } from "react-redux"
import ExitBTN from "../ExitBTN"
import { triggerDagurPopup } from "../../state/action"
//import Video from "../Video"
import EventarDagsins from "./components/EventarDagsins"
import SenduInnEfniBTN from "./components/SenduInnEfniBTN"
import PlayBTN from "./components/PlayBTN"
import { Container, PopupGluggi } from "../../constants"

const Dagur = ({ dagurPopup, selectedDay, dispatch, device }) => {
  return (
    <Container
      display={
        dagurPopup === "open" && selectedDay !== undefined ? "flex" : "none"
      }
    >
      {selectedDay !== undefined ? (
        <PopupGluggi device={device}>
          <ExitBTN
            click={() => dispatch(triggerDagurPopup("closed"))}
          ></ExitBTN>
          <Dagsetning>{selectedDay.title}</Dagsetning>
          <VideoTitle>{selectedDay.vidjo.vidjotitill}</VideoTitle>
          {/*<Video video={selectedDay.vidjo.vidjourl}></Video> */}
          <PlayBTN></PlayBTN>
          <SenduInnEfniBTN></SenduInnEfniBTN>
          <EventarDagsins dagsetning={selectedDay.dagsetning}></EventarDagsins>
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
  device: state.reducer.device,
})

export default connect(mapStateToProps)(Dagur)
