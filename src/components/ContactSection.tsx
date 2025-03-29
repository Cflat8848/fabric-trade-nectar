
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-textile-800 mb-4">
            Contact Us
          </h2>
          <p className="text-textile-600 max-w-2xl mx-auto">
            Interested in our fabrics? Reach out to us for inquiries, quotes, or to discuss your specific requirements.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-textile-50 p-8 rounded-lg">
            <h3 className="font-serif text-2xl font-semibold mb-6 text-textile-800">Get In Touch</h3>
            
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-textile-700 mb-1">
                    Name
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    className="bg-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-textile-700 mb-1">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Your email" 
                    className="bg-white"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-textile-700 mb-1">
                  Subject
                </label>
                <Input 
                  id="subject" 
                  placeholder="Subject of your message" 
                  className="bg-white"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-textile-700 mb-1">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Your message" 
                  rows={5}
                  className="bg-white"
                />
              </div>
              
              <Button className="w-full bg-fabric-700 hover:bg-fabric-800 text-white">
                Send Message
              </Button>
            </form>
          </div>
          
          <div>
            <h3 className="font-serif text-2xl font-semibold mb-6 text-textile-800">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-fabric-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <MapPin className="w-5 h-5 text-fabric-700" />
                </div>
                <div>
                  <h4 className="font-medium text-textile-800 mb-1">Address</h4>
                  <p className="text-textile-600">
                    Kalikanagar, Butwal<br />
                    Rupandehi District<br />
                    Nepal
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 bg-fabric-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <Phone className="w-5 h-5 text-fabric-700" />
                </div>
                <div>
                  <h4 className="font-medium text-textile-800 mb-1">Phone</h4>
                  <p className="text-textile-600">
                    +977 9764341987
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 bg-fabric-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <MessageSquare className="w-5 h-5 text-fabric-700" />
                </div>
                <div>
                  <h4 className="font-medium text-textile-800 mb-1">WhatsApp</h4>
                  <p className="text-textile-600">
                    +977 9815122024
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 bg-fabric-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <Mail className="w-5 h-5 text-fabric-700" />
                </div>
                <div>
                  <h4 className="font-medium text-textile-800 mb-1">Email</h4>
                  <p className="text-textile-600">
                    info@paiyunkalika.com<br />
                    sales@paiyunkalika.com
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 bg-fabric-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <Clock className="w-5 h-5 text-fabric-700" />
                </div>
                <div>
                  <h4 className="font-medium text-textile-800 mb-1">Business Hours</h4>
                  <p className="text-textile-600">
                    Sunday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
