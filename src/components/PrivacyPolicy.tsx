import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Database, Eye, Cookie, Mail, Trash2, AlertCircle, RefreshCw } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack?: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  const sections = [
    {
      icon: Database,
      title: 'Information We Collect',
      content: 'If you request or submit information to EliteLuxx Cleaning by sending an email via our Email Form or Booking Page, we may save your email address and any other information you provide. This information may be used to contact you in the future by mail, email, or phone to share information about EliteLuxx Cleaning\'s solutions or cleaning services that we believe may benefit you. Your email and other provided information will not be sold to any third party.'
    },
    {
      icon: Eye,
      title: 'Information Collected by Others',
      content: 'This policy addresses only the practices of the EliteLuxx Cleaning website and not those of sites that users access via links from our site. EliteLuxx Cleaning is not responsible for the information collection policies of other sites, nor for the practices employed by websites linked to or from our website, nor for the information or content contained therein. Links to other websites are often provided solely as pointers to information on topics that may be useful to our visitors. We advise users to review the privacy policy of other websites they visit.'
    },
    {
      icon: Cookie,
      title: 'Cookies',
      content: 'The EliteLuxx Cleaning website does not use cookies.'
    },
    {
      icon: Mail,
      title: 'Updating, Correcting, and Deleting Personal Information',
      content: 'If you would like to have your personal information removed from EliteLuxx Cleaning, please send an email with "Remove personal information" in the subject line to our contact email address. To update, change, or correct your personal information, please send an email with the appropriate changes.'
    },
    {
      icon: AlertCircle,
      title: 'Legally Compelled Disclosure of Information',
      content: 'EliteLuxx Cleaning may disclose information when legally compelled to do so. This means when we, in good faith, believe that the law requires it or for the protection of our legal rights.'
    },
    {
      icon: RefreshCw,
      title: 'Periodic Policy Changes',
      content: 'Please note that EliteLuxx Cleaning reviews its privacy practices from time to time (for example, to adapt to technology and/or legal changes), and these practices are subject to change. To ensure you\'re familiar with the most current version of our privacy policy, please bookmark and periodically review this page.'
    }
  ];

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
              Privacy Policy
            </h1>
            <p className="font-inter text-lg text-white/90 max-w-3xl mx-auto">
              How we protect and handle your personal information
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
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-champagne-gold/20 rounded-lg p-3">
                <Shield className="w-8 h-8 text-champagne-gold" />
              </div>
              <div>
                <h2 className="font-lora font-semibold text-2xl text-white">
                  Your Privacy Matters
                </h2>
                <p className="text-white/70">
                  Effective as of March 15th, 2017
                </p>
              </div>
            </div>
            
            <p className="text-white/90 leading-relaxed mb-4">
              Your privacy is incredibly important to us. EliteLuxx Cleaning respects your privacy and the reasons you provide us with your information. 
              We do not share, sell, or rent any of the information we collect to any third parties, and we have no intention of doing so in the future.
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

          {/* Contact Information */}
          <div className="mt-8 bg-white/10 rounded-lg p-6">
            <h3 className="font-lora font-semibold text-xl text-white mb-3">
              Contact Us About Privacy
            </h3>
            <p className="text-white/80 leading-relaxed mb-4">
              If you have any questions about this privacy policy or how we handle your personal information, 
              please don't hesitate to contact us:
            </p>
            <div className="space-y-2">
              <p className="text-white/80">
                <strong>Email:</strong> privacy@eliteluxx.com
              </p>
              <p className="text-white/80">
                <strong>Phone:</strong> (555) 123-4567
              </p>
              <p className="text-white/80">
                <strong>Mail:</strong> 123 Luxury Lane, Premium City, PC 12345
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-white/20">
            <div className="bg-champagne-gold/10 rounded-lg p-4 mb-4">
              <p className="text-champagne-gold font-medium text-sm">
                <strong>Important Note:</strong> This policy statement is made in the name of EliteLuxx Cleaning and is effective as of March 15th, 2017. 
                This statement does not create an agreement between EliteLuxx Cleaning and users, and as such, 
                does not create any legal rights for any party.
              </p>
            </div>
            
            <div className="text-center">
              <p className="text-white/60 text-sm">
                We are committed to protecting your privacy and will continue to review and update our practices 
                to ensure your personal information remains secure.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;