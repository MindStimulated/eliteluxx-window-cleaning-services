import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';

interface HeaderProps {
  onHomeClick?: () => void;
  onNavigationClick?: (page: 'blog' | 'contact' | 'services') => void;
}

const Header: React.FC<HeaderProps> = ({ onHomeClick, onNavigationClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    // Navigate to home page using internal navigation
    if (onHomeClick) {
      onHomeClick();
    } else {
      // Fallback to external navigation if prop not provided
      window.location.href = '/';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const locations = [
    'Cathedral City',
    'Coachella',
    'Indian Wells',
    'Indio',
    'La Quinta',
    'Palm Desert',
    'Palm Springs',
    'Rancho Mirage',
    'Riverside County',
    'Thermal'
  ];

  const handleLocationClick = (location: string) => {
    // Create a new page URL with the location parameter
    const locationSlug = location.toLowerCase().replace(/\s+/g, '-');
    window.location.href = `/location/${locationSlug}`;
  };

  const handleNavClick = (item: { name: string; href: string; isPage: boolean }) => {
    if (item.isPage && onNavigationClick) {
      // Handle page navigation for blog, contact, and services
      if (item.href === 'blog' || item.href === 'contact' || item.href === 'services') {
        onNavigationClick(item.href as 'blog' | 'contact' | 'services');
      }
    } else if (!item.isPage) {
      // Handle scroll to section for non-page links like About
      const element = document.querySelector(item.href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: 'Services', href: 'services', isPage: true },
    { name: 'About', href: '#about', isPage: false },
    { name: 'Contact Us', href: 'contact', isPage: true },
    { name: 'Blog', href: 'blog', isPage: true },
  ];

  // Determine text color based on scroll state
  const textColor = isScrolled ? 'text-deep-charcoal' : 'text-white';
  const hoverColor = isScrolled ? 'hover:text-champagne-gold' : 'hover:text-champagne-gold';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'header-glass shadow-subtle'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-site mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Clickable */}
          <button 
            onClick={handleLogoClick}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200"
          >
            <img 
              src="https://khwmoizeigmddolwtrtl.supabase.co/storage/v1/object/public/eliteluxx-cleaning/images/website/eliteluxx-logo.PNG" 
              alt="EliteLuxx Window Cleaning" 
              className="w-10 h-10 md:w-12 md:h-12 object-contain"
            />
            <span className={`font-lora font-semibold text-xl ${textColor} transition-colors duration-300`}>
              EliteLuxx Window Cleaning
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                className={`font-inter ${textColor} ${hoverColor} transition-colors duration-200`}
                onClick={() => handleNavClick(item)}
              >
                {item.name}
              </button>
            ))}
            
            {/* Locations Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLocationsOpen(!isLocationsOpen)}
                className={`font-inter ${textColor} ${hoverColor} transition-colors duration-200 flex items-center space-x-1`}
              >
                <span>Locations</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isLocationsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isLocationsOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 header-glass rounded-lg shadow-elegant border border-white/20 py-2 z-50">
                  {locations.map((location) => (
                    <button
                      key={location}
                      onClick={() => handleLocationClick(location)}
                      className="w-full text-left px-4 py-2 text-sm font-inter text-deep-charcoal hover:text-champagne-gold hover:bg-champagne-gold/10 transition-colors duration-200"
                    >
                      {location}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+1234567890"
              className={`flex items-center space-x-2 ${textColor} ${hoverColor} transition-colors duration-200`}
            >
              <Phone className="w-4 h-4" />
              <span className="font-inter font-medium">(123) 456-7890</span>
            </a>
            <button className="btn-primary font-inter font-medium">
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${textColor} transition-colors duration-300`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <>
            {/* Mobile Menu Backdrop */}
            <div 
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Mobile Menu Panel - 50% width, right-aligned */}
            <div className="fixed top-0 right-0 h-full w-1/2 bg-white z-50 shadow-2xl md:hidden overflow-y-auto">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <span className="font-lora font-semibold text-lg text-deep-charcoal">Menu</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-deep-charcoal hover:text-champagne-gold transition-colors duration-200"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Menu Content */}
              <nav className="flex flex-col p-4 space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => {
                      handleNavClick(item);
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full text-left font-inter text-deep-charcoal hover:text-champagne-gold transition-colors duration-200 py-3 border-b border-gray-100"
                  >
                    {item.name}
                  </button>
                ))}

                {/* Locations Dropdown */}
                <div>
                  <button
                    onClick={() => setIsLocationsOpen(!isLocationsOpen)}
                    className="w-full text-left font-inter text-deep-charcoal hover:text-champagne-gold transition-colors duration-200 flex items-center justify-between py-3 border-b border-gray-100"
                  >
                    <span>Locations</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isLocationsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isLocationsOpen && (
                    <div className="ml-4 mt-2 space-y-2 pb-2">
                      {locations.map((location) => (
                        <button
                          key={location}
                          onClick={() => {
                            handleLocationClick(location);
                            setIsMobileMenuOpen(false);
                          }}
                          className="block w-full text-left font-inter text-sm text-deep-charcoal/80 hover:text-champagne-gold transition-colors duration-200 py-2"
                        >
                          {location}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* About */}
                <button
                  onClick={() => {
                    const aboutItem = navItems.find(item => item.name === 'About');
                    if (aboutItem) {
                      handleNavClick(aboutItem);
                    }
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-left font-inter text-deep-charcoal hover:text-champagne-gold transition-colors duration-200 py-3 border-b border-gray-100"
                >
                  About
                </button>

                {/* Contact Us */}
                <button
                  onClick={() => {
                    if (onNavigationClick) {
                      onNavigationClick('contact');
                    }
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-left font-inter text-deep-charcoal hover:text-champagne-gold transition-colors duration-200 py-3 border-b border-gray-100"
                >
                  Contact Us
                </button>

                {/* Blog */}
                <button
                  onClick={() => {
                    if (onNavigationClick) {
                      onNavigationClick('blog');
                    }
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-left font-inter text-deep-charcoal hover:text-champagne-gold transition-colors duration-200 py-3 border-b border-gray-100"
                >
                  Blog
                </button>
                
                {/* Contact Info & Book Button */}
                <div className="pt-6 mt-6 border-t border-gray-200 space-y-4">
                  <a
                    href="tel:+1234567890"
                    className="flex items-center space-x-3 text-deep-charcoal hover:text-champagne-gold transition-colors duration-200"
                  >
                    <Phone className="w-5 h-5" />
                    <span className="font-inter font-medium">(123) 456-7890</span>
                  </a>
                  <button className="w-full bg-champagne-gold text-white px-6 py-3 rounded-md font-inter font-medium hover:bg-champagne-gold/90 transition-colors duration-200">
                    Book Now
                  </button>
                </div>
              </nav>
            </div>
          </>
        )}
      </div>
      
      {/* Overlay to close dropdown when clicking outside - Desktop only */}
      {(isLocationsOpen || isServicesOpen) && !isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 hidden md:block" 
          onClick={() => {
            setIsLocationsOpen(false);
            setIsServicesOpen(false);
          }}
        />
      )}
    </header>
  );
};

export default Header;