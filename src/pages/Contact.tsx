
import React from 'react';
import Navbar from '@/components/cafe/Navbar';
import Footer from '@/components/cafe/Footer';
import ContactForm from '@/components/cafe/ContactForm';
import LocationSection from '@/components/cafe/LocationSection';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-cafe-darkBrown text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="max-w-xl mx-auto text-white/80">
              We'd love to hear from you. Get in touch with us for any questions or feedback.
            </p>
          </div>
        </div>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="font-serif text-2xl font-bold mb-6 text-cafe-darkBrown">Send Us a Message</h2>
                <p className="mb-6 text-muted-foreground">
                  Have a question, comment, or want to book an event? Fill out the form below and we'll get back to you as soon as possible.
                </p>
                <ContactForm />
              </div>
              
              <div className="bg-cafe-light p-8 rounded-lg shadow-md">
                <h2 className="font-serif text-2xl font-bold mb-6 text-cafe-darkBrown">Frequently Asked Questions</h2>
                
                <div className="space-y-6">
                  {[
                    {
                      question: "Do you offer catering services?",
                      answer: "Yes, we offer catering for events of all sizes. Please contact us at least 48 hours in advance with your requirements."
                    },
                    {
                      question: "Are your coffee beans available for purchase?",
                      answer: "Absolutely! We sell our freshly roasted beans in-store. You can purchase them by weight or in pre-packaged bags."
                    },
                    {
                      question: "Do you have WiFi?",
                      answer: "Yes, we offer complimentary WiFi for our customers. Just ask our staff for the password."
                    },
                    {
                      question: "Can I book a private event at your cafe?",
                      answer: "Yes, we offer private event bookings during evening hours. Please contact us for availability and pricing."
                    },
                    {
                      question: "Do you have vegan and gluten-free options?",
                      answer: "We have a selection of vegan and gluten-free items on our menu. All allergens are clearly marked."
                    }
                  ].map((item, index) => (
                    <div key={index}>
                      <h3 className="font-serif font-medium text-lg text-cafe-darkBrown mb-2">
                        {item.question}
                      </h3>
                      <p className="text-muted-foreground">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
