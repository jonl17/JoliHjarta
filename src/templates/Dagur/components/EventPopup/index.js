import React from "react"
import { connect } from "react-redux"
import ExitBTN from "../../../../components/ExitBTN"
import { triggerEventPopup } from "../../../../state/action"
import {
  PopupGluggi,
  CloseSensor,
  ImageContainer,
  Image,
  Texti,
  TextContent,
} from "./Styled"
import Banner from "./Banner"
import "./index.css"

const EventPopup = ({ eventPopup, platform, selectedEvent, dispatch }) => {
  return selectedEvent !== undefined ? (
    <>
      <CloseSensor
        onClick={() => dispatch(triggerEventPopup("closed"))}
        display={
          eventPopup === "open" && selectedEvent !== undefined
            ? "block"
            : "none"
        }
      ></CloseSensor>
      <PopupGluggi
        display={
          eventPopup === "open" && selectedEvent !== undefined ? "grid" : "none"
        }
        event
        platform={platform}
      >
        <ExitBTN
          tight
          click={() => dispatch(triggerEventPopup("closed"))}
        ></ExitBTN>
        <Banner event={selectedEvent.frontmatter}></Banner>
        <ImageContainer platform={platform}>
          {selectedEvent.frontmatter.mynd !== null ? (
            <Image
              fluid={selectedEvent.frontmatter.mynd.childImageSharp.fluid}
            ></Image>
          ) : (
            <></>
          )}
        </ImageContainer>
        <TextContent
          className="texta-content"
          dangerouslySetInnerHTML={{ __html: selectedEvent.html }}
        ></TextContent>
      </PopupGluggi>
    </>
  ) : (
    <></>
  )
}

const mapStateToProps = state => ({
  eventPopup: state.reducer.eventPopup,
  selectedEvent: state.reducer.selectedEvent,
  platform: state.reducer.platform,
})

export default connect(mapStateToProps)(EventPopup)
