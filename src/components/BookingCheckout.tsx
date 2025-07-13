import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Home, Bath, Square, Clock, CreditCard, Shield, User, MapPin, Phone, Mail, Edit3, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

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

interface BookingCheckoutProps {
  bookingData: BookingData;
  onBack: () => void;
  onEditQuote: () => void;
}

const BookingCheckout: React.FC<BookingCheckoutProps> = ({ bookingData, onBack, onEditQuote }) => {
  const [step, setStep] = useState<'auth' | 'details' | 'payment'>('auth');
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [isGuest, setIsGuest] = useState(false);

  // Form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    aptSuite: '',
    city: '',
    state: '',
    zipCode: '',
    serviceDate: '',
    arrivalWindow: '',
    parking: '',
    accessMethod: '',
    trashLocation: '',
    howHeard: '',
    specialInstructions: '',
    discountCode: '',
    tipAmount: '',
    nameOnCard: '',
    billingZip: '',
    cardNumber: '',
    expMonth: '',
    expYear: '',
    cvv: ''
  });

  const frequencyLabels = {
    'one-time': 'One-time service',
    'weekly': 'Weekly',
    'bi-weekly': 'Bi-weekly',
    'monthly': 'Monthly',
  };

  const parkingOptions = [
    'There is street parking',
    'Park in the parking garage',
    'Park in my driveway',
    'Parking garage but you\'ll need a parking pass',
    'Other, I\'ll explain below'
  ];

  const accessOptions = [
    'I will leave a key',
    'I will provide an access code',
    'Someone will be home',
    'Go to the apartment office for the key',
    'Other, I\'ll explain below'
  ];

  const howHeardOptions = [
    'Angi', 'Better Business Bureau', 'Bing', 'Car', 'Cleaning For A Reason',
    'D Magazine', 'Google', 'Direct Mail', 'Email Promo', 'Doorhanger',
    'Friend or Family', 'Facebook', 'Nextdoor.com', 'Instagram', 'Realtor',
    'Referred by Emily\'s Maids', 'Referred by another Maid Service',
    'Twitter', 'Yahoo', 'Yellowpages.com', 'Yelp', 'YouTube', 'Other'
  ];

  const timeSlots = [
    '8:25AM - 10:25AM',
    '10:30AM - 12:30PM',
    '12:30PM - 2:30PM',
    '2:30PM - 4:30PM'
  ];

  const months = [
    '01', '02', '03', '04', '05', '06',
    '07', '08', '09', '10', '11', '12'
  ];

  const years = Array.from({ length: 20 }, (_, i) => (new Date().getFullYear() + i).toString());

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      setUser(user);
      setFormData(prev => ({
        ...prev,
        email: user.email || ''
      }));
      setStep('details');
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const signInWithGoogle = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin
      }
    });
    if (error) console.error('Error signing in with Google:', error);
    setLoading(false);
  };

  const signInWithFacebook = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'facebook',
      options: {
        redirectTo: window.location.origin
      }
    });
    if (error) console.error('Error signing in with Facebook:', error);
    setLoading(false);
  };

  const continueAsGuest = () => {
    setIsGuest(true);
    setStep('details');
  };

  const calculateSubtotal = () => {
    const discountAmount = formData.discountCode ? bookingData.totalPrice * 0.1 : 0;
    return bookingData.totalPrice - discountAmount;
  };

  const calculateTax = () => {
    return calculateSubtotal() * 0.0825; // 8.25% tax
  };

  const calculateTotal = () => {
    const tip = parseFloat(formData.tipAmount) || 0;
    return calculateSubtotal() + calculateTax() + tip;
  };

  const handleBooking = async () => {
    setLoading(true);
    try {
      // Step 1: Create/find customer
      const { data: customer, error: customerError } = await supabase
        .from('customers')
        .upsert({
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          referral_source: formData.howHeard,
          is_registered_user: !isGuest
        })
        .select()
        .single();

      if (customerError) throw customerError;

      // Step 2: Create service address
      const { data: address, error: addressError } = await supabase
        .from('service_addresses')
        .insert({
          customer_id: customer.id,
          address_line_1: formData.address,
          apt_suite: formData.aptSuite,
          city: formData.city,
          state: formData.state,
          zip_code: formData.zipCode,
          parking_instructions: formData.parking,
          access_instructions: formData.accessMethod,
          trash_location: formData.trashLocation,
          special_instructions: formData.specialInstructions,
          is_primary: true
        })
        .select()
        .single();

      if (addressError) throw addressError;

      // Step 3: Calculate pricing details
      const frequencyDiscounts = {
        'one-time': 0,
        'weekly': 30,
        'bi-weekly': 20,
        'monthly': 5,
      };

      const basePrice = 135.00;
      const discountPercent = frequencyDiscounts[bookingData.frequency];
      const subtotal = bookingData.totalPrice;
      const discountAmount = formData.discountCode ? subtotal * 0.1 : 0;
      const taxAmount = (subtotal - discountAmount) * 0.0825;
      const tipAmount = parseFloat(formData.tipAmount) || 0;
      const totalAmount = subtotal - discountAmount + taxAmount + tipAmount;

      // Step 4: Create quote
      const { data: quote, error: quoteError } = await supabase
        .from('quotes')
        .insert({
          customer_id: customer.id,
          service_address_id: address.id,
          bedrooms: bookingData.bedrooms,
          bathrooms: bookingData.bathrooms,
          half_baths: bookingData.halfBaths,
          square_footage: bookingData.sqFt,
          frequency: bookingData.frequency,
          frequency_discount_percent: discountPercent,
          base_price: basePrice,
          addon_total: 0, // Will calculate from selected addons
          subtotal: subtotal,
          discount_amount: discountAmount,
          tax_amount: taxAmount,
          tip_amount: tipAmount,
          total_amount: totalAmount,
          parking_option: formData.parking,
          access_option: formData.accessMethod,
          discount_code: formData.discountCode,
          status: 'accepted'
        })
        .select()
        .single();

      if (quoteError) throw quoteError;

      // Step 5: Save selected add-ons (if any)
      if (bookingData.addOns.length > 0) {
        // First, get addon services data to get prices
        const { data: addonServices, error: addonError } = await supabase
          .from('addon_services')
          .select('id, name, price')
          .in('id', bookingData.addOns);

        if (addonError) throw addonError;

        const addonInserts = addonServices.map(addon => ({
          quote_id: quote.id,
          addon_service_id: addon.id,
          quantity: 1,
          unit_price: addon.price,
          total_price: addon.price
        }));

        const { error: quoteAddonsError } = await supabase
          .from('quote_addons')
          .insert(addonInserts);

        if (quoteAddonsError) throw quoteAddonsError;
      }

      // Step 6: Parse arrival window
      const [startTime, endTime] = formData.arrivalWindow.split(' - ');

      // Step 7: Create booking
      const { data: booking, error: bookingError } = await supabase
        .from('bookings')
        .insert({
          quote_id: quote.id,
          customer_id: customer.id,
          service_address_id: address.id,
          service_date: formData.serviceDate,
          arrival_window_start: startTime,
          arrival_window_end: endTime,
          status: 'scheduled',
          payment_method: 'credit_card',
          payment_status: 'pending'
        })
        .select()
        .single();

      if (bookingError) throw bookingError;

      // Step 8: Save payment method (store securely - in production use tokenization)
      const { error: paymentError } = await supabase
        .from('payment_methods')
        .insert({
          customer_id: customer.id,
          name_on_card: formData.nameOnCard,
          billing_zip: formData.billingZip,
          card_last_four: formData.cardNumber.slice(-4),
          card_type: 'visa', // You'd determine this from card number
          exp_month: parseInt(formData.expMonth),
          exp_year: parseInt(formData.expYear),
          is_default: true
        });

      if (paymentError) throw paymentError;

      // Success!
      alert('Booking successful! You will receive a confirmation email shortly.');
      
    } catch (error) {
      console.error('Error creating booking:', error);
      alert('There was an error processing your booking. Please try again.');
    }
    setLoading(false);
  };

  const isWeekend = (date: string) => {
    const day = new Date(date).getDay();
    return day === 0 || day === 6; // Sunday = 0, Saturday = 6
  };

  return (
    <section className="min-h-screen py-20 bg-white/80 backdrop-blur-sm">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/Whisk_7c319832c2.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center space-x-4 mb-6">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-white hover:text-champagne-gold transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-inter font-medium">Back to Quote</span>
            </button>
          </div>
          
          <div className="text-center">
            <h1 className="font-lora font-semibold text-4xl md:text-5xl text-white mb-4">
              Complete Your Booking
            </h1>
            <p className="font-inter text-lg text-white/90 max-w-3xl mx-auto">
              {step === 'auth' && 'Sign in or continue as guest to complete your booking'}
              {step === 'details' && 'Please provide your service details and contact information'}
              {step === 'payment' && 'Review your booking and complete payment'}
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quote Summary - Always Visible */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <div className="frosted-glass rounded-2xl p-6 border border-white/20 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-lora font-semibold text-xl text-white">
                  Service Summary
                </h3>
                <button
                  onClick={onEditQuote}
                  className="flex items-center space-x-1 text-champagne-gold hover:text-champagne-gold/80 transition-colors duration-200"
                >
                  <Edit3 className="w-4 h-4" />
                  <span className="font-inter text-sm">Edit</span>
                </button>
              </div>

              {/* Service Details */}
              <div className="space-y-4 mb-6">
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Home className="w-4 h-4 text-champagne-gold" />
                      <span className="text-white/80">Bedrooms:</span>
                      <span className="text-white font-medium">{bookingData.bedrooms}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Bath className="w-4 h-4 text-champagne-gold" />
                      <span className="text-white/80">Bathrooms:</span>
                      <span className="text-white font-medium">{bookingData.bathrooms}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Bath className="w-4 h-4 text-champagne-gold" />
                      <span className="text-white/80">Half Baths:</span>
                      <span className="text-white font-medium">{bookingData.halfBaths}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Square className="w-4 h-4 text-champagne-gold" />
                      <span className="text-white/80">Sq Ft:</span>
                      <span className="text-white font-medium">{bookingData.sqFt}</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-champagne-gold" />
                      <span className="text-white/80">Frequency:</span>
                      <span className="text-white font-medium">{frequencyLabels[bookingData.frequency]}</span>
                    </div>
                  </div>
                </div>

                {bookingData.addOns.length > 0 && (
                  <div className="bg-white/20 rounded-lg p-4">
                    <h4 className="text-white font-medium mb-2">Add-on Services:</h4>
                    <div className="space-y-1">
                      {bookingData.addOns.map((addOn, index) => (
                        <div key={index} className="text-white/80 text-sm">
                          • {addOn.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Pricing */}
              <div className="bg-white/20 rounded-lg p-4">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/80">Subtotal:</span>
                    <span className="text-white">${calculateSubtotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">Sales Tax:</span>
                    <span className="text-white">${calculateTax().toFixed(2)}</span>
                  </div>
                  {formData.tipAmount && (
                    <div className="flex justify-between">
                      <span className="text-white/80">Tip:</span>
                      <span className="text-white">${parseFloat(formData.tipAmount).toFixed(2)}</span>
                    </div>
                  )}
                  <div className="border-t border-white/20 pt-2">
                    <div className="flex justify-between font-semibold">
                      <span className="text-white">Total:</span>
                      <span className="text-champagne-gold text-lg">${calculateTotal().toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="frosted-glass rounded-2xl border border-white/20 overflow-hidden">
              {/* Authentication Step */}
              {step === 'auth' && (
                <div className="p-8">
                  <h3 className="font-lora font-semibold text-2xl text-white mb-6 text-center">
                    Sign In or Continue as Guest
                  </h3>

                  <div className="space-y-4 mb-8">
                    <button
                      onClick={signInWithGoogle}
                      disabled={loading}
                      className="w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-inter font-medium hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center space-x-2"
                    >
                      <span>Continue with Google</span>
                    </button>

                    <button
                      onClick={signInWithFacebook}
                      disabled={loading}
                      className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-inter font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                    >
                      <span>Continue with Facebook</span>
                    </button>
                  </div>

                  <div className="relative mb-8">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-white/20"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-transparent text-white/60">or</span>
                    </div>
                  </div>

                  <button
                    onClick={continueAsGuest}
                    className="w-full bg-champagne-gold text-white py-3 px-4 rounded-lg font-inter font-medium hover:bg-champagne-gold/90 transition-colors duration-200"
                  >
                    Continue as Guest
                  </button>
                </div>
              )}

              {/* Details Step */}
              {step === 'details' && (
                <div className="p-8">
                  <h3 className="font-lora font-semibold text-2xl text-white mb-6">
                    Service Details
                  </h3>

                  <div className="space-y-6">
                    {/* Personal Information */}
                    <div className="bg-white/10 rounded-lg p-6">
                      <h4 className="font-inter font-semibold text-white mb-4 flex items-center space-x-2">
                        <User className="w-5 h-5 text-champagne-gold" />
                        <span>Personal Information</span>
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-white/80 text-sm font-medium mb-2">
                            First Name *
                          </label>
                          <input
                            type="text"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange('firstName', e.target.value)}
                            className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:ring-2 focus:ring-champagne-gold focus:border-transparent"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-white/80 text-sm font-medium mb-2">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange('lastName', e.target.value)}
                            className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:ring-2 focus:ring-champagne-gold focus:border-transparent"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-white/80 text-sm font-medium mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:ring-2 focus:ring-champagne-gold focus:border-transparent"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-white/80 text-sm font-medium mb-2">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:ring-2 focus:ring-champagne-gold focus:border-transparent"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Service Address */}
                    <div className="bg-white/10 rounded-lg p-6">
                      <h4 className="font-inter font-semibold text-white mb-4 flex items-center space-x-2">
                        <MapPin className="w-5 h-5 text-champagne-gold" />
                        <span>Service Address</span>
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-white/80 text-sm font-medium mb-2">
                            Address *
                          </label>
                          <input
                            type="text"
                            value={formData.address}
                            onChange={(e) => handleInputChange('address', e.target.value)}
                            className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:ring-2 focus:ring-champagne-gold focus:border-transparent"
                            required
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                          <div>
                            <label className="block text-white/80 text-sm font-medium mb-2">
                              Apt/Suite #
                            </label>
                            <input
                              type="text"
                              value={formData.aptSuite}
                              onChange={(e) => handleInputChange('aptSuite', e.target.value)}
                              className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:ring-2 focus:ring-champagne-gold focus:border-transparent"
                            />
                          </div>
                          <div>
                            <label className="block text-white/80 text-sm font-medium mb-2">
                              City *
                            </label>
                            <input
                              type="text"
                              value={formData.city}
                              onChange={(e) => handleInputChange('city', e.target.value)}
                              className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:ring-2 focus:ring-champagne-gold focus:border-transparent"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-white/80 text-sm font-medium mb-2">
                              State *
                            </label>
                            <input
                              type="text"
                              value={formData.state}
                              onChange={(e) => handleInputChange('state', e.target.value)}
                              className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:ring-2 focus:ring-champagne-gold focus:border-transparent"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-white/80 text-sm font-medium mb-2">
                              Zip Code *
                            </label>
                            <input
                              type="text"
                              value={formData.zipCode}
                              onChange={(e) => handleInputChange('zipCode', e.target.value)}
                              className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:ring-2 focus:ring-champagne-gold focus:border-transparent"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Service Date & Time */}
                    <div className="bg-white/10 rounded-lg p-6">
                      <h4 className="font-inter font-semibold text-white mb-4 flex items-center space-x-2">
                        <Calendar className="w-5 h-5 text-champagne-gold" />
                        <span>Date of Service</span>
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-white/80 text-sm font-medium mb-2">
                            Service Date *
                          </label>
                          <input
                            type="date"
                            value={formData.serviceDate}
                            onChange={(e) => handleInputChange('serviceDate', e.target.value)}
                            min={new Date().toISOString().split('T')[0]}
                            className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:ring-2 focus:ring-champagne-gold focus:border-transparent"
                            required
                          />
                          {formData.serviceDate && isWeekend(formData.serviceDate) && (
                            <p className="text-champagne-gold text-sm mt-1">
                              Weekend appointments available per request
                            </p>
                          )}
                        </div>
                        <div>
                          <label className="block text-white/80 text-sm font-medium mb-2">
                            Arrival Window *
                          </label>
                          <select
                            value={formData.arrivalWindow}
                            onChange={(e) => handleInputChange('arrivalWindow', e.target.value)}
                            className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:ring-2 focus:ring-champagne-gold focus:border-transparent"
                            required
                          >
                            <option value="">Select time window</option>
                            {timeSlots.map((slot) => (
                              <option key={slot} value={slot} className="bg-gray-800">
                                {slot}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Service Questions */}
                    <div className="bg-white/10 rounded-lg p-6">
                      <h4 className="font-inter font-semibold text-white mb-4">
                        Service Information
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-white/80 text-sm font-medium mb-2">
                            Where can we park? *
                          </label>
                          <select
                            value={formData.parking}
                            onChange={(e) => handleInputChange('parking', e.target.value)}
                            className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:ring-2 focus:ring-champagne-gold focus:border-transparent"
                            required
                          >
                            <option value="">Select parking option</option>
                            {parkingOptions.map((option) => (
                              <option key={option} value={option} className="bg-gray-800">
                                {option}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-white/80 text-sm font-medium mb-2">
                            How will we access your home? *
                          </label>
                          <select
                            value={formData.accessMethod}
                            onChange={(e) => handleInputChange('accessMethod', e.target.value)}
                            className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:ring-2 focus:ring-champagne-gold focus:border-transparent"
                            required
                          >
                            <option value="">Select access method</option>
                            {accessOptions.map((option) => (
                              <option key={option} value={option} className="bg-gray-800">
                                {option}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-white/80 text-sm font-medium mb-2">
                            Where can we find the outdoor trash can? *
                          </label>
                          <textarea
                            value={formData.trashLocation}
                            onChange={(e) => handleInputChange('trashLocation', e.target.value)}
                            placeholder="In the garage ... On the side of home ... Back yard by the gate ... Apartment's trash chute is down the hall near the elevator. Look for the door labeled 'Waste' ..."
                            className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:ring-2 focus:ring-champagne-gold focus:border-transparent resize-none"
                            rows={3}
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-white/80 text-sm font-medium mb-2">
                            How did you hear about EliteLuxx Cleaning? *
                          </label>
                          <select
                            value={formData.howHeard}
                            onChange={(e) => handleInputChange('howHeard', e.target.value)}
                            className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:ring-2 focus:ring-champagne-gold focus:border-transparent"
                            required
                          >
                            <option value="">Select option</option>
                            {howHeardOptions.map((option) => (
                              <option key={option} value={option} className="bg-gray-800">
                                {option}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-white/80 text-sm font-medium mb-2">
                            Anything else the Cleaner should know?
                          </label>
                          <textarea
                            value={formData.specialInstructions}
                            onChange={(e) => handleInputChange('specialInstructions', e.target.value)}
                            placeholder="Special Instructions..."
                            className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:ring-2 focus:ring-champagne-gold focus:border-transparent resize-none"
                            rows={3}
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => setStep('payment')}
                      className="w-full bg-champagne-gold text-white py-3 px-4 rounded-lg font-inter font-medium hover:bg-champagne-gold/90 transition-colors duration-200"
                    >
                      Continue to Payment
                    </button>
                  </div>
                </div>
              )}

              {/* Payment Step */}
              {step === 'payment' && (
                <div className="p-8">
                  <h3 className="font-lora font-semibold text-2xl text-white mb-6">
                    Payment Information
                  </h3>

                  <div className="space-y-6">
                    {/* Discount Code */}
                    <div className="bg-white/10 rounded-lg p-6">
                      <h4 className="font-inter font-semibold text-white mb-4">
                        Discount Code
                      </h4>
                      <p className="text-white/70 text-sm mb-4">
                        If you have a discount code, enter it here. Gift cards purchased from a third party are not valid.
                      </p>
                      <div className="flex space-x-2">
                        <input
                          type="text"
                          value={formData.discountCode}
                          onChange={(e) => handleInputChange('discountCode', e.target.value)}
                          placeholder="Discount Code (or leave this blank)"
                          className="flex-1 px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:ring-2 focus:ring-champagne-gold focus:border-transparent"
                        />
                        <button className="bg-champagne-gold text-white px-6 py-3 rounded-lg font-inter font-medium hover:bg-champagne-gold/90 transition-colors duration-200">
                          APPLY
                        </button>
                      </div>
                    </div>

                    {/* Payment Method */}
                    <div className="bg-white/10 rounded-lg p-6">
                      <h4 className="font-inter font-semibold text-white mb-4 flex items-center space-x-2">
                        <CreditCard className="w-5 h-5 text-champagne-gold" />
                        <span>Select Payment</span>
                      </h4>
                      <p className="text-white/70 text-sm mb-6">
                        Enter your card information below. You will be charged after service has been rendered. 
                        If you prefer paying with check, cash, or bitcoin please notify us by phone or email.
                      </p>

                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-white/80 text-sm font-medium mb-2">
                              Name On Account *
                            </label>
                            <input
                              type="text"
                              value={formData.nameOnCard}
                              onChange={(e) => handleInputChange('nameOnCard', e.target.value)}
                              className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:ring-2 focus:ring-champagne-gold focus:border-transparent"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-white/80 text-sm font-medium mb-2">
                              Billing Zip Code *
                            </label>
                            <input
                              type="text"
                              value={formData.billingZip}
                              onChange={(e) => handleInputChange('billingZip', e.target.value)}
                              className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:ring-2 focus:ring-champagne-gold focus:border-transparent"
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-white/80 text-sm font-medium mb-2">
                            Card Number *
                          </label>
                          <input
                            type="text"
                            value={formData.cardNumber}
                            onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                            placeholder="1234 5678 9012 3456"
                            className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:ring-2 focus:ring-champagne-gold focus:border-transparent"
                            required
                          />
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                          <div>
                            <label className="block text-white/80 text-sm font-medium mb-2">
                              Exp Month *
                            </label>
                            <select
                              value={formData.expMonth}
                              onChange={(e) => handleInputChange('expMonth', e.target.value)}
                              className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:ring-2 focus:ring-champagne-gold focus:border-transparent"
                              required
                            >
                              <option value="">Month</option>
                              {months.map((month) => (
                                <option key={month} value={month} className="bg-gray-800">
                                  {month}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <label className="block text-white/80 text-sm font-medium mb-2">
                              Exp Year *
                            </label>
                            <select
                              value={formData.expYear}
                              onChange={(e) => handleInputChange('expYear', e.target.value)}
                              className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:ring-2 focus:ring-champagne-gold focus:border-transparent"
                              required
                            >
                              <option value="">Year</option>
                              {years.map((year) => (
                                <option key={year} value={year} className="bg-gray-800">
                                  {year}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <label className="block text-white/80 text-sm font-medium mb-2">
                              CVV *
                            </label>
                            <input
                              type="text"
                              value={formData.cvv}
                              onChange={(e) => handleInputChange('cvv', e.target.value)}
                              placeholder="123"
                              className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:ring-2 focus:ring-champagne-gold focus:border-transparent"
                              required
                            />
                          </div>
                        </div>

                        <div className="flex items-center space-x-2 text-white/70 text-sm">
                          <Shield className="w-4 h-4 text-champagne-gold" />
                          <span>SAFE AND SECURE 256-BIT SSL ENCRYPTED PAYMENT.</span>
                        </div>

                        <div className="text-white/70 text-sm">
                          I authorize EliteLuxx Cleaning to charge my credit card above for agreed upon purchases. 
                          I understand that my information will be saved to file for further transactions on my account.
                        </div>
                      </div>
                    </div>

                    {/* Tip */}
                    <div className="bg-white/10 rounded-lg p-6">
                      <h4 className="font-inter font-semibold text-white mb-4">
                        Tip, tip, hooray! Tips are not expected but always appreciated
                      </h4>
                      <input
                        type="number"
                        value={formData.tipAmount}
                        onChange={(e) => handleInputChange('tipAmount', e.target.value)}
                        placeholder="0.00"
                        className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:ring-2 focus:ring-champagne-gold focus:border-transparent"
                      />
                    </div>

                    {/* Terms */}
                    <div className="bg-white/10 rounded-lg p-6">
                      <p className="text-white/70 text-sm mb-4">
                        We will make every effort to confirm service on your requested date and time. 
                        Bookings are not confirmed until you receive a confirmation email from our system 
                        (usually within a few hours). By clicking the Book Now button you are agreeing to our{' '}
                        <a href="/terms" className="text-champagne-gold hover:underline">Terms of Service</a> and{' '}
                        <a href="/privacy" className="text-champagne-gold hover:underline">Privacy Policy</a>.
                      </p>
                    </div>

                    <div className="flex space-x-4">
                      <button
                        onClick={() => setStep('details')}
                        className="flex-1 bg-white/20 text-white py-3 px-4 rounded-lg font-inter font-medium hover:bg-white/30 transition-colors duration-200"
                      >
                        Back
                      </button>
                      <button
                        onClick={handleBooking}
                        disabled={loading}
                        className="flex-1 bg-champagne-gold text-white py-3 px-4 rounded-lg font-inter font-medium hover:bg-champagne-gold/90 transition-colors duration-200 flex items-center justify-center space-x-2"
                      >
                        {loading ? (
                          <span>Processing...</span>
                        ) : (
                          <>
                            <CheckCircle className="w-5 h-5" />
                            <span>BOOK NOW</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingCheckout;