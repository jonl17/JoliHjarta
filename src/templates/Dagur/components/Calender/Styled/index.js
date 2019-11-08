import styled from "styled-components"
import { margins, sizes } from "../../../../../constants"

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  margin: auto;
  position: fixed;
  right: 10%;
  top: 10%;
`
export const Grid = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: ${margins.xSmall};
  margin: 0 auto;
  grid-template-rows: repeat(8, 55px);
`
export const Desember = styled.p`
  margin: 0;
  display: inline-block;
  text-align: center;
  font-size: ${sizes.paraMed};
  padding-bottom: ${margins.xSmall};
  font-style: italic;
`
