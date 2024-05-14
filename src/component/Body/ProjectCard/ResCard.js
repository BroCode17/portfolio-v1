import React from 'react'
import './ResCard.css'
function ResCard() {
  return (
    <>
      <div className='res_card_cont'>
        <div className='res_card'>
          <h1 className='res_h1'>JAN-APR 2023</h1>
          <div className='line'>1</div>
          <div className='circle'></div>
          <div className='res_details'>
            <p>BSc Computer Science</p>
            <p>Liberty University</p>
            <p>USA</p>
            <span className='completion'>
              In Progress
            </span>
          </div>

        </div>
        <div className='mb-res-card'>{

        }

        </div>
      </div>
    </>
  )
}

export default ResCard