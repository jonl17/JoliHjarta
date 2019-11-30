import React from "react"
import { Container, Title, Directions, Hvar, Klukkan } from "./Styled"

const Banner = ({ event: { title, hvar, klukkan } }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Directions>
        <Klukkan>{klukkan}</Klukkan>
        <Hvar>{hvar}</Hvar>
      </Directions>
    </Container>
  )
}

export default Banner
