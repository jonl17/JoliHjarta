import React from "react"
import { Container, Line } from "./Styled"
import { connect } from "react-redux"
import { triggerBurgerWindow, triggerDagurPopup } from "../../state/action"

// open nav
const dispatches = dispatch => {
  dispatch(triggerBurgerWindow("open"))
  dispatch(triggerDagurPopup("closed"))
}

const Burger = ({ burgerWindow, dispatch }) => {
  return burgerWindow === "closed" ? (
    <Container onClick={() => dispatches(dispatch)}>
      <Line one></Line>
      <Line two></Line>
      <Line three></Line>
    </Container>
  ) : (
    <Container onClick={() => dispatch(triggerBurgerWindow("closed"))}>
      <Line one ex></Line>
      <Line two ex></Line>
    </Container>
  )
}

const mapStateToProps = state => ({
  burgerWindow: state.reducer.burgerWindow,
})

export default connect(mapStateToProps)(Burger)
