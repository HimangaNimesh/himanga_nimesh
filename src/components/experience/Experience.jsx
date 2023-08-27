import React from 'react'
import './Experience.css'
import {TbBrandHtml5} from 'react-icons/tb'
import {TbBrandCss3} from 'react-icons/tb'
import {TbBrandJavascript} from 'react-icons/tb'
import {TbBrandReactNative} from 'react-icons/tb'
import {TbBrandFirebase} from 'react-icons/tb'
import {TbBrandPython} from 'react-icons/tb'
import {SiNextdotjs} from 'react-icons/si'
import {RiFlutterFill} from 'react-icons/ri'
import {FaJava} from 'react-icons/fa'
import {ImWordpress} from 'react-icons/im'
import {IoLogoNodejs} from 'react-icons/io'
import {TbBrandMongodb} from 'react-icons/tb'
import {SiNestjs} from 'react-icons/si'

const Experience = () => {
  return (
    <section id="experience">
      <h5>I'm good at</h5>
      <h2>Skills</h2>
      <div className="container skills__container">
        <article className='skill'>
          <TbBrandHtml5 className='skill_icon'/>
          <h4>HTML5</h4>
        </article>
        <article className='skill'>
          <TbBrandCss3 className='skill_icon'/>
          <h4>CSS3</h4>
        </article>
        <article className='skill'>
          <TbBrandJavascript className='skill_icon'/>
          <h4>JavaScript</h4>
        </article>
        <article className='skill'>
          <TbBrandReactNative className='skill_icon'/>
          <h4>React</h4>
        </article>
        <article className='skill'>
          <IoLogoNodejs className='skill_icon'/>
          <h4>Node JS</h4>
        </article>
        <article className='skill'>
          <TbBrandMongodb className='skill_icon'/>
          <h4>MongoDB</h4>
        </article>
        <article className='skill'>
          <SiNextdotjs className='skill_icon'/>
          <h4>Next JS</h4>
        </article>
        <article className='skill'>
          <SiNestjs className='skill_icon'/>
          <h4>Nest JS</h4>
        </article>
        <article className='skill'>
          <TbBrandReactNative className='skill_icon'/>
          <h4>React Native</h4>
        </article>
        <article className='skill'>
          <RiFlutterFill className='skill_icon'/>
          <h4>Flutter</h4>
        </article>
        <article className='skill'>
          <TbBrandFirebase className='skill_icon'/>
          <h4>Firebase</h4>
        </article>
        <article className='skill'>
          <FaJava className='skill_icon'/>
          <h4>Java</h4>
        </article>
      </div>
    </section> 
  )
}

export default Experience