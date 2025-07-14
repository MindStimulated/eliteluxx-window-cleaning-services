import React from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, Users, Heart } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We set the highest standards in luxury cleaning, never compromising on quality or attention to detail.'
    },
    {
      icon: Shield,
      title: 'Trust',
      description: 'Fully bonded and insured professionals you can trust with your most valuable spaces and possessions.'
    },
    {
      icon: Users,
      title: 'Experience',
      description: 'Over 15 years of experience serving discerning clients with personalized, premium cleaning services.'
    },
    {
      icon: Heart,
      title: 'Care',
      description: 'We treat every space as if it were our own, bringing passion and care to every cleaning session.'
    },
  ];

  const team = [
    {
      name: 'Jon Brooks',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: '15+ years in luxury hospitality cleaning'
    },
    {
      name: 'Aric Rippy',
      role: 'Director of Operations',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Expert in commercial and residential services'
    },
    {
      name: 'Arianna Courte',
      role: 'Director of Marketing',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Certified in eco-friendly cleaning methods'
    },
  ];

  const stats = [
    { number: 500, label: 'Happy Clients', suffix: '+' },
    { number: 15, label: 'Years Experience', suffix: '+' },
    { number: 10000, label: 'Cleanings Completed', suffix: '+' },
    { number: 100, label: 'Satisfaction Rate', suffix: '%' },
  ];

  return (
    <section className="py-16 md:py-20 bg-black/20 backdrop-blur-sm" id="about">
      <div className="max-w-site mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-lora font-semibold text-3xl md:text-4xl lg:text-5xl text-white mb-4 md:mb-6">
            About EliteLuxx Cleaning
          </h2>
          <div className="max-w-4xl mx-auto px-4">
            <p className="font-inter text-base md:text-lg text-white/80 leading-relaxed mb-6 md:mb-8">
              Founded on the principles of excellence and reliability, EliteLuxx Cleaning has been the trusted choice 
              for luxury cleaning services for over a decade. We understand that your space is more than just 
              a location—it's your sanctuary, your workplace, your investment.
            </p>
            <p className="font-inter text-base md:text-lg text-white/80 leading-relaxed">
              Our team of trained professionals uses only the finest eco-friendly products and cutting-edge 
              techniques to deliver results that exceed expectations every time.
            </p>
          </div>
        </motion.div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-20">
          {/* Values Section*/}
          {values.map((value) => (
            <div
              key={value.title}
              className="text-center card-glass rounded-lg p-6 shadow-3d hover:shadow-3d-hover transition-all duration-300"
            >
              <div className="bg-champagne-gold/20 rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-6 h-6 md:w-8 md:h-8 text-champagne-gold" />
              </div>
              <h3 className="font-lora font-medium text-lg md:text-xl text-white mb-3">
                {value.title}
              </h3>
              <p className="font-inter text-sm md:text-base text-white/80 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8 md:mb-12">
            <h3 className="font-lora font-semibold text-2xl md:text-3xl lg:text-4xl text-white mb-4">
              Meet Our Leadership Team
            </h3>
            <p className="font-inter text-base md:text-lg text-white/80 max-w-2xl mx-auto px-4">
              Our experienced professionals are dedicated to maintaining the highest standards of service and excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="text-center card-glass rounded-lg p-6 shadow-3d hover:shadow-3d-hover transition-all duration-300"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover mx-auto shadow-elegant"
                    loading="lazy"
                  />
                </div>
                <h4 className="font-lora font-medium text-lg md:text-xl text-white mb-2">
                  {member.name}
                </h4>
                <p className="font-inter font-medium text-champagne-gold mb-3">
                  {member.role}
                </p>
                <p className="font-inter text-white/80 text-xs md:text-sm">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-20 card-glass rounded-lg p-6 md:p-8 lg:p-12 shadow-3d hover:shadow-3d-hover transition-all duration-300"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
              >
                <div 
                  className="font-lora font-semibold text-2xl md:text-3xl lg:text-4xl text-champagne-gold mb-2"
                >
                  <span>
                    <CountUpNumber 
                      end={stat.number} 
                      duration={2000} 
                      delay={index * 200 + 800}
                    />
                    {stat.suffix}
                  </span>
                </div>
                <div className="font-inter text-sm md:text-base text-white/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Count up animation component
const CountUpNumber: React.FC<{ end: number; duration: number; delay: number }> = ({ 
  end, 
  duration, 
  delay 
}) => {
  const [count, setCount] = React.useState(0);
  const [hasStarted, setHasStarted] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setHasStarted(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  React.useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [hasStarted, end, duration]);

  return <span>{count.toLocaleString()}</span>;
};

export default About;