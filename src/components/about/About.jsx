import React from 'react'
import AboutMe from '../../assets/photos/me-about.jpg'
import './about.css'
import {IoIosRibbon} from 'react-icons/io'
import {AiFillProject} from 'react-icons/ai'
import {IoPeopleOutline} from 'react-icons/io5'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__contents">
        <div className="about__avarta">
          <img src={AboutMe} alt="" />
        </div>
        <div className="about__content">
            <div className="rewards">
              <article className="reward">
                    <IoIosRibbon className='reward__icons'></IoIosRibbon>
                    <h5>Experience</h5>
                    <small>3+ Years Working</small>
              </article>
              <article className="reward">
                    <IoPeopleOutline className='reward__icons'></IoPeopleOutline>
                    <h5>Clients</h5>
                    <small>200+ Worldwide</small>
                    
              </article>
              <article className="reward">
                    <AiFillProject className='reward__icons'></AiFillProject>
                    <h5>Projects</h5>
                    <small>80+ Completed</small>
              </article>
            </div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
               It has survived not only five centuries, but also the leap into electronic typesetting,
             remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
             sheets containing Lorem Ipsum passages, and more recently with desktop publishing
              software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              <a href="" className='btn btn-primary'>Let's Talk</a>
        </div>
        
      </div>
    </section>
  )
}

export default About