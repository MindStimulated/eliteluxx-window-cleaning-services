import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Building2, CheckCircle, Star, Users, Shield, ArrowLeft, Briefcase } from 'lucide-react';

interface CommercialCleaningProps {
  onBack?: () => void;
  onBookingClick?: () => void;
}

const CommercialCleaning: React.FC<CommercialCleaningProps> = ({ onBack, onBookingClick }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  const services = [
    'Office spaces & cubicles',
    'Reception & waiting areas',
    'Conference & meeting rooms',
    'Restroom sanitization',
    'Kitchen & break room cleaning',
    'Floor care & maintenance',
    'Window cleaning (interior)',
    'Trash removal & recycling'
  ];

  const industries = [
    {
      name: 'Corporate Offices',
      description: 'Professional office environments requiring consistent, high-quality cleaning.',
      icon: Briefcase
    },
    {
      name: 'Medical Facilities',
      description: 'Specialized sanitization for clinics, dental offices, and medical practices.',
      icon: Shield
    },
    {
      name: 'Retail Spaces',
      description: 'Customer-facing environments that need to maintain pristine appearance.',
      icon: Building2
    },
    {
      name: 'Educational Facilities',
      description: 'Schools, training centers, and educational institutions.',
      icon: Users
    }
  ];

  const packages = [
    {
      name: 'Basic Office',
      price: 'Custom Quote',
      frequency: 'Weekly/Bi-weekly',
      ideal: 'Small offices (up to 2,000 sq ft)',
      includes: [
        'Desk & surface cleaning',
        'Restroom maintenance',
        'Common area cleaning',
        'Trash removal',
        'Vacuuming & mopping'
      ]
    },
    {
      name: 'Professional Plus',
      price: 'Custom Quote',
      frequency: 'Multiple per week',
      ideal: 'Medium offices (2,000-5,000 sq ft)',
      includes: [
        'Everything in Basic',
        'Kitchen deep cleaning',
        'Conference room setup',
        'Window cleaning',
        'Supply restocking'
      ]
    },
    {
      name: 'Enterprise Elite',
      price: 'Custom Quote',
      frequency: 'Daily service available',
      ideal: 'Large facilities (5,000+ sq ft)',
      includes: [
        'Everything in Professional',
        'Specialized equipment cleaning',
        'Day porter services',
        'Emergency response',
        'Custom protocols'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Professional Image',
      description: 'Maintain a spotless environment that impresses clients and boosts employee morale.'
    },
    {
      title: 'Health & Safety',
      description: 'Reduce sick days and create a healthier workplace with professional sanitization.'
    },
    {
      title: 'Cost Effective',
      description: 'More affordable than hiring in-house staff, with no benefits or training costs.'
    },
    {
      title: 'Flexible Scheduling',
      description: 'After-hours, early morning, or during business hours - we work around you.'
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
              <Building2 className="w-8 h-8 text-champagne-gold" />
            </div>
          </div>
          <h1 className="font-lora font-semibold text-3xl md:text-4xl lg:text-5xl text-champagne-gold mb-6">
            Commercial Cleaning Services
          </h1>
          <p className="font-inter text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            <span className={isMobile ? 'block' : 'hidden'}>
              Professional commercial cleaning for healthy work environments.
            </span>
            <span className={isMobile ? 'hidden' : 'block'}>
              Create a professional, healthy work environment with our comprehensive commercial cleaning services. 
              From small offices to large corporate facilities, we maintain the highest standards of cleanliness and professionalism.
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="card-glass rounded-lg p-6 text-center group hover:shadow-3d-hover transition-all duration-300"
              >
                <industry.icon className="w-12 h-12 text-champagne-gold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-lora font-medium text-lg text-champagne-gold mb-3">{industry.name}</h3>
                <p className="font-inter text-white/80 text-sm leading-relaxed">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services Included - Hidden on mobile to reduce content above packages */}
        <motion.div
          initial={isMobile ? {} : { opacity: 0, y: 30 }}
          animate={isMobile ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`mb-16 ${isMobile ? 'hidden' : 'block'}`}
        >
          <h2 className="font-lora font-semibold text-2xl md:text-3xl text-champagne-gold text-center mb-12">
            Comprehensive Office Cleaning
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
            Commercial Packages
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
                  <div className="font-lora font-bold text-2xl text-emerald-green mb-1">{pkg.price}</div>
                  <p className="font-inter text-white/60 text-sm mb-2">{pkg.frequency}</p>
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
                  Get Custom Quote
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="font-lora font-semibold text-2xl md:text-3xl text-champagne-gold text-center mb-12">
            Benefits of Professional Commercial Cleaning
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="card-glass rounded-lg p-6"
              >
                <h3 className="font-lora font-medium text-lg text-champagne-gold mb-3">{benefit.title}</h3>
                <p className="font-inter text-white/90 leading-relaxed">{benefit.description}</p>
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
              Ready to Elevate Your Workplace?
            </h2>
            <p className="font-inter text-white/80 mb-8 max-w-2xl mx-auto">
              Create a professional environment that impresses clients and enhances productivity. 
              Contact us today for a custom commercial cleaning solution tailored to your business needs.
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

export default CommercialCleaning;
