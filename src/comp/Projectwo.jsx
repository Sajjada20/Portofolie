import React, { useContext } from 'react'
import {lorem, lorem2, lorem3, lorem4, lorem5, foto} from '../assets/index'
import './projectwo.css'
import { AppContext } from '../App'

const gitUrl = 'https://github.com/Sajjada20/Verdant'
const webUrl = 'https://verdant-liard.vercel.app/'


function Projects(props) {
    const {isDark} = useContext(AppContext)
    const {title, image, button} = props.data
    const par1 = props.parag1
    const par2 = props.parag2

    const AnotherPage = (url) => {
      window.open(url, '_blank');
  }
  

  return (
    <div className='projectt'>
        <div className='projectst'>
            <div className='proj-div-2t'>
                <h1 id='proj-h1t'>{title}</h1>
                <p id={isDark ? 'proj-p1t' : 'proj-p1-lightt'}>{par1}</p>
                <p id={isDark ? 'proj-p2t' : 'proj-p2-lightt'}>{par2}</p>
                <div>
                <button onClick={() => AnotherPage(webUrl)} className='btnt'>{button}</button>
                <span id='span-project'></span>
                <button className='btn' onClick={() => AnotherPage(gitUrl)}>Github</button>
                </div>
            </div>
            <img loading='lazy'  id='proj-imgt' src={image} alt="imageUrlt" />
        </div>
    </div>
  )
}

export default Projects