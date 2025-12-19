import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { title: 'About Us', path: '/about-us' },
    { title: 'Our Businesses', path: '/our-businesses' },
    { title: 'Sustainability', path: '/sustainability' },
    { title: 'Investors', path: '/investors' },
    { title: 'Newsroom', path: '/newsroom' },
    { title: 'Careers', path: '/careers' },
    { title: 'Contact Us', path: '/contact-us' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 font-heading">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-tg-blue-900">
          Treishvaam<span className="text-tg-gold-500">group</span>
        </Link>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <Link key={link.title} to={link.path} className="text-tg-gray-700 hover:text-tg-gold-500 transition duration-300">
              {link.title}
            </Link>
          ))}
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-tg-blue-900 focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pt-2 pb-4">
          {navLinks.map((link) => (
            <Link key={link.title} to={link.path} className="block py-2 text-tg-gray-700 hover:text-tg-gold-500" onClick={() => setIsOpen(false)}>
              {link.title}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
