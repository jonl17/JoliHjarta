import React from "react"
import { Container, Text } from "./Styled"

const Item = ({ nafn }) => {
  return (
    <Container>
      <Text>{nafn}</Text>
    </Container>
  )
}

export default Item
