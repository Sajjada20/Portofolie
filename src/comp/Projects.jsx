import React, { useContext } from 'react'
import {lorem, lorem2, lorem3, lorem4, lorem5, foto} from '../assets/index'
import './projects.css'
import { AppContext } from '../App'




function Projects(props) {
  const {isDark} = useContext(AppContext)
    const {title, image, parag1, parag2, button} = props
  return (
    <div className='project'>
        <div className='projects'>
            <img loading='lazy' id='proj-img' src={image} alt="imageUrl" />
            <div className='proj-div-2'>
                <h1 id='proj-h1'>{title}</h1>
                <p id={isDark ? 'proj-p1' : 'proj-p1-light'}>{parag1}</p>
                <p id={isDark ? 'proj-p2' : 'proj-p2-light'}>{parag2}</p>
                <button onClick={null} className='btn'>{button}</button>
            </div>
        </div>
    </div>
  )
}

export default Projects