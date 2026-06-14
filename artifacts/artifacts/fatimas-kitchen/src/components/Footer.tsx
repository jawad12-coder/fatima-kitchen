import { Link } from "wouter";
import { ChefHat, MapPin, Phone, Clock, Facebook } from "lucide-react";
import OperationsManual from "./OperationsManual";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <ChefHat className="w-6 h-6 text-primary" />
              <span className="font-serif font-bold text-xl">Fatima's Kitchen</span>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Authentic Home-Style Pakistani Food. Serving the heart of Shalley Valley, Rawalpindi with love and traditional flavors.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <a 
                href="https://facebook.com/fatimakitchen728" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/menu" className="text-muted-foreground hover:text-primary transition-colors">Our Menu</Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/cart" className="text-muted-foreground hover:text-primary transition-colors">Shopping Cart</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-serif font-semibold text-lg">Contact</h4>
            <ul className="space-y-3">
              <li className="flex gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 shrink-0 text-primary" />
                <span className="text-sm">Al Farooq Street, House # CB1265 Fawaz Lane, Awan St, Shalley Valley, Rawalpindi, 46000, Pakistan</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 shrink-0 text-primary" />
                <span className="text-sm">+92 307 5161533</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Clock className="w-5 h-5 shrink-0 text-primary" />
                <span className="text-sm">Open Daily, Closes at 12:00 AM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2026 Fatima's Kitchen (Home-Chef). All rights reserved.
          </p>
          <OperationsManual />
        </div>
      </div>
    </footer>
  );
}
