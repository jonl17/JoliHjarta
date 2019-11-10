import React from "react"
import { KirkjanSVG } from "./Styled"

// countdown to christmass!
const countdown = () => {
  var christmasEve = new Date(2019, 11, 24, 18).getTime()
  var now = new Date().getTime()
  var distance = christmasEve - now

  if (distance <= 0) {
    return -1 // it's time!
  }

  // do time
  var days = Math.floor(distance / (1000 * 60 * 60 * 24))
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  var seconds = Math.floor((distance % (1000 * 60)) / 1000)

  // við viljum eingöngu klst mín sek
  return { hours: days * 24, minutes: minutes, seconds: seconds }
}

var interval = 0

class Kirkja extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      timer: {
        hours: -1,
        minutes: -1,
        seconds: -1,
      },
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
  componentDidUpdate() {
    let hours = document.getElementById("hours")
    let minutes = document.getElementById("minutes")
    let seconds = document.getElementById("seconds")

    let group = document.getElementById("time")

    if (this.state.timer.hours === -1) {
      group.style.opacity = 0
    } else {
      group.style.opacity = 1
    }

    hours.textContent = this.state.timer.hours
    minutes.textContent = this.state.timer.minutes
    seconds.textContent = this.state.timer.seconds
  }
  componentWillUnmount() {
    clearInterval(interval)
  }
  render() {
    return <KirkjanSVG></KirkjanSVG>
  }
}

export default Kirkja
