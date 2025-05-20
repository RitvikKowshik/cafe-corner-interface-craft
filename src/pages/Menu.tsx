
import React from 'react';
import Navbar from '@/components/cafe/Navbar';
import Footer from '@/components/cafe/Footer';
import MenuSection from '@/components/cafe/MenuSection';

const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-cafe-darkBrown text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Our Menu</h1>
            <p className="max-w-xl mx-auto text-white/80">
              Discover our full range of beverages and food items, crafted with care and premium ingredients
            </p>
          </div>
        </div>
        <MenuSection />
      </main>
      <Footer />
    </div>
  );
};

export default Menu;
