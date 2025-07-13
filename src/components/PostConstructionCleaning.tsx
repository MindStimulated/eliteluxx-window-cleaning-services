import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, Hammer, Star, ArrowLeft, AlertTriangle, Clock, Sparkles } from 'lucide-react';

interface PostConstructionCleaningProps {
  onBack?: () => void;
  onBookingClick?: () => void;
}

const PostConstructionCleaning: React.FC<PostConstructionCleaningProps> = ({ onBack, onBookingClick }) => {
  const constructionServices = [
    'Construction debris removal',
    'Dust and fine particle elimination',
    'Paint splatter and adhesive removal',
    'Window and glass surface cleaning',
    'Floor deep cleaning and polishing',
    'Fixture and appliance cleaning',
    'Air duct and vent cleaning',
    'Final touch-up cleaning'
  ];

  const phases = [
    {
      title: 'Rough Clean',
      description: 'Initial cleanup after major construction work is complete.',
      timeline: 'During construction',
      features: ['Debris removal', 'Surface sweeping', 'Basic dust removal', 'Safety preparation'],
      icon: Hammer
    },
    {
      title: 'Final Clean',
      description: 'Comprehensive cleaning before move-in or project completion.',
      timeline: 'Post-construction',
      features: ['Detail cleaning', 'Fixture polishing', 'Floor finishing', 'Window cleaning'],
      icon: Sparkles
    },
    {
      title: 'Touch-Up Clean',
      description: 'Final inspection and touch-up cleaning for perfection.',
      timeline: 'Pre-handover',
      features: ['Quality inspection', 'Final polishing', 'Detail corrections', 'Move-in ready'],
      icon: Star
    }
  ];

  const packages = [
    {
      name: 'Rough Clean Package',
      price: 'From $300',
      description: 'Initial construction cleanup and debris removal.',
      features: [
        'Construction debris removal',
        'Surface sweeping and vacuuming',
        'Basic dust elimination',
        'Safety hazard removal',
        'Preparation for final construction'
      ],
      popular: false
    },
    {
      name: 'Final Clean Package',
      price: 'From $500',
      description: 'Complete post-construction cleaning and finishing.',
      features: [
        'Comprehensive dust removal',
        'Window and glass cleaning',
        'Floor deep cleaning',
        'Fixture and appliance cleaning',
        'Paint and adhesive removal',
        'Air quality improvement'
      ],
      popular: true
    },
    {
      name: 'Complete Package',
      price: 'From $750',
      description: 'Full-service construction cleanup from start to finish.',
      features: [
        'All rough clean services',
        'All final clean services',
        'Multiple site visits',
        'Quality inspections',
        'Touch-up cleaning included',
        'Move-in ready guarantee'
      ],
      popular: false
    }
  ];

  const specialtyAreas = [
    {
      area: 'Residential Construction',
      description: 'New homes, additions, and major renovations.',
      specialties: ['Kitchen remodels', 'Bathroom renovations', 'Home additions', 'Basement finishing']
    },
    {
      area: 'Commercial Construction',
      description: 'Office buildings, retail spaces, and commercial facilities.',
      specialties: ['Office build-outs', 'Retail construction', 'Restaurant preparation', 'Medical facilities']
    },
    {
      area: 'Specialty Projects',
      description: 'Unique construction projects requiring specialized cleaning.',
      specialties: ['Historic restorations', 'Luxury developments', 'Green buildings', 'Industrial facilities']
    }
  ];

  const process = [
    {
      step: 'Site Assessment',
      description: 'Evaluate construction cleanup needs and develop cleaning strategy.'
    },
    {
      step: 'Safety Preparation',
      description: 'Set up safety protocols and protective equipment for the cleaning team.'
    },
    {
      step: 'Debris Removal',
      description: 'Remove construction debris, materials, and large particle dust.'
    },
    {
      step: 'Deep Cleaning',
      description: 'Comprehensive cleaning of all surfaces, fixtures, and systems.'
    },
    {
      step: 'Quality Inspection',
      description: 'Final inspection and touch-up cleaning to ensure perfection.'
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
            <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center">
              <Hammer className="w-8 h-8 text-orange-400" />
            </div>
          </div>
          <h1 className="font-lora font-semibold text-3xl md:text-4xl lg:text-5xl text-champagne-gold mb-6">
            Post-Construction Cleaning
          </h1>
          <p className="font-inter text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Transform your construction site into a pristine, move-in ready space. Our specialized 
            post-construction cleaning services handle the toughest cleanup challenges with precision and care.
          </p>
        </motion.div>

        {/* Construction Phases */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="font-lora font-semibold text-2xl md:text-3xl text-champagne-gold text-center mb-12">
            Construction Cleaning Phases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="card-glass rounded-lg p-8 text-center group hover:shadow-3d-hover transition-all duration-300"
              >
                <phase.icon className="w-12 h-12 text-champagne-gold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-lora font-semibold text-xl text-champagne-gold mb-4">{phase.title}</h3>
                <p className="font-inter text-white/80 mb-4 leading-relaxed">{phase.description}</p>
                <div className="text-center mb-6">
                  <span className="inline-block px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium">
                    {phase.timeline}
                  </span>
                </div>
                <div className="space-y-2">
                  {phase.features.map((feature, idx) => (
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
            Construction Cleaning Packages
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

        {/* Specialty Areas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-lora font-semibold text-2xl md:text-3xl text-champagne-gold text-center mb-12">
            Specialty Construction Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialtyAreas.map((area, index) => (
              <motion.div
                key={area.area}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="card-glass rounded-lg p-6"
              >
                <h3 className="font-lora font-medium text-lg text-champagne-gold mb-3">{area.area}</h3>
                <p className="font-inter text-white/80 mb-4 leading-relaxed">{area.description}</p>
                <div className="space-y-2">
                  {area.specialties.map((specialty, idx) => (
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
            Construction Cleaning Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {constructionServices.map((service, index) => (
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
            Our Construction Cleaning Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-lora font-bold text-white">{index + 1}</span>
                </div>
                <h3 className="font-lora font-medium text-lg text-champagne-gold mb-3">{step.step}</h3>
                <p className="font-inter text-white/80 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Safety & Compliance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mb-16"
        >
          <div className="card-glass rounded-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <Shield className="w-16 h-16 text-champagne-gold mx-auto mb-6" />
              <h2 className="font-lora font-semibold text-2xl md:text-3xl text-champagne-gold mb-4">
                Safety & Compliance
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <AlertTriangle className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                <h3 className="font-lora font-medium text-lg text-champagne-gold mb-3">OSHA Compliant</h3>
                <p className="font-inter text-white/90 text-sm leading-relaxed">
                  All safety protocols and procedures meet OSHA construction site requirements.
                </p>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 text-emerald-green mx-auto mb-3" />
                <h3 className="font-lora font-medium text-lg text-champagne-gold mb-3">Fully Insured</h3>
                <p className="font-inter text-white/90 text-sm leading-relaxed">
                  Comprehensive liability and workers' compensation coverage for construction sites.
                </p>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h3 className="font-lora font-medium text-lg text-champagne-gold mb-3">On Schedule</h3>
                <p className="font-inter text-white/90 text-sm leading-relaxed">
                  Coordinated with your construction timeline to avoid delays and ensure completion.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="text-center"
        >
          <div className="card-glass rounded-lg p-8 md:p-12 border-2 border-orange-400/30">
            <Hammer className="w-16 h-16 text-orange-400 mx-auto mb-6" />
            <h2 className="font-lora font-semibold text-2xl md:text-3xl text-champagne-gold mb-4">
              Ready for Post-Construction Cleanup?
            </h2>
            <p className="font-inter text-white/80 mb-8 max-w-2xl mx-auto">
              Don't let construction debris delay your project completion. Our experienced team will transform 
              your construction site into a pristine, move-in ready space quickly and efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={onBookingClick}
                className="btn-primary font-inter font-medium text-lg px-8 py-4"
              >
                Get Construction Quote
              </button>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-md font-inter font-medium text-lg transition-all duration-200">
                Schedule Site Visit
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PostConstructionCleaning;
