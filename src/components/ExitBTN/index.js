import React from "react"
import { Container, Line } from "./Styled"
import { connect } from "react-redux"

const ExitBTN = ({ click }) => {
  return (
    <Container onClick={() => click()}>
      <Line></Line>
      <Line second></Line>
    </Container>
  )
}

export default connect()(ExitBTN)
