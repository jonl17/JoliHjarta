import React from "react"
import {
  Container,
  Text,
  LinkContainer,
  EmailContainer,
  ExternalLink,
} from "./Styled"
import { useSelector, useDispatch } from "react-redux"
import { selectCalenderDay } from "../../../../state/action"
import Dropdown from "./components/Dropdown"

const Item = ({ nafn, nohover, type, slug }) => {
  const todaysCalenderDay = useSelector(
    state => state.reducer.todaysCalenderDay
  )
  const platform = useSelector(state => state.reducer.platform)
  const dispatch = useDispatch()
  return type === `link` ? (
    nafn === `Viðburðir` ? (
      <LinkContainer
        onClick={() => dispatch(selectCalenderDay(todaysCalenderDay))}
        to={nafn === `Viðburðir` ? todaysCalenderDay + slug : slug}
        nohover={nohover}
      >
        <Text platform={platform}>{nafn}</Text>
      </LinkContainer>
    ) : (
      <ExternalLink target="_blank" href={slug} nohover={nohover}>
        <Text platform={platform}>{nafn}</Text>
      </ExternalLink>
    )
  ) : type === `mail` ? (
    <EmailContainer
      nohover={nohover}
      target="_blank"
      href={"mailto:jolihjartarvk@gmail.com"}
    >
      <Text platform={platform}>{nafn}</Text>
    </EmailContainer>
  ) : (
    <Container platform={platform} nafn={nafn} dropdown nohover={nohover}>
      {type !== `burg` ? <Dropdown nafn={nafn}></Dropdown> : ""}
      <Text
        platform={platform}
        home={nafn === `Jól í hjarta` ? "true" : "false"}
      >
        {nafn}
      </Text>
    </Container>
  )
}

export default Item
