import React from "react"
import { Container, Title, EventTable } from "./Styled"
import Event from "./components/Event"
import { connect } from "react-redux"

const Events = ({ events, title, platform }) => {
  return (
    <Container platform={platform}>
      <Title>Viðburðir {title}</Title>
      <EventTable platform={platform}>
        {events.map((vidburdur, index) => (
          <Event vidburdur={vidburdur} key={index}></Event>
        ))}
      </EventTable>
    </Container>
  )
}

const mapStateToProps = state => ({
  platform: state.reducer.platform,
})

export default connect(mapStateToProps)(Events)
