/* rafce */
import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from "../../Assets/me.png"
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5 id='h5'>Hello, I am</h5>
        <h1>Mezbahul Islam</h1>
        <h5 className="text-light">Fullstack & GIS Web Developer</h5>
        <CTA/>
        <HeaderSocial/>
        <div className="me">
            <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll_down">Scroll Down</a> 
      </div>
    </header>
  )
}

export default Header
