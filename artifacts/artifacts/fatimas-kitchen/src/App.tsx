import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CartProvider } from "@/context/CartContext";
import Home from "@/pages/Home";
import MenuPage from "@/pages/Menu";
import CartPage from "@/pages/Cart";
import AboutPage from "@/pages/About";
import ChatBot from "@/components/ChatBot";
import OperationsManual from "@/components/OperationsManual";
import Navigation from "@/components/Navigation";
import { HelmetProvider } from "react-helmet-async";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/menu" component={MenuPage} />
      <Route path="/cart" component={CartPage} />
      <Route path="/about" component={AboutPage} />
      <Route>
        <div className="min-h-screen flex items-center justify-center flex-col text-center">
          <h1 className="text-6xl font-bold font-serif mb-4">404</h1>
          <p className="text-muted-foreground">Page not found</p>
        </div>
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <TooltipProvider>
            <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
              <Navigation />
              <Router />
              <ChatBot />
              <OperationsManual />
            </WouterRouter>
            <Toaster />
          </TooltipProvider>
        </CartProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
