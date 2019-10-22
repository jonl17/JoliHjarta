import styled, { keyframes, css } from "styled-components"

const makeitsnowOne = keyframes`
  0% {
    background-position: 0px -100px;
  }
  100% {
    background-position: 0px 150vh;
  }
`

export const Container = styled.div`
  opacity: ${props => props.display};
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  transition: 3s;
`
export const Snow = styled.div`
  background: url(${props => props.image});
  background-repeat: repeat;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  ${props =>
    props.one &&
    css`
      animation: ${makeitsnowOne} 10s infinite linear;
    `}
`
