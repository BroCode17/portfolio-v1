import React from 'react'
import './Connect.css'


function ConnectMe() {
    
  return (
    <div className='ct-main-cont'>
            <div className='ct-img-container'>
                <img src={'/images/smiley.png'} />
            </div>
            <div className='ct-cont'>
                <form className='ct-form'>
                    <h1 className='ct-head'>Let's CONNECT!</h1>
                    <label htmlFor="name">Full Name/Company Name</label>
                    <input type='text' name='fullname' />
                    <label htmlFor="name">Email Address</label>
                    <input type='text' name='fullname' />
                    <label htmlFor="name">Phone Number (Optional)</label>
                    <input type='tel' name='fullname' />
                    <label htmlFor="name">Message</label>
                    <textarea rows={4}></textarea>
                    <button className='ct-sub'>Submit</button>
                </form>
            </div>

        </div>
  )
}

export default ConnectMe





//yalgirlniah


