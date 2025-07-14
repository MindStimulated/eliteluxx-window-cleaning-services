import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Building2, Shield, AlertTriangle, CheckCircle, Clock, Star, Users, Zap, Award } from 'lucide-react';

interface HighRiseWindowsProps {
  onBack?: () => void;
  onBookingClick?: () => void;
}

const HighRiseWindows: React.FC<HighRiseWindowsProps> = ({ onBack, onBookingClick }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const services = [
    {
      icon: Building2,
      title: 'Multi-Story Buildings',
      description: 'Professional cleaning for buildings 3+ stories with specialized equipment',
      features: ['Rope access systems', 'Scaffold setup', 'Safety protocols', 'Minimal disruption'],
      price: 'Custom pricing'
    },
    {
      icon: Shield,
      title: 'Emergency Services',
      description: 'Urgent window cleaning for high-rise buildings and hard-to-reach areas',
      features: ['24/7 availability', 'Rapid response', 'Emergency repairs', 'Safety inspections'],
      price: 'Priority rates'
    },
    {
      icon: Award,
      title: 'Maintenance Programs',
      description: 'Regular scheduled cleaning for high-rise commercial properties',
      features: ['Quarterly service', 'Annual contracts', 'Preventive care', 'Performance reports'],
      price: 'Volume discounts'
    }
  ];

  const safetyMeasures = [
    {
      title: 'Certified Technicians',
      description: 'All staff are certified in rope access and high-rise safety protocols'
    },
    {
      title: 'Professional Equipment',
      description: 'State-of-the-art harnesses, ropes, and cleaning equipment designed for safety'
    },
    {
      title: 'Insurance Coverage',
      description: 'Comprehensive liability and workers compensation insurance for all operations'
    },
    {
      title: 'Safety Inspections',
      description: 'Pre-service safety checks and equipment inspections for every job'
    }
  ];

  const buildingTypes = [
    {
      type: 'Office Buildings',
      description: 'Corporate headquarters and business complexes',
      challenges: ['Multiple floors', 'Access restrictions', 'Business hour considerations'],
      solution: 'Flexible scheduling with minimal disruption'
    },
    {
      type: 'Residential Towers',
      description: 'High-rise condominiums and apartment buildings',
      challenges: ['Resident privacy', 'Balcony access', 'Safety regulations'],
      solution: 'Respectful service with advance notice'
    },
    {
      type: 'Hotels & Resorts',
      description: 'Multi-story hospitality properties',
      challenges: ['Guest experience', 'Aesthetic standards', 'Operational hours'],
      solution: 'Discrete service maintaining luxury standards'
    },
    {
      type: 'Medical Facilities',
      description: 'Hospitals and medical centers',
      challenges: ['Sterile environments', 'Critical operations', 'Patient safety'],
      solution: 'Specialized protocols for healthcare settings'
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Site Assessment',
      description: 'Comprehensive evaluation of building height, access points, and safety requirements'
    },
    {
      step: '2',
      title: 'Safety Planning',
      description: 'Detailed safety plan development with equipment selection and risk assessment'
    },
    {
      step: '3',
      title: 'Equipment Setup',
      description: 'Professional installation of rope access systems and safety equipment'
    },
    {
      step: '4',
      title: 'Window Cleaning',
      description: 'Systematic cleaning using specialized techniques for high-rise applications'
    },
    {
      step: '5',
      title: 'Quality Inspection',
      description: 'Final safety check and quality inspection before equipment removal'
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
              <Building2 className="w-8 h-8 text-gray-700" />
            </div>
          </div>
          <h1 className="font-lora font-semibold text-3xl md:text-4xl lg:text-5xl text-gray-700 mb-6 text-center">
            High-Rise Window Cleaning
          </h1>
          <p className="font-inter text-lg md:text-xl text-white/90 text-center max-w-3xl mx-auto mb-8">
            Professional window cleaning for high-rise buildings with certified technicians and specialized safety equipment.
          </p>
          <div className="flex items-center justify-center space-x-8 text-center">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-emerald-green" />
              <span className="font-inter text-sm text-white/90">Safety Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-emerald-green" />
              <span className="font-inter text-sm text-white/90">Fully Insured</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-emerald-green" />
              <span className="font-inter text-sm text-white/90">Professional Grade</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-16 bg-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-lora font-semibold text-2xl md:text-3xl text-gray-700 text-center mb-12">
            Our High-Rise Services
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
                    Get Quote
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety First Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <AlertTriangle className="w-12 h-12 text-gray-700 mx-auto mb-4" />
            <h2 className="font-lora font-semibold text-2xl md:text-3xl text-gray-700 mb-4">
              Safety is Our Top Priority
            </h2>
            <p className="font-inter text-lg text-white/90 max-w-3xl mx-auto">
              High-rise window cleaning requires specialized training, equipment, and protocols. 
              Our certified technicians follow strict safety standards for every job.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {safetyMeasures.map((measure, index) => (
              <div key={index} className="card-glass rounded-lg p-6">
                <h3 className="font-lora font-semibold text-lg text-gray-700 mb-3">{measure.title}</h3>
                <p className="font-inter text-white/90">{measure.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Building Types */}
      <section className="py-12 md:py-16 bg-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-lora font-semibold text-2xl md:text-3xl text-gray-700 text-center mb-12">
            Types of Buildings We Service
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {buildingTypes.map((building, index) => (
              <div key={index} className="card-glass rounded-lg p-6">
                <h3 className="font-lora font-semibold text-lg text-gray-700 mb-3">{building.type}</h3>
                <p className="font-inter text-white/90 mb-4">{building.description}</p>
                <div className="mb-4">
                  <h4 className="font-inter font-semibold text-sm text-gray-700 mb-2">Common Challenges:</h4>
                  <ul className="space-y-1">
                    {building.challenges.map((challenge, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-gray-700 rounded-full flex-shrink-0" />
                        <span className="font-inter text-sm text-white/90">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-emerald-green/10 rounded-lg p-3">
                  <h4 className="font-inter font-semibold text-sm text-emerald-green mb-1">Our Solution:</h4>
                  <p className="font-inter text-sm text-white/90">{building.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-lora font-semibold text-2xl md:text-3xl text-gray-700 text-center mb-12">
            Our High-Rise Cleaning Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
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

      {/* Capabilities Section */}
      <section className="py-12 md:py-16 bg-black/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="card-glass rounded-lg p-8 md:p-12 text-center">
            <Building2 className="w-16 h-16 text-gray-700 mx-auto mb-6" />
            <h2 className="font-lora font-semibold text-2xl md:text-3xl text-gray-700 mb-4">
              No Building Too High
            </h2>
            <p className="font-inter text-lg text-white/90 mb-8">
              Our certified technicians and specialized equipment allow us to safely clean windows 
              on buildings of any height, from 3-story buildings to skyscrapers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-green mb-2">50+</div>
                <div className="font-inter text-sm text-white/80">Stories cleaned</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-green mb-2">100%</div>
                <div className="font-inter text-sm text-white/80">Safety record</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-green mb-2">24/7</div>
                <div className="font-inter text-sm text-white/80">Emergency service</div>
              </div>
            </div>
            <button
              onClick={onBookingClick}
              className="btn-primary font-inter font-medium text-lg"
            >
              Request High-Rise Quote
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <Users className="w-12 h-12 text-gray-700 mx-auto mb-4" />
              <h3 className="font-lora font-medium text-lg text-gray-700 mb-3">Certified Team</h3>
              <p className="font-inter text-sm text-white/90">
                All technicians are certified in rope access and high-rise safety protocols.
              </p>
            </div>
            <div className="text-center">
              <Zap className="w-12 h-12 text-gray-700 mx-auto mb-4" />
              <h3 className="font-lora font-medium text-lg text-gray-700 mb-3">Advanced Equipment</h3>
              <p className="font-inter text-sm text-white/90">
                State-of-the-art rope access systems and professional cleaning equipment.
              </p>
            </div>
            <div className="text-center">
              <Clock className="w-12 h-12 text-gray-700 mx-auto mb-4" />
              <h3 className="font-lora font-medium text-lg text-gray-700 mb-3">Flexible Scheduling</h3>
              <p className="font-inter text-sm text-white/90">
                Work around your building's schedule with minimal disruption to operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-lora font-semibold text-2xl md:text-3xl text-gray-700 mb-6">
            Need Professional High-Rise Window Cleaning?
          </h2>
          <p className="font-inter text-lg text-white/90 mb-8">
            Trust the experts for safe, professional high-rise window cleaning services.
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <button
              onClick={onBookingClick}
              className="btn-primary font-inter font-medium text-lg w-full md:w-auto"
            >
              Get Custom Quote
            </button>
            <button className="btn-primary font-inter font-medium text-lg w-full md:w-auto">
              Emergency Service: (760) 555-0123
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HighRiseWindows;
