import React from "react"
import { Container, Title, EventTable } from "./Styled"
import Event from "./components/Event"
import { connect } from "react-redux"

const Events = ({ events, title, device }) => {
  return (
    <Container>
      <Title>Viðburðir {title}</Title>
      <EventTable device={device}>
        {events.map((vidburdur, index) => (
          <Event vidburdur={vidburdur} key={index}></Event>
        ))}
      </EventTable>
    </Container>
  )
}

const mapStateToProps = state => ({
  device: state.reducer.device,
})

export default connect(mapStateToProps)(Events)
