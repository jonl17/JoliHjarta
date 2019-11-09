import React from "react"
import { Container, Line } from "./Styled"
import { connect } from "react-redux"
import { triggerBurgerWindow } from "../../state/action"

const Burger = ({ burgerWindow, dispatch }) => {
  return (
    <Container
      onClick={() => dispatch(triggerBurgerWindow("open"))}
      display={burgerWindow === "open" ? "none" : "flex"}
    >
      <Line></Line>
      <Line></Line>
      <Line></Line>
    </Container>
  )
}

const mapStateToProps = state => ({
  burgerWindow: state.reducer.burgerWindow,
})

export default connect(mapStateToProps)(Burger)
