import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, Building2, Sparkles, Shield, Clock, Star } from 'lucide-react';

interface ServicesProps {
  onServiceClick?: (serviceName: string) => void;
  onServicePageClick?: (servicePage: 'residential-cleaning' | 'commercial-cleaning' | 'move-in-out-cleaning' | 'emergency-cleaning' | 'post-construction-cleaning' | 'luxury-maintenance' | 'short-term-rental-cleaning') => void;
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
      title: 'Residential Cleaning',
      description: 'Comprehensive deep cleaning for homes of all sizes, tailored to your lifestyle and preferences.',
      features: ['Deep kitchen cleaning', 'Bathroom sanitization', 'Dusting & vacuuming', 'Window cleaning'],
      price: 'From $135',
      image: 'https://khwmoizeigmddolwtrtl.supabase.co/storage/v1/object/public/eliteluxx-cleaning/images/website/residential-home-cleaning.jpg', // Residential home cleaning
    },
    {
      icon: Building2,
      title: 'Commercial Cleaning',
      description: 'Professional office and commercial space cleaning to maintain a pristine work environment.',
      features: ['Office sanitization', 'Restroom maintenance', 'Common area cleaning', 'Floor care'],
      price: 'Custom pricing',
      image: 'https://khwmoizeigmddolwtrtl.supabase.co/storage/v1/object/public/eliteluxx-cleaning/images/website/corporate-office-cleaning.jpg', // Corporate office cleaning
    },
    {
      icon: Sparkles,
      title: 'Move-In/Move-Out',
      description: 'Thorough cleaning for property transitions, ensuring spaces are pristine for new occupants.',
      features: ['Full property deep clean', 'Appliance cleaning', 'Cabinet interior cleaning', 'Fixture polishing'],
      price: 'From $250',
      image: 'https://khwmoizeigmddolwtrtl.supabase.co/storage/v1/object/public/eliteluxx-cleaning/images/website/modern-palm-springs-home-cleaning.jpg', // Modern home cleaning
    },
    {
      icon: Shield,
      title: 'Post-Construction',
      description: 'Specialized cleaning to remove construction dust and debris, revealing your new space.',
      features: ['Debris removal', 'Surface restoration', 'Air purification', 'Safety inspection'],
      price: 'From $300',
      image: 'https://khwmoizeigmddolwtrtl.supabase.co/storage/v1/object/public/eliteluxx-cleaning/images/website/new-construction-home-cleaning-coachella-valley.jpg', // New construction cleaning
    },
    {
      icon: Clock,
      title: 'Emergency Cleaning',
      description: '24/7 urgent cleaning services for unexpected situations and time-sensitive needs.',
      features: ['Same-day service', '24/7 availability', 'Rapid response team', 'Premium equipment'],
      price: 'From $200',
      image: 'https://khwmoizeigmddolwtrtl.supabase.co/storage/v1/object/public/eliteluxx-cleaning/images/website/emergency-home-cleaning-wine-carpet.jpg', // Emergency cleaning
    },
    {
      icon: Star,
      title: 'Luxury Maintenance',
      description: 'Ongoing premium maintenance services for high-end properties and discerning clients.',
      features: ['Weekly service', 'Premium products', 'Dedicated team', 'Concierge support'],
      price: 'From $400/month',
      image: 'https://khwmoizeigmddolwtrtl.supabase.co/storage/v1/object/public/eliteluxx-cleaning/images/website/home-cleaning-fine-artwork.jpg', // Fine artwork/luxury cleaning
    },
    {
      icon: Home,
      title: 'Short Term Rental',
      description: 'Professional turnover cleaning for Airbnb, VRBO, and vacation rental properties.',
      features: ['Guest turnover cleaning', 'Amenity restocking', 'Property inspection', '5-star standards'],
      price: 'From $120',
      image: 'https://khwmoizeigmddolwtrtl.supabase.co/storage/v1/object/public/eliteluxx-cleaning/images/website/modern-palm-springs-home-cleaning.jpg', // Modern home cleaning for rental
    },
  ];

  const handleServiceClick = (serviceName: string) => {
    // Route to dedicated service pages for main services
    if (onServicePageClick) {
      switch (serviceName) {
        case 'Residential Cleaning':
          onServicePageClick('residential-cleaning');
          return;
        case 'Commercial Cleaning':
          onServicePageClick('commercial-cleaning');
          return;
        case 'Move-In/Move-Out':
          onServicePageClick('move-in-out-cleaning');
          return;
        case 'Emergency Cleaning':
          onServicePageClick('emergency-cleaning');
          return;
        case 'Post-Construction':
          onServicePageClick('post-construction-cleaning');
          return;
        case 'Luxury Maintenance':
          onServicePageClick('luxury-maintenance');
          return;
        case 'Short Term Rental':
          onServicePageClick('short-term-rental-cleaning');
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
          initial={isMobile ? {} : { opacity: 0, y: 30 }}
          whileInView={isMobile ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-lora font-semibold text-3xl md:text-4xl lg:text-5xl text-champagne-gold mb-4 md:mb-6">
            Our Premium Services
          </h2>
          <p className="font-inter text-base md:text-lg text-white/80 max-w-3xl mx-auto px-4">
            Discover our comprehensive range of luxury cleaning services, each designed to exceed expectations 
            and deliver immaculate results for every space.
          </p>
        </motion.div>
        {/*Service Grid*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={isMobile ? {} : { opacity: 0, y: 30 }}
              whileInView={isMobile ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
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
                    className="font-inter font-medium text-sm md:text-base text-champagne-gold hover:text-champagne-gold transition-colors duration-200"
                  >
                    Learn More →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={isMobile ? {} : { opacity: 0, y: 30 }}
          whileInView={isMobile ? {} : { opacity: 1, y: 0 }}
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