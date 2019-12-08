import React from "react"
import {
  Container,
  Text,
  LinkContainer,
  EmailContainer,
  ExternalLink,
} from "./Styled"
import { connect } from "react-redux"
import { selectCalenderDay } from "../../../../state/action"
import Dropdown from "./components/Dropdown"

class Item extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      openDropdown: false,
    }
  }
  render() {
    const {
      todaysCalenderDay,
      platform,
      dispatch,
      nohover,
      item: { name, to, type },
    } = this.props
    return type === `link` ? (
      name === `Viðburðir` ? (
        <LinkContainer
          onClick={() => dispatch(selectCalenderDay(todaysCalenderDay))}
          to={name === `Viðburðir` ? todaysCalenderDay + to : to}
          nohover={nohover}
        >
          <Text platform={platform}>{name}</Text>
        </LinkContainer>
      ) : (
        <ExternalLink target="_blank" href={to} nohover={nohover}>
          <Text platform={platform}>{name}</Text>
        </ExternalLink>
      )
    ) : type === `mail` ? (
      <EmailContainer
        nohover={nohover}
        target="_blank"
        href={"mailto:jolihjartarvk@gmail.com"}
      >
        <Text platform={platform}>{name}</Text>
      </EmailContainer>
    ) : (
      <Container platform={platform} nafn={name} dropdown nohover={nohover}>
        {type !== `burg` ? (
          <Dropdown openMobile={this.state.openDropdown} nafn={name}></Dropdown>
        ) : (
          ""
        )}
        <Text
          onClick={() =>
            this.setState({
              openDropdown: !this.state.openDropdown,
            })
          }
          platform={platform}
          home={name === `Jól í hjarta` ? "true" : "false"}
        >
          {name}
        </Text>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  platform: state.reducer.platform,
  todaysCalenderDay: state.reducer.todaysCalenderDay,
})

export default connect(mapStateToProps)(Item)
