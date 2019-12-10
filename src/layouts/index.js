import React from "react"
import SEO from "../components/SEO"
import { GlobalStyle } from "../components/GlobalStyle"

const Layout = ({ children }) => {
  return (
    <>
      <SEO></SEO>
      <GlobalStyle></GlobalStyle>
      {children}
    </>
  )
}

export default Layout
