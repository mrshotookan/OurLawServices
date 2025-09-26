import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";

export default function TemporaryResidentPermits() {
  return (
    <>
      <SEOHead
        title="Temporary Resident Permits - Canada Immigration"
        description="Information on Temporary Resident Permits in Canada."
        keywords="temporary resident permit, canada immigration, trp"
        canonicalUrl={`${window.location.origin}/inadmissible/temporary-resident-permits`}
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
              Temporary Resident Permits
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Content for Temporary Resident Permits will go here.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}