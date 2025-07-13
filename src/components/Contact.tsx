import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: '(555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'hello@eliteluxxcleaning.com',
      link: 'mailto:hello@eliteluxxcleaning.com',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: '123 Luxury Lane, Premium City, PC 12345',
      link: null,
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon-Fri: 8AM-6PM, Sat: 9AM-4PM',
      link: null,
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-black/20 backdrop-blur-sm" id="contact">
      <div className="max-w-site mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-lora font-semibold text-3xl md:text-4xl lg:text-5xl text-white mb-4 md:mb-6">
            Get In Touch
          </h2>
          <p className="font-inter text-base md:text-lg text-white/80 max-w-3xl mx-auto px-4">
            Ready to experience the difference of premium cleaning? Contact us today for a personalized quote 
            and let us transform your space into a pristine sanctuary.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information (left column, remains as is) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-lora font-medium text-xl md:text-2xl text-white mb-6 md:mb-8">
              Contact Information
            </h3>

            <div className="space-y-6 mb-8 md:mb-12">
              {contactInfo.map((info, index) => (
                <div key={info.title} className="flex items-start space-x-4">
                  <div className="bg-champagne-gold/10 rounded-lg p-3 flex-shrink-0">
                    <info.icon className="w-5 h-5 md:w-6 md:h-6 text-champagne-gold" />
                  </div>
                  <div>
                    <h4 className="font-inter font-medium text-white mb-1">
                      {info.title}
                    </h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="font-inter text-sm md:text-base text-white/80 hover:text-champagne-gold transition-colors duration-200"
                      >
                        {info.details}
                      </a>
                    ) : (
                      <p className="font-inter text-sm md:text-base text-white/80">
                        {info.details}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form (right column) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="card-glass rounded-lg shadow-elegant p-6 md:p-8"
          >
            <h3 className="font-lora font-medium text-xl md:text-2xl text-white mb-6 md:mb-8">
              Request a Quote
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block font-inter font-medium text-white mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-md text-white placeholder-white/50 focus:ring-2 focus:ring-champagne-gold/20 focus:border-champagne-gold transition-colors duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-inter font-medium text-white mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-md text-white placeholder-white/50 focus:ring-2 focus:ring-champagne-gold/20 focus:border-champagne-gold transition-colors duration-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block font-inter font-medium text-white mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-md text-white placeholder-white/50 focus:ring-2 focus:ring-champagne-gold/20 focus:border-champagne-gold transition-colors duration-200"/>
                </div>
                <div>
                  <label htmlFor="service" className="block font-inter font-medium text-white mb-2">
                    Service Type
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-md text-white focus:ring-2 focus:ring-champagne-gold/20 focus:border-champagne-gold transition-colors duration-200">
                    <option value="" className="bg-gray-800">Select a service</option>
                    <option value="residential" className="bg-gray-800">Residential Cleaning</option>
                    <option value="commercial" className="bg-gray-800">Commercial Cleaning</option>
                    <option value="move" className="bg-gray-800">Move-In/Move-Out</option>
                    <option value="construction" className="bg-gray-800">Post-Construction</option>
                    <option value="emergency" className="bg-gray-800">Emergency Cleaning</option>
                    <option value="luxury" className="bg-gray-800">Luxury Maintenance</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block font-inter font-medium text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-md text-white placeholder-white/50 focus:ring-2 focus:ring-champagne-gold/20 focus:border-champagne-gold transition-colors duration-200 resize-none"
                  placeholder="Tell us about your cleaning needs..."/>
              </div>

              <button
                type="submit"
                className="w-full btn-primary py-3 md:py-4 font-inter font-medium text-base md:text-lg flex items-center justify-center space-x-2">
                <Send className="w-4 h-4 md:w-5 md:h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;