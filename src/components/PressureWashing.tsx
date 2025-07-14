import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Droplets, Home, Building2, Car, Sparkles, Shield, CheckCircle, Clock, Star, Zap } from 'lucide-react';

interface PressureWashingProps {
  onBack?: () => void;
  onBookingClick?: () => void;
}

const PressureWashing: React.FC<PressureWashingProps> = ({ onBack, onBookingClick }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const services = [
    {
      icon: Home,
      title: 'Residential Pressure Washing',
      description: 'Complete exterior cleaning for homes and properties',
      features: ['Driveway cleaning', 'Patio restoration', 'Siding washing', 'Deck cleaning'],
      price: 'From $200'
    },
    {
      icon: Building2,
      title: 'Commercial Pressure Washing',
      description: 'Professional cleaning for business exteriors',
      features: ['Building exteriors', 'Parking lots', 'Sidewalks', 'Loading docks'],
      price: 'Custom pricing'
    },
    {
      icon: Car,
      title: 'Vehicle & Equipment',
      description: 'Specialized cleaning for vehicles and outdoor equipment',
      features: ['Fleet washing', 'Equipment cleaning', 'RV washing', 'Boat cleaning'],
      price: 'From $150'
    }
  ];

  const surfaces = [
    {
      title: 'Driveways & Walkways',
      description: 'Remove oil stains, tire marks, and built-up grime',
      benefits: ['Improved curb appeal', 'Safety enhancement', 'Stain removal']
    },
    {
      title: 'Patios & Decks',
      description: 'Restore outdoor living spaces to like-new condition',
      benefits: ['Mold/mildew removal', 'Surface restoration', 'Weather protection']
    },
    {
      title: 'Building Exteriors',
      description: 'Professional cleaning for all types of siding and surfaces',
      benefits: ['Paint preservation', 'Property value increase', 'Professional appearance']
    },
    {
      title: 'Pool Areas',
      description: 'Specialized cleaning for pool decks and surrounding areas',
      benefits: ['Non-slip surface', 'Algae removal', 'Chemical-free cleaning']
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Surface Assessment',
      description: 'We evaluate the surface type and determine the best cleaning approach'
    },
    {
      step: '2',
      title: 'Pre-Treatment',
      description: 'Apply specialized cleaners for tough stains and buildup'
    },
    {
      step: '3',
      title: 'Pressure Washing',
      description: 'Professional-grade equipment with appropriate pressure settings'
    },
    {
      step: '4',
      title: 'Final Rinse',
      description: 'Thorough rinse and inspection to ensure complete cleaning'
    }
  ];

  const benefits = [
    {
      icon: Sparkles,
      title: 'Restore Like New',
      description: 'Powerful cleaning that brings surfaces back to original condition'
    },
    {
      icon: Shield,
      title: 'Surface Protection',
      description: 'Remove harmful buildup that can damage surfaces over time'
    },
    {
      icon: Zap,
      title: 'Fast & Efficient',
      description: 'Quick service that saves you time and effort'
    },
    {
      icon: Star,
      title: 'Professional Results',
      description: 'Equipment and expertise for superior cleaning results'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-gray-700 hover:text-gray-600 transition-colors duration-200 mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-inter font-medium">Back to Services</span>
        </button>
      </div>

      {/* Hero Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gray-700/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Droplets className="w-8 h-8 text-gray-700" />
            </div>
          </div>
          <h1 className="font-lora font-semibold text-3xl md:text-4xl lg:text-5xl text-gray-700 mb-6 text-center">
            Professional Pressure Washing
          </h1>
          <p className="font-inter text-lg md:text-xl text-white/90 text-center max-w-3xl mx-auto mb-8">
            Transform your property with our high-powered pressure washing services. Perfect for the Coachella Valley's unique cleaning needs.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-16 bg-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-lora font-semibold text-2xl md:text-3xl text-gray-700 text-center mb-12">
            Our Pressure Washing Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={isMobile ? { opacity: 1 } : { opacity: 0, y: 30 }}
                whileInView={isMobile ? { opacity: 1 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-glass rounded-lg p-8"
              >
                <service.icon className="w-12 h-12 text-gray-700 mb-6" />
                <h3 className="font-lora font-semibold text-xl text-gray-700 mb-4">{service.title}</h3>
                <p className="font-inter text-white/90 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-emerald-green flex-shrink-0" />
                      <span className="font-inter text-sm text-white/90">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-4 border-t border-white/20">
                  <span className="font-lora font-semibold text-lg text-emerald-green">{service.price}</span>
                  <button
                    onClick={onBookingClick}
                    className="btn-primary font-inter font-medium text-sm"
                  >
                    Book Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Surfaces We Clean */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-lora font-semibold text-2xl md:text-3xl text-gray-700 text-center mb-12">
            Surfaces We Clean
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {surfaces.map((surface, index) => (
              <div key={index} className="card-glass rounded-lg p-6">
                <h3 className="font-lora font-semibold text-lg text-gray-700 mb-3">{surface.title}</h3>
                <p className="font-inter text-white/90 mb-4">{surface.description}</p>
                <ul className="space-y-2">
                  {surface.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-gray-700 rounded-full flex-shrink-0" />
                      <span className="font-inter text-sm text-white/90">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-16 bg-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-lora font-semibold text-2xl md:text-3xl text-gray-700 text-center mb-12">
            Why Choose Professional Pressure Washing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <benefit.icon className="w-12 h-12 text-gray-700 mx-auto mb-4" />
                <h3 className="font-lora font-medium text-lg text-gray-700 mb-3">{benefit.title}</h3>
                <p className="font-inter text-sm text-white/90">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-lora font-semibold text-2xl md:text-3xl text-gray-700 text-center mb-12">
            Our Cleaning Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">{step.step}</span>
                </div>
                <h3 className="font-lora font-medium text-lg text-gray-700 mb-3">{step.title}</h3>
                <p className="font-inter text-sm text-white/90">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Impact */}
      <section className="py-12 md:py-16 bg-black/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="card-glass rounded-lg p-8 md:p-12 text-center">
            <Droplets className="w-16 h-16 text-gray-700 mx-auto mb-6" />
            <h2 className="font-lora font-semibold text-2xl md:text-3xl text-gray-700 mb-4">
              See the Difference Pressure Washing Makes
            </h2>
            <p className="font-inter text-lg text-white/90 mb-8">
              Our professional pressure washing services can dramatically transform your property's appearance, 
              removing years of buildup and restoring surfaces to like-new condition.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-green mb-2">100%</div>
                <div className="font-inter text-sm text-white/80">Stain removal</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-green mb-2">75%</div>
                <div className="font-inter text-sm text-white/80">Time saved vs DIY</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-green mb-2">25%</div>
                <div className="font-inter text-sm text-white/80">Property value increase</div>
              </div>
            </div>
            <button
              onClick={onBookingClick}
              className="btn-primary font-inter font-medium text-lg"
            >
              Transform Your Property
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="w-12 h-12 text-gray-700 mx-auto mb-4" />
              <h3 className="font-lora font-medium text-lg text-gray-700 mb-3">Professional Equipment</h3>
              <p className="font-inter text-sm text-white/90">
                Commercial-grade pressure washers and specialized cleaning solutions for optimal results.
              </p>
            </div>
            <div className="text-center">
              <Star className="w-12 h-12 text-gray-700 mx-auto mb-4" />
              <h3 className="font-lora font-medium text-lg text-gray-700 mb-3">Desert Experience</h3>
              <p className="font-inter text-sm text-white/90">
                Local expertise in handling Coachella Valley's unique cleaning challenges and conditions.
              </p>
            </div>
            <div className="text-center">
              <Clock className="w-12 h-12 text-gray-700 mx-auto mb-4" />
              <h3 className="font-lora font-medium text-lg text-gray-700 mb-3">Quick Service</h3>
              <p className="font-inter text-sm text-white/90">
                Efficient cleaning that minimizes disruption to your daily routine or business operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-lora font-semibold text-2xl md:text-3xl text-gray-700 mb-6">
            Ready to Transform Your Property?
          </h2>
          <p className="font-inter text-lg text-white/90 mb-8">
            Don't let dirt and grime diminish your property's appeal. Schedule your pressure washing service today.
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <button
              onClick={onBookingClick}
              className="btn-primary font-inter font-medium text-lg w-full md:w-auto"
            >
              Get Free Estimate
            </button>
            <button className="btn-primary font-inter font-medium text-lg w-full md:w-auto">
              Call (760) 555-0123
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PressureWashing;
