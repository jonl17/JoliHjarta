import React from "react"

class Success extends React.Component {
  componentDidMount() {
    if (window !== undefined) {
      window.location = "/"
    }
  }
  render() {
    return <div>Takk fyrir!</div>
  }
}

export default Success
