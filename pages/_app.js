import "tailwindcss/tailwind.css";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);

  if (document && window) {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  const toggleDarkMode = (darkModeActive) => {
    if (darkModeActive) {
      localStorage.theme = "dark";
    } else {
      localStorage.theme = "light";
    }
    setDarkMode(darkModeActive);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Navbar setDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Component {...pageProps} darkMode={darkMode} />
    </div>
  );
}

export default MyApp;
