import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Clock, CreditCard, Users, AlertTriangle, Lock } from 'lucide-react';

interface TermsOfServiceProps {
  onBack?: () => void;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ onBack }) => {
  const sections = [
    {
      icon: Shield,
      title: 'Our Satisfaction Guarantee',
      content: 'We offer a 24-hour, 100% Satisfaction Guarantee for all recurring customers (e.g., weekly, bi-weekly). If you\'re not satisfied with any area of your home, just call us within 24 hours, and we\'ll return to clean those areas for free.'
    },
    {
      icon: CreditCard,
      title: 'Prepayment Discount & Cancellation',
      content: 'Prepay for a year of cleaning service before your first recurring appointment (after the initial deep clean) and receive 5% off. You can cancel at any time by: Providing one cleaning\'s notice. Paying back the initial 5% discount. The 5% discount will be subtracted from the remaining annual amount returned to you.'
    },
    {
      icon: Clock,
      title: 'Scheduling & Arrival Times',
      content: 'Due to our flexible schedule, we can\'t commit to exact arrival times. We generally service homes Monday through Friday between 8:30 AM and 5:30 PM, and on Saturdays by appointment. While you may usually have an afternoon cleaning, there might be times we need to clean your home in the morning. We\'ll always do our best to accommodate your needs.'
    },
    {
      icon: AlertTriangle,
      title: 'Cancellations & Rescheduling',
      content: 'We require 24-hour notice to reschedule, skip, or cancel any cleaning. If you don\'t provide 24-hour notice, you\'ll be charged a $70.00 cancellation fee.'
    },
    {
      icon: Users,
      title: 'Employee Solicitation',
      content: 'Professional cleaners working for EliteLuxx Cleaning have agreed, in writing, that they or their family and friends will not accept direct employment from any EliteLuxx Cleaning customer, except upon payment of an exit fee. If you prefer to hire a current or former employee directly, a $1740.00 referral fee will be charged.'
    },
    {
      icon: Lock,
      title: 'Confidentiality & Security',
      content: 'EliteLuxx Cleaning agrees to keep all client details confidential and secure all keys entrusted to our care. If you provide a key to EliteLuxx Cleaning, please ensure your home is accessible to us. If your home has a security system, please advise us of the entry code or have it disarmed.'
    }
  ];

  return (
    <section className="min-h-screen py-20 bg-white/80 backdrop-blur-sm">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://khwmoizeigmddolwtrtl.supabase.co/storage/v1/object/public/eliteluxx-cleaning/images/website/black-golf-marble-texture-background.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          {onBack && (
            <div className="flex items-center space-x-4 mb-6">
              <button
                onClick={onBack}
                className="flex items-center space-x-2 text-white hover:text-champagne-gold transition-colors duration-200"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-inter font-medium">Back</span>
              </button>
            </div>
          )}
          
          <div className="text-center">
            <h1 className="font-lora font-semibold text-4xl md:text-5xl text-white mb-4">
              Terms & Conditions
            </h1>
            <p className="font-inter text-lg text-white/90 max-w-3xl mx-auto">
              EliteLuxx Cleaning Service Agreement
            </p>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="frosted-glass rounded-2xl p-8 border border-white/20"
        >
          {/* Introduction */}
          <div className="mb-8">
            <p className="text-white/90 leading-relaxed mb-4">
              By agreeing to services with EliteLuxx Cleaning, you acknowledge and agree to the terms and conditions outlined below. 
              These terms, along with your confirmation letter and cleaning schedule, form the complete agreement between us. 
              If any part of this agreement is deemed invalid, the remaining terms will stay in full effect.
            </p>
            <p className="text-white/90 leading-relaxed mb-4">
              Please contact us if you have any questions about these terms and conditions. Your statutory rights are not affected. 
              We'll notify you in writing if our terms and conditions change.
            </p>
            <p className="text-champagne-gold font-medium">
              We stand by our service! You can cancel your service at any time by simply calling us. EliteLuxx Cleaning doesn't lock you into a contract.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white/10 rounded-lg p-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-champagne-gold/20 rounded-lg p-3 flex-shrink-0">
                    <section.icon className="w-6 h-6 text-champagne-gold" />
                  </div>
                  <div>
                    <h3 className="font-lora font-semibold text-xl text-white mb-3">
                      {section.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Terms */}
          <div className="mt-8 space-y-6">
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="font-lora font-semibold text-xl text-white mb-3">
                Recurring Service Cancellation
              </h3>
              <p className="text-white/80 leading-relaxed">
                If you book a recurring service (weekly, bi-weekly, or monthly) and then cancel after the first cleaning, 
                the one-time cleaning rate will be charged.
              </p>
            </div>

            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="font-lora font-semibold text-xl text-white mb-3">
                Payment Policy
              </h3>
              <p className="text-white/80 leading-relaxed mb-3">
                We have a "no check/charge credit card" policy. Payment is due in full on the day of the cleaning. 
                For your convenience, we accept all major credit cards, which will be charged at the time of cleaning. 
                Cancellation fees will also be charged to your credit card.
              </p>
              <p className="text-white/80 leading-relaxed">
                Any NSF (Non-Sufficient Funds) checks returned from your bank will incur an additional $30 fee, as allowed by law.
              </p>
            </div>

            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="font-lora font-semibold text-xl text-white mb-3">
                Supplies & Additional Services
              </h3>
              <p className="text-white/80 leading-relaxed mb-3">
                The cost of services includes reasonable supplies and equipment provided by EliteLuxx Cleaning. 
                Any jobs requiring extra supplies or equipment will be billed additionally.
              </p>
              <p className="text-white/80 leading-relaxed">
                Our teams are instructed to follow the requirements for the scheduled clean. If you'd like additional services performed, 
                please contact our office at least one business day in advance so we can schedule the extra work. 
                Changes in scheduling may result in changes to fees.
              </p>
            </div>

            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="font-lora font-semibold text-xl text-white mb-3">
                Distractions
              </h3>
              <p className="text-white/80 leading-relaxed mb-3">
                Please be aware that if our professional cleaners are subject to distractions that affect their ability to work, 
                we reserve the right to charge for extra time spent in your home. This includes pets, third parties, 
                or contractors interfering with our cleaners' duties.
              </p>
              <p className="text-white/80 leading-relaxed">
                If, for any reason, an EliteLuxx Cleaning employee feels their personal safety is in danger and needs to leave 
                the job site due to actions by you or others, you will remain liable for the full cost of the job.
              </p>
            </div>

            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="font-lora font-semibold text-xl text-white mb-3">
                Valuables & Damages
              </h3>
              <p className="text-white/80 leading-relaxed mb-3">
                Items of extreme value (monetary or sentimental) should be dusted or cleaned by the owner.
              </p>
              <p className="text-white/80 leading-relaxed mb-3">
                We assume no liability for damage or loss of items that are not properly secured or were previously damaged 
                before cleaning (e.g., heavy pictures hanging from thumbtacks, or dings in furniture that were there before we cleaned). 
                Furthermore, we will assume no liability for damage or loss caused by your negligence.
              </p>
              <p className="text-white/80 leading-relaxed">
                While we are professionals, we aren't miracle workers. Sometimes we're called in too late to correct existing damage, 
                or items may require a few cleanings to look their best. We'll work with you in the most cost-effective way 
                to try to remedy these areas in your home.
              </p>
            </div>

            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="font-lora font-semibold text-xl text-white mb-3">
                Infectious Diseases
              </h3>
              <p className="text-white/80 leading-relaxed">
                You agree to notify EliteLuxx Cleaning if any person in the household is suspected of contracting an infectious disease. 
                This notification must be as early as possible, but at least 24 hours before your scheduled visit. 
                EliteLuxx Cleaning reserves the right to cancel cleanings under such circumstances.
              </p>
            </div>

            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="font-lora font-semibold text-xl text-white mb-3">
                Cleaning Time & Payment
              </h3>
              <p className="text-white/80 leading-relaxed mb-3">
                Our cleaning plans are based on the average time required to clean. If your home is not in "average" condition 
                and takes more than one extra hour to clean, EliteLuxx Cleaning reserves the right to bill for the additional time spent.
              </p>
              <p className="text-white/80 leading-relaxed">
                Our purpose is to ensure you have a clean home. Therefore, payment is for the service provided, 
                not based on the amount of time your cleaning team spends at your home. We want our team to focus on ensuring 
                your home is clean, not on how many hours they work. Some homes may take longer than average; 
                some may take less time. Either way, your home will sparkle.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-white/20 text-center">
            <p className="text-white/60 text-sm">
              This agreement is effective as of the date of service booking and forms a complete agreement between 
              EliteLuxx Cleaning and the customer.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TermsOfService;