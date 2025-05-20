
import React from 'react';
import Navbar from '@/components/cafe/Navbar';
import Footer from '@/components/cafe/Footer';
import { Calendar, Clock, Coffee, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-cafe-darkBrown text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="max-w-xl mx-auto text-white/80">
              Our story, our passion, and our commitment to quality
            </p>
          </div>
        </div>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="font-serif text-3xl font-bold mb-6 text-cafe-darkBrown">Our Story</h2>
                <p className="mb-4 text-muted-foreground">
                  Brew Haven started in 2010 as a small kiosk with big dreams. Our founder, Emma Chen, had a vision to create a space where coffee wasn't just a caffeine fix, but an experience to be savored.
                </p>
                <p className="mb-4 text-muted-foreground">
                  After years of studying coffee cultivation and roasting techniques across Colombia, Ethiopia, and Indonesia, Emma returned home with a wealth of knowledge and a passion to share the finest coffee experiences with her community.
                </p>
                <p className="text-muted-foreground">
                  Today, Brew Haven has grown into a beloved local institution, still maintaining the same dedication to quality, sustainability, and community that inspired its creation.
                </p>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1442975631115-c4f7b05b8a2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                  alt="Coffee beans" 
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 lg:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                  alt="Coffee being prepared" 
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="font-serif text-3xl font-bold mb-6 text-cafe-darkBrown">Our Coffee</h2>
                <p className="mb-4 text-muted-foreground">
                  We believe that exceptional coffee starts at the source. That's why we work directly with small farms and cooperatives that share our commitment to quality and ethical practices.
                </p>
                <p className="mb-4 text-muted-foreground">
                  Our beans are carefully selected for their unique flavor profiles, then roasted in small batches at our local roastery to bring out their distinctive characteristics.
                </p>
                <p className="text-muted-foreground">
                  From bean to cup, we control every step of the process to ensure that your coffee experience at Brew Haven is nothing short of extraordinary.
                </p>
              </div>
            </div>
            
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl font-bold mb-12 text-cafe-darkBrown">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-cafe-light p-8 rounded-lg shadow-sm">
                  <div className="bg-white p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <Coffee className="h-8 w-8 text-cafe-brown" />
                  </div>
                  <h3 className="font-serif font-bold text-xl mb-4 text-cafe-darkBrown">Quality</h3>
                  <p className="text-muted-foreground">
                    We never compromise on quality, from selecting the finest beans to training expert baristas.
                  </p>
                </div>
                
                <div className="bg-cafe-light p-8 rounded-lg shadow-sm">
                  <div className="bg-white p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <Users className="h-8 w-8 text-cafe-brown" />
                  </div>
                  <h3 className="font-serif font-bold text-xl mb-4 text-cafe-darkBrown">Community</h3>
                  <p className="text-muted-foreground">
                    We strive to create a welcoming space where connections flourish over great coffee.
                  </p>
                </div>
                
                <div className="bg-cafe-light p-8 rounded-lg shadow-sm">
                  <div className="bg-white p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <Calendar className="h-8 w-8 text-cafe-brown" />
                  </div>
                  <h3 className="font-serif font-bold text-xl mb-4 text-cafe-darkBrown">Sustainability</h3>
                  <p className="text-muted-foreground">
                    We're committed to environmentally responsible practices across our entire operation.
                  </p>
                </div>
                
                <div className="bg-cafe-light p-8 rounded-lg shadow-sm">
                  <div className="bg-white p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <Clock className="h-8 w-8 text-cafe-brown" />
                  </div>
                  <h3 className="font-serif font-bold text-xl mb-4 text-cafe-darkBrown">Innovation</h3>
                  <p className="text-muted-foreground">
                    We continuously explore new methods and flavors while honoring traditional craftsmanship.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <h2 className="font-serif text-3xl font-bold mb-6 text-cafe-darkBrown">Meet Our Team</h2>
              <p className="max-w-2xl mx-auto text-muted-foreground mb-12">
                Our talented team of baristas, bakers, and staff work together to create the Brew Haven experience
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    name: "Emma Chen",
                    role: "Founder & Head Roaster",
                    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80"
                  },
                  {
                    name: "Marcus Johnson",
                    role: "Head Barista",
                    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
                  },
                  {
                    name: "Sophia Patel",
                    role: "Pastry Chef",
                    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
                  },
                  {
                    name: "David Kim",
                    role: "Cafe Manager",
                    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
                  }
                ].map((person, index) => (
                  <div key={index} className="text-center">
                    <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                      <img 
                        src={person.image} 
                        alt={person.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-serif font-bold text-lg text-cafe-darkBrown">{person.name}</h3>
                    <p className="text-cafe-brown">{person.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
