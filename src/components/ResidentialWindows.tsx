import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, CheckCircle, Clock, Star, Users, Shield, ArrowLeft } from 'lucide-react';

interface ResidentialWindowsProps {
  onBack?: () => void;
  onBookingClick?: () => void;
}

const ResidentialWindows: React.FC<ResidentialWindowsProps> = ({ onBack, onBookingClick }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const features = [
    'Interior & exterior window cleaning',
    'Screen cleaning & maintenance',
    'Window track deep cleaning',
    'Frame detailing & polishing',
    'Sill cleaning & sanitization',
    'Glass protection treatment',
    'Hard water stain removal',
    'Streak-free finish guaranteed'
  ];

  const packages = [
    {
      name: 'Basic Window Clean',
      price: 'From $125',
      duration: '2-3 hours',
      ideal: 'Regular maintenance',
      includes: [
        'Exterior window cleaning',
        'Interior window cleaning',
        'Basic frame wiping',
        'Streak-free finish',
        'Quality inspection'
      ]
    },
    {
      name: 'Complete Window Service',
      price: 'From $185',
      duration: '3-4 hours',
      ideal: 'Comprehensive cleaning',
      includes: [
        'Everything in Basic Clean',
        'Screen cleaning & repair',
        'Track deep cleaning',
        'Frame detailing',
        'Sill cleaning',
        'Hard water stain removal'
      ]
    },
    {
      name: 'Premium Window Care',
      price: 'From $245',
      duration: '4-5 hours',
      ideal: 'Luxury homes',
      includes: [
        'Everything in Complete Service',
        'Glass protection coating',
        'UV protection treatment',
        'Monthly maintenance plan',
        'Emergency glass repair',
        'Eco-friendly solutions'
      ]
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Window Assessment',
      description: 'We evaluate your windows and discuss your specific cleaning needs and schedule preferences.'
    },
    {
      step: '2',
      title: 'Equipment Setup',
      description: 'We arrive with professional-grade window cleaning equipment and eco-friendly solutions.'
    },
    {
      step: '3',
      title: 'Window Cleaning',
      description: 'Our certified window technicians clean your windows inside and out using proven techniques.'
    },
    {
      step: '4',
      title: 'Final Inspection',
      description: 'We conduct a thorough quality check to ensure streak-free, crystal-clear results.'
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
              <Home className="w-8 h-8 text-champagne-gold" />
            </div>
          </div>
          <h1 className="font-lora font-semibold text-3xl md:text-4xl lg:text-5xl text-champagne-gold mb-6">
            Residential Window Cleaning
          </h1>
          <p className="font-inter text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            <span className={isMobile ? 'block' : 'hidden'}>
              Professional window cleaning for homes of all sizes.
            </span>
            <span className={isMobile ? 'hidden' : 'block'}>
              Professional window cleaning for homes of all sizes, including tracks, frames, and screens. 
              Our expert technicians deliver streak-free, crystal-clear results that enhance your home's natural light and curb appeal.
            </span>
          </p>
        </motion.div>

        {/* Features Grid - Hidden on mobile to reduce content above packages */}
        <motion.div
          initial={isMobile ? {} : { opacity: 0, y: 30 }}
          animate={isMobile ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`mb-16 ${isMobile ? 'hidden' : 'block'}`}
        >
          <h2 className="font-lora font-semibold text-2xl md:text-3xl text-champagne-gold text-center mb-12">
            What's Included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={isMobile ? {} : { opacity: 0, y: 20 }}
                animate={isMobile ? {} : { opacity: 1, y: 0 }}
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
          initial={isMobile ? {} : { opacity: 0, y: 30 }}
          animate={isMobile ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="font-lora font-semibold text-2xl md:text-3xl text-champagne-gold text-center mb-12">
            Window Cleaning Packages
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

        {/* Our Process - Hidden on mobile to reduce content above packages */}
        <motion.div
          initial={isMobile ? {} : { opacity: 0, y: 30 }}
          animate={isMobile ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className={`mb-16 ${isMobile ? 'hidden' : 'block'}`}
        >
          <h2 className="font-lora font-semibold text-2xl md:text-3xl text-champagne-gold text-center mb-12">
            Our Window Cleaning Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={isMobile ? {} : { opacity: 0, y: 20 }}
                animate={isMobile ? {} : { opacity: 1, y: 0 }}
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
          initial={isMobile ? {} : { opacity: 0, y: 30 }}
          animate={isMobile ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <div className="card-glass rounded-lg p-8 md:p-12">
            <h2 className="font-lora font-semibold text-2xl md:text-3xl text-champagne-gold text-center mb-8">
              Why Choose EliteLuxx for Your Windows?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Users className="w-12 h-12 text-champagne-gold mx-auto mb-4" />
                <h3 className="font-lora font-medium text-lg text-champagne-gold mb-3">Certified Window Technicians</h3>
                <p className="font-inter text-white/90 text-sm leading-relaxed">
                  All our window cleaning technicians are certified, insured, and trained to industry standards.
                </p>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 text-champagne-gold mx-auto mb-4" />
                <h3 className="font-lora font-medium text-lg text-champagne-gold mb-3">Streak-Free Guarantee</h3>
                <p className="font-inter text-white/90 text-sm leading-relaxed">
                  We guarantee crystal-clear, streak-free windows. If you're not satisfied, we'll return at no charge.
                </p>
              </div>
              <div className="text-center">
                <Clock className="w-12 h-12 text-champagne-gold mx-auto mb-4" />
                <h3 className="font-lora font-medium text-lg text-champagne-gold mb-3">Flexible Scheduling</h3>
                <p className="font-inter text-white/90 text-sm leading-relaxed">
                  Weekly, monthly, quarterly, or one-time service - we work around your schedule.
                </p>
              </div>
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
              Ready for Crystal Clear Windows?
            </h2>
            <p className="font-inter text-white/80 mb-8 max-w-2xl mx-auto">
              Experience the difference professional window cleaning makes. Book your service today and 
              discover why homeowners across the Coachella Valley trust EliteLuxx Window Cleaning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={onBookingClick}
                className="btn-primary font-inter font-medium text-lg px-8 py-4"
              >
                Book Window Cleaning
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

export default ResidentialWindows;
