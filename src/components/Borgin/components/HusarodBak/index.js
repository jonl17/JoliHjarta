import React from "react"
import { HusSVG } from "./Styled"
import { connect } from "react-redux"

const HusarodBak = ({ device }) => {
  return <HusSVG device={device}></HusSVG>
}

const mapStateToProps = state => ({
  device: state.reducer.device,
})

export default connect(mapStateToProps)(HusarodBak)
