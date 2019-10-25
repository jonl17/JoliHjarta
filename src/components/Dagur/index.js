import React from "react"
import { Container, PopupGluggi, Texti } from "./Styled"
import { connect } from "react-redux"
import ExitBTN from "../ExitBTN"
import { triggerDagurPopup } from "../../state/action"

const Dagur = ({ dagurPopup, selectedDay, dispatch }) => {
  return (
    <Container display={dagurPopup === "open" ? "grid" : "none"}>
      {selectedDay !== undefined ? (
        <PopupGluggi>
          <Texti>{selectedDay.title}</Texti>
          <ExitBTN
            click={() => dispatch(triggerDagurPopup("closed"))}
          ></ExitBTN>
        </PopupGluggi>
      ) : (
        <PopupGluggi>
          <Texti>Vantar upplýsingar um þennan dag!</Texti>
          <ExitBTN
            click={() => dispatch(triggerDagurPopup("closed"))}
          ></ExitBTN>
        </PopupGluggi>
      )}
    </Container>
  )
}

const mapStateToProps = state => ({
  dagurPopup: state.reducer.dagurPopup,
  selectedDay: state.reducer.selectedDay,
})

export default connect(mapStateToProps)(Dagur)
