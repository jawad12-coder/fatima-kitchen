import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, ChefHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion, AnimatePresence } from "framer-motion";

function getBotResponse(input: string): string {
  const lower = input.toLowerCase();
  if (lower.includes('menu') || lower.includes('items') || lower.includes('food')) 
    return "We have Deals, Starters, Bar BQ, Pakistani Cuisine, Paratha and Roti, Sides, and Beverages! Visit our Menu page or ask me about a specific item.";
  if (lower.includes('hours') || lower.includes('open') || lower.includes('time') || lower.includes('close')) 
    return "We are Open Daily and close at 12:00 AM midnight!";
  if (lower.includes('address') || lower.includes('location') || lower.includes('where') || lower.includes('find')) 
    return "We are at: Al Farooq Street, House CB1265 Fawaz Lane, Awan St, Shalley Valley, Rawalpindi, 46000, Pakistan";
  if (lower.includes('order') || lower.includes('delivery') || lower.includes('deliver')) 
    return "To place an order, browse our Menu, add items to your cart, then checkout via WhatsApp. We will receive your order and confirm delivery!";
  if (lower.includes('price') || lower.includes('cost') || lower.includes('pkr') || lower.includes('how much')) 
    return "Our prices start from PKR 30 and go up to PKR 660. Most items are under PKR 300. Ask me about any specific item!";
  if (lower.includes('paratha')) 
    return "Paratha PKR 75, Aloo ka Paratha PKR 120, Mooli Ka Paratha PKR 130, Chini Wala Pratha PKR 100, Sadi Chapati PKR 30, Achar and Paratha PKR 132, Makhan Wali Chapati PKR 49";
  if (lower.includes('nugget')) 
    return "Chicken Nuggets 6 Piece: PKR 220. Also available in Deal 2: 6 Nuggets + Fries for PKR 265!";
  if (lower.includes('burger')) 
    return "Simple Patty Burger: PKR 215. Simple Patty Burger with Cheese: PKR 275.";
  if (lower.includes('kabab') || lower.includes('kebab')) 
    return "Chicken Shami Kabab 2 Piece: PKR 115, Seekh Kabab: PKR 75, Chicken Tikka: PKR 260, Shami Kabab Frozen 8pcs: PKR 180";
  if (lower.includes('roll') || lower.includes('spring')) 
    return "Spring Rolls 2 Piece: PKR 100! Crispy with crackly skin.";
  if (lower.includes('drink') || lower.includes('beverage') || lower.includes('lassi') || lower.includes('milkshake')) 
    return "Lassi PKR 140, Apple Milkshake PKR 220, Dates Milkshake PKR 215, Soft Drink 345ml PKR 50, Tea PKR 60, Coffee PKR 150, Sting PKR 70";
  if (lower.includes('deal')) 
    return "We have 10 great deals starting from PKR 160! Best value: Deal 3 (2 Parathas + Drink, PKR 175). Check our Menu page for all deals!";
  if (lower.includes('whatsapp') || lower.includes('phone') || lower.includes('contact') || lower.includes('number')) 
    return "WhatsApp and Call: +92 307 5161533. Or visit: wa.me/923075161533";
  if (lower.includes('facebook')) 
    return "Find us on Facebook: facebook.com/fatimakitchen728";
  if (lower.includes('hello') || lower.includes('hi') || lower.includes('salam') || lower.includes('assalam')) 
    return "Salam! Welcome to Fatima's Kitchen! I can help with our menu, prices, location, hours, and ordering. What would you like to know?";
  if (lower.includes('thank')) 
    return "You are welcome! Enjoy your meal from Fatima's Kitchen!";
  return "I am Fatima's Assistant! Ask me about our menu, prices, location, hours, or how to order via WhatsApp. I am here to help!";
}

const QUICK_REPLIES = ["Menu", "Our Deals", "Hours", "Location", "How to Order", "Contact"];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isBot: boolean }[]>([
    { text: "Salam! Welcome to Fatima's Kitchen! How can I help you today?", isBot: true },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    
    setMessages((prev) => [...prev, { text, isBot: false }]);
    setInput("");
    
    setTimeout(() => {
      setMessages((prev) => [...prev, { text: getBotResponse(text), isBot: true }]);
    }, 500);
  };

  return (
    <>
      {/* Floating Button */}
      <Button
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <MessageSquare className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </Button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-[350px] sm:w-[400px] h-[500px] bg-card border border-border rounded-2xl shadow-xl flex flex-col overflow-hidden z-50"
          >
            <div className="bg-primary p-4 text-primary-foreground flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <ChefHat className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg">Fatima's Assistant</h3>
                <p className="text-xs opacity-80">Online & ready to help</p>
              </div>
            </div>

            <ScrollArea className="flex-1 p-4" ref={scrollRef}>
              <div className="flex flex-col gap-4">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.isBot ? "justify-start" : "justify-end"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl p-3 text-sm ${
                        msg.isBot
                          ? "bg-secondary text-secondary-foreground rounded-tl-sm"
                          : "bg-primary text-primary-foreground rounded-tr-sm"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {QUICK_REPLIES.map((reply) => (
                  <button
                    key={reply}
                    onClick={() => handleSend(reply)}
                    className="text-xs bg-muted hover:bg-muted/80 text-muted-foreground border border-border px-2 py-1 rounded-full transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </ScrollArea>

            <div className="p-3 border-t border-border bg-background">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend(input);
                }}
                className="flex gap-2"
              >
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a question..."
                  className="bg-muted border-border flex-1"
                />
                <Button type="submit" size="icon" disabled={!input.trim()}>
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
