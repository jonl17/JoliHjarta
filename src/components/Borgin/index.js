import React from "react"
import { Background, Container } from "./Styled"

/* import city components */
import Husarod from "./components/Husarod"
import HusarodBak from "./components/HusarodBak"
import GluggaDot from "./components/GluggaDot"
import Kirkja from "./components/Kirkja"

const Borgin = () => {
  return (
    <>
      <Background></Background>
      <Container>
        <HusarodBak></HusarodBak>
        <Husarod></Husarod>
        <GluggaDot></GluggaDot>
        <Kirkja></Kirkja>
      </Container>
    </>
  )
}

export default Borgin
