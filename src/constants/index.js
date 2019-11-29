import styled, { css } from "styled-components"
import { Link } from "gatsby"

export const margins = {
  xSmall: "16px",
  small: "32px",
  large: "64px",
  xLarge: "128px",
}
export const layer = {
  zero: 10, // closest
  one: 8,
  two: 6,
  kirkja: 0,
  borg: 1,
  hus: 2,
}
export const colors = {
  darkgray: "#797979",
  gray: "#797979",
  blue: "rgba(63, 104, 196, 1)",
  boxgray: "#C4C4C4",
  lightgray: "#E5E5E5",
  hover: "#F37A7E",
}
export const sizes = {
  line: "6px",
  paraSmall: "20px",
  paraMed: "25px",
  paraLarge: "35px",
  paraXlarge: "70px",
}

const ButtonStyle = css`
  font-size: ${sizes.paraSmall};
  background: ${colors.blue};
  box-sizing: border-box;
  box-shadow: 1px 1.5px 1.5px 1px lightgray;
  padding: 10px;
  display: flex;
  font-feature-settings: "pnum" on, "onum" on;
  &&:hover {
    cursor: pointer;
  }
  color: white;
  margin: auto;
  min-width: 200px;
  text-decoration: none;
  font-weight: bold;
`

export const Button = styled.div`
  ${ButtonStyle};
`
export const LinkButton = styled(Link)`
  ${ButtonStyle};
`

// popup window
export const Container = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: ${layer.zero};
`
export const PopupGluggi = styled.div`
  position: relative;
  height: auto;
  width: 60%;
  max-width: 750px;
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
  background: ${colors.blue};
  border: 10px solid white;
  box-sizing: border-box;
  box-shadow: 15px 15px 10px rgba(0, 0, 0, 0.25);
  color: white;
  display: ${props => props.display};
`
