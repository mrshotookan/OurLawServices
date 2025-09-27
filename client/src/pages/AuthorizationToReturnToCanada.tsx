import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import { CheckCircle } from "lucide-react";

export default function AuthorizationToReturnToCanada() {
  const whoNeedsARC = [
    "You were removed or deported from Canada.",
    "You were found inadmissible for criminal, medical, or security reasons.",
    "You are seeking to return to Canada before the imposed ban expires.",
  ];

  const howWeCanHelp = [
    "Evaluating eligibility for an ARC.",
    "Preparing and submitting a complete application to IRCC.",
    "Communicating with IRCC on your behalf.",
    "Advising on alternative solutions if an ARC is not immediately granted.",
  ];

  const howToApply = [
    "Gather documents supporting your case, including removal letters, court documents, and any evidence of rehabilitation.",
    "Complete the application form for an Authorization to Return to Canada.",
    "Submit to IRCC with required fees.",
    "Follow up with IRCC while your application is processed.",
  ];

  return (
    <>
      <SEOHead
        title="Authorization to Return to Canada (ARC)"
        description="An Authorization to Return to Canada (ARC) is required for individuals who have been subject to a removal order. Learn who needs an ARC and how to apply."
        keywords="authorization to return to canada, arc application, removal order, deportation order, exclusion order"
        canonicalUrl={`${window.location.origin}/inadmissible/authorization-to-return-to-canada`}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary" data-testid="hero">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl font-serif font-bold text-primary mb-6" data-testid="headline">
              Authorization to Return to Canada (ARC)
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have you been previously inadmissible to Canada? You may need an Authorization to Return (ARC). Our experienced immigration lawyers can help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20" data-testid="main-content">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-serif font-bold text-primary mt-12 mb-6">
              What is an ARC?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              An Authorization to Return to Canada (ARC) is an official permission issued by Immigration, Refugees and Citizenship Canada (IRCC) allowing individuals who were previously removed, deported, or found inadmissible to legally return to Canada before the usual waiting period ends.
            </p>

            <h2 className="text-3xl font-serif font-bold text-primary mt-12 mb-6">
              Who needs an ARC?
            </h2>
             <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              You may require an ARC if:
            </p>
            <ul className="space-y-4 mb-8">
              {whoNeedsARC.map((item, index) => (
                <li key={index} className="flex items-start text-lg">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-3xl font-serif font-bold text-primary mt-12 mb-6">
              Why is an ARC important?
            </h2>
             <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Without an ARC, you cannot re-enter Canada legally during the period of inadmissibility. Obtaining an ARC ensures that your re-entry is authorized and avoids potential border refusal.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              At Our Law Firm, we assist clients with:
            </p>
            <ul className="space-y-4 mb-8">
              {howWeCanHelp.map((item, index) => (
                <li key={index} className="flex items-start text-lg">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-3xl font-serif font-bold text-primary mt-12 mb-6">
              How to Apply
            </h2>
             <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Gather documents supporting your case, including removal letters, court documents, and any evidence of rehabilitation.
            </p>
            <ul className="space-y-4 mb-8">
              {howToApply.map((item, index) => (
                <li key={index} className="flex items-start text-lg">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Don’t risk denial at the border. Contact us today to start your ARC application and ensure a smooth return to Canada.
            </p>

          </motion.div>
        </div>
      </section>
    </>
  );
}