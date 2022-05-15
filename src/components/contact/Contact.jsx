import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {RiMessengerLine, RiWhatsappLine} from 'react-icons/ri'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a1p456j', 'template_sjrmlpc', form.current, 'G0qfy-RC-6L_REwhG')
    
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className="contact__items">
          <div className="contact__item">
            <AiOutlineMail className='fontsize__2rem '></AiOutlineMail>
            <h3>Email</h3>
            <h5>vquanng5.9@gmail.com</h5>
            <a href="mailto:vquanng5.9@gmail.com">Send a message</a>
          </div>
          <div className="contact__item">
            <RiMessengerLine className='fontsize__2rem '></RiMessengerLine>
            <h3>Messenger</h3>
            <h5>Vinh Tran</h5>
            <a href="https://www.facebook.com/vquang1.9/">Send a message</a>
          </div>
          <div className="contact__item">
            <RiWhatsappLine className='fontsize__2rem '></RiWhatsappLine>
            <h3>WhatsApps</h3>
            <h5>+84 353 322 821</h5>
            <a href="tel:+84353322821">Call Me</a>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail} className="contact__content">
          <input type="text" name='name' placeholder='Your Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7"  placeholder='Your Message' required/>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact