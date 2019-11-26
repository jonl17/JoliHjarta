import React from "react"
import { KirkjanSVG } from "./Styled"
import { connect } from "react-redux"

class Kirkja extends React.Component {
  render() {
    const { device } = this.props
    return (
      <>
        <KirkjanSVG device={device}></KirkjanSVG>
      </>
    )
  }
}

const mapStateToProps = state => ({
  device: state.reducer.device,
})

export default connect(mapStateToProps)(Kirkja)
