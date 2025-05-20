
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
        duration: 5000,
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-cafe-darkBrown">Your Name</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border-cafe-tan/40 focus:border-cafe-brown focus:ring-cafe-brown"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email" className="text-cafe-darkBrown">Email Address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border-cafe-tan/40 focus:border-cafe-brown focus:ring-cafe-brown"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="subject" className="text-cafe-darkBrown">Subject</Label>
        <Input
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="border-cafe-tan/40 focus:border-cafe-brown focus:ring-cafe-brown"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message" className="text-cafe-darkBrown">Your Message</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="border-cafe-tan/40 focus:border-cafe-brown focus:ring-cafe-brown resize-none"
        />
      </div>
      
      <Button 
        type="submit" 
        className="bg-cafe-brown hover:bg-cafe-darkBrown text-white w-full sm:w-auto px-8"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
};

export default ContactForm;
