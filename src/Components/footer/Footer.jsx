/* rafce */
import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {FaTwitter} from 'react-icons/fa'
const Footer = () => {
  return (
    <footer>
      <a href="http://" className='footer-logo'>MEZTECH</a>
      <ul className='permalinks'>
        <li><a href="#"> Home </a></li>
        <li><a href="#about"> About </a></li>
        <li><a href="#experience"> Experience </a></li>
        <li><a href="#services"> Services </a></li>
        <li><a href="#portfolio"> Portfolio </a></li>
        <li><a href="#testimonial"> Testimonial </a></li>
        <li><a href="#contact"> Contact </a></li>
      </ul>

      <div className="footer-socials">
        <a href="https://www.facebook.com/mohammad.mezbah.52"> <FaFacebookF/> </a>
        <a href="https://www.instagram.com"> <FiInstagram/> </a>
        <a href="https://www.twitter.com"> <FaTwitter/> </a>
      </div>

      <div className="footer-copyright">
        <small>&copy; Meztech Official. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer