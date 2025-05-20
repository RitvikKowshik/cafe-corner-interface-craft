
import React from 'react';
import { MapPin, Clock, Coffee } from 'lucide-react';

const LocationSection = () => {
  return (
    <section className="py-16 bg-cafe-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-cafe-darkBrown">
              Find Us
            </h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <MapPin className="h-6 w-6 text-cafe-brown" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium text-cafe-darkBrown mb-2">Our Location</h3>
                  <p className="text-muted-foreground mb-1">123 Coffee Street</p>
                  <p className="text-muted-foreground">Brewtown, BC 12345</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <Clock className="h-6 w-6 text-cafe-brown" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium text-cafe-darkBrown mb-2">Opening Hours</h3>
                  <p className="text-muted-foreground mb-1">Monday - Friday: 7:00 AM - 8:00 PM</p>
                  <p className="text-muted-foreground mb-1">Saturday: 8:00 AM - 9:00 PM</p>
                  <p className="text-muted-foreground">Sunday: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <Coffee className="h-6 w-6 text-cafe-brown" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium text-cafe-darkBrown mb-2">Contact</h3>
                  <p className="text-muted-foreground mb-1">Phone: (555) 123-4567</p>
                  <p className="text-muted-foreground">Email: hello@brewhaven.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              {/* This would be a real map in a production app */}
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80" 
                alt="Map location" 
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="bg-white p-4 rounded-b-lg shadow-lg -mt-2 relative">
              <p className="text-sm text-center">
                Convenient location with ample parking and nearby public transport
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
