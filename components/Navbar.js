import DarkModeToggle from "./DarkModeToggle"
import { useState } from 'react'
import Link from 'next/link'


export default function Navbar({ setDarkMode, darkMode }) {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed z-50 w-full bg-white dark:bg-darkbg">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href='/'><a onClick={() => setMobileMenuOpen(false)} className="text-xl font-thin text-gray-900 dark:text-white"><code>{'<Govind />'}</code></a></Link>
            </div>
            <div className="hidden md:block">
              <div className="flex items-baseline ml-10 space-x-4 font-light">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                <Link href='/'><a className="px-3 py-2 text-sm font-medium rounded-md dark:text-white hover:bg-gray-300 hover:text-white">Home</a></Link>

                <Link href='/about'><a className="px-3 py-2 text-sm font-medium rounded-md dark:text-white hover:bg-gray-300 hover:text-white">About</a></Link>

                <Link href='/projects'><a className="px-3 py-2 text-sm font-medium rounded-md dark:text-white hover:bg-gray-300 hover:text-white">Projects</a></Link>

                <Link href='/contact'><a className="px-3 py-2 text-sm font-medium rounded-md dark:text-white hover:bg-gray-300 hover:text-white">Contact</a></Link>

                <Link href='/blog'><a className="px-3 py-2 text-sm font-medium rounded-md dark:text-white hover:bg-gray-300 hover:text-white">Blog</a></Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center ml-4 md:ml-6">
              <DarkModeToggle setDarkMode={setDarkMode} darkMode={darkMode} />

            </div>
          </div>
          <div className="flex -mr-2 md:hidden">
            {/* <!-- Mobile menu button --> */}
            <button type="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="inline-flex items-center justify-center p-2 bg-gray-100 rounded-md dark:bg-black dark:text-white hover:text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              {/* <!--
              Heroicon name: outline/menu

              Menu open: "hidden", Menu closed: "block"
            --> */}
              <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* <!--
              Heroicon name: outline/x

              Menu open: "block", Menu closed: "hidden"
            --> */}
              <svg className="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <div className={`md:hidden ${!mobileMenuOpen ? 'hidden' : 'block'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
          <Link href='/'><a onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium rounded-md dark:text-white hover:bg-gray-700 hover:text-white">Home</a></Link>

          <Link href='/about'><a onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium rounded-md dark:text-white hover:bg-gray-700 hover:text-white">About</a></Link>

          <Link href='/projects'><a onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium rounded-md dark:text-white hover:bg-gray-700 hover:text-white">Projects</a></Link>

          <Link href='/contact'><a onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium rounded-md dark:text-white hover:bg-gray-700 hover:text-white">Contact</a></Link>

          <Link href='/blog'><a onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium rounded-md dark:text-white hover:bg-gray-700 hover:text-white">Blog</a></Link>
        </div>
        <div className="pt-4 pb-3 text-center border-t border-b border-gray-700 rounded-b-xl dark:text-white">
          <DarkModeToggle setDarkMode={setDarkMode} darkMode={darkMode} />
          Built with Next.js and TailwindCSS. <br /> All rights reserved © 2021
        </div>
      </div>
    </nav>
  )
}