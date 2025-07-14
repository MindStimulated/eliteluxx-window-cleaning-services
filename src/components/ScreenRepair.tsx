import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Grid3X3, Shield, Wrench, Star, CheckCircle, Clock, DollarSign, Home, Building2 } from 'lucide-react';

interface ScreenRepairProps {
  onBack?: () => void;
  onBookingClick?: () => void;
}

const ScreenRepair: React.FC<ScreenRepairProps> = ({ onBack, onBookingClick }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const services = [
    {
      icon: Grid3X3,
      title: 'Screen Replacement',
      description: 'Complete window and door screen replacement services',
      features: ['Standard mesh screens', 'Pet-resistant screens', 'Solar screens', 'Custom sizing'],
      price: 'From $45'
    },
    {
      icon: Wrench,
      title: 'Screen Repair',
      description: 'Professional repair for damaged screens and frames',
      features: ['Hole patching', 'Frame straightening', 'Spring replacement', 'Re-screening'],
      price: 'From $25'
    },
    {
      icon: Shield,
      title: 'Specialty Screens',
      description: 'High-performance screens for specific needs',
      features: ['Security screens', 'Privacy screens', 'Insect-resistant mesh', 'UV protection'],
      price: 'Custom pricing'
    }
  ];

  const screenTypes = [
    {
      title: 'Standard Mesh',
      description: 'Traditional fiberglass mesh for everyday use',
      benefits: ['Affordable option', 'Good visibility', 'Basic insect protection', 'Easy maintenance']
    },
    {
      title: 'Pet-Resistant',
      description: 'Heavy-duty screens designed to withstand pet damage',
      benefits: ['Puncture resistant', 'Claw proof', 'Durable materials', 'Long-lasting']
    },
    {
      title: 'Solar Screens',
      description: 'Specialized mesh that blocks UV rays and reduces heat',
      benefits: ['Energy savings', 'UV protection', 'Glare reduction', 'Maintains visibility']
    },
    {
      title: 'Security Screens',
      description: 'Heavy-duty screens for enhanced home security',
      benefits: ['Break-in protection', 'Reinforced frames', 'Tamper resistant', 'Professional grade']
    }
  ];

  const repairTypes = [
    {
      problem: 'Holes & Tears',
      solution: 'Professional patching or complete re-screening',
      timeframe: 'Same day service'
    },
    {
      problem: 'Bent Frames',
      solution: 'Frame straightening and reinforcement',
      timeframe: '24-48 hours'
    },
    {
      problem: 'Loose Screens',
      solution: 'Spring tension adjustment and securing',
      timeframe: 'Same day service'
    },
    {
      problem: 'Missing Screens',
      solution: 'Complete custom replacement screens',
      timeframe: '2-3 days'
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Assessment',
      description: 'We evaluate your screens and provide detailed recommendations'
    },
    {
      step: '2',
      title: 'Measurement',
      description: 'Precise measurements ensure perfect fit for replacements'
    },
    {
      step: '3',
      title: 'Repair/Replace',
      description: 'Professional repair or custom replacement installation'
    },
    {
      step: '4',
      title: 'Quality Check',
      description: 'Final inspection to ensure proper fit and function'
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
              <Grid3X3 className="w-8 h-8 text-gray-700" />
            </div>
          </div>
          <h1 className="font-lora font-semibold text-3xl md:text-4xl lg:text-5xl text-gray-700 mb-6 text-center">
            Professional Screen Repair & Replacement
          </h1>
          <p className="font-inter text-lg md:text-xl text-white/90 text-center max-w-3xl mx-auto mb-8">
            Expert screen services for homes and businesses in the Coachella Valley. From simple repairs to custom replacements.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-16 bg-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-lora font-semibold text-2xl md:text-3xl text-gray-700 text-center mb-12">
            Our Screen Services
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

      {/* Screen Types */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-lora font-semibold text-2xl md:text-3xl text-gray-700 text-center mb-12">
            Types of Screens We Install
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {screenTypes.map((type, index) => (
              <div key={index} className="card-glass rounded-lg p-6">
                <h3 className="font-lora font-semibold text-lg text-gray-700 mb-3">{type.title}</h3>
                <p className="font-inter text-white/90 mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.benefits.map((benefit, idx) => (
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

      {/* Common Repairs */}
      <section className="py-12 md:py-16 bg-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-lora font-semibold text-2xl md:text-3xl text-gray-700 text-center mb-12">
            Common Screen Problems We Fix
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {repairTypes.map((repair, index) => (
              <div key={index} className="card-glass rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-lora font-semibold text-lg text-gray-700">{repair.problem}</h3>
                  <span className="bg-emerald-green text-white px-3 py-1 rounded-full text-xs font-medium">
                    {repair.timeframe}
                  </span>
                </div>
                <p className="font-inter text-white/90">{repair.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-lora font-semibold text-2xl md:text-3xl text-gray-700 text-center mb-12">
            Our Service Process
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

      {/* Benefits Section */}
      <section className="py-12 md:py-16 bg-black/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="card-glass rounded-lg p-8 md:p-12 text-center">
            <Shield className="w-16 h-16 text-gray-700 mx-auto mb-6" />
            <h2 className="font-lora font-semibold text-2xl md:text-3xl text-gray-700 mb-4">
              Why Professional Screen Service Matters
            </h2>
            <p className="font-inter text-lg text-white/90 mb-8">
              Professional screen repair and replacement ensures perfect fit, quality materials, 
              and long-lasting results that DIY solutions simply can't match.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-green mb-2">2+</div>
                <div className="font-inter text-sm text-white/80">Year warranty</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-green mb-2">Same Day</div>
                <div className="font-inter text-sm text-white/80">Service available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-green mb-2">100%</div>
                <div className="font-inter text-sm text-white/80">Custom fit guarantee</div>
              </div>
            </div>
            <button
              onClick={onBookingClick}
              className="btn-primary font-inter font-medium text-lg"
            >
              Schedule Screen Service
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <Star className="w-12 h-12 text-gray-700 mx-auto mb-4" />
              <h3 className="font-lora font-medium text-lg text-gray-700 mb-3">Quality Materials</h3>
              <p className="font-inter text-sm text-white/90">
                Premium screen mesh and frames designed to withstand desert conditions and daily use.
              </p>
            </div>
            <div className="text-center">
              <Clock className="w-12 h-12 text-gray-700 mx-auto mb-4" />
              <h3 className="font-lora font-medium text-lg text-gray-700 mb-3">Fast Service</h3>
              <p className="font-inter text-sm text-white/90">
                Quick turnaround times with same-day service available for most repairs.
              </p>
            </div>
            <div className="text-center">
              <DollarSign className="w-12 h-12 text-gray-700 mx-auto mb-4" />
              <h3 className="font-lora font-medium text-lg text-gray-700 mb-3">Fair Pricing</h3>
              <p className="font-inter text-sm text-white/90">
                Competitive rates with transparent pricing and no hidden fees or surprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-12 md:py-16 bg-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-lora font-semibold text-2xl md:text-3xl text-gray-700 text-center mb-12">
            We Service Both Residential & Commercial
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-glass rounded-lg p-8 text-center">
              <Home className="w-12 h-12 text-gray-700 mx-auto mb-4" />
              <h3 className="font-lora font-semibold text-xl text-gray-700 mb-4">Residential Services</h3>
              <ul className="space-y-2 text-left">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-green flex-shrink-0" />
                  <span className="font-inter text-sm text-white/90">Window screens</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-green flex-shrink-0" />
                  <span className="font-inter text-sm text-white/90">Patio door screens</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-green flex-shrink-0" />
                  <span className="font-inter text-sm text-white/90">Pool enclosure screens</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-green flex-shrink-0" />
                  <span className="font-inter text-sm text-white/90">Lanai screens</span>
                </li>
              </ul>
            </div>
            <div className="card-glass rounded-lg p-8 text-center">
              <Building2 className="w-12 h-12 text-gray-700 mx-auto mb-4" />
              <h3 className="font-lora font-semibold text-xl text-gray-700 mb-4">Commercial Services</h3>
              <ul className="space-y-2 text-left">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-green flex-shrink-0" />
                  <span className="font-inter text-sm text-white/90">Office building screens</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-green flex-shrink-0" />
                  <span className="font-inter text-sm text-white/90">Restaurant patio screens</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-green flex-shrink-0" />
                  <span className="font-inter text-sm text-white/90">Retail storefront screens</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-green flex-shrink-0" />
                  <span className="font-inter text-sm text-white/90">Hospital facility screens</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-lora font-semibold text-2xl md:text-3xl text-gray-700 mb-6">
            Need Screen Repair or Replacement?
          </h2>
          <p className="font-inter text-lg text-white/90 mb-8">
            Don't let damaged screens compromise your comfort. Get professional service that lasts.
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

export default ScreenRepair;
