
import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '@/components/cafe/Navbar';
import Footer from '@/components/cafe/Footer';
import { Button } from '@/components/ui/button';
import { Printer, FileText, Home } from 'lucide-react';

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface OrderDetails {
  orderId: string;
  orderDate: string;
  items: OrderItem[];
  subtotal: number;
  tax: number;
  total: number;
  customer: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  paymentMethod: 'card' | 'cash';
}

const Receipt = () => {
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
  const navigate = useNavigate();
  const receiptRef = useRef<HTMLDivElement>(null);
  
  // Format date function
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    }).format(date);
  };
  
  // Load order details from session storage
  useEffect(() => {
    const storedOrder = sessionStorage.getItem('orderDetails');
    
    if (storedOrder) {
      setOrderDetails(JSON.parse(storedOrder));
    } else {
      // If no order details, redirect to home
      navigate('/');
    }
  }, [navigate]);
  
  // Print receipt function
  const handlePrint = () => {
    if (receiptRef.current) {
      const printContents = receiptRef.current.innerHTML;
      const originalContents = document.body.innerHTML;
      
      document.body.innerHTML = `
        <html>
          <head>
            <title>Brew Haven - Order Receipt</title>
            <style>
              body { font-family: Arial, sans-serif; padding: 20px; }
              .receipt { max-width: 800px; margin: 0 auto; }
              .receipt-header { text-align: center; margin-bottom: 20px; }
              .receipt-items { border-top: 1px solid #eee; border-bottom: 1px solid #eee; padding: 20px 0; }
              .receipt-item { display: flex; justify-content: space-between; margin-bottom: 10px; }
              .receipt-total { margin-top: 20px; }
              .receipt-footer { margin-top: 30px; text-align: center; font-size: 14px; color: #666; }
              @media print {
                body { margin: 0; padding: 15px; }
              }
            </style>
          </head>
          <body>
            <div class="receipt">
              ${printContents}
            </div>
          </body>
        </html>
      `;
      
      window.print();
      document.body.innerHTML = originalContents;
    }
  };
  
  if (!orderDetails) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-md border border-gray-100 p-8">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="font-serif text-3xl font-bold text-cafe-darkBrown">Order Receipt</h1>
                <p className="text-muted-foreground mt-1">Thank you for your order!</p>
              </div>
              
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  onClick={handlePrint}
                  className="flex items-center gap-2"
                >
                  <Printer className="h-4 w-4" />
                  Print
                </Button>
                
                <Button 
                  variant="default" 
                  className="bg-cafe-brown hover:bg-cafe-darkBrown"
                  asChild
                >
                  <Link to="/" className="flex items-center gap-2">
                    <Home className="h-4 w-4" />
                    Home
                  </Link>
                </Button>
              </div>
            </div>
            
            <div ref={receiptRef}>
              <div className="flex flex-col items-center mb-8 receipt-header">
                <h2 className="font-serif text-2xl font-bold text-cafe-brown">Brew Haven</h2>
                <p className="text-cafe-darkBrown/70">123 Coffee Street, Brewville</p>
                <p className="text-cafe-darkBrown/70">Tel: (555) 123-4567</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="font-serif font-semibold text-lg mb-2 text-cafe-darkBrown">Order Details</h3>
                  <div className="space-y-1 text-sm">
                    <p><span className="font-medium">Order ID:</span> #{orderDetails.orderId}</p>
                    <p><span className="font-medium">Date:</span> {formatDate(orderDetails.orderDate)}</p>
                    <p><span className="font-medium">Payment Method:</span> {orderDetails.paymentMethod === 'card' ? 'Credit Card' : 'Cash on Delivery'}</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-serif font-semibold text-lg mb-2 text-cafe-darkBrown">Customer Information</h3>
                  <div className="space-y-1 text-sm">
                    <p><span className="font-medium">Name:</span> {orderDetails.customer.name}</p>
                    <p><span className="font-medium">Email:</span> {orderDetails.customer.email}</p>
                    <p><span className="font-medium">Phone:</span> {orderDetails.customer.phone}</p>
                    <p><span className="font-medium">Address:</span> {orderDetails.customer.address}</p>
                  </div>
                </div>
              </div>
              
              <h3 className="font-serif font-semibold text-lg mb-4 text-cafe-darkBrown">Order Items</h3>
              <div className="border-t border-b border-gray-100 py-4 mb-6 receipt-items">
                {orderDetails.items.map((item) => (
                  <div key={item.id} className="flex justify-between py-2 receipt-item">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-muted-foreground">${item.price.toFixed(2)} × {item.quantity}</p>
                    </div>
                    <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>
              
              <div className="ml-auto w-full md:w-1/2 receipt-total">
                <div className="flex justify-between mb-2">
                  <p>Subtotal</p>
                  <p>${orderDetails.subtotal.toFixed(2)}</p>
                </div>
                <div className="flex justify-between mb-2 text-sm text-muted-foreground">
                  <p>Tax (8%)</p>
                  <p>${orderDetails.tax.toFixed(2)}</p>
                </div>
                <div className="flex justify-between font-bold text-lg text-cafe-darkBrown mt-4">
                  <p>Total</p>
                  <p>${orderDetails.total.toFixed(2)}</p>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-dashed border-gray-200 text-center text-sm text-muted-foreground receipt-footer">
                <p>Thank you for your order! We hope to see you again soon.</p>
                <p className="mt-2">For any questions, please contact us at support@brewhaven.com</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            <Button
              variant="outline"
              asChild
              className="flex items-center gap-2 mr-4"
            >
              <Link to="/menu">
                Order More
              </Link>
            </Button>
            <Button 
              variant="default" 
              className="bg-cafe-brown hover:bg-cafe-darkBrown flex items-center gap-2"
              asChild
            >
              <Link to="/">
                <Home className="h-4 w-4" />
                Return Home
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Receipt;
