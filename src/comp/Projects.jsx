import React, { useContext } from 'react'
import {lorem, lorem2, lorem3, lorem4, lorem5, foto} from '../assets/index'
import './projects.css'
import { AppContext } from '../App'


const gitUrl = 'https://github.com/Sajjada20/BankGen'
const webUrl = 'https://bank-gen-sajjada20s-projects.vercel.app/'

function Projects(props) {
  const {isDark} = useContext(AppContext)
  const {title, image, button} = props.data
  const par1 = props.parag1
  const par2 = props.parag2

  const AnotherPage = (url) => {
    window.open(url, '_blank');
}


  return (
    <div className='project'>
        <div className='projects'>
            <img loading='lazy' id='proj-img' src={image} alt="imageUrl" />
            <div className='proj-div-2'>
                <h1 id='proj-h1'>{title}</h1>
                <p id={isDark ? 'proj-p1' : 'proj-p1-light'}>{par1}</p>
                <p id={isDark ? 'proj-p2' : 'proj-p2-light'}>{par2}</p>
                <div>
                <button onClick={() => AnotherPage(webUrl)} className='btnt'>{button}</button>
                <span id='span-project'></span>
                <button className='btn' onClick={() => AnotherPage(gitUrl)}>Github</button>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Projects