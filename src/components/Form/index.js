import React from "react"
import {
  Container,
  Formid,
  Label,
  Input,
  Button,
  Text,
  TextInput,
} from "./Styled"
import Takki from "../Takki"

const Form = () => {
  return (
    <Container>
      <Formid
        name="sendaInnEfni"
        method="POST"
        data-netlify="true"
        action="/"
        data-netlify-recaptcha="true"
      >
        <Text>
          <Label>Nafn:</Label>
        </Text>
        <TextInput type="text" name="nafn"></TextInput>
        <Input
          type="file"
          name="efni"
          placeholder="Skrá"
          accept="image/png, image/jpeg"
        ></Input>
        <div data-netlify-recaptcha="true"></div>
        <Text>
          <Takki text={"Senda inn"} type="submit"></Takki>
        </Text>
      </Formid>
    </Container>
  )
}

export default Form
