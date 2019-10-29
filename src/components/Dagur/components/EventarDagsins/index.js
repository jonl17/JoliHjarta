import React from "react"
import { Container, Title, BTN, EventText, Anchor } from "./Styled"
import { connect } from "react-redux"
import slugify from "slugify"

const EventarDagsins = ({ eventar, selectedDay: { title } }) => {
  return (
    <>
      <Title>viðburðir dagsins</Title>
      <Container>
        {eventar.map((event, index) => (
          <BTN key={index}>
            <Anchor to={"/" + slugify(title)}>
              <EventText> {event}</EventText>
            </Anchor>
          </BTN>
        ))}
      </Container>
    </>
  )
}

const mapStateToProps = state => ({
  selectedDay: state.reducer.selectedDay,
})

export default connect(mapStateToProps)(EventarDagsins)
