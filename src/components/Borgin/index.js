import React from "react"
import { Background, Container } from "./Styled"

/* import city components */
import Mani from "./components/Mani"
import Husarod from "./components/Husarod"

const Borgin = () => {
  return (
    <Container>
      <Background></Background>
      <Husarod></Husarod>
      <Mani></Mani>
    </Container>
  )
}

export default Borgin
