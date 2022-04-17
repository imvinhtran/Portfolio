import React from 'react'
import './services.css'
import {HiCheck} from 'react-icons/hi'

const Services = () => {
  return (
    <section id='services'>
    <h5>What I Offer</h5>
    <h2>Services</h2>
    <div className="container services__container">
      <div className="service__contents">
          <h4>UI/UX Design</h4>
          <ul>
            <li><HiCheck className='check__service__btn'/> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
            <li><HiCheck className='check__service__btn'/> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
            <li><HiCheck className='check__service__btn'/> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
            <li><HiCheck className='check__service__btn'/> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
          </ul>
      </div>
      <div className="service__contents">
          <h4>Web Development</h4>
          <ul>
            <li><HiCheck className='check__service__btn'/> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
            <li><HiCheck className='check__service__btn'/> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
            <li><HiCheck className='check__service__btn'/> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
            <li><HiCheck className='check__service__btn'/> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
            <li><HiCheck className='check__service__btn'/> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
          </ul>
      </div>
      <div className="service__contents">
          <h4>Content Creation</h4>
          <ul>
            <li><HiCheck className='check__service__btn'/> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
            <li><HiCheck className='check__service__btn'/> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
            <li><HiCheck className='check__service__btn'/> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
            <li><HiCheck className='check__service__btn'/> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
          </ul>
      </div>
    </div>





    </section>
  )
}

export default Services