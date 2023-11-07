import './App.css'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import {Home, Contact, About, Navbar} from './pages/IndexPage'
import { createContext, useState } from 'react';
import Footer from './comp/Footer';
import Error from './comp/Error'
import { useContext } from 'react';

export const AppContext = createContext();

export const useContextHook = () => {
  return useContext(AppContext)
}


function App() {
  const [isDark, setIsDark] = useState(true)

  const changeTheme = () => {
    setIsDark((prevBool) => (!prevBool)) // changing theme function
  }
  return (
    <div className={isDark ? 'App' : 'light-app'}>
      <AppContext.Provider value={{isDark, changeTheme}}>
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/about' element={<About/>} />
            <Route path='*' element={<Error/>} />

          </Routes>
        <Footer/>
        </Router>
      </AppContext.Provider>
    </div>
  )
}

export default App
