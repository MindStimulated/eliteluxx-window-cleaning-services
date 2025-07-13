import React from 'react';
import { motion } from 'framer-motion';
import { Home, CheckCircle, Star, ArrowLeft, Shield, Clock, Key } from 'lucide-react';

interface ShortTermRentalCleaningProps {
  onBack?: () => void;
  onBookingClick?: () => void;
}

const ShortTermRentalCleaning: React.FC<ShortTermRentalCleaningProps> = ({ onBack, onBookingClick }) => {
  const rentalServices = [
    'Turnover cleaning between guests',
    'Deep sanitization protocols',
    'Linen and towel service',
    'Restocking amenities',
    'Property inspection reports',
    'Emergency cleaning response',
    'Maintenance issue reporting',
    'Guest-ready preparation'
  ];

  const turnaroundOptions = [
    {
      title: 'Same-Day Turnaround',
      description: 'Quick cleaning between same-day check-out and check-in.',
      timeframe: '2-4 hours',
      ideal: 'High-turnover properties',
      features: ['Express cleaning', 'Priority scheduling', 'Rapid response', 'Quality guarantee'],
      icon: Clock
    },
    {
      title: 'Standard Turnaround',
      description: 'Comprehensive cleaning with detailed attention.',
      timeframe: '4-6 hours',
      ideal: 'Most rental properties',
      features: ['Thorough cleaning', 'Amenity restocking', 'Inspection report', 'Photo documentation'],
      icon: Home
    },
    {
      title: 'Deep Clean Service',
      description: 'Extensive cleaning for monthly or seasonal preparation.',
      timeframe: '6-8 hours',
      ideal: 'Monthly deep cleans',
      features: ['Complete deep clean', 'Maintenance checks', 'Inventory audit', 'Property staging'],
      icon: Star
    }
  ];

  const packages = [
    {
      name: 'Basic Turnover',
      price: 'From $120',
      description: 'Essential cleaning for quick guest turnovers.',
      features: [
        'Surface cleaning and sanitization',
        'Bathroom deep clean',
        'Kitchen cleaning',
        'Bed making with fresh linens',
        'Trash removal and restocking',
        'Basic amenity check'
      ],
      popular: false
    },
    {
      name: 'Premium Turnover',
      price: 'From $180',
      description: 'Comprehensive cleaning with guest experience focus.',
      features: [
        'Complete deep cleaning',
        'Sanitization protocols',
        'Fresh linen service',
        'Amenity restocking',
        'Property inspection report',
        'Guest welcome setup',
        'Photo documentation'
      ],
      popular: true
    },
    {
      name: 'Luxury Rental Service',
      price: 'From $250',
      description: 'White-glove service for high-end rental properties.',
      features: [
        'Luxury cleaning standards',
        'Premium amenity setup',
        'Detailed property staging',
        'Concierge-level service',
        'Priority support',
        'Custom guest preparations',
        '24/7 emergency response'
      ],
      popular: false
    }
  ];

  const propertyTypes = [
    {
      type: 'Vacation Rentals',
      description: 'Airbnb, VRBO, and independent vacation properties.',
      specialties: ['Beach houses', 'Mountain cabins', 'City apartments', 'Luxury villas']
    },
    {
      type: 'Corporate Housing',
      description: 'Extended stay and corporate rental accommodations.',
      specialties: ['Executive suites', 'Furnished apartments', 'Extended stay hotels', 'Temporary housing']
    },
    {
      type: 'Event Venues',
      description: 'Properties hosting events and special occasions.',
      specialties: ['Wedding venues', 'Party houses', 'Retreat centers', 'Event spaces']
    }
  ];

  const rentalProcess = [
    {
      step: 'Guest Check-Out',
      description: 'Coordinate with property manager for guest departure and access.'
    },
    {
      step: 'Property Inspection',
      description: 'Assess property condition and document any maintenance needs.'
    },
    {
      step: 'Deep Cleaning',
      description: 'Complete sanitization and cleaning to guest-ready standards.'
    },
    {
      step: 'Restocking & Setup',
      description: 'Replenish amenities and prepare welcome setup for next guests.'
    },
    {
      step: 'Final Inspection',
      description: 'Quality check and photo documentation before guest arrival.'
    }
  ];

  const guarantees = [
    {
      guarantee: 'Guest-Ready Promise',
      description: 'Properties are guaranteed guest-ready or we return to fix any issues at no charge.'
    },
    {
      guarantee: 'Turnaround Time',
      description: 'Committed cleaning schedules to meet your check-in deadlines.'
    },
    {
      guarantee: 'Quality Standards',
      description: 'Consistent 5-star cleaning standards across all properties and turnovers.'
    },
    {
      guarantee: 'Communication',
      description: 'Real-time updates and detailed reports for every cleaning service.'
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
            <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center">
              <Key className="w-8 h-8 text-blue-400" />
            </div>
          </div>
          <h1 className="font-lora font-semibold text-3xl md:text-4xl lg:text-5xl text-champagne-gold mb-6">
            Short Term Rental Cleaning
          </h1>
          <p className="font-inter text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Professional turnover cleaning services for Airbnb, VRBO, and vacation rental properties. 
            Ensure every guest arrives to a spotless, welcoming space that earns 5-star reviews.
          </p>
        </motion.div>

        {/* Turnaround Options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="font-lora font-semibold text-2xl md:text-3xl text-champagne-gold text-center mb-12">
            Turnaround Service Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {turnaroundOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="card-glass rounded-lg p-8 text-center group hover:shadow-3d-hover transition-all duration-300"
              >
                <option.icon className="w-12 h-12 text-champagne-gold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-lora font-semibold text-xl text-champagne-gold mb-4">{option.title}</h3>
                <p className="font-inter text-white/80 mb-4 leading-relaxed">{option.description}</p>
                <div className="text-center mb-6">
                  <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium mb-2">
                    {option.timeframe}
                  </span>
                  <p className="text-emerald-green text-sm font-medium">{option.ideal}</p>
                </div>
                <div className="space-y-2">
                  {option.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-emerald-green flex-shrink-0" />
                      <span className="font-inter text-white/90 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
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
            Rental Cleaning Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className={`card-glass rounded-lg p-8 ${pkg.popular ? 'border-2 border-champagne-gold' : ''} relative overflow-hidden`}
              >
                {pkg.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-champagne-gold text-deep-charcoal px-3 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="font-lora font-semibold text-xl text-champagne-gold mb-4">{pkg.name}</h3>
                <div className="mb-6">
                  <span className="font-lora font-bold text-2xl text-emerald-green">{pkg.price}</span>
                </div>
                <p className="font-inter text-white/80 mb-6">{pkg.description}</p>
                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-emerald-green mt-0.5 flex-shrink-0" />
                      <span className="font-inter text-white/90 text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
                <button 
                  onClick={onBookingClick}
                  className="w-full btn-primary font-inter font-medium"
                >
                  Select Package
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Property Types */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-lora font-semibold text-2xl md:text-3xl text-champagne-gold text-center mb-12">
            Rental Property Types We Serve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {propertyTypes.map((property, index) => (
              <motion.div
                key={property.type}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="card-glass rounded-lg p-6"
              >
                <Home className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="font-lora font-medium text-lg text-champagne-gold mb-3">{property.type}</h3>
                <p className="font-inter text-white/80 mb-4 leading-relaxed">{property.description}</p>
                <div className="space-y-2">
                  {property.specialties.map((specialty, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-champagne-gold rounded-full flex-shrink-0" />
                      <span className="font-inter text-white/90 text-sm">{specialty}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services Included */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="font-lora font-semibold text-2xl md:text-3xl text-champagne-gold text-center mb-12">
            Rental Cleaning Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rentalServices.map((service, index) => (
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

        {/* Process Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mb-16"
        >
          <h2 className="font-lora font-semibold text-2xl md:text-3xl text-champagne-gold text-center mb-12">
            Our Rental Turnaround Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {rentalProcess.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-lora font-bold text-white">{index + 1}</span>
                </div>
                <h3 className="font-lora font-medium text-lg text-champagne-gold mb-3">{step.step}</h3>
                <p className="font-inter text-white/80 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Service Guarantees */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mb-16"
        >
          <h2 className="font-lora font-semibold text-2xl md:text-3xl text-champagne-gold text-center mb-12">
            Our Service Guarantees
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={guarantee.guarantee}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="card-glass rounded-lg p-6 text-center"
              >
                <Shield className="w-8 h-8 text-emerald-green mx-auto mb-4" />
                <h3 className="font-lora font-medium text-lg text-champagne-gold mb-3">{guarantee.guarantee}</h3>
                <p className="font-inter text-white/90 text-sm leading-relaxed">{guarantee.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="text-center"
        >
          <div className="card-glass rounded-lg p-8 md:p-12 border-2 border-blue-400/30">
            <Key className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h2 className="font-lora font-semibold text-2xl md:text-3xl text-champagne-gold mb-4">
              Ready to Boost Your Rental Reviews?
            </h2>
            <p className="font-inter text-white/80 mb-8 max-w-2xl mx-auto">
              Join hundreds of property owners who trust EliteLuxx Cleaning to maintain their rental 
              properties. Professional turnover cleaning that ensures 5-star guest experiences every time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={onBookingClick}
                className="btn-primary font-inter font-medium text-lg px-8 py-4"
              >
                Start Rental Service
              </button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-md font-inter font-medium text-lg transition-all duration-200">
                Schedule Property Tour
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ShortTermRentalCleaning;
