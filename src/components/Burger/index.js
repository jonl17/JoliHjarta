import React from "react"
import { Container, Line, ExtraContainer } from "./Styled"
import { connect } from "react-redux"
import { triggerBurgerWindow, triggerDagurPopup } from "../../state/action"

const dispatches = dispatch => {
  dispatch(triggerBurgerWindow("open"))
  dispatch(triggerDagurPopup("closed"))
}

const Burger = ({ burgerWindow, dispatch }) => {
  return (
    <ExtraContainer>
      <Container
        onClick={() => dispatches(dispatch)}
        display={burgerWindow === "open" ? "none" : "flex"}
      >
        <Line one></Line>
        <Line two></Line>
        <Line three></Line>
      </Container>
    </ExtraContainer>
  )
}

const mapStateToProps = state => ({
  burgerWindow: state.reducer.burgerWindow,
})

export default connect(mapStateToProps)(Burger)
