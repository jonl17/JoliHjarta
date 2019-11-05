import styled, { css } from "styled-components"

export const margins = {
  xSmall: "16px",
  small: "32px",
  large: "64px",
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
  paraSmall: "20px",
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

// popup window
export const Container = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: ${props => props.display};
  flex-direction: column;
  z-index: ${layer.zero};
`
export const PopupGluggi = styled.div`
  position: relative;
  height: 65%;
  min-height: 550px;
  width: 50%;
  ${props =>
    props.device === "tablet" &&
    css`
      width: 75%;
    `}
  ${props =>
    props.device === "mobile" &&
    css`
      width: 90%;
    `}
  margin: auto;
  background: #e5e5e5;
  border: 10px solid #797979;
  box-sizing: border-box;
  box-shadow: 15px 15px 10px rgba(0, 0, 0, 0.25);
  display: grid;
`
