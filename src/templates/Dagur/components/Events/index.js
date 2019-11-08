import React from "react"
import { Container, Title, EventTable } from "./Styled"
import Event from "./components/Event"

const Events = ({ events, title }) => {
  return (
    <Container>
      <Title>Viðburðir {title}</Title>
      <EventTable>
        {events.map((vidburdur, index) => (
          <Event vidburdur={vidburdur} key={index}></Event>
        ))}
      </EventTable>
    </Container>
  )
}

export default Events
