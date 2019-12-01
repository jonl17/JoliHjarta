import styled from "styled-components"
import Img from "gatsby-image"
import { sizes } from "../../../../../../../constants"

export const Box = styled.div`
  &&:hover {
    cursor: pointer;
  }
  position: relative;
`
export const ImageContainer = styled.div`
  height: ${sizes.eventBox};
  width: ${sizes.eventBox};
  object-fit: cover;
`
export const Image = styled(Img)`
  height: 100%;
`
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 10px 0 10px 0;
`
export const Title = styled.p`
  font-family: "Montserrat", sans-serif;
  margin: 0;
  font-size: ${sizes.paraSmall};
  font-weight: 800;
`
export const Klukkan = styled.p`
  font-family: "Montserrat", sans-serif;
  margin: 0;
  font-weight: 600;
`
export const Hvar = styled.div`
  font-family: "Montserrat", sans-serif;
  margin: 0;
  font-weight: 600;
`
