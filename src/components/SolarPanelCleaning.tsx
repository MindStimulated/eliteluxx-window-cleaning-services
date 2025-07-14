import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Sun, Zap, TrendingUp, DollarSign, Star, Shield, CheckCircle, Clock } from 'lucide-react';

interface SolarPanelCleaningProps {
  onBack?: () => void;
  onBookingClick?: () => void;
}

const SolarPanelCleaning: React.FC<SolarPanelCleaningProps> = ({ onBack, onBookingClick }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Maximize Energy Output',
      description: 'Clean solar panels can increase energy production by up to 30%'
    },
    {
      icon: DollarSign,
      title: 'Save Money',
      description: 'Improved efficiency means lower electricity bills and faster ROI'
    },
    {
      icon: Shield,
      title: 'Protect Investment',
      description: 'Regular cleaning prevents damage and extends panel lifespan'
    },
    {
      icon: Sun,
      title: 'Desert Optimized',
      description: 'Specialized techniques for Coachella Valley dust and conditions'
    }
  ];

  const services = [
    {
      title: 'Residential Solar Cleaning',
      description: 'Complete cleaning for home solar panel systems',
      features: ['Panel cleaning', 'Inspection report', 'Performance assessment', 'Preventive maintenance'],
      price: 'From $150'
    },
    {
      title: 'Commercial Solar Cleaning',
      description: 'Large-scale solar array cleaning for businesses',
      features: ['High-volume cleaning', 'Detailed reporting', 'Scheduled maintenance', 'Performance monitoring'],
      price: 'Custom pricing'
    },
    {
      title: 'Emergency Cleaning',
      description: 'Quick response for dust storms and urgent needs',
      features: ['24-48 hour response', 'Dust storm cleanup', 'Performance restoration', 'Priority scheduling'],
      price: 'From $200'
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Initial Assessment',
      description: 'We evaluate your solar panel system and current efficiency levels'
    },
    {
      step: '2',
      title: 'Safe Setup',
      description: 'Professional equipment setup with safety protocols for roof work'
    },
    {
      step: '3',
      title: 'Gentle Cleaning',
      description: 'Specialized cleaning solutions and techniques that won\'t damage panels'
    },
    {
      step: '4',
      title: 'Final Inspection',
      description: 'Quality check and performance report with before/after comparisons'
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
              <Sun className="w-8 h-8 text-gray-700" />
            </div>
          </div>
          <h1 className="font-lora font-semibold text-3xl md:text-4xl lg:text-5xl text-gray-700 mb-6 text-center">
            Solar Panel Cleaning Services
          </h1>
          <p className="font-inter text-lg md:text-xl text-white/90 text-center max-w-3xl mx-auto mb-8">
            Maximize your solar investment with professional cleaning services designed for the Coachella Valley's unique desert conditions.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-16 bg-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-lora font-semibold text-2xl md:text-3xl text-gray-700 text-center mb-12">
            Why Clean Solar Panels Matter
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={isMobile ? { opacity: 1 } : { opacity: 0, y: 30 }}
                whileInView={isMobile ? { opacity: 1 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-glass rounded-lg p-6 text-center"
              >
                <benefit.icon className="w-12 h-12 text-gray-700 mx-auto mb-4" />
                <h3 className="font-lora font-medium text-lg text-gray-700 mb-3">{benefit.title}</h3>
                <p className="font-inter text-sm text-white/90">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-lora font-semibold text-2xl md:text-3xl text-gray-700 text-center mb-12">
            Our Solar Panel Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card-glass rounded-lg p-8">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-16 bg-black/10">
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

      {/* Efficiency Impact Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="card-glass rounded-lg p-8 md:p-12 text-center">
            <Zap className="w-16 h-16 text-gray-700 mx-auto mb-6" />
            <h2 className="font-lora font-semibold text-2xl md:text-3xl text-gray-700 mb-4">
              Maximize Your Solar Investment
            </h2>
            <p className="font-inter text-lg text-white/90 mb-8">
              In the Coachella Valley's dusty environment, clean solar panels can mean the difference between optimal 
              performance and significant energy loss. Our professional cleaning services help you get the most from 
              your solar investment.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-green mb-2">30%</div>
                <div className="font-inter text-sm text-white/80">Potential efficiency increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-green mb-2">$500+</div>
                <div className="font-inter text-sm text-white/80">Annual savings potential</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-green mb-2">25+</div>
                <div className="font-inter text-sm text-white/80">Years panel lifespan</div>
              </div>
            </div>
            <button
              onClick={onBookingClick}
              className="btn-primary font-inter font-medium text-lg"
            >
              Schedule Solar Cleaning
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-16 bg-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="w-12 h-12 text-gray-700 mx-auto mb-4" />
              <h3 className="font-lora font-medium text-lg text-gray-700 mb-3">Insured & Certified</h3>
              <p className="font-inter text-sm text-white/90">
                Fully insured with specialized training in solar panel care and roof safety.
              </p>
            </div>
            <div className="text-center">
              <Star className="w-12 h-12 text-gray-700 mx-auto mb-4" />
              <h3 className="font-lora font-medium text-lg text-gray-700 mb-3">Desert Expertise</h3>
              <p className="font-inter text-sm text-white/90">
                Local knowledge of Coachella Valley conditions and optimal cleaning schedules.
              </p>
            </div>
            <div className="text-center">
              <Clock className="w-12 h-12 text-gray-700 mx-auto mb-4" />
              <h3 className="font-lora font-medium text-lg text-gray-700 mb-3">Flexible Scheduling</h3>
              <p className="font-inter text-sm text-white/90">
                Convenient scheduling options including regular maintenance programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-lora font-semibold text-2xl md:text-3xl text-gray-700 mb-6">
            Ready to Boost Your Solar Efficiency?
          </h2>
          <p className="font-inter text-lg text-white/90 mb-8">
            Don't let dust and debris cost you money. Schedule your professional solar panel cleaning today.
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <button
              onClick={onBookingClick}
              className="btn-primary font-inter font-medium text-lg w-full md:w-auto"
            >
              Get Free Quote
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

export default SolarPanelCleaning;
