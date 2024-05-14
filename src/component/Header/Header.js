import React, { useEffect, useRef, useState } from 'react'
import './Header.css'

function Header() {
  const scrollingTop = useRef()
  const [lastScrollTop, setLastT] = useState(0)

  // useEffect(() =>{
    
    
  //   window.addEventListener('scroll', ()=>{
  //     const sTop = window.screenY || document.documentElement.scrollTop;
  //     if(sTop > lastScrollTop){
  //       scrollingTop.current.style.top = '-120px';
  //       scrollingTop.current.style.transition = '.1s linear';
  //     }else{
  //       scrollingTop.current.style.top = '0'
  //     }
  //     setLastT( p => 
  //       sTop)
  //   })
    
  // },[scrollingTop, lastScrollTop])


  return (
    <header ref={scrollingTop} >
      <div className='Header-container'>
        <div className='Header-container-row-one'>
          <a href='#' className='go-home'>
            <div className='Section_one'>
              <h1 className='greeting'>Hi!, I'm Ebenezer</h1>
            </div>
          </a>
          <div className='Section_two'>
            {/* <div className='mb_list_view'>
            <span></span>
            <span></span>
            <span></span>
          </div> */}
            <nav className='item-container'>
              <ul>
                <a href='#about'><li className='item_list'>About Me</li></a>
                <a href='#project'><li className='item_list'>Project</li>
                </a>              <a href='#resume'><li className='item_list'>Resume</li>
                </a>             <a href='#contact'><li className='item_list'>Contacts</li></a>
              </ul>
            </nav>
          </div>
        </div>
        <div className='Header_container_row_two go'>
          <a href='#' className='go-home '>
          <div className='brocode'>
            <code>&lt;</code>
            <span> i<span className='code'>Code</span>! /</span>
            <code>&gt;</code>
            <code>&lt;</code>
            <span> <span className='ide'>iDe</span>velop! /</span>
            <code>&gt;</code>
          </div>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header