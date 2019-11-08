import React from "react"
import { Grid, Container, Desember } from "./Styled"
import Day from "./components/Day"
import { connect } from "react-redux"

const Days = []
for (var i = 0; i < 24; i++) {
  Days[i] = i + 1
}

const Calender = () => {
  return (
    <Container>
      <Desember>Desember</Desember>
      <Grid>
        {Days.map((item, index) => (
          <Day selected={"no"} key={index} number={item}></Day>
        ))}
      </Grid>
    </Container>
  )
}

const mapStateToProps = state => ({
  selectedDay: state.reducer.selectedDay,
})

export default connect(mapStateToProps)(Calender)
