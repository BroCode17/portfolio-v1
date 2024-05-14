import React from 'react'
import './HeaderOne.css'

function HeaderOne({headerTitle}) {
  return (
    <div className='cus_header_container'>
        <span className='cus_header'>
            {headerTitle}
        </span>
    </div>
  )
}

export default HeaderOne