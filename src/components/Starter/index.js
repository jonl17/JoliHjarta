import React from "react"
import { connect } from "react-redux"
import { setDevice, setPlatform } from "../../state/action"

class Starter extends React.Component {
  constructor(props) {
    super(props)
    this.callBack = this.callBack.bind(this)
  }
  componentDidMount() {
    this.callBack()
    window.addEventListener("resize", this.callBack)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.callBack)
  }
  callBack() {
    const { dispatch } = this.props
    dispatch(setDevice(window.innerWidth))
    dispatch(setPlatform(window.innerWidth))
  }
  render() {
    return <></>
  }
}

export default connect()(Starter)
