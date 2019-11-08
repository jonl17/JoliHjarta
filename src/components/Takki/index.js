import React from "react"
import { Container, Text, BTN, LinkBTN } from "./Styled"

const Takki = ({ type, text, slug }) => {
  return type === `link` ? (
    <Container>
      <LinkBTN to={slug}>
        <Text>{text}</Text>
      </LinkBTN>
    </Container>
  ) : (
    <Container>
      <BTN>
        <Text>{text}</Text>
      </BTN>
    </Container>
  )
}

export default Takki
