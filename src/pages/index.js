import React from "react"
import { Link } from "gatsby"

import Layout from "../layouts"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const socialInfo = data.site.siteMetadata.social

    const siteTitle = "errcsool || han-so1omon"

    return (
      <Layout location={this.props.location} title={siteTitle} social={socialInfo}>
        <SEO
          title="Home"
          keywords={[`blog`, `apache`, `map-gl`, `gatsby`, `javascript`, `react`, `drupal`, `contenta`]}
        />
        <p>Check it out</p>
        <Link to="/blog/">
          <Button marginTop="35px">Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage

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
  }
`
