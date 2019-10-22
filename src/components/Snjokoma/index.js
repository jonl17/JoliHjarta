import React from "react"
import { Container, Snow } from "./Styled"
import SnowImg from "./snow.png"
import { connect } from "react-redux"

const Snjokoma = ({ makeItSnow }) => {
  return (
    <Container display={makeItSnow ? 1 : 0}>
      <Snow one image={SnowImg}></Snow>
    </Container>
  )
}

const mapStateToProps = state => ({
  makeItSnow: state.reducer.makeItSnow,
})

export default connect(mapStateToProps)(Snjokoma)
