import React, { useEffect } from "react"
import SEO from "../components/seo"

const IndexPage = () => {
  useEffect(() => {
    window.location.replace("https://redfish-project.gq");
  })
  return <SEO title="Home" />
}


export default IndexPage
