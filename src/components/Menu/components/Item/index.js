import React from "react"
import { Container, Text, LinkContainer, EmailContainer } from "./Styled"
import { useSelector, useDispatch } from "react-redux"
import { selectCalenderDay } from "../../../../state/action"
import Dropdown from "./components/Dropdown"

const Item = ({ nafn, nohover, type, slug }) => {
  const todaysCalenderDay = useSelector(
    state => state.reducer.todaysCalenderDay
  )
  const dispatch = useDispatch()
  return type === `link` ? (
    nafn === `Viðburðir` ? (
      <LinkContainer
        onClick={() => dispatch(selectCalenderDay(todaysCalenderDay))}
        to={nafn === `Viðburðir` ? todaysCalenderDay + slug : slug}
        nohover={nohover}
      >
        <Text>{nafn}</Text>
      </LinkContainer>
    ) : (
      <LinkContainer to={slug} nohover={nohover}>
        <Text>{nafn}</Text>
      </LinkContainer>
    )
  ) : type === `mail` ? (
    <EmailContainer
      nohover={nohover}
      target="_blank"
      href={"mailto:jolihjartarvk@gmail.com"}
    >
      <Text>{nafn}</Text>
    </EmailContainer>
  ) : (
    <Container nafn={nafn} dropdown nohover={nohover}>
      {type !== `burg` ? <Dropdown nafn={nafn}></Dropdown> : ""}
      <Text home={nafn === `Jól í hjarta` ? "true" : "false"}>{nafn}</Text>
    </Container>
  )
}

export default Item
