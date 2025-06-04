import { useEffect, useRef } from 'react';
import Header from '../component/header.tsx';
import Hero from '../component/hero';
import FeatureShowcase from '../component/featureShowcase.tsx';
import Footer from '../component/Footer.tsx';
import HowItWorks from '../component/HowItWorks.tsx';
import Testimonial from '../component/Testimonial.tsx';
import Teams from '../component/Teams.tsx';
import FAQ from '../component/FAQ.tsx';
import CallToAction from '../component/CallToAction.tsx';



const Homepage = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    // Only create observer if available (SSR safety)
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = '1';
            (entry.target as HTMLElement).style.transform = 'translateY(0)';
          }
        });
      }, observerOptions);

      observerRef.current = observer;

      // Observe all bento cards
      const bentoCards = document.querySelectorAll('.bento-card');
      bentoCards.forEach(card => {
        (card as HTMLElement).style.opacity = '0';
        (card as HTMLElement).style.transform = 'translateY(30px)';
        (card as HTMLElement).style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(card);
      });
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, []);

  

  return (
    <div className="bg-black text-white">
      
        {/* Header */}
        <Header />

        {/* Hero Section - Bento Grid */}
        <Hero />

        {/* Features Showcase - Bento Grid */}
        <FeatureShowcase />

        {/* How It Works */}
        <HowItWorks />
        
        {/* Testimonials */}
        <Testimonial />

        {/* Trust & Team */}
        <Teams />

        {/* FAQ */}
        <FAQ />

        {/* Final CTA */}
        <CallToAction />    
        {/* Footer */}
        <Footer />
    </div>
  );
};

export default Homepage;