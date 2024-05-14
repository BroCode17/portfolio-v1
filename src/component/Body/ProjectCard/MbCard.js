import React from 'react'
import './MbCard.css'

function MbCard({edu}) {
    return (
        <div className='mb-card'>
            <div className='mb-card-cont'>
                <h1 className='mb-date'>
                    {edu.date}
                </h1>
                <div className='mb-line'>
                    <div className='mb-circle'></div>
                </div>
                <div className='mb-res-details'>
                    <p>{edu.major}</p>
                    <p>{edu.university}</p>
                    <p>{edu.location}</p>
                    <span className='mb-completion'>
                        {edu.completion}
                    </span>
                </div>
            </div>

        </div>
    )
}

export default MbCard