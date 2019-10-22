import React from "react"
import { connect } from "react-redux"
import Borgin from "../components/Borgin"
import Snjokoma from "../components/Snjokoma"

const index = ({ weather }) => {
  console.log(weather)
  return (
    <>
      <Snjokoma></Snjokoma>
      <Borgin></Borgin>
    </>
  )
}

const mapStateToProps = state => ({
  weather: state.reducer.weather,
})

export default connect(mapStateToProps)(index)
