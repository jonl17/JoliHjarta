import styled, { css } from "styled-components"
import { colors } from "../../../../../constants"
import { Link } from "gatsby"

const ContainerStyle = css`
  position: relative;
  height: 100%;
  width: 100%;
  display: grid;
  color: white;
  transition: 0.1s;
  text-decoration: none;
  overflow: hidden;
  ${props =>
    props.nohover === "false" &&
    css`
      &&:hover {
        overflow: visible;
        cursor: pointer;
        background: white;
        color: ${colors.lightgray};
        ${props =>
          props.dropdown &&
          css`
            ${props =>
              props.nafn === `Hlekkir` &&
              css`
                height: 250px;
                padding-right: 100px;
              `}
            ${props =>
              props.nafn === `Um okkur` &&
              css`
                height: 525px;
                padding-right: 400px;
              `}
          `}
      }
    `}
`

/** dropdown container */
export const Container = styled.div`
  ${ContainerStyle};
`
/** línk container */
export const LinkContainer = styled(Link)`
  ${ContainerStyle};
`
/** email container */
export const EmailContainer = styled.a`
  ${ContainerStyle};
`

export const Text = styled.p`
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  text-align: center;
  margin-top: 28px;
  ${props =>
    props.home === "true" &&
    css`
      font-size: 20px;
      margin-top: 24px;
    `}
`
