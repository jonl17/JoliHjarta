import React from "react"
import { Helmet } from "react-helmet"
import Favicon from "./mani.png"

const SEO = () => {
  return (
    <Helmet title={"Jól í hjarta"}>
      {"Jól í hjarta" && <meta name="title" content="Jón í hjarta"></meta>}
      <meta
        name="description"
        content={"Jóladagatal í miðborg Reykjavíkur"}
      ></meta>
      {"Jól í hjarta" && <meta property="og:title" content={"Jól í hjarta"} />}
      {"Jóladagatal í miðborg Reykjavíkur" && (
        <meta
          property="og:description"
          content={"Jóladagatal í miðborg Reykjavíkur"}
        />
      )}
      {"Jól, jóladagatal, Reykjavík" && (
        <meta
          name="keywords"
          content={"Jól í hjarta, jóladagatal, Reykjavík"}
        />
      )}
      <link sizes="32x32" href={Favicon} rel="icon" type="image/png"></link>
    </Helmet>
  )
}

export default SEO
