import React from "react"
import { Provider } from "react-redux"
import { createStore as createThisStore } from "redux"
import rootReducer from "./src/state/index"
import { GlobalStyle } from "./src/components/GlobalStyle"
import Wrap from "./src/components/Wrap"
import Starter from "./src/components/Starter"
import Client from "./src/service/client"

const createStore = () => createThisStore(rootReducer)

export const wrapRootElement = ({ element }) => {
  return (
    <Provider store={createStore()}>
      <Wrap>
        <GlobalStyle></GlobalStyle>
        <Client></Client>
        <Starter></Starter>
        {element}
      </Wrap>
    </Provider>
  )
}
