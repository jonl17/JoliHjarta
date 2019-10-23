import React from "react"
import { connect } from "react-redux"
import { getWeather } from "../state/action"

const url =
  "https://apis.is/weather/observations/is?stations=1,422&time=1h&anytime=0"

class Client extends React.Component {
  componentDidMount() {
    fetch(url)
      .then(response => response.json())
      .then(data =>
        this.props.dispatch(
          getWeather({
            hiti: data.results[0].T,
            lysing: data.results[0].W,
            snjolysing: data.results[0].SNC,
          })
        )
      )
  }

  render() {
    return <div></div>
  }
}

export default connect()(Client)
