import React from "react"
import { connect } from "react-redux"
import Borgin from "../components/Borgin"
import Snjokoma from "../components/Snjokoma"
import Dagur from "../components/Dagur"
import Burger from "../components/Burger"
import BurgerWindow from "../components/BurgerWindow"
import Mani from "../components/Mani"
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
    if (weather.lysing !== undefined) {
      console.log("Veðurlýsing er barasta: " + weather.lysing)
    }
    if (weather.hiti !== undefined) console.log(weather.hiti)
    return (
      <>
        <BurgerWindow></BurgerWindow>
        <Burger></Burger>
        <Mani></Mani>
        <Snjokoma></Snjokoma>
        <Borgin></Borgin>
        <Dagur></Dagur>
      </>
    )
  }
}

const mapStateToProps = state => ({
  weather: state.reducer.weather,
  device: state.reducer.device,
  platform: state.reducer.platform,
})

export const query = graphql`
  {
    allMarkdownRemark(
      sort: { fields: frontmatter___dagsetning, order: ASC }
      filter: { fileAbsolutePath: { regex: "/content/dagar/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            dagsetning
            vidjo {
              vidjotitill
              vidjourl
            }
          }
        }
      }
    }
  }
`

export default connect(mapStateToProps)(index)
