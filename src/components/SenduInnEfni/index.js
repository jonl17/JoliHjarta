import React from "react"
import { PopupGluggi, CloseSensor } from "./Styled"
import { connect } from "react-redux"
import { triggerSenduInnEfni, triggerDagurPopup } from "../../state/action"
import Form from "../Form"
import ExitBTN from "../ExitBTN"

const dispatches = dispatch => {
  dispatch(triggerDagurPopup("closed"))
  dispatch(triggerSenduInnEfni("closed"))
}

const Senduinnefni = ({
  platform,
  selectedDay,
  dispatch,
  senduInnEfniOpen,
}) => {
  return (
    <>
      <CloseSensor
        onClick={() => dispatches(dispatch)}
        display={
          senduInnEfniOpen === "open" && selectedDay !== undefined
            ? "block"
            : "none"
        }
      ></CloseSensor>
      <PopupGluggi
        display={
          senduInnEfniOpen === "open" && selectedDay !== undefined
            ? "block"
            : "none"
        }
        platform={platform}
      >
        <ExitBTN
          tight
          click={() => dispatch(triggerSenduInnEfni("closed"))}
        ></ExitBTN>
        <Form></Form>
      </PopupGluggi>
    </>
  )
}

const mapStateToProps = state => ({
  platform: state.reducer.platform,
  selectedDay: state.reducer.selectedDay,
  senduInnEfniOpen: state.reducer.senduInnEfniOpen,
})

export default connect(mapStateToProps)(Senduinnefni)
