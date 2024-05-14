import React from 'react'
import './PressToLoad.css'
import Loader from './Loader';

function PressToLoad({ handleLoad}) {
    return (
        <div className='press-cont'>
        
            <button className="glowing-btn" onClick={() => handleLoad()}>
                <span className="glowing-word">CLICK<span className="faulty-letter">TO</span>LOAD</span>
            </button>
        </div>

        
    )
}

export default PressToLoad