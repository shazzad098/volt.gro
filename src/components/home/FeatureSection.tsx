import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import verticalPoster from "@/assets/vertical-poster.jpg";

export function FeatureSection() {
  return (
    <AnimatedSection className="container-custom py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden">
        {/* Left - Feature Block */}
        <div className="bg-feature text-feature-foreground p-10 lg:p-16 flex flex-col justify-between min-h-[400px] lg:min-h-[500px]">
          <div>
            <h2 className="heading-editorial text-2xl md:text-3xl lg:text-4xl leading-tight mb-8">
              WE DESIGN AND
              <br />
              DEVELOP
              <br />
              DIGITAL PRODUCTS
              <br />
              & SERVICES
              <br />
              CREATE WORLD-
              <br />
              CLASS.
            </h2>
          </div>
          
          <Link
            to="/services"
            className="inline-flex items-center gap-2 border border-feature-foreground text-feature-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:bg-feature-foreground hover:text-feature transition-colors w-fit group"
          >
            GET STARTED
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Right - Image */}
        <div className="image-zoom">
          <img
            src={verticalPoster}
            alt="Magazine cover design"
            className="w-full h-full min-h-[400px] lg:min-h-[500px] object-cover"
          />
        </div>
      </div>
    </AnimatedSection>
  );
}