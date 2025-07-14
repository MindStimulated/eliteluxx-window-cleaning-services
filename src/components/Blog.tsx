import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight, Home, Sparkles, Shield, Heart, Star } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  icon: React.ElementType;
}

interface BlogProps {
  onPostClick?: (postId: string) => void;
  onContactClick?: () => void;
}

const Blog: React.FC<BlogProps> = ({ onPostClick, onContactClick }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const blogPosts: BlogPost[] = [
    {
      id: 'window-cleaning-palm-springs-desert',
      title: 'Why Window Cleaning is Essential for Palm Springs Desert Homes',
      excerpt: 'Desert living brings unique challenges for maintaining crystal-clear windows. Learn why regular professional window cleaning is crucial in the Coachella Valley.',
      content: `
Living in the beautiful Palm Springs area of the Coachella Valley offers stunning desert landscapes and year-round sunshine, but it also presents unique challenges for maintaining clean, clear windows.

**Desert Dust and Sand Challenges**
The desert environment creates specific window cleaning needs:
- Fine dust particles settle on glass surfaces daily
- Wind storms can leave heavy sand deposits
- Mineral deposits from hard water create stubborn spots
- UV exposure can cause dirt to bake onto glass surfaces

**Benefits of Regular Window Cleaning**

**Enhanced Natural Light**
Clean windows allow maximum sunlight into your home:
- Improves indoor lighting and reduces electricity costs
- Creates a brighter, more welcoming atmosphere
- Showcases your beautiful desert views
- Reduces eye strain from poor lighting

**Energy Efficiency**
Dirty windows can impact your home's energy efficiency:
- Clean windows allow solar heat gain in winter
- Proper visibility reduces reliance on artificial lighting
- Clear glass helps maintain optimal indoor temperatures

**Property Value and Curb Appeal**
Well-maintained windows significantly impact your home's appearance:
- Clean windows enhance your home's exterior beauty
- First impressions matter for property value
- Regular maintenance prevents permanent damage
- Professional cleaning extends window lifespan

**Health and Indoor Air Quality**
Clean windows contribute to a healthier living environment:
- Reduces allergens that accumulate on dirty surfaces
- Improves indoor air circulation
- Creates a more pleasant living space
- Eliminates potential mold growth on window frames

**Professional vs. DIY Cleaning**

**Why Professional Cleaning is Worth It**
- Specialized equipment for hard-to-reach windows
- Professional-grade cleaning solutions
- Streak-free techniques and experience
- Safety equipment for second-story windows
- Insurance coverage for peace of mind

**Frequency Recommendations for Desert Homes**
- Residential windows: Every 2-3 months
- Commercial buildings: Monthly to bi-monthly
- After dust storms: Within 1-2 weeks
- Solar panels: Monthly for optimal efficiency

**Choosing the Right Window Cleaning Service**
Look for companies that understand desert conditions:
- Experience with hard water stain removal
- Eco-friendly cleaning solutions
- Proper insurance and licensing
- Local knowledge of desert challenges
- Positive reviews from Palm Springs area residents

Regular professional window cleaning isn't just about aesthetics – it's an investment in your home's value, energy efficiency, and your quality of life in this beautiful desert paradise.
      `,
      author: 'EliteLuxx Window Cleaning Team',
      date: '2025-01-10',
      readTime: '6 min read',
      category: 'Desert Living',
      image: '/eliteluxx-window-cleaning/Whisk_250ed65abe.jpg',
      icon: Home
    },
    {
      id: 'commercial-window-cleaning-coachella-valley',
      title: 'Commercial Window Cleaning: Boosting Business Appeal in the Coachella Valley',
      excerpt: 'First impressions matter in business. Discover how professional window cleaning can enhance your commercial property and attract customers in Palm Springs.',
      content: `
In the competitive business landscape of the Coachella Valley, every detail matters when it comes to attracting and retaining customers. Clean, sparkling windows can make a significant difference in your business's success.

**The Business Case for Clean Windows**

**First Impressions Drive Sales**
Your storefront windows are often the first thing potential customers notice:
- Clean windows suggest attention to detail and professionalism
- Dirty windows can deter customers before they enter
- Clear glass showcases your products and services effectively
- Professional appearance builds trust and credibility

**Enhanced Visibility and Branding**
Clean windows improve your business visibility:
- Better display of merchandise and signage
- Improved natural lighting reduces electricity costs
- Clear views into your business create welcoming atmosphere
- Professional appearance supports brand image

**Industry-Specific Benefits**

**Retail Establishments**
- Showcase products more effectively
- Create inviting window displays
- Improve customer shopping experience
- Increase foot traffic and sales

**Restaurants and Cafes**
- Display inviting interior atmosphere
- Show cleanliness and attention to hygiene
- Create appetizing dining environment
- Attract customers with clear views of offerings

**Office Buildings**
- Project professional corporate image
- Improve employee productivity with better natural light
- Enhance property value and tenant satisfaction
- Create positive impression for clients and visitors

**Hotels and Resorts**
- Showcase beautiful interior spaces
- Maintain luxury appearance standards
- Improve guest experience and satisfaction
- Support premium pricing and reputation

**Challenges in Desert Commercial Cleaning**

**Frequent Dust Accumulation**
Desert conditions require more frequent cleaning:
- Daily dust buildup affects visibility
- Wind storms create heavy deposits
- High traffic areas collect more dirt
- Professional equipment needed for thorough cleaning

**Hard Water Issues**
Palm Springs area water creates specific challenges:
- Mineral deposits form quickly on glass
- Standard cleaning methods may not remove buildup
- Professional techniques and solutions required
- Regular maintenance prevents permanent damage

**Safety Considerations**
Commercial window cleaning requires expertise:
- Multi-story buildings need specialized equipment
- Safety protocols protect workers and property
- Insurance coverage protects business owners
- Professional training ensures quality results

**ROI of Professional Window Cleaning**

**Cost-Effective Marketing**
Regular window cleaning is affordable marketing:
- Less expensive than traditional advertising
- Continuous 24/7 business promotion
- Attracts customers without ongoing costs
- Builds positive brand reputation

**Employee Productivity**
Clean windows improve workplace environment:
- Better natural lighting reduces eye strain
- Pleasant work environment boosts morale
- Professional atmosphere enhances productivity
- Reduced sick days from better air quality

**Choosing Professional Services**

**What to Look For**
- Experience with commercial properties
- Proper licensing and insurance
- Flexible scheduling around business hours
- Understanding of desert cleaning challenges
- Competitive pricing and service contracts

**Service Frequency Recommendations**
- High-traffic retail: Weekly to bi-weekly
- Office buildings: Monthly
- Restaurants: Bi-weekly to monthly
- Hotels: Weekly (lobby areas), monthly (guest rooms)

Investing in regular professional window cleaning is a smart business decision that pays dividends in customer attraction, employee satisfaction, and overall business success in the competitive Coachella Valley market.
      `,
      author: 'Maria Rodriguez',
      date: '2025-01-08',
      readTime: '7 min read',
      category: 'Business Tips',
      image: '/eliteluxx-window-cleaning/Whisk_757d642e65.jpg',
      icon: Sparkles
    },
    {
      id: 'solar-panel-cleaning-efficiency',
      title: 'Solar Panel Cleaning: Maximizing Energy Efficiency in the Desert Sun',
      excerpt: 'Dirty solar panels can reduce efficiency by up to 25%. Learn how proper cleaning maintains peak performance and saves money in sunny Palm Springs.',
      content: `
The Coachella Valley's abundant sunshine makes it ideal for solar energy, but desert conditions also create unique challenges for maintaining peak solar panel performance. Regular cleaning is essential for maximizing your investment.

**Why Solar Panel Cleaning Matters**

**Efficiency Loss from Dirt and Debris**
Even thin layers of dust significantly impact performance:
- 1-3% efficiency loss from light dust accumulation
- 5-15% loss from moderate buildup
- Up to 25% reduction from heavy soiling
- Bird droppings can block entire panel sections

**Financial Impact**
Dirty panels directly affect your energy savings:
- Reduced electricity production increases utility bills
- Lower efficiency diminishes return on investment
- Potential warranty issues from neglect
- Decreased property value from poor maintenance

**Desert-Specific Challenges**

**Dust and Sand Accumulation**
The desert environment creates constant cleaning needs:
- Fine dust particles settle daily on panel surfaces
- Seasonal winds deposit heavy sand layers
- Dust storms can completely cover panels
- Morning dew combines with dust to create stubborn films

**Hard Water Mineral Deposits**
Palm Springs area water creates additional challenges:
- Sprinkler overspray leaves mineral spots
- Rain combines with dust to form difficult residues
- Standard cleaning may not remove mineral buildup
- Professional techniques prevent permanent damage

**Bird and Wildlife Issues**
Desert wildlife can impact panel cleanliness:
- Bird droppings concentrate heat and reduce efficiency
- Nesting materials can block drainage and airflow
- Pollen and organic debris accumulate over time
- Professional cleaning removes all contamination types

**Professional vs. DIY Cleaning**

**Safety Considerations**
Solar panel cleaning involves significant risks:
- Roof work requires proper safety equipment
- Hot panels can cause burns (up to 185°F)
- Electrical hazards require trained professionals
- Slippery conditions increase fall risks

**Proper Techniques and Equipment**
Professional cleaning ensures optimal results:
- Deionized water prevents new mineral deposits
- Soft brushes and squeegees prevent scratches
- Proper timing avoids thermal shock damage
- Specialized cleaning solutions for tough buildup

**Cleaning Frequency Recommendations**

**Seasonal Considerations**
- Spring: After windy season and pollen release
- Summer: Monthly during dust storm season
- Fall: Before peak sun season begins
- Winter: After occasional rain creates muddy deposits

**Location-Specific Factors**
- Near agriculture: More frequent cleaning needed
- High-traffic areas: Additional dust and pollution
- Open desert locations: Less frequent but thorough cleaning
- Pool areas: Watch for chemical spray contamination

**Maximizing Solar Investment**

**Monitoring System Performance**
Track efficiency to determine cleaning needs:
- Compare daily/monthly production rates
- Notice sudden drops in energy generation
- Use monitoring apps to track performance trends
- Schedule cleaning based on efficiency data

**Professional Service Benefits**
- Trained technicians ensure safe, effective cleaning
- Specialized equipment prevents panel damage
- Regular maintenance extends panel lifespan
- Documentation supports warranty requirements

**Cost-Benefit Analysis**

**Cleaning Investment vs. Energy Savings**
- Professional cleaning: $100-300 per session
- Efficiency gains: 15-25% production increase
- Annual savings: $200-800 depending on system size
- Return on investment: 3-6 months

**Long-Term Benefits**
- Extended panel lifespan (25+ years)
- Maintained warranty coverage
- Optimal energy production
- Increased property value

**Choosing Professional Services**

**What to Look For**
- Solar panel cleaning specialization
- Proper insurance and licensing
- Experience with desert conditions
- Eco-friendly cleaning methods
- Performance tracking and documentation

Regular professional solar panel cleaning is a smart investment that ensures you get maximum return from your solar energy system while protecting your valuable equipment in the challenging desert environment.
      `,
      author: 'David Chen',
      date: '2025-01-05',
      readTime: '8 min read',
      category: 'Solar Maintenance',
      image: '/eliteluxx-window-cleaning/Whisk_9f1381c172.jpg',
      icon: Shield
    },
    {
      id: 'window-maintenance-desert-homes',
      title: 'Year-Round Window Maintenance Tips for Coachella Valley Homeowners',
      excerpt: 'Keep your windows looking pristine between professional cleanings with these seasonal maintenance tips designed for desert living.',
      content: `
Maintaining beautiful, clear windows in the Coachella Valley requires understanding the unique challenges of desert living. Here's your guide to year-round window care.

**Understanding Desert Window Challenges**

**Seasonal Dust Patterns**
Each season brings different cleaning challenges:
- Winter: Minimal dust but occasional rain creates spots
- Spring: Heavy winds and dust storms
- Summer: Intense heat bakes dirt onto glass
- Fall: Pollen and debris accumulation

**Hard Water Issues**
Palm Springs area water requires special attention:
- High mineral content leaves white spots
- Sprinkler overspray creates permanent etching
- Standard cleaning may worsen mineral buildup
- Professional techniques needed for complete removal

**Daily Maintenance Tips**

**Simple Prevention Strategies**
- Close windows during windy conditions
- Use door mats to reduce tracked-in dirt
- Install water softeners to minimize mineral deposits
- Trim landscaping to prevent sprinkler overspray

**Quick Spot Cleaning**
Between professional cleanings, maintain visibility:
- Use microfiber cloths for light dust removal
- Clean bird droppings immediately to prevent etching
- Wipe down window sills weekly
- Address water spots before they set permanently

**Seasonal Maintenance Schedule**

**Spring Preparation (March-May)**
- Schedule professional cleaning after dust storm season
- Inspect window seals and weather stripping
- Clean window screens and tracks thoroughly
- Check for winter damage and schedule repairs

**Summer Protection (June-August)**
- Minimize midday cleaning to prevent thermal shock
- Focus on early morning or evening maintenance
- Increase cleaning frequency for high-exposure windows
- Monitor air conditioning condensation effects

**Fall Transition (September-November)**
- Prepare for occasional winter rains
- Clean windows before holiday entertaining season
- Check and clean rain gutters to prevent overflow
- Schedule deep cleaning before closing windows for winter

**Winter Care (December-February)**
- Take advantage of cooler temperatures for cleaning
- Address mineral buildup from holiday entertaining
- Prepare for spring by scheduling professional service
- Monitor for condensation and ventilation issues

**DIY Cleaning Best Practices**

**Safe Cleaning Solutions**
- White vinegar solution for mineral deposits
- Dish soap and water for general cleaning
- Avoid ammonia-based products in heat
- Use distilled water for final rinse

**Proper Techniques**
- Clean windows in shade when possible
- Work in small sections to prevent streaking
- Use horizontal strokes on inside, vertical outside
- Always rinse thoroughly to remove all residue

**When to Call Professionals**

**Signs You Need Professional Help**
- Persistent streaking despite proper cleaning
- Hard water stains that won't come off
- Windows on second story or difficult access areas
- Scratches or etching from improper cleaning
- Time constraints for regular maintenance

**Professional Service Benefits**
- Specialized equipment for desert conditions
- Safety training for multi-story homes
- Professional-grade cleaning solutions
- Experience with local water and dust challenges

**Protecting Your Investment**

**Window Frame Maintenance**
- Clean and lubricate window tracks regularly
- Check weatherstripping for wear and replacement
- Touch up paint on frames to prevent deterioration
- Inspect and replace damaged screens

**Long-Term Care**
- Document window condition for warranty purposes
- Keep records of professional cleaning dates
- Address small issues before they become major problems
- Consider window film for UV and heat protection

**Cost-Effective Strategies**

**Maximize Professional Service Value**
- Combine window cleaning with other services
- Schedule regular maintenance contracts for discounts
- Group neighborhood services for bulk pricing
- Time cleaning around seasonal needs

**Budget-Friendly Maintenance**
- Invest in quality cleaning tools
- Learn proper techniques to avoid damage
- Focus professional services on difficult areas
- Maintain between services with simple techniques

Regular maintenance combined with professional cleaning ensures your windows continue to showcase the beautiful desert views while protecting your home's value and appearance in the challenging Coachella Valley environment.
      `,
      author: 'Jennifer Martinez',
      date: '2025-01-03',
      readTime: '6 min read',
      category: 'Maintenance Tips',
      image: '/eliteluxx-window-cleaning/Whisk_361a79d79a.jpg',
      icon: Heart
    },
    {
      id: 'choosing-window-cleaning-service-palm-springs',
      title: 'How to Choose the Best Window Cleaning Service in Palm Springs',
      excerpt: 'Not all window cleaning services are created equal. Learn what to look for when selecting a professional service in the Coachella Valley.',
      content: `
With numerous window cleaning services available in the Palm Springs area, choosing the right company can seem overwhelming. Here's your guide to making an informed decision that ensures quality results and value.

**Understanding Local Needs**

**Desert-Specific Expertise**
The Coachella Valley presents unique challenges requiring specialized knowledge:
- Experience with hard water stain removal
- Understanding of dust storm cleanup needs
- Knowledge of desert-appropriate cleaning solutions
- Familiarity with local building styles and window types

**Seasonal Demand Patterns**
Choose services that understand local seasonal needs:
- Spring post-dust storm cleanup
- Summer heat considerations for cleaning timing
- Fall preparation for entertainment season
- Winter optimal cleaning conditions

**Key Factors to Evaluate**

**Licensing and Insurance**
Protect yourself and your property:
- Verify contractor's license through California CSLB
- Confirm general liability insurance coverage
- Ask for workers' compensation documentation
- Ensure bonding for employee theft protection

**Experience and Reputation**
Look for established local presence:
- Years in business serving Palm Springs area
- Local references and customer testimonials
- Better Business Bureau rating and accreditation
- Online reviews across multiple platforms

**Service Quality Indicators**
- Professional uniformed staff
- Clean, well-maintained equipment
- Detailed service descriptions and pricing
- Quality guarantee and satisfaction policies

**Services and Capabilities**

**Comprehensive Service Offerings**
Look for companies that provide:
- Interior and exterior window cleaning
- Screen cleaning and repair
- Window track and sill cleaning
- Hard water stain removal
- Emergency post-storm cleanup

**Specialized Services**
Consider additional capabilities:
- Solar panel cleaning
- Pressure washing services
- High-rise window access
- Commercial and residential experience

**Safety and Professionalism**

**Safety Standards**
Professional services should demonstrate:
- Proper ladder and safety equipment
- OSHA-compliant safety procedures
- Insurance coverage for high-access work
- Trained staff in safe cleaning practices

**Professional Presentation**
Quality indicators include:
- Uniformed, professional appearance
- Clean, branded vehicles and equipment
- Written estimates and service agreements
- Prompt, courteous communication

**Pricing and Value Considerations**

**Understanding Pricing Structure**
- Per-window vs. flat-rate pricing
- Additional charges for screens, tracks, or frames
- Frequency discounts for regular service
- Seasonal or weather-related surcharges

**Value vs. Cost**
Consider total value, not just price:
- Quality of work and results
- Reliability and punctuality
- Insurance and warranty coverage
- Long-term relationship potential

**Red Flags to Avoid**
- Door-to-door solicitation
- Unusually low pricing compared to competitors
- Lack of proper licensing or insurance
- No local references or established presence
- High-pressure sales tactics

**Questions to Ask Potential Services**

**Service-Related Questions**
- What cleaning methods and solutions do you use?
- How do you handle hard water stains common in our area?
- Do you clean interior and exterior surfaces?
- What's included in your standard service?
- How do you ensure streak-free results?

**Business Questions**
- How long have you been serving the Palm Springs area?
- Can you provide local references?
- What insurance coverage do you carry?
- Do you guarantee your work?
- What's your policy for weather cancellations?

**Making the Final Decision**

**Evaluation Criteria**
- Professional credentials and insurance
- Local experience and references
- Service quality and guarantees
- Pricing and value proposition
- Communication and customer service

**Trial Period Approach**
- Start with one-time service to evaluate quality
- Assess punctuality and professionalism
- Evaluate cleaning results and attention to detail
- Consider long-term service agreements after satisfaction

**Building Long-Term Relationships**

**Benefits of Regular Service**
- Consistent quality and familiarity with your property
- Preferred customer status and scheduling
- Seasonal maintenance planning
- Trust and reliability over time

**Communication Importance**
- Clear expectations and service specifications
- Feedback and continuous improvement
- Flexible scheduling around your needs
- Professional relationship development

Choosing the right window cleaning service is an investment in your property's appearance and value. Take time to research and evaluate options to find a service that understands desert conditions and provides exceptional results for your Palm Springs home or business.
      `,
      author: 'Sarah Thompson',
      date: '2025-01-01',
      readTime: '7 min read',
      category: 'Service Selection',
      image: '/eliteluxx-window-cleaning/Whisk_e389655d7c.jpg',
      icon: Star
    }
  ];

  const handlePostClick = (postId: string) => {
    if (onPostClick) {
      onPostClick(postId);
    }
  };

  return (
    <section className="py-16 md:py-20 bg-black/20" id="blog">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-lora font-semibold text-3xl md:text-4xl lg:text-5xl text-champagne-gold mb-4 md:mb-6">
            Window Cleaning Insights & Tips
          </h2>
          <p className="font-inter text-base md:text-lg text-white/80 max-w-3xl mx-auto px-4">
            Expert advice and helpful tips for maintaining crystal-clear windows in the Coachella Valley. From desert dust solutions to professional techniques.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={isMobile ? {} : { opacity: 0, y: 30 }}
              whileInView={isMobile ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => handlePostClick(post.id)}
              className="card-glass rounded-lg overflow-hidden shadow-3d hover:shadow-3d-hover transition-all duration-300 group cursor-pointer"
            >
              {/* Image Section */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-champagne-gold text-white">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="flex items-center space-x-4 mb-4 text-white/60">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span className="font-inter text-xs">
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span className="font-inter text-xs">{post.readTime}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <post.icon className="w-8 h-8 text-champagne-gold mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-lora font-medium text-xl md:text-2xl text-champagne-gold mb-3 leading-tight">
                    {post.title}
                  </h3>
                  <p className="font-inter text-sm md:text-base text-white/90 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/20">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-white/60" />
                    <span className="font-inter text-xs text-white/60">{post.author}</span>
                  </div>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePostClick(post.id);
                    }}
                    className="flex items-center space-x-1 font-inter font-medium text-sm text-champagne-gold hover:text-champagne-gold/80 transition-colors duration-200"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="font-inter text-white/70 mb-6">
            Need personalized window cleaning advice for your property?
          </p>
          <button 
            onClick={() => onContactClick && onContactClick()}
            className="btn-primary font-inter font-medium text-base md:text-lg"
          >
            Contact Our Experts
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
