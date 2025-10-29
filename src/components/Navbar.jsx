import React from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-6 py-4 max-w-6xl">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" className="text-xl font-bold text-gray-800 hover:text-purple-600 transition">
            MyProfile
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-gray-700 hover:text-purple-600 transition font-medium">
              About
            </a>
            <a href="#skills" className="text-gray-700 hover:text-purple-600 transition font-medium">
              Skills
            </a>
            <a href="#portfolio" className="text-gray-700 hover:text-purple-600 transition font-medium">
              Portfolio
            </a>
            <a href="#contact" className="text-gray-700 hover:text-purple-600 transition font-medium">
              Contact
            </a>
          </div>

          {/* Hire Me Button - Desktop */}
          <div className="hidden md:block">
            <a href="#contact">
              <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition font-medium flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                </svg>
                Hire Me
              </button>
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col gap-4">
              <a 
                href="#about" 
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-purple-600 transition font-medium py-2"
              >
                About
              </a>
              <a 
                href="#skills" 
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-purple-600 transition font-medium py-2"
              >
                Skills
              </a>
              <a 
                href="#portfolio" 
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-purple-600 transition font-medium py-2"
              >
                Portfolio
              </a>
              <a 
                href="#contact" 
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-purple-600 transition font-medium py-2"
              >
                Contact
              </a>
              <a href="#contact" onClick={() => setIsOpen(false)}>
                <button className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition font-medium">
                  Hire Me
                </button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar