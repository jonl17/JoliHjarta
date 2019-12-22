import React from "react"
import PlaySVG from "../../../../../static/myndir/svgs/play-circle-solid.svg"
import "./index.css"
import styled from "styled-components"
import { connect } from "react-redux"
import { triggerVideoFullscreen } from "../../../../state/action"
import Img from "gatsby-image"
import { graphql, StaticQuery } from "gatsby"

const Container = styled.div`
  position: relative;
  object-fit: cover;
  width: 100%;
  height: 250px;
  color: white;
  margin: auto;
  display: grid;
  background: white;
  grid-area: video;
  &&:hover {
    cursor: pointer;
  }
`
const Image = styled(Img)`
  position: absolute;
  height: 100%;
  width: 100%;
`

const GetThumbnail = () => (
  <StaticQuery
    query={graphql`
      {
        file(
          childImageSharp: { fluid: { originalName: { eq: "preview.jpg" } } }
        ) {
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
    `}
    render={data => <Image fluid={data.file.childImageSharp.fluid}></Image>}
  ></StaticQuery>
)

const PlayBTN = ({ dispatch, selectedDay: { vidjo } }) => {
  return (
    <Container onClick={() => dispatch(triggerVideoFullscreen())}>
      {vidjo.thumbnail !== null ? ( // tries to get special thumbnails
        <Image fluid={vidjo.thumbnail.childImageSharp.fluid}></Image>
      ) : (
        // falls back on the default
        GetThumbnail()
      )}
      <PlaySVG></PlaySVG>
    </Container>
  )
}

const mapStateToProps = state => ({
  selectedDay: state.reducer.selectedDay,
})

export default connect(mapStateToProps)(PlayBTN)
