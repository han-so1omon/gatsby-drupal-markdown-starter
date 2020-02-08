import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../layouts"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Button from "../components/button"

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const socialInfo = data.site.siteMetadata.social
    const posts = data.articles.edges

    return (
      <Layout location={this.props.location} title={`${siteTitle}`} social={socialInfo}>
        <SEO title="All posts" />
        <Bio />
        <div style={{ margin: "20px 0 40px" }}>
          {posts.map(({ node }) => {
            const title = node.title
            return (
              <div key={node.fields.slug}>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link
                    style={{ boxShadow: `none` }}
                    to={`${node.fields.slug}`}
                  >
                    {title}
                  </Link>
                </h3>
                <small>{node.createdAt}</small>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.description,
                  }}
                />
              </div>
            )
          })}
        </div>
        <Link to="/">
          <Button marginTop="85px">Go Home</Button>
        </Link>
      </Layout>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        social {
          email
          github
        }
      }
    }
    articles: allArticles(limit: 1000) {
      edges {
        node {
          title
          createdAt(fromNow: true)
          internal {
            description
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
