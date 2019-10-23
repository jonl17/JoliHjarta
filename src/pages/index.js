import React from "react"
import { connect } from "react-redux"
import Borgin from "../components/Borgin"
import Snjokoma from "../components/Snjokoma"
import Dagur from "../components/Dagur"
import Burger from "../components/Burger"

const index = ({ weather }) => {
  if (weather.lysing !== undefined)
    console.log("Veðurlýsing: " + weather.lysing)

  if (weather.hiti !== undefined) console.log("Hiti: " + weather.hiti)
  return (
    <>
      <Burger></Burger>
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
