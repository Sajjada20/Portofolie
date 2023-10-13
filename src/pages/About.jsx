import React, { useContext } from 'react'
import './styles/about.css'
import { AppContext } from '../App'
import Footer from '../comp/Footer'

function About() {
  const {isDark} = useContext(AppContext)

  return (
    <div className='div-about-hoofd'>
        <div className='about'>
          <h1 id='about-h1'>About</h1>
          <div className='about-div-para'>
            <div className='about-1'>
              <p id={!isDark && 'lightMode-p'}>Hello there! I'm Ramzi, a Frontend / Fullstack-Jamstack web developer based near Montreal. I wake up in the morning, grab a cup of timmies coffee, open up my laptop and build things that live on the web all day, everyday.</p>
            </div>
            <div className='about-1'>
              <p id={!isDark && 'lightMode-p'}>People who know me say I'm obsessed, that's fair, I am very driven and love learning new things.</p>
            </div>
            <div className='about-1'>
              <p id={!isDark && 'lightMode-p'}>I recently created a YouTube channel called Slaying The Dragon where I upload videos on front-end web development topics.</p>
            </div>
          </div>
          <div className={isDark ? 'line' : 'line-light'}></div>
          <div className='div-all-tech'>
            <h4>Technologies</h4>
            <div className='div-tech'>
              <ul className='lang'>
                <li id={!isDark ? 'lightMode-li' : 'darkMode-li'}>JavaScript</li>
                <li id={!isDark ? 'lightMode-li' : 'darkMode-li'}>Python</li>
                <li id={!isDark ? 'lightMode-li' : 'darkMode-li'}>Firebase</li>
              </ul>
              <ul className='lang'>
                <li id={!isDark ? 'lightMode-li' : 'darkMode-li'}>ReactJS</li>
                <li id={!isDark ? 'lightMode-li' : 'darkMode-li'}>CSS</li>
                <li id={!isDark ? 'lightMode-li' : 'darkMode-li'}>HTML</li>
              </ul>
            </div>
            
          </div>
      </div>
    </div>
  )
}

export default About