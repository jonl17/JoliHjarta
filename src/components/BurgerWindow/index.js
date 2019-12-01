import React from "react"
import { Container, ContainerMobile } from "./Styled"
import ExitBTN from "../ExitBTN"
import MenuItems from "./components/MenuItems"
import HomeBTN from "./components/HomeBTN"
import SubMenuItems from "./components/SubMenuItems"
import { connect } from "react-redux"
import { triggerBurgerWindow } from "../../state/action"

const Burgerwindow = ({ burgerWindow, dispatch, platform }) => {
  if (platform === `simi` || platform === `spjaldtolva`) {
    return (
      <ContainerMobile
        platform={platform}
        opacity={burgerWindow === "open" ? 1 : 0}
      >
        <ExitBTN
          tight
          click={() => dispatch(triggerBurgerWindow("closed"))}
        ></ExitBTN>
        <MenuItems></MenuItems>
        <HomeBTN></HomeBTN>
        <SubMenuItems></SubMenuItems>
      </ContainerMobile>
    )
  } else {
    return (
      // it's a navbar!
      <Container platform={platform} opacity={burgerWindow === "open" ? 1 : 0}>
        <ExitBTN
          tight
          click={() => dispatch(triggerBurgerWindow("closed"))}
        ></ExitBTN>
        <HomeBTN nav></HomeBTN>
        <MenuItems nav></MenuItems>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  burgerWindow: state.reducer.burgerWindow,
  platform: state.reducer.platform,
})

export default connect(mapStateToProps)(Burgerwindow)
