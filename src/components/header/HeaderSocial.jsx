import React from 'react'
import { BsLinkedin, BsGithub, BsDribbble } from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/" rel="noreferrer" target="_blank"><BsLinkedin></BsLinkedin></a>
        <a href="https://www.github.com/" rel="noreferrer" target="_blank"><BsGithub></BsGithub></a>
        <a href="https://www.dribbble.com/" rel="noreferrer" target="_blank"><BsDribbble></BsDribbble></a>
    </div>
  )
}

export default HeaderSocial;