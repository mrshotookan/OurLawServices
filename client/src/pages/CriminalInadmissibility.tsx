import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import { CheckCircle } from "lucide-react";

export default function CriminalInadmissibility() {
  const consequences = [
    "Refusal of applications for temporary or permanent residence",
    "Denial of entry at a Canadian port of entry",
    "Ineligibility for certain immigration programs",
    "Possible removal proceedings for permanent residents",
  ];

  const solutions = [
    {
      title: "Criminal Rehabilitation",
      description: "A formal application to IRCC demonstrating that sufficient time has passed since the completion of the sentence and that the individual has been rehabilitated.",
    },
    {
      title: "Deemed Rehabilitation",
      description: "In certain circumstances, individuals may be considered rehabilitated by the passage of time, without the need for a formal application.",
    },
    {
      title: "Temporary Resident Permit (TRP)",
      description: "A discretionary permit that allows entry or continued presence in Canada despite inadmissibility, where the need to enter Canada outweighs the risk.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Criminal Inadmissibility to Canada - Overcome Your Status"
        description="Learn about criminal inadmissibility under Canada's IRPA and discover options like Criminal Rehabilitation and Temporary Resident Permits (TRPs) to overcome it."
        keywords="criminal inadmissibility, canada immigration, criminal record, IRPA, criminal rehabilitation, temporary resident permit"
        canonicalUrl={`${window.location.origin}/inadmissible/criminal-inadmissibility`}
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
              Criminal Inadmissibility
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
              Under the Immigration and Refugee Protection Act (IRPA), foreign nationals and permanent residents may be found criminally inadmissible to Canada. This determination can have significant consequences, including refusal of temporary or permanent residence applications, denial of entry at the border, or even removal from Canada.
            </p>

            <h2 className="text-3xl font-serif font-bold text-primary mt-12 mb-6">
              What Is Criminal Inadmissibility?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              A finding of criminal inadmissibility arises when an individual has been convicted of, or has committed, an act that constitutes a criminal offence. This applies both to offences committed in Canada and those committed outside the country. The assessment involves comparing the foreign offence with its Canadian equivalent under the Criminal Code or other federal statutes. If the foreign offence would be considered a crime in Canada, inadmissibility may result.
            </p>

            <h2 className="text-3xl font-serif font-bold text-primary mt-12 mb-6">
              Categories of Criminal Inadmissibility
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              1. <strong>Criminality</strong> – generally based on conviction of a single indictable offence, or two or more summary offences.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              2. <strong>Serious Criminality</strong> – includes offences punishable in Canada by a maximum sentence of at least 10 years, or where an actual sentence of more than six months’ imprisonment was imposed. The distinction between criminality and serious criminality is important, as it affects the available remedies.
            </p>

            <h2 className="text-3xl font-serif font-bold text-primary mt-12 mb-6">
              Consequences of Criminal Inadmissibility
            </h2>
            <ul className="space-y-4 mb-8">
              {consequences.map((consequence, index) => (
                <li key={index} className="flex items-start text-lg">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <span>{consequence}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-3xl font-serif font-bold text-primary mt-12 mb-6">
              Options for Overcoming Criminal Inadmissibility
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Individuals found inadmissible are not necessarily barred permanently. Options may include:
            </p>
            <div className="grid md:grid-cols-1 gap-8">
                {solutions.map((solution, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-border">
                        <h3 className="text-xl font-semibold text-primary mb-2">{solution.title}</h3>
                        <p className="text-muted-foreground">{solution.description}</p>
                    </div>
                ))}
            </div>

            <h2 className="text-3xl font-serif font-bold text-primary mt-12 mb-6">
              How Can We Help
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Criminal inadmissibility is a complex and serious barrier in Canadian immigration law. However, with appropriate legal strategy and advocacy, individuals may overcome inadmissibility and secure lawful entry or status in Canada.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              For legal advice and representation regarding criminal inadmissibility, contact Our Law Firm that provides comprehensive guidance in complex immigration matters and represents clients before IRCC, CBSA, and the Immigration and Refugee Board of Canada.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}