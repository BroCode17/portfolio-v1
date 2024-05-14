import React from 'react'
import './Image.css'
function Image({imagePath}) {
  return (
    <figure className='figure'>
        <img src={imagePath}alt='code pander' width={100}/>
        {/* <figcaption>I am coding</figcaption> */}
    </figure>
  )
}

export default Image