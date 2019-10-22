import React from "react"
import { Background } from "./Styled"

/* import city components */
import Mani from "./components/Mani"
import Husarod from "./components/Husarod"

const Borgin = () => {
  return (
    <Background>
      <Mani></Mani>
      <Husarod></Husarod>
    </Background>
  )
}

export default Borgin
