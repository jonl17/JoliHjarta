import React from "react"
import { Container, Formid, Label, Input, Button } from "./Styled"

const Form = () => {
  return (
    <Container>
      <Formid name="sendaInnEfni" method="POST" data-netlify="true">
        <Label>Nafn</Label>
        <Input type="text" name="nafn" placeholder="Nafn..."></Input>
        <Label>Settu in skrá</Label>
        <Input
          type="file"
          name="efni"
          placeholder="Skrá"
          accept="image/png, image/jpeg"
        ></Input>
        <Button type="submit">Senda inn</Button>
      </Formid>
    </Container>
  )
}

export default Form
