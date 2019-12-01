import styled, { css } from "styled-components"
import { margins, sizes } from "../../../../../../constants"

export const Container = styled.div``

export const Directions = styled.p`
  margin: auto;
  text-align: center;
  font-size: ${sizes.paraSmall};
  padding-top: 10px;
`
export const Klukkan = styled.span`
  padding-right: 5px;
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
`
export const Hvar = styled.span`
  padding-left: 5px;
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
`

export const Title = styled.p`
  font-size: ${sizes.paraLarge};
  font-weight: bold;
  text-align: center;
  margin: ${margins.xSmall} ${margins.large} 0 ${margins.large};
  ${props =>
    props.platform === `simi` &&
    css`
      margin: ${margins.small} ${margins.xSmall} 0 ${margins.xSmall};
    `}
`
