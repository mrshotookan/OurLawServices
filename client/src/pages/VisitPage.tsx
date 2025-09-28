import { useParams } from "wouter";
import { visitPages } from "@shared/workPermits";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Clock, DollarSign, CheckCircle, HelpCircle, ArrowRight, Phone, Mail, Plane } from "lucide-react";
import { motion } from "framer-motion";

export default function VisitPage() {
  const params = useParams();
  const slug = params.slug;
  
  const pageData = visitPages.find(page => page.slug === slug);

  if (!pageData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">Page Not Found</h1>
          <p className="text-muted-foreground mb-6">The visitor page you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/immigration-law">Back to Immigration Law</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title={pageData.metaTitle}
        description={pageData.metaDescription}
        keywords={pageData.keywords.join(", ")}
        canonicalUrl={`${window.location.origin}/visit/${pageData.slug}`}
      />

      <div className="min-h-screen bg-background text-foreground">
        {/* Hero Section */}
        <motion.section 
          className="pt-32 pb-20 bg-secondary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          data-testid="visit-hero"
        >
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-8"
              >
                <Plane className="w-10 h-10 text-accent" />
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6 text-primary"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                data-testid="visit-title"
              >
                {pageData.hero.title}
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl mb-8 text-muted-foreground"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                data-testid="visit-description"
              >
                {pageData.hero.description}
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button 
                  size="lg" 
                  asChild
                  data-testid="get-consultation-button"
                >
                  <Link href="/contact">Book Your Consultation</Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  asChild
                  data-testid="view-services-button"
                >
                  <Link href="/immigration-law">View All Services</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Overview Section */}
        <motion.section 
          className="py-20 bg-background"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          data-testid="visit-overview"
        >
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-primary" data-testid="overview-title">
                {pageData.overview.title}
              </h2>
              <div className="space-y-6">
                {pageData.overview.content.map((paragraph, index) => (
                  <p 
                    key={index} 
                    className="text-lg leading-relaxed text-foreground"
                    data-testid={`overview-paragraph-${index}`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Eligibility Section */}
        <motion.section 
          className="py-20 bg-secondary/30"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          data-testid="visit-eligibility"
        >
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-primary" data-testid="eligibility-title">
                {pageData.eligibility.title}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {pageData.eligibility.requirements.map((requirement, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-3 bg-background p-6 rounded-lg shadow-sm"
                    data-testid={`eligibility-item-${index}`}
                  >
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-foreground">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Process Section */}
        <motion.section 
          className="py-20 bg-background"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          data-testid="visit-process"
        >
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-primary" data-testid="process-title">
                {pageData.process.title}
              </h2>
              <div className="space-y-8">
                {pageData.process.steps.map((step, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-6 bg-secondary/20 p-6 rounded-lg"
                    data-testid={`process-step-${index}`}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-primary">{step.title}</h3>
                      <p className="text-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Info Cards Section */}
        <motion.section 
          className="py-20 bg-secondary/30"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          data-testid="visit-info-cards"
        >
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-background p-8 rounded-lg shadow-sm" data-testid="processing-time-card">
                  <div className="flex items-center space-x-3 mb-4">
                    <Clock className="w-8 h-8 text-primary" />
                    <h3 className="text-2xl font-bold text-primary">Processing Time</h3>
                  </div>
                  <p className="text-lg text-foreground">{pageData.processingTime}</p>
                </div>

                <div className="bg-background p-8 rounded-lg shadow-sm" data-testid="fees-card">
                  <div className="flex items-center space-x-3 mb-4">
                    <DollarSign className="w-8 h-8 text-primary" />
                    <h3 className="text-2xl font-bold text-primary">Fees</h3>
                  </div>
                  <p className="text-lg text-foreground">{pageData.fees}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section 
          className="py-20 bg-background"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          data-testid="visit-faq"
        >
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-primary" data-testid="faq-title">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {pageData.faqs.map((faq, index) => (
                  <div 
                    key={index}
                    className="bg-secondary/20 p-6 rounded-lg"
                    data-testid={`faq-item-${index}`}
                  >
                    <div className="flex items-start space-x-4">
                      <HelpCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-primary">{faq.question}</h3>
                        <p className="text-foreground leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="py-20 bg-primary text-primary-foreground"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          data-testid="visit-cta"
        >
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6" data-testid="cta-title">
                Ready to Start Your Canadian Visit Application?
              </h2>
              <p className="text-xl mb-8 text-primary-foreground/90" data-testid="cta-description">
                Get professional legal guidance for your visitor visa application. Our experienced immigration lawyers are here to help you navigate the process successfully.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6" />
                  <div>
                    <p className="font-semibold">Call Us Today</p>
                    <p className="text-primary-foreground/90">(555) LAW-FIRM</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6" />
                  <div>
                    <p className="font-semibold">Email Us</p>
                    <p className="text-primary-foreground/90">info@ourlawservices.com</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  asChild
                  data-testid="cta-consultation-button"
                >
                  <Link href="/contact">
                    <span className="mr-2">Book Your Consultation</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  asChild
                  data-testid="cta-services-button"
                >
                  <Link href="/visit">View All Visitor Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </>
  );
}