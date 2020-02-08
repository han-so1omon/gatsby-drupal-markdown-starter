import React from "react"

import { rhythm } from "../utils/typography"

export default ({
  children,
  className,
  paddingTop = rhythm(0),
  paddingBottom = rhythm(0),
}) => (
  <div
    className={className}
    css={{
      overflow: `hidden`,
      margin: `0 auto`,
      maxWidth: 1024,
      paddingLeft: rhythm(.2),
      paddingRight: rhythm(.2),
      paddingTop,
      paddingBottom,
    }}
  >
    {children}
  </div>
)
