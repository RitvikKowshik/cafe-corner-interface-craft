
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative h-[70vh] min-h-[500px] flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 relative text-white">
        <div className="max-w-2xl">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Experience Coffee <br/> Like Never Before
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-lg">
            Handcrafted coffee made with passion, served in a warm and inviting atmosphere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-cafe-brown hover:bg-cafe-darkBrown text-white border-2 border-cafe-brown hover:border-cafe-darkBrown"
              asChild
            >
              <Link to="/menu">View Our Menu</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-cafe-darkBrown"
              asChild
            >
              <Link to="/about">About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
