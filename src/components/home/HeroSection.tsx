import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="container-custom py-12 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
        {/* Left - Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="heading-editorial text-5xl md:text-7xl lg:text-8xl">
            TIMELESS
            <br />
            DESIGN SOLUTION
          </h1>
        </motion.div>

        {/* Right - Description & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="lg:pt-4"
        >
          <p className="text-muted-foreground text-sm md:text-base max-w-md mb-6">
            By making your digital marketing agency website look professional, 
            you can increase your credibility as a trusted company.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-full text-sm font-medium hover:bg-accent/90 transition-colors group"
          >
            LET'S CHAT
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}