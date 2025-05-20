
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/cafe/Navbar';
import Footer from '@/components/cafe/Footer';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { Calendar, Printer } from 'lucide-react';
import { 
  Table, 
  TableHeader, 
  TableBody, 
  TableRow, 
  TableHead, 
  TableCell 
} from '@/components/ui/table';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

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

const OrderHistory = () => {
  const [orders, setOrders] = useState<OrderDetails[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 5;
  const navigate = useNavigate();
  
  useEffect(() => {
    // Load orders from localStorage
    const loadOrders = () => {
      const savedOrders = localStorage.getItem('orderHistory');
      if (savedOrders) {
        setOrders(JSON.parse(savedOrders));
      }
    };
    
    loadOrders();
  }, []);
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  };
  
  const viewReceipt = (order: OrderDetails) => {
    // Store the order details in session storage and navigate to receipt page
    sessionStorage.setItem('orderDetails', JSON.stringify(order));
    navigate('/receipt');
  };
  
  // Pagination
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);
  const totalPages = Math.ceil(orders.length / ordersPerPage);
  
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-md border border-gray-100 p-8">
            <div className="flex flex-wrap justify-between items-center mb-8">
              <div>
                <h1 className="font-serif text-3xl font-bold text-cafe-darkBrown">Order History</h1>
                <p className="text-muted-foreground mt-1">View your previous orders</p>
              </div>
              
              <Button 
                variant="default" 
                className="bg-cafe-brown hover:bg-cafe-darkBrown mt-4 sm:mt-0"
                asChild
              >
                <Link to="/menu" className="flex items-center gap-2">
                  Order Again
                </Link>
              </Button>
            </div>
            
            {orders.length === 0 ? (
              <div className="text-center py-12">
                <Calendar className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="font-medium text-xl mb-2">No Order History</h3>
                <p className="text-muted-foreground mb-6">You haven't placed any orders yet.</p>
                <Button 
                  variant="default" 
                  className="bg-cafe-brown hover:bg-cafe-darkBrown"
                  asChild
                >
                  <Link to="/menu">Browse Menu</Link>
                </Button>
              </div>
            ) : (
              <>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Total</TableHead>
                      <TableHead>Items</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {currentOrders.map((order) => (
                      <TableRow key={order.orderId}>
                        <TableCell className="font-medium">#{order.orderId}</TableCell>
                        <TableCell>{formatDate(order.orderDate)}</TableCell>
                        <TableCell>${order.total.toFixed(2)}</TableCell>
                        <TableCell>{order.items.length}</TableCell>
                        <TableCell className="text-right">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => viewReceipt(order)}
                            className="flex items-center gap-1"
                          >
                            <Printer className="h-3.5 w-3.5" />
                            <span>View Receipt</span>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                
                {orders.length > ordersPerPage && (
                  <Pagination className="mt-6">
                    <PaginationContent>
                      {currentPage > 1 && (
                        <PaginationItem>
                          <PaginationPrevious onClick={() => paginate(currentPage - 1)} />
                        </PaginationItem>
                      )}
                      
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <PaginationItem key={page}>
                          <PaginationLink
                            isActive={page === currentPage}
                            onClick={() => paginate(page)}
                          >
                            {page}
                          </PaginationLink>
                        </PaginationItem>
                      ))}
                      
                      {currentPage < totalPages && (
                        <PaginationItem>
                          <PaginationNext onClick={() => paginate(currentPage + 1)} />
                        </PaginationItem>
                      )}
                    </PaginationContent>
                  </Pagination>
                )}
              </>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrderHistory;
