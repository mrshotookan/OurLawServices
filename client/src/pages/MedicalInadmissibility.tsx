import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";

export default function MedicalInadmissibility() {
  return (
    <>
      <SEOHead
        title="Medical Inadmissibility - Canada Immigration"
        description="Information on medical inadmissibility to Canada."
        keywords="medical inadmissibility, canada immigration, health condition"
        canonicalUrl={`${window.location.origin}/inadmissible/medical-inadmissibility`}
      />

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
            <p className="text-xl text-muted-foreground leading-relaxed">
              Content for Medical Inadmissibility will go here.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}