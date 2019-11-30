import React from "react"
import { Container, Date, Description, Number } from "./Styled"
import { connect } from "react-redux"

const Banner = ({ day, platform }) => {
  return (
    <Container>
      <Date>
        <Number>{day.dagsetning.replace("12/", "")}</Number>
      </Date>
      {day.vidjo !== null && platform !== "simi" ? (
        <Description>{day.vidjo.vidjotitill}</Description>
      ) : (
        <></>
      )}
    </Container>
  )
}

const mapStateToProps = state => ({
  platform: state.reducer.platform,
})

export default connect(mapStateToProps)(Banner)
