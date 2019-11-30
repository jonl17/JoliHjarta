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

const Form = () => {
  return (
    <Container>
      {/*       
      <Formid
        name="nyttefni"
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
          <Submit name="submit" value="Senda inn" type="submit"></Submit>
        </Text>
      </Formid> */}
      <form name="contact" method="POST" data-netlify="true">
        <p>
          <label>
            Your Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Your Role:{" "}
            <select name="role[]" multiple>
              <option value="leader">Leader</option>
              <option value="follower">Follower</option>
            </select>
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message"></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
        <p>
          <input type="file" name="files"></input>
        </p>
      </form>
    </Container>
  )
}

export default Form
