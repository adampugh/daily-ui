import React from 'react'
import Link from 'gatsby-link'
import { Icon } from "react-icons-kit";
import { twitter } from 'react-icons-kit/fa/twitter';
import { linkedin } from 'react-icons-kit/fa/linkedin';
import { github } from 'react-icons-kit/fa/github';
import {angleRight} from 'react-icons-kit/fa/angleRight'

// import "../styles/components/header.scss";

const Header = ({ siteTitle }) => (
  <div className="header">
    <div className="header__topbar">
    <div className="header__logo">
        <p>Adam Pugh</p>
      </div>
      <div className="header__icons">
        <Icon icon={twitter} size={32} />
        <Icon icon={linkedin} size={32} />
        <Icon icon={github} size={32} />
        
      </div>
      
      {/* <div className="header__portfolio"> */}
        {/* <p>Portfolio <Icon icon={angleRight} size={12} /></p> */}
        
      {/* </div> */}
    </div>
    <div>
      <h1>{siteTitle}</h1>
    </div>
    
  </div>
)

export default Header
