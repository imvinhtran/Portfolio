import React from 'react'
import './nav.css'
import { BiHome, BiBook, } from 'react-icons/bi'
import {BsPerson} from 'react-icons/bs'
import {RiHeart2Line} from 'react-icons/ri'
import {MdOutlineChat} from 'react-icons/md'
import { useState } from 'react'


export const Nav = () => {
  const [active, setActive] = useState('')
 
 
  return (
    <div className='nav__container'>
    <a onClick={() => setActive('#')} href="#" className={`nav__icons ${active === '#' ? 'active' : ''}`}>
    <BiHome className='nav__icon'></BiHome>
    </a>
    <a onClick={() => setActive('#about')} href="#about" className={`nav__icons ${active === '#about' ? 'active' : ''}`}>
    <BsPerson className='nav__icon'></BsPerson>
    </a>
    <a onClick={() => setActive('#experience')} href="#experience" className={`nav__icons ${active === '#experience' ? 'active' : ''}`}>
    <BiBook className='nav__icon'></BiBook>
    </a>
    <a onClick={() => setActive('#services')} href="#services" className={`nav__icons ${active === '#services' ? 'active' : ''}`}>
    <RiHeart2Line className='nav__icon'></RiHeart2Line>
    </a>
    <a onClick={() => setActive('#contact')} href="#contact" className={`nav__icons ${active === '#contact' ? 'active' : ''}`}>
    <MdOutlineChat className='nav__icon'></MdOutlineChat>
    </a>
  </div>
  )
}
export default Nav;