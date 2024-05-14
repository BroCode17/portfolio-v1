import React, { useEffect, } from 'react'
import './Loader.css'
function Loader() {


  return (
    <div className='loader-spin'>
      <div className='ld-cont'>
        <div className='ring'></div>
        <div className='ring'></div>
        <div className='ring'></div>
      </div>

    </div>
  )
}

export default Loader