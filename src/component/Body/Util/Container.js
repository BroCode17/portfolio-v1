import React from 'react'
import './Container.css'

function Container({children}) {
  return (
    <div className='mb-bg-cont'>
        <div className='mb-in-cont'>
            {children}
        </div>
    </div>
  )
}

export default Container