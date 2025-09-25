import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SEOHead from "@/components/SEOHead";
import { Link } from "wouter";
import { FileText, CheckCircle, Shield, Heart, Clock, Users } from "lucide-react";

export default function WillsPowerOfAttorney() {
  const services = [
    {
      title: "Will Drafting & Updates",
      description: "Comprehensive will preparation to ensure your wishes are clearly documented and legally binding.",
      features: ["Last Will & Testament", "Will Updates & Amendments", "Mirror Wills for Couples", "Living Wills"]
    },
    {
      title: "Power of Attorney Documents",
      description: "Legal documents that authorize trusted individuals to make decisions on your behalf.",
      features: ["Financial Power of Attorney", "Personal Care Power of Attorney", "Continuing Power of Attorney", "Enduring Power of Attorney"]
    },
    {
      title: "Estate Planning Strategy",
      description: "Comprehensive planning to minimize taxes and ensure smooth transfer of assets.",
      features: ["Tax Planning Strategies", "Asset Protection", "Succession Planning", "Family Trust Setup"]
    },
    {
      title: "Trust Administration",
      description: "Professional management and administration of family trusts and estate trusts.",
      features: ["Trust Setup & Management", "Trustee Services", "Beneficiary Relations", "Trust Accounting"]
    },
    {
      title: "Estate Administration",
      description: "Complete support for executing estate plans and managing estate affairs.",
      features: ["Executor Guidance", "Asset Distribution", "Debt Settlement", "Final Tax Returns"]
    },
    {
      title: "Probate Services",
      description: "Professional guidance through the probate process to validate wills and distribute estates.",
      features: ["Probate Applications", "Estate Valuations", "Creditor Claims", "Court Representations"]
    }
  ];

  const whyChooseUs = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Estate Law Professionals",
      description: "Specialized professional expertise in wills, estates, and succession planning."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Asset Protection",
      description: "Strategies to protect your assets and minimize tax implications."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Family-Focused",
      description: "Compassionate approach to sensitive family and estate matters."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Timely Service",
      description: "Efficient preparation and execution of estate planning documents."
    }
  ];

  return (
    <>
      <SEOHead
        title="Wills & Power of Attorney Services - Estate Planning Lawyers in Toronto"
        description="Professional estate planning services in Toronto. Will drafting, power of attorney documents, estate administration, and probate services. Protect your family's future."
        keywords="wills lawyer Toronto, power of attorney, estate planning, probate services, trust administration, estate lawyer"
        canonicalUrl={`${window.location.origin}/wills-power-of-attorney`}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary text-primary-foreground" data-testid="wills-hero">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <FileText className="h-8 w-8 text-accent" />
                <span className="text-accent font-medium">Wills & Power of Attorney</span>
              </div>
              <h1 className="text-5xl font-serif font-bold mb-6" data-testid="wills-headline">
                Secure Your Family's Future
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
                Protect your loved ones and ensure your wishes are honored with comprehensive 
                estate planning services. Our experienced lawyers help you plan for the future 
                with confidence and peace of mind.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                  asChild
                  data-testid="free-consultation-button"
                >
                  <Link href="/contact">Free Estate Planning Consultation</Link>
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
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Estate planning consultation with family"
                className="rounded-lg shadow-2xl w-full max-w-lg"
                data-testid="wills-hero-image"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20" data-testid="wills-services">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-primary mb-6" data-testid="services-title">
              Comprehensive Estate Planning Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From simple wills to complex estate strategies, we provide complete 
              legal support to protect your assets and ensure your wishes are carried out.
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
      <section className="py-20 bg-secondary" data-testid="why-choose-wills">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-primary mb-6" data-testid="why-choose-title">
              Why Choose Our Estate Planning Services?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our estate planning team combines professional legal expertise with compassionate 
              guidance to help you make informed decisions about your family's future.
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
              <div className="text-3xl font-bold text-accent mb-2" data-testid="stat-wills">800+</div>
              <div className="text-muted-foreground">Wills Prepared</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2" data-testid="stat-estates">200+</div>
              <div className="text-muted-foreground">Estates Administered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2" data-testid="stat-families">500+</div>
              <div className="text-muted-foreground">Families Protected</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2" data-testid="stat-satisfaction">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20" data-testid="wills-process">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-primary mb-6" data-testid="process-title">
              Our Estate Planning Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow a comprehensive approach to ensure your estate plan 
              meets your unique needs and objectives.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Initial Consultation",
                description: "Discuss your goals, family situation, and estate planning needs."
              },
              {
                step: "02",
                title: "Asset Review",
                description: "Comprehensive review of your assets, liabilities, and financial situation."
              },
              {
                step: "03",
                title: "Document Preparation",
                description: "Draft customized wills, powers of attorney, and other estate documents."
              },
              {
                step: "04",
                title: "Plan Implementation",
                description: "Execute documents and implement your complete estate plan."
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
      <section className="py-20 bg-primary text-primary-foreground" data-testid="wills-cta">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Heart className="h-12 w-12 text-accent mx-auto mb-6" />
            <h2 className="text-4xl font-serif font-bold mb-6" data-testid="cta-title">
              Protect Your Family's Future Today
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Don't leave your family's future to chance. Contact us today to start 
              your comprehensive estate planning process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90"
                asChild
                data-testid="final-cta-button"
              >
                <Link href="/contact">Schedule Your Consultation</Link>
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
