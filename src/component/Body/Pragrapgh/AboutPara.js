import React from 'react'
import './AboutPara.css'
import { useState } from 'react'


function AboutPara({ content, isLeft }) {
  return (
    <div className='AboutPara_container'>
      {
        isLeft ? <p className="st3 cutoff-text">
          {content}
        </p> : <p className="st2">
          {content}
        </p>
      }

    </div>
  )
}

export default AboutPara