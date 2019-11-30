import styled, { css } from "styled-components"
import { margins, sizes } from "../../../../../constants"

export const ExtraContainer = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: lightgray;
`
export const Container = styled.div`
  display: grid;
  margin: auto;
  height: 100%;
`
export const Grid = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: ${margins.xSmall};
  margin: auto;

  /** scaling */
  grid-template-rows: repeat(8, 45px);
  ${props =>
    props.device === `browserLarge` &&
    css`
      grid-template-rows: repeat(8, 55px);
    `}
`
export const Desember = styled.p`
  margin: 0;
  display: inline-block;
  text-align: center;
  font-size: ${sizes.paraMed};
  padding-bottom: ${margins.xSmall};
  font-style: italic;
`
