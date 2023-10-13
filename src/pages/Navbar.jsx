import React, { useContext, useEffect, useState } from 'react'
import './styles/navbar.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AppContext } from '../App'



const menu_icon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="menu_icon">
<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

const close_icon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="close_icon">
<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

const sunLight = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="sun_light">
<path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
</svg>

const sunDark = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="sun_light">
<path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
</svg>


// add theme using icons above !



function Navbar() {
  const [close, setClose] = useState(true)
  const location = useLocation();
  const navigate = useNavigate();
  const {isDark, changeTheme} = useContext(AppContext)


  useEffect(() => {
    setClose(true)
  }, [location])


  return (
    <div className={isDark ? 'navbar' : 'navbar-light-mode'}>
      <div className='navbar-div'>
        <div className='navbar-idk'>
          <div className='naam-div' onClick={() => navigate('/')}>
              <h1 id={!isDark && 'navbar-h1'}><span id={isDark ? 's' : 'l'}>S</span>ajjad</h1>
          </div>
          <div className='div-sun-icon' onClick={changeTheme} >
            {isDark ? sunDark : sunLight}
          </div>
        </div>

        {/* mobile */}
        <div className={close===false ? 'div-links-mob' : 'non-display'}>
            <Link className={isDark ? 'links' : 'links-light-mode'} to={'/'}>home</Link>
            <Link className={isDark ? 'links' : 'links-light-mode'} to={'/about'}>about</Link>
            <Link className={isDark ? 'links' : 'links-light-mode'} to={'/contact'}>contact</Link>
        </div>
        <div className='div-icon' onClick={() => setClose((prevBool) => (!prevBool))}>
          {close===true ? menu_icon : close_icon}
        </div>
        <div className='div-links-lap'>
              <Link className='link_lap' to={'/'}>Home</Link>
              <Link className='link_lap' to={'/about'}>About</Link>
              <Link className='link_lap' to={'/contact'}>Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar













            