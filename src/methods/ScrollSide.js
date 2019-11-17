import React from "react"
import HorizontalScroll from "react-scroll-horizontal"

const ScrollToSide = ({ children }) => {
  return (
    <HorizontalScroll
    //    config={{ stiffness: int, damping: int }}
    //   className={string}
    //  animValues={int}
    >
      {children}
      <div style={{ width: "1000px" }}></div>
    </HorizontalScroll>
  )
}

export default ScrollToSide
