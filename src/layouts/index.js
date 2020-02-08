import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Octicon, {Octoface} from "@primer/octicons-react"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, social, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    let header
    const locationArr = location.pathname.split('/');

    if (location.pathname === rootPath || location.pathname === blogPath) {
      let relPath;
      if (location.pathname === rootPath) { relPath = `/`; }
      else if (location.pathname === blogPath) { relPath = `/blog/`; }
      header = (
        <h3
          style={{
            ...scale(1.0),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={relPath}
          >
            {title}
          </Link>
        </h3>
      )
    } else if (locationArr[1] === `blog`) {
      header = (
        <h1
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          {title}
        </h1>
      ) 
    }
    return (
      <Wrapper>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <header>{header}</header>
          <main>{children}</main>
        </div>
        <Footer>
          <a href={`https://${social.github}.github.io`}>
            <Octicon icon={Octoface} size='medium' ariaLabel='GitHub'/>
          </a>
          &nbsp;
          <a href={`mailto:${social.email}@engineer.com`}>
            errcsool@engineer.com
          </a>
        </Footer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
