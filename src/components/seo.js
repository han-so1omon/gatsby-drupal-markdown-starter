import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

const SEO = ({ title, author, description, image, pathname, article }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          defaultAuthor,
          defaultDescription,
          siteUrl,
          defaultImage,
          social: {
            github,
            email,
            stackoverflow,
          }
        },
      },
    }) => {
      const seo = {
        title: title || defaultTitle,
        author: author || defaultAuthor,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname || "/"}`,
      }
      return (
        <>
          <Helmet title={seo.title}>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            {seo.url && <meta property="og:url" content={seo.url} />}
            {(article ? true : null) && (
              <meta property="og:type" content="article" />
            )}
            {seo.image && <meta property="og:image" content={seo.image} />}
            <meta name="github" content={github} />
            <meta name="email" content={email} />
            <meta name="stackoverflow" content={stackoverflow} />
          </Helmet>
        </>
      )
    }
  } />
)

export default SEO
SEO.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
}
SEO.defaultProps = {
  title: null,
  author: null,
  description: null,
  image: null,
  pathname: null,
  article: false,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultAuthor: author
        defaultDescription: description
        siteUrl: siteUrl
        defaultImage: image
        social {
          github
          email
          stackoverflow
        }
      }
    }
  }
`
