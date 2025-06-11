
import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import ServicesOverview from '../components/home/ServicesOverview';
import AboutOverview from '../components/home/AboutOverview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ContactCTA from '../components/home/ContactCTA';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesOverview />
        <AboutOverview />
        <WhyChooseUs />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
};

export default Index;
