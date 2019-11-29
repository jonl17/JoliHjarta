import styled, { css } from "styled-components"

export const Container = styled.div`
  position: fixed;
  box-sizing: border-box;
  z-index: 20;
  transition: 0.3s ease-in-out;
  width: 100%;
  height: ${props => props.open};
  background: black;
`
export const Player = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
  margin: auto;
`
export const Source = styled.source``
