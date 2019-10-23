import React from "react"
import { connect } from "react-redux"
import Borgin from "../components/Borgin"
import Snjokoma from "../components/Snjokoma"
import Dagur from "../components/Dagur"

const index = ({ weather }) => {
  console.log(weather)
  return (
    <>
      <Snjokoma></Snjokoma>
      <Borgin></Borgin>
      <Dagur></Dagur>
    </>
  )
}

const mapStateToProps = state => ({
  weather: state.reducer.weather,
})

export default connect(mapStateToProps)(index)
