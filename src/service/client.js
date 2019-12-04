import React from "react"
import { connect } from "react-redux"
import { getWeather } from "../state/action"

const url = "https://apis.is/weather/forecasts/is?stations=1,422"

class Client extends React.Component {
  constructor() {
    super()
    this.state = {
      hiti: "",
      lysing: "",
      snjolysing: "",
    }
  }
  componentDidMount() {
    setTimeout(() => {
      fetch(url)
        .then(response => response.json())
        .then(data => this.checkWeather(data.results[0].forecast))
    }, 1000)
  }

  checkWeather(vedur) {
    let todaysForecast = []

    // set min & sec to 0, so we can compare the hourly forecast
    let now = new Date()
    now.setMinutes(0)
    now.setSeconds(0)
    now.setMilliseconds(0)
    // get todays forecast
    for (var i = 0; i < vedur.length; i++) {
      if (vedur[i].ftime.includes("2019-12-04")) {
        todaysForecast.push(vedur[i])
        let d = new Date(todaysForecast[i].ftime)
        if (d.getHours() === now.getHours()) {
          this.props.dispatch(
            getWeather({
              lysing: todaysForecast[i].W,
            })
          )
        }
      }
    }
  }

  render() {
    return <div></div>
  }
}

export default connect()(Client)
