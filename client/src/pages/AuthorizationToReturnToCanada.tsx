import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";

export default function AuthorizationToReturnToCanada() {
  return (
    <>
      <SEOHead
        title="Authorization to Return to Canada - Canada Immigration"
        description="Information on Authorization to Return to Canada (ARC)."
        keywords="authorization to return to canada, arc, canada immigration"
        canonicalUrl={`${window.location.origin}/inadmissible/authorization-to-return-to-canada`}
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
              Authorization to Return to Canada
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Content for Authorization to Return to Canada will go here.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}