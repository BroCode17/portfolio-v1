import React, { useState } from 'react'
import './Card.css'
import AboutPara from '../Pragrapgh/AboutPara'
import RoundedShape from '../Util/RoundedShape'
import ProjectLink from '../Util/ProjectLink'
import FigBox from './FigBox'
import VidBox from './VidBox'

function Card({ item, oPen, }) {
  const[isTrue, setIsTrue] = new useState(true);
  const op = (item , isTure) =>{
    if(isTure){
      oPen(item.video, item.show)
    }
  }
  return (
    <div className='card' style={{cursor:'pointer'}} onClick={() => {
      // setIsTrue(true);
      op(item, isTrue)
    }
    }>
      {/* <div className='card_column'>
        <div className='img_container'>
          <img src={sporty} alt='sportify' className='im' />

        </div>
        <div className='card_title'>
          <div>
            <span>Sportify</span>
          </div>
        <AboutPara content={story} />
        </div>
      </div> */}
      <div className='card-cont'>

        <div className='card-title'>
          <div className='card-title-head'>
            <span>{item.protitle}</span>
          </div>
          <div className='fixed-abt-para'>
            <AboutPara content={item.prodetails} isLeft={true} />
          </div>
          <div className="lg-used">
            {
              item.langused.map((i, index) => (
                <RoundedShape key={index} shapeText={i} />
              ))
            }
          </div>
          <div className='links-cont' onClick={() => {
            setIsTrue(false);
            
            op(item, isTrue)
          }} >
            <div className='project-links' >
              <ProjectLink prolink={item.prolink} linkname={item.prolinkname} oPen={oPen} itemId={item.id} />
            </div>
            <div className='project-links' style={item.site ? { display: 'block' } : { display: 'none' }}>
              <ProjectLink prolink={item.site} linkname={item.website} oPen={oPen} itemId={item.id} />
            </div>
          </div>
        </div>
      </div>
      {item.imgname 
      ? <FigBox item={item} /> 
      : <VidBox item={item}/>
      }
    </div>
  )
}

export default Card