import React from "react"
import { Box, Title, Texti } from "./Styled"
import Takki from "../../../Takki"
import { connect } from "react-redux"
import { graphql, StaticQuery } from "gatsby"

const getVerkefni = (dags, counter = 0, dispatch) => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/content/verkefni-dagsins/" } }
        ) {
          nodes {
            frontmatter {
              title
              lysing
              dagsetning
            }
          }
        }
      }
    `}
    render={data =>
      data.allMarkdownRemark.nodes.map((item, index) =>
        item.frontmatter.dagsetning === dags && counter <= 1
          ? (counter++,
            (
              <Box key={index}>
                <Title>{item.frontmatter.title}</Title>
                <Texti>{item.frontmatter.lysing}</Texti>
                <Takki
                  type={"link"}
                  slug={"/sendu-inn-efni"}
                  text="Senda inn efni"
                ></Takki>
              </Box>
            ))
          : ""
      )
    }
  ></StaticQuery>
)

const VerkefniDagsins = ({ platform, dagsetning, dispatch }) => {
  return getVerkefni(dagsetning, 0, dispatch)
}

const mapStateToProps = state => ({
  platform: state.reducer.platform,
})

export default connect(mapStateToProps)(VerkefniDagsins)
