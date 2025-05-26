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
          <p>Motivated and detail-oriented software engineer with hands-on experience in designing and
developing scalable web applications. Proficient in modern JavaScript frameworks such as React,
Next.js, and Nest.js, with a solid grasp of both frontend and backend development. Skilled at
collaborating in agile teams, transforming UI/UX designs into responsive interfaces, and integrating
robust backend services. Eager to take on new challenges and contribute to innovative projects in
dynamic tech environments.</p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>

         </div>
      </div>
    </section>
  )
}

export default About