import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";
import brandIdentityImg from "@/assets/brand-identity.jpg";
import digitalExperienceImg from "@/assets/digital-experience.jpg";
import webDevImg from "@/assets/web-development.jpg";
import digitalMarketingImg from "@/assets/digital-marketing.jpg";

const services = [
  {
    number: "01",
    title: "BRAND IDENTITY",
    description: "By making your digital marketing agency website look professional, you can increase your credibility as a trusted company.",
    image: brandIdentityImg,
  },
  {
    number: "02",
    title: "DIGITAL EXPERIENCE",
    description: "By making your digital marketing agency website look professional, you can increase your credibility as a trusted company.",
    image: digitalExperienceImg,
  },
  {
    number: "03",
    title: "WEBSITE & DEVELOPMENT",
    description: "By making your digital marketing agency website look professional, you can increase your credibility as a trusted company. For the best times agency trusted.",
    image: webDevImg,
  },
  {
    number: "04",
    title: "DIGITAL MARKETING",
    description: "By making your digital marketing agency website look professional, you can increase your credibility as a trusted company.",
    image: digitalMarketingImg,
  },
];

export function ServicesSection() {
  return (
    <AnimatedSection className="bg-dark text-dark-foreground py-16 lg:py-24 mt-16">
      <div className="container-custom">
        {services.map((service, index) => (
          <motion.div
            key={service.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="service-row group grid grid-cols-12 gap-4 py-8 border-b border-dark-foreground/10 cursor-pointer items-center"
          >
            {/* Number */}
            <div className="col-span-2 md:col-span-1">
              <span className="text-muted-foreground text-sm">{service.number}</span>
            </div>

            {/* Title */}
            <div className="col-span-10 md:col-span-4">
              <h3 className="font-display text-xl md:text-2xl font-bold group-hover:text-accent transition-colors">
                {service.title}
              </h3>
            </div>

            {/* Description */}
            <div className="col-span-12 md:col-span-5 mt-2 md:mt-0">
              <p className="text-sm text-muted-foreground">
                {service.description}
              </p>
            </div>

            {/* Image */}
            <div className="col-span-12 md:col-span-2 mt-4 md:mt-0 flex justify-end">
              <div className="w-24 h-16 rounded-lg overflow-hidden image-zoom">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
}