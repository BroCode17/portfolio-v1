import React, { useState, useRef } from 'react'
import Para from '../Pragrapgh/Para'
import './Main.css'
import Image from '../Image/Image'
import BtnPrimary from '../Button/BtnPrimary'
import HorizonBar from '../Horizontal/HorizonBar'
import AboutPara from '../Pragrapgh/AboutPara'
import ImgHeadOne from '../Util/ImgHeadOne'
import OnlyImage from '../Util/OnlyImage'
import Card from '../ProjectCard/Card'
import HeaderOne from '../Util/HeaderOne'
import LongCard from '../ProjectCard/LongCard'
import Connect from '../Contact/Connect'
import MbCard from '../ProjectCard/MbCard'
import MbCardTwo from '../ProjectCard/MbCardTwo'
import ResumeBtn from '../Util/ResumeBtn'
import { useInView } from 'react-intersection-observer'
import SearchBar from './../Util/SearchBar';
import Modal from '../Modal/Modal';



function Main({ d }) {


  const [ca, setCa] = useState('Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\
   Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,\
    purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc \
    viverra imperdiet enim. Fusce est. Vivamus a tellus.')
  const { ref: refAbout, inView: aboutElementIsVisible } = useInView();


  const [search, setSearch] = useState('')
  const [open, setOpen] = useState(false)
  const [isLinkClicked, setIsLinkClicked] = useState(false)
  const [videoname, setVideoname] = useState(0)

  const Open =(vName, p) =>{
    setOpen(p)
   
    setVideoname(vName)
    console.log(vName)
  }
 
  return (
    <main>
      <div className='main-container'>

        <div className='intro'>
          <div className='section-one'>
            <Para content={d[0].about[0].abtone} />
            <div className='img-section slideRight'>
              <Image imagePath={'/images/Code-typing-pana.png'} />
            </div>
          </div>
          {/* Moble view container */}
          <div className='mb-section-for-two'>
            <Para content={d[0].about[0].abttwo} />
            <div className='img-section'>
              <Image imagePath={'/images/App-data-pana.png'} />
            </div>
          </div>
          <section className='section-two section-one' id='sec-two'>
            <div className='img-section slideLeft'>
              <Image imagePath={'/images/App-data-pana.png'} />
            </div>
            <Para al={true} content={d[0].about[0].abttwo} />
          </section>
          {/* <Cir /> */}
          <section className='btn-section'>
            <BtnPrimary text={"My Projects"} />
          </section>
        </div>

        {/* About section */}
        <section className={`section-abt ${aboutElementIsVisible ? 'aboutAnimateIn' : 'aboutAnimateOut'}`} id='about' ref={refAbout}>
          <HorizonBar text={"About Me"} />
        </section>
        <section className='section_abt_para'>
          <AboutPara content={d[0].about[0].mainabout} />
        </section>
        <section className='skill-section'>
          <div className='sk-main'>
            <ImgHeadOne path={'/images/Automation.png'} title={"Technical Skills"} />
            <div className='sk-column'>
              {
                d[0].about[0].techskills.map((sk, index) => (
                  <AboutPara key={index} content={sk.sk} />
                ))
              }

            </div>
          </div>
          <div className='sk-main'>
            <ImgHeadOne path={'/images/Code.png'} title={"Programming Languages & Frameworks"} />
            <div className='sk-column'>
              <div className='sk-ds-row'>
                {
                  d[0].about[0].proglangs.map((sk, index) => (
                    <OnlyImage key={index} onlyImgPath={`./images/${sk.i}.png`} imgTitle={sk.i} />
                  ))
                }
              </div>



            </div>
          </div>
        </section>
        <section className='search-bar-sp' id='project'>
          <HorizonBar text={"Projects"} />
        </section>
        <section className='search-bar '>
          <div className='in_seach trans-style'>
            <div className='in_se_cont'>
              <span>Filter</span>
              <input type="text" id="seachItem" name='search' placeholder='Example: project name, language used, etc' maximum-scale={1}
                onChange={e => setSearch(e.target.value)}
                value={search}
              />
            </div>
          </div>
        </section>
        <section className='sk-over'>
            {
              d[0].projects.filter((item) => {
                return search.toLocaleLowerCase() === "" ? item :
                  item.protitle.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || item.langused[0].name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) 
              }).map(item => (
                <Card key={item.id} store={ca} item={item} oPen={Open}  />
              ))
            }

        </section>
        <section className='resume-sec' id='resume'>
          <HorizonBar text={"Resume"} />
        </section>

        <section className='mob'>
          <HeaderOne headerTitle={'Education'} />
        </section>

        <section className='trans-style onebyone'>

          {
            d[0].education.map((edu, index) => (
              <MbCard key={index} edu={edu} />
            ))
          }

        </section>
        <section className='twobytwo'>
          {
            d[0].education.map((edu, index) => (
              <section key={index} className='trans-style ind'>
                <MbCard key={index} edu={edu} />
              </section>
            ))
          }
        </section>

        <HeaderOne headerTitle={'Experience'} />
        {
          d[0].experience.map((item, index) => (
            <section key={index} className='trans-style tr-ex-gap lg-mb-view'>
              <LongCard key={index} item={item} />
            </section>
          ))
        }
        <section className='desktop-view'>
          {
            d[0].experience.map((item, index) => (
              <section key={index} className='trans-style tr-ex-gap lg-padding'>
                <LongCard key={index} item={item} />
              </section>
            ))
          }
        </section>
        <section className='resume-section'>
          <ResumeBtn />
        </section>
        <section className='contact-sec' id='contact'>
          <HorizonBar text={"Contact Me"} />
        </section>
        <section className='contact-sec-main'>
          <Connect />
        </section>
      </div>
      {/* <section className='skill_section_res'>
        <HeaderOne headerTitle={"Education"} />
        {/* <ResCard /> }
        <div className='res_row_view'>
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        
        </div> 
        <HeaderOne headerTitle={"Experience"} />
        <LongCard />
      </section> */}
      {open  && <Modal setOpenModal={setOpen} videoname = {videoname} />}
    </main>

  )
}

export default Main