import React from "react"
import { Background, Container } from "./Styled"

/* import city components */
import Mani from "./components/Mani"
import Husarod from "./components/Husarod"
import HusarodBak from "./components/HusarodBak"
import GluggaDot from "./components/GluggaDot"
import Kirkja from "./components/Kirkja"

const Borgin = () => {
  return (
    <Container>
      <Background></Background>
      <HusarodBak></HusarodBak>
      <Husarod></Husarod>
      <GluggaDot></GluggaDot>
      <Mani></Mani>
      <Kirkja></Kirkja>
    </Container>
  )
}

export default Borgin
