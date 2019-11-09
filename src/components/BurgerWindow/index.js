import React from "react"
import { Container } from "./Styled"
import ExitBTN from "../ExitBTN"
import MenuItems from "./components/MenuItems"
import { connect } from "react-redux"
import { triggerBurgerWindow } from "../../state/action"

const Burgerwindow = ({ burgerWindow, dispatch }) => {
  return (
    <Container opacity={burgerWindow === "open" ? 1 : 0}>
      <ExitBTN click={() => dispatch(triggerBurgerWindow("closed"))}></ExitBTN>
      <MenuItems></MenuItems>
    </Container>
  )
}

const mapStateToProps = state => ({
  burgerWindow: state.reducer.burgerWindow,
})

export default connect(mapStateToProps)(Burgerwindow)
