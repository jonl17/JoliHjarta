import React from "react"

// Auka
import Mavur from "../../../../../static/myndir/Mavur_Flug-01.svg"
import Hopp from "../../../../../static/myndir/hopp.svg"
import Mus from "../../../../../static/myndir/mus.svg"

import { GluggaHlutir } from "./Styled"
// other
import { connect } from "react-redux"

import "../SVGanimate/animate.css"

import "./index.css"

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
