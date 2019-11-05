import styled from "styled-components"
import { sizes, margins } from "../../../../../constants"
import Img from "gatsby-image"

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const Title = styled.p`
  font-size: ${sizes.paraLarge};
  font-weight: bold;
  text-align: center;
  margin: ${margins.xSmall} ${margins.xSmall} 0 ${margins.xSmall};
`
export const DirectionBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`
export const Klukkan = styled.p`
  font-weight: bold;
  text-align: right;
  padding-right: ${margins.xSmall};
  font-size: ${sizes.paraSmall};
  margin: 0;
`
export const Hvar = styled.p`
  text-align: left;
  width: 100%;
  font-size: ${sizes.paraSmall};
  margin: 0;
`
export const Image = styled(Img)`
  height: 100%;
  width: 100%;
  max-height: 275px;
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
`
export const Lysing = styled.p`
  box-sizing: border-box;
  padding: 0 ${margins.large} 0 ${margins.large};
  font-size: ${sizes.paraSmall};
`
