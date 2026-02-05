import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, Database, UserCheck, Bell } from "lucide-react";

const privacySections = [
    {
        icon: Database,
        title: "Information We Collect",
        content: `We collect information you provide directly to us, such as when you create an account, make a purchase, subscribe to our newsletter, or contact us for support. This may include:
    
    • Personal identification information (name, email address, phone number)
    • Billing and payment information
    • Shipping address
    • Communication preferences
    • Any other information you choose to provide`
    },
    {
        icon: Eye,
        title: "How We Use Your Information",
        content: `We use the information we collect to:
    
    • Process and fulfill your orders
    • Send you order confirmations and updates
    • Respond to your comments, questions, and requests
    • Send promotional communications (with your consent)
    • Analyze usage patterns to improve our services
    • Detect, investigate, and prevent fraudulent transactions`
    },
    {
        icon: Lock,
        title: "Information Security",
        content: `We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
    
    • SSL/TLS encryption for data transmission
    • Secure storage with access controls
    • Regular security assessments
    • Employee training on data protection`
    },
    {
        icon: UserCheck,
        title: "Your Rights",
        content: `You have the right to:
    
    • Access and receive a copy of your personal data
    • Rectify inaccurate personal data
    • Request deletion of your personal data
    • Object to processing of your personal data
    • Data portability
    • Withdraw consent at any time`
    },
    {
        icon: Bell,
        title: "Cookies and Tracking",
        content: `We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.`
    },
    {
        icon: Shield,
        title: "Contact Us",
        content: `If you have any questions about this Privacy Policy, please contact us:
    
    • Email: privacy@volt.gro
    • Phone: +1 (555) 123-4567
    • Address: 123 Creative Street, Design District, NY 10001`
    }
];

const PrivacyPolicy = () => {
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
                        <Shield className="w-8 h-8 text-accent" />
                    </div>
                    <h1 className="heading-editorial text-4xl md:text-5xl lg:text-6xl mb-6">
                        Privacy Policy
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        Your privacy is important to us. This policy outlines how we collect, use, and protect your personal information.
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
                        <h2 className="heading-editorial text-2xl mb-4">Overview</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            At VOLT.GRO, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, make purchases, or use our services.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {privacySections.map((section, index) => (
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
                </div>
            </AnimatedSection>
        </Layout>
    );
};

export default PrivacyPolicy;
