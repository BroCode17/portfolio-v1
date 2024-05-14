import React from 'react'
import './LongCard.css'

function LongCard({ item }) {
    return (
        <div className=' long_cont'>
            <div className='res_card_long'>
                <h1 className='res_h1 '>{item.date}</h1>
                <div className='res_d_long'>
                    <h1 className='work_title'>{item.assign}</h1>
                    <h1 className='work_title'>{item.comp}</h1>
                    <div className='work_de'>
                        {item.details.map((d,index) => (
                            <p key={index}>
                            {d.data}
                            </p>
                        ))}

                    </div>
                    {/* <span className='completion'>
                        In Progress
                    </span> */}
                </div>

            </div>
        </div>
    )
}

export default LongCard