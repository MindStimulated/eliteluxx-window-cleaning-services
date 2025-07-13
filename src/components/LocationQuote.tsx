import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Home, Bath, Square, Calendar, Sparkles, Move, ChefHat, Utensils, Heart, Leaf, Archive, Refrigerator, Shirt, Eye, Paintbrush, Shield, ChevronDown, ArrowRight, Plus, Minus, MapPin, Check } from 'lucide-react';

interface BookingData {
  bedrooms: number;
  bathrooms: number;
  halfBaths: number;
  sqFt: number;
  frequency: 'one-time' | 'weekly' | 'bi-weekly' | 'monthly';
  addOns: string[];
  serviceType: string;
  totalPrice: number;
}

interface LocationQuoteProps {
  location: string;
  onBack?: () => void;
  onBookingComplete?: (data: BookingData) => void;
}

const LocationQuote: React.FC<LocationQuoteProps> = ({ location, onBack, onBookingComplete }) => {
  const [bookingData, setBookingData] = useState<BookingData>({
    bedrooms: 1,
    bathrooms: 1,
    halfBaths: 0,
    sqFt: 1000,
    frequency: 'one-time',
    addOns: [],
    serviceType: 'Residential Cleaning',
    totalPrice: 0
  });

  const [isExpanded, setIsExpanded] = useState(false);

  // Auto-scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const basePrice = 135;
  const frequencyDiscounts = {
    'one-time': 0,
    'weekly': 0.30,
    'bi-weekly': 0.20,
    'monthly': 0.05,
  };

  const frequencyLabels = {
    'one-time': 'One-time',
    'weekly': 'Weekly',
    'bi-weekly': 'Bi-weekly',
    'monthly': 'Monthly',
  };

  const addOnServices = [
    { id: 'deep-cleaning', name: 'Deep Cleaning', price: 95, icon: Sparkles },
    { id: 'move-in-out', name: 'Move In/Out (Vacant)', price: 125, icon: Move },
    { id: 'inside-oven', name: 'Inside Oven', price: 35, icon: ChefHat },
    { id: 'hand-wash-dishes', name: 'Hand Wash Dishes', price: 45, icon: Utensils },
    { id: 'shedding-pets', name: 'Shedding Pets', price: 42, icon: Heart },
    { id: 'green-cleaning', name: 'Green Cleaning', price: 0, icon: Leaf },
    { id: 'inside-cabinets-full', name: 'Inside Cabinets (Full)', price: 95, icon: Archive },
    { id: 'inside-cabinets-empty', name: 'Inside Cabinets (Empty)', price: 52, icon: Archive },
    { id: 'inside-fridge-full', name: 'Inside Refrigerator (Full)', price: 55, icon: Refrigerator },
    { id: 'inside-fridge-empty', name: 'Inside Refrigerator (Empty)', price: 35, icon: Refrigerator },
    { id: 'load-laundry', name: 'Load of Laundry', price: 15, icon: Shirt },
    { id: 'inside-windows', name: 'Inside Windows', price: 125, icon: Eye },
    { id: 'walls', name: 'Walls', price: 25, icon: Paintbrush },
    { id: 'disinfectant', name: 'Disinfectant', price: 35, icon: Shield },
  ];

  // Pure function for calculating price
  const calculatePrice = (
    currentBookingData: BookingData,
    currentBasePrice: number,
    currentFrequencyDiscounts: typeof frequencyDiscounts,
    currentAddOnServices: typeof addOnServices
  ) => {
    const sizeMultiplier = Math.max(1, currentBookingData.sqFt / 500);
    const roomMultiplier = 1 + (currentBookingData.bedrooms - 1) * 0.3 + currentBookingData.bathrooms * 0.2 + currentBookingData.halfBaths * 0.1;
    const subtotal = currentBasePrice * sizeMultiplier * roomMultiplier;
    const discount = currentFrequencyDiscounts[currentBookingData.frequency];
    const baseTotal = subtotal * (1 - discount);
    
    const addOnTotal = currentBookingData.addOns.reduce((total, addOnId) => {
      const addOn = currentAddOnServices.find(service => service.id === addOnId);
      return total + (addOn ? addOn.price : 0);
    }, 0);

    return baseTotal + addOnTotal;
  };

  // Update total price when booking data changes
  useEffect(() => {
    const newTotalPrice = calculatePrice(bookingData, basePrice, frequencyDiscounts, addOnServices);
    
    // Only update if the price has actually changed to prevent infinite loops
    if (newTotalPrice !== bookingData.totalPrice) {
      setBookingData(prev => ({ ...prev, totalPrice: newTotalPrice }));
    }
  }, [
    bookingData.bedrooms,
    bookingData.bathrooms,
    bookingData.halfBaths,
    bookingData.sqFt,
    bookingData.frequency,
    bookingData.addOns,
    basePrice
  ]);

  const handleInputChange = (field: keyof BookingData, value: number) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  const handleFrequencyChange = (frequency: BookingData['frequency']) => {
    setBookingData(prev => ({ ...prev, frequency }));
  };

  const toggleAddOn = (addOnId: string) => {
    setBookingData(prev => ({
      ...prev,
      addOns: prev.addOns.includes(addOnId)
        ? prev.addOns.filter(id => id !== addOnId)
        : [...prev.addOns, addOnId]
    }));
  };

  const handleBookMyClean = () => {
    if (onBookingComplete) {
      onBookingComplete(bookingData);
    }
  };

  const NumberInput = ({ 
    label, 
    value, 
    field,
    icon: Icon,
    min = 0,
    max = 10
  }: { 
    label: string; 
    value: number; 
    field: keyof BookingData;
    icon: React.ElementType;
    min?: number;
    max?: number;
  }) => {
    
    const handleDecrement = () => {
      if (value > min) {
        handleInputChange(field, value - 1);
      }
    };

    const handleIncrement = () => {
      if (value < max) {
        handleInputChange(field, value + 1);
      }
    };

    const handleDirectInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;
      if (inputValue === '') {
        handleInputChange(field, min);
        return;
      }
      
      const newValue = parseInt(inputValue, 10);
      if (!isNaN(newValue)) {
        const clampedValue = Math.max(min, Math.min(max, newValue));
        handleInputChange(field, clampedValue);
      }
    };

    const canDecrement = value > min;
    const canIncrement = value < max;

    return (
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border-2 border-sage-green/30 shadow-3d hover:shadow-3d-hover transition-all duration-200">
        <div className="flex items-center space-x-2 mb-3">
          <div className="w-8 h-8 bg-champagne-gold/10 rounded-lg flex items-center justify-center">
            <Icon className="w-4 h-4 text-champagne-gold" />
          </div>
          <label className="font-inter font-medium text-deep-charcoal text-sm">{label}</label>
        </div>
        <div className="flex items-center space-x-3">
          <button
            type="button"
            onClick={handleDecrement}
            disabled={!canDecrement}
            className={`w-10 h-10 rounded-lg border-2 bg-white flex items-center justify-center transition-all duration-200 shadow-sm ${
              canDecrement 
                ? 'border-sage-green/30 text-champagne-gold hover:bg-champagne-gold/5 hover:border-champagne-gold/50 cursor-pointer' 
                : 'border-gray-200 text-gray-300 cursor-not-allowed'
            }`}
          >
            <Minus className="w-4 h-4" />
          </button>
          <input
            type="number"
            value={value}
            onChange={handleDirectInput}
            min={min}
            max={max}
            className="flex-1 px-4 py-3 border-2 border-sage-green/20 rounded-lg text-center font-inter font-bold text-lg text-emerald-green bg-white focus:ring-0 focus:border-champagne-gold focus:shadow-field-focus transition-all duration-200"
          />
          <button
            type="button"
            onClick={handleIncrement}
            disabled={!canIncrement}
            className={`w-10 h-10 rounded-lg border-2 bg-white flex items-center justify-center transition-all duration-200 shadow-sm ${
              canIncrement 
                ? 'border-sage-green/30 text-champagne-gold hover:bg-champagne-gold/5 hover:border-champagne-gold/50 cursor-pointer' 
                : 'border-gray-200 text-gray-300 cursor-not-allowed'
            }`}
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  };

  const SquareFootageInput = () => (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 border-2 border-sage-green/30 shadow-3d hover:shadow-3d-hover transition-all duration-200">
      <div className="flex items-center space-x-2 mb-3">
        <div className="w-8 h-8 bg-champagne-gold/10 rounded-lg flex items-center justify-center">
          <Square className="w-4 h-4 text-champagne-gold" />
        </div>
        <label className="font-inter font-medium text-deep-charcoal text-sm">Square Footage</label>
      </div>
      <input
        type="number"
        value={bookingData.sqFt}
        onChange={(e) => {
          const value = parseInt(e.target.value) || 0;
          const clampedValue = Math.max(200, Math.min(10000, value));
          handleInputChange('sqFt', clampedValue);
        }}
        min={200}
        max={10000}
        step={50}
        placeholder="1000"
        className="w-full px-4 py-3 border-2 border-sage-green/20 rounded-lg text-center font-inter font-bold text-lg text-emerald-green bg-white focus:ring-0 focus:border-champagne-gold focus:shadow-field-focus transition-all duration-200"
      />
    </div>
  );

  return (
    <section className="min-h-screen py-20 bg-white/80 backdrop-blur-sm">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/Whisk_e389655d7c.jpg")'
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header with Back Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center space-x-4 mb-6">
            {onBack && (
              <button
                onClick={onBack}
                className="flex items-center space-x-2 text-white hover:text-champagne-gold transition-colors duration-200"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-inter font-medium">Back to Home</span>
              </button>
            )}
          </div>
          
          <div className="text-center">
            <h1 className="font-lora font-semibold text-4xl md:text-5xl text-white mb-4">
              <span className="flex items-center justify-center">
                <MapPin className="w-8 h-8 mr-2 text-champagne-gold" />
                {location} Cleaning Services
              </span>
            </h1>
            <p className="font-inter text-lg text-white/90 max-w-3xl mx-auto">
              Get an instant quote for our premium cleaning services in {location}
            </p>
          </div>
        </motion.div>

        {/* Booking Widget */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="frosted-glass rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
            {/* Preview Section - Always Visible */}
            <div 
              className="p-6 cursor-pointer bg-gradient-to-r from-white/10 to-white/5 border-b border-white/20"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="text-center flex-1">
                  <h3 className="font-lora font-semibold text-2xl text-champagne-gold mb-1">
                    Get Instant Quote for {location}
                  </h3>
                  <p className="font-inter text-white/70 text-sm">
                    Customize your perfect cleaning service
                  </p>
                </div>
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center"
                >
                  <ChevronDown className="w-6 h-6 text-white" />
                </motion.div>
              </div>

              {/* Simple Preview - White Container */}
              <div className="bg-white rounded-xl p-6 border-2 border-sage-green/30 shadow-3d">
                <div className="text-center">
                  <div className="font-lora font-bold text-4xl text-emerald-green mb-2">
                    ${bookingData.totalPrice.toFixed(2)}
                  </div>
                  <div className="font-inter text-deep-charcoal text-sm">
                    Click to customize your quote
                  </div>
                </div>
              </div>
            </div>

            {/* Expanded Section */}
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="bg-gradient-to-b from-white/10 to-white/5"
              >
                <div className="p-6 space-y-8">
                  {/* Space Details Section */}
                  <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 border-2 border-sage-green/30 shadow-3d hover:shadow-3d-hover transition-all duration-300">
                    <h4 className="font-lora font-semibold text-lg text-white mb-4 flex items-center space-x-2">
                      <div className="w-6 h-6 bg-champagne-gold/20 rounded-lg flex items-center justify-center">
                        <Home className="w-4 h-4 text-champagne-gold" />
                      </div>
                      <span>Space Details</span>
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <NumberInput
                        label="Bedrooms"
                        value={bookingData.bedrooms}
                        min={1}
                        max={6}
                        field="bedrooms"
                        icon={Home}
                      />
                      
                      <NumberInput
                        label="Bathrooms"
                        value={bookingData.bathrooms}
                        min={1}
                        max={5}
                        field="bathrooms"
                        icon={Bath}
                      />
                      
                      <NumberInput
                        label="Half Baths"
                        value={bookingData.halfBaths}
                        min={0}
                        max={3}
                        field="halfBaths"
                        icon={Bath}
                      />
                      
                      <SquareFootageInput />
                    </div>
                  </div>

                  {/* Frequency Selection */}
                  <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 border-2 border-sage-green/30 shadow-3d hover:shadow-3d-hover transition-all duration-300">
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-6 h-6 bg-champagne-gold/20 rounded-lg flex items-center justify-center">
                        <Calendar className="w-4 h-4 text-champagne-gold" />
                      </div>
                      <h4 className="font-lora font-semibold text-lg text-white">Service Frequency</h4>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {Object.entries(frequencyLabels).map(([key, label]) => {
                        const discount = frequencyDiscounts[key as keyof typeof frequencyDiscounts];
                        const isSelected = bookingData.frequency === key;
                        
                        return (
                          <button
                            key={key}
                            onClick={() => handleFrequencyChange(key as BookingData['frequency'])}
                            className={`p-4 rounded-xl border-2 transition-all duration-200 text-sm bg-white/90 shadow-3d hover:shadow-3d-hover ${
                              isSelected
                                ? 'border-champagne-gold bg-champagne-gold/10 text-deep-charcoal shadow-3d-hover'
                                : 'border-sage-green/30 hover:border-champagne-gold/40 text-deep-charcoal/70'
                            }`}
                          >
                            <div className="text-center">
                              <div className="font-inter font-semibold mb-1">
                                {label}
                              </div>
                              {discount > 0 && (
                                <div className="text-xs font-inter font-bold text-emerald-green bg-emerald-green/10 px-2 py-1 rounded-full">
                                  {Math.round(discount * 100)}% off
                                </div>
                              )}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Add-On Services */}
                  <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 border-2 border-sage-green/30 shadow-3d hover:shadow-3d-hover transition-all duration-300">
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-6 h-6 bg-champagne-gold/20 rounded-lg flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-champagne-gold" />
                      </div>
                      <h4 className="font-lora font-semibold text-lg text-white">Add-On Services</h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {addOnServices.map((service) => {
                        const isSelected = bookingData.addOns.includes(service.id);
                        const Icon = service.icon;
                        
                        return (
                          <button
                            key={service.id}
                            onClick={() => toggleAddOn(service.id)}
                            className={`p-4 rounded-xl border-2 transition-all duration-200 text-left shadow-3d hover:shadow-3d-hover ${
                              isSelected
                                ? 'border-emerald-green bg-emerald-green/20 shadow-3d-hover'
                                : 'border-sage-green/30 bg-white/90 hover:border-champagne-gold/40'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-champagne-gold/10 rounded-lg flex items-center justify-center">
                                  <Icon className="w-4 h-4 text-champagne-gold flex-shrink-0" />
                                </div>
                                <div className={`font-inter font-medium text-sm ${
                                  isSelected ? 'text-white' : 'text-deep-charcoal'
                                }`}>
                                  {service.name}
                                </div>
                              </div>
                              <div className="font-inter text-emerald-green text-sm font-bold bg-emerald-green/10 px-2 py-1 rounded-lg">
                                {service.price === 0 ? 'Free' : `+$${service.price}`}
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Service Overview & Pricing Total Widget - Bottom */}
                  <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 border-2 border-sage-green/30 shadow-3d hover:shadow-3d-hover transition-all duration-300">
                    {/* Service Overview - White Container */}
                    <div className="mb-6">
                      <h4 className="font-lora font-semibold text-2xl text-white mb-4 text-center">Service Overview</h4>
                      
                      {/* White Container for Service Overview */}
                      <div className="bg-white rounded-xl p-6 border border-sage-green/30 shadow-3d">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                          <div className="text-center bg-white rounded-lg p-3 border border-sage-green/30 shadow-sm">
                            <div className="flex items-center justify-center space-x-1 mb-2">
                              <Home className="w-4 h-4 text-champagne-gold" />
                              <span className="font-inter text-xs text-deep-charcoal/70">Bedrooms</span>
                            </div>
                            <span className="font-inter font-bold text-emerald-green text-xl">{bookingData.bedrooms}</span>
                          </div>
                          <div className="text-center bg-white rounded-lg p-3 border border-sage-green/30 shadow-sm">
                            <div className="flex items-center justify-center space-x-1 mb-2">
                              <Bath className="w-4 h-4 text-champagne-gold" />
                              <span className="font-inter text-xs text-deep-charcoal/70">Bathrooms</span>
                            </div>
                            <span className="font-inter font-bold text-emerald-green text-xl">{bookingData.bathrooms}</span>
                          </div>
                          <div className="text-center bg-white rounded-lg p-3 border border-sage-green/30 shadow-sm">
                            <div className="flex items-center justify-center space-x-1 mb-2">
                              <Bath className="w-4 h-4 text-champagne-gold" />
                              <span className="font-inter text-xs text-deep-charcoal/70">Half Baths</span>
                            </div>
                            <span className="font-inter font-bold text-emerald-green text-xl">{bookingData.halfBaths}</span>
                          </div>
                          <div className="text-center bg-white rounded-lg p-3 border border-sage-green/30 shadow-sm">
                            <div className="flex items-center justify-center space-x-1 mb-2">
                              <Square className="w-4 h-4 text-champagne-gold" />
                              <span className="font-inter text-xs text-deep-charcoal/70">Sq Ft</span>
                            </div>
                            <span className="font-inter font-bold text-emerald-green text-xl">{bookingData.sqFt}</span>
                          </div>
                        </div>
                        <div className="text-center bg-white rounded-lg p-3 border border-sage-green/30 shadow-sm">
                          <div className="flex items-center justify-center space-x-1 mb-2">
                            <Calendar className="w-4 h-4 text-champagne-gold" />
                            <span className="font-inter text-sm text-deep-charcoal/70">Frequency</span>
                          </div>
                          <span className="font-inter font-bold text-emerald-green text-lg">{frequencyLabels[bookingData.frequency]}</span>
                        </div>
                      </div>
                    </div>

                    {/* Price Breakdown - White Container */}
                    <div className="border-t-2 border-white/20 pt-6">
                      <h5 className="font-lora font-semibold text-2xl text-white mb-4 text-center">Price Breakdown</h5>
                      
                      {/* White Container for Price Breakdown */}
                      <div className="bg-white rounded-xl p-6 border border-sage-green/30 shadow-3d space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="font-inter text-deep-charcoal/70 text-sm">Base Service</span>
                          <span className="font-inter font-semibold text-emerald-green">${basePrice}</span>
                        </div>
                        
                        {bookingData.addOns.length > 0 && (
                          <>
                            <div className="border-t border-sage-green/30 pt-3">
                              <div className="font-inter text-deep-charcoal/70 text-sm mb-2">Add-ons:</div>
                              {bookingData.addOns.map(addOnId => {
                                const addOn = addOnServices.find(service => service.id === addOnId);
                                if (!addOn) return null;
                                return (
                                  <div key={addOnId} className="flex justify-between items-center ml-2">
                                    <span className="font-inter text-deep-charcoal/60 text-xs">{addOn.name}</span>
                                    <span className="font-inter text-emerald-green text-xs">
                                      {addOn.price === 0 ? 'Free' : `+$${addOn.price}`}
                                    </span>
                                  </div>
                                );
                              })}
                            </div>
                          </>
                        )}
                        
                        {frequencyDiscounts[bookingData.frequency] > 0 && (
                          <div className="flex justify-between items-center text-emerald-green bg-emerald-green/10 px-3 py-2 rounded-lg">
                            <span className="font-inter text-sm font-semibold">Frequency Discount</span>
                            <span className="font-inter font-bold">-{Math.round(frequencyDiscounts[bookingData.frequency] * 100)}%</span>
                          </div>
                        )}
                        
                        <div className="border-t-2 border-sage-green/30 pt-4">
                          <div className="flex justify-between items-center">
                            <span className="font-lora font-bold text-lg text-emerald-green">Total</span>
                            <span className="font-lora font-bold text-4xl text-emerald-green">
                              ${bookingData.totalPrice.toFixed(2)}
                            </span>
                          </div>
                          <div className="text-center mt-2">
                            <span className="font-inter text-deep-charcoal/60 text-sm">per cleaning</span>
                          </div>
                        </div>
                      </div>

                      {/* Book Button */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleBookMyClean}
                        className="w-full mt-6 bg-gradient-to-r from-champagne-gold to-champagne-gold/90 text-white py-3 rounded-xl font-inter font-bold text-base hover:from-champagne-gold/90 hover:to-champagne-gold transition-all duration-200 flex items-center justify-center space-x-2 shadow-elegant"
                      >
                        <span>Book My Clean in {location}!</span>
                        <motion.div
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <ArrowRight className="w-5 h-5" />
                        </motion.div>
                      </motion.button>

                      {/* Trust Indicators */}
                      <div className="text-center space-y-2 mt-4">
                        <div className="flex items-center justify-center space-x-4 text-xs text-white/60">
                          <span>✓ Bonded & Insured</span>
                          <span>✓ Satisfaction Guaranteed</span>
                        </div>
                        <div className="font-inter text-xs text-white/50">
                          Free cancellation up to 24 hours before service
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Location-specific content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="header-glass rounded-xl p-8 shadow-3d">
            <h2 className="font-lora font-semibold text-3xl text-white mb-6">
              Elite Cleaning Services in {location}
            </h2>
            <p className="font-inter text-white/80 mb-6 leading-relaxed">
              Our premium cleaning services in {location} are designed to exceed your expectations. 
              We understand the unique needs of {location} residents and provide tailored cleaning 
              solutions that address the specific challenges of the area.
            </p>
            <p className="font-inter text-white/80 mb-6 leading-relaxed">
              Whether you need regular maintenance for your desert home, vacation rental turnover 
              cleaning, or deep cleaning services, our professional team is equipped with the expertise 
              and premium products to deliver exceptional results every time.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-black/70 backdrop-blur-sm rounded-lg p-5 border border-white/20">
                <h3 className="font-lora font-medium text-xl text-champagne-gold mb-3">
                  Why Choose Us in {location}
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <div className="w-5 h-5 rounded-full bg-champagne-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-champagne-gold" />
                    </div>
                    <span className="text-white/80 text-sm">Local, trusted professionals familiar with {location} homes</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-5 h-5 rounded-full bg-champagne-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-champagne-gold" />
                    </div>
                    <span className="text-white/80 text-sm">Eco-friendly cleaning products safe for your family and pets</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-5 h-5 rounded-full bg-champagne-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-champagne-gold" />
                    </div>
                    <span className="text-white/80 text-sm">Flexible scheduling to accommodate your busy lifestyle</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-5 h-5 rounded-full bg-champagne-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-champagne-gold" />
                    </div>
                    <span className="text-white/80 text-sm">100% satisfaction guarantee on all services</span>
                  </li>
                </ul>
              </div>
              <div className="bg-black/70 backdrop-blur-sm rounded-lg p-5 border border-white/20">
                <h3 className="font-lora font-medium text-xl text-champagne-gold mb-3">
                  Popular Services in {location}
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <div className="w-5 h-5 rounded-full bg-champagne-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-champagne-gold" />
                    </div>
                    <span className="text-white/80 text-sm">Vacation rental and Airbnb turnover cleaning</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-5 h-5 rounded-full bg-champagne-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-champagne-gold" />
                    </div>
                    <span className="text-white/80 text-sm">Seasonal deep cleaning for snowbirds and part-time residents</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-5 h-5 rounded-full bg-champagne-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-champagne-gold" />
                    </div>
                    <span className="text-white/80 text-sm">Luxury home maintenance for high-end properties</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-5 h-5 rounded-full bg-champagne-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-champagne-gold" />
                    </div>
                    <span className="text-white/80 text-sm">Post-construction and renovation cleanup</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationQuote;