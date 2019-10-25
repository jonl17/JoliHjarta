import React from "react"
import { connect } from "react-redux"
import Borgin from "../components/Borgin"
import Snjokoma from "../components/Snjokoma"
import Dagur from "../components/Dagur"
import Burger from "../components/Burger"
import { graphql } from "gatsby"
import { getAllDaysInfo } from "../state/action"

class index extends React.Component {
  componentDidMount() {
    const {
      dispatch,
      data: {
        allMarkdownRemark: { edges: allInfo },
      },
    } = this.props
    /** register all days info available */
    dispatch(getAllDaysInfo(allInfo))
  }
  render() {
    const { weather } = this.props
    if (weather.lysing !== undefined)
      console.log("Veðurlýsing: " + weather.lysing)

    if (weather.hiti !== undefined) console.log("Hiti: " + weather.hiti)
    return (
      <>
        <Burger></Burger>
        <Snjokoma></Snjokoma>
        <Borgin></Borgin>
        <Dagur></Dagur>
      </>
    )
  }
}

const mapStateToProps = state => ({
  weather: state.reducer.weather,
})

export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: frontmatter___id, order: ASC }) {
      edges {
        node {
          frontmatter {
            title
            type
            id
            video {
              title
              url {
                publicURL
              }
            }
            eventar {
              title
              timi
            }
          }
        }
      }
    }
  }
`

export default connect(mapStateToProps)(index)
