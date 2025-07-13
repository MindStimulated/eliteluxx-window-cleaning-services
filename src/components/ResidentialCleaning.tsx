import React from 'react';
import { motion } from 'framer-motion';
import { Home, CheckCircle, Clock, Star, Users, Shield, ArrowLeft } from 'lucide-react';

interface ResidentialCleaningProps {
  onBack?: () => void;
  onBookingClick?: () => void;
}

const ResidentialCleaning: React.FC<ResidentialCleaningProps> = ({ onBack, onBookingClick }) => {
  const features = [
    'Deep kitchen cleaning & sanitization',
    'Bathroom deep clean & disinfection',
    'Living area dusting & vacuuming',
    'Bedroom organization & cleaning',
    'Window cleaning (interior)',
    'Floor mopping & carpet care',
    'Baseboards & trim cleaning',
    'Light fixture dusting'
  ];

  const packages = [
    {
      name: 'Essential Clean',
      price: 'From $135',
      duration: '2-3 hours',
      ideal: 'Regular maintenance',
      includes: [
        'Kitchen surfaces & appliances',
        'Bathroom sanitization',
        'Living area dusting',
        'Vacuuming & mopping',
        'Trash removal'
      ]
    },
    {
      name: 'Deep Clean',
      price: 'From $235',
      duration: '4-5 hours',
      ideal: 'First-time or seasonal',
      includes: [
        'Everything in Essential',
        'Inside oven cleaning',
        'Refrigerator interior',
        'Baseboards & trim',
        'Light fixtures',
        'Cabinet exteriors'
      ]
    },
    {
      name: 'Premium Clean',
      price: 'From $335',
      duration: '5-6 hours',
      ideal: 'Luxury homes',
      includes: [
        'Everything in Deep Clean',
        'Interior windows',
        'Cabinet interiors',
        'Detailed furniture care',
        'Custom requests',
        'Green cleaning products'
      ]
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Initial Consultation',
      description: 'We assess your home and discuss your specific cleaning needs and preferences.'
    },
    {
      step: '2',
      title: 'Custom Plan',
      description: 'We create a tailored cleaning plan that fits your schedule and requirements.'
    },
    {
      step: '3',
      title: 'Professional Service',
      description: 'Our trained team arrives with all supplies and completes your cleaning to perfection.'
    },
    {
      step: '4',
      title: 'Quality Check',
      description: 'We do a final walkthrough to ensure every detail meets our high standards.'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-black/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onClick={onBack}
          className="flex items-center space-x-2 text-champagne-gold hover:text-champagne-gold/80 transition-colors duration-200 mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-inter font-medium">Back to Services</span>
        </motion.button>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-champagne-gold/10 rounded-full flex items-center justify-center">
              <Home className="w-8 h-8 text-champagne-gold" />
            </div>
          </div>
          <h1 className="font-lora font-semibold text-3xl md:text-4xl lg:text-5xl text-champagne-gold mb-6">
            Residential Cleaning Services
          </h1>
          <p className="font-inter text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Transform your home into a pristine sanctuary with our comprehensive residential cleaning services. 
            From regular maintenance to deep cleaning, we handle every detail so you can enjoy more time with what matters most.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="font-lora font-semibold text-2xl md:text-3xl text-champagne-gold text-center mb-12">
            What's Included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="card-glass rounded-lg p-6 text-center"
              >
                <CheckCircle className="w-8 h-8 text-emerald-green mx-auto mb-4" />
                <p className="font-inter text-white/90 text-sm leading-relaxed">{feature}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Service Packages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="font-lora font-semibold text-2xl md:text-3xl text-champagne-gold text-center mb-12">
            Service Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="card-glass rounded-lg p-8 relative overflow-hidden group hover:shadow-3d-hover transition-all duration-300"
              >
                {index === 1 && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-champagne-gold text-white px-3 py-1 rounded-full text-xs font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="font-lora font-semibold text-xl text-champagne-gold mb-2">{pkg.name}</h3>
                  <div className="font-lora font-bold text-3xl text-emerald-green mb-1">{pkg.price}</div>
                  <p className="font-inter text-white/60 text-sm mb-2">{pkg.duration}</p>
                  <p className="font-inter text-white/80 text-sm">Ideal for {pkg.ideal}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.includes.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-emerald-green mt-0.5 flex-shrink-0" />
                      <span className="font-inter text-white/90 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={onBookingClick}
                  className="w-full btn-primary font-inter font-medium text-base"
                >
                  Book This Package
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Our Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-lora font-semibold text-2xl md:text-3xl text-champagne-gold text-center mb-12">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-champagne-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-lora font-bold text-white">{step.step}</span>
                </div>
                <h3 className="font-lora font-medium text-lg text-champagne-gold mb-3">{step.title}</h3>
                <p className="font-inter text-white/80 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <div className="card-glass rounded-lg p-8 md:p-12">
            <h2 className="font-lora font-semibold text-2xl md:text-3xl text-champagne-gold text-center mb-8">
              Why Choose EliteLuxx for Your Home?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Users className="w-12 h-12 text-champagne-gold mx-auto mb-4" />
                <h3 className="font-lora font-medium text-lg text-champagne-gold mb-3">Trusted Professionals</h3>
                <p className="font-inter text-white/90 text-sm leading-relaxed">
                  All our cleaners are background-checked, insured, and trained to our exacting standards.
                </p>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 text-champagne-gold mx-auto mb-4" />
                <h3 className="font-lora font-medium text-lg text-champagne-gold mb-3">100% Satisfaction</h3>
                <p className="font-inter text-white/90 text-sm leading-relaxed">
                  We guarantee our work. If you're not completely satisfied, we'll make it right.
                </p>
              </div>
              <div className="text-center">
                <Clock className="w-12 h-12 text-champagne-gold mx-auto mb-4" />
                <h3 className="font-lora font-medium text-lg text-champagne-gold mb-3">Flexible Scheduling</h3>
                <p className="font-inter text-white/90 text-sm leading-relaxed">
                  Weekly, bi-weekly, monthly, or one-time cleaning - we work around your schedule.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center"
        >
          <div className="card-glass rounded-lg p-8 md:p-12">
            <Star className="w-16 h-16 text-champagne-gold mx-auto mb-6" />
            <h2 className="font-lora font-semibold text-2xl md:text-3xl text-champagne-gold mb-4">
              Ready for a Spotless Home?
            </h2>
            <p className="font-inter text-white/80 mb-8 max-w-2xl mx-auto">
              Experience the difference professional residential cleaning makes. Book your service today and 
              discover why families across the Coachella Valley trust EliteLuxx Cleaning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={onBookingClick}
                className="btn-primary font-inter font-medium text-lg px-8 py-4"
              >
                Book Now
              </button>
              <button className="border-2 border-champagne-gold text-champagne-gold hover:bg-champagne-gold hover:text-white px-8 py-4 rounded-md font-inter font-medium text-lg transition-all duration-200">
                Get Free Quote
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResidentialCleaning;
