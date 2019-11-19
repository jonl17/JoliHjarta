import React from "react"
import { connect } from "react-redux"
import { layer } from "../../../../constants"

// Gluggar
import { GluggaHlutir, Stekkjastaur, Mavur, Hopp, Mus, Hjol } from "./Styled"

class GluggaDot extends React.Component {
  render() {
    return (
      <>
        <GluggaHlutir zindex={layer.hus}></GluggaHlutir>
        <Mavur zindex={layer.hus}></Mavur>
        <Hopp zindex={layer.hus}></Hopp>
        <Mus zindex={layer.hus}></Mus>
        <Stekkjastaur zindex={layer.borg}></Stekkjastaur>
        <Hjol zindex={layer.hus}></Hjol>
      </>
    )
  }
}

const mapStateToProps = state => ({
  birdState: state.animationReducer.birdState,
})

export default connect(mapStateToProps)(GluggaDot)
