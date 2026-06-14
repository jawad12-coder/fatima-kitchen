import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Trash2, Plus, Minus, MessageCircle, Banknote, Smartphone, Check } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { IMAGE_MAP } from "@/data/menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Footer from "@/components/Footer";

type PaymentMethod = "whatsapp" | "jazzcash" | "easypaisa";

const PAYMENT_OPTIONS: { id: PaymentMethod; label: string; number: string; color: string; bg: string; description: string }[] = [
  {
    id: "whatsapp",
    label: "Cash on Delivery",
    number: "",
    color: "text-green-400",
    bg: "border-green-500/40 bg-green-500/10",
    description: "Pay cash when your order arrives",
  },
  {
    id: "jazzcash",
    label: "JazzCash",
    number: "0307-5161533",
    color: "text-red-400",
    bg: "border-red-500/40 bg-red-500/10",
    description: "Transfer to JazzCash Mobile Account",
  },
  {
    id: "easypaisa",
    label: "EasyPaisa",
    number: "0307-5161533",
    color: "text-emerald-400",
    bg: "border-emerald-500/40 bg-emerald-500/10",
    description: "Transfer to EasyPaisa Mobile Account",
  },
];

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("whatsapp");
  const [formData, setFormData] = useState({ name: "", phone: "", address: "" });

  const selectedPayment = PAYMENT_OPTIONS.find(p => p.id === paymentMethod)!;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();

    const paymentLabel =
      paymentMethod === "whatsapp"
        ? "Cash on Delivery"
        : paymentMethod === "jazzcash"
        ? `JazzCash (Account: ${selectedPayment.number})`
        : `EasyPaisa (Account: ${selectedPayment.number})`;

    let message = `*New Order - Fatima's Kitchen*\n\n`;
    message += `*Items Ordered:*\n`;
    items.forEach(item => {
      message += `• ${item.name} x${item.quantity} - PKR ${item.price * item.quantity}\n`;
    });
    message += `\n*Order Total: PKR ${totalPrice}*\n\n`;
    message += `*Payment Method:* ${paymentLabel}\n\n`;

    if (paymentMethod !== "whatsapp") {
      message += `*Note:* Customer will transfer PKR ${totalPrice} to ${paymentMethod === "jazzcash" ? "JazzCash" : "EasyPaisa"} number ${selectedPayment.number}. Please confirm receipt before dispatching order.\n\n`;
    }

    message += `*Delivery Details:*\nName: ${formData.name}\nPhone: ${formData.phone}\nAddress: ${formData.address}\n\nOrder placed via Fatima's Kitchen website. Thank you!`;

    const url = `https://wa.me/923075161533?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");

    setIsCheckoutOpen(false);
    setTimeout(() => clearCart(), 1000);
  };

  return (
    <>
      <Helmet>
        <title>Shopping Cart - Fatima's Kitchen</title>
      </Helmet>

      <main className="min-h-[80vh] pt-28 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8">Your Cart</h1>

          {items.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center py-20 text-center bg-card rounded-3xl border border-border"
            >
              <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mb-6">
                <ShoppingCart className="w-10 h-10 text-muted-foreground" />
              </div>
              <h2 className="text-2xl font-serif font-bold mb-3">Your cart is empty</h2>
              <p className="text-muted-foreground max-w-md mb-8">
                Looks like you haven't added any delicious food to your cart yet.
              </p>
              <Button asChild size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90">
                <Link href="/menu">Browse Menu</Link>
              </Button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                <AnimatePresence>
                  {items.map(item => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      key={item.id}
                      className="bg-card border border-border rounded-2xl p-4 flex flex-col sm:flex-row gap-4 sm:items-center relative group"
                      data-testid={`cart-item-${item.id}`}
                    >
                      <img
                        src={IMAGE_MAP[item.imageKey] || IMAGE_MAP.hero}
                        alt={item.name}
                        className="w-full sm:w-24 h-24 object-cover rounded-xl bg-secondary shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-serif font-bold text-lg text-foreground truncate">{item.name}</h3>
                        <p className="text-primary font-medium mt-1">Rs. {item.price}</p>
                      </div>
                      <div className="flex items-center gap-4 justify-between sm:justify-end w-full sm:w-auto mt-2 sm:mt-0">
                        <div className="flex items-center bg-secondary rounded-full p-1 border border-border">
                          <button
                            data-testid={`button-decrease-${item.id}`}
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-background transition-colors text-foreground"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center font-medium text-sm">{item.quantity}</span>
                          <button
                            data-testid={`button-increase-${item.id}`}
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-background transition-colors text-foreground"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="font-bold w-20 text-right sm:hidden md:block">
                          Rs. {item.price * item.quantity}
                        </div>
                        <button
                          data-testid={`button-remove-${item.id}`}
                          onClick={() => removeItem(item.id)}
                          className="w-10 h-10 flex items-center justify-center rounded-full bg-destructive/10 text-destructive hover:bg-destructive hover:text-white transition-colors absolute top-4 right-4 sm:relative sm:top-0 sm:right-0"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-card border border-border rounded-3xl p-6 sticky top-28 space-y-6">
                  <h3 className="font-serif font-bold text-2xl border-b border-border pb-4">Order Summary</h3>

                  {/* Payment Method Selector */}
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-3">Choose Payment Method</p>
                    <div className="space-y-2">
                      {PAYMENT_OPTIONS.map(option => (
                        <button
                          key={option.id}
                          data-testid={`payment-${option.id}`}
                          onClick={() => setPaymentMethod(option.id)}
                          className={`w-full flex items-center gap-3 p-3 rounded-xl border transition-all text-left ${
                            paymentMethod === option.id
                              ? option.bg + " border-opacity-100"
                              : "border-border bg-secondary/30 hover:bg-secondary"
                          }`}
                        >
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${option.bg}`}>
                            {option.id === "whatsapp" ? (
                              <Banknote className={`w-4 h-4 ${option.color}`} />
                            ) : (
                              <Smartphone className={`w-4 h-4 ${option.color}`} />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className={`text-sm font-semibold ${paymentMethod === option.id ? option.color : "text-foreground"}`}>
                              {option.label}
                            </p>
                            <p className="text-xs text-muted-foreground truncate">{option.description}</p>
                          </div>
                          {paymentMethod === option.id && (
                            <Check className={`w-4 h-4 shrink-0 ${option.color}`} />
                          )}
                        </button>
                      ))}
                    </div>

                    {/* Show account number for mobile wallets */}
                    {paymentMethod !== "whatsapp" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className={`mt-3 p-3 rounded-xl border text-sm ${selectedPayment.bg}`}
                      >
                        <p className="text-muted-foreground text-xs mb-1">Transfer to this account number:</p>
                        <p className={`font-bold text-lg tracking-wide ${selectedPayment.color}`}>
                          {selectedPayment.number}
                        </p>
                        <p className="text-muted-foreground text-xs mt-1">
                          After transfer, send payment screenshot on WhatsApp to confirm your order.
                        </p>
                      </motion.div>
                    )}
                  </div>

                  {/* Totals */}
                  <div className="space-y-3 text-sm border-t border-border pt-4">
                    <div className="flex justify-between text-muted-foreground">
                      <span>Subtotal ({items.length} item{items.length !== 1 ? "s" : ""})</span>
                      <span>Rs. {totalPrice}</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Delivery Fee</span>
                      <span>Confirmed on WhatsApp</span>
                    </div>
                    <div className="flex justify-between items-end pt-2 border-t border-border">
                      <span className="font-semibold text-lg">Total</span>
                      <span className="font-bold text-3xl text-primary">Rs. {totalPrice}</span>
                    </div>
                  </div>

                  <Button
                    data-testid="button-checkout"
                    size="lg"
                    className="w-full h-14 rounded-xl text-lg font-bold bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg shadow-[#25D366]/20 gap-2"
                    onClick={() => setIsCheckoutOpen(true)}
                  >
                    <MessageCircle className="w-5 h-5" />
                    Place Order via WhatsApp
                  </Button>
                  <p className="text-xs text-center text-muted-foreground leading-relaxed">
                    Your order details and payment method will be sent to WhatsApp for confirmation.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />

      {/* Checkout Modal */}
      <Dialog open={isCheckoutOpen} onOpenChange={setIsCheckoutOpen}>
        <DialogContent className="sm:max-w-md bg-card border-border">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl">Delivery Details</DialogTitle>
            <DialogDescription>
              Enter your details. Your order + payment info will be sent to our WhatsApp.
            </DialogDescription>
          </DialogHeader>

          {/* Selected payment recap */}
          <div className={`flex items-center gap-3 p-3 rounded-xl border text-sm ${selectedPayment.bg}`}>
            {paymentMethod === "whatsapp" ? (
              <Banknote className={`w-4 h-4 ${selectedPayment.color}`} />
            ) : (
              <Smartphone className={`w-4 h-4 ${selectedPayment.color}`} />
            )}
            <div>
              <span className={`font-semibold ${selectedPayment.color}`}>{selectedPayment.label}</span>
              {paymentMethod !== "whatsapp" && (
                <span className="text-muted-foreground ml-2">— {selectedPayment.number}</span>
              )}
            </div>
          </div>

          <form onSubmit={handleCheckout} className="space-y-4 mt-2">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                data-testid="input-name"
                required
                className="bg-background border-border"
                placeholder="Ali Khan"
                value={formData.name}
                onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Contact Number</Label>
              <Input
                id="phone"
                data-testid="input-phone"
                required
                type="tel"
                className="bg-background border-border"
                placeholder="0300 1234567"
                value={formData.phone}
                onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Delivery Address</Label>
              <Input
                id="address"
                data-testid="input-address"
                required
                className="bg-background border-border"
                placeholder="House 123, Street 4, Rawalpindi"
                value={formData.address}
                onChange={e => setFormData(prev => ({ ...prev, address: e.target.value }))}
              />
            </div>
            <Button
              data-testid="button-confirm-order"
              type="submit"
              className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white gap-2 h-12 rounded-xl font-semibold"
            >
              <MessageCircle className="w-4 h-4" />
              Confirm Order on WhatsApp
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
