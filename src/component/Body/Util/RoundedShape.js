import React from 'react'
import './RoundedShape.css'

function RoundedShape({shapeText}) {
  return (
    <div className="shape-cont">
    <span className="shape-text">{shapeText.name}</span>
    </div>
  )
}

export default RoundedShape