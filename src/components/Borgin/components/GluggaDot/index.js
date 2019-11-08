import React from "react"
import Dagur1 from "../../../../../static/myndir/gluggi-opinn-1.svg"
import Mavur from "../../../../../static/myndir/Mavur_thak.svg"
import "../SVGanimate/animate.css"

import "./index.css"

class GluggaDot extends React.Component {
  constructor(props) {
    super(props)
    this.hoverCallBack = this.hoverCallBack.bind(this)
  }
  componentDidMount() {
    let mavur = document.getElementById("mavur")
    mavur.addEventListener("hover", mavur.classList.add("animated bounceOutUp"))
  }
  hoverCallBack() {}
  render() {
    return (
      <>
        <Dagur1></Dagur1>
        <Mavur></Mavur>
      </>
    )
  }
}

export default GluggaDot
