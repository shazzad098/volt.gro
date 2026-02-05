import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { HeroMedia } from "@/components/home/HeroMedia";
import { StatsSection } from "@/components/home/StatsSection";
import { FeatureSection } from "@/components/home/FeatureSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <HeroMedia />
      <StatsSection />
      <FeatureSection />
      <ServicesSection />
      <TestimonialsSection />
    </Layout>
  );
};

export default Index;