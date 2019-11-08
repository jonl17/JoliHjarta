import React from "react"
import { Box, Number } from "./Styled"
import { connect } from "react-redux"
import { selectCalenderDay } from "../../../../../../state/action"

const Day = ({ number, selected, dispatch, selectedCalenderDay }) => {
  return (
    <>
      <Box
        onClick={() => dispatch(selectCalenderDay(number))}
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
})

export default connect(mapStateToProps)(Day)
