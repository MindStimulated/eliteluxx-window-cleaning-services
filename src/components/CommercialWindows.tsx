import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Building2, CheckCircle, Star, Users, Shield, ArrowLeft, Briefcase } from 'lucide-react';

interface CommercialWindowsProps {
  onBack?: () => void;
  onBookingClick?: () => void;
}

const CommercialWindows: React.FC<CommercialWindowsProps> = ({ onBack, onBookingClick }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const services = [
    'Storefront window cleaning',
    'Multi-story building windows',
    'Office building exteriors',
    'Safety compliance protocols',
    'Regular maintenance plans',
    'Emergency glass cleaning',
    'Post-construction cleanup',
    'Pressure washing services'
  ];

  const industries = [
    {
      name: 'Office Buildings',
      description: 'Professional window cleaning for corporate headquarters and office complexes.',
      icon: Briefcase
    },
    {
      name: 'Retail Storefronts',
      description: 'Crystal-clear windows that showcase your business and attract customers.',
      icon: Building2
    },
    {
      name: 'Medical Facilities',
      description: 'Specialized cleaning for hospitals, clinics, and healthcare facilities.',
      icon: Shield
    },
    {
      name: 'Educational Buildings',
      description: 'Schools, universities, and educational facilities window maintenance.',
      icon: Users
    }
  ];

  const packages = [
    {
      name: 'Basic Commercial',
      price: 'Custom Quote',
      frequency: 'Monthly or Quarterly',
      ideal: 'Small businesses & retail',
      includes: [
        'Exterior window cleaning',
        'Storefront glass',
        'Entry door cleaning',
        'Basic frame maintenance',
        'Quality inspection'
      ]
    },
    {
      name: 'Professional Plus',
      price: 'Custom Quote',
      frequency: 'Bi-weekly or Monthly',
      ideal: 'Office buildings (2-5 stories)',
      includes: [
        'Everything in Basic',
        'Interior window cleaning',
        'Track & sill cleaning',
        'Screen maintenance',
        'Emergency service priority'
      ]
    },
    {
      name: 'Enterprise Elite',
      price: 'Custom Quote',
      frequency: 'Weekly service available',
      ideal: 'High-rise & large facilities',
      includes: [
        'Everything in Professional',
        'Rope access cleaning',
        'Safety compliance protocols',
        'Insurance coverage',
        'Dedicated account manager'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Professional Image',
      description: 'Crystal-clear windows enhance your business appearance and attract more customers.'
    },
    {
      title: 'Cost Effective',
      description: 'Regular window maintenance prevents costly replacements and extends window life.'
    },
    {
      title: 'Safety Compliance',
      description: 'Our certified technicians follow all safety protocols for commercial window cleaning.'
    },
    {
      title: 'Flexible Scheduling',
      description: 'We work around your business hours to minimize disruption to operations.'
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
          initial={isMobile ? {} : { opacity: 0, y: 30 }}
          animate={isMobile ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-champagne-gold/10 rounded-full flex items-center justify-center">
              <Building2 className="w-8 h-8 text-champagne-gold" />
            </div>
          </div>
          <h1 className="font-lora font-semibold text-3xl md:text-4xl lg:text-5xl text-champagne-gold mb-6">
            Commercial Window Cleaning
          </h1>
          <p className="font-inter text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            <span className={isMobile ? 'block' : 'hidden'}>
              Professional window cleaning for storefronts and commercial buildings.
            </span>
            <span className={isMobile ? 'hidden' : 'block'}>
              Comprehensive window cleaning solutions for offices, storefronts, and commercial buildings. 
              From small businesses to large corporate facilities, we maintain crystal-clear windows that enhance your professional image.
            </span>
          </p>
        </motion.div>

        {/* Industries We Serve - Hidden on mobile to reduce content above packages */}
        <motion.div
          initial={isMobile ? {} : { opacity: 0, y: 30 }}
          animate={isMobile ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`mb-16 ${isMobile ? 'hidden' : 'block'}`}
        >
          <h2 className="font-lora font-semibold text-2xl md:text-3xl text-champagne-gold text-center mb-12">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={isMobile ? {} : { opacity: 0, y: 20 }}
                animate={isMobile ? {} : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="card-glass rounded-lg p-6 text-center group hover:shadow-3d-hover transition-all duration-300"
              >
                <industry.icon className="w-10 h-10 text-champagne-gold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-lora font-medium text-lg text-champagne-gold mb-3">{industry.name}</h3>
                <p className="font-inter text-white/90 text-sm leading-relaxed">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Service Packages */}
        <motion.div
          initial={isMobile ? {} : { opacity: 0, y: 30 }}
          animate={isMobile ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="font-lora font-semibold text-2xl md:text-3xl text-champagne-gold text-center mb-12">
            Commercial Window Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={isMobile ? {} : { opacity: 0, y: 20 }}
                animate={isMobile ? {} : { opacity: 1, y: 0 }}
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
                  <p className="font-inter text-white/60 text-sm mb-2">{pkg.frequency}</p>
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
                  Get Quote
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services Offered - Hidden on mobile to reduce content above packages */}
        <motion.div
          initial={isMobile ? {} : { opacity: 0, y: 30 }}
          animate={isMobile ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className={`mb-16 ${isMobile ? 'hidden' : 'block'}`}
        >
          <h2 className="font-lora font-semibold text-2xl md:text-3xl text-champagne-gold text-center mb-12">
            Our Commercial Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service}
                initial={isMobile ? {} : { opacity: 0, y: 20 }}
                animate={isMobile ? {} : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="card-glass rounded-lg p-6 text-center"
              >
                <CheckCircle className="w-8 h-8 text-emerald-green mx-auto mb-4" />
                <p className="font-inter text-white/90 text-sm leading-relaxed">{service}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={isMobile ? {} : { opacity: 0, y: 30 }}
          animate={isMobile ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <div className="card-glass rounded-lg p-8 md:p-12">
            <h2 className="font-lora font-semibold text-2xl md:text-3xl text-champagne-gold text-center mb-8">
              Benefits of Professional Commercial Window Cleaning
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={isMobile ? {} : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={isMobile ? {} : { opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="text-left"
                >
                  <h3 className="font-lora font-medium text-lg text-champagne-gold mb-3">{benefit.title}</h3>
                  <p className="font-inter text-white/90 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={isMobile ? {} : { opacity: 0, y: 30 }}
          animate={isMobile ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center"
        >
          <div className="card-glass rounded-lg p-8 md:p-12">
            <Star className="w-16 h-16 text-champagne-gold mx-auto mb-6" />
            <h2 className="font-lora font-semibold text-2xl md:text-3xl text-champagne-gold mb-4">
              Ready to Enhance Your Business Image?
            </h2>
            <p className="font-inter text-white/80 mb-8 max-w-2xl mx-auto">
              Contact us today for a custom commercial window cleaning solution tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={onBookingClick}
                className="btn-primary font-inter font-medium text-lg px-8 py-4"
              >
                Get Custom Quote
              </button>
              <button className="border-2 border-champagne-gold text-champagne-gold hover:bg-champagne-gold hover:text-white px-8 py-4 rounded-md font-inter font-medium text-lg transition-all duration-200">
                Schedule Consultation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommercialWindows;
