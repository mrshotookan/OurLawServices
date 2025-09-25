import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import SEOHead from "@/components/SEOHead";
import { Link } from "wouter";
import { Scale, Home as HomeIcon, FileText, Gavel } from "lucide-react";

export default function PracticeAreas() {
  const practiceAreas = [
    {
      icon: <Scale />,
      title: "Immigration Law",
      description: "Comprehensive immigration services including visa applications, permanent residency, refugee claims, and work permits. Our experienced immigration lawyers guide you through complex immigration processes.",
      services: [
        "Visa Applications & Extensions",
        "Permanent Residency Applications", 
        "Refugee Claims & Protection",
        "Study & Work Permits",
        "Family Sponsorship",
        "Citizenship Applications"
      ],
      href: "/immigration-law"
    },
    {
      icon: <HomeIcon />,
      title: "Real Estate Law",
      description: "Full-service real estate legal support for residential and commercial transactions. From purchase agreements to closing, we protect your interests in every property transaction.",
      services: [
        "Residential Property Transactions",
        "Commercial Real Estate",
        "Title Searches & Insurance",
        "Real Estate Closings",
        "Contract Review & Negotiation",
        "Property Disputes"
      ],
      href: "/real-estate-law"
    },
    {
      icon: <FileText />,
      title: "Wills & Power of Attorney",
      description: "Comprehensive estate planning services to protect your assets and ensure your wishes are carried out. We help you plan for the future with confidence.",
      services: [
        "Will Drafting & Updates",
        "Power of Attorney Documents",
        "Estate Planning Strategy",
        "Trust Administration",
        "Estate Administration",
        "Probate Services"
      ],
      href: "/wills-power-of-attorney"
    },
    {
      icon: <Gavel />,
      title: "Criminal Law",
      description: "Aggressive criminal defense representation for all types of criminal charges. Our experienced criminal lawyers fight to protect your rights and freedom.",
      services: [
        "Criminal Defense Representation",
        "Bail Hearings & Applications",
        "Trial Representation",
        "Appeals & Post-Conviction",
        "DUI/DWI Defense",
        "Drug Offense Defense"
      ],
      href: "/criminal-law"
    }
  ];

  return (
    <>
      <SEOHead
        title="Practice Areas - Comprehensive Legal Services"
        description="Explore our comprehensive legal services across Immigration Law, Real Estate Law, Wills & Power of Attorney, and Criminal Law. Professional representation in Toronto and surrounding areas."
        keywords="practice areas, legal services, immigration lawyer, real estate lawyer, criminal defense, estate planning, Toronto legal services"
        canonicalUrl={`${window.location.origin}/practice-areas`}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary" data-testid="practice-areas-hero">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl font-serif font-bold text-primary mb-6" data-testid="practice-areas-headline">
              Our Practice Areas
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We provide comprehensive legal services across multiple practice areas, 
              combining deep professional knowledge with personalized attention to achieve the best 
              possible outcomes for our clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-20" data-testid="practice-areas-grid">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {practiceAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300"
                data-testid={`practice-area-${area.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="text-2xl text-primary-foreground">
                      {area.icon}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-serif font-semibold text-primary mb-4" data-testid={`area-title-${area.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      {area.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed" data-testid={`area-description-${area.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      {area.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-primary mb-3">Our Services Include:</h4>
                      <ul className="space-y-2">
                        {area.services.map((service, serviceIndex) => (
                          <li key={serviceIndex} className="text-muted-foreground flex items-start" data-testid={`service-${serviceIndex}`}>
                            <span className="text-accent mr-2">•</span>
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button 
                      asChild 
                      className="bg-accent text-accent-foreground hover:bg-accent/90"
                      data-testid={`learn-more-${area.title.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <Link href={area.href}>
                        Learn More About {area.title}
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-secondary" data-testid="why-choose-section">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-serif font-bold text-primary mb-6" data-testid="why-choose-title">
              Why Choose Our Legal Services?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2" data-testid="stat-experience">20+</div>
                <div className="text-muted-foreground">Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2" data-testid="stat-cases">500+</div>
                <div className="text-muted-foreground">Successful Cases</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2" data-testid="stat-satisfaction">98%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Our multi-disciplinary approach means you get comprehensive legal support 
              under one roof. Whether you need help with one area or multiple practice 
              areas, our team has the professional expertise to handle your legal needs efficiently 
              and effectively.
            </p>

            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90" 
              asChild
              data-testid="consultation-cta"
            >
              <Link href="/contact">Schedule Your Free Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
