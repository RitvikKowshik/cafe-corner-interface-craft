
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured: boolean;
}

const featuredItems: MenuItem[] = [
  {
    id: '1',
    name: 'Signature Latte',
    description: 'Our award-winning latte with house-made caramel and a hint of vanilla',
    price: 5.50,
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1337&q=80',
    category: 'coffee',
    featured: true
  },
  {
    id: '2',
    name: 'Blueberry Muffin',
    description: 'Freshly baked muffin loaded with juicy blueberries',
    price: 4.25,
    image: 'https://images.unsplash.com/photo-1607958996333-41784c70a7d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'pastry',
    featured: true
  },
  {
    id: '3',
    name: 'Cold Brew',
    description: 'Steeped for 24 hours for a smooth, rich flavor with low acidity',
    price: 4.75,
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80',
    category: 'coffee',
    featured: true
  },
  {
    id: '4',
    name: 'Avocado Toast',
    description: 'Artisan sourdough with smashed avocado, cherry tomatoes, and microgreens',
    price: 8.50,
    image: 'https://images.unsplash.com/photo-1603046891744-76e6481cf539?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
    category: 'food',
    featured: true
  }
];

const FeaturedItems = () => {
  const { toast } = useToast();

  const addToCart = (item: MenuItem) => {
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart.`,
      duration: 3000,
    });
  };

  return (
    <section className="py-16 bg-cafe-light">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-3 text-cafe-darkBrown">
          Featured Menu Items
        </h2>
        <p className="text-center text-cafe-brown mb-12 max-w-xl mx-auto">
          Discover our most popular items, crafted with premium ingredients and served with love
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredItems.map((item) => (
            <Card key={item.id} className="overflow-hidden border border-cafe-tan/20 menu-card">
              <div className="aspect-[4/3] relative">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="object-cover w-full h-full"
                />
              </div>
              <CardContent className="pt-4 pb-6 px-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif font-medium text-lg text-cafe-darkBrown">
                    {item.name}
                  </h3>
                  <span className="font-medium text-cafe-brown">
                    ${item.price.toFixed(2)}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {item.description}
                </p>
                <Button 
                  variant="default" 
                  size="sm" 
                  className="w-full bg-cafe-brown hover:bg-cafe-darkBrown"
                  onClick={() => addToCart(item)}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;
