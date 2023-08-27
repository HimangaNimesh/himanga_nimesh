import React from 'react'
import './Projects.css'
import fuel from '../../assets/fuel1.png'
import ndtChat from '../../assets/ndtChat.png'
import carWow from '../../assets/carWow.png'

const data = [
  {
    id: 1,
    image: ndtChat,
    title: 'Group Communication Platform For ITUM',
    github: '#',
    demo: '#'
  },
  {
    id: 2,
    image: fuel,
    title: 'Fuel Queues Management',
    github: '#',
    demo: '#'
  },
  {
    id: 3,
    image: carWow,
    title: 'carWow',
    github: '#',
    demo: '#'
  }
]

function Projects() {
  return (
    <section id='projects'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container project__container">
        {
          data.map(({id, image, title, github, demo})=>{
            return(
              <article key={id} className='project_item'>
                <div className="project_item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                {/*<div className="project_item-cta">
                  <a href={github} className='btn' target='_black' rel="noreferrer">Github</a>
                  <a href={demo} className='btn btn-primary' target='_black' rel="noreferrer">Live Demo</a>
            </div>*/}
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Projects