import { Switch, Route, Redirect } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import { initGA } from "./lib/analytics";
import { useAnalytics } from "./hooks/use-analytics";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import PracticeAreas from "@/pages/PracticeAreas";
import ImmigrationLaw from "@/pages/ImmigrationLaw";
import RealEstateLaw from "@/pages/RealEstateLaw";
import WillsPowerOfAttorney from "@/pages/WillsPowerOfAttorney";
import CriminalLaw from "@/pages/CriminalLaw";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";
import WorkPermitPage from "@/pages/WorkPermitPage";
import StudyPage from "@/pages/StudyPage";
import VisitPage from "@/pages/VisitPage";
import BusinessPage from "@/pages/BusinessPage";
import Layout from "@/components/Layout";

function Router() {
  // Track page views when routes change
  useAnalytics();
  
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/practice-areas" component={PracticeAreas} />
        <Route path="/immigration-law" component={ImmigrationLaw} />
        <Route path="/real-estate-law" component={RealEstateLaw} />
        <Route path="/wills-power-of-attorney" component={WillsPowerOfAttorney} />
        <Route path="/criminal-law" component={CriminalLaw} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route path="/work-permits" component={() => <Redirect to="/immigration-law" />} />
        <Route path="/study" component={() => <Redirect to="/immigration-law" />} />
        <Route path="/visit" component={() => <Redirect to="/immigration-law" />} />
        <Route path="/business" component={() => <Redirect to="/immigration-law" />} />
        <Route path="/work-permits/:slug" component={WorkPermitPage} />
        <Route path="/study/:slug" component={StudyPage} />
        <Route path="/visit/:slug" component={VisitPage} />
        <Route path="/business/:slug" component={BusinessPage} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  // Initialize Google Analytics when app loads
  useEffect(() => {
    // Verify required environment variable is present
    if (!import.meta.env.VITE_GA_MEASUREMENT_ID) {
      console.warn('Missing required Google Analytics key: VITE_GA_MEASUREMENT_ID');
    } else {
      initGA();
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
