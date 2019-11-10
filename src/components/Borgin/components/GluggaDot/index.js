import React from "react"

// Dagar
import Dagur1 from "../../../../../static/myndir/gluggi-opinn-1.svg"
import Dagur15 from "../../../../../static/myndir/gluggi-opinn-15.svg"
import Dagur17 from "../../../../../static/myndir/gluggi-opinn-17.svg"
import Dagur18 from "../../../../../static/myndir/gluggi-opinn-18.svg"
import Dagur19 from "../../../../../static/myndir/gluggi-opinn-19.svg"

// Auka
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
        <Dagur15></Dagur15>
        <Dagur17></Dagur17>
        <Dagur18></Dagur18>
        <Dagur19></Dagur19>
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
