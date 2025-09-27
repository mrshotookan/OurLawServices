import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import { CheckCircle } from "lucide-react";

export default function MisrepresentationInCanadianImmigration() {
  const misrepresentationOccursWhen = [
    "Provides false or misleading information to Immigration, Refugees and Citizenship Canada (IRCC), the Canada Border Services Agency (CBSA), or the Immigration and Refugee Board (IRB).",
    "Submits fraudulent or altered documents, such as bank statements, employment letters, or marriage certificates.",
    "Fails to disclose relevant information, such as a previous visa refusal, criminal charges, or family relationships.",
    "Omits material facts that could influence an officer’s decision, even if the omission was accidental.",
  ];

  const consequences = [
    "Immediate refusal of the application.",
    "A five-year ban from submitting new applications for permanent residence, temporary residence, or refugee protection.",
    "A finding of inadmissibility, which may result in a removal order if the person is already in Canada.",
    "Consequences that extend not only to the principal applicant but also to accompanying family members.",
  ];

  const commonScenarios = [
    "Failure to disclose prior visa refusals from Canada or other countries.",
    "Inconsistent employment or education history across different applications.",
    "Omitting family members from an application to make the process appear faster or easier.",
    "Using unverified or fraudulent documents prepared by third parties or unregulated consultants.",
  ];

  const defenseOptions = [
    "Appealing to the Immigration Appeal Division (IAD), if the person is a permanent resident.",
    "Seeking judicial review at the Federal Court.",
    "Humanitarian and compassionate (H&C) applications, in exceptional cases where refusal would cause undue hardship.",
  ];

  const howWeCanHelp = [
    "Review your application to identify potential misrepresentation issues before submission.",
    "Prepare strong responses to procedural fairness letters.",
    "Represent you in appeals and Federal Court proceedings.",
    "Advise on alternative options if misrepresentation has already been alleged.",
  ];

  return (
    <>
      <SEOHead
        title="Misrepresentation in Canadian Immigration - What to Know"
        description="Learn what constitutes misrepresentation in Canadian immigration under IRPA, the severe consequences, and how to defend against such allegations."
        keywords="misrepresentation canada immigration, IRPA section 40, false information ircc, immigration ban, procedural fairness letter"
        canonicalUrl={`${window.location.origin}/inadmissible/misrepresentation-in-canadian-immigration`}
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
              Misrepresentation in Canadian Immigration
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
              Misrepresentation is one of the most serious issues that can arise in a Canadian immigration application. Many applicants are surprised to learn that even an unintentional mistake can be treated as misrepresentation, with life-changing consequences. If you are applying for temporary or permanent residence in Canada, understanding what counts as misrepresentation—and how to avoid it—is critical.
            </p>

            <h2 className="text-3xl font-serif font-bold text-primary mt-12 mb-6">
              What is Misrepresentation?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Under section 40 of the Immigration and Refugee Protection Act (IRPA), misrepresentation occurs when an applicant:
            </p>
            <ul className="space-y-4 mb-8">
              {misrepresentationOccursWhen.map((item, index) => (
                <li key={index} className="flex items-start text-lg">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                It is important to note that intent is not required. A genuine mistake or misunderstanding can still be treated as misrepresentation if the information was material to the decision.
            </p>

            <h2 className="text-3xl font-serif font-bold text-primary mt-12 mb-6">
              Consequences of Misrepresentation
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              The penalties for misrepresentation are harsh and can include:
            </p>
            <ul className="space-y-4 mb-8">
              {consequences.map((item, index) => (
                <li key={index} className="flex items-start text-lg">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
             <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              These penalties reflect the Canadian government’s emphasis on the integrity of the immigration system.
            </p>

            <h2 className="text-3xl font-serif font-bold text-primary mt-12 mb-6">
             How Misrepresentation Commonly Occurs
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Some of the most frequent scenarios we see in practice include:
            </p>
            <ul className="space-y-4 mb-8">
              {commonScenarios.map((item, index) => (
                <li key={index} className="flex items-start text-lg">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              In many cases, applicants believe the omission is “small” or irrelevant—but IRCC takes a strict approach.
            </p>

            <h2 className="text-3xl font-serif font-bold text-primary mt-12 mb-6">
              Defending Against Allegations of Misrepresentation
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
             Before making a final decision, IRCC usually issues a Procedural Fairness Letter (PFL). This letter gives the applicant an opportunity to respond and explain the discrepancy. A well-prepared response can sometimes resolve the issue.
            </p>
             <p className="text-lg text-muted-foreground leading-relaxed mb-8">
             If IRCC or CBSA concludes that misrepresentation occurred, options may include:
            </p>
            <ul className="space-y-4 mb-8">
              {defenseOptions.map((item, index) => (
                <li key={index} className="flex items-start text-lg">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-3xl font-serif font-bold text-primary mt-12 mb-6">
              How Can We Help
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              An experienced immigration lawyer can:
            </p>
            <ul className="space-y-4 mb-8">
              {howWeCanHelp.map((item, index) => (
                <li key={index} className="flex items-start text-lg">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Contact our office today to discuss your situation and protect your immigration status.
            </p>

          </motion.div>
        </div>
      </section>
    </>
  );
}