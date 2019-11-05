import React from "react"
import { connect } from "react-redux"
import { Container, PopupGluggi } from "../../../../constants"
import ExitBTN from "../../../../components/ExitBTN"
import { triggerEventPopup } from "../../../../state/action"
import {
  Title,
  InfoContainer,
  Klukkan,
  Hvar,
  Image,
  DirectionBox,
  Lysing,
} from "./Styled"
import { graphql, StaticQuery } from "gatsby"

const GetTempPic = () => (
  <StaticQuery
    query={graphql`
      {
        file(name: { eq: "temppic" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Image fluid={data.file.childImageSharp.fluid}></Image>}
  ></StaticQuery>
)

const EventPopup = ({ eventPopup, device, selectedEvent, dispatch }) => {
  console.log(selectedEvent)
  return (
    <Container
      display={
        eventPopup === "open" && selectedEvent !== undefined ? "flex" : "none"
      }
    >
      {selectedEvent !== undefined ? (
        <PopupGluggi device={device}>
          <ExitBTN
            click={() => dispatch(triggerEventPopup("closed"))}
          ></ExitBTN>
          <InfoContainer>
            <Title>{selectedEvent.title}</Title>
            <DirectionBox>
              <Klukkan>{selectedEvent.klukkan}</Klukkan>
              <Hvar>Nesvellir 8B</Hvar>
            </DirectionBox>
          </InfoContainer>
          {GetTempPic()}
          <Lysing>{selectedEvent.lysing}</Lysing>
        </PopupGluggi>
      ) : (
        <></>
      )}
    </Container>
  )
}

const mapStateToProps = state => ({
  eventPopup: state.reducer.eventPopup,
  selectedEvent: state.reducer.selectedEvent,
  device: state.reducer.device,
})

export default connect(mapStateToProps)(EventPopup)
