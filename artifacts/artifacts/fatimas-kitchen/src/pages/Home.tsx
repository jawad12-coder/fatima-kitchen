import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Clock, MessageCircle, MapPin, Star, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MENU_ITEMS, IMAGE_MAP } from "@/data/menu";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";
import Footer from "@/components/Footer";

const REVIEWS = [
  {
    name: "Amna K",
    area: "Rawalpindi",
    text: "Fatima's Aloo Paratha is absolutely divine! The layers are so crispy and the filling is perfectly spiced. I order every weekend now!",
    time: "3 days ago",
    color: "bg-orange-500"
  },
  {
    name: "Tariq M",
    area: "Shalley Valley",
    text: "Best home-style food in the area! The chicken shami kabab melts in your mouth. Highly recommend the deals - incredible value for money.",
    time: "1 week ago",
    color: "bg-purple-500"
  },
  {
    name: "Sadia R",
    area: "Rawalpindi",
    text: "The seekh kabab and lassi combo is my absolute favorite. Food always arrives fresh and piping hot. Fatima's Kitchen never disappoints!",
    time: "2 weeks ago",
    color: "bg-teal-500"
  },
  {
    name: "Bilal A",
    area: "Rawalpindi",
    text: "Ordered Deal 1 for the family and everyone loved it! The chicken patty burger is restaurant quality. WhatsApp ordering is so convenient!",
    time: "2 weeks ago",
    color: "bg-blue-500"
  },
  {
    name: "Zara H",
    area: "Rawalpindi",
    text: "The milkshakes are amazing - especially the dates milkshake! And the frozen shami kabab is a lifesaver for quick meals. Five stars always!",
    time: "1 month ago",
    color: "bg-pink-500"
  }
];

export default function Home() {
  const { addItem } = useCart();
  const { toast } = useToast();

  const popularItems = [
    MENU_ITEMS.find(i => i.id === 'd3'), // Deal 3
    MENU_ITEMS.find(i => i.id === 'r2'), // Aloo paratha
    MENU_ITEMS.find(i => i.id === 's7'), // Shami kabab
    MENU_ITEMS.find(i => i.id === 'b2'), // Seekh kabab
    MENU_ITEMS.find(i => i.id === 'd1'), // Deal 1
    MENU_ITEMS.find(i => i.id === 'bv1'), // Lassi
  ].filter(Boolean) as typeof MENU_ITEMS;

  const handleAddToCart = (item: typeof MENU_ITEMS[0]) => {
    addItem({ ...item, quantity: 1 });
    toast({
      title: "Added to cart",
      description: `${item.name} added to your cart.`,
      duration: 2000,
    });
  };

  return (
    <>
      <Helmet>
        <title>Fatima's Kitchen - Best Home Chef Food in Rawalpindi</title>
      </Helmet>

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[90vh] md:h-[100dvh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={IMAGE_MAP.hero} 
              alt="Delicious Pakistani Food" 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-background via-background/40 to-transparent" />
          </div>
          
          <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-3xl mx-auto space-y-6"
            >
              <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-1 text-sm font-medium tracking-wide rounded-full mb-4">
                HOME-CHEF • RAWALPINDI
              </Badge>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight text-white drop-shadow-lg leading-tight">
                Authentic Home-Style <span className="text-primary italic">Pakistani</span> Food
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
                Made with love in Shalley Valley. Crispy parathas, mouth-watering kababs, and incredible deals delivered fresh.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                <Button size="lg" asChild className="w-full sm:w-auto text-lg h-14 px-8 bg-primary hover:bg-primary/90 rounded-full shadow-[0_0_20px_rgba(234,88,12,0.3)]">
                  <Link href="/menu">Browse Menu</Link>
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg h-14 px-8 border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white rounded-full gap-2" onClick={() => window.open("https://wa.me/923075161533", "_blank")}>
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  Order via WhatsApp
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Strip */}
        <section className="py-12 bg-background border-b border-border">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Clock, title: "Open Daily", desc: "Closes at 12:00 AM" },
                { icon: MessageCircle, title: "WhatsApp Orders", desc: "Fast & personal service" },
                { icon: MapPin, title: "Rawalpindi Delivery", desc: "Fresh to your door" }
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 bg-card/50 backdrop-blur-sm border border-white/5 p-6 rounded-2xl"
                >
                  <div className="p-3 bg-primary/10 rounded-full">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Items */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">Customer Favorites</h2>
                <p className="text-muted-foreground mt-2 font-light">The dishes everyone keeps coming back for.</p>
              </div>
              <Button variant="ghost" asChild className="text-primary hover:text-primary hover:bg-primary/10">
                <Link href="/menu">View Full Menu &rarr;</Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {popularItems.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-card rounded-2xl overflow-hidden border border-border group shadow-lg shadow-black/20 hover:shadow-primary/5 transition-all duration-300 flex flex-col"
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img 
                      src={IMAGE_MAP[item.imageKey] || IMAGE_MAP.hero} 
                      alt={item.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <Badge className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white border-none font-semibold px-3 py-1">
                      Rs. {item.price}
                    </Badge>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-serif text-xl font-bold mb-2">{item.name}</h3>
                    <p className="text-muted-foreground text-sm flex-1 mb-6">{item.description}</p>
                    <Button 
                      className="w-full bg-secondary hover:bg-primary hover:text-primary-foreground text-secondary-foreground transition-colors"
                      onClick={() => handleAddToCart(item)}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Snippet */}
        <section className="py-24 bg-card relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-square max-w-md mx-auto relative rounded-full overflow-hidden border-8 border-background shadow-2xl">
                  <img src={IMAGE_MAP.fullMenu} alt="Fatima's Kitchen Food" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-8 rounded-full w-32 h-32 flex items-center justify-center flex-col shadow-xl">
                  <span className="font-serif font-bold text-3xl">100%</span>
                  <span className="text-xs font-medium uppercase tracking-wider">Home Made</span>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground leading-tight">
                  The Taste of Home, <br/>Away From Home
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed font-light">
                  Fatima's Kitchen started as a passionate home-chef operation serving the community of Shalley Valley, Rawalpindi. With love for authentic Pakistani flavors and home-style cooking, we've built a loyal following across the city.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed font-light">
                  Every paratha is rolled fresh, every kabab is spiced to perfection, and every meal is prepared with the care you'd expect from your own mother's kitchen.
                </p>
                <div className="pt-4">
                  <Button variant="outline" asChild className="rounded-full px-8 h-12 border-primary/50 hover:bg-primary hover:text-white transition-colors">
                    <Link href="/about">Read Our Story</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">Loved by Rawalpindi</h2>
              <p className="text-muted-foreground text-lg font-light">Don't just take our word for it. Here's what our neighbors have to say about our food.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {REVIEWS.map((review, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`bg-card p-8 rounded-3xl border border-white/5 shadow-lg relative ${i >= 3 ? 'md:hidden lg:block' : ''} ${i === 4 ? 'lg:hidden' : ''}`}
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex gap-1 text-accent">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">{review.time}</span>
                  </div>
                  <p className="text-foreground leading-relaxed mb-8 italic">"{review.text}"</p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className={`w-12 h-12 rounded-full ${review.color} flex items-center justify-center text-white font-bold text-lg font-serif`}>
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">{review.name}</h4>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
                        <CheckCircle2 className="w-3 h-3 text-primary" />
                        Verified • {review.area}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-orange-600 to-accent z-0" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 z-0 mix-blend-overlay" />
          
          <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Ready for a Feast?</h2>
            <p className="text-white/90 text-lg mb-10 max-w-lg mx-auto">
              Browse our menu, build your order, and send it directly to our kitchen via WhatsApp.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 rounded-full h-14 px-8 text-lg shadow-xl shadow-black/20"
              onClick={() => window.open("https://wa.me/923075161533", "_blank")}
            >
              Order Now via WhatsApp
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
