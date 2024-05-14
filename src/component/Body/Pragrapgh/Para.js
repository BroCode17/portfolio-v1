import React from 'react'
import './Para.css'

function Para({ al, content }) {
    return (
        <div className='Para_container'>
            {
                al ? (<p className="st1">
                   {content}
                </p>) :(
                    <p className="st cutoff-text">
                   {content}
                </p>
                )
            }
            
           
        </div>
    )
}

export default Para