import React from "react"
import { connect } from "react-redux"
import { layer } from "../../../../constants"
import "./index.css"
import { OpenWindow } from "../../../../methods"

// Gluggar
import {
  GluggaHlutir,
  Stekkjastaur,
  Mavur,
  Hopp,
  Mus,
  Hjol,
  Snjor,
  Stjarna,
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
    // gluggadót
    let skraut = document.getElementsByClassName("des")
    // click zone glugga
    let gluggar = document.getElementsByClassName("gluggi")
    OpenWindow(skraut, gluggar)
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
    const { device } = this.props
    let d = new Date()
    return (
      <>
        <Snjor zindex={layer.one}></Snjor>
        <GluggaHlutir zindex={layer.hus}></GluggaHlutir>
        <Mavur zindex={layer.hus}></Mavur>
        <Hopp zindex={layer.zero}></Hopp>
        <Mus zindex={layer.zero}></Mus>
        <Stekkjastaur device={device} zindex={layer.borg}></Stekkjastaur>
        <Hjol zindex={layer.zero}></Hjol>
        <Stjarna /** aðfangadagur */
          display={d.getDate() === 24 ? "block" : "none"}
          zindex={layer.zero}
        ></Stjarna>
      </>
    )
  }
}

const mapStateToProps = state => ({
  device: state.reducer.device,
})

export default connect(mapStateToProps)(GluggaDot)
