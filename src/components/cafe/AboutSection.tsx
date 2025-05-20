
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Coffee, MapPin, Users } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1747&q=80" 
                alt="Cozy cafe interior" 
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -bottom-8 -right-8 bg-cafe-brown p-4 rounded-lg shadow-lg hidden md:block">
                <p className="text-white font-serif text-lg">Serving since 2010</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-cafe-darkBrown">
              A Warm Welcome to Brew Haven
            </h2>
            
            <p className="mb-4 text-muted-foreground">
              We started with a simple idea: create a space where coffee lovers can enjoy exceptional brews in a cozy, welcoming environment. 
            </p>
            
            <p className="mb-8 text-muted-foreground">
              Our coffee beans are ethically sourced from sustainable farms around the world, and we take pride in our meticulous roasting process that brings out the unique character of each origin.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex gap-3">
                <div className="bg-cafe-light rounded-lg p-3">
                  <Coffee className="h-5 w-5 text-cafe-brown" />
                </div>
                <div>
                  <h3 className="font-serif font-medium text-cafe-darkBrown mb-1">Premium Coffee</h3>
                  <p className="text-sm text-muted-foreground">Sourced from the finest global farms</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="bg-cafe-light rounded-lg p-3">
                  <Users className="h-5 w-5 text-cafe-brown" />
                </div>
                <div>
                  <h3 className="font-serif font-medium text-cafe-darkBrown mb-1">Skilled Baristas</h3>
                  <p className="text-sm text-muted-foreground">Passionate experts in the craft</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="bg-cafe-light rounded-lg p-3">
                  <Clock className="h-5 w-5 text-cafe-brown" />
                </div>
                <div>
                  <h3 className="font-serif font-medium text-cafe-darkBrown mb-1">Extended Hours</h3>
                  <p className="text-sm text-muted-foreground">Open early until late evening</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="bg-cafe-light rounded-lg p-3">
                  <MapPin className="h-5 w-5 text-cafe-brown" />
                </div>
                <div>
                  <h3 className="font-serif font-medium text-cafe-darkBrown mb-1">Prime Location</h3>
                  <p className="text-sm text-muted-foreground">Conveniently located downtown</p>
                </div>
              </div>
            </div>
            
            <Button 
              className="bg-cafe-brown hover:bg-cafe-darkBrown text-white"
              asChild
            >
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
