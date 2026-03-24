import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaTiktok, FaEnvelope, FaInstagram } from 'react-icons/fa';
import logo from '../assets/images/logo.jpeg';

const Footer = () => {
  const socialLinks = [
    { icon: FaFacebook, href: 'https://facebook.com', label: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:bg-blue-400' },
    { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram', color: 'hover:bg-pink-600' },
    { icon: FaTiktok, href: 'https://tiktok.com', label: 'TikTok', color: 'hover:bg-black' },
    { icon: FaEnvelope, href: 'mailto:youthenvironmentalscholar@gmail.com', label: 'Email', color: 'hover:bg-red-600' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src={logo}
                alt="YES Logo"
                className="w-10 h-10 md:w-12 md:h-12 object-contain rounded-full"
              />
              <h3 className="text-2xl font-heading font-bold">YES</h3>
            </div>
            <p className="text-gray-300">
              Empowering youth to lead climate action, innovation, and sustainable change.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link to="/our-work" className="text-gray-300 hover:text-primary-400 transition-colors">Our Work</Link></li>
              <li><Link to="/membership" className="text-gray-300 hover:text-primary-400 transition-colors">Membership</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-primary-400 transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-primary-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <p className="text-gray-300 mb-2">📧 youthenvironmentalscholar@gmail.com</p>
            <p className="text-gray-300 mb-2">📍 Eldoret, Kenya</p>
            <p className="text-gray-300">📞 +254 740 433099</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className={`w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center transition-colors ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Youth Environmental Scholars. All rights reserved.</p>
          <p className="text-sm mt-2">Made with ❤️ for a sustainable future</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;