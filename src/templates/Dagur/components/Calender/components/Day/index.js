import React from "react"
import { Box, Number } from "./Styled"

const Day = ({ number, selected }) => {
  return (
    <Box selected={selected}>
      <Number>{number}</Number>
    </Box>
  )
}

export default Day
