import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => (
  <Layout>
    <SEO title="Home" />
    {false && data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <h2><Link to={node.fields.slug}>
          {node.frontmatter.title} – {node.frontmatter.updated}
        </Link></h2>
        <p>{node.excerpt}</p>
      </div>
    ))}
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___updated], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            updated(formatString: "MMMM D, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`