import React from 'react';
import { motion } from 'framer-motion';
import { Move, CheckCircle, Clock, Star, Home, Shield, ArrowLeft, Package } from 'lucide-react';

interface MoveInOutCleaningProps {
  onBack?: () => void;
  onBookingClick?: () => void;
}

const MoveInOutCleaning: React.FC<MoveInOutCleaningProps> = ({ onBack, onBookingClick }) => {
  const services = [
    'Deep clean all rooms from top to bottom',
    'Inside & outside of all appliances',
    'Cabinet interiors & exteriors',
    'Closet cleaning & sanitization',
    'Bathroom deep scrub & disinfection',
    'Window cleaning (interior)',
    'Baseboard & trim detailed cleaning',
    'Light fixture cleaning & dusting'
  ];

  const moveTypes = [
    {
      title: 'Move-In Cleaning',
      description: 'Prepare your new home for move-in with our comprehensive deep cleaning service.',
      features: [
        'Sanitize all surfaces',
        'Deep clean appliances',
        'Remove previous tenant residue',
        'Ensure move-in ready condition'
      ],
      icon: Home
    },
    {
      title: 'Move-Out Cleaning',
      description: 'Get your security deposit back with our thorough move-out cleaning service.',
      features: [
        'Meet landlord requirements',
        'Deep clean all areas',
        'Remove all traces of occupancy',
        'Property inspection ready'
      ],
      icon: Package
    }
  ];

  const packages = [
    {
      name: 'Standard Move',
      price: 'From $250',
      duration: '4-6 hours',
      ideal: 'Apartments & small homes',
      includes: [
        'All rooms deep cleaned',
        'Kitchen appliance cleaning',
        'Bathroom sanitization',
        'Interior window cleaning',
        'Basic cabinet cleaning'
      ]
    },
    {
      name: 'Complete Move',
      price: 'From $350',
      duration: '6-8 hours',
      ideal: 'Medium to large homes',
      includes: [
        'Everything in Standard',
        'Inside cabinet cleaning',
        'Closet deep cleaning',
        'Garage cleaning',
        'Detailed appliance interior'
      ]
    },
    {
      name: 'Premium Move',
      price: 'From $450',
      duration: '8-10 hours',
      ideal: 'Large homes & luxury properties',
      includes: [
        'Everything in Complete',
        'Paint touch-up cleaning',
        'Detailed fixture cleaning',
        'Carpet deep cleaning',
        'Post-cleaning inspection'
      ]
    }
  ];

  const timeline = [
    {
      phase: 'Pre-Move Planning',
      description: 'Schedule your cleaning 1-2 weeks before your move date for optimal availability.',
      tips: ['Book early for best dates', 'Coordinate with moving schedule', 'Discuss special requirements']
    },
    {
      phase: 'Day Before Cleaning',
      description: 'Ensure the property is empty and accessible for our comprehensive cleaning.',
      tips: ['Remove all belongings', 'Provide access information', 'Clear any obstacles']
    },
    {
      phase: 'Cleaning Day',
      description: 'Our team arrives with all equipment and completes your deep cleaning service.',
      tips: ['Full property access', '4-10 hour service window', 'Quality inspection included']
    },
    {
      phase: 'Final Walkthrough',
      description: 'We complete a detailed walkthrough to ensure every area meets our standards.',
      tips: ['Address any concerns', 'Receive cleaning checklist', 'Schedule future services']
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
              <Move className="w-8 h-8 text-champagne-gold" />
            </div>
          </div>
          <h1 className="font-lora font-semibold text-3xl md:text-4xl lg:text-5xl text-champagne-gold mb-6">
            Move-In / Move-Out Cleaning
          </h1>
          <p className="font-inter text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Make your transition seamless with our comprehensive move-in and move-out cleaning services. 
            Whether you're starting fresh in a new home or ensuring you get your deposit back, we handle every detail.
          </p>
        </motion.div>

        {/* Move Types */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="font-lora font-semibold text-2xl md:text-3xl text-champagne-gold text-center mb-12">
            Complete Moving Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {moveTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="card-glass rounded-lg p-8 group hover:shadow-3d-hover transition-all duration-300"
              >
                <type.icon className="w-12 h-12 text-champagne-gold mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-lora font-semibold text-xl text-champagne-gold mb-4">{type.title}</h3>
                <p className="font-inter text-white/80 mb-6 leading-relaxed">{type.description}</p>
                <ul className="space-y-3">
                  {type.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-emerald-green mt-1 flex-shrink-0" />
                      <span className="font-inter text-white/90 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* What's Included */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="font-lora font-semibold text-2xl md:text-3xl text-champagne-gold text-center mb-12">
            Comprehensive Deep Cleaning
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="card-glass rounded-lg p-6 text-center"
              >
                <CheckCircle className="w-8 h-8 text-emerald-green mx-auto mb-4" />
                <p className="font-inter text-white/90 text-sm leading-relaxed">{service}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Service Packages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-lora font-semibold text-2xl md:text-3xl text-champagne-gold text-center mb-12">
            Move Cleaning Packages
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
                  <p className="font-inter text-white/80 text-sm">{pkg.ideal}</p>
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

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="font-lora font-semibold text-2xl md:text-3xl text-champagne-gold text-center mb-12">
            Your Move Cleaning Timeline
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {timeline.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="card-glass rounded-lg p-6"
              >
                <div className="w-8 h-8 bg-champagne-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-lora font-bold text-white text-sm">{index + 1}</span>
                </div>
                <h3 className="font-lora font-medium text-lg text-champagne-gold mb-3 text-center">{phase.phase}</h3>
                <p className="font-inter text-white/80 text-sm mb-4 leading-relaxed">{phase.description}</p>
                <ul className="space-y-2">
                  {phase.tips.map((tip, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-emerald-green rounded-full mt-2 flex-shrink-0" />
                      <span className="font-inter text-white/70 text-xs">{tip}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
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
              Ready for a Stress-Free Move?
            </h2>
            <p className="font-inter text-white/80 mb-8 max-w-2xl mx-auto">
              Let us handle the deep cleaning while you focus on your move. Our thorough service ensures you'll 
              love your new space or get your full deposit back. Book your move cleaning today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={onBookingClick}
                className="btn-primary font-inter font-medium text-lg px-8 py-4"
              >
                Book Move Cleaning
              </button>
              <button className="border-2 border-champagne-gold text-champagne-gold hover:bg-champagne-gold hover:text-white px-8 py-4 rounded-md font-inter font-medium text-lg transition-all duration-200">
                Get Quote
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MoveInOutCleaning;
