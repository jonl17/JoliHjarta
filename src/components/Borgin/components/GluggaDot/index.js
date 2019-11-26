import React from "react"
import { connect } from "react-redux"
import { layer } from "../../../../constants"
import "./index.css"

// Gluggar
import {
  GluggaHlutir,
  Stekkjastaur,
  Mavur,
  Hopp,
  Mus,
  Hjol,
  Snjor,
} from "./Styled"

class GluggaDot extends React.Component {
  render() {
    return (
      <>
        <Snjor zindex={layer.one}></Snjor>
        <GluggaHlutir zindex={layer.hus}></GluggaHlutir>
        <Mavur zindex={layer.hus}></Mavur>
        <Hopp zindex={layer.zero}></Hopp>
        <Mus zindex={layer.zero}></Mus>
        <Stekkjastaur zindex={layer.borg}></Stekkjastaur>
        <Hjol zindex={layer.zero}></Hjol>
      </>
    )
  }
}

const mapStateToProps = state => ({
  birdState: state.animationReducer.birdState,
})

export default connect(mapStateToProps)(GluggaDot)
