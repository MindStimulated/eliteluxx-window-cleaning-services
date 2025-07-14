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
      id: 'choosing-local-cleaning-service',
      title: 'How to Choose the Right Local Cleaning Service for Your Home',
      excerpt: 'Finding the perfect cleaning service in your area can be overwhelming. Learn the key factors to consider when selecting a local cleaning company.',
      content: `
When searching for a local cleaning service, it's important to consider several key factors to ensure you make the best choice for your home and family.

**1. Research Local Companies**
Start by researching cleaning companies in your area. Look for businesses with strong local presence and positive community reputation. Local companies often provide more personalized service and understand the specific needs of your neighborhood.

**2. Check Credentials and Insurance**
Ensure the cleaning service is properly licensed, bonded, and insured. This protects both you and the cleaning staff in case of accidents or damages. Ask to see their insurance certificates and licensing documentation.

**3. Read Reviews and Ask for References**
Check online reviews on Google, Yelp, and other platforms. Pay attention to recent reviews and how the company responds to feedback. Don't hesitate to ask for references from current clients in your area.

**4. Understand Their Services**
Different cleaning companies offer various services. Some focus on regular maintenance cleaning, while others specialize in deep cleaning or specific tasks. Make sure their services align with your needs.

**5. Get Detailed Quotes**
Request detailed quotes from multiple companies. Compare not just prices, but what's included in each service. Be wary of quotes that seem to good to be true – quality service requires fair compensation.

**6. Meet the Team**
If possible, meet the cleaning team before they start. This helps establish trust and allows you to communicate your specific preferences and any areas of concern in your home.

**7. Start with a Trial Period**
Consider starting with a one-time cleaning or short trial period to evaluate their work quality and professionalism before committing to a long-term arrangement.

By following these guidelines, you'll be well-equipped to choose a local cleaning service that meets your needs and provides excellent value for your investment.
      `,
      author: 'EliteLuxx Cleaning Team',
      date: '2024-12-15',
      readTime: '5 min read',
      category: 'Home Tips',
      image: 'https://khwmoizeigmddolwtrtl.supabase.co/storage/v1/object/public/eliteluxx-cleaning/images/website/residential-home-cleaning.jpg',
      icon: Home
    },
    {
      id: 'spring-cleaning-checklist',
      title: 'Ultimate Spring Cleaning Checklist for Coachella Valley Homes',
      excerpt: 'Spring is the perfect time for a deep clean. Our comprehensive checklist will help you tackle every corner of your home efficiently.',
      content: `
Spring cleaning in the Coachella Valley requires special attention to dust, sand, and the unique challenges of desert living. Here's your complete guide to refreshing your home for the season.

**Exterior Cleaning**
- Clean outdoor furniture and cushions
- Wash windows inside and out
- Power wash patios, driveways, and walkways
- Clean and inspect air conditioning units
- Remove winter debris from gutters
- Dust off ceiling fans and light fixtures

**Kitchen Deep Clean**
- Clean inside and outside of all appliances
- Wipe down cabinets and drawers
- Clean and organize pantry
- Scrub backsplash and behind appliances
- Deep clean sink and faucet
- Replace water filters

**Living Areas**
- Vacuum and flip couch cushions
- Clean baseboards and trim
- Dust all surfaces, including electronics
- Clean light switches and door handles
- Organize closets and donate unused items
- Steam clean carpets and rugs

**Bedrooms**
- Wash all bedding, including comforters
- Vacuum under beds and furniture
- Clean and organize dressers
- Wipe down all surfaces
- Clean mirrors and windows

**Bathrooms**
- Deep clean showers, tubs, and tiles
- Scrub and disinfect toilets completely
- Clean mirrors and medicine cabinets
- Replace shower curtains or clean glass doors
- Organize cabinets and drawers

**Desert-Specific Tasks**
- Pay extra attention to dust accumulation
- Clean air vents and replace filters more frequently
- Address sand buildup around entryways
- Check and clean pool areas if applicable

**Professional Help**
Consider hiring professionals for tasks like:
- Deep carpet cleaning
- Window washing
- Air duct cleaning
- Tile and grout restoration

Spring cleaning doesn't have to be overwhelming. Break these tasks into manageable chunks over several weekends, or hire a professional service to handle the heavy lifting while you focus on organizing and decluttering.
      `,
      author: 'Maria Rodriguez',
      date: '2024-12-12',
      readTime: '7 min read',
      category: 'Seasonal Tips',
      image: 'https://khwmoizeigmddolwtrtl.supabase.co/storage/v1/object/public/eliteluxx-cleaning/images/website/modern-palm-springs-home-cleaning.jpg',
      icon: Sparkles
    },
    {
      id: 'eco-friendly-cleaning-benefits',
      title: 'Benefits of Eco-Friendly Cleaning for Desert Homes',
      excerpt: 'Discover why green cleaning products are especially important in the Coachella Valley and how they protect your family and the environment.',
      content: `
Living in the Coachella Valley's desert environment makes eco-friendly cleaning practices even more important. Here's why green cleaning should be a priority for your home.

**Health Benefits**
Traditional cleaning products can release harmful chemicals into your home's air, which is particularly concerning in our sealed, air-conditioned desert homes. Eco-friendly products:
- Reduce indoor air pollution
- Minimize respiratory irritation
- Decrease skin and eye irritation
- Are safer around children and pets

**Environmental Impact**
The desert ecosystem is delicate and requires our protection:
- Green products don't contaminate groundwater
- They reduce chemical runoff into local waterways
- Biodegradable ingredients break down naturally
- Minimize packaging waste with concentrated formulas

**Effectiveness in Desert Conditions**
Contrary to popular belief, eco-friendly products are highly effective, especially for desert cleaning challenges:
- Natural ingredients tackle dust and sand buildup
- Plant-based surfactants cut through mineral deposits
- Essential oils provide natural antimicrobial properties
- Vinegar-based solutions handle hard water stains

**Cost-Effective Solutions**
Many eco-friendly cleaning solutions can be made at home:
- White vinegar for glass and mineral deposits
- Baking soda for scrubbing and deodorizing
- Lemon juice for natural bleaching and freshening
- Castile soap for general cleaning

**Professional Green Cleaning**
When hiring a cleaning service, look for companies that:
- Use certified eco-friendly products
- Offer green cleaning as standard practice
- Can provide ingredient lists for their products
- Use microfiber cloths and efficient equipment

**Making the Switch**
Transitioning to eco-friendly cleaning is easier than you think:
- Start with one product category at a time
- Read labels carefully to avoid "greenwashing"
- Look for third-party certifications
- Consider professional services that specialize in green cleaning

By choosing eco-friendly cleaning methods, you're protecting your family's health, preserving our beautiful desert environment, and often saving money in the long run. It's a win-win situation for everyone.
      `,
      author: 'David Chen',
      date: '2024-12-10',
      readTime: '6 min read',
      category: 'Green Living',
      image: 'https://khwmoizeigmddolwtrtl.supabase.co/storage/v1/object/public/eliteluxx-cleaning/images/website/home-cleaning-fine-artwork.jpg',
      icon: Shield
    },
    {
      id: 'preparing-home-for-cleaners',
      title: 'How to Prepare Your Home for Professional Cleaners',
      excerpt: 'Maximize the value of your cleaning service by properly preparing your home. Simple steps that ensure the best results.',
      content: `
Getting the most out of your professional cleaning service starts with proper preparation. Here's how to set yourself and your cleaning team up for success.

**Before the Cleaners Arrive**

**Declutter Key Areas**
- Clear surfaces like countertops, tables, and dressers
- Put away personal items and valuables
- Pick up toys, clothes, and miscellaneous items
- Make beds to allow access for proper cleaning

**Communicate Special Requests**
- Leave notes about areas needing extra attention
- Point out any delicate items or surfaces
- Mention recent spills or stains
- Indicate any off-limit areas or items

**Secure Valuables and Personal Items**
- Put away jewelry, cash, and important documents
- Secure or remove fragile decorative items
- Clear bathroom counters of personal toiletries
- Remove items from floors for thorough vacuuming

**Provide Access**
- Ensure cleaners can access all areas to be cleaned
- Leave keys or codes if you won't be home
- Inform cleaners about alarm systems
- Make sure pets are secured or arrangements are made

**Home-Specific Preparations**

**Kitchen**
- Load or empty dishwasher beforehand
- Clear sink of dishes
- Put away small appliances if deep cleaning is requested
- Remove items from stovetop

**Bathrooms**
- Remove personal items from shower/tub areas
- Clear medicine cabinet if cleaning is requested
- Put away personal toiletries
- Remove bath mats and shower curtains if needed

**Living Areas**
- Move lightweight furniture if floor cleaning is needed
- Clear coffee tables and side tables
- Put away books, magazines, and remote controls
- Ensure electronics are accessible for dusting

**Bedrooms**
- Clear nightstands and dressers
- Put away clothing and personal items
- Make sure closets are accessible if organizing is requested

**What NOT to Do**
- Don't feel obligated to pre-clean
- Don't hide messes – cleaners need to see what needs attention
- Don't move heavy furniture – leave that to the professionals
- Don't schedule other service visits on the same day

**Communication is Key**
- Provide emergency contact information
- Leave specific instructions in writing
- Ask about their preferred payment method
- Discuss timing and duration expectations

**After the Cleaning**
- Do a walk-through with the team leader
- Address any concerns immediately
- Ask about maintenance between visits
- Provide feedback for continuous improvement

Proper preparation ensures your cleaning team can focus on what they do best – making your home spotless. A little preparation goes a long way toward achieving exceptional results.
      `,
      author: 'Jennifer Martinez',
      date: '2024-12-08',
      readTime: '5 min read',
      category: 'Home Tips',
      image: 'https://khwmoizeigmddolwtrtl.supabase.co/storage/v1/object/public/eliteluxx-cleaning/images/website/corporate-office-cleaning.jpg',
      icon: Heart
    },
    {
      id: 'maintain-clean-home-between-visits',
      title: 'Simple Tips to Maintain a Clean Home Between Professional Visits',
      excerpt: 'Keep your home looking its best between professional cleanings with these easy daily and weekly maintenance tips.',
      content: `
Professional cleaning services provide deep, thorough cleaning, but maintaining that fresh, clean feeling between visits requires some simple daily habits. Here's how to keep your home looking its best.

**Daily Habits (10 minutes or less)**

**Kitchen Maintenance**
- Wipe down counters after cooking
- Load dishwasher after meals
- Sweep up crumbs and spills immediately
- Put items back in their designated places
- Quick sink rinse and wipe

**Living Areas**
- Make beds every morning
- Put items back where they belong
- Do a 5-minute pickup before bed
- Wipe down frequently touched surfaces
- Fluff couch cushions

**Bathrooms**
- Wipe down sink and counter after use
- Hang up towels properly
- Squeegee shower doors after use
- Put toiletries back in place
- Quick toilet bowl swish

**Weekly Maintenance Tasks**

**Monday - Laundry Day**
- Wash, dry, and fold one load
- Put clothes away immediately
- Strip and wash bed linens

**Tuesday - Kitchen Focus**
- Clean out refrigerator
- Wipe down appliance exteriors
- Mop kitchen floor
- Take out trash and recycling

**Wednesday - Bathroom Refresh**
- Clean mirrors and fixtures
- Replace towels with fresh ones
- Restock supplies
- Vacuum bathroom floors

**Thursday - Living Areas**
- Vacuum high-traffic areas
- Dust visible surfaces
- Organize common areas
- Water plants

**Friday - Bedroom Organization**
- Put away any clothes
- Vacuum bedroom floors
- Change and wash bed linens
- Organize nightstands

**Desert-Specific Maintenance**

**Daily Dust Control**
- Use door mats both inside and outside
- Keep windows and doors closed during windy days
- Change air filters regularly
- Wipe down surfaces prone to dust accumulation

**Weekly Deep Tasks**
- Vacuum air vents
- Clean ceiling fans
- Wipe down baseboards in main areas
- Check and clean outdoor furniture

**Smart Cleaning Strategies**

**The 15-Minute Rule**
- Set a timer for 15 minutes
- Focus on one room at a time
- Tackle the most visible areas first
- Stop when timer goes off

**One Touch Rule**
- Handle items only once when possible
- Put things away immediately after use
- Don't set things down "temporarily"
- Deal with mail and paperwork right away

**Involve the Whole Family**
- Assign age-appropriate tasks to children
- Make it fun with music or games
- Establish consequences for not maintaining spaces
- Celebrate successes together

**Products to Keep Handy**
- Microfiber cloths for quick dusting
- All-purpose cleaner for spot cleaning
- Paper towels or reusable cleaning cloths
- Vacuum for quick pickup

**When to Call the Professionals**
- Deep cleaning tasks (behind appliances, inside ovens)
- Carpet and upholstery cleaning
- Window washing
- Seasonal deep cleaning projects

Remember, the goal isn't perfection – it's maintaining the cleanliness achieved by your professional service. These simple habits will extend the life of your professional cleaning and keep your home feeling fresh and welcoming every day.
      `,
      author: 'Sarah Thompson',
      date: '2024-12-05',
      readTime: '8 min read',
      category: 'Maintenance',
      image: 'https://khwmoizeigmddolwtrtl.supabase.co/storage/v1/object/public/eliteluxx-cleaning/images/website/beautiful-home-cleaning-artwork-coachella-valley.jpg',
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
            Cleaning Tips & Insights
          </h2>
          <p className="font-inter text-base md:text-lg text-white/80 max-w-3xl mx-auto px-4">
            Expert advice and helpful tips to keep your home spotless and beautiful. From seasonal cleaning guides to maintenance tips.
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
            Need personalized cleaning advice for your home?
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
