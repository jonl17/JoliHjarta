import React from "react"
import { Helmet } from "react-helmet"
import { graphql, StaticQuery } from "gatsby"

const SEO = ({
  data: {
    site: {
      siteMetadata: { nafn: title, about: description, url, image, favicon },
    },
  },
}) => {
  return (
    <>
      <Helmet title={title}>
        <meta name="title" content={title}></meta>
        <meta name="description" content={description} />
        <meta name="image" content={image} />
        {url && <meta property="og:url" content={url} />}
        {title && <meta property="og:title" content={title} />}
        {description && (
          <meta property="og:description" content={description} />
        )}
        {image && <meta property="og:image" content={image} />}
        <link sizes="32x32" href={favicon} rel="icon" type="image/png"></link>
      </Helmet>
    </>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            nafn
            about
            url
            image
            favicon
          }
        }
      }
    `}
    render={data => <SEO data={data} {...props}></SEO>}
  ></StaticQuery>
)
