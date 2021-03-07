import DarkModeToggle from "./DarkModeToggle"
import { useState } from 'react'


export default function Navbar({ setDarkMode, darkMode }) {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed dark:bg-darkbg bg-white w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="text-xl dark:text-white text-gray-900 font-semibold">Govind Brahmanyapura</div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                <a href="#" className="dark:text-white hover:bg-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>

                <a href="#" className="dark:text-white hover:bg-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>

                <a href="#" className="dark:text-white hover:bg-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>

                <a href="#" className="dark:text-white hover:bg-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>

                <a href="#" className="dark:text-white hover:bg-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Blog</a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <DarkModeToggle setDarkMode={setDarkMode} darkMode={darkMode} />

            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            {/* <!-- Mobile menu button --> */}
            <button type="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="bg-gray-100 dark:bg-black inline-flex items-center justify-center p-2 rounded-md dark:text-white hover:text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              {/* <!--
              Heroicon name: outline/menu

              Menu open: "hidden", Menu closed: "block"
            --> */}
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* <!--
              Heroicon name: outline/x

              Menu open: "block", Menu closed: "hidden"
            --> */}
              <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <div className={`md:hidden ${mobileMenuOpen ? 'hidden' : ''}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
          <a href="#" className="dark:text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</a>

          <a href="#" className="dark:text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>

          <a href="#" className="dark:text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>

          <a href="#" className="dark:text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>

          <a href="#" className="dark:text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Reports</a>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-700 dark:text-white text-center">
          <DarkModeToggle setDarkMode={setDarkMode} darkMode={darkMode} />
          All rights reserved.
        </div>
      </div>
    </nav>
  )
}