import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle, Zap, Phone, Shield, ArrowLeft, AlertTriangle } from 'lucide-react';

interface EmergencyCleaningProps {
  onBack?: () => void;
  onBookingClick?: () => void;
}

const EmergencyCleaning: React.FC<EmergencyCleaningProps> = ({ onBack, onBookingClick }) => {
  const emergencyServices = [
    'Water damage cleanup',
    'Flood restoration cleaning',
    'Fire damage cleaning',
    'Sewage cleanup & sanitization',
    'Hoarding cleanup services',
    'Biohazard cleaning',
    'Storm damage cleanup',
    'Last-minute event preparation'
  ];

  const responseTypes = [
    {
      title: 'Same-Day Service',
      description: 'Get emergency cleaning within 4-6 hours of your call during business hours.',
      responseTime: '4-6 hours',
      availability: 'Business hours',
      icon: Clock
    },
    {
      title: '24/7 Emergency',
      description: 'Critical situations requiring immediate response, available around the clock.',
      responseTime: '1-2 hours',
      availability: '24/7/365',
      icon: Zap
    },
    {
      title: 'Urgent Response',
      description: 'Next-day service for urgent situations that need prompt attention.',
      responseTime: 'Next day',
      availability: 'Daily',
      icon: AlertTriangle
    }
  ];

  const situations = [
    {
      scenario: 'Water Damage',
      description: 'Burst pipes, flooding, or water leaks requiring immediate cleanup.',
      urgency: 'Critical',
      timeline: 'Within 24-48 hours'
    },
    {
      scenario: 'Last-Minute Events',
      description: 'Unexpected guests, surprise visits, or important meetings at home.',
      urgency: 'High',
      timeline: 'Same day'
    },
    {
      scenario: 'Health Emergencies',
      description: 'Illness, accidents, or medical situations requiring sanitization.',
      urgency: 'Critical',
      timeline: 'Within 2-4 hours'
    },
    {
      scenario: 'Property Incidents',
      description: 'Fire damage, storm aftermath, or other property emergencies.',
      urgency: 'Critical',
      timeline: 'Within 24 hours'
    }
  ];

  const process = [
    {
      step: 'Emergency Call',
      description: 'Call our 24/7 emergency hotline for immediate assistance and rapid response.'
    },
    {
      step: 'Rapid Assessment',
      description: 'Our team quickly evaluates the situation and develops an action plan.'
    },
    {
      step: 'Immediate Response',
      description: 'We mobilize our emergency cleaning team with specialized equipment.'
    },
    {
      step: 'Complete Restoration',
      description: 'Thorough cleaning and sanitization to restore your space safely.'
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
            <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center">
              <Zap className="w-8 h-8 text-red-400" />
            </div>
          </div>
          <h1 className="font-lora font-semibold text-3xl md:text-4xl lg:text-5xl text-champagne-gold mb-6">
            24/7 Emergency Cleaning Services
          </h1>
          <p className="font-inter text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            When disasters strike or urgent situations arise, EliteLuxx Cleaning is ready to respond. 
            Our emergency cleaning team provides rapid, professional service when you need it most.
          </p>
          
          {/* Emergency Contact */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 inline-flex items-center space-x-4 bg-red-500/10 border border-red-400/30 rounded-lg p-4"
          >
            <Phone className="w-6 h-6 text-red-400" />
            <div className="text-left">
              <p className="font-inter text-red-400 text-sm font-medium">Emergency Hotline</p>
              <p className="font-lora text-white text-xl font-bold">(760) 555-CLEAN</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Response Types */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="font-lora font-semibold text-2xl md:text-3xl text-champagne-gold text-center mb-12">
            Emergency Response Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {responseTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="card-glass rounded-lg p-8 text-center group hover:shadow-3d-hover transition-all duration-300"
              >
                <type.icon className="w-12 h-12 text-champagne-gold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-lora font-semibold text-xl text-champagne-gold mb-4">{type.title}</h3>
                <p className="font-inter text-white/80 mb-6 leading-relaxed">{type.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-inter text-white/70 text-sm">Response Time:</span>
                    <span className="font-inter text-emerald-green text-sm font-medium">{type.responseTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-inter text-white/70 text-sm">Availability:</span>
                    <span className="font-inter text-emerald-green text-sm font-medium">{type.availability}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Emergency Situations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="font-lora font-semibold text-2xl md:text-3xl text-champagne-gold text-center mb-12">
            Emergency Situations We Handle
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {situations.map((situation, index) => (
              <motion.div
                key={situation.scenario}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="card-glass rounded-lg p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-lora font-medium text-lg text-champagne-gold">{situation.scenario}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    situation.urgency === 'Critical' 
                      ? 'bg-red-500/20 text-red-400' 
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {situation.urgency}
                  </span>
                </div>
                <p className="font-inter text-white/80 mb-4 leading-relaxed">{situation.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-inter text-white/70 text-sm">Response Timeline:</span>
                  <span className="font-inter text-emerald-green text-sm font-medium">{situation.timeline}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services Included */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-lora font-semibold text-2xl md:text-3xl text-champagne-gold text-center mb-12">
            Emergency Cleaning Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergencyServices.map((service, index) => (
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

        {/* Emergency Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="font-lora font-semibold text-2xl md:text-3xl text-champagne-gold text-center mb-12">
            Our Emergency Response Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-lora font-bold text-white">{index + 1}</span>
                </div>
                <h3 className="font-lora font-medium text-lg text-champagne-gold mb-3">{step.step}</h3>
                <p className="font-inter text-white/80 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Safety & Insurance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mb-16"
        >
          <div className="card-glass rounded-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <Shield className="w-16 h-16 text-champagne-gold mx-auto mb-6" />
              <h2 className="font-lora font-semibold text-2xl md:text-3xl text-champagne-gold mb-4">
                Safety & Insurance
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="font-lora font-medium text-lg text-champagne-gold mb-3">Fully Insured</h3>
                <p className="font-inter text-white/90 text-sm leading-relaxed">
                  Complete liability and bonding coverage for emergency response situations.
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-lora font-medium text-lg text-champagne-gold mb-3">Certified Team</h3>
                <p className="font-inter text-white/90 text-sm leading-relaxed">
                  IICRC certified technicians trained in emergency cleaning protocols.
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-lora font-medium text-lg text-champagne-gold mb-3">Safety First</h3>
                <p className="font-inter text-white/90 text-sm leading-relaxed">
                  Health and safety protocols for biohazard and contamination situations.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center"
        >
          <div className="card-glass rounded-lg p-8 md:p-12 border-2 border-red-400/30">
            <Zap className="w-16 h-16 text-red-400 mx-auto mb-6" />
            <h2 className="font-lora font-semibold text-2xl md:text-3xl text-champagne-gold mb-4">
              Need Emergency Cleaning Now?
            </h2>
            <p className="font-inter text-white/80 mb-8 max-w-2xl mx-auto">
              Don't wait when disaster strikes. Our emergency response team is standing by 24/7 to help restore 
              your property quickly and safely. Every minute counts in emergency situations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-md font-inter font-bold text-lg transition-all duration-200 flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Call Emergency Line</span>
              </button>
              <button 
                onClick={onBookingClick}
                className="btn-primary font-inter font-medium text-lg px-8 py-4"
              >
                Schedule Service
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EmergencyCleaning;
