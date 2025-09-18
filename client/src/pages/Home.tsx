import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import SEOHead from "@/components/SEOHead";
import { Link } from "wouter";
import { 
  Shield, 
  Users, 
  Clock, 
  Scale, 
  Home as HomeIcon, 
  FileText, 
  Gavel 
} from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function Home() {
  const handleBookConsultation = () => {
    trackEvent('consultation_click', 'engagement', 'hero_button');
  };

  const handleLearnMore = () => {
    trackEvent('learn_more_click', 'engagement', 'hero_button');
  };

  const services = [
    {
      icon: <Scale />,
      title: "Immigration Law",
      description: "Visa applications, permanent residency, refugee claims, and work permits.",
      services: ["Visa Applications", "Permanent Residency", "Refugee Claims", "Study & Work Permits"],
      href: "/immigration-law"
    },
    {
      icon: <HomeIcon />,
      title: "Real Estate Law",
      description: "Property transactions, title transfers, and real estate closings.",
      services: ["Property Buying/Selling", "Title Transfers", "Real Estate Closings", "Contract Review"],
      href: "/real-estate-law"
    },
    {
      icon: <FileText />,
      title: "Wills & Power of Attorney",
      description: "Estate planning, will drafting, and power of attorney guidance.",
      services: ["Estate Planning", "Legal Wills Drafting", "Power of Attorney", "Trust Administration"],
      href: "/wills-power-of-attorney"
    },
    {
      icon: <Gavel />,
      title: "Criminal Law",
      description: "Criminal defense services, bail hearings, and legal appeals.",
      services: ["Defense Services", "Bail Hearings", "Legal Appeals", "Court Representation"],
      href: "/criminal-law"
    }
  ];

  return (
    <>
      <SEOHead
        title="Professional Legal Services - Expert Representation You Can Trust"
        description="Expert legal representation across Immigration Law, Real Estate Law, Wills & Power of Attorney, and Criminal Law. 20+ years experience, 98% success rate. Free consultation available."
        keywords="law firm, legal services, immigration lawyer, real estate lawyer, criminal defense, wills and estates, Toronto lawyer"
        canonicalUrl={`${window.location.origin}/`}
      />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center hero-pattern pt-20" data-testid="hero-section">
        <div className="container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="animate-fade-in"
            >
              <h1 className="text-5xl lg:text-6xl font-serif font-bold text-primary mb-6 leading-tight" data-testid="hero-headline">
                Expert Legal 
                <span className="text-accent"> Representation</span> 
                You Can Trust
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed" data-testid="hero-description">
                With over 20 years of combined experience, our dedicated team of legal 
                professionals provides comprehensive legal services across Immigration, 
                Real Estate, Criminal Law, and Estate Planning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-4"
                  asChild
                  onClick={handleBookConsultation}
                  data-testid="hero-consultation-button"
                >
                  <Link href="/contact">Free Consultation</Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4"
                  asChild
                  onClick={handleLearnMore}
                  data-testid="hero-learn-more-button"
                >
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex items-center gap-8 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary" data-testid="stat-cases">500+</div>
                  <div className="text-sm text-muted-foreground">Cases Won</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary" data-testid="stat-experience">20+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary" data-testid="stat-success">98%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="animate-scale-in lg:justify-self-end"
            >
              <img
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Professional lawyer in consultation"
                className="rounded-2xl shadow-2xl w-full max-w-lg"
                data-testid="hero-image"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Firm Introduction */}
      <section className="py-20 bg-secondary" data-testid="firm-intro-section">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-serif font-bold text-primary mb-6" data-testid="intro-headline">
              Why Choose OurLawServices?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12" data-testid="intro-description">
              We combine decades of legal expertise with a client-first approach, ensuring 
              personalized attention and strategic solutions for your legal challenges. Our 
              commitment to excellence and proven track record make us the trusted choice 
              for individuals and businesses alike.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2" data-testid="feature-title-results">
                  Proven Results
                </h3>
                <p className="text-muted-foreground">
                  Track record of successful cases and satisfied clients
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2" data-testid="feature-title-team">
                  Expert Team
                </h3>
                <p className="text-muted-foreground">
                  Experienced lawyers specializing in diverse practice areas
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2" data-testid="feature-title-support">
                  24/7 Support
                </h3>
                <p className="text-muted-foreground">
                  Always available when you need legal assistance
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20" data-testid="services-section">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-primary mb-6" data-testid="services-headline">
              Our Practice Areas
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive legal services tailored to meet your specific needs 
              across multiple practice areas
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-secondary" data-testid="testimonials-section">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-primary mb-6" data-testid="testimonials-headline">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </motion.div>
          
          <TestimonialsCarousel />
        </div>
      </section>

      {/* Call-to-Action Banner */}
      <section className="py-20 bg-primary" data-testid="cta-section">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold text-primary-foreground mb-6" data-testid="cta-headline">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto" data-testid="cta-description">
              Schedule your free consultation today and let our experienced legal team 
              help you navigate your legal challenges with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-4"
                asChild
                data-testid="cta-consultation-button"
              >
                <Link href="/contact">Schedule Free Consultation</Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-4"
                asChild
                data-testid="cta-phone-button"
              >
                <a href="tel:+15555555555">Call Now: (555) LAW-FIRM</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
