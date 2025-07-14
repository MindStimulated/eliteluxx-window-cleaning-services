import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Shield, Sparkles, Star, Crown, Gem, Zap, Droplets, Eye, Home, Building2, Sun, Wrench } from 'lucide-react';

interface ServicesPageProps {
  onBack?: () => void;
  onBookingClick?: () => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ onBack, onBookingClick }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const serviceTiers = [
    {
      name: 'Signature Shine',
      icon: Sparkles,
      description: 'Meticulous window cleaning that delivers clarity and brilliance for your well-maintained luxury home.',
      idealClient: 'The discerning homeowner seeking routine, high-quality maintenance for a well-kept luxury residence.',
      coreInclusions: [
        'Flawless interior & exterior window cleaning using purified water systems',
        'Meticulous hand-detailing of each pane for uncompromising clarity',
        'Professional brushing of all screens for enhanced airflow',
        'Detailed wiping of all accessible window tracks and sills'
      ],
      pricingFramework: 'Base rate determined by property square footage and window count.',
      badge: 'Essential Excellence',
      color: 'champagne-gold'
    },
    {
      name: 'Estate Detailing',
      icon: Crown,
      description: 'Comprehensive preservation service that transforms your windows into crystal-clear showcases of luxury.',
      idealClient: 'The property owner with a new acquisition, preparing for sale, or requiring intensive seasonal renewal.',
      coreInclusions: [
        'All Signature Shine services with enhanced precision',
        'Deep restoration cleaning of all window screens with specialized solutions',
        'Detailed vacuuming of all window and sliding door tracks',
        'Professional removal of light-to-moderate hard water spots',
        'Meticulous attention to architectural details and custom glazing'
      ],
      pricingFramework: 'Signature Shine rate plus tiered surcharge based on screen count and mineral deposit severity.',
      badge: 'Complete Transformation',
      color: 'emerald-green'
    },
    {
      name: 'The Preservation Package',
      icon: Gem,
      description: 'The ultimate in glass preservation and protection, ensuring your investment maintains its pristine beauty.',
      idealClient: 'The visionary property owner focused on long-term asset protection and preserving custom glass investments.',
      coreInclusions: [
        'All Estate Detailing services with master-level execution',
        'Advanced removal of severe hard water mineral deposits',
        'Professional application of high-performance hydrophobic glass coating',
        'Diamon-Fusion® or similar premium protection technology',
        'Comprehensive documentation and maintenance recommendations'
      ],
      pricingFramework: 'Estate Detailing rate plus per-square-foot charge for premium protection service.',
      badge: 'Ultimate Protection',
      color: 'deep-sage'
    }
  ];

  const premiumAddOns = [
    {
      icon: Sun,
      name: 'Solar Panel Cleaning',
      description: 'Maximize energy efficiency with meticulous cleaning that preserves your sustainable investment.',
      benefit: 'Enhanced energy output and extended panel lifespan'
    },
    {
      icon: Star,
      name: 'Chandelier & High-Reach Fixture Cleaning',
      description: 'Specialized care for your luxury lighting investments using professional-grade equipment.',
      benefit: 'Restored brilliance and preserved elegance'
    },
    {
      icon: Building2,
      name: 'Post-Construction Cleaning',
      description: 'Careful removal of paint, stucco, and construction debris from architectural glass.',
      benefit: 'Pristine windows that showcase your new luxury build'
    }
  ];

  const technologyBenefits = [
    {
      title: 'Hydrophobic Glass Protection Technology',
      description: 'Advanced coating creates an invisible barrier that repels water, dirt, and mineral deposits.',
      benefits: ['Reduced cleaning frequency', 'Enhanced clarity retention', 'Long-term cost savings', 'UV protection']
    },
    {
      title: 'Hard Water Stain Removal Expertise',
      description: 'Specialized techniques and solutions that restore glass to its original pristine condition.',
      benefits: ['Complete mineral deposit removal', 'No glass damage or etching', 'Professional-grade results', 'Preventive recommendations']
    },
    {
      title: 'Purified Water Systems',
      description: 'Zero-residue cleaning that ensures streak-free, crystal-clear results every time.',
      benefits: ['Spot-free finish', 'Extended cleanliness', 'No chemical residue', 'Environmental safety']
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-champagne-gold hover:text-champagne-gold/80 transition-colors duration-200 mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-inter font-medium">Back to Home</span>
        </button>
      </div>

      {/* Hero Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-champagne-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Eye className="w-8 h-8 text-champagne-gold" />
            </div>
            <h1 className="font-lora font-semibold text-3xl md:text-4xl lg:text-5xl text-champagne-gold mb-6">
              Luxury Window Care Services
            </h1>
            <p className="font-inter text-lg md:text-xl text-white/90 max-w-4xl mx-auto mb-8">
              Experience uncompromising quality through our meticulously crafted service tiers. 
              Each offering delivers professional excellence, preserving the clarity and beauty of your luxury investment.
            </p>
            <div className="flex items-center justify-center space-x-8 text-center">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-emerald-green" />
                <span className="font-inter text-sm text-white/90">Trusted Excellence</span>
              </div>
              <div className="flex items-center space-x-2">
                <Gem className="w-5 h-5 text-emerald-green" />
                <span className="font-inter text-sm text-white/90">Luxury Focus</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-emerald-green" />
                <span className="font-inter text-sm text-white/90">Guaranteed Results</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Tiers */}
      <section className="py-12 md:py-16 bg-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-lora font-semibold text-2xl md:text-3xl text-champagne-gold text-center mb-12">
            Our Service Tiers
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {serviceTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={isMobile ? { opacity: 1 } : { opacity: 0, y: 30 }}
                whileInView={isMobile ? { opacity: 1 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`card-glass rounded-lg p-8 relative overflow-hidden ${
                  index === 1 ? 'lg:scale-105 lg:shadow-elegant' : ''
                }`}
              >
                {/* Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-${tier.color}/20 text-${tier.color}`}>
                  {tier.badge}
                </div>

                <tier.icon className={`w-12 h-12 text-${tier.color} mb-6`} />
                <h3 className={`font-lora font-semibold text-2xl text-${tier.color} mb-4`}>{tier.name}</h3>
                <p className="font-inter text-white/90 mb-6">{tier.description}</p>

                {/* Ideal Client */}
                <div className="mb-6">
                  <h4 className="font-inter font-semibold text-sm text-champagne-gold mb-2">Ideal For:</h4>
                  <p className="font-inter text-sm text-white/80 italic">{tier.idealClient}</p>
                </div>

                {/* Core Inclusions */}
                <div className="mb-6">
                  <h4 className="font-inter font-semibold text-sm text-champagne-gold mb-3">Service Inclusions:</h4>
                  <ul className="space-y-2">
                    {tier.coreInclusions.map((inclusion, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-emerald-green flex-shrink-0 mt-0.5" />
                        <span className="font-inter text-sm text-white/90">{inclusion}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing Framework */}
                <div className="border-t border-white/20 pt-4 mb-6">
                  <h4 className="font-inter font-semibold text-sm text-champagne-gold mb-2">Investment:</h4>
                  <p className="font-inter text-sm text-white/80">{tier.pricingFramework}</p>
                </div>

                <button
                  onClick={onBookingClick}
                  className={`btn-primary font-inter font-medium text-sm w-full bg-${tier.color} hover:bg-${tier.color}/90`}
                >
                  Request Consultation
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Add-On Services */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-lora font-semibold text-2xl md:text-3xl text-champagne-gold mb-4">
              Premium Add-On Services
            </h2>
            <p className="font-inter text-lg text-white/90 max-w-3xl mx-auto">
              Enhance your service experience with specialized offerings that complement your window care investment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {premiumAddOns.map((addon, index) => (
              <div key={index} className="card-glass rounded-lg p-6 text-center">
                <addon.icon className="w-10 h-10 text-champagne-gold mx-auto mb-4" />
                <h3 className="font-lora font-semibold text-lg text-champagne-gold mb-3">{addon.name}</h3>
                <p className="font-inter text-white/90 mb-4">{addon.description}</p>
                <div className="bg-emerald-green/10 rounded-lg p-3">
                  <p className="font-inter text-sm text-emerald-green font-medium">{addon.benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Expertise Section */}
      <section className="py-12 md:py-16 bg-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <Zap className="w-12 h-12 text-champagne-gold mx-auto mb-4" />
            <h2 className="font-lora font-semibold text-2xl md:text-3xl text-champagne-gold mb-4">
              Advanced Technology & Expertise
            </h2>
            <p className="font-inter text-lg text-white/90 max-w-3xl mx-auto">
              Our commitment to uncompromising quality is supported by cutting-edge technology and specialized expertise.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {technologyBenefits.map((tech, index) => (
              <div key={index} className="card-glass rounded-lg p-6">
                <h3 className="font-lora font-semibold text-lg text-champagne-gold mb-4">{tech.title}</h3>
                <p className="font-inter text-white/90 mb-4">{tech.description}</p>
                <ul className="space-y-2">
                  {tech.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-emerald-green rounded-full flex-shrink-0" />
                      <span className="font-inter text-sm text-white/90">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hard Water & Glass Protection Deep Dive */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="card-glass rounded-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <Droplets className="w-16 h-16 text-champagne-gold mx-auto mb-6" />
              <h2 className="font-lora font-semibold text-2xl md:text-3xl text-champagne-gold mb-4">
                Hard Water Stain Removal & Advanced Glass Protection
              </h2>
              <p className="font-inter text-lg text-white/90">
                Specialized expertise in mineral deposit removal and long-term glass preservation technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-lora font-semibold text-lg text-champagne-gold mb-4">The Challenge</h3>
                <p className="font-inter text-white/90 mb-4">
                  Desert environments and hard water create persistent mineral deposits that compromise glass clarity 
                  and can permanently etch surfaces if not professionally addressed.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-emerald-green flex-shrink-0 mt-0.5" />
                    <span className="font-inter text-sm text-white/90">Calcium and magnesium buildup</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-emerald-green flex-shrink-0 mt-0.5" />
                    <span className="font-inter text-sm text-white/90">UV damage acceleration</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-emerald-green flex-shrink-0 mt-0.5" />
                    <span className="font-inter text-sm text-white/90">Permanent etching risk</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-lora font-semibold text-lg text-champagne-gold mb-4">Our Solution</h3>
                <p className="font-inter text-white/90 mb-4">
                  Professional-grade restoration techniques combined with preventive protection technology 
                  ensure your glass investment maintains its pristine clarity.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-emerald-green flex-shrink-0 mt-0.5" />
                    <span className="font-inter text-sm text-white/90">Safe mineral deposit removal</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-emerald-green flex-shrink-0 mt-0.5" />
                    <span className="font-inter text-sm text-white/90">Hydrophobic coating application</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-emerald-green flex-shrink-0 mt-0.5" />
                    <span className="font-inter text-sm text-white/90">Long-term maintenance reduction</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-champagne-gold/10 rounded-lg p-6 text-center">
              <h4 className="font-lora font-semibold text-lg text-champagne-gold mb-3">
                Technology Investment Benefits
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <div className="text-2xl font-bold text-emerald-green mb-1">90%</div>
                  <div className="font-inter text-sm text-white/80">Reduced cleaning frequency</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald-green mb-1">5-10</div>
                  <div className="font-inter text-sm text-white/80">Years protection lifespan</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald-green mb-1">100%</div>
                  <div className="font-inter text-sm text-white/80">Clarity preservation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Difference Section */}
      <section className="py-12 md:py-16 bg-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <Home className="w-12 h-12 text-champagne-gold mx-auto mb-4" />
              <h3 className="font-lora font-medium text-lg text-champagne-gold mb-3">Residential Excellence</h3>
              <p className="font-inter text-sm text-white/90">
                Meticulous care for luxury homes, preserving your investment with uncompromising attention to detail.
              </p>
            </div>
            <div className="text-center">
              <Building2 className="w-12 h-12 text-champagne-gold mx-auto mb-4" />
              <h3 className="font-lora font-medium text-lg text-champagne-gold mb-3">Commercial Distinction</h3>
              <p className="font-inter text-sm text-white/90">
                Professional services that enhance your business image through crystal-clear windows and impeccable presentation.
              </p>
            </div>
            <div className="text-center">
              <Wrench className="w-12 h-12 text-champagne-gold mx-auto mb-4" />
              <h3 className="font-lora font-medium text-lg text-champagne-gold mb-3">Specialized Solutions</h3>
              <p className="font-inter text-sm text-white/90">
                Custom approaches for unique challenges, from historic properties to cutting-edge architectural glass.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-lora font-semibold text-2xl md:text-3xl text-champagne-gold mb-6">
            Experience the Difference of True Professional Window Care
          </h2>
          <p className="font-inter text-lg text-white/90 mb-8">
            Discover how our meticulous approach and uncompromising quality standards can preserve 
            and enhance your luxury investment.
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <button
              onClick={onBookingClick}
              className="btn-primary font-inter font-medium text-lg w-full md:w-auto"
            >
              Schedule Consultation
            </button>
            <button className="btn-secondary font-inter font-medium text-lg w-full md:w-auto">
              Call: (760) 555-0123
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
