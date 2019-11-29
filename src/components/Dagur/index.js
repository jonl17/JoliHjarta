import React from "react"
import { PopupGluggi, CloseSensor, Footer } from "./Styled"
import { connect } from "react-redux"
import ExitBTN from "../ExitBTN"
import { triggerDagurPopup } from "../../state/action"
import Banner from "./components/Banner"
import Video from "../Video"
import VerkefniDagsins from "./components/VerkefniDagsins"
import VidburdirDagsins from "./components/VidburdirDagsins"
import PlayBTN from "./components/PlayBTN"

// import { generateSlugFromDate } from "../../methods"

const Dagur = ({ dagurPopup, selectedDay, dispatch, platform }) => {
  return selectedDay !== undefined ? (
    <>
      <CloseSensor
        onClick={() => dispatch(triggerDagurPopup("closed"))}
        display={
          dagurPopup === "open" && selectedDay !== undefined ? "block" : "none"
        }
      ></CloseSensor>
      <PopupGluggi
        display={
          dagurPopup === "open" && selectedDay !== undefined ? "grid" : "none"
        }
        grid
        platform={platform}
      >
        <ExitBTN
          tight
          click={() => dispatch(triggerDagurPopup("closed"))}
        ></ExitBTN>
        <Banner day={selectedDay}></Banner>
        {selectedDay.vidjo !== null ? <PlayBTN></PlayBTN> : <></>}
        <Footer>
          <VidburdirDagsins></VidburdirDagsins>
          <VerkefniDagsins></VerkefniDagsins>
        </Footer>
      </PopupGluggi>
      {selectedDay.vidjo !== null ? (
        <Video vidjo={selectedDay.vidjo}></Video>
      ) : (
        <></>
      )}
    </>
  ) : (
    <></>
  )
}

const mapStateToProps = state => ({
  dagurPopup: state.reducer.dagurPopup,
  selectedDay: state.reducer.selectedDay,
  device: state.reducer.device,
  platform: state.reducer.platform,
})

export default connect(mapStateToProps)(Dagur)
