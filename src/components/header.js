import React from 'react'
import Link from 'gatsby-link'
import { Icon } from "react-icons-kit";
import { twitter } from 'react-icons-kit/fa/twitter';
import { linkedin } from 'react-icons-kit/fa/linkedin';
import { github } from 'react-icons-kit/fa/github'

import "./header.scss";

const Header = ({ siteTitle }) => (
  <div className="header">
    <h1>{siteTitle}</h1>
    <div className="header__icons">
      <Icon icon={twitter} size={32} />
      <Icon icon={linkedin} size={32} />
      <Icon icon={github} size={32} />
    </div>
    
  </div>
)

export default Header
