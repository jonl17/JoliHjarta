import styled, { css } from "styled-components"
import { colors } from "../../../../../constants"
import { Link } from "gatsby"

const ContainerStyle = css`
  position: relative;
  height: auto;
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
  ${props =>
    props.platform === `simi` &&
    css`
      display: none;
      overflow: visible;
      padding: 0;
      grid-template-rows: auto auto;
      grid-template-areas:
        "title"
        "content";
      ${props =>
        props.nafn === `Jól í hjarta` &&
        css`
          display: block;
        `}
    `}
`
/** línk container */
export const LinkContainer = styled(Link)`
  ${ContainerStyle};
`
export const ExternalLink = styled.a`
  ${ContainerStyle};
`
/** email container */
export const EmailContainer = styled.a`
  ${ContainerStyle};
`

export const Text = styled.p`
  font-size: 16px;
  ${props =>
    props.platform === `simi` &&
    css`
      font-size: 45px;
    `}
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  margin-top: 28px;
  ${props =>
    props.home === "true" &&
    css`
      font-size: 20px;
      margin-top: 24px;
    `}
  text-align: center;
  ${props =>
    props.platform === `simi` &&
    css`
      text-align: left;
      padding-left: 50px;
    `}
`
