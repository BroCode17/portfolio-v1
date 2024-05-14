import React, { useEffect, useState } from 'react'
import './Connect.css'


const API = "https://portfolio-api-8fzn.onrender.com/api/send"
function Connect() {
    const [info, setInfo] = useState({
        fullname: " ", email: " ", phone: " ", desc: " "
    });




    const handleInfo = (e) => {
        setInfo({

            ...info, [e.target.name]: e.target.value
        }
        )
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        let newInfo = info
        setInfo({
            ...info, fullname: " ", email: " ", phone: " ", desc: " "
        })
        console.log(newInfo)
        fetch(API, {
            method: 'POST',
            headers:{
              "Content-Type": "application/json"  
            },
            body: JSON.stringify(info)
          }).then(function(response) {
            if(response){
               newInfo = null
            }
            return response.json();
          }).then(data => console.log(data))
          .catch(err => console.log('Request failed', err));
    }
    return (
        <div className='ct-main-cont'>
            <div className='ct-img-container'>
                <img src='/images/smiley.png' />
            </div>
            <div className='ct-cont'>
                <form className='ct-form' onSubmit={handleSubmit} >
                    <h1 className='ct-head'>Let's CONNECT!</h1>
                    <label htmlFor="fullname">Full Name/Company Name</label>
                    <input type='text' name='fullname' value={info.fullname} onChange={handleInfo} required />
                    <label htmlFor="email">Email Address</label>
                    <input type='email' name='email' value={info.email} onChange={handleInfo} required />
                    <label htmlFor="phone">Phone Number (Optional)</label>
                    <input type='tel' name='phone' value={info.phone} onChange={handleInfo} />
                    <label htmlFor="desc">Message</label>
                    <textarea rows={4} name='desc' value={info.desc} onChange={handleInfo} required></textarea>
                    <button className='ct-sub' >Submit</button>
                </form>
            </div>

        </div>
    )
}

export default Connect