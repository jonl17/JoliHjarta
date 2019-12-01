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
  constructor(props) {
    super(props)
    this.state = {
      augu: undefined,
    }
  }
  componentDidMount() {
    let augu = document.getElementsByClassName("auga")
    this.setState({
      augu: augu,
    })
    let storiContainer = document.getElementById("large-container")
    storiContainer.addEventListener("scroll", e => this.callBack(e))

    /* OPEN SESAME WINDOWS BABEY */
    let gluggar = document.getElementsByClassName("des")
    let d = new Date()
    for (var i = 0; i < gluggar.length; i++) {
      if (parseInt(gluggar[i].id.replace("desember", "")) <= d.getDate())
        gluggar[i].classList.add("opinn-gluggi")
    }
  }
  callBack(e) {
    if (e.target.scrollLeft > 1200) {
      for (var i = 0; i < this.state.augu.length; i++) {
        this.state.augu[i].classList.remove("look-left")
        this.state.augu[i].classList.add("look-right")
      }
    }
    if (e.target.scrollLeft < 300) {
      for (i = 0; i < this.state.augu.length; i++) {
        this.state.augu[i].classList.remove("look-right")
        this.state.augu[i].classList.add("look-left")
      }
    }
  }
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
