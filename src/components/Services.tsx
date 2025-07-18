import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, Building2, Sparkles, Shield, Star } from 'lucide-react';

interface ServicesProps {
  onServiceClick?: (serviceName: string) => void;
  onServicePageClick?: (servicePage: 'residential-windows' | 'commercial-windows' | 'solar-panel-cleaning' | 'pressure-washing' | 'screen-repair' | 'high-rise-windows' | 'emergency-service') => void;
}

const Services: React.FC<ServicesProps> = ({ onServiceClick, onServicePageClick }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const services = [
    {
      icon: Home,
      title: 'Residential Windows',
      description: 'Professional window cleaning for homes of all sizes, including tracks, frames, and screens.',
      features: ['Interior & exterior windows', 'Screen cleaning', 'Track cleaning', 'Frame detailing'],
      price: 'From $125',
      image: 'https://khwmoizeigmddolwtrtl.supabase.co/storage/v1/object/public/eliteluxx-window-cleaning/images/website/window-cleaning-service-coachella-valley.jpg',
    },
    {
      icon: Building2,
      title: 'Commercial Windows',
      description: 'Comprehensive window cleaning solutions for offices, storefronts, and commercial buildings.',
      features: ['Storefront windows', 'Multi-story buildings', 'Safety compliance', 'Regular maintenance plans'],
      price: 'Custom pricing',
      image: 'https://khwmoizeigmddolwtrtl.supabase.co/storage/v1/object/public/eliteluxx-window-cleaning/images/website/window-cleaning-service-coachella-valley.jpg',
    },
    {
      icon: Sparkles,
      title: 'Solar Panel Cleaning',
      description: 'Specialized cleaning to maintain the efficiency of your solar panels.',
      features: ['Performance optimization', 'Gentle cleaning methods', 'Regular maintenance', 'Efficiency reports'],
      price: 'From $150',
      image: 'https://khwmoizeigmddolwtrtl.supabase.co/storage/v1/object/public/eliteluxx-window-cleaning/images/website/window-cleaning-service-coachella-valley.jpg',
    },
    {
      icon: Shield,
      title: 'Pressure Washing',
      description: 'High-pressure cleaning for driveways, patios, and exterior surfaces.',
      features: ['Driveway cleaning', 'Patio restoration', 'Siding cleaning', 'Roof cleaning'],
      price: 'From $200',
      image: 'https://khwmoizeigmddolwtrtl.supabase.co/storage/v1/object/public/eliteluxx-window-cleaning/images/website/window-cleaning-service-coachella-valley.jpg',
    },
    {
      icon: Star,
      title: 'Screen Repair',
      description: 'Professional window screen repair and replacement services.',
      features: ['Screen replacement', 'Frame repair', 'Custom sizing', 'Pet-resistant options'],
      price: 'From $45',
      image: 'https://khwmoizeigmddolwtrtl.supabase.co/storage/v1/object/public/eliteluxx-window-cleaning/images/website/window-cleaning-service-coachella-valley.jpg',
    },
    {
      icon: Building2,
      title: 'High-Rise Windows',
      description: 'Specialized cleaning for high-rise buildings and hard-to-reach windows.',
      features: ['Rope access', 'Safety certified', 'Insurance coverage', 'Emergency services'],
      price: 'Custom pricing',
      image: 'https://khwmoizeigmddolwtrtl.supabase.co/storage/v1/object/public/eliteluxx-window-cleaning/images/website/window-cleaning-service-coachella-valley.jpg',
    }
  ];

  const handleServiceClick = (serviceName: string) => {
    // Route to dedicated service pages for main services
    if (onServicePageClick) {
      switch (serviceName) {
        case 'Residential Windows':
          onServicePageClick('residential-windows');
          return;
        case 'Commercial Windows':
          onServicePageClick('commercial-windows');
          return;
        case 'Solar Panel Cleaning':
          onServicePageClick('solar-panel-cleaning');
          return;
        case 'Pressure Washing':
          onServicePageClick('pressure-washing');
          return;
        case 'Screen Repair':
          onServicePageClick('screen-repair');
          return;
        case 'High-Rise Windows':
          onServicePageClick('high-rise-windows');
          return;
        case 'Emergency Service':
          onServicePageClick('emergency-service');
          return;
      }
    }
    
    // For other services, use the original booking flow
    if (onServiceClick) {
      onServiceClick(serviceName);
    }
  };
                                    /*Services Background*/
  return (
    <section className="py-16 md:py-20 bg-black/20 " id="services">
      <div className="max-w-site mx-auto px-4 sm:px-6">
        <motion.div
          initial={isMobile ? { opacity: 1 } : { opacity: 0, y: 30 }}
          whileInView={isMobile ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-lora font-semibold text-3xl md:text-4xl lg:text-5xl text-champagne-gold mb-4 md:mb-6">
            Our Premium Services
          </h2>
          <p className="font-inter text-base md:text-lg text-white/80 max-w-3xl mx-auto px-4">
            Discover our comprehensive range of luxury window cleaning services, each designed to exceed expectations 
            and deliver crystal-clear results for your home or business.
          </p>
        </motion.div>
        {/*Service Grid*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              onClick={() => handleServiceClick(service.title)}
              className="card-glass rounded-lg overflow-hidden shadow-3d hover:shadow-3d-hover transition-all duration-300 group cursor-pointer"
            >
              {/* Image Section */}
              <div className="relative h-40 md:h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>

              <div className="p-6 md:p-8">
                <div className="mb-6">
                  <service.icon className="w-10 h-10 md:w-12 md:h-12 text-champagne-gold mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-lora font-medium text-xl md:text-2xl text-champagne-gold mb-3">
                    {/* Service Title */}
                    {service.title}
                  </h3>
                  <p className="font-inter text-sm md:text-base text-white/90 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      {/*bullet point icons*/}
                      <div className="w-1.5 h-1.5 bg-champagne-gold rounded-full flex-shrink-0" />
                      {/*bullet point text*/}
                      <span className="font-inter text-xs md:text-sm text-white/90">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/90">
                  <span className="font-lora font-semibold text-base md:text-lg text-emerald-green">
                    {service.price}
                  </span>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleServiceClick(service.title);
                    }}
                    className="font-inter font-medium text-sm md:text-base text-champagne-gold hover:text-champagne-gold/80 transition-colors duration-200"
                  >
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <motion.div
          initial={isMobile ? { opacity: 1 } : { opacity: 0, y: 30 }}
          whileInView={isMobile ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-8 md:mt-12"
        >
          <button 
            onClick={() => handleServiceClick('Custom Service')}
            className="btn-primary font-inter font-medium text-base md:text-lg"
          >
            Get Custom Quote
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;