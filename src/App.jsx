import './App.css'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import {Home, Contact, About, Navbar} from './pages/IndexPage'
import { createContext, useState } from 'react';
import Footer from './comp/Footer';

export const AppContext = createContext();

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
          </Routes>
        </Router>
        {/* <Footer/> */}
      </AppContext.Provider>
    </div>
  )
}

export default App
