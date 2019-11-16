import styled from "styled-components"

export const Container = styled.div`
  overflow-y: hidden;
  height: 100%;
  width: 100%;
  display: inline-block;
  position: absolute;
  perspective: 1px;
`
export const Background = styled.div`
  position: fixed;
  height: 80%;
  width: 100%;
  background: linear-gradient(
    0deg,
    white 0%,
    #fcee21 19%,
    #c9bd30 22.39%,
    #8c8142 45.4%,
    #5b5251 64.57%,
    #38305b 82.2%,
    #231c62 96.61%,
    #1b1464 100%
  );
`
