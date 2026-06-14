import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { ChefHat, ShoppingCart, Menu, X, MessageCircle } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navigation() {
  const [location] = useLocation();
  const { totalItems } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "About", href: "/about" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary/20 p-2 rounded-full group-hover:bg-primary/30 transition-colors">
            <ChefHat className="w-6 h-6 text-primary" />
          </div>
          <span className="font-serif font-bold text-xl tracking-tight hidden sm:block">
            Fatima's Kitchen
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location === link.href ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.name}
              {location === link.href && (
                <span className="block h-0.5 bg-primary mt-1 absolute w-full" />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/cart" className="relative group">
            <div className="p-2 rounded-full bg-secondary/50 group-hover:bg-secondary transition-colors">
              <ShoppingCart className="w-5 h-5 text-foreground" />
            </div>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-in zoom-in">
                {totalItems}
              </span>
            )}
          </Link>

          <Button
            className="hidden sm:flex bg-[#25D366] hover:bg-[#20bd5a] text-white gap-2"
            onClick={() => window.open("https://wa.me/923075161533", "_blank")}
          >
            <MessageCircle className="w-4 h-4" />
            Order via WhatsApp
          </Button>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-card border-border w-[300px]">
                <div className="flex flex-col gap-6 mt-10">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`text-xl font-serif ${
                        location === link.href ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <Button
                    className="mt-4 bg-[#25D366] hover:bg-[#20bd5a] text-white w-full gap-2"
                    onClick={() => window.open("https://wa.me/923075161533", "_blank")}
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp Us
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
