import React from 'react'

const FigBox = ({item}) => {
  return (
    <figure className='image-container'>
    <img src={`/images/${item.imgname}`} alt={item.imgname} width={490} height={272} title={item.protitle} loading='eager' />
    <figcaption className='offscreen'>{item.protitle}</figcaption>
  </figure>
  )
}

export default FigBox
