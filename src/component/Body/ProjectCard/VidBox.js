import React from 'react'

const VidBox = ({item}) => {
  return (
    <video className='image-container' autoPlay muted loop>
        <source src={`/images/${item.vidname}`} alt={item.vidname} width={490} height={272} title={item.protitle} loading='eager' />
        <figcaption className='offscreen'>{item.protitle}</figcaption>
      </video>
  )
}

export default VidBox
