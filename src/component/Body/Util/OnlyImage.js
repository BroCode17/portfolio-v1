import React from 'react'
import './OnlyImage.css'
function OnlyImage({onlyImgPath, imgTitle}) {
  return (
    <>
        <div className='img_cont'>
            <img src={onlyImgPath} alt={imgTitle} width={70} height={70} />
        </div>
    </>
  )
}

export default OnlyImage