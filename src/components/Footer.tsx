import React from 'react';
import { Sparkles, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

interface FooterProps {
  onServicePageClick?: (servicePage: 'residential-cleaning' | 'commercial-cleaning' | 'move-in-out-cleaning' | 'emergency-cleaning' | 'post-construction-cleaning' | 'luxury-maintenance' | 'short-term-rental-cleaning') => void;
}

const Footer: React.FC<FooterProps> = ({ onServicePageClick }) => {
  const currentYear = new Date().getFullYear();

  const trustBadges = [
    'BBB Accredited',
    'Bonded & Insured',
    'Eco-Friendly Certified',
    'Background Checked',
  ];

  const services = [
    { name: 'Residential Cleaning', key: 'residential-cleaning' as const },
    { name: 'Commercial Cleaning', key: 'commercial-cleaning' as const },
    { name: 'Move-In/Move-Out', key: 'move-in-out-cleaning' as const },
    { name: 'Post-Construction', key: 'post-construction-cleaning' as const },
    { name: 'Emergency Cleaning', key: 'emergency-cleaning' as const },
    { name: 'Luxury Maintenance', key: 'luxury-maintenance' as const },
    { name: 'Short Term Rental', key: 'short-term-rental-cleaning' as const },
  ];

  const handleServiceClick = (serviceKey: 'residential-cleaning' | 'commercial-cleaning' | 'move-in-out-cleaning' | 'emergency-cleaning' | 'post-construction-cleaning' | 'luxury-maintenance' | 'short-term-rental-cleaning') => {
    if (onServicePageClick) {
      onServicePageClick(serviceKey);
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

  return (
    <footer className="bg-deep-charcoal text-white">
      <div className="max-w-site mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Sparkles className="w-8 h-8 text-champagne-gold" />
              <span className="font-lora font-semibold text-xl">EliteLuxx Cleaning</span>
            </div>
            <p className="font-inter text-white/80 leading-relaxed mb-6">
              Premium luxury cleaning services that exceed expectations. Your space deserves nothing less than perfection.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-champagne-gold transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-champagne-gold transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-champagne-gold transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-lora font-medium text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.key}>
                  <button 
                    onClick={() => handleServiceClick(service.key)}
                    className="font-inter text-white/80 hover:text-champagne-gold transition-colors duration-200 text-left text-sm"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="font-lora font-medium text-lg mb-6">Locations</h3>
            <div className="grid grid-cols-2 gap-2">
              {locations.map(location => (
                <a 
                  key={location}
                  href={`/location/${location.toLowerCase().replace(/\s+/g, '-')}`}
                  className="font-inter text-white/80 hover:text-champagne-gold transition-colors duration-200 text-sm py-1"
                >
                  {location}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-lora font-medium text-lg mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-champagne-gold" />
                <a href="tel:+15551234567" className="font-inter text-white/80 hover:text-champagne-gold transition-colors duration-200">
                  (555) 123-4567
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-champagne-gold" />
                <a href="mailto:hello@eliteluxxcleaning.com" className="font-inter text-white/80 hover:text-champagne-gold transition-colors duration-200">
                  hello@eliteluxxcleaning.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-champagne-gold mt-1" />
                <span className="font-inter text-white/80">
                  123 Luxury Lane<br />
                  Palm Springs, CA 92262
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="flex flex-wrap justify-center md:justify-start gap-6">
            {trustBadges.map((badge) => (
              <div key={badge} className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-champagne-gold rounded-full" />
                <span className="font-inter text-sm text-white/80">{badge}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="font-inter text-sm text-white/60">
            © {currentYear} EliteLuxx Cleaning. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="/privacy" className="font-inter text-sm text-white/60 hover:text-champagne-gold transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="/terms" className="font-inter text-sm text-white/60 hover:text-champagne-gold transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="font-inter text-sm text-white/60 hover:text-champagne-gold transition-colors duration-200">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;