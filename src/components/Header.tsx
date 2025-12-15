import type { FC } from 'react';
import { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const Header: FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      const threshold = 10; // Buffer to prevent flickering on slow scroll

      if (currentScrollY <= 50) {
        // Always expanded at the very top
        setIsScrolled(false);
      } else if (Math.abs(currentScrollY - lastScrollY.current) > threshold) {
        if (currentScrollY > lastScrollY.current) {
          // Scrolling down -> Collapse
          setIsScrolled(true);
        } else {
          // Scrolling up -> Decollapse (Expand)
          setIsScrolled(false);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`sticky top-4 z-50 transition-all duration-500 ease-in-out mx-4 ${isScrolled
          ? 'py-2 md:py-2 backdrop-blur-3xl backdrop-saturate-150 bg-gradient-to-b from-white/40 to-white/20 dark:from-gray-900/40 dark:to-gray-900/20 border border-white/30 dark:border-gray-700/30'
          : 'py-3 md:py-6 backdrop-blur-2xl backdrop-saturate-150 bg-gradient-to-b from-white/30 to-white/10 dark:from-gray-900/30 dark:to-gray-900/10 border border-white/20 dark:border-gray-700/20'
          } shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-2xl flex justify-between items-center px-4 md:px-8 before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent before:pointer-events-none`}
      >
        {/* Left Section - Logo and Social Links */}
        <div className="group flex items-center transition-all duration-500">
          {/* Morphing Logo - Desktop Only */}
          <h1 className="relative font-medium transition-all duration-500 cursor-pointer hidden md:block">
            {/* Expanded State Logo */}
            <span
              className={`transition-all duration-500 ease-in-out whitespace-nowrap overflow-hidden ${isScrolled ? 'opacity-0 scale-90 max-w-0' : 'opacity-100 scale-100 max-w-[200px]'
                } text-xl block`}
            >
              Ravani Roshan
            </span>
            {/* Collapsed State Logo */}
            <span
              className={`transition-all duration-500 ease-in-out whitespace-nowrap absolute top-1/2 left-0 -translate-y-1/2 ${isScrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'
                } text-2xl font-bold block`}
            >
              RR
            </span>
          </h1>

          {/* Mobile Logo (Static) */}
          <h1 className="text-lg font-medium cursor-pointer md:hidden">
            Ravani Roshan
          </h1>

          {/* Social links - Desktop Collapse Effect */}
          <div
            className={`hidden md:flex items-center overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${isScrolled ? 'max-w-0 opacity-0 -translate-x-4 pointer-events-none' : 'max-w-[400px] opacity-100 translate-x-4 ml-4'
              }`}
          >
            <div className="flex space-x-2">
              <a
                href="https://www.linkedin.com/in/roshan-ravani-3a79882a3/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 flex items-center p-2 rounded-full hover:bg-white/20 dark:hover:bg-white/10"
                aria-label="LinkedIn Profile"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://x.com/RoshanAIs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-all duration-300 flex items-center p-2 rounded-full hover:bg-white/20 dark:hover:bg-white/10"
                aria-label="X (Twitter) Profile"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4l16 16M20 4l-16 16" strokeLinecap="round" />
                </svg>
              </a>
              <a
                href="https://github.com/RavaniRoshan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-all duration-300 flex items-center p-2 rounded-full hover:bg-white/20 dark:hover:bg-white/10"
                aria-label="GitHub Profile"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
            </div>
          </div>

          {/* Social icons - Mobile Only (Visible as icons) */}
          <div className="flex md:hidden space-x-2 ml-2 overflow-x-auto no-scrollbar">
            <a
              href="https://www.linkedin.com/in/roshan-ravani-3a79882a3/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 flex items-center"
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
                className="mr-1"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="https://x.com/RoshanAIs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-all duration-300 flex items-center"
              aria-label="X (Twitter) Profile"
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
                className="mr-1"
              >
                <path d="M4 4l16 16M20 4l-16 16" strokeLinecap="round" />
              </svg>
            </a>
            <a
              href="https://github.com/RavaniRoshan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-all duration-300 flex items-center"
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
                className="mr-1"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Section - Desktop Navigation and Theme Toggle */}
        <nav className="hidden md:flex items-center space-x-4 relative">
          {['home', 'blog', 'contact'].map((page) => {
            const path = page === 'home' ? '/' : `/${page}`;
            const isActive = location.pathname === path;

            return (
              <Link
                key={page}
                to={path}
                className={`relative px-5 py-2.5 rounded-full font-medium transition-all duration-300 overflow-hidden group backdrop-blur-md border ${isActive
                  ? 'bg-white/20 dark:bg-white/10 border-white/40 dark:border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.2)] text-black dark:text-white'
                  : 'bg-white/5 dark:bg-black/5 border-white/10 dark:border-white/5 text-gray-700 dark:text-gray-300 hover:bg-white/15 dark:hover:bg-white/10 hover:border-white/20 hover:scale-105'
                  }`}
              >
                <span className="relative z-10 capitalize">{page}</span>
              </Link>
            );
          })}

          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-white/10 dark:bg-black/20 border border-white/10 backdrop-blur-md text-gray-900 dark:text-gray-100 transition-all duration-300 hover:scale-105 hover:rotate-180 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] hover:border-white/30"
            aria-label="Toggle theme"
            type="button"
          >
            {theme === 'light' ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
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
                width="18"
                height="18"
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
        </nav>

        {/* Mobile - Theme Toggle and Hamburger Menu */}
        <div className="flex md:hidden items-center space-x-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            aria-label="Toggle theme"
            type="button"
          >
            {theme === 'light' ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
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
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            aria-label="Toggle mobile menu"
            type="button"
          >
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-64 z-50 transform transition-transform duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } bg-white dark:bg-gray-900 shadow-2xl`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Close Button */}
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-all duration-300 hover:scale-105"
              aria-label="Close menu"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-4 mb-8">
            <Link
              to="/"
              className={`relative px-6 py-3 rounded-full font-medium transition-all duration-300 text-center ${location.pathname === '/'
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                : 'bg-gradient-to-r from-blue-400/40 to-purple-500/40 text-white/70'
                }`}
            >
              home
            </Link>
            <Link
              to="/blog"
              className={`relative px-6 py-3 rounded-full font-medium transition-all duration-300 text-center ${location.pathname === '/blog'
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                : 'bg-gradient-to-r from-blue-400/40 to-purple-500/40 text-white/70'
                }`}
            >
              blog
            </Link>
            <Link
              to="/contact"
              className={`relative px-6 py-3 rounded-full font-medium transition-all duration-300 text-center ${location.pathname === '/contact'
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                : 'bg-gradient-to-r from-blue-400/40 to-purple-500/40 text-white/70'
                }`}
            >
              contact
            </Link>
          </nav>

          {/* Social Links removed from mobile menu as they are now in header */}
        </div>
      </div>
    </>
  );
};

export default Header;

