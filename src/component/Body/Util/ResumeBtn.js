import React, { useRef } from 'react'
import './ResumeBtn.css'
import {BsArrowUpRight} from 'react-icons/bs'
import myResume from './resume.pdf';

function ResumeBtn() {


  const handleArrow = () =>{
    
  }
  return (
    <div className='res-click-cont' onMouseOver={handleArrow}>
    <a href={myResume} download={'Ebenezer_Frimpong_Resume.pdf'} target='_blank' rel="noopener noreferrer" className='res-click'>View/Download Full Resume </a>
    <BsArrowUpRight  className='arrow-up'/>
    </div>
  )
}

export default ResumeBtn