import React from "react"
import { Container, Moon } from "./Styled"
import { connect } from "react-redux"
import { makeItSnow } from "../../state/action"
import { countdown } from "../../methods/index"

var interval = 0
class Mani extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      timer: {
        hours: -1,
        minutes: -1,
        seconds: -1,
      },
      hLen: 0,
      mLen: 0,
      sLen: 0,
      christmasTime: false,
      svgText: undefined,
    }
  }
  componentDidMount() {
    interval = setInterval(() => {
      let timer = countdown()
      if (timer === -1) {
        this.setState({
          christmasTime: true,
        })
      }
      this.setState({
        timer: timer,
      })
    }, 1000)
    this.setState({
      svgText: document.getElementById("time-mani-text"),
    })
  }
  componentWillUnmount() {
    clearInterval(interval)
  }
  combineTime(h, m, s) {
    var hours = h.toString()
    var minutes = m.toString()
    var seconds = s.toString()
    var allNumbers = hours + ":" + minutes + ":" + seconds
    return allNumbers
  }
  render() {
    const { dispatch } = this.props
    let { hours, minutes, seconds } = this.state.timer
    let timeToChristmass = this.combineTime(hours, minutes, seconds)
    if (this.state.svgText !== undefined) {
      let textEl = this.state.svgText
      textEl.textContent = timeToChristmass
    }
    return (
      <Container>
        <Moon
          opacity={this.state.timer.hours === -1 ? 0 : 1}
          onClick={() => dispatch(makeItSnow())}
        ></Moon>
      </Container>
    )
  }
}

export default connect()(Mani)
