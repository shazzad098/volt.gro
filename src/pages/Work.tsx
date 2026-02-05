import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

const projects = [
  {
    id: 1,
    title: "Fveill Dashboard",
    category: "Web Development",
    year: "2024",
    image: project1,
  },
  {
    id: 2,
    title: "Mandils Banking App",
    category: "Mobile Design",
    year: "2024",
    image: project2,
  },
  {
    id: 3,
    title: "Joleniser Cosmetics",
    category: "Brand Identity",
    year: "2023",
    image: project3,
  },
  {
    id: 4,
    title: "TruFerics Restaurant",
    category: "UI/UX Design",
    year: "2023",
    image: project4,
  },
  {
    id: 5,
    title: "Respiter Real Estate",
    category: "Web Development",
    year: "2023",
    image: project5,
  },
  {
    id: 6,
    title: "Fashion Crunch",
    category: "E-commerce",
    year: "2022",
    image: project6,
  },
];

const Work = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="container-custom py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="heading-editorial text-5xl md:text-7xl lg:text-8xl mb-6">
            OUR WORK
          </h1>
          <p className="text-muted-foreground max-w-lg">
            Explore our portfolio of award-winning projects that have helped brands 
            stand out and achieve their goals.
          </p>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <AnimatedSection className="container-custom pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={`/work/${project.id}`} className="group block">
                <div className="image-zoom rounded-2xl overflow-hidden mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-display text-xl font-bold link-underline inline-block">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {project.category}
                    </p>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {project.year}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </Layout>
  );
};

export default Work;