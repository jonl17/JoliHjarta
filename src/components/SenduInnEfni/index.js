import React from "react"
import { PopupGluggi, CloseSensor } from "./Styled"
import { connect } from "react-redux"
import { triggerSenduInnEfni } from "../../state/action"

const Senduinnefni = ({
  platform,
  selectedDay,
  dispatch,
  senduInnEfniOpen,
}) => {
  return (
    <>
      <CloseSensor
        onClick={() => dispatch(triggerSenduInnEfni("closed"))}
        display={
          senduInnEfniOpen === "open" && selectedDay !== undefined
            ? "block"
            : "none"
        }
      ></CloseSensor>
      <PopupGluggi
        display={
          senduInnEfniOpen === "open" && selectedDay !== undefined
            ? "grid"
            : "none"
        }
        grid
        platform={platform}
      >
        <p>YO ELLIOT</p>
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
