import React from 'react'
import './footer.css'
import {FaFacebookSquare, FaInstagramSquare,FaTwitterSquare} from 'react-icons/fa'

export const Footer = () => {
  return (
    <div id='footer'>
      <h2>Vinh Tran</h2>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonial">Testimonial</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <ul>
        <li><a className='footer__icon' href="https://www.facebook.com/vquang1.9/"><FaFacebookSquare></FaFacebookSquare></a></li>
        <li><a className='footer__icon' href="https://www.instagram.com/quang1.9/"><FaInstagramSquare></FaInstagramSquare></a></li>
        <li><a className='footer__icon' href="https://twitter.com/Vino_Designer"><FaTwitterSquare></FaTwitterSquare></a></li>
      </ul>
      <h5>Vinh Tran is trying study ReactJS</h5>
    </div>
  )
}

export default Footer;
