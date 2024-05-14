import React, { useEffect, useState } from 'react'
import { PiYoutubeLogoDuotone, PiInstagramLogoLight, PiLinkedinLogoLight } from 'react-icons/pi';
import { AiFillGithub } from 'react-icons/ai';
import './Footer.css'
function Footer() {

    const [showYear, setShowYear] = useState('');
    useEffect(() => {
        setShowYear(new Date().getFullYear())
    })
    return (
        <footer>

            <div className='icon-cont'>
                <div className="icons">
                    <a href='https://www.linkedin.com/in/efrimpong' target='_blank'>
                        <div className="layer">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span className="fab">
                                <PiLinkedinLogoLight className='icon' />
                            </span>
                        </div>
                    </a>
                    <a href='https://www.youtube.com/channel/UCAsXrqdYqAFAEObDyM-5iXA' target='_blank'>
                        <div className="layer">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span className="fab">
                                <PiYoutubeLogoDuotone className='icon' />
                            </span>
                        </div>
                    </a>
                    <a href='https://instagram.com/brocode._17?igshid=NGVhN2U2NjQ0Yg==' target='_blank'>
                        <div className="layer">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span className="fab">
                                <PiInstagramLogoLight className='icon' />
                            </span>
                        </div>
                    </a>
                    <a href='https://github.com/BroCode17' target='_blank'>
                        <div className="layer">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span className="fab">
                                <AiFillGithub className='icon' />
                            </span>
                        </div>
                    </a>
                </div>
            </div>
            <p>
                Copyright &copy; <span>{showYear}&nbsp;</span>
            </p>
            <p>
                Design & Built by Ebenezer Frimpong using React and Css
            </p>
            <p>v 0.01</p>


        </footer >
    )
}

export default Footer