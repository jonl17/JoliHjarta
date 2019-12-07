import React from "react"
import { connect } from "react-redux"
import Borgin from "../components/Borgin"
import Snjokoma from "../components/Snjokoma"
import Dagur from "../components/Dagur"
import Burger from "../components/Burger"
import Mani from "../components/Mani"
import { graphql } from "gatsby"
import { getAllDaysInfo } from "../state/action"
import Menu from "../components/Menu"

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
      console.log(weather.lysing)
    }
    return (
      <>
        <Menu></Menu>
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
  senduInnEfniOpen: state.reducer.senduInnEfniOpen,
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
              thumbnail {
                childImageSharp {
                  fluid(
                    traceSVG: {
                      color: "rgba(63, 104, 196, 1)"
                      turnPolicy: TURNPOLICY_MINORITY
                      blackOnWhite: false
                    }
                  ) {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default connect(mapStateToProps)(index)
