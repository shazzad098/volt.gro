import { AnimatedSection } from "@/components/ui/AnimatedSection";
import magazineImg from "@/assets/magazine-lifestyle.jpg";

const stats = [
  { value: "12+", label: "Years of Services" },
  { value: "80+", label: "Team Members" },
  { value: "3K+", label: "Happy Clients" },
];

export function StatsSection() {
  return (
    <AnimatedSection className="container-custom py-16 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Content */}
        <div>
          <h2 className="heading-editorial text-3xl md:text-4xl lg:text-5xl mb-8">
            WE ARE A
            <br />
            GLOBAL AGENCY
          </h2>
          
          <div className="space-y-6 mb-10">
            <p className="text-sm text-muted-foreground max-w-sm">
              By making your digital marketing agency website look professional, 
              you can increase your credibility as a trusted company.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center lg:text-left">
                <div className="font-display text-3xl md:text-4xl font-bold mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="image-zoom rounded-2xl overflow-hidden">
          <img
            src={magazineImg}
            alt="Cereal magazine lifestyle"
            className="w-full h-80 lg:h-[400px] object-cover"
          />
        </div>
      </div>
    </AnimatedSection>
  );
}