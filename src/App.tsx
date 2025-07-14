import { useState, useEffect, lazy, Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingBookingButton from './components/FloatingBookingButton';

// Lazy load service pages for better performance
const ResidentialWindows = lazy(() => import('./components/ResidentialWindows'));
const CommercialWindows = lazy(() => import('./components/CommercialWindows'));
const SolarPanelCleaning = lazy(() => import('./components/SolarPanelCleaning'));
const PressureWashing = lazy(() => import('./components/PressureWashing'));
const ScreenRepair = lazy(() => import('./components/ScreenRepair'));
const HighRiseWindows = lazy(() => import('./components/HighRiseWindows'));
const EmergencyService = lazy(() => import('./components/EmergencyWindowService'));

// Lazy load less frequently used pages
const ServicesPage = lazy(() => import('./components/ServicesPage'));
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
  propertyType: 'residential' | 'commercial';
  windowCount: number;
  stories: number;
  frequency: 'one-time' | 'weekly' | 'bi-weekly' | 'monthly';
  addOns: string[];
  serviceType: string;
  totalPrice: number;
}

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'services' | 'booking' | 'checkout' | 'terms' | 'privacy' | 'location' | 'blog' | 'blog-post' | 'contact' | 'residential-windows' | 'commercial-windows' | 'solar-panel-cleaning' | 'pressure-washing' | 'screen-repair' | 'high-rise-windows' | 'emergency-service'>('home');
  const [bookingData, setBookingData] = useState<BookingData | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const [selectedBlogPost, setSelectedBlogPost] = useState<string>('');

  const handleServiceClick = (serviceName: string) => {
    // For now, just scroll to services section or handle as needed
    console.log('Service clicked:', serviceName);
  };

  const handleBlogPostClick = (postId: string) => {
    setSelectedBlogPost(postId);
    setCurrentPage('blog-post');
  };

  const handleBackToBlog = () => {
    setCurrentPage('blog');
    setSelectedBlogPost('');
  };

  const handleNavigationClick = (page: 'blog' | 'contact' | 'services') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    setBookingData(null);
    setSelectedLocation('');
    setSelectedBlogPost('');
    // Scroll to top when returning to home
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAboutClick = () => {
    // Scroll to About section on home page
    const aboutElement = document.querySelector('#about');
    if (aboutElement) {
      aboutElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If not on home page, navigate to home first then scroll
      setCurrentPage('home');
      setTimeout(() => {
        const element = document.querySelector('#about');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
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

  if (currentPage === 'services') {
    return (
      <div className="min-h-screen">
        <Header onHomeClick={handleBackToHome} onNavigationClick={handleNavigationClick} />
        <Suspense fallback={<PageLoader />}>
          <ServicesPage 
            onBack={handleBackToHome}
            onBookingClick={() => {
              setCurrentPage('home');
            }}
          />
        </Suspense>
        <Footer onNavigationClick={handleNavigationClick} onAboutClick={handleAboutClick} />
      </div>
    );
  }

  if (currentPage === 'blog-post' && selectedBlogPost) {
    return (
      <div className="min-h-screen">
        <Header onHomeClick={handleBackToHome} onNavigationClick={handleNavigationClick} />
        <Suspense fallback={<PageLoader />}>
          <BlogPostDetail 
            postId={selectedBlogPost}
            onBack={handleBackToBlog}
            onContactClick={() => setCurrentPage('home')}
          />
        </Suspense>
        <Footer onNavigationClick={handleNavigationClick} onAboutClick={handleAboutClick} />
      </div>
    );
  }

  if (currentPage === 'blog') {
    return (
      <div className="min-h-screen">
        <Header onHomeClick={handleBackToHome} onNavigationClick={handleNavigationClick} />
        <Suspense fallback={<PageLoader />}>
          <Blog onPostClick={handleBlogPostClick} onContactClick={() => handleNavigationClick('contact')} />
        </Suspense>
        <Footer onNavigationClick={handleNavigationClick} onAboutClick={handleAboutClick} />
      </div>
    );
  }

  if (currentPage === 'contact') {
    return (
      <div className="min-h-screen">
        <Header onHomeClick={handleBackToHome} onNavigationClick={handleNavigationClick} />
        <div className="pt-20">
          <Contact />
        </div>
        <Footer onNavigationClick={handleNavigationClick} onAboutClick={handleAboutClick} />
      </div>
    );
  }

  // Service Pages
  if (currentPage === 'residential-windows') {
    return (
      <div className="min-h-screen">
        <Header onHomeClick={handleBackToHome} onNavigationClick={handleNavigationClick} />
        <Suspense fallback={<PageLoader />}>
          <ResidentialWindows 
            onBack={handleBackToHome}
            onBookingClick={() => {
              setCurrentPage('home');
            }}
          />
        </Suspense>
        <Footer onNavigationClick={handleNavigationClick} onAboutClick={handleAboutClick} />
      </div>
    );
  }

  if (currentPage === 'commercial-windows') {
    return (
      <div className="min-h-screen">
        <Header onHomeClick={handleBackToHome} onNavigationClick={handleNavigationClick} />
        <Suspense fallback={<PageLoader />}>
          <CommercialWindows 
            onBack={handleBackToHome}
            onBookingClick={() => {
              setCurrentPage('home');
            }}
          />
        </Suspense>
        <Footer onNavigationClick={handleNavigationClick} onAboutClick={handleAboutClick} />
      </div>
    );
  }

  if (currentPage === 'solar-panel-cleaning') {
    return (
      <div className="min-h-screen">
        <Header onHomeClick={handleBackToHome} onNavigationClick={handleNavigationClick} />
        <Suspense fallback={<PageLoader />}>
          <SolarPanelCleaning 
            onBack={handleBackToHome}
            onBookingClick={() => {
              setCurrentPage('home');
            }}
          />
        </Suspense>
        <Footer onNavigationClick={handleNavigationClick} onAboutClick={handleAboutClick} />
      </div>
    );
  }

  if (currentPage === 'pressure-washing') {
    return (
      <div className="min-h-screen">
        <Header onHomeClick={handleBackToHome} onNavigationClick={handleNavigationClick} />
        <Suspense fallback={<PageLoader />}>
          <PressureWashing 
            onBack={handleBackToHome}
            onBookingClick={() => {
              setCurrentPage('home');
            }}
          />
        </Suspense>
        <Footer onNavigationClick={handleNavigationClick} onAboutClick={handleAboutClick} />
      </div>
    );
  }

  if (currentPage === 'screen-repair') {
    return (
      <div className="min-h-screen">
        <Header onHomeClick={handleBackToHome} onNavigationClick={handleNavigationClick} />
        <Suspense fallback={<PageLoader />}>
          <ScreenRepair 
            onBack={handleBackToHome}
            onBookingClick={() => {
              setCurrentPage('home');
            }}
          />
        </Suspense>
        <Footer onNavigationClick={handleNavigationClick} onAboutClick={handleAboutClick} />
      </div>
    );
  }

  if (currentPage === 'high-rise-windows') {
    return (
      <div className="min-h-screen">
        <Header onHomeClick={handleBackToHome} onNavigationClick={handleNavigationClick} />
        <Suspense fallback={<PageLoader />}>
          <HighRiseWindows 
            onBack={handleBackToHome}
            onBookingClick={() => {
              setCurrentPage('home');
            }}
          />
        </Suspense>
        <Footer onNavigationClick={handleNavigationClick} onAboutClick={handleAboutClick} />
      </div>
    );
  }

  if (currentPage === 'emergency-service') {
    return (
      <div className="min-h-screen">
        <Header onHomeClick={handleBackToHome} onNavigationClick={handleNavigationClick} />
        <Suspense fallback={<PageLoader />}>
          <EmergencyService 
            onBack={handleBackToHome}
            onBookingClick={() => {
              setCurrentPage('home');
            }}
          />
        </Suspense>
        <Footer onNavigationClick={handleNavigationClick} onAboutClick={handleAboutClick} />
      </div>
    );
  }

  if (currentPage === 'terms') {
    return (
      <div className="min-h-screen">
        <Header onHomeClick={handleBackToHome} onNavigationClick={handleNavigationClick} />
        <Suspense fallback={<PageLoader />}>
          <TermsOfService onBack={handleBackToHome} />
        </Suspense>
        <Footer onNavigationClick={handleNavigationClick} onAboutClick={handleAboutClick} />
      </div>
    );
  }

  if (currentPage === 'privacy') {
    return (
      <div className="min-h-screen">
        <Header onHomeClick={handleBackToHome} onNavigationClick={handleNavigationClick} />
        <Suspense fallback={<PageLoader />}>
          <PrivacyPolicy onBack={handleBackToHome} />
        </Suspense>
        <Footer onNavigationClick={handleNavigationClick} onAboutClick={handleAboutClick} />
      </div>
    );
  }

  if (currentPage === 'location' && selectedLocation) {
    return (
      <div className="min-h-screen">
        <Header onHomeClick={handleBackToHome} onNavigationClick={handleNavigationClick} />
        <Suspense fallback={<PageLoader />}>
          <LocationQuote 
            location={selectedLocation}
            onBack={handleBackToHome}
          />
        </Suspense>
        <Footer onNavigationClick={handleNavigationClick} onAboutClick={handleAboutClick} />
      </div>
    );
  }

  if (currentPage === 'checkout' && bookingData) {
    return (
      <div className="min-h-screen">
        <Header onHomeClick={handleBackToHome} onNavigationClick={handleNavigationClick} />
      {/* <BookingCheckout 
        bookingData={bookingData}
        onBack={handleBackToBooking}
        onEditQuote={handleEditQuote}
      /> */}
        <Footer onNavigationClick={handleNavigationClick} onAboutClick={handleAboutClick} />
      </div>
    );
  }

  if (currentPage === 'booking') {
    return (
      <div className="min-h-screen">
        <Header onHomeClick={handleBackToHome} onNavigationClick={handleNavigationClick} />
      {/* <Booking 
        selectedService={selectedService} 
        onBack={handleBackToHome}
        onBookingComplete={handleBookingComplete}
      /> */}
        <Footer onNavigationClick={handleNavigationClick} onAboutClick={handleAboutClick} />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header onHomeClick={handleBackToHome} onNavigationClick={handleNavigationClick} />
      <Hero />
      <Services onServiceClick={handleServiceClick} />
      <Portfolio />
      <About />
      <Contact />
      <Footer onNavigationClick={handleNavigationClick} onAboutClick={handleAboutClick} />
      <FloatingBookingButton />
    </div>
  );
}

export default App;