import React from "react"
import { Container } from "./Styled"
import Day from "./components/Day"
import { connect } from "react-redux"
import { generateSlugFromDate } from "../../../../methods"

const Days = []
for (var i = 0; i < 24; i++) {
  Days[i] = i + 1
}

const findSelectedDay = (date, calenderDay) => {
  return parseInt(date.replace("12/", "")) === calenderDay
}

const Calender = (props, { selectedDay }) => {
  console.log(props)
  return (
    <Container>
      {Days.map((item, index) => (
        <Day selected={"no"} key={index} number={item}></Day>
      ))}
    </Container>
  )
}

const mapStateToProps = state => ({
  selectedDay: state.reducer.selectedDay,
})

export default connect(mapStateToProps)(Calender)
