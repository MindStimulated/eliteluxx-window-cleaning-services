import React from 'react';
import { motion } from 'framer-motion';
import { Crown, CheckCircle, Star, Calendar, ArrowLeft, Shield, Clock, Sparkles } from 'lucide-react';

interface LuxuryMaintenanceProps {
  onBack?: () => void;
  onBookingClick?: () => void;
}

const LuxuryMaintenance: React.FC<LuxuryMaintenanceProps> = ({ onBack, onBookingClick }) => {
  const luxuryServices = [
    'White-glove cleaning standards',
    'Premium product applications',
    'Fine art and antique care',
    'Designer furniture maintenance',
    'Luxury textile preservation',
    'Crystal and china handling',
    'Imported surface treatments',
    'Concierge-level service'
  ];

  const maintenanceFrequencies = [
    {
      frequency: 'Weekly Service',
      description: 'Consistent luxury maintenance for the most discerning clients.',
      interval: 'Every week',
      ideal: 'High-traffic luxury homes',
      features: ['Comprehensive cleaning', 'Luxury surface care', 'Textile maintenance', 'Priority scheduling'],
      icon: Calendar
    },
    {
      frequency: 'Bi-Weekly Service',
      description: 'Regular luxury maintenance with premium attention to detail.',
      interval: 'Every 2 weeks',
      ideal: 'Luxury homes with moderate use',
      features: ['Deep cleaning rotation', 'Seasonal adjustments', 'Specialty treatments', 'Flexible scheduling'],
      icon: Clock
    },
    {
      frequency: 'Monthly Service',
      description: 'Comprehensive luxury maintenance for seasonal residences.',
      interval: 'Every month',
      ideal: 'Vacation homes and estates',
      features: ['Estate-level cleaning', 'Property monitoring', 'Seasonal preparations', 'Custom schedules'],
      icon: Star
    }
  ];

  const packages = [
    {
      name: 'Platinum Service',
      price: 'From $400/month',
      description: 'Premium weekly maintenance for luxury residences.',
      features: [
        'Weekly professional cleaning',
        'Premium cleaning products',
        'Luxury surface treatments',
        'Priority booking guarantee',
        'Dedicated cleaning team',
        'Monthly deep focus areas'
      ],
      popular: false
    },
    {
      name: 'Diamond Service',
      price: 'From $750/month',
      description: 'Comprehensive luxury maintenance with concierge touches.',
      features: [
        'Bi-weekly comprehensive cleaning',
        'Fine art and antique care',
        'Designer furniture maintenance',
        'Luxury textile preservation',
        'Crystal and china handling',
        'Seasonal home preparations',
        'Concierge coordination'
      ],
      popular: true
    },
    {
      name: 'Elite Estate Service',
      price: 'Custom Pricing',
      description: 'Full-service luxury estate management and maintenance.',
      features: [
        'Custom cleaning frequency',
        'Complete estate maintenance',
        'Staff coordination services',
        'Event preparation cleaning',
        'Seasonal property management',
        'VIP client support',
        '24/7 emergency response'
      ],
      popular: false
    }
  ];

  const luxurySpecialties = [
    {
      specialty: 'Fine Art Care',
      description: 'Specialized cleaning and preservation of valuable artwork and sculptures.',
      expertise: ['Museum-quality techniques', 'Conservation awareness', 'Climate considerations', 'Insurance protocols']
    },
    {
      specialty: 'Designer Furnishings',
      description: 'Expert care for high-end furniture, fabrics, and custom installations.',
      expertise: ['Manufacturer specifications', 'Material expertise', 'Preservation techniques', 'Warranty protection']
    },
    {
      specialty: 'Luxury Surfaces',
      description: 'Specialized treatment of premium materials and imported surfaces.',
      expertise: ['Natural stone care', 'Exotic wood treatments', 'Metal polishing', 'Custom applications']
    }
  ];

  const clientServices = [
    {
      service: 'Dedicated Team',
      description: 'The same professional team every visit for consistency and trust.'
    },
    {
      service: 'Concierge Coordination',
      description: 'Seamless scheduling with your household staff and calendar.'
    },
    {
      service: 'Custom Protocols',
      description: 'Personalized cleaning procedures tailored to your preferences.'
    },
    {
      service: 'Premium Products',
      description: 'Eco-luxury cleaning products safe for family and fine materials.'
    },
    {
      service: 'Quality Assurance',
      description: 'Regular quality inspections and client satisfaction reviews.'
    }
  ];

  const estates = [
    'Private residences over 5,000 sq ft',
    'Luxury vacation homes and retreats',
    'Historic properties and estates',
    'High-end condominiums and penthouses',
    'Celebrity and executive residences',
    'Art collector homes and galleries'
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
            <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center">
              <Crown className="w-8 h-8 text-yellow-400" />
            </div>
          </div>
          <h1 className="font-lora font-semibold text-3xl md:text-4xl lg:text-5xl text-champagne-gold mb-6">
            Luxury Maintenance Services
          </h1>
          <p className="font-inter text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Exceptional ongoing cleaning and maintenance services for discerning clients who demand 
            perfection. Experience white-glove service that preserves and enhances your luxury lifestyle.
          </p>
        </motion.div>

        {/* Maintenance Frequencies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="font-lora font-semibold text-2xl md:text-3xl text-champagne-gold text-center mb-12">
            Luxury Maintenance Schedules
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {maintenanceFrequencies.map((freq, index) => (
              <motion.div
                key={freq.frequency}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="card-glass rounded-lg p-8 text-center group hover:shadow-3d-hover transition-all duration-300"
              >
                <freq.icon className="w-12 h-12 text-champagne-gold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-lora font-semibold text-xl text-champagne-gold mb-4">{freq.frequency}</h3>
                <p className="font-inter text-white/80 mb-4 leading-relaxed">{freq.description}</p>
                <div className="text-center mb-6">
                  <span className="inline-block px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-medium mb-2">
                    {freq.interval}
                  </span>
                  <p className="text-emerald-green text-sm font-medium">{freq.ideal}</p>
                </div>
                <div className="space-y-2">
                  {freq.features.map((feature, idx) => (
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
            Luxury Maintenance Packages
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

        {/* Luxury Specialties */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-lora font-semibold text-2xl md:text-3xl text-champagne-gold text-center mb-12">
            Luxury Care Specialties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {luxurySpecialties.map((specialty, index) => (
              <motion.div
                key={specialty.specialty}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="card-glass rounded-lg p-6"
              >
                <Sparkles className="w-8 h-8 text-yellow-400 mb-4" />
                <h3 className="font-lora font-medium text-lg text-champagne-gold mb-3">{specialty.specialty}</h3>
                <p className="font-inter text-white/80 mb-4 leading-relaxed">{specialty.description}</p>
                <div className="space-y-2">
                  {specialty.expertise.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-champagne-gold rounded-full flex-shrink-0" />
                      <span className="font-inter text-white/90 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Luxury Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="font-lora font-semibold text-2xl md:text-3xl text-champagne-gold text-center mb-12">
            Premium Maintenance Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {luxuryServices.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="card-glass rounded-lg p-6 text-center"
              >
                <Crown className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
                <p className="font-inter text-white/90 text-sm leading-relaxed">{service}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Client Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mb-16"
        >
          <h2 className="font-lora font-semibold text-2xl md:text-3xl text-champagne-gold text-center mb-12">
            Concierge-Level Client Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientServices.map((service, index) => (
              <motion.div
                key={service.service}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="card-glass rounded-lg p-6 text-center"
              >
                <Star className="w-8 h-8 text-champagne-gold mx-auto mb-4" />
                <h3 className="font-lora font-medium text-lg text-champagne-gold mb-3">{service.service}</h3>
                <p className="font-inter text-white/90 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Estate Types */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mb-16"
        >
          <h2 className="font-lora font-semibold text-2xl md:text-3xl text-champagne-gold text-center mb-12">
            Luxury Properties We Serve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {estates.map((estate, index) => (
              <motion.div
                key={estate}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="card-glass rounded-lg p-6 text-center"
              >
                <Shield className="w-8 h-8 text-emerald-green mx-auto mb-4" />
                <p className="font-inter text-white/90 text-sm leading-relaxed">{estate}</p>
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
          <div className="card-glass rounded-lg p-8 md:p-12 border-2 border-yellow-400/30">
            <Crown className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h2 className="font-lora font-semibold text-2xl md:text-3xl text-champagne-gold mb-4">
              Experience Luxury Maintenance
            </h2>
            <p className="font-inter text-white/80 mb-8 max-w-2xl mx-auto">
              Join our exclusive clientele who trust EliteLuxx Cleaning to maintain their luxury homes 
              and estates. Experience the difference that true luxury service makes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={onBookingClick}
                className="btn-primary font-inter font-medium text-lg px-8 py-4"
              >
                Start Luxury Service
              </button>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-deep-charcoal px-8 py-4 rounded-md font-inter font-bold text-lg transition-all duration-200">
                Schedule Consultation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LuxuryMaintenance;
