import styled, { css } from "styled-components"
import { Link } from "gatsby"
import { colors, sizes } from "../../../../../constants"

const ContainerStyle = css`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-decoration: none;
  font-size: 30px;
  padding-left: 50px;
`

/** containers */
export const Container = styled.div`
  ${ContainerStyle};
  ${props =>
    props.list === "true" &&
    css`
      padding-top: 50px;
    `}
  ${props =>
    props.first === "yes" &&
    css`
      padding-top: 75px;
    `}
`
export const LinkContainer = styled(Link)`
  ${ContainerStyle};
  background: white;
`

/** other items */

export const Text = styled.p`
  color: white;
  margin: 0;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  ${props =>
    props.link &&
    css`
      color: ${colors.lightgray};
    `}
`
export const List = styled.ul`
  padding: 0;
  width: 100%;
  display: grid;
  grid-gap: 25px;
  height: 100%;
`
export const ListItem = styled.a`
  text-decoration: none;
  color: white;
  background: white;
  display: block;
  margin-left: -50px;
`
export const ListItemText = styled.p`
  margin: 0;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  color: ${colors.lightgray};
  padding-left: 50px;
`
