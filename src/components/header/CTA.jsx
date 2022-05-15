import React from 'react'
import CVVN from '../../assets/photos/TranVinhQuang-VN.pdf'
import CVEN from '../../assets/photos/TranVinhQuang-EN.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CVVN} download className='btn'>Download CV-VN</a>
        <a href={CVEN} download className='btn'>Download CV-EN</a>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA;