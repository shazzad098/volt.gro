import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";
import { 
  ShoppingBag, 
  Upload, 
  MessageSquare, 
  CreditCard, 
  Truck, 
  CheckCircle,
  ArrowRight,
  Image,
  FileText,
  Palette,
  Box,
  Zap
} from "lucide-react";

const orderSteps = [
  {
    step: 1,
    icon: ShoppingBag,
    title: "Choose Your Service",
    description: "Select from our range of creative services including design, branding, and digital solutions."
  },
  {
    step: 2,
    icon: Upload,
    title: "Upload Requirements",
    description: "Share your project details, reference materials, and any specific requirements."
  },
  {
    step: 3,
    icon: MessageSquare,
    title: "Consultation",
    description: "Our team will review your requirements and discuss the project scope with you."
  },
  {
    step: 4,
    icon: CreditCard,
    title: "Secure Payment",
    description: "Complete your order with our secure payment gateway. Multiple payment options available."
  },
  {
    step: 5,
    icon: Zap,
    title: "Production",
    description: "Our creative team starts working on your project with regular updates."
  },
  {
    step: 6,
    icon: Truck,
    title: "Delivery",
    description: "Receive your completed project files and assets digitally or physically shipped."
  }
];

const services = [
  {
    icon: Palette,
    name: "Brand Identity",
    description: "Complete branding package including logo, colors, and guidelines",
    price: "Starting at $999",
    features: ["Logo Design", "Color Palette", "Typography", "Brand Guidelines", "Stationery Design"]
  },
  {
    icon: Image,
    name: "Graphic Design",
    description: "Custom graphics for digital and print media",
    price: "Starting at $149",
    features: ["Social Media Graphics", "Banners & Ads", "Illustrations", "Infographics", "Print Materials"]
  },
  {
    icon: FileText,
    name: "Editorial Design",
    description: "Magazine, catalog, and publication design",
    price: "Starting at $499",
    features: ["Magazine Layout", "Catalog Design", "Book Design", "Annual Reports", "Newsletters"]
  },
  {
    icon: Box,
    name: "Packaging Design",
    description: "Eye-catching packaging solutions for your products",
    price: "Starting at $349",
    features: ["Product Packaging", "Label Design", "Box Design", "Shopping Bags", "Unboxing Experience"]
  }
];

const OrderOnline = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Order submitted:", { selectedService, formData });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="container-custom py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
            <ShoppingBag className="w-8 h-8 text-accent" />
          </div>
          <h1 className="heading-editorial text-4xl md:text-5xl lg:text-6xl mb-6">
            Order Online
          </h1>
          <p className="text-lg text-muted-foreground">
            Get started with your creative project today. Choose a service, share your requirements, and let us bring your vision to life.
          </p>
        </motion.div>
      </section>

      {/* How It Works */}
      <AnimatedSection className="bg-accent/5 py-16 lg:py-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-editorial text-3xl md:text-4xl mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our streamlined process makes ordering creative services simple and efficient
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {orderSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="relative bg-background rounded-2xl p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent text-accent-foreground rounded-xl flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
                {index < orderSteps.length - 1 && index % 3 !== 2 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-accent/30" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Services */}
      <AnimatedSection className="container-custom py-16 lg:py-24">
        <div className="text-center mb-12">
          <h2 className="heading-editorial text-3xl md:text-4xl mb-4">Choose Your Service</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Select a service package that fits your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              onClick={() => setSelectedService(service.name)}
              className={`cursor-pointer rounded-2xl p-6 md:p-8 border-2 transition-all hover:shadow-xl ${
                selectedService === service.name
                  ? "border-accent bg-accent/5"
                  : "border-border hover:border-accent/50"
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center">
                  <service.icon className="w-7 h-7 text-accent" />
                </div>
                {selectedService === service.name && (
                  <CheckCircle className="w-6 h-6 text-accent" />
                )}
              </div>
              <h3 className="heading-editorial text-xl mb-2">{service.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
              <p className="font-display font-bold text-lg text-accent mb-4">{service.price}</p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* Order Form */}
      <AnimatedSection className="bg-dark text-dark-foreground py-16 lg:py-24">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="heading-editorial text-3xl md:text-4xl mb-4">Start Your Order</h2>
            <p className="text-muted-foreground">
              Fill in your details and we'll get back to you within 24 hours
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-dark-foreground/10 border border-dark-foreground/20 rounded-xl px-4 py-3 text-dark-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-dark-foreground/10 border border-dark-foreground/20 rounded-xl px-4 py-3 text-dark-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-dark-foreground/10 border border-dark-foreground/20 rounded-xl px-4 py-3 text-dark-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Company Name</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full bg-dark-foreground/10 border border-dark-foreground/20 rounded-xl px-4 py-3 text-dark-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Your Company"
                />
              </div>
            </div>

            {selectedService && (
              <div className="bg-accent/10 rounded-xl p-4 flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm">Selected Service: <strong>{selectedService}</strong></span>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium mb-2">Project Details *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full bg-dark-foreground/10 border border-dark-foreground/20 rounded-xl px-4 py-3 text-dark-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                placeholder="Tell us about your project, timeline, and any specific requirements..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-accent text-accent-foreground rounded-full py-4 font-display font-semibold hover:bg-accent/90 transition-colors flex items-center justify-center gap-2"
            >
              Submit Order Request
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </AnimatedSection>
    </Layout>
  );
};

export default OrderOnline;
