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
    let maniTexti = document.getElementById("time-mani-text")
    console.log(maniTexti)
    if (maniTexti !== null) maniTexti.textContent = timeToChristmass
    return (
      <Container>
        <Moon onClick={() => dispatch(makeItSnow())}></Moon>
      </Container>
    )
  }
}

export default connect()(Mani)
