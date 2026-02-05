import React, { useState } from 'react';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openMobileMenu = () => {
    setMobileMenuOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = '';
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      closeMobileMenu();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  return (
    <header className="sticky top-0 z-[1000] bg-white shadow-md">
      {/* Desktop Navigation */}
      <nav className="hidden md:block border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="text-2xl font-bold tracking-wider">
                <span className="text-black">Icekettle Jeweller</span>
              </a>
              <p className="text-xs text-gray-600 italic">Feels Rich</p>
            </div>

            {/* Menu Items */}
            <div className="flex items-center space-x-8">
              <a
                href="#"
                onClick={(e) => handleNavClick(e, '#')}
                className="text-sm font-medium text-black border-b-2 border-black pb-1"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={(e) => handleNavClick(e, '#about')}
                className="text-sm font-medium text-gray-700 hover:text-black transition"
              >
                ABOUT US
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="text-sm font-medium text-gray-700 hover:text-black transition"
              >
                CONTACT
              </a>

              {/* Cart Icon */}
              <a href="#" className="relative text-gray-700 hover:text-black transition">
                <i className="fas fa-shopping-cart text-lg"></i>
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div>
              <a href="#" className="text-xl font-bold tracking-wider">
                <span className="text-black">Icekettle Jeweller</span>
              </a>
              <p className="text-xs text-gray-600 italic">Feels Rich</p>
            </div>

            {/* Mobile Menu Button & Cart */}
            <div className="flex items-center space-x-4">
              <button
                onClick={openMobileMenu}
                className="text-gray-700 hover:text-black"
                aria-label="Open menu"
              >
                <i className="fas fa-bars text-xl"></i>
              </button>
              <a href="#" className="relative text-gray-700 hover:text-black">
                <i className="fas fa-shopping-cart text-lg"></i>
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-2xl z-50 transition-transform duration-300 ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6">
          <button
            onClick={closeMobileMenu}
            className="mb-8 text-gray-700 hover:text-black"
            aria-label="Close menu"
          >
            <i className="fas fa-times text-2xl"></i>
          </button>
          <div className="flex flex-col space-y-6">
            <a
              href="#"
              onClick={(e) => handleNavClick(e, '#')}
              className="text-base font-medium text-black"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, '#about')}
              className="text-base font-medium text-gray-700 hover:text-black"
            >
              ABOUT US
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="text-base font-medium text-gray-700 hover:text-black"
            >
              CONTACT
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          onClick={closeMobileMenu}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        ></div>
      )}
    </header>
  );
};

export default Header;
