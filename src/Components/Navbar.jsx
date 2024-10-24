import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Product', path: '/product' },
    { name: 'Services', path: '/services' },
    { name: 'Our Company', path: '/ourcompany' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      console.log('Scroll Position:', scrollPosition); // Debugging log
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-blue-500 text-white p-4 shadow-md sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-blue-200 shadow-lg text-black hover:text-blue-500' : ''
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          className="text-2xl font-bold"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/">Logo</Link>
        </motion.div>

        <ul className="hidden md:flex space-x-8">
          {menuItems.map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="group relative transition-transform duration-300 ease-in-out transform"
            >
              <Link to={item.path} className="hover:scale-y-150 transition-colors duration-300">
                {item.name}
              </Link>
              <div className="bg-white rounded-md w-0 group-hover:w-[100%] transition-all duration-300 ease-in-out h-[2px] absolute bottom-0 left-0" />
            </motion.li>
          ))}
        </ul>

        <motion.div
          className="md:hidden text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <button
            aria-label="Toggle Menu"
            onClick={toggleMobileMenu}
            className="focus:outline-none"
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMobileMenuOpen ? <FaTimes className="text-3xl" /> : <FaBars className="text-3xl" />}
            </motion.div>
          </button>
        </motion.div>
      </div>

      {isMobileMenuOpen && (
        <motion.ul
          className="absolute top-16 left-0 w-full bg-blue-400 text-white space-y-2 p-4 rounded-md z-50"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.4 }}
        >
          {menuItems.map((item, index) => (
            <motion.li
              key={item.name}
              className="hover:bg-blue-400 transition-colors duration-300 rounded-md z-50"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.3 }}
            >
              <Link
                to={item.path}
                className="block p-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </nav>
  );
};

export default Navbar;
