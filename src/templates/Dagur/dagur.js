import React from "react"
import { graphql } from "gatsby"
import { Container, Grid } from "./Styled"
import Events from "./components/Events"
import Title from "./components/Title"
import EventPopup from "./components/EventPopup"
import Calender from "./components/Calender"
import CalenderMobile from "./components/CalenderMobile"
import { connect } from "react-redux"
import Takki from "../../components/Takki"
import { triggerCalenderWindow } from "../../state/action"

class Dagur extends React.Component {
  render() {
    const { data, pageContext, platform, dispatch } = this.props
    return (
      <Container platform={platform}>
        <Grid platform={platform}>
          <Title></Title>
          <Events
            events={data.allMarkdownRemark.edges}
            title={pageContext.frontmatter.title}
          ></Events>
          <EventPopup></EventPopup>
          <Calender></Calender>
        </Grid>
        {platform === `simi` ? (
          <>
            <CalenderMobile></CalenderMobile>
            <Takki
              click={() => dispatch(triggerCalenderWindow())}
              fixed
              text={"Desember"}
            ></Takki>
          </>
        ) : (
          <></>
        )}
      </Container>
    )
  }
}

/* Query for the events for the day */
export const query = graphql`
  query($dagsetning: String) {
    allMarkdownRemark(
      filter: {
        frontmatter: { hvenaer: { eq: $dagsetning } }
        fileAbsolutePath: { regex: "/events/" }
      }
      sort: { fields: frontmatter___klukkan }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            hvenaer
            klukkan
            hvar
            mynd {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

const mapStateToProps = state => ({
  platform: state.reducer.platform,
})

export default connect(mapStateToProps)(Dagur)
