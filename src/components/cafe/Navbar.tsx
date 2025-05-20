
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Coffee, Menu, ShoppingCart, X, Calendar } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { itemCount } = useCart();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-cafe-tan/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Coffee className="h-6 w-6 text-cafe-brown" />
          <span className="font-serif text-xl font-semibold text-cafe-brown">Brew Haven</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="font-medium text-cafe-darkBrown hover:text-cafe-brown transition-colors">
            Home
          </Link>
          <Link to="/menu" className="font-medium text-cafe-darkBrown hover:text-cafe-brown transition-colors">
            Menu
          </Link>
          <Link to="/about" className="font-medium text-cafe-darkBrown hover:text-cafe-brown transition-colors">
            About
          </Link>
          <Link to="/contact" className="font-medium text-cafe-darkBrown hover:text-cafe-brown transition-colors">
            Contact
          </Link>
          <Link to="/order-history" className="font-medium text-cafe-darkBrown hover:text-cafe-brown transition-colors">
            Orders
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative" asChild>
            <Link to="/cart">
              <ShoppingCart className="h-5 w-5 text-cafe-darkBrown" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-cafe-brown text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </Button>
          <Button variant="default" className="hidden md:flex bg-cafe-brown hover:bg-cafe-darkBrown text-white" asChild>
            <Link to="/menu">Order Now</Link>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            <Menu className="h-5 w-5 text-cafe-darkBrown" />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 pt-4 px-4 md:hidden">
          <div className="flex justify-between items-center mb-8">
            <Link to="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
              <Coffee className="h-6 w-6 text-cafe-brown" />
              <span className="font-serif text-xl font-semibold text-cafe-brown">Brew Haven</span>
            </Link>
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              <X className="h-5 w-5 text-cafe-darkBrown" />
            </Button>
          </div>
          <nav className="flex flex-col gap-4">
            <Link 
              to="/" 
              className="py-3 px-4 text-lg font-medium text-cafe-darkBrown hover:bg-cafe-light rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/menu" 
              className="py-3 px-4 text-lg font-medium text-cafe-darkBrown hover:bg-cafe-light rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </Link>
            <Link 
              to="/about" 
              className="py-3 px-4 text-lg font-medium text-cafe-darkBrown hover:bg-cafe-light rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="py-3 px-4 text-lg font-medium text-cafe-darkBrown hover:bg-cafe-light rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/order-history" 
              className="py-3 px-4 text-lg font-medium text-cafe-darkBrown hover:bg-cafe-light rounded-md flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="flex-grow">Orders</span>
              <Calendar className="h-5 w-5" />
            </Link>
            <Link 
              to="/cart" 
              className="py-3 px-4 text-lg font-medium text-cafe-darkBrown hover:bg-cafe-light rounded-md flex items-center justify-between"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Cart</span>
              {itemCount > 0 && (
                <span className="bg-cafe-brown text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
            <Button 
              variant="default" 
              className="mt-4 bg-cafe-brown hover:bg-cafe-darkBrown text-white w-full" 
              asChild
              onClick={() => setIsMenuOpen(false)}
            >
              <Link to="/menu">Order Now</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
