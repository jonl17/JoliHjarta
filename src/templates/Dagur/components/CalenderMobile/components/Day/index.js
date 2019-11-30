import React from "react"
import { Box, Number } from "./Styled"
import { connect } from "react-redux"
import {
  selectCalenderDay,
  triggerCalenderWindow,
} from "../../../../../../state/action"

const dispatches = (dispatch, number) => {
  dispatch(selectCalenderDay(number))
  dispatch(triggerCalenderWindow())
}
const Day = ({ number, device, dispatch, selectedCalenderDay }) => {
  return (
    <>
      <Box
        device={device}
        onClick={() => dispatches(dispatch, number)}
        to={"/" + number + "desember"}
        selected={number === selectedCalenderDay ? "yes" : "no"}
      >
        {/** I might want to clean this path assigning a bit */}
        <Number>{number}</Number>
      </Box>
    </>
  )
}

const mapStateToProps = state => ({
  selectedCalenderDay: state.reducer.selectedCalenderDay,
  device: state.reducer.device,
})

export default connect(mapStateToProps)(Day)
