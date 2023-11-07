import React, { useContext } from 'react'
import './styles/home.css'
import {lorem, lorem2, lorem3, lorem4, lorem5, foto} from '../assets/index'
import Projects from '../comp/Projects'
import Projectwo from '../comp/Projectwo'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../App'
import { HomeProjects } from '../data'
/* project One Info */
const projectOne= HomeProjects[0]
const parag1 = <p>The Next <strong>Generation</strong> <a>Payment Method</a>.</p>
const parag2 = <p>With the right <strong>credit card</strong>, you can improve your financial life by building <a>credit</a>, <a>earning rewards</a> and <a>saving money</a>.</p>


/* project Two Info */
const projectTwo = HomeProjects[1]
const parag3 = <p>Your <strong>Imaginative</strong> Fruit Oasis!</p>
const parag4 = <p>At Verdant, we offer a <a>delightful virtual experience</a> filled with imaginative fruits and endless fun. Explore our <a>colorful fruit aisles</a>, shop for <as>fantastical produce</as>, and set your <a>creativity free!</a></p>


function Home() {
  const navigate = useNavigate();
  const {isDark} = useContext(AppContext)
  

  function clicked() {
    navigate('/contact')
  }
  return (
    <div className='home-div'>
      <div className='home-hero-div'>
        <img src={foto} alt="profile-foto" className={isDark ? 'foto' : 'foto-light'} />
        <h2 id='h2'><a>Hi</a>, I'm <strong>Sajjad</strong> 👋</h2>
        <h1 id={isDark ? 'h1' : 'h1-light'}>FRONT-END<br/>WEB DEVELOPER.</h1>
        <button onClick={clicked} className='btn'>Contact opnemen</button>
      </div>
      <div className='home-project-div'>
          <h1 id='home-proj-h1'>Mijn eerdere projecten</h1>
          {/* <h2 id='home-proj-h2'>Mollit pariatur tempor nisi dolor non consequat magna cupidatat reprehenderit. Aliquip excepteur ullamco aliquip magna est et commodo deserunt ipsum.</h2> */}
      </div>
      <div>
          <Projects parag1={parag1} parag2={parag2} data={projectOne} />
          <Projectwo parag1={parag3} parag2={parag4} data={projectTwo} />
      </div>
    </div>
  )
}

export default Home