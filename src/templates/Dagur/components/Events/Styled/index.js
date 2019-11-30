import styled, { css } from "styled-components"
import { margins, sizes } from "../../../../../constants"

export const Title = styled.p`
  font-size: 35px;
  text-align: center;
  font-weight: bold;
  width: 100%;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  ${props =>
    props.platform === `simi` &&
    css`
      align-items: center;
    `}
`
export const EventTable = styled.div`
  display: grid;
  grid-gap: ${margins.small};
  top: 125px;

  grid-template-columns: repeat(
    auto-fit,
    minmax(${sizes.eventBox}, ${sizes.eventBox})
  );
`
