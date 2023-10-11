import React, { useContext } from 'react'
import {lorem, lorem2, lorem3, lorem4, lorem5, foto} from '../assets/index'
import './projectwo.css'
import { AppContext } from '../App'




function Projects(props) {
    const {isDark} = useContext(AppContext)
    const {title, image, parag1, parag2, button} = props
  return (
    <div className='projectt'>
        <div className='projectst'>
            <div className='proj-div-2t'>
                <h1 id='proj-h1t'>{title}</h1>
                <p id={isDark ? 'proj-p1t' : 'proj-p1-lightt'}>{parag1}</p>
                <p id={isDark ? 'proj-p2t' : 'proj-p2-lightt'}>{parag2}</p>
                <button onClick={null} className='btnt'>{button}</button>
            </div>
            <img loading='lazy'  id='proj-imgt' src={image} alt="imageUrlt" />
        </div>
    </div>
  )
}

export default Projects