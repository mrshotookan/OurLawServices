import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import { CheckCircle } from "lucide-react";

export default function MedicalInadmissibility() {
  const grounds = [
    {
      title: "Danger to Public Health",
      description: "Conditions that may endanger the health of others, such as untreated infectious diseases (e.g., active tuberculosis), may result in inadmissibility."
    },
    {
      title: "Danger to Public Safety",
      description: "Health conditions that could reasonably lead to unpredictable or violent behaviour, sudden incapacity, or impaired judgment may be deemed a risk to public safety."
    },
    {
      title: "Excessive Demand on Health or Social Services",
      description: "An applicant may be found inadmissible if their medical condition is expected to place a demand on Canadian health or social services that is likely to exceed the average Canadian per capita health/social services cost threshold, or negatively impact wait times or resource availability for Canadian residents."
    }
  ];

  const consequences = [
    "Refusal of an application for permanent residence or certain temporary residence categories",
    "Ineligibility for sponsorship, work permits, or study permits in some cases",
    "Potential separation of families when one member is found inadmissible",
  ];

  const remedies = [
    {
      title: "Individualized Mitigation Plans",
      description: "Applicants can propose a detailed plan showing how their condition will be managed without excessive reliance on public services."
    },
    {
        title: "Humanitarian and Compassionate (H&C) Considerations",
        description: "In certain circumstances, particularly family reunification cases, humanitarian grounds may outweigh medical inadmissibility findings."
    },
    {
        title: "Judicial Review",
        description: "Negative decisions may be challenged at the Federal Court if errors of law or fact are identified."
    }
  ];

  const howWeCanHelp = [
    "Analyze IRCC’s medical officer’s opinion and cost assessment",
    "Coordinate with medical professionals to prepare persuasive evidence",
    "Develop effective mitigation plans tailored to Canadian standards",
    "Represent applicants in submissions, appeals, or judicial review proceedings"
  ]

  return (
    <>
      <SEOHead
        title="Medical Inadmissibility to Canada - Causes and Solutions"
        description="Understand medical inadmissibility under IRPA, including grounds like public health risks and excessive demand, and learn about remedies such as mitigation plans."
        keywords="medical inadmissibility canada, excessive demand, IRPA, public health risk, mitigation plan, immigration lawyer"
        canonicalUrl={`${window.location.origin}/inadmissible/medical-inadmissibility`}
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
              Medical Inadmissibility
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
              Under the Immigration and Refugee Protection Act (IRPA), foreign nationals may be found medically inadmissible to Canada if their health condition is likely to pose risks to public health, public safety, or place an excessive demand on Canadian health or social services. A finding of medical inadmissibility can lead to the refusal of applications for temporary or permanent residence.
            </p>

            <h2 className="text-3xl font-serif font-bold text-primary mt-12 mb-6">
              Grounds for Medical Inadmissibility
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Medical inadmissibility findings generally fall into three categories:
            </p>
            <div className="space-y-8">
              {grounds.map((ground, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-border">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {index + 1}. {ground.title}
                  </h3>
                  <p className="text-muted-foreground">{ground.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-serif font-bold text-primary mt-12 mb-6">
              Consequences of a Medical Inadmissibility Finding
            </h2>
            <ul className="space-y-4 mb-8">
              {consequences.map((item, index) => (
                <li key={index} className="flex items-start text-lg">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-3xl font-serif font-bold text-primary mt-12 mb-6">
              Responding to a Medical Inadmissibility Concern
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Applicants are often issued a Procedural Fairness Letter (PFL) before a final finding of medical inadmissibility. At this stage, it is critical to respond with up-to-date medical records, specialist reports, evidence that treatment is available and affordable, and a mitigation plan demonstrating how costs will be privately borne or minimized.
            </p>

            <h2 className="text-3xl font-serif font-bold text-primary mt-12 mb-6">
              Remedies and Options
            </h2>
            <div className="grid md:grid-cols-1 gap-8 mb-8">
              {remedies.map((remedy, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-border">
                  <h3 className="text-xl font-semibold text-primary mb-2">{remedy.title}</h3>
                  <p className="text-muted-foreground">{remedy.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-serif font-bold text-primary mt-12 mb-6">
              How Can We Help
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Addressing medical inadmissibility requires both legal and medical expertise. Counsel can:
            </p>
            <ul className="space-y-4">
              {howWeCanHelp.map((item, index) => (
                <li key={index} className="flex items-start text-lg">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-muted-foreground leading-relaxed mt-8">
              For professional advice and representation in medical inadmissibility matters, contact Our Law Firm that provides comprehensive legal strategies to protect your application and your future in Canada.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}