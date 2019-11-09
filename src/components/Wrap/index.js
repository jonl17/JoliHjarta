import React from "react"
import { Container } from "./Styled"
import { connect } from "react-redux"
import { setDevice, getTodaysCalenderDay } from "../../state/action"

class Wrap extends React.Component {
  constructor(props) {
    super(props)
    this.callBack = this.callBack.bind(this)
  }
  componentDidMount() {
    this.callBack()
    window.addEventListener("resize", this.callBack)
    this.getToday(this.props.dispatch)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.callBack)
  }
  getToday(dispatch) {
    let date = new Date()
    let today = date.getDate()
    dispatch(getTodaysCalenderDay(today))
  }
  callBack() {
    const { dispatch } = this.props
    dispatch(setDevice(window.innerWidth))
  }
  render() {
    return <Container>{this.props.children}</Container>
  }
}

const mapStateToProps = state => ({
  device: state.reducer.device,
})

export default connect(mapStateToProps)(Wrap)
