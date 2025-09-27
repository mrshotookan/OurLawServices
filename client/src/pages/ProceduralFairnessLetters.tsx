import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import { CheckCircle } from "lucide-react";

export default function ProceduralFairnessLetters() {
  const groundsForIssuance = [
    "Allegations of misrepresentation, whether through omission, inconsistency, or suspected falsification of documents;",
    "Questions concerning eligibility, such as work experience, educational credentials, or proof of funds;",
    "Potential medical inadmissibility, where an applicant’s condition may be deemed to cause excessive demand on health or social services;",
    "Concerns relating to criminality or security;",
    "Submissions that are incomplete, inconsistent, or contradictory.",
  ];

  const effectiveResponsePoints = [
    "Directly address each concern raised by IRCC;",
    "Be supported by documentary evidence and, where appropriate, sworn statements or expert reports;",
    "Be structured, factual, and devoid of speculation;",
    "Be submitted within the deadline stipulated by IRCC.",
  ];

  return (
    <>
      <SEOHead
        title="Procedural Fairness Letters from IRCC - What Applicants Need to Know"
        description="A Procedural Fairness Letter (PFL) is a formal notice from IRCC about concerns that could lead to refusal. Learn how to respond effectively."
        keywords="procedural fairness letter, PFL, IRCC, immigration canada, misrepresentation, inadmissibility"
        canonicalUrl={`${window.location.origin}/inadmissible/procedural-fairness-letters`}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary" data-testid="pfl-hero">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl font-serif font-bold text-primary mb-6" data-testid="pfl-headline">
              Procedural Fairness Letters from IRCC
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              What Applicants Need to Know
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
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Applicants to Immigration, Refugees and Citizenship Canada (IRCC) may, at times, receive a Procedural Fairness Letter (PFL) during the processing of their file. A PFL is not a final decision. Rather, it is a formal notice that concerns have been identified which, if left unaddressed, could result in the refusal of the application.
            </p>

            <h2 className="text-3xl font-serif font-bold text-primary mt-12 mb-6">
              Purpose of a Procedural Fairness Letter
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Canadian administrative law requires that applicants be given an opportunity to respond to adverse information before a decision is rendered. The issuance of a PFL satisfies this requirement of procedural fairness, ensuring that an applicant’s right to be heard is respected.
            </p>

            <h2 className="text-3xl font-serif font-bold text-primary mt-12 mb-6">
              Grounds for Issuance
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Procedural Fairness Letters may be issued in a variety of circumstances, including but not limited to:
            </p>
            <ul className="space-y-4 mb-8">
              {groundsForIssuance.map((reason, index) => (
                <li key={index} className="flex items-start text-lg">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-3xl font-serif font-bold text-primary mt-12 mb-6">
              Responding to a PFL
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              An applicant’s response to a PFL is pivotal. A failure to respond adequately, or to respond at all, will almost certainly result in refusal. In cases of misrepresentation, an adverse finding can also lead to a five-year bar on reapplying for permanent residence.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed font-semibold mb-4">
              An effective response should:
            </p>
            <ul className="space-y-4 mb-8">
              {effectiveResponsePoints.map((point, index) => (
                <li key={index} className="flex items-start text-lg">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-3xl font-serif font-bold text-primary mt-12 mb-6">
              How We Can Help
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A Procedural Fairness Letter should be regarded as both a warning and an opportunity. The manner in which it is addressed will, in most cases, determine the outcome of the application.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              For legal advice and representation in responding to a PFL, contact Our Law Firm that provides experienced guidance in complex immigration matters and ensures that applicants’ rights to procedural fairness are fully protected.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}