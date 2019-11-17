import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { Container, Image } from "./Styled"
import { connect } from "react-redux"
import { makeItSnow } from "../../state/action"

const Mani = ({ dispatch }) => (
  <StaticQuery
    query={graphql`
      {
        file(base: { eq: "mani.png" }) {
          childImageSharp {
            fixed(height: 150, traceSVG: { color: "white" }) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Container>
        <Image
          onClick={() => dispatch(makeItSnow())}
          fixed={data.file.childImageSharp.fixed}
        ></Image>
      </Container>
    )}
  ></StaticQuery>
)

export default connect()(Mani)
