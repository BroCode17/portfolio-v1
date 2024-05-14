import React from 'react'
import './BtnPrimary.css'

function BtnPrimary({ text }) {
  return (
    <div className='Btn_container'>
      <a href='#project'>
        <div className='btn'>
          <span>{text}</span>
        </div>
      </a>
    </div>
  )
}

export default BtnPrimary