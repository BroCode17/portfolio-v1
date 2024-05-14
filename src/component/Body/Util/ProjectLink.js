import React from 'react'
import './ProjectLink.css'
import {FiLink2} from 'react-icons/fi'

function ProjectLink({prolink, linkname, oPen, itemId}) {
  return (
    <div className='link-click'>
    <a href={prolink} target='_blank' onClick={() => {
      console.log('Hey')
      oPen(itemId, false)
    }}>
        <div>
         {linkname && <FiLink2 color='#FFF' />}
        </div>
        <p>{linkname}</p>
    </a>
    </div>
  )
}

export default ProjectLink