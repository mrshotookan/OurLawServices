import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle, ExternalLink } from "lucide-react";

export default function SponsorshipApplications() {
  const whoCanSponsor = [
    "Be at least 18 years of age;",
    "Be a Canadian citizen, permanent resident, or a registered Indian under the Canadian Indian Act;",
    "Reside in Canada, or in the case of citizens abroad, demonstrate intent to return once the sponsored person becomes a permanent resident;",
    "Sign an undertaking to provide financial support to the sponsored person;",
    "Not be subject to bars such as bankruptcy, default on previous sponsorship undertakings, or certain criminal convictions.",
  ];

  const whoCanBeSponsored = [
    "Spouses, common-law partners, or conjugal partners;",
    "Dependent children, including adopted children;",
    "Parents and grandparents, under the Parent and Grandparent Sponsorship Program;",
    "In limited circumstances, other relatives, where no other family members are available to sponsor.",
  ];

  const sponsorshipObligations = [
    {
      person: "Spouse/partner",
      duration: "3 years",
    },
    {
      person: "Dependent child",
      duration: "10 years or until age 25 (whichever comes first)",
    },
    {
      person: "Parent or grandparent",
      duration: "20 years",
    },
  ];

  const groundsForRefusal = [
    "The sponsor does not meet eligibility criteria;",
    "The sponsored family member is inadmissible to Canada (criminal, medical, misrepresentation, or other grounds);",
    "The relationship is deemed non-genuine (e.g., marriages of convenience).",
  ];

  const howWeCanHelp = [
    "Assess sponsor eligibility and identify potential bars;",
    "Prepare persuasive submissions and supporting documentation;",
    "Respond to Procedural Fairness Letters (PFLs) issued by IRCC;",
    "Represent clients in appeals before the Immigration Appeal Division if a sponsorship application is refused.",
  ];

  return (
    <>
      <SEOHead
        title="Sponsorship Applications - Family Reunification Canada"
        description="Learn about the Family Class Sponsorship Program in Canada. Sponsor your spouse, partner, children, parents, or grandparents for permanent residence with expert legal help."
        keywords="family sponsorship canada, spousal sponsorship, parent sponsorship, family class, ircc sponsorship"
        canonicalUrl={`${window.location.origin}/sponsorship-applications`}
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
              Sponsorship Applications
            </h1>
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
              Family reunification is a cornerstone of Canadian immigration policy. Through the Family Class Sponsorship Program, citizens and permanent residents of Canada may apply to sponsor eligible family members for permanent residence. These applications are processed by Immigration, Refugees and Citizenship Canada (IRCC) and are subject to strict legal and procedural requirements. For more information, you can visit the official <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/family-sponsorship.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">IRCC Family Sponsorship website <ExternalLink className="inline-block h-4 w-4" /></a>.
            </p>

            <h2 className="text-3xl font-serif font-bold text-primary mt-12 mb-6">
              Who Can Be a Sponsor?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
             To qualify as a sponsor, an individual must:
            </p>
            <ul className="space-y-4 mb-8">
              {whoCanSponsor.map((item, index) => (
                <li key={index} className="flex items-start text-lg">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-3xl font-serif font-bold text-primary mt-12 mb-6">
              Who Can Be Sponsored?
            </h2>
             <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Eligible family members include:
            </p>
            <ul className="space-y-4 mb-8">
              {whoCanBeSponsored.map((item, index) => (
                <li key={index} className="flex items-start text-lg">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-3xl font-serif font-bold text-primary mt-12 mb-6">
              Sponsorship Obligations
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              A sponsor must sign a legally binding undertaking to provide for the basic needs of the sponsored relative, including food, shelter, clothing, and health care not covered by public insurance. The duration of this undertaking varies depending on the relationship:
            </p>
            <ul className="space-y-4 mb-8">
              {sponsorshipObligations.map((item, index) => (
                <li key={index} className="flex items-start text-lg">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <span><strong>{item.person}:</strong> {item.duration}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-3xl font-serif font-bold text-primary mt-12 mb-6">
              Grounds for Refusal
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Sponsorship applications may be refused if:
            </p>
            <ul className="space-y-4 mb-8">
              {groundsForRefusal.map((item, index) => (
                <li key={index} className="flex items-start text-lg">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-3xl font-serif font-bold text-primary mt-12 mb-6">
              How We Can Help
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Sponsorship applications are often complex, requiring substantial evidence to establish both eligibility and the genuineness of the relationship. Legal counsel can:
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
              For legal advice and representation regarding sponsorship applications with IRCC, <Link href="/contact" className="text-primary hover:underline">contact Iqbal Law Firm</Link>. Our team provides comprehensive support in all aspects of Canadian family immigration law.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}