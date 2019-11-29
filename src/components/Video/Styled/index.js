import styled, { css } from "styled-components"

export const Container = styled.div`
  position: fixed;
  box-sizing: border-box;
  z-index: 20;
  transition: 0.1s ease-in-out;
  width: 100%;
  height: ${props => props.open};
  background: black;
  border: 8px solid white;
`
export const Player = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: 0.3s;
  ${props =>
    props.platform === `simi` &&
    css`
      ${props =>
        props.open === `100%` &&
        css`
          height: auto;
          top: 100px;
        `}
    `}
  margin: auto;
`
export const Source = styled.source``
