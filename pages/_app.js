import "tailwindcss/tailwind.css";
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);


  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true)
    } else {
      setDarkMode(false)
    }
  }, [])


  const toggleDarkMode = (darkModeActive) => {
    if (darkModeActive) {
      localStorage.theme = 'dark'
    } else {
      localStorage.theme = 'light'
    }
    setDarkMode(darkModeActive)
  }
  

  return <div className={darkMode ? 'dark' : ''}>
  <Navbar setDarkMode={toggleDarkMode} darkMode={darkMode} />
  <Component {...pageProps} darkMode={darkMode} />
  </div>
}

export default MyApp