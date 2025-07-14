import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Pause, Play, ArrowLeft } from 'lucide-react';

interface PortfolioPageProps {
  onBack: () => void;
}

const PortfolioPage: React.FC<PortfolioPageProps> = ({ onBack }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const portfolioItems = [
    {
      title: 'Executive Suite',
      category: 'Commercial',
      image: 'https://khwmoizeigmddolwtrtl.supabase.co/storage/v1/object/public/eliteluxx-cleaning/images/website/executive-suite-office-cleaning.jpg',
      description: 'High-end executive office with panoramic views and premium furnishings'
    },
    {
      title: 'New Construction',
      category: 'Post-Construction',
      image: 'https://khwmoizeigmddolwtrtl.supabase.co/storage/v1/object/public/eliteluxx-cleaning/images/website/new-construction-home-cleaning-coachella-valley.jpg',
      description: 'Modern luxury home exterior with pristine landscaping and architectural details'
    },
    {
      title: 'Modern Penthouse',
      category: 'Residential',
      image: 'https://khwmoizeigmddolwtrtl.supabase.co/storage/v1/object/public/eliteluxx-cleaning/images/website/open-floor-plan-condo-home-cleaning-palm-springs.jpg',
      description: 'Luxury penthouse deep cleaning with attention to high-end finishes and premium materials'
    },
    {
      title: 'Corporate Office',
      category: 'Commercial',
      image: 'https://khwmoizeigmddolwtrtl.supabase.co/storage/v1/object/public/eliteluxx-cleaning/images/website/new-construction-home-cleaning-coachella-valley.jpg',
      description: 'Professional office space maintaining pristine work environment for maximum productivity'
    },
    {
      title: 'Elegant Kitchen',
      category: 'Residential',
      image: 'https://khwmoizeigmddolwtrtl.supabase.co/storage/v1/object/public/eliteluxx-cleaning/images/website/la-quinta-home-cleaning-beautiful-open-floor-plan-kitchen.jpg',
      description: 'Luxury kitchen with premium appliances and elegant finishes requiring specialized care'
    },
    {
      title: 'Spa Bathroom',
      category: 'Residential',
      image: 'https://khwmoizeigmddolwtrtl.supabase.co/storage/v1/object/public/eliteluxx-cleaning/images/website/modern-luxury-bathroom-cleaned.jpg',
      description: 'Luxury spa bathroom with premium marble finishes and elegant fixtures'
    },
  ];

  // Preload only current and next images for better performance
  useEffect(() => {
    const preloadImages = () => {
      const imagesToLoad = [currentIndex, (currentIndex + 1) % portfolioItems.length];
      
      imagesToLoad.forEach(index => {
        const img = new Image();
        img.src = portfolioItems[index].image;
      });
    };

    preloadImages();
  }, [currentIndex, portfolioItems]);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, portfolioItems.length]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
  }, [portfolioItems.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
  }, [portfolioItems.length]);

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === ' ') {
        e.preventDefault();
        toggleAutoPlay();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [nextSlide, prevSlide]);

  // Simulate loading time
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-champagne-gold mx-auto mb-4"></div>
          <p className="text-white/80 font-inter">Loading Portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Back Button */}
      <div className="pt-8 pb-4 px-4 sm:px-6">
        <div className="max-w-site mx-auto">
          <button
            onClick={onBack}
            className="inline-flex items-center space-x-2 text-white/80 hover:text-champagne-gold transition-colors duration-300 font-inter font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </button>
        </div>
      </div>

      <div className="py-16 md:py-20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-site mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h1 className="font-lora font-semibold text-4xl md:text-5xl lg:text-6xl text-white mb-4 md:mb-6">
              Our Work Portfolio
            </h1>
            <p className="font-inter text-base md:text-lg text-white/80 max-w-2xl mx-auto px-4">
              Discover the transformative power of our luxury cleaning services through our curated portfolio of completed projects.
            </p>
          </motion.div>

          {/* Portfolio Slider */}
          <div className="relative max-w-5xl mx-auto">
            <div className="relative aspect-[16/10] md:aspect-[16/9] rounded-xl overflow-hidden shadow-elegant">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <img
                    src={portfolioItems[currentIndex].image}
                    alt={portfolioItems[currentIndex].title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <span className="inline-block px-3 py-1 bg-champagne-gold/20 backdrop-blur-sm rounded-full text-champagne-gold text-sm font-inter font-medium mb-3">
                        {portfolioItems[currentIndex].category}
                      </span>
                      <h3 className="font-lora font-semibold text-2xl md:text-3xl text-white mb-2">
                        {portfolioItems[currentIndex].title}
                      </h3>
                      <p className="font-inter text-white/80 text-sm md:text-base max-w-lg">
                        {portfolioItems[currentIndex].description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Controls */}
              <div className="absolute top-1/2 left-4 md:left-6 transform -translate-y-1/2">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 md:w-12 md:h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-champagne-gold/20 hover:text-champagne-gold transition-all duration-300"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                </button>
              </div>

              <div className="absolute top-1/2 right-4 md:right-6 transform -translate-y-1/2">
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 md:w-12 md:h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-champagne-gold/20 hover:text-champagne-gold transition-all duration-300"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                </button>
              </div>

              {/* Auto-play control */}
              <div className="absolute top-4 md:top-6 right-4 md:right-6">
                <button
                  onClick={toggleAutoPlay}
                  className="w-10 h-10 md:w-12 md:h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-champagne-gold/20 hover:text-champagne-gold transition-all duration-300"
                  aria-label={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
                >
                  {isAutoPlaying ? (
                    <Pause className="w-4 h-4 md:w-5 md:h-5" />
                  ) : (
                    <Play className="w-4 h-4 md:w-5 md:h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 md:mt-8 space-x-2">
              {portfolioItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-champagne-gold scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Portfolio Counter */}
            <div className="text-center mt-4">
              <span className="font-inter text-white/60 text-sm">
                {currentIndex + 1} of {portfolioItems.length}
              </span>
            </div>
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 md:mt-20 card-glass rounded-lg p-6 md:p-8 text-center shadow-3d"
          >
            <h3 className="font-lora font-medium text-xl md:text-2xl text-white mb-4">
              Ready to Transform Your Space?
            </h3>
            <p className="font-inter text-white/80 mb-6 max-w-2xl mx-auto">
              Each project showcases our commitment to excellence and attention to detail. 
              Let us bring the same level of luxury and care to your space.
            </p>
            <button
              onClick={onBack}
              className="btn-primary font-inter font-medium"
            >
              Get Your Quote Today
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
