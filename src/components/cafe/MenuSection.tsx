
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
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
}

const menuItems: MenuItem[] = [
  // Coffee
  {
    id: 'c1',
    name: 'Espresso',
    description: 'Single shot of our premium dark roast blend',
    price: 3.50,
    image: 'https://images.unsplash.com/photo-1515283709260-ee29296f997a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
    category: 'coffee'
  },
  {
    id: 'c2',
    name: 'Cappuccino',
    description: 'Equal parts espresso, steamed milk, and milk foam',
    price: 4.75,
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
    category: 'coffee'
  },
  {
    id: 'c3',
    name: 'Cold Brew',
    description: 'Steeped for 24 hours for a smooth, rich flavor with low acidity',
    price: 4.75,
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80',
    category: 'coffee'
  },
  {
    id: 'c4',
    name: 'Signature Latte',
    description: 'Our award-winning latte with house-made caramel and a hint of vanilla',
    price: 5.50,
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1337&q=80',
    category: 'coffee'
  },
  
  // Pastries
  {
    id: 'p1',
    name: 'Blueberry Muffin',
    description: 'Freshly baked muffin loaded with juicy blueberries',
    price: 4.25,
    image: 'https://images.unsplash.com/photo-1607958996333-41784c70a7d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'pastry'
  },
  {
    id: 'p2',
    name: 'Almond Croissant',
    description: 'Buttery croissant filled with almond cream',
    price: 4.75,
    image: 'https://images.unsplash.com/photo-1623334044303-241021148842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
    category: 'pastry'
  },
  {
    id: 'p3',
    name: 'Cinnamon Roll',
    description: 'Warm, gooey cinnamon roll with cream cheese frosting',
    price: 5.25,
    image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1235&q=80',
    category: 'pastry'
  },
  {
    id: 'p4',
    name: 'Chocolate Chip Cookie',
    description: 'Crispy outside, chewy inside with premium dark chocolate',
    price: 3.75,
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80',
    category: 'pastry'
  },
  
  // Food
  {
    id: 'f1',
    name: 'Avocado Toast',
    description: 'Artisan sourdough with smashed avocado, cherry tomatoes, and microgreens',
    price: 8.50,
    image: 'https://images.unsplash.com/photo-1603046891744-76e6481cf539?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
    category: 'food'
  },
  {
    id: 'f2',
    name: 'Breakfast Sandwich',
    description: 'Cage-free egg, cheddar, spinach, and house-made aioli on a brioche bun',
    price: 9.75,
    image: 'https://images.unsplash.com/photo-1550507992-eb63ffee0847?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    category: 'food'
  },
  {
    id: 'f3',
    name: 'Quinoa Bowl',
    description: 'Hearty quinoa with roasted vegetables, feta, and tahini dressing',
    price: 10.50,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80',
    category: 'food'
  },
  {
    id: 'f4',
    name: 'Chicken Pesto Wrap',
    description: 'Grilled chicken, pesto, mozzarella, and roasted red peppers',
    price: 11.25,
    image: 'https://images.unsplash.com/photo-1603532648955-039310d9ed75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    category: 'food'
  }
];

const MenuSection = () => {
  const [activeTab, setActiveTab] = useState('coffee');
  const { toast } = useToast();

  const addToCart = (item: MenuItem) => {
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart.`,
      duration: 3000,
    });
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-3 text-cafe-darkBrown">
          Our Menu
        </h2>
        <p className="text-center text-cafe-brown mb-12 max-w-xl mx-auto">
          Explore our carefully curated menu offerings, crafted with the finest ingredients
        </p>
        
        <Tabs defaultValue="coffee" className="w-full" onValueChange={setActiveTab} value={activeTab}>
          <div className="flex justify-center mb-10">
            <TabsList className="bg-cafe-cream">
              <TabsTrigger 
                value="coffee" 
                className="data-[state=active]:bg-cafe-brown data-[state=active]:text-white px-6"
              >
                Coffee
              </TabsTrigger>
              <TabsTrigger 
                value="pastry" 
                className="data-[state=active]:bg-cafe-brown data-[state=active]:text-white px-6"
              >
                Pastries
              </TabsTrigger>
              <TabsTrigger 
                value="food" 
                className="data-[state=active]:bg-cafe-brown data-[state=active]:text-white px-6"
              >
                Food
              </TabsTrigger>
            </TabsList>
          </div>
          
          {['coffee', 'pastry', 'food'].map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {menuItems
                  .filter(item => item.category === category)
                  .map((item) => (
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
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default MenuSection;
