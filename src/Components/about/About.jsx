import React from 'react'
import './about.css'
import ME from '../../Assets/me_2.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const about = () => {
  return (
    <section id="about">
      <h5 className='text-light'>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about_content">
            <div className="about_cards">
              <article className='about_card'>
                <FaAward className='about_icon'/>
                <h5>Experience</h5>
                <small>3+ Years Working</small>
              </article>
              <article className='about_card'>
                <FiUsers className='about_icon'/>
                <h5>Clients</h5>
                <small>004+ Worldwide</small>
              </article>
              <article className='about_card'>
                <VscFolderLibrary className='about_icon'/>
                <h5>Projects</h5>
                <small>10+ Completed</small>
              </article>
            </div>

            <div className="paragraph">
                <p>My name is Mezbahul Islam. I am a Full Stack & GIS developer based in Bangladesh. I like to describe myself as a passionate developer and learner. I graduated in Computer Science and doing MS in Geospatial Science.</p>
                <a href="#contact" className='btn btn-primary'>Let's Talk
                </a>
            </div>
        </div>    
      </div>
    </section>
  )
}

export default about