import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SEOHead from "@/components/SEOHead";
import { Link } from "wouter";
import { Gavel, CheckCircle, Shield, Scale, Clock, AlertCircle } from "lucide-react";

export default function CriminalLaw() {
  const services = [
    {
      title: "Criminal Defense Representation",
      description: "Aggressive defense representation for all types of criminal charges and offenses.",
      features: ["Assault & Battery", "Theft & Fraud", "Drug Offenses", "White Collar Crimes"]
    },
    {
      title: "DUI/DWI Defense",
      description: "Specialized defense for impaired driving charges and related offenses.",
      features: ["First-Time DUI", "Multiple DUI Offenses", "Breathalyzer Challenges", "License Reinstatement"]
    },
    {
      title: "Bail Hearings & Applications",
      description: "Professional representation at bail hearings to secure your release from custody.",
      features: ["Bail Applications", "Surety Arrangements", "Release Conditions", "Variation Applications"]
    },
    {
      title: "Trial Representation",
      description: "Experienced trial lawyers providing strong courtroom representation.",
      features: ["Jury Trials", "Bench Trials", "Evidence Challenges", "Cross-Examinations"]
    },
    {
      title: "Appeals & Post-Conviction",
      description: "Comprehensive appellate services and post-conviction relief options.",
      features: ["Appeal Applications", "Fresh Evidence", "Sentence Appeals", "Conviction Reviews"]
    },
    {
      title: "Youth Criminal Defense",
      description: "Specialized representation for young persons facing criminal charges.",
      features: ["Youth Court Representation", "Extrajudicial Measures", "Parental Guidance", "Records Sealing"]
    }
  ];

  const whyChooseUs = [
    {
      icon: <Gavel className="h-6 w-6" />,
      title: "Criminal Law Specialists",
      description: "Dedicated criminal defense lawyers with extensive courtroom experience."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Rights Protection",
      description: "Fierce advocacy to protect your constitutional rights and freedoms."
    },
    {
      icon: <Scale className="h-6 w-6" />,
      title: "Proven Results",
      description: "Strong track record of successful defenses and favorable outcomes."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Availability",
      description: "Available around the clock for urgent criminal matters and arrests."
    }
  ];

  return (
    <>
      <SEOHead
        title="Criminal Law Services - Criminal Defense Lawyers in Toronto"
        description="Professional criminal defense representation in Toronto. DUI defense, bail hearings, trial representation, and appeals. Protecting your rights and freedom."
        keywords="criminal lawyer Toronto, DUI defense, criminal defense, bail hearings, trial representation, criminal appeals"
        canonicalUrl={`${window.location.origin}/criminal-law`}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary text-primary-foreground" data-testid="criminal-hero">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Gavel className="h-8 w-8 text-accent" />
                <span className="text-accent font-medium">Criminal Law</span>
              </div>
              <h1 className="text-5xl font-serif font-bold mb-6" data-testid="criminal-headline">
                Defending Your Rights & Freedom
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
                When your freedom is on the line, you need experienced criminal defense 
                lawyers who will fight tirelessly to protect your rights and achieve 
                the best possible outcome for your case.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                  asChild
                  data-testid="emergency-consultation-button"
                >
                  <Link href="/contact">Emergency Consultation</Link>
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
              
              <div className="mt-8 p-4 bg-red-600/20 rounded-lg border border-red-400/30">
                <div className="flex items-center gap-2 text-primary-foreground">
                  <AlertCircle className="h-5 w-5" />
                  <span className="font-semibold">Been Arrested?</span>
                </div>
                <p className="text-sm text-primary-foreground/80 mt-1">
                  Contact us immediately. Time is critical in criminal matters.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:justify-self-end"
            >
              <img
                src="https://images.unsplash.com/photo-1589994965851-a8f479c573a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Criminal defense lawyer in courtroom"
                className="rounded-lg shadow-2xl w-full max-w-lg"
                data-testid="criminal-hero-image"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20" data-testid="criminal-services">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-primary mb-6" data-testid="services-title">
              Comprehensive Criminal Defense Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From minor offenses to serious felonies, we provide aggressive defense 
              representation across all areas of criminal law to protect your future.
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
      <section className="py-20 bg-secondary" data-testid="why-choose-criminal">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-primary mb-6" data-testid="why-choose-title">
              Why Choose Our Criminal Defense Services?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              When facing criminal charges, you need lawyers with the experience, 
              dedication, and courtroom skills to defend your rights effectively.
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
              <div className="text-3xl font-bold text-accent mb-2" data-testid="stat-cases">300+</div>
              <div className="text-muted-foreground">Criminal Cases Defended</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2" data-testid="stat-acquittals">85%</div>
              <div className="text-muted-foreground">Favorable Outcomes</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2" data-testid="stat-experience">15+</div>
              <div className="text-muted-foreground">Years Criminal Law</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2" data-testid="stat-availability">24/7</div>
              <div className="text-muted-foreground">Emergency Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20" data-testid="criminal-process">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-primary mb-6" data-testid="process-title">
              Our Criminal Defense Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow a strategic approach to build the strongest possible defense 
              for your criminal case from the first consultation through trial.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                step: "01",
                title: "Case Assessment",
                description: "Thorough review of charges, evidence, and potential defenses."
              },
              {
                step: "02",
                title: "Investigation",
                description: "Independent investigation to gather evidence and witness statements."
              },
              {
                step: "03",
                title: "Strategy Development",
                description: "Create comprehensive defense strategy tailored to your case."
              },
              {
                step: "04",
                title: "Pre-Trial Motions",
                description: "File motions to exclude evidence and strengthen your position."
              },
              {
                step: "05",
                title: "Trial or Resolution",
                description: "Aggressive trial representation or favorable plea negotiations."
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

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground" data-testid="criminal-cta">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Scale className="h-12 w-12 text-accent mx-auto mb-6" />
            <h2 className="text-4xl font-serif font-bold mb-6" data-testid="cta-title">
              Don't Face Criminal Charges Alone
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Your freedom and future are at stake. Contact our experienced criminal 
              defense team immediately for aggressive representation and protection of your rights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90"
                asChild
                data-testid="final-cta-button"
              >
                <Link href="/contact">Get Immediate Help</Link>
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
