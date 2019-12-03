import styled, { css } from "styled-components"

export const Container = styled.div`
  overflow: hidden;
  position: fixed;
  box-sizing: border-box;
  z-index: 20;
  transition: 0.1s ease-in-out;
  width: 100%;
  height: ${props => props.open};
  background: black;
  display: flex;
  align-content: center;
  justify-content: center;
  ${props =>
    props.simi &&
    css`
      position: relative;
    `}
`
export const Player = styled.iframe`
  object-fit: contain;
  padding: 15px;
  box-sizing: border-box;
  z-index: 11;
  width: 100%;
  ${props =>
    props.simi &&
    css`
      display: none;
      ${props =>
        props.open === `yes` &&
        css`
          display: block;
        `}
    `}
`
export const Source = styled.source``
