import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/vinh-quang/" rel="noreferrer" target="_blank"><BsLinkedin></BsLinkedin></a>
        <a href="https://github.com/vquang19" rel="noreferrer" target="_blank"><BsGithub></BsGithub></a>
    </div>
  )
}

export default HeaderSocial;