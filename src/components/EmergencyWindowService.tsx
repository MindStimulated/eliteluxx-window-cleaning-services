import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Zap, Clock, Phone, AlertTriangle, CheckCircle, Shield, Star, Users } from 'lucide-react';

interface EmergencyWindowServiceProps {
  onBack?: () => void;
  onBookingClick?: () => void;
}

const EmergencyWindowService: React.FC<EmergencyWindowServiceProps> = ({ onBack, onBookingClick }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const emergencyServices = [
    {
      icon: AlertTriangle,
      title: 'Storm Damage Cleanup',
      description: 'Immediate window cleaning after storms, dust storms, or severe weather',
      responseTime: '2-4 hours',
      availability: '24/7'
    },
    {
      icon: Zap,
      title: 'Same-Day Service',
      description: 'Urgent window cleaning for events, showings, or business needs',
      responseTime: '4-6 hours',
      availability: 'Business hours'
    },
    {
      icon: Shield,
      title: 'Emergency Repairs',
      description: 'Temporary window boarding and emergency glass cleaning',
      responseTime: '1-2 hours',
      availability: '24/7'
    }
  ];

  const emergencySituations = [
    {
      situation: 'Real Estate Showing',
      description: 'Last-minute window cleaning for property showings and open houses',
      urgency: 'Same day',
      solution: 'Priority scheduling within 4-6 hours'
    },
    {
      situation: 'Storm Aftermath',
      description: 'Windows covered in dust, debris, or storm residue',
      urgency: 'Immediate',
      solution: '24/7 response team within 2 hours'
    },
    {
      situation: 'Special Events',
      description: 'Wedding venues, corporate events, or special occasions',
      urgency: 'Same day',
      solution: 'Flexible scheduling to meet event timelines'
    },
    {
      situation: 'Business Emergency',
      description: 'Storefronts, offices, or commercial properties needing immediate cleaning',
      urgency: 'Priority',
      solution: 'Emergency response within business hours'
    }
  ];

  const responseTypes = [
    {
      title: 'Critical Emergency',
      description: 'Immediate response for safety-related window issues',
      responseTime: '1-2 hours',
      availability: '24/7/365',
      pricing: 'Emergency rates apply'
    },
    {
      title: 'Same-Day Service',
      description: 'Urgent cleaning for events, showings, or business needs',
      responseTime: '4-6 hours',
      availability: 'Business hours',
      pricing: 'Priority pricing'
    },
    {
      title: 'Next-Day Priority',
      description: 'Fast service for non-critical but urgent situations',
      responseTime: 'Next business day',
      availability: 'Daily',
      pricing: 'Standard rates'
    }
  ];

  const coverage = [
    'Palm Springs',
    'Desert Hot Springs',
    'Cathedral City',
    'Rancho Mirage',
    'Palm Desert',
    'Indian Wells',
    'La Quinta',
    'Indio',
    'Coachella',
    'Thousand Palms'
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
              <Zap className="w-8 h-8 text-gray-700" />
            </div>
          </div>
          <h1 className="font-lora font-semibold text-3xl md:text-4xl lg:text-5xl text-gray-700 mb-6 text-center">
            Emergency Window Service
          </h1>
          <p className="font-inter text-lg md:text-xl text-white/90 text-center max-w-3xl mx-auto mb-8">
            24/7 emergency window cleaning and repair services for urgent situations across the Coachella Valley.
          </p>
          <div className="flex items-center justify-center space-x-8 text-center">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-emerald-green" />
              <span className="font-inter text-sm text-white/90">24/7 Available</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-emerald-green" />
              <span className="font-inter text-sm text-white/90">Rapid Response</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-emerald-green" />
              <span className="font-inter text-sm text-white/90">Professional Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Bar */}
      <section className="py-8 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-center text-center text-white space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center space-x-2">
              <Phone className="w-6 h-6" />
              <span className="font-inter font-bold text-xl">Emergency Line: (760) 555-0123</span>
            </div>
            <div className="text-sm opacity-90">
              Available 24/7 for emergency window services
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-lora font-semibold text-2xl md:text-3xl text-gray-700 text-center mb-12">
            Emergency Response Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {emergencyServices.map((service, index) => (
              <motion.div
                key={index}
                initial={isMobile ? { opacity: 1 } : { opacity: 0, y: 30 }}
                whileInView={isMobile ? { opacity: 1 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-glass rounded-lg p-8 text-center"
              >
                <service.icon className="w-12 h-12 text-gray-700 mx-auto mb-6" />
                <h3 className="font-lora font-semibold text-xl text-gray-700 mb-4">{service.title}</h3>
                <p className="font-inter text-white/90 mb-6">{service.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-inter text-sm text-white/80">Response Time:</span>
                    <span className="font-inter font-medium text-emerald-green">{service.responseTime}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-inter text-sm text-white/80">Availability:</span>
                    <span className="font-inter font-medium text-emerald-green">{service.availability}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Situations */}
      <section className="py-12 md:py-16 bg-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-lora font-semibold text-2xl md:text-3xl text-gray-700 text-center mb-12">
            Common Emergency Situations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {emergencySituations.map((situation, index) => (
              <div key={index} className="card-glass rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-lora font-semibold text-lg text-gray-700">{situation.situation}</h3>
                  <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-xs font-medium">
                    {situation.urgency}
                  </span>
                </div>
                <p className="font-inter text-white/90 mb-4">{situation.description}</p>
                <div className="bg-emerald-green/10 rounded-lg p-3">
                  <h4 className="font-inter font-semibold text-sm text-emerald-green mb-1">Our Solution:</h4>
                  <p className="font-inter text-sm text-white/90">{situation.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Response Types */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-lora font-semibold text-2xl md:text-3xl text-gray-700 text-center mb-12">
            Response Time Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {responseTypes.map((type, index) => (
              <div key={index} className="card-glass rounded-lg p-8">
                <h3 className="font-lora font-semibold text-xl text-gray-700 mb-4">{type.title}</h3>
                <p className="font-inter text-white/90 mb-6">{type.description}</p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-inter text-sm text-white/80">Response:</span>
                    <span className="font-inter font-medium text-emerald-green">{type.responseTime}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-inter text-sm text-white/80">Available:</span>
                    <span className="font-inter font-medium text-emerald-green">{type.availability}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-inter text-sm text-white/80">Pricing:</span>
                    <span className="font-inter font-medium text-gray-700">{type.pricing}</span>
                  </div>
                </div>
                <button
                  onClick={onBookingClick}
                  className="btn-primary font-inter font-medium text-sm w-full mt-6"
                >
                  Request {type.title}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-12 md:py-16 bg-black/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="font-lora font-semibold text-2xl md:text-3xl text-gray-700 mb-4">
              Emergency Service Coverage
            </h2>
            <p className="font-inter text-lg text-white/90">
              We provide 24/7 emergency window services throughout the Coachella Valley
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {coverage.map((city, index) => (
              <div key={index} className="bg-white/10 rounded-lg p-4 text-center">
                <span className="font-inter font-medium text-white/90">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-lora font-semibold text-2xl md:text-3xl text-gray-700 text-center mb-12">
            Emergency Response Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="font-lora font-medium text-lg text-gray-700 mb-3">Emergency Call</h3>
              <p className="font-inter text-sm text-white/90">Call our 24/7 emergency line for immediate assistance</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="font-lora font-medium text-lg text-gray-700 mb-3">Rapid Assessment</h3>
              <p className="font-inter text-sm text-white/90">Quick evaluation of the situation and urgency level</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="font-lora font-medium text-lg text-gray-700 mb-3">Team Dispatch</h3>
              <p className="font-inter text-sm text-white/90">Emergency team dispatched with necessary equipment</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">4</span>
              </div>
              <h3 className="font-lora font-medium text-lg text-gray-700 mb-3">Service Completion</h3>
              <p className="font-inter text-sm text-white/90">Professional service with quality guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <Users className="w-12 h-12 text-gray-700 mx-auto mb-4" />
              <h3 className="font-lora font-medium text-lg text-gray-700 mb-3">24/7 Availability</h3>
              <p className="font-inter text-sm text-white/90">
                Our emergency team is available around the clock for urgent window service needs.
              </p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 text-gray-700 mx-auto mb-4" />
              <h3 className="font-lora font-medium text-lg text-gray-700 mb-3">Rapid Response</h3>
              <p className="font-inter text-sm text-white/90">
                Fast response times with professional equipment and experienced technicians.
              </p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-12 h-12 text-gray-700 mx-auto mb-4" />
              <h3 className="font-lora font-medium text-lg text-gray-700 mb-3">Quality Guarantee</h3>
              <p className="font-inter text-sm text-white/90">
                Even in emergency situations, we maintain our high standards of service quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16 md:py-20 bg-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Phone className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="font-lora font-semibold text-2xl md:text-3xl text-white mb-6">
            Need Emergency Window Service?
          </h2>
          <p className="font-inter text-lg text-white/90 mb-8">
            Don't wait - call our emergency line now for immediate assistance.
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <button
              onClick={onBookingClick}
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-inter font-bold text-lg w-full md:w-auto transition-colors duration-200"
            >
              Call Emergency Line: (760) 555-0123
            </button>
            <button
              onClick={onBookingClick}
              className="bg-white/10 text-white border border-white hover:bg-white/20 px-8 py-4 rounded-lg font-inter font-medium text-lg w-full md:w-auto transition-colors duration-200"
            >
              Request Callback
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmergencyWindowService;
