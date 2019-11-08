import styled from "styled-components"
import Img from "gatsby-image"
import { sizes } from "../../../../../../../constants"

export const Box = styled.div`
  width: 250px;
  height: 250px;
  &&:hover {
    cursor: pointer;
  }
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
