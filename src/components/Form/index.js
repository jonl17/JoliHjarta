import React from "react"
import { Wrapper, Iframe } from "./Styled"
import { connect } from "react-redux"

const Form = ({ platform }) => {
  return (
    <Wrapper platform={platform}>
      <Iframe src="https://script.google.com/macros/s/AKfycbxFop40dXC6gF7tKAoF1s2OXTlr1dJkddRUPuamRUtcpPyPilIa/exec"></Iframe>
    </Wrapper>
  )
}

const mapStateToProps = state => ({
  platform: state.reducer.platform,
})

export default connect(mapStateToProps)(Form)
