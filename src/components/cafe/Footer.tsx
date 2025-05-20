
import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, Facebook, Instagram, MapPin, MessageSquare, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cafe-darkBrown text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="h-6 w-6" />
              <span className="font-serif text-xl font-semibold">Brew Haven</span>
            </div>
            <p className="text-cafe-light/80 mb-6 max-w-xs">
              A cozy corner where coffee dreams come true. Experience the finest brews and delightful treats.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-cafe-brown/30 hover:bg-cafe-brown p-2 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-cafe-brown/30 hover:bg-cafe-brown p-2 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-cafe-brown/30 hover:bg-cafe-brown p-2 rounded-full transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-cafe-light/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-cafe-light/80 hover:text-white transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-cafe-light/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-cafe-light/80 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-medium mb-4">Opening Hours</h3>
            <ul className="space-y-3">
              <li className="flex justify-between items-center text-cafe-light/80">
                <span>Monday - Friday</span>
                <span>7:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between items-center text-cafe-light/80">
                <span>Saturday</span>
                <span>8:00 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between items-center text-cafe-light/80">
                <span>Sunday</span>
                <span>8:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-medium mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex gap-2 items-center text-cafe-light/80">
                <MapPin className="h-5 w-5 text-cafe-brown" />
                <span>123 Coffee Street, Brewtown, BC</span>
              </li>
              <li className="flex gap-2 items-center text-cafe-light/80">
                <MessageSquare className="h-5 w-5 text-cafe-brown" />
                <span>hello@brewhaven.com</span>
              </li>
              <li className="flex gap-2 items-center text-cafe-light/80">
                <Coffee className="h-5 w-5 text-cafe-brown" />
                <span>(555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-cafe-brown/30 mt-12 pt-6 text-center text-cafe-light/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Brew Haven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
