import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-tg-blue-900 text-white font-body">
      <div className="container mx-auto py-8 px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Treishvaamgroup</h3>
            <p className="text-gray-300 text-sm">Building Foundational Value.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about-us" className="hover:text-tg-gold-500">About Us</Link></li>
              <li><Link to="/our-businesses" className="hover:text-tg-gold-500">Our Businesses</Link></li>
              <li><Link to="/careers" className="hover:text-tg-gold-500">Careers</Link></li>
              <li><Link to="/contact-us" className="hover:text-tg-gold-500">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy-policy" className="hover:text-tg-gold-500">Privacy Policy</Link></li>
              <li><Link to="/terms-of-use" className="hover:text-tg-gold-500">Terms of Use</Link></li>
            </ul>
          </div>
           <div>
            <h3 className="font-heading text-lg font-bold mb-4">Connect</h3>
             {/* Social media icons will go here later */}
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>&copy; {year} Treishvaamgroup. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
