import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";

export default function MisrepresentationInCanadianImmigration() {
  return (
    <>
      <SEOHead
        title="Misrepresentation in Canadian Immigration - Canada Immigration"
        description="Information on Misrepresentation in Canadian Immigration."
        keywords="misrepresentation, canada immigration, false information"
        canonicalUrl={`${window.location.origin}/inadmissible/misrepresentation-in-canadian-immigration`}
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
              Misrepresentation in Canadian Immigration
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Content for Misrepresentation in Canadian Immigration will go here.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}