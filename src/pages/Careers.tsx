import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Clock, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const jobs = [
  {
    id: 1,
    title: "Senior Product Designer",
    department: "Design",
    location: "New York, NY",
    type: "Full-time",
  },
  {
    id: 2,
    title: "Frontend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
  },
  {
    id: 3,
    title: "UX Researcher",
    department: "Design",
    location: "London, UK",
    type: "Full-time",
  },
  {
    id: 4,
    title: "Project Manager",
    department: "Operations",
    location: "Singapore",
    type: "Full-time",
  },
  {
    id: 5,
    title: "Motion Designer",
    department: "Design",
    location: "Remote",
    type: "Contract",
  },
  {
    id: 6,
    title: "Backend Developer",
    department: "Engineering",
    location: "New York, NY",
    type: "Full-time",
  },
];

const benefits = [
  "Competitive salary & equity",
  "Flexible remote work",
  "Health & wellness benefits",
  "Learning & development budget",
  "Unlimited PTO",
  "Annual team retreats",
];

const Careers = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="container-custom py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="heading-editorial text-5xl md:text-7xl lg:text-8xl mb-6">
            JOIN OUR TEAM
          </h1>
          <p className="text-muted-foreground text-lg">
            We're always looking for talented individuals who are passionate 
            about creating exceptional digital experiences.
          </p>
        </motion.div>
      </section>

      {/* Benefits */}
      <AnimatedSection className="container-custom pb-16">
        <div className="bg-muted rounded-2xl p-8 lg:p-12">
          <h2 className="heading-editorial text-2xl md:text-3xl mb-8">
            WHY WORK WITH US
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Open Positions */}
      <AnimatedSection className="container-custom py-16 lg:py-24">
        <h2 className="heading-editorial text-3xl md:text-4xl mb-12">
          OPEN POSITIONS
        </h2>
        <div className="space-y-4">
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                to={`/careers/${job.id}`}
                className="group flex flex-col md:flex-row md:items-center justify-between p-6 border border-border rounded-xl hover:border-foreground transition-colors"
              >
                <div className="mb-4 md:mb-0">
                  <h3 className="font-display text-xl font-bold group-hover:text-accent transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{job.department}</p>
                </div>

                <div className="flex flex-wrap items-center gap-4 md:gap-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin size={14} />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock size={14} />
                    {job.type}
                  </div>
                  <ArrowRight
                    size={18}
                    className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="bg-dark text-dark-foreground py-16 lg:py-24">
        <div className="container-custom text-center">
          <h2 className="heading-editorial text-3xl md:text-4xl mb-6">
            DON'T SEE YOUR ROLE?
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            We're always interested in meeting talented people. Send us your resume 
            and we'll keep you in mind for future opportunities.
          </p>
          <a
            href="mailto:careers@voltgro.com"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-full font-medium hover:bg-accent/90 transition-colors group"
          >
            <Briefcase size={18} />
            SEND YOUR RESUME
          </a>
        </div>
      </AnimatedSection>
    </Layout>
  );
};

export default Careers;