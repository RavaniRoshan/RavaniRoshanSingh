import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const Header: FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`sticky top-4 z-50 transition-all duration-300 mx-4 ${
        isScrolled
          ? 'backdrop-blur-2xl bg-gradient-to-b from-white/80 to-white/60 dark:from-gray-900/80 dark:to-gray-900/60 border border-white/20 dark:border-gray-700/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-2xl'
          : 'backdrop-blur-xl bg-gradient-to-b from-white/70 to-white/50 dark:from-gray-900/70 dark:to-gray-900/50 border border-white/10 dark:border-gray-700/10 shadow-[0_4px_16px_0_rgba(31,38,135,0.25)] rounded-2xl'
      } flex justify-between items-center py-4 px-6 before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent before:pointer-events-none`}
    >
      <div className="group">
        <h1 className="text-xl font-medium transition-all duration-300 hover:scale-105 cursor-pointer">
          Ravani Roshan
        </h1>
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/roshan-ravani-3a79882a3/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 flex items-center mt-1 group-hover:translate-x-1"
            aria-label="LinkedIn Profile"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1 transition-transform duration-300 group-hover:rotate-12"
              aria-hidden="true"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            <span>roshan-ravani</span>
          </a>
          <a
            href="https://github.com/RavaniRoshan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-all duration-300 flex items-center mt-1 group-hover:translate-x-1"
            aria-label="GitHub Profile"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1 transition-transform duration-300 group-hover:rotate-12"
              aria-hidden="true"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
            <span>RavaniRoshan</span>
          </a>
        </div>
      </div>
      <nav className="flex items-center space-x-2">
        <div className="hidden md:flex items-center space-x-2">
          <Link
            to="/"
            className={`relative px-4 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg overflow-hidden group ${
              location.pathname === '/'
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
          >
            <span className="relative z-10">home</span>
            <div
              className={`absolute inset-0 bg-gradient-to-r transition-opacity duration-300 ${
                location.pathname === '/'
                  ? 'from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100'
                  : 'from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 opacity-0 group-hover:opacity-100'
              }`}
              aria-hidden="true"
            />
          </Link>
          <Link
            to="/blog"
            className={`relative px-4 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg overflow-hidden group ${
              location.pathname.startsWith('/blog')
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
          >
            <span className="relative z-10">blog</span>
            <div
              className={`absolute inset-0 bg-gradient-to-r transition-opacity duration-300 ${
                location.pathname.startsWith('/blog')
                  ? 'from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100'
                  : 'from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 opacity-0 group-hover:opacity-100'
              }`}
              aria-hidden="true"
            />
          </Link>
          <Link
            to="/connect"
            className={`relative px-4 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg overflow-hidden group ${
              location.pathname === '/connect'
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
          >
            <span className="relative z-10">connect</span>
            <div
              className={`absolute inset-0 bg-gradient-to-r transition-opacity duration-300 ${
                location.pathname === '/connect'
                  ? 'from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100'
                  : 'from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 opacity-0 group-hover:opacity-100'
              }`}
              aria-hidden="true"
            />
          </Link>
        </div>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-all duration-300 hover:scale-105 hover:rotate-180 hover:shadow-lg"
          aria-label="Toggle theme"
          type="button"
        >
          {theme === 'light' ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300"
              aria-hidden="true"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          )}
        </button>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="absolute top-16 right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg md:hidden">
          <Link
            to="/"
            className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
            onClick={toggleMenu}
          >
            home
          </Link>
          <Link
            to="/blog"
            className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
            onClick={toggleMenu}
          >
            blog
          </Link>
          <Link
            to="/connect"
            className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
            onClick={toggleMenu}
          >
            connect
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;

