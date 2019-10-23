import React from "react"
import { Container, PopupGluggi, Texti } from "./Styled"
import { connect } from "react-redux"
import ExitBTN from "../ExitBTN"
import { triggerDagurPopup } from "../../state/action"

const Dagur = ({ dagurPopup, selectedDay, dispatch }) => {
  console.log(dagurPopup)
  return (
    <Container display={dagurPopup === "open" ? "grid" : "none"}>
      <PopupGluggi>
        <Texti>{selectedDay}</Texti>
        <ExitBTN click={() => dispatch(triggerDagurPopup("closed"))}></ExitBTN>
      </PopupGluggi>
    </Container>
  )
}

const mapStateToProps = state => ({
  dagurPopup: state.reducer.dagurPopup,
  selectedDay: state.reducer.selectedDay,
})

export default connect(mapStateToProps)(Dagur)
