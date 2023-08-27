import React from 'react'
import './About.css'
import ME from '../../assets/hima.jpeg'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
         <div className="about__me">
          <div className="about__me-image">
          <img src={ME} alt="" />
          </div>
         </div>
         <div className="about__content">
          <p>I'm a self-driven full-stack JavaScript developer with a solid
              foundation from the Institute of Technology, University of
              Moratuwa. My expertise spans web and mobile development,
              complemented by a flair for UI/UX design. With a proactive
              attitude and a knack for problem-solving, I am excited to
              embark on new challenges.</p>
          <p>I have completed a Software Engineering Internship at Telzee Software International.</p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>

         </div>
      </div>
    </section>
  )
}

export default About