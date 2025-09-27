import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import { CheckCircle } from "lucide-react";

export default function InadmissibleToCanada() {
  const inadmissibilityReasons = [
    "Criminal inadmissibility – past criminal charges or convictions",
    "Medical inadmissibility – health conditions that pose risks or cause “excessive demand” on Canadian services",
    "Misrepresentation – giving false or incomplete information to IRCC",
    "Security or safety concerns – links to organized crime, terrorism, or espionage",
    "Financial reasons – inability to support yourself or dependents",
    "Previous immigration violations – overstaying visas, unauthorized work, or study",
  ];

  const solutions = [
    {
      title: "Temporary Resident Permit (TRP)",
      description: "Allows entry to Canada when the benefits outweigh the risks, even if you are inadmissible.",
    },
    {
      title: "Criminal Rehabilitation",
      description: "A permanent solution for those with past criminal convictions, showing you are rehabilitated.",
    },
    {
      title: "Deemed Rehabilitation",
      description: "In some cases, enough time has passed that you are automatically considered rehabilitated.",
    },
    {
      title: "Medical Inadmissibility Plans",
      description: "Submitting evidence that your condition will not cause excessive demand on Canada’s health or social services.",
    },
    {
      title: "Humanitarian and Compassionate Applications (H&C)",
      description: "Used in special cases, especially for family reunification or hardship situations.",
    },
    {
      title: "Appeals or Judicial Review",
      description: "Some inadmissibility decisions can be appealed or challenged in Federal Court.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Inadmissible to Canada - Options and Solutions"
        description="Learn why you might be inadmissible to Canada and explore legal options like TRPs, Criminal Rehabilitation, and appeals to overcome your status."
        keywords="inadmissible to canada, criminal inadmissibility, medical inadmissibility, temporary resident permit, criminal rehabilitation"
        canonicalUrl={`${window.location.origin}/inadmissible`}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary" data-testid="inadmissible-hero">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl font-serif font-bold text-primary mb-6" data-testid="inadmissible-headline">
              Inadmissible to Canada?
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Options to Overcome Criminal, Medical, or Other Inadmissibility
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
              If you’ve been told you are inadmissible to Canada, it can feel overwhelming. Many people search for answers to questions like: “Can I enter Canada if I have a criminal record?” or “How do I overcome medical inadmissibility in Canada?” The good news is that being inadmissible does not always mean you can never come to Canada. There are legal solutions available depending on your situation.
            </p>

            <h2 className="text-3xl font-serif font-bold text-primary mt-12 mb-6">
              Why Someone Can Be Inadmissible to Canada
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Immigration, Refugees and Citizenship Canada (IRCC) and the Canada Border Services Agency (CBSA) may deny entry for several reasons, including:
            </p>
            <ul className="space-y-4">
              {inadmissibilityReasons.map((reason, index) => (
                <li key={index} className="flex items-start text-lg">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-3xl font-serif font-bold text-primary mt-12 mb-6">
              Ways to Overcome Inadmissibility
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Even if you are inadmissible, there are legal options that may allow you to enter or remain in Canada:
            </p>
            <div className="grid md:grid-cols-2 gap-8">
                {solutions.map((solution, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-border">
                        <h3 className="text-xl font-semibold text-primary mb-2">{solution.title}</h3>
                        <p className="text-muted-foreground">{solution.description}</p>
                    </div>
                ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}