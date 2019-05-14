import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, subTitle }) => (
  <header
    style={{
      background: `rgb(20, 35, 60)`,
      minHeight: "70px",
      display: "flex",
      margin: `0`,
    }}
  >
    <div
      style={{
        margin: `auto 0`,
        maxWidth: 960,
        padding: "0 32px",
        color: `white`,
      }}
    >
      <h1 style={{
        margin: "auto",
        display: "inline-block",
      }}>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <h3 style={{
        margin: "auto",
        display: "inline-block",
        color: "lightGrey",
      }}>
        &nbsp;&nbsp;{subTitle}</h3>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  subTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  subTitle: ``,
}

export default Header
