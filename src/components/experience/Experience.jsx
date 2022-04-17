import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

function Experience() {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className='container exp__my'>
        <div className="exp__frontend">
        <h3>Frontend Development</h3>
        <div>
          <h4><BsFillPatchCheckFill className='check__btn'></BsFillPatchCheckFill> HTML</h4>
          <h5>Experienced</h5>
        </div>
        <div>
          <h4><BsFillPatchCheckFill className='check__btn'></BsFillPatchCheckFill> CSS</h4>
          <h5>Intermedaate</h5>
        </div>
        <div>
          <h4><BsFillPatchCheckFill className='check__btn'></BsFillPatchCheckFill> Javarscript</h4>
          <h5>Experienced</h5>
        </div>
        <div>

          <h4><BsFillPatchCheckFill className='check__btn'></BsFillPatchCheckFill> ReactJS</h4>
          <h5>Experienced</h5>
        </div>
        </div>
        <div className="exp__frontend">
          <h3>Designer</h3>
          <div>
          <h4><BsFillPatchCheckFill className='check__btn'></BsFillPatchCheckFill> Photoshop</h4>
          <h5>Experienced</h5>
          </div>
          <div>
          <h4><BsFillPatchCheckFill className='check__btn'></BsFillPatchCheckFill> Illumitrator</h4>
          <h5>Experienced</h5>
          </div>
          <div>
          <h4><BsFillPatchCheckFill className='check__btn'></BsFillPatchCheckFill> Figma</h4>
          <h5>Experienced</h5>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience