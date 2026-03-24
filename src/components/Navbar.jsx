import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../assets/images/logo.jpeg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/our-work', label: 'Our Work' },
    { path: '/membership', label: 'Membership' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center py-3 md:py-4">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-2 md:space-x-3 group">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
              className="relative"
            >
              <img 
                src={logo}
                alt="YES Logo"
                className="w-10 h-10 md:w-12 md:h-12 object-contain rounded-full"
              />
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-primary-500"
                initial={{ scale: 1, opacity: 0.5 }}
                animate={{ scale: 1.2, opacity: 0 }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
            
            <div className="flex flex-col">
              <span className="text-sm md:text-lg lg:text-xl font-heading font-bold bg-gradient-to-r from-primary-700 to-purple-700 bg-clip-text text-transparent leading-tight">
                Youth Environmental
              </span>
              <span className="text-sm md:text-lg lg:text-xl font-heading font-bold bg-gradient-to-r from-purple-700 to-purple-500 bg-clip-text text-transparent leading-tight">
                Scholars
              </span>
            </div>
          </Link>

          {/* Desktop & Tablet Menu */}
          <div className="hidden md:flex md:space-x-4 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-medium transition-colors duration-300 text-sm lg:text-base whitespace-nowrap ${
                  isActive(link.path)
                    ? 'text-primary-600'
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-[-4px] left-0 right-0 h-0.5 bg-primary-600"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-white rounded-2xl shadow-lg mb-4"
            >
              <div className="flex flex-col py-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`px-6 py-3 font-medium transition-colors ${
                      isActive(link.path)
                        ? 'bg-primary-50 text-primary-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;