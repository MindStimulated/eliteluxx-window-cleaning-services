import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, CheckCircle } from 'lucide-react';

interface BookingData {
  bedrooms: number;
  bathrooms: number;
  halfBaths: number;
  sqFt: number;
  frequency: 'one-time' | 'weekly' | 'bi-weekly' | 'monthly';
}

const BookingInterface: React.FC = () => {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState<BookingData>({
    bedrooms: 1,
    bathrooms: 1,
    halfBaths: 0,
    sqFt: 500,
    frequency: 'one-time',
  });

  const basePrice = 135;
  const frequencyDiscounts = {
    'one-time': 0,
    'weekly': 0.30,
    'bi-weekly': 0.20,
    'monthly': 0.05,
  };

  const frequencyLabels = {
    'one-time': 'One-time service',
    'weekly': 'Every week',
    'bi-weekly': 'Every 2 weeks',
    'monthly': 'Every 4 weeks',
  };

  const calculatePrice = useCallback(() => {
    const sizeMultiplier = Math.max(1, bookingData.sqFt / 500);
    const roomMultiplier = 1 + (bookingData.bedrooms - 1) * 0.3 + bookingData.bathrooms * 0.2 + bookingData.halfBaths * 0.1;
    const subtotal = basePrice * sizeMultiplier * roomMultiplier;
    const discount = frequencyDiscounts[bookingData.frequency];
    return subtotal * (1 - discount);
  }, [bookingData]);

  const handleSliderChange = (field: keyof BookingData, value: number) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  const handleFrequencyChange = (frequency: BookingData['frequency']) => {
    setBookingData(prev => ({ ...prev, frequency }));
  };

  const SliderComponent = ({ 
    label, 
    value, 
    min, 
    max, 
    step = 1, 
    field 
  }: { 
    label: string; 
    value: number; 
    min: number; 
    max: number; 
    step?: number; 
    field: keyof BookingData;
  }) => (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <label className="font-inter font-medium text-deep-charcoal">{label}</label>
        <span className="font-inter text-champagne-gold font-semibold">
          {field === 'sqFt' ? `${value} Sq Ft` : value}
        </span>
      </div>
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => handleSliderChange(field, Number(e.target.value))}
          className="w-full h-2 bg-desert-sand rounded-lg appearance-none cursor-pointer slider"
        />
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-soft-white" id="booking">
      <div className="max-w-site mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="font-lora font-semibold text-4xl md:text-5xl text-deep-charcoal mb-4">
              Book Your Premium Service
            </h2>
            <p className="font-inter text-lg text-deep-charcoal/70 max-w-2xl mx-auto">
              Get an instant quote tailored to your space and schedule
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Step 1: Service Details */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-lg shadow-elegant p-8 md:p-12"
              >
                <div className="flex items-center space-x-3 mb-8">
                  <MapPin className="w-6 h-6 text-champagne-gold" />
                  <h3 className="font-lora font-medium text-2xl text-deep-charcoal">
                    Space Details
                  </h3>
                </div>

                <div className="space-y-8">
                  <SliderComponent
                    label="Bedrooms: 1 or Studio"
                    value={bookingData.bedrooms}
                    min={1}
                    max={6}
                    field="bedrooms"
                  />
                  
                  <SliderComponent
                    label="Bathrooms"
                    value={bookingData.bathrooms}
                    min={1}
                    max={5}
                    field="bathrooms"
                  />
                  
                  <SliderComponent
                    label="Half Baths"
                    value={bookingData.halfBaths}
                    min={0}
                    max={3}
                    field="halfBaths"
                  />
                  
                  <SliderComponent
                    label="Square Footage"
                    value={bookingData.sqFt}
                    min={200}
                    max={5000}
                    step={50}
                    field="sqFt"
                  />
                </div>

                <button
                  onClick={() => setStep(2)}
                  className="w-full mt-8 bg-champagne-gold text-white py-4 rounded-md font-inter font-medium text-lg hover:bg-champagne-gold/90 transition-colors duration-200"
                >
                  Continue to Frequency
                </button>
              </motion.div>
            )}

            {/* Step 2: Frequency Selection */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-lg shadow-elegant p-8 md:p-12"
              >
                <div className="flex items-center space-x-3 mb-8">
                  <Clock className="w-6 h-6 text-champagne-gold" />
                  <h3 className="font-lora font-medium text-2xl text-deep-charcoal">
                    Service Frequency
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {Object.entries(frequencyLabels).map(([key, label]) => {
                    const discount = frequencyDiscounts[key as keyof typeof frequencyDiscounts];
                    const isSelected = bookingData.frequency === key;
                    
                    return (
                      <button
                        key={key}
                        onClick={() => handleFrequencyChange(key as BookingData['frequency'])}
                        className={`p-6 rounded-lg border-2 transition-all duration-200 ${
                          isSelected
                            ? 'border-champagne-gold bg-champagne-gold/5'
                            : 'border-desert-sand/50 hover:border-champagne-gold/50'
                        }`}
                      >
                        <div className="text-center">
                          <div className="font-inter font-medium text-deep-charcoal mb-2">
                            {label}
                          </div>
                          {discount > 0 && (
                            <div className="text-sm font-inter font-semibold text-champagne-gold">
                              {Math.round(discount * 100)}% off
                            </div>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <button
                    onClick={() => setStep(1)}
                    className="flex-1 border-2 border-champagne-gold text-champagne-gold py-4 rounded-md font-inter font-medium text-lg hover:bg-champagne-gold/5 transition-colors duration-200"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="flex-1 bg-champagne-gold text-white py-4 rounded-md font-inter font-medium text-lg hover:bg-champagne-gold/90 transition-colors duration-200"
                  >
                    Review & Book
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Confirmation */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-lg shadow-elegant p-8 md:p-12"
              >
                <div className="flex items-center space-x-3 mb-8">
                  <CheckCircle className="w-6 h-6 text-champagne-gold" />
                  <h3 className="font-lora font-medium text-2xl text-deep-charcoal">
                    Service Summary
                  </h3>
                </div>

                <div className="space-y-4 mb-8 p-6 bg-soft-white rounded-lg">
                  <div className="flex justify-between">
                    <span className="font-inter text-deep-charcoal">Bedrooms:</span>
                    <span className="font-inter font-medium text-deep-charcoal">{bookingData.bedrooms}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-inter text-deep-charcoal">Bathrooms:</span>
                    <span className="font-inter font-medium text-deep-charcoal">{bookingData.bathrooms}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-inter text-deep-charcoal">Half Baths:</span>
                    <span className="font-inter font-medium text-deep-charcoal">{bookingData.halfBaths}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-inter text-deep-charcoal">Square Footage:</span>
                    <span className="font-inter font-medium text-deep-charcoal">{bookingData.sqFt} sq ft</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-inter text-deep-charcoal">Frequency:</span>
                    <span className="font-inter font-medium text-deep-charcoal">
                      {frequencyLabels[bookingData.frequency]}
                    </span>
                  </div>
                  <div className="border-t border-desert-sand/30 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="font-inter font-semibold text-lg text-deep-charcoal">Total:</span>
                      <span className="font-lora font-semibold text-2xl text-champagne-gold">
                        ${calculatePrice().toFixed(2)}/CLEAN
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <button
                    onClick={() => setStep(2)}
                    className="flex-1 border-2 border-champagne-gold text-champagne-gold py-4 rounded-md font-inter font-medium text-lg hover:bg-champagne-gold/5 transition-colors duration-200"
                  >
                    Back
                  </button>
                  <button className="flex-1 bg-champagne-gold text-white py-4 rounded-md font-inter font-medium text-lg hover:bg-champagne-gold/90 transition-colors duration-200">
                    Schedule Appointment
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #D4AF37;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          cursor: pointer;
        }

        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #D4AF37;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          border: none;
        }
      `}</style>
    </section>
  );
};

export default BookingInterface;