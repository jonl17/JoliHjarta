import React from "react"
import { Dagsetning, VideoTitle, WindowBox } from "./Styled"
import { connect } from "react-redux"
import ExitBTN from "../ExitBTN"
import { triggerDagurPopup } from "../../state/action"
//import Video from "../Video"
//import EventarDagsins from "./components/EventarDagsins"
import Takki from "../Takki"
import PlayBTN from "./components/PlayBTN"
import { Container, PopupGluggi } from "../../constants"
import { generateSlugFromDate } from "../../methods"

const Dagur = ({ dagurPopup, selectedDay, dispatch, device }) => {
  return (
    <Container
      display={
        dagurPopup === "open" && selectedDay !== undefined ? "flex" : "none"
      }
    >
      {selectedDay !== undefined ? (
        <PopupGluggi grid device={device}>
          <ExitBTN
            click={() => dispatch(triggerDagurPopup("closed"))}
          ></ExitBTN>
          <WindowBox>
            <Dagsetning>{selectedDay.title}</Dagsetning>
            <VideoTitle>
              {selectedDay.vidjo !== null
                ? selectedDay.vidjo.vidjotitill
                : "Vidjó titil vantar"}
            </VideoTitle>
          </WindowBox>
          {/*<Video video={selectedDay.vidjo.vidjourl}></Video> */}
          <PlayBTN></PlayBTN>
          <WindowBox>
            <Takki text={"Senda inn efni"}></Takki>
            {/*<EventarDagsins dagsetning={selectedDay.dagsetning}></EventarDagsins>*/}
            <Takki
              text={"Sjá alla viðburði"}
              type={"link"}
              slug={"/" + generateSlugFromDate(selectedDay.dagsetning)}
            ></Takki>
          </WindowBox>
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
