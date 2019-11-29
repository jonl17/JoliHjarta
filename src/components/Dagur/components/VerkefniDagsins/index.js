import React from "react"
import { Box, Title, Texti } from "./Styled"
import Takki from "../../../Takki"
import { connect } from "react-redux"

const VerkefniDagsins = ({ platform }) => {
  return platform === `simi` ? (
    <Takki
      slug={"/sendu-inn-efni/"}
      type={"link"}
      text="Senda inn efni"
    ></Takki>
  ) : (
    <Box>
      <Title>Verkefni dagsins</Title>
      <Texti>
        Ut verrovit volupti omnit eum dolupta dolupti a consene sseque et
        fugiassi re nonet eumetur aut as esto tem sus aboratias doluptatist
        audaestis poste conse num laborio quasit reri blamet ad qui ut lique
      </Texti>
      <Takki
        slug={"/sendu-inn-efni/"}
        type={"link"}
        text="Senda inn efni"
      ></Takki>
    </Box>
  )
}

const mapStateToProps = state => ({
  platform: state.reducer.platform,
})

export default connect(mapStateToProps)(VerkefniDagsins)
