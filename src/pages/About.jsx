import React, { useContext } from 'react'
import './styles/about.css'
import { AppContext } from '../App'
import CardComp from '../comp/CardComp'

function About() {
  const {isDark} = useContext(AppContext)


  return (
    <div className='div-about-hoofd'>
        <div className='about'>
          <h1 id='about-h1'>About</h1>
          <div className='about-div-para'>
            <div className='about-1'>
              <p id={!isDark && 'lightMode-p'}>👋 Hoi! Ik ben Sajjad, een enthousiaste webontwikkelaar die dol is op het creëren van aantrekkelijke en gebruiksvriendelijke websites. Ik zorg ervoor dat webpagina's er geweldig uitzien en gemakkelijk te gebruiken zijn.</p>
            </div>
            <div className='about-1'>
              <p id={!isDark && 'lightMode-p'}>Mijn favoriete tool is React, waarmee ik dynamische en interactieve elementen aan mijn projecten toevoeg. Buiten het programmeren kun je me vinden terwijl ik nieuwe ontwerpen uitprobeer en geniet van mijn vrije tijd. Laten we samen iets geweldigs bouwen!.</p>
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
                <li id={!isDark ? 'lightMode-li' : 'darkMode-li'}>React</li>
                <li id={!isDark ? 'lightMode-li' : 'darkMode-li'}>CSS</li>
                <li id={!isDark ? 'lightMode-li' : 'darkMode-li'}>HTML</li>
              </ul>
            </div>
          </div>
      </div>
      <CardComp isDark={isDark}/>
    </div>
  )
}

export default About