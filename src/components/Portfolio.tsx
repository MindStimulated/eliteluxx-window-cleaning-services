import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const portfolioItems = [
    {
      title: 'Executive Suite',
      category: 'Commercial',
      image: 'https://khwmoizeigmddolwtrtl.supabase.co/storage/v1/object/public/eliteluxx-cleaning/images/website/executive-suite-office-cleaning.jpg', // Executive suite office cleaning
      description: 'High-end executive office with panoramic views and premium furnishings'
    },
    {
      title: 'New Construction',
      category: 'Post-Construction',
      image: 'https://khwmoizeigmddolwtrtl.supabase.co/storage/v1/object/public/eliteluxx-cleaning/images/website/new-construction-home-cleaning-coachella-valley.jpg', // New construction cleaning
      description: 'Modern luxury home exterior with pristine landscaping and architectural details'
    },
    {
      title: 'Modern Penthouse',
      category: 'Residential',
      image: 'https://khwmoizeigmddolwtrtl.supabase.co/storage/v1/object/public/eliteluxx-cleaning/images/website/open-floor-plan-condo-home-cleaning-palm-springs.jpg', // Open floor plan condo cleaning
      description: 'Luxury penthouse deep cleaning with attention to high-end finishes and premium materials'
    },
    {
      title: 'Corporate Office',
      category: 'Commercial',
      image: 'https://khwmoizeigmddolwtrtl.supabase.co/storage/v1/object/public/eliteluxx-cleaning/images/website/new-construction-home-cleaning-coachella-valley.jpg', // Corporate office cleaning
      description: 'Professional office space maintaining pristine work environment for maximum productivity'
    },
    {
      title: 'Elegant Kitchen',
      category: 'Residential',
      image: 'https://khwmoizeigmddolwtrtl.supabase.co/storage/v1/object/public/eliteluxx-cleaning/images/website/la-quinta-home-cleaning-beautiful-open-floor-plan-kitchen.jpg', // Beautiful kitchen cleaning
      description: 'Luxury kitchen with premium appliances and elegant finishes requiring specialized care'
    },
    {
      title: 'Spa Bathroom',
      category: 'Residential',
      image: 'https://khwmoizeigmddolwtrtl.supabase.co/storage/v1/object/public/eliteluxx-cleaning/images/website/modern-luxury-bathroom-cleaned.jpg', // Modern luxury bathroom
      description: 'Luxury spa bathroom with premium marble finishes and elegant fixtures'
    },
  ];

  // Preload only current and next images for better performance
  useEffect(() => {
    const preloadImages = async () => {
      // Only preload current image and next two images
      const imagesToPreload = [
        portfolioItems[currentIndex],
        portfolioItems[(currentIndex + 1) % portfolioItems.length],
        portfolioItems[(currentIndex + 2) % portfolioItems.length]
      ];

      const imagePromises = imagesToPreload.map((item) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = item.image;
          // Add loading attribute for better performance
          img.loading = 'eager';
        });
      });

      try {
        await Promise.all(imagePromises);
        setIsLoading(false);
      } catch {
        console.warn('Some images failed to preload');
        setIsLoading(false);
      }
    };

    preloadImages();
  }, [currentIndex, portfolioItems]); // Re-run when currentIndex changes

  // Auto-play functionality with slower timing
  useEffect(() => {
    if (!isAutoPlaying || isLoading) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === portfolioItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, portfolioItems.length, isLoading]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? portfolioItems.length - 1 : prevIndex - 1
    );
  }, [portfolioItems.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === portfolioItems.length - 1 ? 0 : prevIndex + 1
    );
  }, [portfolioItems.length]);

  const toggleAutoPlay = useCallback(() => {
    setIsAutoPlaying(!isAutoPlaying);
  }, [isAutoPlaying]);

  // Get previous, current, and next items for the 3-card layout
  const getPreviousIndex = () => currentIndex === 0 ? portfolioItems.length - 1 : currentIndex - 1;
  const getNextIndex = () => currentIndex === portfolioItems.length - 1 ? 0 : currentIndex + 1;

  if (isLoading) {
    return (
      <section className="py-20 bg-black/20 backdrop-blur-sm" id="portfolio">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-black/20 backdrop-blur-sm overflow-hidden" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-lora font-semibold text-3xl md:text-4xl lg:text-5xl text-white mb-4 md:mb-6">
            Our Work Portfolio
          </h2>
          <p className="font-inter text-base md:text-lg text-white/80 max-w-3xl mx-auto px-4">
            Explore our showcase of meticulously cleaned spaces, each reflecting our commitment 
            to excellence and attention to detail.
          </p>
        </motion.div>

        {/* Full-Page Carousel Container */}
        <div className="relative">
          {/* Main Carousel - Responsive Height */}
          <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] min-h-[400px] md:min-h-[500px] lg:min-h-[600px] mb-8 md:mb-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                {/* Three Card Layout - Center Focus with Blurred Sides */}
                <div className="relative h-full flex items-center justify-center">
                  {/* Previous Card - Left Side (Blurred) - Hidden on mobile */}
                  <motion.div
                    initial={{ opacity: 0, x: -100, scale: 0.7 }}
                    animate={{ opacity: 0.4, x: 0, scale: 0.8 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="absolute left-2 lg:left-4 top-1/2 transform -translate-y-1/2 w-48 md:w-64 lg:w-80 h-64 md:h-80 lg:h-96 z-10 hidden md:block"
                  >
                    <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg filter blur-sm hover:blur-none transition-all duration-300 cursor-pointer header-glass"
                         onClick={goToPrevious}>
                      <img
                        src={portfolioItems[getPreviousIndex()].image}
                        alt={portfolioItems[getPreviousIndex()].title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/30" />
                      <div className="absolute bottom-4 left-4 text-white/90">
                        <h4 className="font-lora font-medium text-sm lg:text-lg">
                          {portfolioItems[getPreviousIndex()].title}
                        </h4>
                        <span className="text-xs lg:text-sm opacity-80">
                          {portfolioItems[getPreviousIndex()].category}
                        </span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Center Card - Main Focus */}
                  <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl h-full mx-auto z-20 px-2 md:px-0"
                  >
                    <div className="relative w-full h-full rounded-xl md:rounded-2xl overflow-hidden shadow-2xl ">
                      {/* Main Image */}
                      <div className="relative h-3/4 overflow-hidden">
                        <motion.img
                          src={portfolioItems[currentIndex].image}
                          alt={portfolioItems[currentIndex].title}
                          className="w-full h-full object-cover"
                          initial={{ scale: 1.05 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 1.2, ease: "easeOut" }}
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        
                        {/* Navigation Arrows - Inside Image */}
                        <div className="absolute inset-0 flex items-center justify-between px-4 md:px-6">
                          {/* Left Arrow */}
                          <motion.button
                            onClick={goToPrevious}
                            className="p-2 md:p-3 bg-white/20 backdrop-blur-sm rounded-full shadow-lg hover:bg-white/30 transition-all duration-300 text-white hover:scale-110 group"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
                          </motion.button>

                          {/* Right Arrow */}
                          <motion.button
                            onClick={goToNext}
                            className="p-2 md:p-3 bg-white/20 backdrop-blur-sm rounded-full shadow-lg hover:bg-white/30 transition-all duration-300 text-white hover:scale-110 group"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
                          </motion.button>
                        </div>
                        
                        {/* Category Badge */}
                        <motion.div
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3, duration: 0.6 }}
                          className="absolute top-4 md:top-6 right-4 md:right-6"
                        >
                          <span className="bg-champagne-gold text-white px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-inter font-medium shadow-lg">
                            {portfolioItems[currentIndex].category}
                          </span>
                        </motion.div>

                        {/* Auto-play Toggle - Top Left */}
                        <motion.button
                          onClick={toggleAutoPlay}
                          className="absolute top-4 md:top-6 left-4 md:left-6 p-2 md:p-3 bg-white/20 backdrop-blur-sm rounded-full shadow-lg hover:bg-white/30 transition-all duration-300 text-white"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          {isAutoPlaying ? <Pause className="w-3 h-3 md:w-4 md:h-4" /> : <Play className="w-3 h-3 md:w-4 md:h-4" />}
                        </motion.button>
                      </div>
                      
                      {/* Content Section */}
                      <motion.div 
                        className="absolute bottom-0 left-0 right-0 portfolio-text-glass p-4 md:p-6 lg:p-8"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                      >
                        <h3 className="font-lora font-semibold text-xl md:text-2xl lg:text-3xl text-white mb-2 md:mb-4">
                          {portfolioItems[currentIndex].title}
                        </h3>
                        <p className="font-inter text-white/80 text-sm md:text-base lg:text-lg leading-relaxed">
                          {portfolioItems[currentIndex].description}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Next Card - Right Side (Blurred) - Hidden on mobile */}
                  <motion.div
                    initial={{ opacity: 0, x: 100, scale: 0.7 }}
                    animate={{ opacity: 0.4, x: 0, scale: 0.8 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="absolute right-2 lg:right-4 top-1/2 transform -translate-y-1/2 w-48 md:w-64 lg:w-80 h-64 md:h-80 lg:h-96 z-10 hidden md:block"
                  >
                    <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg filter blur-sm hover:blur-none transition-all duration-300 cursor-pointer header-glass"
                         onClick={goToNext}>
                      <img
                        src={portfolioItems[getNextIndex()].image}
                        alt={portfolioItems[getNextIndex()].title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/30" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <h4 className="font-lora font-medium text-sm lg:text-lg">
                          {portfolioItems[getNextIndex()].title}
                        </h4>
                        <span className="text-xs lg:text-sm opacity-80">
                          {portfolioItems[getNextIndex()].category}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator - Centered */}
          <motion.div 
            className="flex items-center justify-center space-x-2 md:space-x-3 mb-6 md:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {portfolioItems.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-8 md:w-12 h-2 md:h-3 bg-champagne-gold rounded-full' 
                    : 'w-2 md:w-3 h-2 md:h-3 bg-champagne-gold/30 rounded-full hover:bg-champagne-gold/60'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </motion.div>
        </div>

        {/* View Full Portfolio Button - Gold Only */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button 
            className="btn-primary font-inter font-semibold text-base md:text-lg px-6 md:px-10 py-3 md:py-4"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View Full Portfolio
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;