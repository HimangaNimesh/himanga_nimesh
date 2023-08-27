import React from 'react'
import HimangaNimesh from '../../assets/HimangaNimesh.pdf'

export const CTA = () => {
  return (
    <div className='cta'>
        <a href={HimangaNimesh} download className='btn'>Download CV</a>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}
