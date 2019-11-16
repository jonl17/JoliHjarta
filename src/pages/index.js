import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Text = styled.p`
  font-size: 100px;
  width: 100%;
  text-align: center;
  margin: 0;
`
const index = ({ weather }) => {
  return (
    <Container>
      <Text>Hiti: {weather.hiti} gráður</Text>
      <Text>{weather.lysing}</Text>
    </Container>
  )
}
const mapStateToProps = state => ({
  weather: state.reducer.weather,
})
export default connect(mapStateToProps)(index)
