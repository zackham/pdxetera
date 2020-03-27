import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from './header.module.scss'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#333`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link to="/" style={{color: `white`, textDecoration: `none`}}>{siteTitle}</Link>
      </h1>
      <ul className={styles.nav}>
        <li><Link to="/">home</Link></li>
        <li><Link to="/covid-19-resources">covid-19 resources</Link></li>
        <li><Link to="/about">about</Link></li>
      </ul>
    </div>
  </header>
)

export default Header
