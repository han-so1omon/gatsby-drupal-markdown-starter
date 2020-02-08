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
/*
import React from "react"
import { Link } from "gatsby"
import gray from "gray-percentage"
import { MdSearch } from "react-icons/md"
import "typeface-rochester"
import "typeface-josefin-sans"
import "typeface-josefin-slab"

import { rhythm, scale } from "../utils/typography"
import constants from "../utils/constants"
import Container from "../components/container"

class DefaultLayout extends React.Component {
  render() {
    return (
      <div>
        <header
          css={{
            background: constants.paleYellow,
          }}
        >
          <div
            css={{
              height: rhythm(1.5),
              margin: `0 auto`,
              maxWidth: 1024,
            }}
          >
            <span
              css={{
                marginLeft: rhythm(1 / 2),
              }}
            >
              <MdSearch
                css={{
                  fontSize: rhythm(1),
                }}
              />
              {` `}
              <span css={{ lineHeight: rhythm(1.5) }}>
                Search by keyword, ingredient, dish
              </span>
            </span>
            <span
              css={{
                float: `right`,
                marginRight: rhythm(1),
                lineHeight: rhythm(1.5),
              }}
            >
              Login
            </span>
          </div>
        </header>
        <Container paddingBottom={0} paddingTop={rhythm(1 / 2)}>
          <Link to="/">
            <div css={{ width: 193, overflow: `hidden` }}>
              <h1
                css={{
                  color: gray(10),
                  fontSize: scale(1.8).fontSize,
                  margin: 0,
                  fontFamily: `Rochester, serif`,
                  float: `right`,
                  fontDisplay: `block`,
                }}
              >
                Umami
              </h1>
              <h4
                css={{
                  color: gray(10),
                  fontFamily: `"Josefin Sans", sans-serif`,
                  marginBottom: 0,
                  float: `right`,
                }}
              >
                Food Magazine
              </h4>
            </div>
          </Link>
          <div css={{ float: `right` }}>
            <Link
              to="/recipes/"
              css={{
                color: `inherit`,
                position: `relative`,
                bottom: rhythm(1.5),
                textDecoration: `none`,
                fontSize: scale(0.25).fontSize,
                ":hover": {
                  textDecoration: `underline`,
                },
              }}
            >
              Recipes
            </Link>
          </div>
        </Container>
        {this.props.children}
        <footer css={{ background: constants.paleYellow }}>
          <Container>
            <div css={{ maxWidth: `50%`, float: `left` }}>
              <p>
                <strong>Umami Magazine & Umami Publications</strong> is a
                fictional magazine and publisher for illustrative purposes only
              </p>
              <p>
                Read the
                {` `}
                <a href="https://github.com/gatsbyjs/gatsby/tree/master/examples/using-drupal">
                  source for this website.
                </a>
              </p>
            </div>
            <div
              css={{ float: `right`, maxWidth: `50%`, paddingLeft: rhythm(1) }}
            >
              Copyright {new Date().getFullYear()} Terms & Conditions
            </div>
          </Container>
        </footer>
      </div>
    )
  }
}

export default DefaultLayout
*/
