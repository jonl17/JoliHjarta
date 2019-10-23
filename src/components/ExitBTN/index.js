import React from "react"
import { Container } from "./Styled"
import { connect } from "react-redux"

const ExitBTN = ({ click }) => {
  console.log(click)
  return <Container onClick={() => click()}>LOKA</Container>
}

export default connect()(ExitBTN)
