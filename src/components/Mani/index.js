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
  splitIntoDigits(h, m, s) {
    var hours = h
      .toString()
      .split("")
      .concat(":")
    var minutes = m
      .toString()
      .split("")
      .concat(":")
    var seconds = s.toString().split("")
    var allNumbers = hours.concat(minutes).concat(seconds)
    return allNumbers
  }
  render() {
    const { dispatch } = this.props
    return (
      <Container>
        <Moon onClick={() => dispatch(makeItSnow())}></Moon>
      </Container>
    )
  }
}

export default connect()(Mani)
