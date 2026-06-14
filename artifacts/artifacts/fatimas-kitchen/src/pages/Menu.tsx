import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Plus, Check } from "lucide-react";
import { MENU_ITEMS, CATEGORIES, IMAGE_MAP } from "@/data/menu";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const { addItem } = useCart();
  const { toast } = useToast();
  const [addedItems, setAddedItems] = useState<Record<string, boolean>>({});

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = activeCategory === "all" || item.category === activeCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleAddToCart = (item: typeof MENU_ITEMS[0]) => {
    addItem({ ...item, quantity: 1 });
    
    // Show temporary "Added" state
    setAddedItems(prev => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [item.id]: false }));
    }, 2000);

    toast({
      title: "Added to cart",
      description: `${item.name} added to your cart.`,
      duration: 2000,
    });
  };

  return (
    <>
      <Helmet>
        <title>Menu - Fatima's Kitchen | Rawalpindi</title>
        <meta name="description" content="Browse our complete menu. Deals, parathas, kababs, and authentic Pakistani food from Fatima's Kitchen." />
      </Helmet>

      <main className="min-h-screen pt-28 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-4">Our Menu</h1>
              <p className="text-muted-foreground text-lg max-w-2xl font-light">
                Fresh, home-cooked goodness prepared daily. Find your favorites and order directly via WhatsApp.
              </p>
            </div>
            
            <div className="relative w-full md:w-[300px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                type="search" 
                placeholder="Search menu..." 
                className="pl-10 bg-card border-border rounded-full h-12 focus-visible:ring-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex overflow-x-auto pb-4 mb-8 -mx-4 px-4 md:mx-0 md:px-0 hide-scrollbar gap-2 sticky top-20 z-40 bg-background/95 backdrop-blur-md py-4">
            <button
              onClick={() => setActiveCategory("all")}
              className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === "all" 
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" 
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border"
              }`}
            >
              All Items
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.id 
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" 
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  key={item.id}
                  className="bg-card rounded-2xl overflow-hidden border border-border group hover:border-primary/50 transition-colors flex flex-col h-full"
                >
                  <div className="h-48 relative overflow-hidden bg-secondary">
                    <img 
                      src={IMAGE_MAP[item.imageKey] || IMAGE_MAP.hero} 
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                      <Badge className="bg-primary/90 hover:bg-primary text-white border-none font-bold text-sm px-3 py-1">
                        Rs. {item.price}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-serif text-xl font-bold mb-2 text-foreground line-clamp-2">{item.name}</h3>
                    <p className="text-muted-foreground text-sm flex-1 mb-6 line-clamp-3 leading-relaxed">
                      {item.description}
                    </p>
                    
                    <button
                      onClick={() => handleAddToCart(item)}
                      className={`w-full py-3 rounded-xl flex items-center justify-center gap-2 font-medium transition-all duration-300 ${
                        addedItems[item.id]
                          ? "bg-[#25D366] text-white"
                          : "bg-secondary text-foreground hover:bg-primary hover:text-white"
                      }`}
                    >
                      {addedItems[item.id] ? (
                        <>
                          <Check className="w-5 h-5" />
                          <span>Added!</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-5 h-5" />
                          <span>Add to Cart</span>
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredItems.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-xl text-muted-foreground">No items found matching your search.</p>
              <button 
                onClick={() => { setSearchQuery(""); setActiveCategory("all"); }}
                className="mt-4 text-primary font-medium hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </>
  );
}
