import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import { CheckCircle } from "lucide-react";

export default function TemporaryResidentPermits() {
  const whoNeedsTRP = [
    "Criminal inadmissibility (e.g., past DUI conviction)",
    "Medical inadmissibility",
    "Misrepresentation findings",
    "Other grounds under the Immigration and Refugee Protection Act (IRPA)",
  ];

  const keyFeatures = [
    {
      title: "Discretionary",
      description: "IRCC officers weigh the applicant’s need to enter/remain in Canada against the risk to Canadian society."
    },
    {
      title: "Validity",
      description: "May be issued for a specific purpose or period (from one day up to three years)."
    },
    {
      title: "Renewable",
      description: "Can sometimes be extended if the reason for inadmissibility remains."
    },
    {
      title: "Does not resolve inadmissibility permanently",
      description: "It provides a temporary solution, not a permanent fix."
    }
  ];

  const benefits = [
    "Enables travel to Canada for work, study, family visits, or emergencies.",
    "Allows continued stay in Canada despite inadmissibility.",
    "In some cases, holding a TRP for an extended period may create a pathway to permanent residence.",
  ];

  const howWeCanHelp = [
    "Assess your inadmissibility and eligibility for a TRP.",
    "Prepare a detailed application package addressing officer concerns.",
    "Advocate for your case, ensuring procedural fairness and clarity.",
    "Explore long-term solutions to resolve inadmissibility permanently.",
  ];

  return (
    <>
      <SEOHead
        title="Temporary Resident Permits (TRPs) in Canada"
        description="A Temporary Resident Permit (TRP) allows an inadmissible person to enter or remain in Canada. Learn about who needs a TRP, its benefits, and how to apply."
        keywords="temporary resident permit, trp canada, criminal inadmissibility, medical inadmissibility, ircc permit"
        canonicalUrl={`${window.location.origin}/inadmissible/temporary-resident-permits`}
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
              Temporary Resident Permits (TRPs) in Canada
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
              A Temporary Resident Permit (TRP) is a special document issued at the discretion of Immigration, Refugees and Citizenship Canada (IRCC) that allows an otherwise inadmissible person to enter or remain in Canada for a limited period.
            </p>

            <h2 className="text-3xl font-serif font-bold text-primary mt-12 mb-6">
              Who Needs a TRP?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              A TRP may be required if you are inadmissible to Canada for reasons such as:
            </p>
            <ul className="space-y-4 mb-8">
              {whoNeedsTRP.map((item, index) => (
                <li key={index} className="flex items-start text-lg">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-3xl font-serif font-bold text-primary mt-12 mb-6">
              Key Features of a TRP
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-border">
                  <h3 className="text-xl font-semibold text-primary mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-serif font-bold text-primary mt-12 mb-6">
              Benefits of a TRP
            </h2>
            <ul className="space-y-4 mb-8">
              {benefits.map((item, index) => (
                <li key={index} className="flex items-start text-lg">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-3xl font-serif font-bold text-primary mt-12 mb-6">
              Applying for a TRP
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Applicants must provide a clear explanation of the inadmissibility issue, supporting documents showing why entry is justified (employment, family ties, humanitarian reasons, etc.), and evidence that the need to enter/remain in Canada outweighs potential risks.
            </p>

            <h2 className="text-3xl font-serif font-bold text-primary mt-12 mb-6">
              How Can We Help
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Applying for a TRP requires strong evidence and persuasive submissions. Our immigration lawyers can:
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
              Contact us today to learn whether a TRP is the right solution for your situation and how we can help you enter or remain in Canada lawfully.
            </p>

          </motion.div>
        </div>
      </section>
    </>
  );
}