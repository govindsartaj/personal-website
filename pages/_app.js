import "tailwindcss/tailwind.css";
import { useState } from 'react'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);

  return <div className={darkMode ? 'dark' : ''}>
  <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
  <Component {...pageProps} darkMode={darkMode} />
  </div>
}

export default MyApp