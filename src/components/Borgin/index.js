import React from "react"
import { Background, Container } from "./Styled"
import { connect } from "react-redux"

/* import city components */
import Husarod from "./components/Husarod"
import HusarodBak from "./components/HusarodBak"
import GluggaDot from "./components/GluggaDot"
import Kirkja from "./components/Kirkja"

const Borgin = ({ device }) => {
  return (
    <>
      <Background></Background>
      {device !== undefined ? ( // no rendering if device has not be defined, this will prevent skipping of images at load time
        <Container device={device}>
          <HusarodBak></HusarodBak>
          <Husarod></Husarod>
          <GluggaDot></GluggaDot>
          <Kirkja></Kirkja>
        </Container>
      ) : (
        <></>
      )}
    </>
  )
}

const mapStateToProps = state => ({
  device: state.reducer.device,
})

export default connect(mapStateToProps)(Borgin)
