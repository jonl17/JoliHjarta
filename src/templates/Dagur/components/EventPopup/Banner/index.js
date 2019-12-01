import React from "react"
import { Container, Title, Directions, Hvar, Klukkan } from "./Styled"
import { connect } from "react-redux"

const Banner = ({ event: { title, hvar, klukkan }, platform }) => {
  return (
    <Container>
      <Title platform={platform}>{title}</Title>
      <Directions>
        <Klukkan>{klukkan}</Klukkan>
        <Hvar>{hvar}</Hvar>
      </Directions>
    </Container>
  )
}

const mapStateToProps = state => ({
  platform: state.reducer.platform,
})

export default connect(mapStateToProps)(Banner)
