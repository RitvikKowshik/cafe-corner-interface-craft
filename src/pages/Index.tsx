
import React from 'react';
import Navbar from '@/components/cafe/Navbar';
import Footer from '@/components/cafe/Footer';
import Hero from '@/components/cafe/Hero';
import FeaturedItems from '@/components/cafe/FeaturedItems';
import AboutSection from '@/components/cafe/AboutSection';
import LocationSection from '@/components/cafe/LocationSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedItems />
        <AboutSection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
