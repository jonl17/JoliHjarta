import styled from "styled-components"
import Img from "gatsby-image"
import { sizes } from "../../../../../../../constants"

export const Box = styled.div`
  &&:hover {
    cursor: pointer;
  }
  position: relative;
  display: grid;
  grid-template-rows: 1fr 0.5fr;
`
export const Image = styled(Img)`
  width: 100%;
`
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 10px 0 10px 0;
`
export const Title = styled.p`
  margin: 0;
  font-size: ${sizes.paraSmall};
`
export const Klukkan = styled.p`
  margin: 0;
  font-weight: bold;
`
export const Hvar = styled.div`
  margin: 0;
`
