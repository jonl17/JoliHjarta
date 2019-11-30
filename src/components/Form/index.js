import React from "react"
import {
  Container,
  Formid,
  Label,
  Input,
  Submit,
  Text,
  TextInput,
} from "./Styled"
import Takki from "../Takki"

const Form = () => {
  return (
    <Container>
      <Formid
        name="sendaInnEfni"
        method="post"
        action="/success"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <Text>
          <Label>Nafn:</Label>
        </Text>
        <TextInput placeholder=" " required type="text" name="nafn"></TextInput>
        <Input
          required
          type="file"
          name="efni"
          placeholder="Skrá"
          accept="image/png, image/jpeg"
        ></Input>
        <div data-netlify-recaptcha="true"></div>
        <Text>
          <Submit value="Senda inn" type="submit"></Submit>
        </Text>
      </Formid>
    </Container>
  )
}

export default Form
