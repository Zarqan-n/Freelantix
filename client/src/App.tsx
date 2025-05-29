import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Breadcrumbs from "@/components/breadcrumbs";
import { OrganizationSchema } from "@/components/structured-data";
import ErrorBoundary from "@/components/ui/error-boundary";
import { PageLoadingSpinner } from "@/components/ui/loading-spinner";

// Lazy load components for better performance
const Home = lazy(() => import("@/pages/home"));
const Services = lazy(() => import("@/pages/services"));
const Portfolio = lazy(() => import("@/pages/portfolio"));
const About = lazy(() => import("@/pages/about"));
const Contact = lazy(() => import("@/pages/contact"));
const PrivacyPolicy = lazy(() => import("@/pages/privacy-policy"));
const TermsOfService = lazy(() => import("@/pages/terms-of-service"));
const Careers = lazy(() => import("@/pages/careers"));
const LearnUIUXDesign = lazy(() => import("@/pages/learn-ui-ux-design"));
const CookiePolicy = lazy(() => import("@/pages/cookie-policy"));
const FAQ = lazy(() => import("@/pages/faq"));
const NotFound = lazy(() => import("@/pages/not-found"));
const WebDevelopment = lazy(() => import("@/pages/services/web-development"));
const UIUXDesign = lazy(() => import("@/pages/services/ui-ux-design"));
const EcommerceSolutions = lazy(() => import("@/pages/services/ecommerce-solutions"));
const DigitalStrategy = lazy(() => import("@/pages/services/digital-strategy"));

function Router() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<PageLoadingSpinner />}>
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
      </Suspense>
    </ErrorBoundary>
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
