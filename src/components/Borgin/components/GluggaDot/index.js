import React from "react"
import { connect } from "react-redux"
import "./index.css"

// Gata
import Mavur from "../../../../../static/myndir/Mavur_Flug-01.svg"
import Hopp from "../../../../../static/myndir/hopp.svg"
import Mus from "../../../../../static/myndir/mus.svg"

// Gluggar
import { GluggaHlutir } from "./Styled"

class GluggaDot extends React.Component {
  componentDidMount() {}
  componentDidUpdate() {}
  render() {
    return (
      <>
        <GluggaHlutir></GluggaHlutir>
        <Mavur></Mavur>
        <Hopp></Hopp>
        <Mus></Mus>
      </>
    )
  }
}

const mapStateToProps = state => ({
  birdState: state.animationReducer.birdState,
})

export default connect(mapStateToProps)(GluggaDot)
