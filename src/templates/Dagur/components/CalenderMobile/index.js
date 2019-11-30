import React from "react"
import { Grid, Container, ExtraContainer } from "./Styled"
import Day from "./components/Day"
import { connect } from "react-redux"

const Days = []
for (var i = 0; i < 24; i++) {
  Days[i] = i + 1
}

const CalenderMobile = ({ device, calenderWindowOpen }) => {
  return calenderWindowOpen ? (
    <ExtraContainer>
      <Container>
        <Grid device={device}>
          {Days.map((item, index) => (
            <Day selected={"no"} key={index} number={item}></Day>
          ))}
        </Grid>
      </Container>
    </ExtraContainer>
  ) : (
    <></>
  )
}

const mapStateToProps = state => ({
  selectedDay: state.reducer.selectedDay,
  device: state.reducer.device,
  platform: state.reducer.platform,
  calenderWindowOpen: state.reducer.calenderWindowOpen,
})

export default connect(mapStateToProps)(CalenderMobile)
