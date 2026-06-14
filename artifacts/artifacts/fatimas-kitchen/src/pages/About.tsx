import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail, Facebook } from "lucide-react";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { IMAGE_MAP } from "@/data/menu";

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us - Fatima's Kitchen | Rawalpindi</title>
        <meta name="description" content="The story behind Fatima's Kitchen. Authentic home-style Pakistani food in Shalley Valley, Rawalpindi. Find our location, hours, and contact details." />
      </Helmet>

      <main className="min-h-screen pt-20">
        {/* Hero Banner */}
        <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={IMAGE_MAP.shami} 
              alt="Cooking" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70" />
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10 text-center"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white tracking-tight">Our Story</h1>
            <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full" />
          </motion.div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
                Fatima's Kitchen started as a passionate home-chef operation serving the community of Shalley Valley, Rawalpindi.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With a deep love for authentic Pakistani flavors and traditional home-style cooking, Fatima began sharing her family recipes with neighbors. Word quickly spread about the impossibly crispy parathas, the melt-in-your-mouth shami kababs, and the generous deals that felt like a warm hug from home.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, Fatima's Kitchen has built a loyal following across the city. Despite the growth, we haven't changed our approach. Every meal is still prepared in small batches, using fresh ingredients, hand-ground spices, and the exact same care you'd expect from your own mother's kitchen. No shortcuts, just honest food.
              </p>
            </div>
          </div>
        </section>

        {/* Contact & Location Grid */}
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Contact Info Card */}
              <div className="bg-background border border-border p-8 md:p-12 rounded-3xl shadow-xl">
                <h2 className="text-3xl font-serif font-bold text-foreground mb-8">Visit or Contact Us</h2>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-lg mb-1">Address</h4>
                      <p className="text-muted-foreground mb-2 leading-relaxed">Al Farooq Street, House # CB1265 Fawaz Lane, Awan St, Shalley Valley, Rawalpindi, 46000, Pakistan</p>
                      <a 
                        href="https://maps.google.com/?q=H2V8+X3+Rawalpindi" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline font-medium inline-flex items-center gap-1"
                      >
                        Open in Google Maps &rarr;
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-lg mb-1">Phone / WhatsApp</h4>
                      <div className="flex flex-col gap-1">
                        <a href="tel:+923075161533" className="text-muted-foreground hover:text-primary transition-colors">+92 307 5161533</a>
                        <a 
                          href="https://wa.me/923075161533" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-[#25D366] hover:underline font-medium text-sm"
                        >
                          Chat on WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-lg mb-1">Hours</h4>
                      <p className="text-muted-foreground">Open Daily</p>
                      <p className="text-primary font-medium">Closes at 12:00 AM Midnight</p>
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4 border-t border-border">
                    <a 
                      href="https://facebook.com/fatimakitchen728" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors font-medium"
                    >
                      <Facebook className="w-6 h-6" />
                      Follow us on Facebook
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Iframe */}
              <div className="h-[500px] rounded-3xl overflow-hidden border border-border shadow-xl">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322!2d73.06!3d33.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zSDJWOCsyMyBSYXdhbHBpbmRpLCBQYWtpc3Rhbg!5e0!3m2!1sen!2sus!4v1" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  title="Fatima's Kitchen Location"
                />
              </div>

            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 text-foreground">Frequently Asked Questions</h2>
            
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="bg-card border border-border rounded-xl px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline hover:text-primary py-6">Do you deliver?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  Yes! We deliver across Rawalpindi. Delivery charges depend on your exact location. Once you send us your order via WhatsApp, we will confirm the delivery fee and estimated time.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="bg-card border border-border rounded-xl px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline hover:text-primary py-6">How do I place an order?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  The easiest way is to browse our Menu here on the website, add items to your cart, and click checkout. It will automatically build your order and open a WhatsApp chat with us. You can also directly message or call us at +92 307 5161533.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="bg-card border border-border rounded-xl px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline hover:text-primary py-6">What are your hours?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  We are open daily and serve until 12:00 AM midnight. Perfect for late-night cravings!
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-card border border-border rounded-xl px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline hover:text-primary py-6">Where are you located?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  We operate from Shalley Valley in Rawalpindi. Our exact address is Al Farooq Street, House # CB1265 Fawaz Lane, Awan St, Shalley Valley. However, please note we operate primarily as a home-chef delivery/takeout service.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-card border border-border rounded-xl px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline hover:text-primary py-6">What payment methods do you accept?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  Currently, we accept Cash on Delivery (COD). Online payment options like EasyPaisa and JazzCash will be available soon!
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
