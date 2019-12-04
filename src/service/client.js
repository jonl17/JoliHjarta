import React from "react"
import { connect } from "react-redux"
import { getWeather } from "../state/action"

const url =
  "https://apis.is/weather/observations/is?stations=1,422&time=1h&anytime=0"

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
        .then(data => this.checkSnow(data.results[0]))
    }, 1000)
  }
  checkSnow(vedrid) {
    this.props.dispatch(
      getWeather({
        hiti: vedrid.T,
        lysing: vedrid.W,
        snjolysing: vedrid.SNC,
      })
    )
  }

  render() {
    return <div></div>
  }
}

export default connect()(Client)
