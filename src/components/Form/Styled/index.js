import styled from "styled-components"
import { sizes, colors, ButtonStyle } from "../../../constants"

export const Submit = styled.input`
  ${ButtonStyle};
`

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
`
export const Formid = styled.form`
  margin: auto;
  box-sizing: border-box;
  padding: 25px;
`
export const Label = styled.label``
export const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  color: ${colors.blue};
  box-sizing: border-box;
  &&::-webkit-file-upload-button {
    visibility: hidden;
  }
  &&::before {
    content: "Veldu skrá";
    display: inline-block;
    background: white;
    color: ${colors.blue};
    border: 4px solid white;
    padding: 5px 8px;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    cursor: pointer;
    font-size: ${sizes.paraMed};
  }
`
export const TextInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  font-size: ${sizes.paraMed};
  &&:focus {
    background: ${colors.blue};
    color: white;
  }
  border-color: white;
  &&:not(:placeholder-shown) {
  }
`
export const Text = styled.p`
  font-size: ${sizes.paraMed};
`
