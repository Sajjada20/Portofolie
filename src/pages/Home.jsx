import React, { useContext } from 'react'
import './styles/home.css'
import {lorem, lorem2, lorem3, lorem4, lorem5, foto} from '../assets/index'
import Projects from '../comp/Projects'
import Projectwo from '../comp/Projectwo'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../App'




const parag1 = <p>Labore magna ut non <strong>labore Lorem nisi culpa</strong> sint et quis sint. Enim pariatur deserunt do ad exercitation.</p>
const parag2 = <p>Ea ut non cupidatat consequat sint elit ipsum culpa dolor <a>cillum commodo</a>. Do esse excepteur cillum deserunt duis incididunt. Eu tempor ullamco aliqua consectetur incididunt anim dolor sunt laboris adipisicing cupidatat sint.</p>

const parag3 = <p>Labore magna ut non labore Lorem nisi culpa sint et quis sint. <strong>Enim pariatur deserunt</strong> do ad exercitation.</p>
const parag4 = <p>Ea ut non <a>cupidatat consequat</a> sint elit ipsum culpa dolor cillum commodo. Do esse excepteur cillum deserunt duis incididunt. Eu tempor ullamco aliqua consectetur incididunt anim dolor sunt laboris adipisicing cupidatat sint.</p>


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
        <button onClick={clicked} className='btn'>Reach out</button>
      </div>
      <div className='home-project-div'>
          <h1 id='home-proj-h1'>projects</h1>
          <h2 id='home-proj-h2'>Mollit pariatur tempor nisi dolor non consequat magna cupidatat reprehenderit. Aliquip excepteur ullamco aliquip magna est et commodo deserunt ipsum.</h2>
      </div>
      <div>
          <Projects title={'Wax Motif'} image={lorem} parag1={parag1} parag2={parag2} button={'website'} />
          <Projectwo title={'Draze Force'} image={lorem2} parag1={parag3} parag2={parag4} button={'website'}/>
          <Projects title={'Artren'} image={lorem3} parag1={parag1} parag2={parag4} button={'website'} />
          <Projectwo title={'Platform Pro'} image={lorem4} parag1={parag3} parag2={parag2} button={'website'}/>
          <Projects title={'Wallys Vegan'} image={lorem5} parag1={parag3} parag2={parag4} button={'website'} />
          <Projectwo title={'Old Portfolio'} image={lorem} parag1={parag1} parag2={parag2} button={'website'}/>
      </div>
    </div>
  )
}

export default Home