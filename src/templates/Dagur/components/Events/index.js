import React from "react"
import { Container, Title } from "./Styled"

const Events = ({ events, title }) => {
  return (
    <>
      <Title>Viðburðir {title}</Title>
      <Container>
        {events.map((event, index) => (
          <p key={index} style={{ fontSize: "20px" }}>
            {event.node.frontmatter.title +
              ", klukkan " +
              event.node.frontmatter.klukkan}
          </p>
        ))}
      </Container>
    </>
  )
}

export default Events
