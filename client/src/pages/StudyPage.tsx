import { useParams } from "wouter";
import { studyPages } from "@shared/workPermits";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Clock, DollarSign, CheckCircle, HelpCircle, ArrowRight, Phone, Mail, GraduationCap, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export default function StudyPage() {
  const params = useParams();
  const slug = params.slug;
  
  const pageData = studyPages.find(page => page.slug === slug);

  if (!pageData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">Page Not Found</h1>
          <p className="text-muted-foreground mb-6">The study page you're looking for doesn't exist.</p>
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
        canonicalUrl={`${window.location.origin}/study/${pageData.slug}`}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20 py-20 pt-32" data-testid="hero-section">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex justify-center mb-6">
              <GraduationCap className="w-16 h-16 text-accent dark:text-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary dark:text-primary mb-6" data-testid="page-title">
              {pageData.hero.title}
            </h1>
            <p className="text-xl text-muted-foreground dark:text-muted-foreground leading-relaxed mb-8" data-testid="page-description">
              {pageData.hero.description}
            </p>
            
            {/* Quick Info Cards */}
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <div className="bg-white/80 dark:bg-black/80 backdrop-blur-sm rounded-xl p-6 border border-border dark:border-border">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-5 h-5 text-accent dark:text-accent" />
                  <h3 className="font-semibold text-primary dark:text-primary">Processing Time</h3>
                </div>
                <p className="text-muted-foreground dark:text-muted-foreground">{pageData.processingTime}</p>
              </div>
              <div className="bg-white/80 dark:bg-black/80 backdrop-blur-sm rounded-xl p-6 border border-border dark:border-border">
                <div className="flex items-center gap-3 mb-2">
                  <DollarSign className="w-5 h-5 text-accent dark:text-accent" />
                  <h3 className="font-semibold text-primary dark:text-primary">Government Fees</h3>
                </div>
                <p className="text-muted-foreground dark:text-muted-foreground">{pageData.fees}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button size="lg" className="bg-accent dark:bg-accent hover:bg-accent/90 dark:hover:bg-accent/90 text-white dark:text-white" asChild data-testid="cta-consultation">
                <Link href="/contact">Get Expert Help Today</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-primary dark:border-primary text-primary dark:text-primary hover:bg-primary dark:hover:bg-primary hover:text-white dark:hover:text-white" asChild data-testid="cta-phone">
                <a href="tel:+15555555555">Call Now: (555) LAW-FIRM</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20" data-testid="overview-section">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif font-bold text-primary dark:text-primary mb-8" data-testid="overview-title">
                {pageData.overview.title}
              </h2>
              <div className="space-y-6">
                {pageData.overview.content.map((paragraph, index) => (
                  <p key={index} className="text-lg text-muted-foreground dark:text-muted-foreground leading-relaxed" data-testid={`overview-paragraph-${index}`}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Eligibility and Process Section */}
      <section className="py-20 bg-secondary/30 dark:bg-secondary/30" data-testid="eligibility-process-section">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Eligibility Requirements */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-black rounded-2xl p-8 shadow-lg border border-border dark:border-border"
            >
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-6 h-6 text-accent dark:text-accent" />
                <h2 className="text-2xl font-serif font-bold text-primary dark:text-primary" data-testid="eligibility-title">
                  {pageData.eligibility.title}
                </h2>
              </div>
              <ul className="space-y-4">
                {pageData.eligibility.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start gap-3" data-testid={`requirement-${index}`}>
                    <div className="w-2 h-2 bg-accent dark:bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground dark:text-muted-foreground">{requirement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Process Steps */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-black rounded-2xl p-8 shadow-lg border border-border dark:border-border"
            >
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-6 h-6 text-accent dark:text-accent" />
                <h2 className="text-2xl font-serif font-bold text-primary dark:text-primary" data-testid="process-title">
                  {pageData.process.title}
                </h2>
              </div>
              <div className="space-y-6">
                {pageData.process.steps.map((step, index) => (
                  <div key={index} className="flex gap-4" data-testid={`step-${index}`}>
                    <div className="w-8 h-8 bg-accent dark:bg-accent text-white dark:text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary dark:text-primary mb-2">{step.title}</h3>
                      <p className="text-muted-foreground dark:text-muted-foreground text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20" data-testid="faqs-section">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-12 justify-center">
                <HelpCircle className="w-8 h-8 text-accent dark:text-accent" />
                <h2 className="text-3xl font-serif font-bold text-primary dark:text-primary" data-testid="faqs-title">
                  Frequently Asked Questions
                </h2>
              </div>
              
              <div className="space-y-6">
                {pageData.faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-black rounded-xl p-6 shadow-lg border border-border dark:border-border"
                    data-testid={`faq-${index}`}
                  >
                    <h3 className="text-lg font-semibold text-primary dark:text-primary mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground dark:text-muted-foreground">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary dark:bg-primary text-white dark:text-white" data-testid="cta-section">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif font-bold mb-6" data-testid="cta-title">
                Ready to Start Your Canadian Education Journey?
              </h2>
              <p className="text-xl mb-8 opacity-90" data-testid="cta-description">
                Our experienced immigration lawyers are here to guide you through every step of the {pageData.title.toLowerCase()} process.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-accent dark:bg-accent hover:bg-accent/90 dark:hover:bg-accent/90 text-white dark:text-white" asChild data-testid="cta-contact">
                  <Link href="/contact" className="inline-flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Start Your Application
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-white dark:border-white text-white dark:text-white hover:bg-white dark:hover:bg-white hover:text-primary dark:hover:text-primary" asChild data-testid="cta-phone-bottom">
                  <a href="tel:+15555555555" className="inline-flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Call for Free Consultation
                  </a>
                </Button>
              </div>
              
              <div className="mt-8 flex items-center justify-center gap-8 text-sm opacity-75">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Free Initial Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>95% Success Rate</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Expert Legal Guidance</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}