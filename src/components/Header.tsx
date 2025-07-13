import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';

interface HeaderProps {
  onServicePageClick?: (servicePage: 'residential-cleaning' | 'commercial-cleaning' | 'move-in-out-cleaning' | 'emergency-cleaning' | 'post-construction-cleaning' | 'luxury-maintenance' | 'short-term-rental-cleaning') => void;
}

const Header: React.FC<HeaderProps> = ({ onServicePageClick }) => {
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
    // Navigate to home page and scroll to top
    window.location.href = '/';
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

  const services = [
    { name: 'Residential Cleaning', key: 'residential-cleaning' as const },
    { name: 'Commercial Cleaning', key: 'commercial-cleaning' as const },
    { name: 'Move-In/Move-Out', key: 'move-in-out-cleaning' as const },
    { name: 'Emergency Cleaning', key: 'emergency-cleaning' as const },
    { name: 'Post-Construction', key: 'post-construction-cleaning' as const },
    { name: 'Luxury Maintenance', key: 'luxury-maintenance' as const },
    { name: 'Short Term Rental', key: 'short-term-rental-cleaning' as const },
  ];

  const handleLocationClick = (location: string) => {
    // Create a new page URL with the location parameter
    const locationSlug = location.toLowerCase().replace(/\s+/g, '-');
    window.location.href = `/location/${locationSlug}`;
  };

  const handleServiceClick = (serviceKey: 'residential-cleaning' | 'commercial-cleaning' | 'move-in-out-cleaning' | 'emergency-cleaning' | 'post-construction-cleaning' | 'luxury-maintenance' | 'short-term-rental-cleaning') => {
    if (onServicePageClick) {
      onServicePageClick(serviceKey);
    }
    setIsServicesOpen(false);
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Blog', href: '#blog' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
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
              alt="EliteLuxx Cleaning" 
              className="w-10 h-10 md:w-12 md:h-12 object-contain"
            />
            <span className={`font-lora font-semibold text-xl ${textColor} transition-colors duration-300`}>
              EliteLuxx Cleaning
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`font-inter ${textColor} ${hoverColor} transition-colors duration-200 flex items-center space-x-1`}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 header-glass rounded-lg shadow-elegant border border-white/20 py-2 z-50">
                  {services.map((service) => (
                    <button
                      key={service.key}
                      onClick={() => handleServiceClick(service.key)}
                      className="w-full text-left px-4 py-2 text-sm font-inter text-deep-charcoal hover:text-champagne-gold hover:bg-champagne-gold/10 transition-colors duration-200"
                    >
                      {service.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-inter ${textColor} ${hoverColor} transition-colors duration-200`}
              >
                {item.name}
              </a>
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
          <div className="md:hidden mt-4 pb-4 border-t border-white/30">
            <nav className="flex flex-col space-y-3 mt-4">
              {/* Mobile Services */}
              <div className="py-2">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className={`font-inter ${textColor} ${hoverColor} transition-colors duration-200 flex items-center space-x-1`}
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {services.map((service) => (
                      <button
                        key={service.key}
                        onClick={() => handleServiceClick(service.key)}
                        className={`block text-left font-inter text-sm ${textColor} ${hoverColor} transition-colors duration-200 py-1`}
                      >
                        {service.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`font-inter ${textColor} ${hoverColor} transition-colors duration-200 py-2`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              {/* Mobile Locations */}
              <div className="py-2">
                <button
                  onClick={() => setIsLocationsOpen(!isLocationsOpen)}
                  className={`font-inter ${textColor} ${hoverColor} transition-colors duration-200 flex items-center space-x-1`}
                >
                  <span>Locations</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isLocationsOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isLocationsOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {locations.map((location) => (
                      <button
                        key={location}
                        onClick={() => {
                          handleLocationClick(location);
                          setIsMobileMenuOpen(false);
                        }}
                        className={`block text-left font-inter text-sm ${textColor} ${hoverColor} transition-colors duration-200 py-1`}
                      >
                        {location}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="flex flex-col space-y-3 pt-3 border-t border-white/30">
                <a
                  href="tel:+1234567890"
                  className={`flex items-center space-x-2 ${textColor} ${hoverColor} transition-colors duration-200 py-2`}
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-inter font-medium">(123) 456-7890</span>
                </a>
                <button className="bg-champagne-gold text-white px-6 py-2 rounded-md font-inter font-medium hover:bg-champagne-gold/90 transition-colors duration-200 text-left">
                  Book Now
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
      
      {/* Overlay to close dropdown when clicking outside */}
      {(isLocationsOpen || isServicesOpen) && (
        <div 
          className="fixed inset-0 z-40" 
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