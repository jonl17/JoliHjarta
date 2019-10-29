import React from "react"
import { Container, Title, BTN, EventText } from "./Styled"

const EventarDagsins = ({ eventar }) => {
  console.log(eventar)
  return (
    <>
      <Title>viðburðir dagsins</Title>
      <Container>
        {eventar.map(event => (
          <BTN>
            {/*  <EventText bold>{event.timi} </EventText>*/}
            <EventText> {event}</EventText>
          </BTN>
        ))}
      </Container>
    </>
  )
}

export default EventarDagsins
