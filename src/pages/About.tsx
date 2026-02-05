import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";
import aboutOffice from "@/assets/about-office.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";

const timeline = [
  { year: "2014", title: "Founded", description: "Started as a small design studio with big dreams." },
  { year: "2016", title: "First Major Client", description: "Landed our first Fortune 500 client." },
  { year: "2018", title: "Global Expansion", description: "Opened offices in London and Singapore." },
  { year: "2020", title: "Digital Pivot", description: "Expanded into full-service digital agency." },
  { year: "2022", title: "100+ Team Members", description: "Grew to over 100 talented professionals." },
  { year: "2024", title: "Award-Winning", description: "Recognized as top agency globally." },
];

const team = [
  { name: "Marcus Chen", role: "Creative Director", image: team1 },
  { name: "Elena Rodriguez", role: "UX Lead", image: team2 },
  { name: "James Wilson", role: "Tech Lead", image: team3 },
  { name: "Sophie Anderson", role: "Strategy Director", image: team4 },
];

const values = [
  { title: "Excellence", description: "We pursue excellence in everything we create." },
  { title: "Innovation", description: "Pushing boundaries with fresh ideas and approaches." },
  { title: "Collaboration", description: "Working together to achieve remarkable results." },
  { title: "Integrity", description: "Building trust through honest partnerships." },
];

const About = () => {
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
            ABOUT US
          </h1>
          <p className="text-muted-foreground max-w-lg text-lg">
            We are a global creative agency crafting digital experiences 
            that inspire and transform brands.
          </p>
        </motion.div>
      </section>

      {/* Office Image */}
      <AnimatedSection className="container-custom pb-16">
        <div className="rounded-2xl overflow-hidden image-zoom">
          <img
            src={aboutOffice}
            alt="Our office"
            className="w-full h-[400px] lg:h-[500px] object-cover"
          />
        </div>
      </AnimatedSection>

      {/* Story */}
      <AnimatedSection className="container-custom py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <h2 className="heading-editorial text-3xl md:text-4xl mb-6">
              OUR STORY
            </h2>
            <p className="text-muted-foreground mb-4">
              Founded in 2014, we started as a small design studio with a vision 
              to create meaningful digital experiences. Over the years, we've grown 
              into a global agency with offices around the world.
            </p>
            <p className="text-muted-foreground">
              Our diverse team of designers, developers, and strategists work 
              together to deliver exceptional results for clients across industries. 
              We believe in the power of design to transform businesses and connect 
              with audiences on a deeper level.
            </p>
          </div>

          {/* Values */}
          <div className="grid grid-cols-2 gap-6">
            {values.map((value) => (
              <div key={value.title} className="p-6 bg-muted rounded-xl">
                <h3 className="font-display font-bold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Timeline */}
      <AnimatedSection className="bg-dark text-dark-foreground py-16 lg:py-24">
        <div className="container-custom">
          <h2 className="heading-editorial text-3xl md:text-4xl mb-12">
            OUR JOURNEY
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border-l border-dark-foreground/20 pl-4"
              >
                <div className="text-accent text-2xl font-display font-bold mb-2">
                  {item.year}
                </div>
                <h4 className="font-display font-semibold mb-1">{item.title}</h4>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Team */}
      <AnimatedSection className="container-custom py-16 lg:py-24">
        <h2 className="heading-editorial text-3xl md:text-4xl mb-12">
          MEET THE TEAM
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="image-zoom rounded-xl overflow-hidden mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-square object-cover"
                />
              </div>
              <h3 className="font-display font-bold">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </Layout>
  );
};

export default About;