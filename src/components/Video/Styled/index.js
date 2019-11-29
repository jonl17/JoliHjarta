import styled, { css } from "styled-components"

export const Container = styled.div`
  position: relative;
  box-sizing: border-box;
  z-index: 20;
`
export const Player = styled.video`
  position: fixed;
  top: 0;
  left: 0;
  object-fit: cover;
  width: 100%;
  margin: auto;
  transition: 0.3s ease-in-out;
  height: ${props => props.open};
`
export const Source = styled.source``
