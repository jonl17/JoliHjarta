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
      <div style={{ width: "100%", textAlign: "center" }}>
        <h1>Þessi síðu er í vinnslu...</h1>
        <h1>Hiti: {weather.hiti}</h1>
        <h1>{weather.lysing}</h1>
      </div>
    </>
  )
}

const mapStateToProps = state => ({
  weather: state.reducer.weather,
})

export default connect(mapStateToProps)(index)
