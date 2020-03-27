import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>About</h1>
    <ul>
      <li>
        <strong>What:</strong> pdxetera
      </li>
      <li>
        <strong>When:</strong> Started on March 27 2020.
      </li>
      <li>
        <strong>Where:</strong> Portland, OR
      </li>
      <li>
        <strong>Who:</strong> kerrow@protonmail.com
      </li>
    </ul>
  </Layout>
)