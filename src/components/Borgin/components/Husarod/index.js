import React from "react"
import HusSVG from "../../../../../static/myndir/husarod.svg"
import "./index.css"
import { connect } from "react-redux"
import {
  getGluggar,
  selectDay,
  triggerDagurPopup,
} from "../../../../state/action"

class Husarod extends React.Component {
  constructor(props) {
    super(props)
    this.clickCallBack = this.clickCallBack.bind(this)
    this.dispatchGluggar = this.dispatchGluggar.bind(this)
    this.dispatchDay = this.dispatchDay.bind(this)
  }
  componentDidMount() {
    let gluggar = document.getElementsByClassName("gluggi")
    this.dispatchGluggar(gluggar).then(() => {
      for (var i = 0; i < gluggar.length; i++) {
        this.props.gluggar[i].addEventListener("click", e =>
          this.clickCallBack(e)
        )
      }
    })
  }
  componentWillUnmount() {
    for (var i = 0; i < this.props.gluggar.length; i++) {
      this.props.gluggar[i].removeEventListener("click", e =>
        this.clickCallBack(e)
      )
    }
  }
  async dispatchGluggar(gluggar) {
    this.props.dispatch(getGluggar(gluggar))
  }
  async dispatchDay(day) {
    this.props.dispatch(selectDay(day))
  }
  clickCallBack(e) {
    /* open up the popup window for one day in the calender */
    this.dispatchDay(e.srcElement.id).then(() =>
      this.props.dispatch(triggerDagurPopup("open"))
    )
  }
  render() {
    return <HusSVG></HusSVG>
  }
}

const mapStateToProps = state => ({
  gluggar: state.reducer.gluggar,
})

export default connect(mapStateToProps)(Husarod)
