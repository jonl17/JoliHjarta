import React from "react"
import { Container, Date, Description, Number, Month } from "./Styled"

const Banner = ({ day }) => {
  return (
    <Container>
      <Date>
        <Number>{day.dagsetning.replace("12/", "")}</Number>
        <Month>desember</Month>
      </Date>
      {day.vidjo !== null ? (
        <Description>{day.vidjo.vidjotitill}</Description>
      ) : (
        <></>
      )}
    </Container>
  )
}

export default Banner
