import React from "react"
// items
import Dagur1 from "../../../../../static/myndir/gluggi-opinn-1.svg"
import Mavur from "../../../../../static/myndir/Mavur_Flug-01.svg"
import Hopp from "../../../../../static/myndir/hopp.svg"
import Mus from "../../../../../static/myndir/mus.svg"
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
        <Dagur1></Dagur1>
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
