import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Breadcrumbs from "@/components/breadcrumbs";
import { OrganizationSchema } from "@/components/structured-data";
import Home from "@/pages/home";
import Services from "@/pages/services";
import Portfolio from "@/pages/portfolio";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import PrivacyPolicy from "@/pages/privacy-policy";
import TermsOfService from "@/pages/terms-of-service";
import Careers from "@/pages/careers";
import LearnUIUXDesign from "@/pages/learn-ui-ux-design";
import CookiePolicy from "@/pages/cookie-policy";

import FAQ from "@/pages/faq";
import NotFound from "@/pages/not-found";
import WebDevelopment from "@/pages/services/web-development";
import UIUXDesign from "@/pages/services/ui-ux-design";
import EcommerceSolutions from "@/pages/services/ecommerce-solutions";
import DigitalStrategy from "@/pages/services/digital-strategy";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/services/web-development" component={WebDevelopment} />
      <Route path="/services/ui-ux-design" component={UIUXDesign} />
      <Route path="/services/ecommerce-solutions" component={EcommerceSolutions} />
      <Route path="/services/digital-strategy" component={DigitalStrategy} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-of-service" component={TermsOfService} />
      <Route path="/careers" component={Careers} />
      <Route path="/learn-ui-ux-design" component={LearnUIUXDesign} />
      <Route path="/cookie-policy" component={CookiePolicy} />
      <Route path="/faq" component={FAQ} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-background text-foreground">
          <OrganizationSchema />
          <Header />
          <Breadcrumbs />
          <main>
            <Router />
          </main>
          <Footer />
          <Toaster />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
