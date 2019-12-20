import React from "react"
import { HusSVG, Velkomin } from "./Styled"
import { connect } from "react-redux"

const HusarodBak = ({ device }) => {
  return (
    <>
      <Velkomin device={device}></Velkomin>
      <HusSVG device={device}></HusSVG>
    </>
  )
}

const mapStateToProps = state => ({
  device: state.reducer.device,
})

export default connect(mapStateToProps)(HusarodBak)
