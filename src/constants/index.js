import styled from "styled-components"

export const margins = {
  small: "32px",
}
export const layer = {
  zero: 10, // closest
  one: 8,
  two: 6,
}
export const colors = {
  darkgray: "#6B6B59",
  gray: "#797979",
  lightgray: "#E5E5E5",
}
export const sizes = {
  line: "6px",
  paraSmall: "18px",
  paraMed: "25px",
  paraLarge: "35px",
}

export const Button = styled.div`
  font-size: ${sizes.paraSmall};
  background: white;
  box-sizing: border-box;
  box-shadow: 1px 1.5px 1.5spx 1px lightgray;
  border-radius: 43px;
  padding: 10px;
  display: flex;
  font-feature-settings: "pnum" on, "onum" on;
  &&:hover {
    cursor: pointer;
  }
`
