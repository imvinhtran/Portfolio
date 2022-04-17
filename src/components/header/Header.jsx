import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/photos/me.png'
import HeaderSocial from './HeaderSocial'

export const Header = () => {
  return (
    <header>
    <div className="container header__container">
      <h5>Hello I'm</h5>
      <h1>Vinh Tran</h1>
      <h5 className="text-light">FrontEnd Developer</h5>
      <CTA></CTA>
      <HeaderSocial></HeaderSocial>
      <div className="me">
        <img src={ME} alt="" />
      </div>
      <a href="#contact" className="scroll__down">Scroll Down</a>
    </div>
    </header>
  )
}
export default Header;
