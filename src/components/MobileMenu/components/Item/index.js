import React from "react"
import {
  Container,
  Text,
  LinkContainer,
  List,
  ListItem,
  ListItemText,
} from "./Styled"
import { selectCalenderDay } from "../../../../state/action"
import { useDispatch, useSelector } from "react-redux"

const Item = ({ item: { name, type, to, links } }) => {
  const dispatch = useDispatch()
  const todaysCalenderDay = useSelector(
    state => state.reducer.todaysCalenderDay
  )
  return type === `link` ? (
    /** link to another page */
    <LinkContainer
      onClick={() => dispatch(selectCalenderDay(todaysCalenderDay))}
      to={name === `Viðburðir` ? todaysCalenderDay + to : to}
    >
      <Text link>{name}</Text>
    </LinkContainer>
  ) : (
    /** does nothing */
    <Container
      first={name === `Jól í hjarta` ? "yes" : "no"}
      list={type === `list` ? "true" : "false"}
      target="_blank"
    >
      <Text>{name}</Text>
      {type === `list` ? (
        <List>
          {links.map((link, index) => (
            <ListItem key={index} href={link.url} target="_blank">
              <ListItemText>{link.name}</ListItemText>
            </ListItem>
          ))}
        </List>
      ) : (
        ""
      )}
    </Container>
  )
}

export default Item
