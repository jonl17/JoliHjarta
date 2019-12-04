import React from "react"
import { Container, Snow } from "./Styled"
import SnowImg from "./snow.png"
import { connect } from "react-redux"
import { makeItSnow } from "../../state/action"

class Snjokoma extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      snjoar: false,
      lysing: this.props.weather.lysing,
    }
  }
  componentDidUpdate() {
    if (this.props.weather.lysing !== undefined) {
      let serverLysing = this.props.weather.lysing.toLowerCase()
      let snjolysing = this.props.weather.snjolysing
      if (serverLysing !== this.state.lysing) {
        this.setState({
          lysing: serverLysing,
        })
        if (serverLysing.includes("snjó") || snjolysing !== "") {
          this.props.dispatch(makeItSnow("true"))
        } else {
          this.props.dispatch(makeItSnow("false"))
        }
      }
    }
  }
  render() {
    return (
      <Container display={this.props.snowing === "true" ? 1 : 0}>
        <Snow one image={SnowImg}></Snow>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  snowing: state.reducer.makeItSnow,
  weather: state.reducer.weather,
})

export default connect(mapStateToProps)(Snjokoma)
