import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import tgm from '../assets/tgmf.png'
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsPortfolioOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div
      className="w-full min-h-screen bg-center relative bg-fixed bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80)`,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        backgroundBlendMode: 'overlay',
      }}
    >
      <nav className="fixed w-full z-50 bg-gradient-to-b from-black/70 to-transparent backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-24 flex items-center justify-between">
            <div className="flex-shrink-0">
              {/* <h1 className="text-2xl font-bold text-white">DigitalGrowth</h1> */}
              <img src={tgm} alt="" className='h-20'/>
            </div>

            <div className="hidden md:block">
              <ul className="flex items-center space-x-8">
                <li><Link to="/" className="text-white font-bold text-lg hover:text-blue-400">Home</Link></li>
                <li><Link to="/about" className="text-white font-bold text-lg hover:text-blue-400">About</Link></li>
                <li
                  className="relative"
                  onMouseEnter={() => setIsPortfolioOpen(true)}
                  onMouseLeave={() => setIsPortfolioOpen(false)}
                >
                  <span className="text-white font-bold text-lg cursor-pointer hover:text-blue-400">Portfolio</span>
                  <ul
                    className={`absolute top-full left-0 mt-2 bg-black/95 backdrop-blur-sm w-48 rounded-lg shadow-xl border border-gray-800
                      transition-all duration-200 ease-in-out
                      ${isPortfolioOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
                    ref={dropdownRef}
                  >
                    <li><Link to="/content" className="block px-4 py-3 text-white text-base hover:bg-indigo-600">Content Portfolio</Link></li>
                    <li><Link to="/sites" className="block px-4 py-3 text-white text-base hover:bg-indigo-600">Website Portfolio</Link></li>
                    <li><Link to="/seo" className="block px-4 py-3 text-white text-base hover:bg-indigo-600">SEO Portfolio</Link></li>
                    <li><Link to="/ads" className="block px-4 py-3 text-white text-base hover:bg-indigo-600">Ads Portfolio</Link></li>
                  </ul>
                </li>
                <li><Link to="/blog" className="text-white font-bold text-lg hover:text-blue-400">Blog</Link></li>
                <li><Link to="/contact" className="text-white font-bold text-lg hover:text-blue-400">Contact</Link></li>
              </ul>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white p-2 rounded-lg hover:bg-white/10"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        <div
          className={`md:hidden absolute top-24 inset-x-0 bg-black/95 backdrop-blur-sm transition-all duration-300 ease-in-out
            ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}
        >
          <div className="px-4 pt-2 pb-3 space-y-1">
            <li><Link to="/" className="block py-3 text-white font-bold text-lg hover:text-blue-400">Home</Link></li>
            <li><Link to="/about" className="block py-3 text-white font-bold text-lg hover:text-blue-400">About</Link></li>
            <li>
              <button
                onClick={() => setIsPortfolioOpen(!isPortfolioOpen)}
                className="block py-3 text-white font-bold text-lg hover:text-blue-400"
              >
                Portfolio
              </button>
              {isPortfolioOpen && (
                <ul className="mt-2 bg-black/95 backdrop-blur-sm rounded-lg shadow-xl border border-gray-800">
                  <li><Link to="/content" className="block px-4 py-3 text-white text-base hover:bg-indigo-600">Content Portfolio</Link></li>
                  <li><Link to="/sites" className="block px-4 py-3 text-white text-base hover:bg-indigo-600">Website Portfolio</Link></li>
                  <li><Link to="/seo" className="block px-4 py-3 text-white text-base hover:bg-indigo-600">SEO Portfolio</Link></li>
                  <li><Link to="/ads" className="block px-4 py-3 text-white text-base hover:bg-indigo-600">Ads Portfolio</Link></li>
                </ul>
              )}
            </li>
            <li><Link to="/blog" className="block py-3 text-white font-bold text-lg hover:text-blue-400">Blog</Link></li>
            <li><Link to="/contact" className="block py-3 text-white font-bold text-lg hover:text-blue-400">Contact</Link></li>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
