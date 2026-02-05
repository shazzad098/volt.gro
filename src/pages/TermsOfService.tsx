import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";
import { FileText, Scale, AlertCircle, CreditCard, Truck, RefreshCw, MessageSquare } from "lucide-react";

const termsSections = [
  {
    icon: FileText,
    title: "Acceptance of Terms",
    content: `By accessing and using the VOLT.GRO website and services, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use our services.
    
    These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and contributors of content.`
  },
  {
    icon: Scale,
    title: "Use License",
    content: `Permission is granted to temporarily access the materials (information or software) on VOLT.GRO's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
    
    • Modify or copy the materials
    • Use the materials for any commercial purpose
    • Attempt to decompile or reverse engineer any software
    • Remove any copyright or other proprietary notations
    • Transfer the materials to another person`
  },
  {
    icon: CreditCard,
    title: "Payment Terms",
    content: `All prices displayed on our website are in USD unless otherwise stated. We accept major credit cards, debit cards, and other payment methods as displayed during checkout.
    
    • Prices are subject to change without notice
    • Payment is required in full before order processing
    • All transactions are processed through secure payment gateways
    • You agree to provide current, complete, and accurate purchase information`
  },
  {
    icon: Truck,
    title: "Shipping & Delivery",
    content: `We aim to process and ship orders within 1-3 business days. Delivery times vary based on location and shipping method selected.
    
    • Standard shipping: 5-7 business days
    • Express shipping: 2-3 business days
    • International shipping: 7-14 business days
    
    VOLT.GRO is not responsible for delays caused by customs, weather, or other factors beyond our control.`
  },
  {
    icon: RefreshCw,
    title: "Returns & Refunds",
    content: `We want you to be completely satisfied with your purchase. If you're not happy with your order, you may return it within 30 days of delivery for a full refund.
    
    • Items must be unused and in original packaging
    • Return shipping costs are the customer's responsibility
    • Refunds are processed within 5-7 business days
    • Custom or personalized items are non-refundable`
  },
  {
    icon: AlertCircle,
    title: "Limitation of Liability",
    content: `VOLT.GRO shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
    
    In no event shall our liability exceed the amount paid by you for the product or service that gave rise to the claim.`
  },
  {
    icon: MessageSquare,
    title: "Contact Information",
    content: `Questions about the Terms of Service should be sent to us at:
    
    • Email: legal@volt.gro
    • Phone: +1 (555) 123-4567
    • Address: 123 Creative Street, Design District, NY 10001
    
    We will respond to all inquiries within 48 business hours.`
  }
];

const TermsOfService = () => {
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
            <Scale className="w-8 h-8 text-accent" />
          </div>
          <h1 className="heading-editorial text-4xl md:text-5xl lg:text-6xl mb-6">
            Terms of Service
          </h1>
          <p className="text-lg text-muted-foreground">
            Please read these terms carefully before using our services. By using VOLT.GRO, you agree to these terms.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Last updated: February 5, 2026
          </p>
        </motion.div>
      </section>

      {/* Content Section */}
      <AnimatedSection className="container-custom pb-16 lg:pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="bg-accent/5 rounded-2xl p-6 md:p-8 mb-12">
            <h2 className="heading-editorial text-2xl mb-4">Agreement Overview</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms of Service ("Terms") govern your use of the VOLT.GRO website and services. By accessing or using our services, you agree to be bound by these Terms. We reserve the right to update these Terms at any time, and your continued use of our services constitutes acceptance of any changes.
            </p>
          </div>

          <div className="space-y-8">
            {termsSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-background border border-border rounded-2xl p-6 md:p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="heading-editorial text-xl mb-3">{section.title}</h3>
                    <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Agreement Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-12 text-center p-8 bg-dark text-dark-foreground rounded-2xl"
          >
            <p className="text-muted-foreground">
              By using VOLT.GRO services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </motion.div>
        </div>
      </AnimatedSection>
    </Layout>
  );
};

export default TermsOfService;
