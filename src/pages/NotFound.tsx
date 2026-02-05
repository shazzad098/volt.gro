import { useLocation, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  return (
    <Layout>
      <section className="container-custom py-24 lg:py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="heading-editorial text-8xl md:text-9xl mb-6">404</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Oops! The page "{location.pathname}" doesn't exist.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            BACK TO HOME
          </Link>
        </motion.div>
      </section>
    </Layout>
  );
};

export default NotFound;
