import { useState, useEffect, lazy, Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingBookingButton from './components/FloatingBookingButton';
import Booking from './components/Booking';
import BookingCheckout from './components/BookingCheckout';

// Lazy load service pages for better performance
const ResidentialCleaning = lazy(() => import('./components/ResidentialCleaning'));
const CommercialCleaning = lazy(() => import('./components/CommercialCleaning'));
const MoveInOutCleaning = lazy(() => import('./components/MoveInOutCleaning'));
const EmergencyCleaning = lazy(() => import('./components/EmergencyCleaning'));
const PostConstructionCleaning = lazy(() => import('./components/PostConstructionCleaning'));
const LuxuryMaintenance = lazy(() => import('./components/LuxuryMaintenance'));
const ShortTermRentalCleaning = lazy(() => import('./components/ShortTermRentalCleaning'));

// Lazy load less frequently used pages
const TermsOfService = lazy(() => import('./components/TermsOfService'));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));
const LocationQuote = lazy(() => import('./components/LocationQuote'));
const Blog = lazy(() => import('./components/Blog'));
const BlogPostDetail = lazy(() => import('./components/BlogPostDetail'));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen bg-black/20 backdrop-blur-sm flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-champagne-gold mx-auto mb-4"></div>
      <p className="text-white/80 font-inter">Loading...</p>
    </div>
  </div>
);

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

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'booking' | 'checkout' | 'terms' | 'privacy' | 'location' | 'blog' | 'blog-post' | 'contact' | 'residential-cleaning' | 'commercial-cleaning' | 'move-in-out-cleaning' | 'emergency-cleaning' | 'post-construction-cleaning' | 'luxury-maintenance' | 'short-term-rental-cleaning'>('home');
  const [selectedService, setSelectedService] = useState<string>('');
  const [bookingData, setBookingData] = useState<BookingData | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const [selectedBlogPost, setSelectedBlogPost] = useState<string>('');

  const handleServiceClick = (serviceName: string) => {
    setSelectedService(serviceName);
    setCurrentPage('booking');
  };

  const handleServicePageClick = (servicePage: 'residential-cleaning' | 'commercial-cleaning' | 'move-in-out-cleaning' | 'emergency-cleaning' | 'post-construction-cleaning' | 'luxury-maintenance' | 'short-term-rental-cleaning') => {
    setCurrentPage(servicePage);
  };

  const handleBlogPostClick = (postId: string) => {
    setSelectedBlogPost(postId);
    setCurrentPage('blog-post');
  };

  const handleBackToBlog = () => {
    setCurrentPage('blog');
    setSelectedBlogPost('');
  };

  const handleNavigationClick = (page: 'blog' | 'contact') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    setSelectedService('');
    setBookingData(null);
    setSelectedLocation('');
    setSelectedBlogPost('');
    // Scroll to top when returning to home
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookingComplete = (data: BookingData) => {
    setBookingData(data);
    setCurrentPage('checkout');
  };

  const handleBackToBooking = () => {
    setCurrentPage('booking');
  };

  const handleEditQuote = () => {
    setCurrentPage('booking');
  };

  // Auto-scroll to top when switching pages
  useEffect(() => {
    if (currentPage !== 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentPage]);

  // Handle routing for terms, privacy, and locations
  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/terms') {
      setCurrentPage('terms');
    } else if (path === '/privacy') {
      setCurrentPage('privacy');
    } else if (path.startsWith('/location/')) {
      const locationSlug = path.replace('/location/', '');
      const formattedLocation = locationSlug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      setSelectedLocation(formattedLocation);
      setCurrentPage('location');
    }
  }, []);

  if (currentPage === 'blog-post' && selectedBlogPost) {
    return (
      <div className="min-h-screen">
        <Header onServicePageClick={handleServicePageClick} onHomeClick={handleBackToHome} onNavigationClick={handleNavigationClick} />
        <Suspense fallback={<PageLoader />}>
          <BlogPostDetail 
            postId={selectedBlogPost}
            onBack={handleBackToBlog}
            onContactClick={() => setCurrentPage('home')}
          />
        </Suspense>
        <Footer onServicePageClick={handleServicePageClick} />
      </div>
    );
  }

  if (currentPage === 'blog') {
    return (
      <div className="min-h-screen">
        <Header onServicePageClick={handleServicePageClick} onHomeClick={handleBackToHome} onNavigationClick={handleNavigationClick} />
        <Suspense fallback={<PageLoader />}>
          <Blog onPostClick={handleBlogPostClick} />
        </Suspense>
        <Footer onServicePageClick={handleServicePageClick} />
      </div>
    );
  }

  if (currentPage === 'contact') {
    return (
      <div className="min-h-screen">
        <Header onServicePageClick={handleServicePageClick} onHomeClick={handleBackToHome} onNavigationClick={handleNavigationClick} />
        <div className="pt-20">
          <Contact />
        </div>
        <Footer onServicePageClick={handleServicePageClick} />
      </div>
    );
  }

  // Service Pages
  if (currentPage === 'residential-cleaning') {
    return (
      <div className="min-h-screen">
        <Header onServicePageClick={handleServicePageClick} onHomeClick={handleBackToHome} onNavigationClick={handleNavigationClick} />
        <Suspense fallback={<PageLoader />}>
          <ResidentialCleaning 
            onBack={handleBackToHome}
            onBookingClick={() => {
              setSelectedService('Residential Cleaning');
              setCurrentPage('booking');
            }}
          />
        </Suspense>
        <Footer onServicePageClick={handleServicePageClick} />
      </div>
    );
  }

  if (currentPage === 'commercial-cleaning') {
    return (
      <div className="min-h-screen">
        <Header onServicePageClick={handleServicePageClick} onHomeClick={handleBackToHome} onNavigationClick={handleNavigationClick} />
        <Suspense fallback={<PageLoader />}>
          <CommercialCleaning 
            onBack={handleBackToHome}
            onBookingClick={() => {
              setSelectedService('Commercial Cleaning');
              setCurrentPage('booking');
            }}
          />
        </Suspense>
        <Footer onServicePageClick={handleServicePageClick} />
      </div>
    );
  }

  if (currentPage === 'move-in-out-cleaning') {
    return (
      <div className="min-h-screen">
        <Header onServicePageClick={handleServicePageClick} onHomeClick={handleBackToHome} onNavigationClick={handleNavigationClick} />
        <Suspense fallback={<PageLoader />}>
          <MoveInOutCleaning 
            onBack={handleBackToHome}
            onBookingClick={() => {
              setSelectedService('Move-in/Move-out Cleaning');
              setCurrentPage('booking');
            }}
          />
        </Suspense>
        <Footer onServicePageClick={handleServicePageClick} />
      </div>
    );
  }

  if (currentPage === 'emergency-cleaning') {
    return (
      <div className="min-h-screen">
        <Header onServicePageClick={handleServicePageClick} onHomeClick={handleBackToHome} onNavigationClick={handleNavigationClick} />
        <Suspense fallback={<PageLoader />}>
          <EmergencyCleaning 
            onBack={handleBackToHome}
            onBookingClick={() => {
              setSelectedService('Emergency Cleaning');
              setCurrentPage('booking');
            }}
          />
        </Suspense>
        <Footer onServicePageClick={handleServicePageClick} />
      </div>
    );
  }

  if (currentPage === 'post-construction-cleaning') {
    return (
      <div className="min-h-screen">
        <Header onServicePageClick={handleServicePageClick} onHomeClick={handleBackToHome} onNavigationClick={handleNavigationClick} />
        <Suspense fallback={<PageLoader />}>
          <PostConstructionCleaning 
            onBack={handleBackToHome}
            onBookingClick={() => {
              setSelectedService('Post-Construction Cleaning');
              setCurrentPage('booking');
            }}
          />
        </Suspense>
        <Footer onServicePageClick={handleServicePageClick} />
      </div>
    );
  }

  if (currentPage === 'luxury-maintenance') {
    return (
      <div className="min-h-screen">
        <Header onServicePageClick={handleServicePageClick} onHomeClick={handleBackToHome} onNavigationClick={handleNavigationClick} />
        <Suspense fallback={<PageLoader />}>
          <LuxuryMaintenance 
            onBack={handleBackToHome}
            onBookingClick={() => {
              setSelectedService('Luxury Maintenance');
              setCurrentPage('booking');
            }}
          />
        </Suspense>
        <Footer onServicePageClick={handleServicePageClick} />
      </div>
    );
  }

  if (currentPage === 'short-term-rental-cleaning') {
    return (
      <div className="min-h-screen">
        <Header onServicePageClick={handleServicePageClick} onHomeClick={handleBackToHome} onNavigationClick={handleNavigationClick} />
        <Suspense fallback={<PageLoader />}>
          <ShortTermRentalCleaning 
            onBack={handleBackToHome}
            onBookingClick={() => {
              setSelectedService('Short Term Rental Cleaning');
              setCurrentPage('booking');
            }}
          />
        </Suspense>
        <Footer onServicePageClick={handleServicePageClick} />
      </div>
    );
  }

  if (currentPage === 'terms') {
    return (
      <div className="min-h-screen">
        <Header onServicePageClick={handleServicePageClick} onHomeClick={handleBackToHome} onNavigationClick={handleNavigationClick} />
        <Suspense fallback={<PageLoader />}>
          <TermsOfService onBack={handleBackToHome} />
        </Suspense>
        <Footer onServicePageClick={handleServicePageClick} />
      </div>
    );
  }

  if (currentPage === 'privacy') {
    return (
      <div className="min-h-screen">
        <Header onServicePageClick={handleServicePageClick} onHomeClick={handleBackToHome} onNavigationClick={handleNavigationClick} />
        <Suspense fallback={<PageLoader />}>
          <PrivacyPolicy onBack={handleBackToHome} />
        </Suspense>
        <Footer onServicePageClick={handleServicePageClick} />
      </div>
    );
  }

  if (currentPage === 'location' && selectedLocation) {
    return (
      <div className="min-h-screen">
        <Header onServicePageClick={handleServicePageClick} onHomeClick={handleBackToHome} onNavigationClick={handleNavigationClick} />
        <Suspense fallback={<PageLoader />}>
          <LocationQuote 
            location={selectedLocation}
            onBack={handleBackToHome}
            onBookingComplete={handleBookingComplete}
          />
        </Suspense>
        <Footer onServicePageClick={handleServicePageClick} />
      </div>
    );
  }

  if (currentPage === 'checkout' && bookingData) {
    return (
      <div className="min-h-screen">
        <Header onServicePageClick={handleServicePageClick} onHomeClick={handleBackToHome} onNavigationClick={handleNavigationClick} />
        <BookingCheckout 
          bookingData={bookingData}
          onBack={handleBackToBooking}
          onEditQuote={handleEditQuote}
        />
        <Footer onServicePageClick={handleServicePageClick} />
      </div>
    );
  }

  if (currentPage === 'booking') {
    return (
      <div className="min-h-screen">
        <Header onServicePageClick={handleServicePageClick} onHomeClick={handleBackToHome} onNavigationClick={handleNavigationClick} />
        <Booking 
          selectedService={selectedService} 
          onBack={handleBackToHome}
          onBookingComplete={handleBookingComplete}
        />
        <Footer onServicePageClick={handleServicePageClick} />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header onServicePageClick={handleServicePageClick} onHomeClick={handleBackToHome} onNavigationClick={handleNavigationClick} />
      <Hero onBookingComplete={handleBookingComplete} />
      <Services onServiceClick={handleServiceClick} onServicePageClick={handleServicePageClick} />
      <Portfolio />
      <Blog onPostClick={handleBlogPostClick} />
      <About />
      <Contact />
      <Footer onServicePageClick={handleServicePageClick} />
      <FloatingBookingButton />
    </div>
  );
}

export default App;