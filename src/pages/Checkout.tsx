
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/cafe/Navbar';
import Footer from '@/components/cafe/Footer';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

interface CheckoutFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  paymentMethod: 'card' | 'cash';
  cardNumber?: string;
  cardExpiry?: string;
  cardCvc?: string;
}

const Checkout = () => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<CheckoutFormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    paymentMethod: 'card',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Redirect to cart if empty
  React.useEffect(() => {
    if (cartItems.length === 0) {
      navigate('/cart');
    }
  }, [cartItems, navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePaymentMethodChange = (method: 'card' | 'cash') => {
    setFormData(prev => ({ ...prev, paymentMethod: method }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate order processing
    setTimeout(() => {
      // Generate unique order ID
      const orderId = Math.floor(100000 + Math.random() * 900000).toString();
      const orderDate = new Date().toISOString();
      
      // Store order information in session storage for receipt page
      sessionStorage.setItem('orderDetails', JSON.stringify({
        orderId,
        orderDate,
        items: cartItems,
        subtotal: cartTotal,
        tax: cartTotal * 0.08,
        total: cartTotal * 1.08,
        customer: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.address
        },
        paymentMethod: formData.paymentMethod
      }));
      
      // Clear the cart
      clearCart();
      
      // Show success toast
      toast({
        title: "Order placed successfully!",
        description: `Your order #${orderId} has been placed successfully.`,
        duration: 5000,
      });
      
      // Navigate to receipt page
      navigate('/receipt');
      
      setIsSubmitting(false);
    }, 1500);
  };

  const subtotal = cartTotal;
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  if (cartItems.length === 0) {
    return null; // Redirect will happen in useEffect
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-8 text-cafe-darkBrown">Checkout</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Checkout Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h2 className="font-serif text-xl font-bold mb-4 text-cafe-darkBrown">Contact Information</h2>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleInputChange} 
                      required 
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      value={formData.email} 
                      onChange={handleInputChange} 
                      required 
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      type="tel" 
                      value={formData.phone} 
                      onChange={handleInputChange} 
                      required 
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="address">Delivery Address</Label>
                    <Input 
                      id="address" 
                      name="address" 
                      value={formData.address} 
                      onChange={handleInputChange} 
                      required 
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h2 className="font-serif text-xl font-bold mb-4 text-cafe-darkBrown">Payment Method</h2>
                
                <div className="space-y-4">
                  <div className="flex space-x-4">
                    <div 
                      className={`flex-1 p-4 border rounded-lg cursor-pointer ${formData.paymentMethod === 'card' ? 'border-cafe-brown bg-cafe-light' : 'border-gray-200'}`}
                      onClick={() => handlePaymentMethodChange('card')}
                    >
                      <div className="flex items-center space-x-2">
                        <input 
                          type="radio" 
                          name="paymentMethod" 
                          id="card" 
                          checked={formData.paymentMethod === 'card'} 
                          onChange={() => handlePaymentMethodChange('card')}
                        />
                        <Label htmlFor="card" className="cursor-pointer">Credit Card</Label>
                      </div>
                    </div>
                    
                    <div 
                      className={`flex-1 p-4 border rounded-lg cursor-pointer ${formData.paymentMethod === 'cash' ? 'border-cafe-brown bg-cafe-light' : 'border-gray-200'}`}
                      onClick={() => handlePaymentMethodChange('cash')}
                    >
                      <div className="flex items-center space-x-2">
                        <input 
                          type="radio" 
                          name="paymentMethod" 
                          id="cash" 
                          checked={formData.paymentMethod === 'cash'} 
                          onChange={() => handlePaymentMethodChange('cash')}
                        />
                        <Label htmlFor="cash" className="cursor-pointer">Cash on Delivery</Label>
                      </div>
                    </div>
                  </div>
                  
                  {formData.paymentMethod === 'card' && (
                    <div className="space-y-4 mt-4">
                      <div>
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input 
                          id="cardNumber" 
                          name="cardNumber" 
                          placeholder="1234 5678 9012 3456" 
                          value={formData.cardNumber || ''} 
                          onChange={handleInputChange} 
                          required 
                          className="mt-1"
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="cardExpiry">Expiry Date</Label>
                          <Input 
                            id="cardExpiry" 
                            name="cardExpiry" 
                            placeholder="MM/YY" 
                            value={formData.cardExpiry || ''} 
                            onChange={handleInputChange} 
                            required 
                            className="mt-1"
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="cardCvc">CVC</Label>
                          <Input 
                            id="cardCvc" 
                            name="cardCvc" 
                            placeholder="123" 
                            value={formData.cardCvc || ''} 
                            onChange={handleInputChange} 
                            required 
                            className="mt-1"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-cafe-brown hover:bg-cafe-darkBrown text-white"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Processing...' : 'Place Order'}
              </Button>
            </form>
            
            {/* Order Summary */}
            <div>
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 sticky top-24">
                <h2 className="font-serif text-xl font-bold mb-4 text-cafe-darkBrown">Order Summary</h2>
                
                <div className="max-h-96 overflow-y-auto mb-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 flex-shrink-0">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-full object-cover rounded-md"
                          />
                        </div>
                        <div>
                          <p className="font-medium text-cafe-darkBrown">{item.name}</p>
                          <p className="text-xs text-muted-foreground">${item.price.toFixed(2)} × {item.quantity}</p>
                        </div>
                      </div>
                      <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-dashed border-gray-200 pt-4 mb-6">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground mt-2">
                    <span>Tax (8%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg mt-4 text-cafe-darkBrown">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
