import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SEOHead from "@/components/SEOHead";
import { Link } from "wouter";
import { Home, CheckCircle, Shield, FileText, Clock, Users } from "lucide-react";

export default function RealEstateLaw() {
  const services = [
    {
      title: "Residential Property Transactions",
      description: "Complete legal support for buying and selling homes, condos, and residential properties.",
      features: ["Purchase Agreements", "Home Inspections Review", "Mortgage Documentation", "Title Insurance"]
    },
    {
      title: "Commercial Real Estate",
      description: "Comprehensive legal services for commercial property acquisitions and sales.",
      features: ["Commercial Purchases", "Lease Agreements", "Zoning Compliance", "Due Diligence"]
    },
    {
      title: "Real Estate Closings",
      description: "Smooth and efficient closing services to finalize your property transaction.",
      features: ["Document Preparation", "Funds Transfer", "Title Registration", "Key Transfer"]
    },
    {
      title: "Title Searches & Insurance",
      description: "Thorough title searches and insurance to protect your property investment.",
      features: ["Title Verification", "Liens & Encumbrances", "Title Insurance", "Boundary Issues"]
    },
    {
      title: "Contract Review & Negotiation",
      description: "Expert review and negotiation of purchase agreements and real estate contracts.",
      features: ["Contract Analysis", "Terms Negotiation", "Condition Removal", "Amendment Drafting"]
    },
    {
      title: "Property Disputes",
      description: "Experienced representation in real estate disputes and litigation.",
      features: ["Boundary Disputes", "Contract Breaches", "Title Issues", "Landlord-Tenant"]
    }
  ];

  const whyChooseUs = [
    {
      icon: <Home className="h-6 w-6" />,
      title: "Real Estate Specialists",
      description: "Dedicated focus on real estate law with extensive market knowledge."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Risk Protection",
      description: "We identify and protect against potential risks in every transaction."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Timely Closings",
      description: "Efficient process management ensures on-time closings every time."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Client-Focused Service",
      description: "Personalized attention and clear communication throughout the process."
    }
  ];

  return (
    <>
      <SEOHead
        title="Real Estate Law Services - Property Transaction Lawyers in Toronto"
        description="Expert real estate law services in Toronto. Residential and commercial property transactions, closings, title searches, and contract negotiations. Trusted property lawyers."
        keywords="real estate lawyer Toronto, property transactions, real estate closings, title searches, commercial real estate, residential property law"
        canonicalUrl={`${window.location.origin}/real-estate-law`}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary text-primary-foreground" data-testid="real-estate-hero">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Home className="h-8 w-8 text-accent" />
                <span className="text-accent font-medium">Real Estate Law</span>
              </div>
              <h1 className="text-5xl font-serif font-bold mb-6" data-testid="real-estate-headline">
                Your Property Transaction Experts
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
                Whether you're buying your first home or closing a commercial deal, 
                our experienced real estate lawyers ensure your property transactions 
                are handled professionally and efficiently.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                  asChild
                  data-testid="free-consultation-button"
                >
                  <Link href="/contact">Free Real Estate Consultation</Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  asChild
                  data-testid="call-now-button"
                >
                  <a href="tel:+15555555555">Call Now: (555) LAW-FIRM</a>
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:justify-self-end"
            >
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Real estate property transaction consultation"
                className="rounded-lg shadow-2xl w-full max-w-lg"
                data-testid="real-estate-hero-image"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20" data-testid="real-estate-services">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-primary mb-6" data-testid="services-title">
              Comprehensive Real Estate Legal Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From residential home purchases to complex commercial transactions, 
              we provide complete legal support for all your real estate needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300" data-testid={`service-${index}`}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-serif font-semibold text-primary mb-3" data-testid={`service-title-${index}`}>
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4" data-testid={`service-description-${index}`}>
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-sm" data-testid={`service-feature-${index}-${featureIndex}`}>
                          <CheckCircle className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary" data-testid="real-estate-process">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-primary mb-6" data-testid="process-title">
              Our Real Estate Transaction Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow a proven process to ensure your real estate transaction 
              proceeds smoothly from start to finish.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                step: "01",
                title: "Initial Review",
                description: "Review purchase agreement and identify key terms and conditions."
              },
              {
                step: "02",
                title: "Title Search",
                description: "Conduct comprehensive title search to verify ownership and liens."
              },
              {
                step: "03",
                title: "Document Prep",
                description: "Prepare all necessary legal documents for the transaction."
              },
              {
                step: "04",
                title: "Closing Day",
                description: "Coordinate closing day activities and fund transfers."
              },
              {
                step: "05",
                title: "Registration",
                description: "Complete title registration and deliver keys to new owner."
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
                data-testid={`process-step-${index}`}
              >
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-accent-foreground" data-testid={`step-number-${index}`}>
                    {step.step}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-3" data-testid={`step-title-${index}`}>
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm" data-testid={`step-description-${index}`}>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20" data-testid="why-choose-real-estate">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-primary mb-6" data-testid="why-choose-title">
              Why Choose Our Real Estate Services?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our real estate law team combines legal expertise with deep market 
              knowledge to protect your interests in every transaction.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
                data-testid={`reason-${index}`}
              >
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-accent-foreground">
                    {reason.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2" data-testid={`reason-title-${index}`}>
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-sm" data-testid={`reason-description-${index}`}>
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-accent mb-2" data-testid="stat-transactions">1500+</div>
              <div className="text-muted-foreground">Transactions Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2" data-testid="stat-value">$500M+</div>
              <div className="text-muted-foreground">Property Value Handled</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2" data-testid="stat-on-time">99%</div>
              <div className="text-muted-foreground">On-Time Closings</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2" data-testid="stat-satisfaction">100%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground" data-testid="real-estate-cta">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FileText className="h-12 w-12 text-accent mx-auto mb-6" />
            <h2 className="text-4xl font-serif font-bold mb-6" data-testid="cta-title">
              Ready to Move Forward with Your Property Transaction?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Let our experienced real estate lawyers guide you through a smooth, 
              successful property transaction. Contact us today for expert legal support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90"
                asChild
                data-testid="final-cta-button"
              >
                <Link href="/contact">Start Your Transaction</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
                data-testid="call-cta-button"
              >
                <a href="tel:+15555555555">Call (555) LAW-FIRM</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
