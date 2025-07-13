import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import LogoWithText from './LogoWithText';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigation = (href: string) => {
    setIsMobileMenuOpen(false); // Close mobile menu on navigation
    if (href.startsWith('#')) {
      // If we're not on the home page, navigate to home first
      if (location.pathname !== '/') {
        navigate('/');
        // Wait for navigation to complete, then scroll
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // We're already on home page, just scroll
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      // Regular navigation
      navigate(href);
    }
  };

  return (
    <>
      <motion.header 
        className="fixed top-0 z-50 w-full bg-black/95 backdrop-blur-md"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <button
              onClick={() => handleNavigation('/')}
            >
              <LogoWithText />
            </button>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {[
                { name: 'AI Services', href: '#services' },
                { name: 'Modernization', href: '#modernization' },
                { name: 'Team', href: '#team' },
                { name: 'Careers', href: '/careers' }
              ].map((item, index) => (
                <motion.a
                  key={item.name}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(item.href);
                  }}
                  href="#"
                  className="text-white hover:text-yellow-500 transition-colors font-medium relative"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {item.name}
                  <motion.div
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </nav>

            <motion.a
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('#contact');
              }}
              href="#"
              className="hidden md:block bg-transparent border border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors duration-300"
            >
              Contact Us
            </motion.a>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div 
              className="absolute inset-0 bg-black/50"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              className="absolute top-20 right-0 left-0 bg-black/95 backdrop-blur-md mx-4 rounded-lg p-6"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <nav className="flex flex-col space-y-6">
                {[
                  { name: 'AI Services', href: '#services' },
                  { name: 'Modernization', href: '#modernization' },
                  { name: 'Team', href: '#team' },
                  { name: 'Careers', href: '/careers' }
                ].map((item) => (
                  <a
                    key={item.name}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(item.href);
                    }}
                    href="#"
                    className="text-white hover:text-yellow-500 transition-colors font-medium text-lg py-2"
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation('#contact');
                  }}
                  href="#"
                  className="bg-transparent border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors duration-300 text-center"
                >
                  Contact Us
                </a>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;