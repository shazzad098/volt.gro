import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import brandIdentityImg from "@/assets/brand-identity.jpg";
import digitalExperienceImg from "@/assets/digital-experience.jpg";
import webDevImg from "@/assets/web-development.jpg";
import digitalMarketingImg from "@/assets/digital-marketing.jpg";

const services = [
  {
    number: "01",
    title: "BRAND IDENTITY",
    description:
      "We create memorable brand identities that resonate with your audience and stand the test of time. From logo design to complete visual systems.",
    image: brandIdentityImg,
    details: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy"],
  },
  {
    number: "02",
    title: "DIGITAL EXPERIENCE",
    description:
      "Crafting seamless digital experiences that engage users and drive results. We focus on user-centered design principles.",
    image: digitalExperienceImg,
    details: ["UX Research", "UI Design", "Prototyping", "Usability Testing"],
  },
  {
    number: "03",
    title: "WEBSITE & DEVELOPMENT",
    description:
      "Building fast, scalable, and beautiful websites using the latest technologies. From simple landing pages to complex web applications.",
    image: webDevImg,
    details: ["Frontend Development", "Backend Development", "CMS Integration", "E-commerce"],
  },
  {
    number: "04",
    title: "DIGITAL MARKETING",
    description:
      "Strategic digital marketing that drives growth. We help you reach your target audience through data-driven campaigns.",
    image: digitalMarketingImg,
    details: ["SEO", "Social Media", "Content Marketing", "PPC Advertising"],
  },
];

const faqs = [
  {
    question: "What is your design process?",
    answer:
      "Our design process involves discovery, research, ideation, prototyping, and iteration. We work closely with clients at every stage to ensure the final product meets their needs.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on scope and complexity. A simple branding project might take 4-6 weeks, while a full website redesign could take 3-6 months.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Yes! We offer maintenance packages and ongoing support for all our projects. We're here to help your business grow long after the initial launch.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We work across various industries including tech, healthcare, finance, retail, and more. Our diverse experience allows us to bring fresh perspectives to every project.",
  },
];

const Services = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm tracking-wider mb-4"
            >
              OUR SERVICES
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-light max-w-4xl"
            >
              We offer comprehensive digital solutions to help your brand thrive in today's
              competitive landscape.
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {services.map((service, index) => (
            <AnimatedSection key={index}>
              <div className="grid md:grid-cols-2 gap-12 mb-32 last:mb-0">
                <div>
                  <p className="text-sm mb-4">{service.number}</p>
                  <h2 className="text-4xl font-light mb-6">{service.title}</h2>
                  <p className="text-gray-600 mb-8">{service.description}</p>
                  <ul className="space-y-2">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-black rounded-full" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-black text-white">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-4xl">
              <h2 className="text-4xl md:text-6xl font-light mb-6">
                READY TO START YOUR PROJECT?
              </h2>
              <p className="text-xl mb-8 text-gray-300">
                Let's discuss how we can help bring your vision to life.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border-b-2 border-white pb-2 hover:gap-4 transition-all"
              >
                GET IN TOUCH <ArrowRight size={20} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-light mb-16">FREQUENTLY ASKED QUESTIONS</h2>
            <div className="max-w-3xl">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full py-6 flex items-center justify-between text-left group"
                  >
                    <span className="text-xl font-light pr-8">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: openFaq === index ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="flex-shrink-0"
                    >
                      <Plus size={24} />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 text-gray-600 leading-relaxed">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Services;