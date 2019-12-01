import React from "react"
import { Provider } from "react-redux"
import { createStore as createThisStore } from "redux"
import rootReducer from "./src/state/index"
import { GlobalStyle } from "./src/components/GlobalStyle"
import Wrap from "./src/components/Wrap"
import Client from "./src/service/client"
import Starter from "./src/components/Starter"
import SEO from "./src/components/SEO"

const createStore = () => createThisStore(rootReducer)

export const wrapRootElement = ({ element }) => {
  return (
    <Provider store={createStore()}>
      <>
        <Wrap>
          <GlobalStyle></GlobalStyle>
          <SEO></SEO>
          <Client></Client>
          <Starter></Starter>
          {element}
        </Wrap>
      </>
    </Provider>
  )
}
