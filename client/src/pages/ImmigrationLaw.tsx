import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SEOHead from "@/components/SEOHead";
import { Link } from "wouter";
import { Scale, CheckCircle, Users, FileText, Globe, Heart } from "lucide-react";

export default function ImmigrationLaw() {
  const services = [
    {
      title: "Visa Applications & Extensions",
      description: "Comprehensive support for temporary resident visas, visitor visas, and extensions.",
      features: ["Visitor Visa Applications", "Visa Extensions", "Super Visa for Parents/Grandparents", "Transit Visas"]
    },
    {
      title: "Permanent Residency",
      description: "Expert guidance through all permanent residency programs and pathways.",
      features: ["Express Entry System", "Provincial Nominee Programs", "Family Class Sponsorship", "Start-up Visa Program"]
    },
    {
      title: "Work & Study Permits",
      description: "Complete assistance with work and study permit applications and renewals.",
      features: ["Work Permit Applications", "Labour Market Impact Assessment", "Study Permits", "Post-Graduation Work Permits"]
    },
    {
      title: "Refugee Claims & Protection",
      description: "Compassionate representation for refugee claims and protected person applications.",
      features: ["Refugee Claim Preparation", "Protected Person Applications", "Pre-Removal Risk Assessment", "Humanitarian Applications"]
    },
    {
      title: "Family Sponsorship",
      description: "Helping families reunite through comprehensive sponsorship applications.",
      features: ["Spouse/Partner Sponsorship", "Dependent Children", "Parent & Grandparent Program", "Adoption Cases"]
    },
    {
      title: "Citizenship Applications",
      description: "Complete support for Canadian citizenship applications and ceremonies.",
      features: ["Citizenship Applications", "Citizenship Test Preparation", "Urgent Processing", "Certificate Replacement"]
    }
  ];

  const whyChooseUs = [
    {
      icon: <Scale className="h-6 w-6" />,
      title: "Immigration Law Specialists",
      description: "Our team focuses exclusively on immigration law with deep expertise in all programs."
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "High Success Rate",
      description: "We maintain a 95%+ success rate across all immigration application types."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Multilingual Team",
      description: "Our lawyers and staff speak multiple languages to serve diverse communities."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Experience",
      description: "We've helped clients from over 50 countries achieve their Canadian immigration goals."
    }
  ];

  return (
    <>
      <SEOHead
        title="Immigration Law Services - Expert Immigration Lawyers in Toronto"
        description="Expert immigration law services in Toronto. Visa applications, permanent residency, work permits, refugee claims, and citizenship applications. Free consultation available."
        keywords="immigration lawyer Toronto, visa applications, permanent residency Canada, work permits, refugee claims, citizenship applications"
        canonicalUrl={`${window.location.origin}/immigration-law`}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary text-primary-foreground" data-testid="immigration-hero">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Scale className="h-8 w-8 text-accent" />
                <span className="text-accent font-medium">Immigration Law</span>
              </div>
              <h1 className="text-5xl font-serif font-bold mb-6" data-testid="immigration-headline">
                Your Path to Canada Starts Here
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
                Navigate Canada's complex immigration system with confidence. Our experienced 
                immigration lawyers provide comprehensive legal support for all your immigration needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                  asChild
                  data-testid="free-assessment-button"
                >
                  <Link href="/contact">Free Immigration Assessment</Link>
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
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Canadian immigration consultation"
                className="rounded-lg shadow-2xl w-full max-w-lg"
                data-testid="immigration-hero-image"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20" data-testid="immigration-services">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-primary mb-6" data-testid="services-title">
              Comprehensive Immigration Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From temporary visas to permanent residency and citizenship, we provide 
              expert legal guidance throughout your entire immigration journey.
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

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary" data-testid="why-choose-immigration">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-primary mb-6" data-testid="why-choose-title">
              Why Choose Our Immigration Services?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our immigration law team combines extensive experience with a deep 
              understanding of Canada's immigration system to achieve the best results.
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
              <div className="text-3xl font-bold text-accent mb-2" data-testid="stat-applications">2000+</div>
              <div className="text-muted-foreground">Applications Processed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2" data-testid="stat-success-rate">95%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2" data-testid="stat-countries">50+</div>
              <div className="text-muted-foreground">Countries Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2" data-testid="stat-languages">10+</div>
              <div className="text-muted-foreground">Languages Spoken</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20" data-testid="immigration-process">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-primary mb-6" data-testid="process-title">
              Our Immigration Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow a proven process to ensure your immigration application 
              has the best chance of success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Initial Consultation",
                description: "Free assessment of your immigration options and eligibility."
              },
              {
                step: "02",
                title: "Strategy Development",
                description: "Create a customized immigration strategy based on your goals."
              },
              {
                step: "03",
                title: "Application Preparation",
                description: "Meticulous preparation and review of all required documents."
              },
              {
                step: "04",
                title: "Ongoing Support",
                description: "Continuous support throughout the application process."
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
                  <span className="text-2xl font-bold text-accent-foreground" data-testid={`step-number-${index}`}>
                    {step.step}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3" data-testid={`step-title-${index}`}>
                  {step.title}
                </h3>
                <p className="text-muted-foreground" data-testid={`step-description-${index}`}>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground" data-testid="immigration-cta">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Heart className="h-12 w-12 text-accent mx-auto mb-6" />
            <h2 className="text-4xl font-serif font-bold mb-6" data-testid="cta-title">
              Ready to Start Your Canadian Journey?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Take the first step towards making Canada your home. Contact us today 
              for your free immigration assessment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90"
                asChild
                data-testid="final-cta-button"
              >
                <Link href="/contact">Get Your Free Assessment</Link>
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
