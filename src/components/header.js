import React from 'react'
import Link from 'gatsby-link'

import "./header.scss";

const Header = ({ siteTitle }) => (
  <div className="header">
    <h1>{siteTitle}</h1>
  </div>
)

export default Header
