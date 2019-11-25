import React from "react"
import { Container } from "./Styled"
import { connect } from "react-redux"
import { getTodaysCalenderDay } from "../../state/action"

class Wrap extends React.Component {
  componentDidMount() {
    this.getToday(this.props.dispatch)
  }

  getToday(dispatch) {
    let date = new Date()
    let today = date.getDate()
    dispatch(getTodaysCalenderDay(today))
  }

  render() {
    return <Container>{this.props.children}</Container>
  }
}

export default connect()(Wrap)
