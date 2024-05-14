import React from 'react'
import './ImgHeadOne.css'

function ImgHeadOne({path, title}) {
  return (
    <div className='Img_head_cont'>
        <div>
            <img src={path} alt='Automation Icon' />
        </div>
        <span className='skills_heading'>{title}</span>
    </div>
  )
}

export default ImgHeadOne